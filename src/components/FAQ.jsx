import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(30, 27, 75, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 27, 75, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-6">

                {/* Heading */}
                <div className="text-center mb-20">
                    <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                        Common Questions
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tight">
                        You ask, <br />
                        <span className="italic font-light text-brand-dark">We answer.</span>
                    </h2>
                    <p className="mt-8 text-xl text-brand-dark/60 max-w-2xl mx-auto font-medium">
                        Find answers to frequently asked questions about our services.
                    </p>
                </div>

                {/* FAQ items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${isOpen
                                    ? "border-brand-dark/20 bg-brand-accent/30 shadow-sm"
                                    : "border-brand-dark/10 bg-brand-bg hover:border-brand-dark/20"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between px-6 md:px-8 py-6 text-left"
                                >
                                    <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? "text-brand-dark" : "text-brand-dark/80"}`}>
                                        {faq.question}
                                    </span>

                                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-brand-dark text-white rotate-180" : "bg-brand-accent text-brand-dark/40"}`}>
                                        <ChevronDown size={18} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-4 md:px-8 pb-8 text-brand-dark/70 text-base leading-relaxed border-t border-brand-dark/10 pt-4 font-medium">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}



