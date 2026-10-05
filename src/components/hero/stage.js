/**
 * Shared contract for the persistent cube stage (the fixed overlay that carries the
 * 3D cube from the preloader into the hero slot and then along the scroll).
 *
 * Kept dependency-free on purpose: Hero, Home and the Preloader all consult the
 * predicate synchronously during their first render, long before the lazy three.js
 * chunk exists, so nothing here may import from HeroCube.
 */

/** Fired once by HeroCube when the entrance assembly locks its last cubelet. */
export const ASSEMBLED_EVENT = "dg:cube-assembled";

/**
 * Written by CubeStage every frame, read by HeroCube's render loop: how much the
 * 3D group should shrink relative to its in-slot size. Scaling inside the scene
 * (instead of CSS-scaling the canvas) keeps the cube pixel-crisp at every size
 * and never disturbs the renderer's element measurements. Stays 1 when the cube
 * renders in-flow (phones, tablets).
 */
export const stagePose = { zoom: 1 };

/** Set by the Preloader while its curtain is up (documentElement.dataset.preloading). */
export const PRELOADING_FLAG = "preloading";

let webglProbe = null;

function canProbeWebGL() {
    if (webglProbe !== null) return webglProbe;
    try {
        const canvas = document.createElement("canvas");
        const gl =
            canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        webglProbe = Boolean(gl);
        if (gl) {
            const lose = gl.getExtension("WEBGL_lose_context");
            if (lose) lose.loseContext();
        }
    } catch {
        webglProbe = false;
    }
    return webglProbe;
}

/**
 * True when the homepage should run the cube on the fixed stage: a fine-pointer
 * desktop viewport with WebGL and no reduced-motion preference. Everywhere else
 * (phones, tablets, reduced motion, no WebGL) the hero keeps its in-flow cube or
 * SVG fallback — a cube floating over text on a 390px screen would fight the copy,
 * and touch scrolling is not smoothed by Lenis, so a chasing overlay would jitter.
 *
 * Evaluate once per mount (initial-state callback); the page does not need to react
 * to a mid-session monitor change.
 */
export function stageEnabled() {
    if (typeof window === "undefined" || typeof document === "undefined") return false;
    try {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
        if (!window.matchMedia("(pointer: fine)").matches) return false;
    } catch {
        return false;
    }
    if (window.innerWidth < 1024) return false;
    return canProbeWebGL();
}
