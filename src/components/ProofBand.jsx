import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import Container from "./ui/Container";
import { EASE, VIEWPORT } from "./motion/constants";
import { stats } from "../constants/stats";

/* This repo's ESLint (no react plugin) reports `motion` unused when it only appears as `<motion.span>`; alias it like Reveal does. */
const MotionSpan = motion.span;

/**
 * One studio fact: a serif numeral with its label beside it on the same baseline, read as a
 * sentence ("3 products on Google Play"). The number counts up once when the row scrolls into
 * view; under reduced motion it is set straight to its value.
 */
function Counter({ value, suffix, label, active, className = "" }) {
    const reduce = useReducedMotion();
    const count = useMotionValue(reduce ? value : 0);
    const rounded = useTransform(count, (v) => Math.round(v));

    useEffect(() => {
        if (!active) return undefined;
        if (reduce) {
            count.set(value);
            return undefined;
        }
        const controls = animate(count, value, { duration: 1.1, ease: EASE });
        return () => controls.stop();
    }, [active, reduce, value, count]);

    return (
        <div className={`flex items-baseline gap-2.5 ${className}`}>
            <dt className="order-2 max-w-[12ch] text-sm leading-tight text-muted">{label}</dt>
            <dd className="order-1 type-display text-4xl leading-none text-ink tabular lg:text-5xl">
                <span aria-hidden="true">
                    {/* The invisible final value sizes the box, so the suffix never shifts while the count runs. */}
                    <span className="relative inline-block">
                        <span className="invisible">{value}</span>
                        <MotionSpan className="absolute inset-0">{rounded}</MotionSpan>
                    </span>
                    {suffix && <span className="text-ink">{suffix}</span>}
                </span>
                <span className="sr-only">{`${value}${suffix}`}</span>
            </dd>
        </div>
    );
}

/**
 * The masthead under the hero: no heading, no eyebrow. A mono dateline (the place and its
 * coordinates) and one running line of four serif numerals with their labels beside them.
 * Phone: dateline as one justified row, stats 2×2 with no rules. Desktop: dateline stacked at
 * the left, the four stats in a single row separated by hairlines. The only motion is the count.
 */
export default function ProofBand() {
    const rowRef = useRef(null);
    const inView = useInView(rowRef, VIEWPORT);

    return (
        <section aria-label="Studio facts" className="band-light border-b border-line py-8 md:py-10">
            <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                {/* Tracking is a touch tighter below md so both halves of the dateline fit one 390px line;
                    flex-wrap drops the coordinates to a second line on narrower phones instead of breaking a word. */}
                <p className="type-mono flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.12em] text-muted md:tracking-[0.16em] lg:shrink-0 lg:flex-col lg:flex-nowrap lg:items-start lg:justify-start lg:gap-1.5">
                    <span>Jabalpur, India</span>
                    <span>23.18° N · 79.99° E · IST</span>
                </p>

                {/* 2×2 on phones, one row of four from md; at lg the cells stretch to the row's height
                    (the flex default) so every numeral shares one baseline and the hairlines run full height. */}
                <dl ref={rowRef} className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4 md:gap-x-8 lg:flex lg:gap-0">
                    {stats.map((stat, index) => (
                        <Counter
                            key={stat.label}
                            {...stat}
                            active={inView}
                            className={index === 0 ? "lg:pr-8" : "lg:border-l lg:border-line lg:pl-8 lg:pr-8 lg:last:pr-0"}
                        />
                    ))}
                </dl>
            </Container>
        </section>
    );
}
