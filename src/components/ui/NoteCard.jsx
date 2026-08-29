import cx from "../../lib/cx";

/**
 * A paper slip: white, hairline border, slight rotation, a strip of tape on the top edge.
 * No radius. No motion inside — the caller may wrap it in <Reveal>. Used once (#about).
 * The tape is bg-accent-soft: a tint, the only tint fill on the homepage.
 *
 * `rotate` is the CSS `rotate` property via inline style, so the tilt never affects layout.
 * The slip is always white, so its text is always ink, whichever band it sits on.
 *
 *   <NoteCard>…</NoteCard>
 *   <NoteCard rotate={1.5} className="ml-auto">…</NoteCard>
 */
export default function NoteCard({ children, rotate = -2, className, ...rest }) {
    return (
        <div
            className={cx("relative w-[260px] max-w-full border border-line bg-surface p-5 text-ink shadow-sm", className)}
            style={{ rotate: `${rotate}deg` }}
            {...rest}
        >
            <span
                aria-hidden="true"
                className="absolute -top-2.5 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-2 bg-accent-soft/80"
            />
            {children}
        </div>
    );
}
