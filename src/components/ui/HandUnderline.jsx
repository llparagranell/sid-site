import cx from "../../lib/cx";

/**
 * Hand-drawn underline under exactly one word. Two strokes of different weight give the wobble;
 * static, no draw animation. The word keeps the band's text colour — only the strokes are accent,
 * so each use spends one of the page's five accent uses. `tone="dark"` on dark bands. Two uses on
 * the homepage: #stack ("not") and Footer ("lasts").
 *
 *   Chosen per project, <HandUnderline>not</HandUnderline> a fixed menu.
 *
 * Fit: the wrapper sets its own line box to 1em (`leading-none`) so the strokes sit just under the
 * baseline whether the parent is a `type-display` h2 at leading 0.95 or body copy at leading 1.6.
 * Best under a word without descenders — the heavy stroke runs through the descender zone.
 */
export default function HandUnderline({ children, tone = "light", className }) {
    return (
        <span className={cx("relative inline-block whitespace-nowrap leading-none", className)}>
            {children}
            <svg
                aria-hidden="true"
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                className={cx(
                    "pointer-events-none absolute -bottom-[0.1em] left-[-3%] h-[0.3em] w-[106%]",
                    tone === "dark" ? "text-accent-bright" : "text-accent",
                )}
            >
                {/* preserveAspectRatio="none" stretches the paths to the word's width;
                    non-scaling-stroke keeps the pen weight constant while it does. */}
                <path d="M3 9 C 30 3, 62 12, 96 7 S 162 2, 197 8" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                <path
                    d="M7 11.5 C 52 8.5, 118 13, 193 10"
                    strokeWidth="1.4"
                    opacity="0.65"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </span>
    );
}
