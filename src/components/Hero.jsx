import { Component, lazy, Suspense, useEffect, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, MotionConfig, useReducedMotionConfig } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { EASE } from "./motion/constants";
import { scrollToTarget } from "../lib/scroll";
import cx from "../lib/cx";
import CubeFallback from "./hero/CubeFallback";
import { stageEnabled } from "./hero/stage";

/* One import specifier, one chunk: warmed early by `loadHeroCube()`, rendered through `lazy`. */
const loadHeroCube = () => import("./hero/HeroCube");
const HeroCube = lazy(loadHeroCube);

// PascalCase aliases: the project ESLint config only counts these as a use of `motion`.
const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionUl = motion.ul;
const MotionSpan = motion.span;

const WORDS = ["ship.", "scale.", "matter."];
const WORD_INTERVAL_MS = 2400;
const DISCIPLINES = ["Web", "Mobile", "AI", "Cloud"];
const PRELOADER_EVENT = "dg:preloader-done";

/** Entrance: fade + rise, delayed by `custom` x 0.1s. */
const rise = {
    hidden: { opacity: 0, y: 24 },
    show: (order = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE, delay: order * 0.1 },
    }),
};

/** Entrance for decorative pieces: opacity only, delayed by `custom` seconds. */
const fade = {
    hidden: { opacity: 0 },
    show: (delay = 0) => ({ opacity: 1, transition: { duration: 0.9, ease: EASE, delay } }),
};

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function subscribeVisibility(onChange) {
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
}

function readVisible() {
    return document.visibilityState !== "hidden";
}

/** False while the tab is in the background. */
function usePageVisible() {
    return useSyncExternalStore(subscribeVisibility, readVisible, () => true);
}

/**
 * True once the entrance may start. Checked from a passive effect so the Preloader,
 * which flags <html data-preloading="1"> in its own layout effect, is seen when mounted
 * in the same commit. With no preloader the sequence starts on the next frame.
 */
function usePreloaderDone() {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const start = () => setDone(true);
        if (document.documentElement.dataset.preloading === "1") {
            window.addEventListener(PRELOADER_EVENT, start, { once: true });
            return () => window.removeEventListener(PRELOADER_EVENT, start);
        }
        const frame = window.requestAnimationFrame(start);
        return () => window.cancelAnimationFrame(frame);
    }, []);

    return done;
}

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

/**
 * Cycles through WORDS. Every word is laid out invisibly in the same grid cell so the
 * headline never shifts width. Under reduced motion or in a background tab it settles
 * on the last word; `active` holds the cycle until the entrance has started.
 */
function RotatingWord({ active, className }) {
    const reduced = Boolean(useReducedMotionConfig());
    const visible = usePageVisible();
    const paused = reduced || !visible;
    const cycling = active && !paused;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!cycling) return undefined;
        const id = window.setInterval(() => setIndex((i) => (i + 1) % WORDS.length), WORD_INTERVAL_MS);
        return () => window.clearInterval(id);
    }, [cycling]);

    const word = paused ? WORDS[WORDS.length - 1] : WORDS[index];

    return (
        <span className={cx("inline-grid", className)}>
            {WORDS.map((w) => (
                <span key={w} aria-hidden="true" className="invisible col-start-1 row-start-1">
                    {w}
                </span>
            ))}
            <AnimatePresence initial={false}>
                <MotionSpan
                    key={word}
                    className="col-start-1 row-start-1"
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: EASE }}
                >
                    {word}
                </MotionSpan>
            </AnimatePresence>
        </span>
    );
}

/**
 * Bottom-left "Scroll" cue: mono label over a static 24px hairline.
 * Only from lg up, where the section is one viewport tall and the cue sits at the fold.
 */
function ScrollCue() {
    return (
        <Container className="pointer-events-none absolute inset-x-0 bottom-5 hidden lg:[@media(min-height:880px)]:block">
            <MotionDiv aria-hidden="true" custom={0.6} variants={fade} className="flex flex-col items-start gap-2">
                <span className="type-eyebrow text-muted-dark">Scroll</span>
                <span aria-hidden="true" className="block h-6 w-px bg-muted-dark opacity-60" />
            </MotionDiv>
        </Container>
    );
}

