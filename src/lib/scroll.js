/**
 * Scroll to an element (or selector) through Lenis when it is mounted, else natively.
 * Offsets for the fixed navbar.
 */
export function scrollToTarget(target, options = {}) {
    if (typeof window === "undefined") return;
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -96, duration: 1.2, ...options });
    } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

/** Jump to the top of the page immediately (route changes). */
export function scrollToTop() {
    if (typeof window === "undefined") return;
    if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
    } else {
        window.scrollTo(0, 0);
    }
}
