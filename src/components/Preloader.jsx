import { Component, useCallback, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./motion/constants";
import { ASSEMBLED_EVENT, stageEnabled } from "./hero/stage";
import logo from "../assets/footerLogo-removebg-preview.png";

// Aliased once at module scope: the project ESLint config does not count `<motion.x>`
// member expressions as a use of `motion`, PascalCase identifiers it does.
const MotionDiv = motion.div;
const MotionImg = motion.img;
const MotionLine = motion.line;
const MotionSpan = motion.span;

/**
 * One-second first-visit preloader: logo — hairline — wordmark, the line draws,
 * then the curtain lifts. Runs once per tab (sessionStorage "dg:preloaded") and
 * never under prefers-reduced-motion.
 *
 * Page contract while it is on screen:
 *   <html data-preloading="1" class="lenis-stopped">, body overflow hidden, and
 *   wheel/touchmove swallowed at the window in the capture phase so Lenis never
 *   moves the page underneath (Lenis mounts in a passive effect, after this
 *   component's layout effect, and its constructor strips every `lenis-*` class).
 * When it leaves it clears those, writes the session flag and dispatches
 * `window` CustomEvent "dg:preloader-done". Anything that wants to wait for it
 * should check `document.documentElement.dataset.preloading === "1"` first and
 * only then listen for the event — on repeat visits nothing is dispatched.
 */

const STORAGE_KEY = "dg:preloaded";
const DONE_EVENT = "dg:preloader-done";

const LINE_DURATION = 0.9;
const WORD_DELAY = 0.55;
const WORD_DURATION = 0.45;
const EXIT_AT_MS = 1150;
const EXIT_DURATION = 0.7;
const HARD_TIMEOUT_MS = 3000;

/* With the cube stage (desktop): the entrance assembly IS the loading animation, so the
   curtain holds for the assembled event — never less than the minimum beat, never past
   the cap (a slow three.js chunk must not hold the page hostage). */
const CUBE_MIN_SHOW_MS = 1400;
const CUBE_CAP_MS = 2600;
const CUBE_HARD_TIMEOUT_MS = 3600;

/** Scroll input Lenis listens for on `window` (bubble phase, passive: false). */
const GUARDED_EVENTS = ["wheel", "touchmove"];
const GUARD_OPTIONS = { capture: true, passive: false };

function swallowScrollInput(event) {
    if (event.cancelable) event.preventDefault();
    event.stopImmediatePropagation();
}

function readSessionFlag() {
    try {
        return window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
        return false;
    }
}

function writeSessionFlag() {
    try {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
        // Private mode or storage disabled: the preloader simply runs again next load.
    }
}

function prefersReducedMotion() {
    try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
        return false;
    }
}

/** Decided once, before first paint. */
function shouldRun() {
    if (typeof window === "undefined" || typeof document === "undefined") return false;
    if (readSessionFlag()) return false;
    if (prefersReducedMotion()) return false;
    return true;
}

/** Catches a render error inside the overlay so the page is never left locked behind it. */
class PreloaderBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { failed: false };
    }

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch() {
        this.props.onError();
    }

    render() {
        return this.state.failed ? null : this.props.children;
    }
}

