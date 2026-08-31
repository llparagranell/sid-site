import { Suspense, lazy, useEffect, useRef, useState } from "react";
import CubeFallback from "./CubeFallback";
import { PRELOADING_FLAG, stagePose } from "./stage";

const HeroCube = lazy(() => import("./HeroCube"));

/**
 * The cube's stage: one fixed box, sized once to the hero slot and only ever
 * TRANSLATED — never CSS-scaled. The cube grows and shrinks inside the 3D scene
 * instead (stagePose.zoom, read by HeroCube's render loop), so it stays pixel-crisp
 * at every size and the renderer's element measurements are never disturbed.
 *
 * Docking model: sections that can host the cube reserve an empty square in their
 * own layout and mark it [data-cube-dock] (the hero's is data-cube-dock="hero").
 * Every frame the dock whose centre sits nearest the viewport's centre is active,
 * and the cube glides to it with damped motion — so on scroll it travels from one
 * reserved spot to the next instead of buzzing over the content. With no dock
 * near (past the last one, or every dock hidden at this width) it fades out.
 *
 *   loading — while the preloader curtain is up the box floats centre-screen ABOVE
 *             the curtain (z-110): the entrance assembly IS the loading animation.
 *   hero    — glued to the hero dock at full size; drag stays live there.
 *   dock    — centred on the active dock, scaled so the cube visually fills it.
 *
 * Imperative rAF loop, transform/opacity writes only, no per-frame React state.
 * Mounted only when stage.js#stageEnabled() said yes; elsewhere Hero renders the
 * cube in-flow exactly as before and the docks are just invisible empty squares.
 */

const CUBE_FILL = 0.62; // fraction of the canvas the cube itself spans at rest
const DOCK_RANGE = 1.15; // in viewport-heights: how far a dock may be and still hold the cube
const LOAD_MAX = 400;
const BASE_FALLBACK = 380;
const CHASE = 5; // damp lambda: how eagerly the cube chases its target
const LOAD_CHASE = 8;
const FADE = 7;
const Z_LOADING = 110; // above the preloader curtain (z-100)
const Z_PAGE = 20; // below the navbar (50), FAB (30) and modal (90)

const dampTo = (current, target, lambda, dt) => current + (target - current) * (1 - Math.exp(-lambda * dt));

export default function CubeStage() {
    const boxRef = useRef(null);
    const [base, setBase] = useState(BASE_FALLBACK);

    useEffect(() => {
        const box = boxRef.current;
        if (!box) return undefined;

        const pose = { x: 0, y: 0, z: 1, o: 1, init: false, mode: "", events: "" };
        let raf = 0;
        let baseSize = BASE_FALLBACK;
        let last = performance.now();

        const measureBase = () => {
            const slot = document.querySelector('[data-cube-dock="hero"]');
            if (!slot) return;
            const width = slot.getBoundingClientRect().width;
            if (width > 40 && Math.abs(width - baseSize) > 1) {
                baseSize = width;
                setBase(width);
            }
        };
        measureBase();
        window.addEventListener("resize", measureBase);

        const frame = (now) => {
            raf = window.requestAnimationFrame(frame);
            const dt = Math.min((now - last) / 1000, 0.05);
            last = now;
            if (document.hidden) return;

            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const loading = document.documentElement.dataset[PRELOADING_FLAG] === "1";

            let mode = "dock";
            // x/y position the BOX (fixed at baseSize); z scales the cube inside it.
            const target = { x: 0, y: 0, z: 1, o: 1 };

            if (loading) {
                mode = "loading";
                const size = Math.min(LOAD_MAX, vw * 0.44, vh * 0.44);
                target.z = size / baseSize;
                target.x = (vw - baseSize) / 2;
                target.y = (vh - baseSize) / 2 - vh * 0.06;
            } else {
                // The dock whose centre is nearest the viewport centre holds the cube.
                let active = null;
                let best = Infinity;
                for (const el of document.querySelectorAll("[data-cube-dock]")) {
                    const rect = el.getBoundingClientRect();
                    if (rect.width < 40) continue; // hidden at this breakpoint
                    const distance = Math.abs(rect.top + rect.height / 2 - vh / 2);
                    if (distance < best) {
                        best = distance;
                        active = { rect, hero: el.dataset.cubeDock === "hero" };
                    }
                }

                if (!active || best > vh * DOCK_RANGE) {
                    target.o = 0;
                    target.x = pose.x;
                    target.y = pose.y;
                    target.z = pose.z;
                } else if (active.hero) {
                    mode = "hero";
                    target.x = active.rect.left;
                    target.y = active.rect.top;
                    target.z = 1;
                } else {
                    const visual = Math.min(active.rect.width, active.rect.height);
                    target.z = Math.min(1, visual / (baseSize * CUBE_FILL));
                    target.x = active.rect.left + active.rect.width / 2 - baseSize / 2;
                    target.y = active.rect.top + active.rect.height / 2 - baseSize / 2;
                }
            }

            if (!pose.init) {
                pose.init = true;
                pose.x = target.x;
                pose.y = target.y;
                pose.z = target.z;
                pose.o = target.o;
            } else {
                const lambda = mode === "loading" ? LOAD_CHASE : CHASE;
                pose.x = dampTo(pose.x, target.x, lambda, dt);
                pose.y = dampTo(pose.y, target.y, lambda, dt);
                pose.z = dampTo(pose.z, target.z, lambda, dt);
                pose.o = dampTo(pose.o, target.o, FADE, dt);
            }

            stagePose.zoom = pose.z;
            box.style.transform = `translate3d(${pose.x}px, ${pose.y}px, 0)`;
            box.style.opacity = pose.o.toFixed(3);
            // visibility gates HeroCube's own IntersectionObserver, so the render loop
            // stops once the cube has faded out past the last dock.
            box.style.visibility = pose.o < 0.02 ? "hidden" : "visible";
            if (pose.mode !== mode) {
                pose.mode = mode;
                box.style.zIndex = String(mode === "loading" ? Z_LOADING : Z_PAGE);
            }
            const events = mode === "hero" ? "auto" : "none";
            if (pose.events !== events) {
                pose.events = events;
                box.style.pointerEvents = events;
            }
        };
        raf = window.requestAnimationFrame(frame);

        return () => {
            window.cancelAnimationFrame(raf);
            window.removeEventListener("resize", measureBase);
            stagePose.zoom = 1;
        };
    }, []);

    return (
        <div
            ref={boxRef}
            aria-hidden="true"
            className="fixed top-0 left-0 will-change-transform"
            style={{ width: base, height: base, zIndex: Z_PAGE, pointerEvents: "none" }}
        >
            <Suspense fallback={<CubeFallback className="h-full w-full" />}>
                <HeroCube className="h-full w-full" />
            </Suspense>
        </div>
    );
}
