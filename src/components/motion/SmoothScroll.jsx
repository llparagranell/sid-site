import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertia scrolling via Lenis. Mount once at the app root.
 * Skips itself under prefers-reduced-motion so native scrolling stays intact.
 * Exposes the instance as `window.__lenis` for `scrollToTarget()` in src/lib/scroll.js.
 */
export default function SmoothScroll() {
    useEffect(() => {
        if (typeof window === "undefined") return undefined;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

        const lenis = new Lenis({
            autoRaf: true,
            lerp: 0.1,
            smoothWheel: true,
            wheelMultiplier: 1,
        });
        window.__lenis = lenis;

        return () => {
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);

    return null;
}
