import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import Reveal from "./motion/Reveal";
import { scrollToTarget } from "../lib/scroll";
import cx from "../lib/cx";

const STEPS = [
    {
        id: "discovery",
        index: "01",
        title: "Discovery & scope",
        description:
            "We start with your business goals, your users and the unit economics that have to work. Within a week you get a written scope, so the build is agreed before it begins.",
        focus: "Business logic & unit economics",
    },
    {
        id: "architecture",
        index: "02",
        title: "Architecture",
        description:
            "Before any code, we settle the stack, the data model and the user flows. Changing a diagram is cheap; changing a live database is not.",
        focus: "Scalability & tech stack",
    },
    {
        id: "build",
        index: "03",
        title: "Build",
        description:
            "You see a working demo every week, not a status report. The code stays clean and modular, with performance and accessibility built in from the first commit.",
        focus: "Rapid build & performance",
    },
    {
        id: "launch",
        index: "04",
        title: "Launch & scale",
        description:
            "We set up the cloud, run QA and put monitoring in place before go-live. After launch we stay on to fix, tune and extend the product as it grows.",
        focus: "Cloud setup, QA & monitoring",
    },
];

const MotionPath = motion.path;

/** Centre of the 56px node column. The half pixel keeps a 1px stroke on the pixel grid. */
const RAIL_X = 28.5;

/** Distance from `el` to `ancestor` along the offsetParent chain; transforms do not affect it. */
function offsetWithin(el, ancestor) {
    let y = 0;
    let node = el;
    while (node && node !== ancestor) {
        y += node.offsetTop;
        node = node.offsetParent;
    }
    return y;
}

/** How many nodes the drawn line has passed at progress `p` (marks are 0..1 fractions of the line). */
function countReached(p, marks) {
    if (p <= 0) return 0;
    return marks.filter((mark) => p >= mark - 0.002).length;
}

function CornerTicks() {
    return (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0">
            <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-ink opacity-20" />
            <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-ink opacity-20" />
            <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-ink opacity-20" />
            <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-ink opacity-20" />
        </span>
    );
}

export default function ProcessSection() {
    const listRef = useRef(null);
    const reduced = useReducedMotion();
    const [geometry, setGeometry] = useState({ top: 0, bottom: 0, marks: [] });
    const [reached, setReached] = useState(0);

    const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
    const drawn = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return undefined;

        const measure = () => {
            const nodes = Array.from(list.querySelectorAll("[data-node]"));
            if (nodes.length === 0) return;
            const centers = nodes.map((node) => offsetWithin(node, list) + node.offsetHeight / 2);
            const top = centers[0];
            const bottom = centers[centers.length - 1];
            const span = bottom - top;
            const marks = centers.map((center) => (span > 0 ? (center - top) / span : 0));
            setGeometry({ top, bottom, marks });
            setReached(countReached(drawn.get(), marks));
        };

        const observer = new ResizeObserver(measure);
        observer.observe(list);
        return () => observer.disconnect();
    }, [drawn]);

    useMotionValueEvent(drawn, "change", (p) => {
        setReached(countReached(p, geometry.marks));
    });

    const filled = reduced ? STEPS.length : reached;
    const hasLine = geometry.bottom > geometry.top;
    const route = `M${RAIL_X} ${geometry.top} V${geometry.bottom}`;

    return (
        <section id="process" aria-labelledby="process-heading" className="band-light section-pad border-b border-line">
            <Container>
                <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex flex-col items-start gap-8 self-start lg:sticky lg:top-28">
                        <SectionHeading
                            id="process-heading"
                            eyebrow="Process"
                            title={
                                <>
                                    From handshake to <em>launch</em>, in four moves.
                                </>
                            }
                            lede="No black box. You see the scope before we start, the build every week, and the numbers after launch."
                        />
                        <Reveal delay={0.1}>
                            <Button variant="primary" arrow onClick={() => scrollToTarget("#contact")}>
                                Scope my project
                            </Button>
                        </Reveal>
                    </div>

                    <div ref={listRef} className="relative">
                        <svg
                            aria-hidden="true"
                            className="pointer-events-none absolute left-0 top-0 h-full w-14 text-ink"
                            fill="none"
                        >
                            {hasLine && (
                                <>
                                    <path
                                        d={route}
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeDasharray="2 6"
                                        className="opacity-10"
                                    />
                                    <MotionPath
                                        d={route}
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        className="opacity-30"
                                        style={{ pathLength: reduced ? 1 : drawn }}
                                    />
                                </>
                            )}
                        </svg>

                        <ol role="list" className="divide-y divide-line">
                            {STEPS.map((step, i) => (
                                <Reveal as="li" key={step.id} className="relative grid grid-cols-[56px_1fr] py-8">
                                    <CornerTicks />
                                    <div aria-hidden="true" className="flex justify-center pt-1">
                                        <span
                                            data-node=""
                                            className={cx(
                                                "h-3 w-3 rounded-full border border-ink transition-colors duration-500",
                                                i < filled ? "bg-ink" : "bg-paper",
                                            )}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <span className="type-mono text-sm text-muted">{step.index}</span>
                                        <h3 className="font-sans text-2xl font-semibold tracking-tight">{step.title}</h3>
                                        <p className="max-w-[56ch] text-base md:text-lg leading-relaxed text-muted">
                                            {step.description}
                                        </p>
                                        <p className="type-eyebrow flex flex-wrap gap-2 text-muted">
                                            <span>Focus:</span>
                                            <span className="text-ink">{step.focus}</span>
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </div>
            </Container>
        </section>
    );
}
