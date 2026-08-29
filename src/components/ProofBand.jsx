import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./motion/Reveal";
import { EASE, VIEWPORT } from "./motion/constants";
import cx from "../lib/cx";
import { products, stats } from "../constants/stats";

/* This repo's ESLint (no react plugin) reports `motion` unused when it only appears as `<motion.span>`; alias it like Reveal does. */
const MotionSpan = motion.span;

/**
 * Cell chrome for the stats grid. Below lg the four stats sit 2×2: a hairline between the two
 * columns and one between the two rows, with padding only around that horizontal rule. At lg
 * they sit in a single row of four with a hairline between every cell and no vertical padding.
 */
function cellClasses(index) {
    const topRow = index < 2;
    const leftCol = index % 2 === 0;
    return cx(
        "flex flex-col gap-3 border-line",
        leftCol ? "pr-4" : "border-l pl-6",
        topRow ? "pb-6 md:pb-8 lg:pb-0" : "border-t pt-6 md:pt-8 lg:border-t-0 lg:pt-0",
        index > 0 && "lg:border-l lg:pl-8",
        index < 3 && "lg:pr-6",
    );
}

function Counter({ value, suffix, label, active, className }) {
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
        <div className={className}>
            <dt className="order-2 text-sm text-muted">{label}</dt>
            <dd className="order-1 type-mono text-5xl md:text-6xl text-ink">
                <span aria-hidden="true">
                    {/* The invisible final value sizes the box, so the suffix never shifts while the count runs. */}
                    <span className="relative inline-block">
                        <span className="invisible">{value}</span>
                        <MotionSpan className="absolute inset-0">{rounded}</MotionSpan>
                    </span>
                    {suffix && <span className="text-accent">{suffix}</span>}
                </span>
                <span className="sr-only">{`${value}${suffix}`}</span>
            </dd>
        </div>
    );
}

export default function ProofBand() {
    const rowRef = useRef(null);
    const inView = useInView(rowRef, VIEWPORT);

    return (
        <section className="band-light border-b border-line py-12 md:py-16">
            <Container className="flex flex-col gap-10 md:gap-12">
                <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                    <Eyebrow className="shrink-0">Live on Google Play</Eyebrow>
                    <ul
                        role="list"
                        aria-label="Products live on Google Play"
                        className="flex flex-col divide-y divide-line md:flex-row md:items-center md:divide-y-0 md:divide-x"
                    >
                        {products.map(({ name, url, tagline }) => (
                            <li key={name} className="md:px-6 md:first:pl-0 md:last:pr-0">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1.5 py-3 md:py-2 font-sans text-lg md:text-xl font-semibold text-muted hover:text-ink transition-colors duration-300"
                                >
                                    <span>{name}</span>
                                    <span className="sr-only">{`, ${tagline} (opens in a new tab)`}</span>
                                    <ArrowUpRight
                                        size={14}
                                        aria-hidden="true"
                                        className="translate-y-0.5 opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal>
                    <dl ref={rowRef} className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <Counter key={stat.label} {...stat} active={inView} className={cellClasses(index)} />
                        ))}
                    </dl>
                </Reveal>
            </Container>
        </section>
    );
}
