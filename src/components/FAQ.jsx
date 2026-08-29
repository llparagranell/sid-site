import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/constants";
import cx from "../lib/cx";

/** Alias so the repo ESLint config (no react plugin) sees the `motion` import as used. */
const MotionDiv = motion.div;

const faqs = [
    {
        question: "What makes Devgrowth Solutions different from agencies or freelancers?",
        answer: "We focus on business outcomes, not just development. Our approach combines strong UI/UX, scalable engineering, and MVP expertise to help startups launch faster and businesses grow digitally.",
    },
    {
        question: "What platforms do you develop websites and apps on?",
        answer: "We build web and mobile applications using Flutter, React Native, React, Next.js, WordPress, Shopify, and fully custom solutions — choosing the right technology stack based on your business goals, performance needs, and future scalability.",
    },
    {
        question: "How do we collaborate during the project?",
        answer: "We maintain transparent communication through regular updates, milestone reviews, and collaborative feedback cycles to ensure your vision is delivered exactly as planned.",
    },
    {
        question: "How fast can my product be ready?",
        answer: "Timelines depend on project complexity, but MVPs are designed for rapid launch. We focus on delivering a functional, market-ready product as quickly as possible without compromising quality.",
    },
    {
        question: "Can you handle urgent or fast-track projects?",
        answer: "Yes. We offer accelerated development for time-sensitive projects while ensuring performance, scalability, and design quality remain strong.",
    },
    {
        question: "Do you provide support after launch?",
        answer: "Absolutely. We offer ongoing maintenance, updates, performance optimization, and scaling support to ensure long-term success.",
    },
    {
        question: "Can you help improve an existing product?",
        answer: "Yes — whether redesign, optimization, feature expansion, or performance improvements, we help enhance existing apps and websites effectively.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);
    const baseId = useId();
    const reduced = useReducedMotion();
    const panelTransition = { duration: reduced ? 0 : 0.45, ease: EASE };

    return (
        <section id="faq" aria-labelledby="faq-heading" className="band-light section-pad border-b border-line">
            <Container>
                <div className="mx-auto max-w-[880px]">
                    <SectionHeading
                        id="faq-heading"
                        eyebrow="FAQ"
                        title={
                            <>
                                You ask, <em>we answer</em>.
                            </>
                        }
                    />

                    <Reveal className="mt-12">
                        <ul>
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
                                                className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left text-lg font-medium text-ink"
                                            >
                                                <span>{faq.question}</span>
                                                <Plus
                                                    size={20}
                                                    aria-hidden="true"
                                                    className={cx(
                                                        "mt-1 shrink-0 transition-[rotate,color] duration-300 ease-out-expo",
                                                        isOpen ? "rotate-45 text-accent" : "text-muted",
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
                                                    <p className="max-w-[60ch] pb-6 leading-relaxed text-muted">{faq.answer}</p>
                                                </MotionDiv>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                );
                            })}
                        </ul>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
