import cx from "../../lib/cx";

/**
 * Rubber stamp: uppercase mono inside a double ring, tilted a few degrees. Real text (not
 * aria-hidden) because it carries a fact. `tone` is the band it sits on (sets the ring gap
 * colour), `color` is the ink. At most two on the homepage (#work, #start).
 *
 *   <Stamp tone="dark">Live on Google Play</Stamp>
 *   <Stamp tone="surface" color="ink" rotate={6}>Reply within a business day</Stamp>
 */
const GAP = {
    light: "[--stamp-gap:var(--color-paper)]",
    surface: "[--stamp-gap:var(--color-surface)]",
    dark: "[--stamp-gap:var(--color-ink)]",
};

function inkClass(tone, color) {
    if (color === "ink") return tone === "dark" ? "text-paper" : "text-ink";
    return tone === "dark" ? "text-accent-bright" : "text-accent";
}

export default function Stamp({ children, tone = "light", color = "accent", rotate = -4, className }) {
    return (
        <span
            className={cx(
                "stamp-ring inline-block select-none rounded-[4px] border-2 border-current px-3 py-2",
                "type-eyebrow text-[11px] uppercase tracking-[0.22em] leading-none",
                GAP[tone] ?? GAP.light,
                inkClass(tone, color),
                className,
            )}
            style={{ rotate: `${rotate}deg` }}
        >
            {children}
        </span>
    );
}
