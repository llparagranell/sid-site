import Container from "./ui/Container";
import cx from "../lib/cx";

const HAIRLINES = ["first", "second", "third", "fourth", "fifth"];

/**
 * Quiet backdrop for inner-page heroes. Mount it `absolute inset-0` behind the
 * hero content (the parent needs `relative`, the content needs `relative` too so
 * it stacks above): a soft radial wash at the top, five hairlines that echo the
 * container rhythm, and a bottom rule. Nothing moves.
 *
 *   <section className="relative band-light">
 *     <PageHeaderBackground />
 *     <Container className="relative">…</Container>
 *   </section>
 *
 *   <PageHeaderBackground tone="dark" />   // on a band-dark hero
 */
export default function PageHeaderBackground({ tone = "light" }) {
    const dark = tone === "dark";

    return (
        <div
            aria-hidden="true"
            className={cx(
                "pointer-events-none absolute inset-0 overflow-hidden border-b",
                dark ? "border-line-dark" : "border-line",
            )}
        >
            <div
                className={cx(
                    "absolute inset-x-0 top-0 h-3/4 opacity-60",
                    "bg-radial-[80%_100%_at_50%_0%] to-transparent to-70%",
                    dark ? "from-ink-2" : "from-accent-soft",
                )}
            />
            {/* `relative` keeps the hairlines above the wash. */}
            <Container className="relative flex h-full justify-between">
                {HAIRLINES.map((id) => (
                    <span
                        key={id}
                        className={cx("h-full w-px opacity-60", dark ? "bg-line-dark" : "bg-line")}
                    />
                ))}
            </Container>
        </div>
    );
}
