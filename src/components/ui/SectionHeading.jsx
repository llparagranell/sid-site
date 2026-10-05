import cx from "../../lib/cx";
import Eyebrow from "./Eyebrow";
import Reveal from "../motion/Reveal";

/**
 * Standard section opener: eyebrow → serif display title → optional lede.
 *
 *   <SectionHeading eyebrow="Process" title={<>From handshake to <em>launch</em>.</>} lede="…" />
 *   <SectionHeading tone="dark" align="center" … />
 */
export default function SectionHeading({
    eyebrow,
    title,
    lede,
    tone = "light",
    align = "left",
    size = "md",
    className,
    titleClassName,
    id,
}) {
    const dark = tone === "dark";
    const titleSize =
        size === "lg"
            ? "text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            : "text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]";

    return (
        <Reveal
            className={cx(
                "flex flex-col gap-5",
                align === "center" && "items-center text-center",
                className,
            )}
        >
            {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
            <h2
                id={id}
                className={cx(
                    "type-display max-w-[16ch]",
                    titleSize,
                    dark ? "text-paper" : "text-ink",
                    "[&_em]:italic",
                    dark ? "[&_em]:text-accent-bright" : "[&_em]:text-accent",
                    titleClassName,
                )}
            >
                {title}
            </h2>
            {lede && (
                <p
                    className={cx(
                        "max-w-[56ch] text-base md:text-lg leading-relaxed",
                        dark ? "text-muted-dark" : "text-muted",
                    )}
                >
                    {lede}
                </p>
            )}
        </Reveal>
    );
}
