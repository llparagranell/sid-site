import { motion, useReducedMotion } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { EASE, VIEWPORT } from "./motion/constants";
import { scrollToTarget } from "../lib/scroll";

const MotionSpan = motion.span;

const STEPS = [
    {
        id: "discovery",
        index: "01",
        title: "Discovery & scope",
        when: "Within one week",
        description:
            "We start with your business goals, your users and the unit economics that have to work. Within a week you get a written scope, so the build is agreed before it begins.",
        focus: "Business logic & unit economics",
    },
    {
        id: "architecture",
        index: "02",
        title: "Architecture",
        when: "Before any code",
        description:
            "Before any code, we settle the stack, the data model and the user flows. Changing a diagram is cheap; changing a live database is not.",
        focus: "Scalability & tech stack",
    },
    {
        id: "build",
        index: "03",
        title: "Build",
        when: "Every week",
        description:
            "You see a working demo every week, not a status report. The code stays clean and modular, with performance and accessibility built in from the first commit.",
        focus: "Rapid build & performance",
    },
    {
        id: "launch",
        index: "04",
        title: "Launch & scale",
        when: "Go-live and after",
        description:
            "We set up the cloud, run QA and put monitoring in place before go-live. After launch we stay on to fix, tune and extend the product as it grows.",
        focus: "Cloud setup, QA & monitoring",
    },
];

/**
 * The hairline above each move draws itself left to right the first time it scrolls into view.
 * This is the one section on the homepage that draws a line; the text underneath never moves.
 * Under reduced motion the rule renders already drawn. `reduced` is read once by the section
 * and passed down so four rules share one media-query subscription.
 */
function DrawnRule({ reduced }) {
    return (
        <MotionSpan
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px origin-left bg-line-dark"
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
        />
    );
}

export default function ProcessSection() {
    const reduced = useReducedMotion();
    return (
        <section
            id="process"
            aria-labelledby="process-heading"
            className="band-dark section-pad-tight overflow-clip border-b border-line-dark"
        >
            <Container>
                {/* 4/8 at lg, 5/7 from xl: at 1024px the 5/7 split left the description column
                    under 200px wide, so the list gets more room until the container is full width. */}
                <div className="lg:grid lg:grid-cols-[4fr_8fr] lg:gap-12 xl:grid-cols-[5fr_7fr] xl:gap-20">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        {/* The numeral is part of the heading: it overhangs the gutter on purpose
                            (the section clips it) and is read aloud as "Four". */}
                        <h2 id="process-heading" className="type-display text-paper">
                            <span
                                aria-hidden="true"
                                className="-ml-1 block select-none text-[8rem] leading-[0.8] lg:-ml-14 lg:text-[14rem]"
                            >
                                4
                            </span>
                            <span className="sr-only">Four </span>
                            <span className="mt-3 block max-w-[14ch] text-3xl lg:text-5xl">
                                moves, from handshake to launch.
                            </span>
                        </h2>
                        <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-muted-dark">
                            No black box. You see the scope before we start, the build every week, and the numbers
                            after launch.
                        </p>
                        {/* Wrapped, not `hidden` on the Button: Tailwind emits Button's base `.inline-flex`
                            after `.hidden`, so a `hidden` class on the Button itself would lose on phones. */}
                        <div className="mt-8 hidden lg:block">
                            <Button tone="dark" variant="primary" arrow onClick={() => scrollToTarget("#contact")}>
                                Scope my project
                            </Button>
                        </div>
                    </div>

                    {/* role="list" keeps list semantics in VoiceOver once preflight strips the markers.
                        The list closes with a static rule; only the four rules above each move draw. */}
                    <ol role="list" className="mt-10 border-b border-line-dark lg:mt-0">
                        {STEPS.map((step) => (
                            <li
                                key={step.id}
                                className="relative pb-5 pt-5 lg:grid lg:grid-cols-[4rem_1fr_11rem] lg:items-baseline lg:gap-x-6 lg:pb-10 lg:pt-8"
                            >
                                <DrawnRule reduced={reduced} />
                                {/* Phone: index left, timing right on one baseline.
                                    Desktop: the wrapper dissolves and both become grid cells. */}
                                <div className="flex items-baseline justify-between lg:contents">
                                    <span className="type-mono text-xs text-muted-dark lg:col-start-1 lg:row-start-1">
                                        {step.index}
                                    </span>
                                    <span className="type-mono text-xs text-muted-dark lg:col-start-3 lg:row-start-1 lg:text-right">
                                        {step.when}
                                    </span>
                                </div>
                                <div className="lg:col-start-2 lg:row-start-1">
                                    <h3 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-paper lg:mt-0">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 max-w-[56ch] text-base leading-relaxed text-muted-dark">
                                        {step.description}
                                    </p>
                                    <p className="type-mono mt-3 text-xs text-muted-dark">
                                        Focus — {step.focus}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <Button
                    tone="dark"
                    variant="primary"
                    arrow
                    className="mt-8 min-h-12 w-full sm:w-auto lg:hidden"
                    onClick={() => scrollToTarget("#contact")}
                >
                    Scope my project
                </Button>
            </Container>
        </section>
    );
}
