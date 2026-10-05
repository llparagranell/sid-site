import { ArrowUpRight } from "lucide-react";
import cx from "../../lib/cx";

/**
 * A phone-shaped frame showing one shipped app: launcher icon, name, tagline, stack run and a
 * Google Play link. The whole frame is the link, so the tap target is the full 220 × 440 device.
 * Documented radius exception (a device illustration, not a card). Only used in #work.
 *
 *   <PhoneFrame
 *     icon={swadeit} alt="Swadeit launcher icon" name="Swadeit" tagline="Buy and sell locally"
 *     stack={["React Native", "Express", "MongoDB"]} packageId="in.swadeit.app"
 *     url="https://play.google.com/store/apps/details?id=in.swadeit.app"
 *   />
 *
 * Fixed size at every breakpoint: on a 390px phone the strip swipes, from md three sit in a row.
 * `className` is for the strip (e.g. `snap-start`); it never changes the frame itself.
 */
export default function PhoneFrame({ icon, alt, name, tagline, stack, packageId, url, className }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
                "group block h-[440px] w-[220px] shrink-0 rounded-[28px] border border-line-dark bg-ink-2 p-2.5",
                "transition-colors duration-300 hover:border-muted-dark",
                className,
            )}
        >
            <div className="flex h-full flex-col rounded-[20px] bg-ink px-5 pb-5 pt-3">
                <span aria-hidden="true" className="mx-auto h-4 w-16 rounded-full bg-ink-2" />

                <span className="type-mono mt-4 flex items-center justify-between text-[10px] leading-none text-muted-dark">
                    <span>{packageId}</span>
                    <span aria-hidden="true">●</span>
                </span>

                <span className="my-auto flex flex-col items-center gap-4 text-center">
                    <img
                        src={icon}
                        alt={alt}
                        width={80}
                        height={80}
                        loading="lazy"
                        decoding="async"
                        className="size-20 rounded-[22%]"
                    />
                    <span className="type-display text-2xl leading-tight text-paper">{name}</span>
                    <span className="text-sm leading-snug text-muted-dark">{tagline}</span>
                </span>

                <span className="type-mono text-center text-[10px] leading-4 text-muted-dark">{stack.join(" · ")}</span>

                <span className="mt-3 flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-line-dark text-sm font-semibold text-paper transition-colors duration-300 group-hover:border-paper">
                    Google Play
                    <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only">{`, ${name} (opens in a new tab)`}</span>
                </span>
            </div>
        </a>
    );
}
