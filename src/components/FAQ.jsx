import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "./ui/Container";
import { EASE } from "./motion/constants";
import cx from "../lib/cx";

/** Alias so the repo ESLint config (no react plugin) sees the `motion` import as used. */
const MotionDiv = motion.div;

const faqs = [
    {
        question: "What makes DevGrowth Solutions different from agencies or freelancers?",
        answer: "We focus on business outcomes, not just development. Our approach combines strong UI/UX, scalable engineering, and MVP expertise to help startups launch faster and businesses grow.",
    },
    {
        question: "What platforms do you develop websites and apps on?",
        answer: "We build web and mobile applications using Flutter, React Native, React, Next.js, WordPress, Shopify, and fully custom solutions — choosing the right technology stack based on your business goals, performance needs, and future scalability.",
    },
    {
        question: "How do we collaborate during the project?",
        answer: "Regular updates, milestone reviews and feedback rounds, with a working demo every week, so what ships is what was planned.",
    },
    {
        question: "How fast can my product be ready?",
        answer: "It depends on scope, but MVPs are planned for a quick launch: a functional, market-ready product as soon as it can be built well.",
    },
    {
        question: "Can you handle urgent or fast-track projects?",
        answer: "Yes. We offer accelerated development for time-sensitive projects while ensuring performance, scalability, and design quality remain strong.",
    },
    {
        question: "Do you provide support after launch?",
        answer: "Yes. We offer ongoing maintenance, updates, performance optimization and scaling support after launch.",
    },
    {
        question: "Can you help improve an existing product?",
        answer: "Yes — redesign, optimization, new features or performance fixes for apps and websites that already exist.",
    },
];

/**
 * #faq — a numbered index under an italic aside (DESIGN.md §10 opener). Static band: no scroll
 * reveal; the only motion is the accordion panel, which goes to 0s under reduced motion.
 */
export default function FAQ() {
    const [open, setOpen] = useState(null);
    const baseId = useId();
    const reduced = useReducedMotion();
    const panelTransition = { duration: reduced ? 0 : 0.45, ease: EASE };

    return (
        <section id="faq" aria-labelledby="faq-heading" className="paper-grain section-pad-tight border-b border-line">
            <Container className="flex flex-col gap-8 lg:grid lg:grid-cols-[3fr_9fr] lg:gap-16">
                {/* The aside: one short serif line on phones, a sticky margin note from lg. */}
                <div className="flex flex-col gap-1 lg:sticky lg:top-28 lg:self-start">
                    <h2 id="faq-heading" className="type-display italic text-3xl text-ink lg:text-4xl">
                        You ask, we answer.
                    </h2>
                    <p className="type-mono text-xs text-muted">Seven questions</p>
                </div>

                {/* role="list" restores list semantics that Preflight's `list-style: none` drops in Safari. */}
                <ol role="list">
                    {faqs.map((faq, i) => {
                        const isOpen = open === faq.question;
                        const buttonId = `${baseId}-q${i}`;
                        const panelId = `${baseId}-a${i}`;

                        return (
                            <li key={faq.question} className="border-t border-line last:border-b">
                                <h3>
                                    <button
                                        type="button"
                                        id={buttonId}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpen(isOpen ? null : faq.question)}
                                        className="grid min-h-11 w-full cursor-pointer grid-cols-[2.5rem_1fr_1.5rem] items-start gap-x-2 py-5 text-left lg:grid-cols-[3rem_1fr_1.5rem]"
                                    >
                                        <span className="type-mono pt-1 text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                                        <span className="text-base font-medium leading-snug text-ink lg:text-lg">{faq.question}</span>
                                        <Plus
                                            size={18}
                                            aria-hidden="true"
                                            className={cx(
                                                "mt-0.5 justify-self-end text-muted transition-[rotate] duration-300 ease-out-expo",
                                                isOpen && "rotate-45",
                                            )}
                                        />
                                    </button>
                                </h3>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <MotionDiv
                                            key={panelId}
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={panelTransition}
                                            className="overflow-hidden"
                                        >
                                            {/* pl = index column + gap-x-2, so the answer sits under the question. */}
                                            <p className="max-w-[56ch] pb-5 pl-12 text-base leading-relaxed text-muted lg:pl-14">
                                                {faq.answer}
                                            </p>
                                        </MotionDiv>
                                    )}
                                </AnimatePresence>
                            </li>
                        );
                    })}
                </ol>
            </Container>
        </section>
    );
}
