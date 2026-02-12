import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What makes YourAgency different from agencies or freelancers?",
        answer:
            "We combine strategic thinking, clean design, and scalable development. Unlike freelancers or generic agencies, we work as a long-term tech partner focused on business growth, not just delivery.",
    },
    {
        question: "What platforms do you develop websites on?",
        answer:
            "We primarily work with modern technologies like React, Next.js, Vite, Tailwind CSS, and Node.js. We choose the stack based on performance, scalability, and your business needs.",
    },
    {
        question: "How do we collaborate during the project?",
        answer:
            "We follow a transparent process with regular updates, shared timelines, and review checkpoints. Communication happens via calls, chat, and project tools to keep everything aligned.",
    },
    {
        question: "How fast will my website be ready?",
        answer:
            "Timelines depend on scope, but most websites are completed within 2-4 weeks. MVPs and landing pages can be delivered even faster.",
    },
    {
        question: "What if I need my website done urgently?",
        answer:
            "We offer priority delivery for urgent projects. Let us know your timeline and we'll evaluate feasibility without compromising quality.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="relative py-32 bg-[#0b0f14] overflow-hidden">

            {/* Soft background glow */}
            <div className="absolute inset-0 flex justify-center">
                <div className="h-[500px] w-[500px] rounded-full bg-[#4da3ff]/15 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#e6eefb]">
                        Common Questions <br />
                        <span className="font-light text-[#4da3ff]">
                            Answered
                        </span>
                    </h2>
                    <p className="mt-6 text-lg text-[#e6eefb]/70">
                        Find answers to frequently asked questions about our services,
                        process, and how we can help your business.
                    </p>
                </div>

                {/* FAQ items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-[#4da3ff]/20 bg-[#0e1520]"
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="text-base font-medium text-[#e6eefb]">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
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
                                            <p className="px-6 pb-6 text-[#e6eefb]/70 leading-relaxed">
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