export default function Preloader() {
    const [enabled] = useState(shouldRun);
    const [withCube] = useState(() => stageEnabled());
    const [visible, setVisible] = useState(true);
    const [killed, setKilled] = useState(false);

    const doneRef = useRef(false);
    const assembledCleanupRef = useRef(null);
    const stoppedLenisRef = useRef(false);
    const bodyOverflowRef = useRef("");
    const timersRef = useRef([]);

    const clearTimers = useCallback(() => {
        timersRef.current.forEach((id) => window.clearTimeout(id));
        timersRef.current = [];
    }, []);

    const lock = useCallback(() => {
        const root = document.documentElement;
        root.dataset.preloading = "1";
        root.classList.add("lenis-stopped");
        bodyOverflowRef.current = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        GUARDED_EVENTS.forEach((type) => window.addEventListener(type, swallowScrollInput, GUARD_OPTIONS));
        try {
            const lenis = window.__lenis;
            if (lenis && !lenis.isStopped) {
                lenis.stop();
                stoppedLenisRef.current = true;
            }
        } catch {
            stoppedLenisRef.current = false;
        }
    }, []);

    const unlock = useCallback(() => {
        const root = document.documentElement;
        delete root.dataset.preloading;
        root.classList.remove("lenis-stopped");
        document.body.style.overflow = bodyOverflowRef.current;
        GUARDED_EVENTS.forEach((type) => window.removeEventListener(type, swallowScrollInput, GUARD_OPTIONS));
        try {
            if (stoppedLenisRef.current && window.__lenis) window.__lenis.start();
        } catch {
            // Lenis may already be torn down; the class removal above is enough.
        }
        stoppedLenisRef.current = false;
    }, []);

    /** Idempotent: release the page, remember the visit, tell the hero to go. Never throws. */
    const finish = useCallback(() => {
        if (doneRef.current) return;
        doneRef.current = true;
        clearTimers();
        try {
            unlock();
        } catch {
            // A failed cleanup step must not surface from a timer or leave the rest undone.
        }
        writeSessionFlag();
        try {
            window.dispatchEvent(new CustomEvent(DONE_EVENT));
        } catch {
            // Nothing left to do; the page is already unlocked.
        }
        setKilled(true);
    }, [clearTimers, unlock]);

    useLayoutEffect(() => {
        if (!enabled) {
            writeSessionFlag();
            return undefined;
        }
        try {
            lock();
            if (withCube) {
                const startedAt = performance.now();
                const exit = () => setVisible(false);
                const onAssembled = () => {
                    const wait = Math.max(0, CUBE_MIN_SHOW_MS - (performance.now() - startedAt));
                    timersRef.current.push(window.setTimeout(exit, wait));
                };
                window.addEventListener(ASSEMBLED_EVENT, onAssembled, { once: true });
                assembledCleanupRef.current = () => window.removeEventListener(ASSEMBLED_EVENT, onAssembled);
                timersRef.current = [
                    window.setTimeout(exit, CUBE_CAP_MS),
                    window.setTimeout(finish, CUBE_HARD_TIMEOUT_MS),
                ];
            } else {
                timersRef.current = [
                    window.setTimeout(() => setVisible(false), EXIT_AT_MS),
                    window.setTimeout(finish, HARD_TIMEOUT_MS),
                ];
            }
        } catch {
            timersRef.current.push(window.setTimeout(finish, 0));
        }
        return () => {
            clearTimers();
            assembledCleanupRef.current?.();
            assembledCleanupRef.current = null;
            if (!doneRef.current) unlock();
        };
    }, [enabled, withCube, lock, unlock, finish, clearTimers]);

    if (!enabled || killed) return null;

    return (
        <PreloaderBoundary onError={finish}>
            <AnimatePresence onExitComplete={finish}>
                {visible && (
                    <MotionDiv
                        key="dg-preloader"
                        role="status"
                        aria-label="Loading DevGrowth Solutions"
                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink px-6 will-change-transform"
                        exit={{ y: "-100%" }}
                        transition={{ duration: EXIT_DURATION, ease: EASE }}
                    >
                        {/* With the cube assembling centre-screen above the curtain, the
                            wordmark steps down into the lower third instead of colliding. */}
                        <div className={"flex items-center gap-4 sm:gap-6" + (withCube ? " translate-y-[27vh]" : "")}>
                            <MotionImg
                                src={logo}
                                alt=""
                                width={301}
                                height={192}
                                draggable={false}
                                fetchPriority="high"
                                className="h-10 w-auto shrink-0 select-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.35, ease: EASE }}
                            />
                            <svg aria-hidden="true" className="h-px w-20 shrink-0 text-paper sm:w-40">
                                <MotionLine
                                    x1="0"
                                    y1="0.5"
                                    x2="100%"
                                    y2="0.5"
                                    stroke="currentColor"
                                    strokeOpacity={0.6}
                                    strokeWidth={1}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: LINE_DURATION, ease: EASE }}
                                />
                            </svg>
                            <MotionSpan
                                className="type-display whitespace-nowrap text-2xl text-paper sm:text-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: WORD_DURATION, ease: EASE, delay: WORD_DELAY }}
                            >
                                DevGrowth
                            </MotionSpan>
                        </div>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </PreloaderBoundary>
    );
}
