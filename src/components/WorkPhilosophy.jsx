import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./motion/Reveal";
import { EASE, VIEWPORT } from "./motion/constants";
import { scrollToTarget } from "../lib/scroll";
import cx from "../lib/cx";

const items = [
    {
        id: "clients",
        title: "Clients first",
        description: [
            "Every build starts with your goals and the market you are selling into. We listen before we write code.",
            "For startups and SMEs alike, the aim is an MVP that solves one real problem and can be measured from day one.",
        ],
    },
    {
        id: "innovation",
        title: "Tools chosen on purpose",
        description: [
            "We build on React, Next.js, Flutter and the MERN stack, with WordPress or Shopify when a platform beats a custom build.",
            "A newer tool earns its place by paying off in the product, not by being new.",
        ],
    },
    {
        id: "partners",
        title: "Long-term, not hand-off",
        description: [
            "We stay on after launch. Support, iteration and the next feature are part of the engagement, not an upsell.",
            "You get direct access to the engineers doing the work, so decisions are made with you, not relayed to you.",
        ],
    },
    {
        id: "quality",
        title: "Quality you can inspect",
        description: [
            "Clean architecture, readable code and a UI that behaves the way it looks. Security and performance are checked before launch, not after.",
            "You see the process as it happens: a written plan, a shared board, and a weekly update you can act on.",
        ],
    },
    {
        id: "learning",
        title: "We keep learning",
        description: [
            "Tooling changes fast, so the team keeps its AI, cloud and framework skills current.",
            "That is what keeps what we ship maintainable a year from now.",
        ],
    },
];

const WATERMARK = "DEVGROWTH · SOLUTIONS · DEVGROWTH · SOLUTIONS";
const SIGNATURE = "Develop. Grow. Dominate.";
// nowrap keeps the line one row tall while its letter-spacing tightens; the
// transient overflow at the start sits at ~0 opacity and is clipped by the section.
const SIGNATURE_CLASS = "type-display italic text-3xl md:text-5xl text-ink whitespace-nowrap";

// This repo's ESLint has no jsx-uses-vars, so `<motion.p>` reads as an unused import.
const MotionParagraph = motion.p;

const domId = (id) => `philosophy-${id}`;

/** Brand line: letter-spacing tightens as it fades in, once. Static under reduced motion. */
function Signature() {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <p className={SIGNATURE_CLASS}>{SIGNATURE}</p>;
    }

    return (
        <MotionParagraph
            className={SIGNATURE_CLASS}
            initial={{ letterSpacing: "0.35em", opacity: 0 }}
            whileInView={{ letterSpacing: "0em", opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.2, ease: EASE }}
        >
            {SIGNATURE}
        </MotionParagraph>
    );
}

export default function WorkPhilosophy() {
    const [activeId, setActiveId] = useState(items[0].id);
    const listRef = useRef(null);

    useEffect(() => {
        const root = listRef.current;
        if (!root || typeof IntersectionObserver === "undefined") return undefined;

        const targets = Array.from(root.querySelectorAll("[data-item]"));
        const inBand = new Set();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const id = entry.target.dataset.item;
                    if (entry.isIntersecting) inBand.add(id);
                    else inBand.delete(id);
                }
                // Topmost item inside the band wins; DOM order is vertical order,
                // so no geometry reads are needed here.
                const next = targets.find((el) => inBand.has(el.dataset.item));
                if (next) setActiveId(next.dataset.item);
            },
            { rootMargin: "-40% 0px -40% 0px" },
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        // overflow-clip, not overflow-hidden: hidden would make the section a scroll
        // container and stop the lg:sticky list from sticking; clip only clips.
        <section id="about" className="band-light section-pad border-b border-line relative overflow-clip">
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute top-1/3 -left-[10%] origin-top-left -rotate-12 type-display text-[18vw] leading-none whitespace-nowrap text-ink opacity-[0.04]"
            >
                {WATERMARK}
            </div>

            <Container className="relative flex flex-col gap-16">
                <div className="flex flex-col gap-10">
                    <Signature />

                    <SectionHeading
                        eyebrow="How we work"
                        title={
                            <>
                                Partners, <em>not</em> vendors.
                            </>
                        }
                        lede="Five things we hold ourselves to on every build."
                    />
                </div>

                <div className="grid gap-16 lg:grid-cols-[280px_1fr]">
                    <nav
                        aria-label="Work philosophy"
                        className="hidden self-start lg:sticky lg:top-28 lg:block"
                    >
                        <ul className="flex flex-col gap-1">
                            {items.map((item) => {
                                const active = item.id === activeId;
                                return (
                                    <li key={item.id}>
                                        <button
                                            type="button"
                                            aria-current={active ? "true" : undefined}
                                            onClick={() => scrollToTarget(`#${domId(item.id)}`)}
                                            className={cx(
                                                "type-eyebrow flex min-h-10 w-full cursor-pointer items-center gap-3 text-left transition-colors duration-300",
                                                active ? "text-ink" : "text-muted hover:text-ink",
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={cx(
                                                    "h-1.5 w-1.5 shrink-0 transition-colors duration-300",
                                                    active ? "bg-accent" : "bg-line",
                                                )}
                                            />
                                            {item.title}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div ref={listRef} className="flex flex-col gap-16">
                        {items.map((item) => (
                            <Reveal
                                key={item.id}
                                as="article"
                                id={domId(item.id)}
                                data-item={item.id}
                                className="flex scroll-mt-22 flex-col gap-6 border-t border-line pt-10"
                            >
                                <h3 className="font-sans text-2xl md:text-3xl font-semibold tracking-tight">
                                    {item.title}
                                </h3>
                                <div className="flex flex-col gap-5">
                                    {item.description.map((text) => (
                                        <p
                                            key={text}
                                            className="max-w-[56ch] text-base md:text-lg leading-relaxed text-muted"
                                        >
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
