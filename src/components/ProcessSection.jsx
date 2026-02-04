import { motion } from "framer-motion";
import { PenTool, Code2, Zap, Rocket } from "lucide-react";

const steps = [
    {
        title: "Planning & Design",
        description:
            "We start by understanding your brand, goals, and users, then craft a thoughtful design tailored to your vision.",
        icon: PenTool,
    },
    {
        title: "Development",
        description:
            "Our team brings designs to life with clean, scalable, and high-performance code.",
        icon: Code2,
    },
    {
        title: "Optimization & SEO",
        description:
            "We optimize for speed, accessibility, and SEO so your product performs and ranks well.",
        icon: Zap,
    },
    {
        title: "Launch & Support",
        description:
            "After launch, we monitor, refine, and support your product for long-term success.",
        icon: Rocket,
    },
];

export default function ProcessSection() {
    return (
        <section className="bg-[#f7fbff] py-40">
            <div className="mx-auto max-w-4xl px-8 sm:px-16 text-center">

                {/* Badge */}
                <span className="inline-block mb-4 rounded-full border border-[#007fff]/20 bg-[#007fff]/10 px-4 py-1 text-sm text-[#0b1b2b]/80">
                    How it starts?
                </span>

                {/* Heading */}
                <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#0b1b2b]">
                    See what you can expect.
                </h2>

                {/* Steps */}
                <div className="mt-20 space-y-10">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="flex items-start gap-6 rounded-2xl border border-[#007fff]/20 bg-white px-8 py-6 text-left shadow-sm shadow-[#007fff]/10"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#007fff]/10">
                                    <Icon size={22} className="text-[#007fff]" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#0b1b2b]">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-[#0b1b2b]/70">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


