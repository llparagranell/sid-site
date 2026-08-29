import cx from "../../lib/cx";

/**
 * Small mono label with a leading rule. `tone="dark"` when it sits on a dark band.
 *
 *   <Eyebrow>Our work</Eyebrow>
 */
export default function Eyebrow({ children, tone = "light", className, as: Tag = "span" }) {
    return (
        <Tag
            className={cx(
                "type-eyebrow inline-flex items-center gap-3",
                tone === "dark" ? "text-muted-dark" : "text-muted",
                className,
            )}
        >
            <span aria-hidden="true" className="h-px w-6 bg-current opacity-70" />
            {children}
        </Tag>
    );
}
