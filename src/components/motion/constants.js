/** House easing — every reveal on the site uses this curve. */
export const EASE = [0.22, 1, 0.36, 1];

/** Default viewport options for scroll reveals. */
export const VIEWPORT = { once: true, margin: "-80px", amount: 0.2 };

/** Variants for a staggered list: parent gets `staggerParent()`, children get `staggerChild`. */
export const staggerParent = (stagger = 0.08, delayChildren = 0) => ({
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerChild = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