/** If the three.js chunk fails to load, show the SVG instead of unmounting the page. */
class CubeBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { failed: false };
    }

    static getDerivedStateFromError() {
        return { failed: true };
    }

    render() {
        return this.state.failed ? this.props.fallback : this.props.children;
    }
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroContent({ onBookClick }) {
    const reduced = Boolean(useReducedMotionConfig());
    const ready = usePreloaderDone();
    /* On fine-pointer desktops the cube lives on the fixed CubeStage overlay (mounted by
       Home): it assembles behind the preloader, glides into this column's empty square and
       later drifts with the scroll. Everywhere else it renders in-flow here as before; the
       SVG stands in under reduced motion, without WebGL, or while the chunk loads. */
    const [stageOn] = useState(() => stageEnabled());
    const wantsCube = !reduced && !stageOn;
    const cubeClass = "h-full w-full";

    // Fetch the chunk right away so it is cached by the time the entrance starts;
    // the canvas itself mounts with the entrance so its assembly is not spent behind the preloader.
    useEffect(() => {
        if (reduced) return;
        loadHeroCube().catch(() => {});
    }, [reduced]);

    const fallback = <CubeFallback className={cubeClass} />;

    return (
        <MotionSection
            aria-labelledby="hero-title"
            initial={reduced ? "show" : "hidden"}
            animate={ready || reduced ? "show" : "hidden"}
            className="band-dark relative flex items-center overflow-hidden border-b border-line-dark pt-28 pb-16 md:pt-32 md:pb-20 lg:min-h-[100svh] lg:pb-24 desk-short:pt-24 desk-short:pb-14"
        >
            <Container className="grid gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="flex flex-col items-start gap-5 md:gap-8 desk-short:gap-6">
                    <MotionDiv custom={0} variants={rise}>
                        <Link
                            to="/case-studies"
                            className="group relative inline-flex items-center gap-2 rounded-full border border-line-dark bg-ink-2 px-3.5 py-1.5 type-eyebrow text-muted-dark transition-colors duration-300 before:absolute before:inset-x-0 before:-inset-y-2.5 hover:border-muted-dark hover:text-paper"
                        >
                            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
                            <span>Now scoping new projects</span>
                            <ChevronRight
                                size={12}
                                aria-hidden="true"
                                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </MotionDiv>

                    <MotionH1
                        id="hero-title"
                        custom={1}
                        variants={rise}
                        className="type-display text-5xl leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.25rem] desk-short:text-[4.75rem]"
                    >
                        <span className="sr-only">Engineering MVPs that matter.</span>
                        <span aria-hidden="true">
                            Engineering MVPs that
                            <br />
                            <RotatingWord active={ready} className="italic text-accent-bright" />
                        </span>
                    </MotionH1>

                    <MotionP custom={2} variants={rise} className="max-w-[48ch] text-lg leading-relaxed text-muted-dark md:text-xl">
                        Product engineering for founders and growing businesses. Scoped in a week, shipped in weeks, built
                        to grow.
                    </MotionP>

                    {/* One booking CTA per viewport: the Navbar's "Book a call" from lg up, the
                        ghost button here below lg where that navbar button is hidden. */}
                    <MotionDiv
                        custom={3}
                        variants={rise}
                        className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
                    >
                        <Button
                            variant="accent"
                            tone="dark"
                            size="lg"
                            arrow
                            className="w-full sm:w-auto"
                            onClick={() => scrollToTarget("#contact")}
                        >
                            Start a project
                        </Button>
                        <Button
                            variant="ghost"
                            tone="dark"
                            size="lg"
                            className="w-full sm:w-auto lg:hidden"
                            onClick={onBookClick}
                        >
                            Book a 30-min call
                        </Button>
                    </MotionDiv>

                    <MotionUl
                        custom={4}
                        variants={rise}
                        className="flex flex-wrap items-center gap-x-3 gap-y-2 type-eyebrow text-muted-dark"
                    >
                        {DISCIPLINES.map((item, i) => (
                            <li key={item} className="flex items-center gap-3">
                                {i > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-dark/60" />}
                                {item}
                            </li>
                        ))}
                    </MotionUl>
                </div>

                <MotionDiv
                    aria-hidden="true"
                    custom={0.2}
                    variants={fade}
                    className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[560px] desk-short:max-w-[400px]"
                >
                    <div className="relative h-full w-full">
                        {stageOn ? (
                            <div data-cube-dock="hero" className="h-full w-full" />
                        ) : wantsCube && ready ? (
                            <CubeBoundary fallback={fallback}>
                                <Suspense fallback={fallback}>
                                    <HeroCube className={cubeClass} />
                                </Suspense>
                            </CubeBoundary>
                        ) : (
                            fallback
                        )}
                    </div>
                </MotionDiv>
            </Container>

            <ScrollCue />
        </MotionSection>
    );
}

/**
 * Homepage hero. Wrapped in its own MotionConfig so reduced motion is honoured
 * (transforms dropped, entrance skipped) even before the root provider is wired.
 */
export default function Hero({ onBookClick }) {
    return (
        <MotionConfig reducedMotion="user">
            <HeroContent onBookClick={onBookClick} />
        </MotionConfig>
    );
}
