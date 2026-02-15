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
        <section id="faq" className="relative py-16 md:py-32 bg-[#0b0f14] overflow-hidden">

            <div className="relative z-10 mx-auto max-w-4xl px-6">

                {/* Heading */}
                <div className="text-center mb-20">
                    <span className="inline-block mb-4 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                        Got Questions?
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        Common
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block sm:inline sm:ml-4">
                            Questions
                        </span>
                    </h2>
                    <p className="mt-8 text-xl text-white/50 max-w-2xl mx-auto font-light">
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
                                className={`rounded-2xl border transition-all duration-300 ${isOpen
                                    ? "border-blue-500/30 bg-blue-500/[0.05]"
                                    : "border-white/5 bg-[#0e1520] hover:border-white/10"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between px-8 py-6 text-left"
                                >
                                    <span className={`text-base md:text-lg font-semibold transition-colors ${isOpen ? "text-blue-400" : "text-white/80"}`}>
                                        {faq.question}
                                    </span>

                                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-blue-500 text-white rotate-180" : "bg-white/5 text-white/40"}`}>
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
                                            <p className="px-8 pb-8 text-white/50 text-base leading-relaxed border-t border-white/5 pt-4">
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



