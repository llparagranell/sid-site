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
        <section className="bg-[#0b0f14] py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16 text-center">

                {/* Badge */}
                <span className="inline-block mb-4 rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-4 py-1 text-sm text-[#e6eefb]/80">
                    How it starts?
                </span>

                {/* Heading */}
                <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#e6eefb]">
                    See what you can expect.
                </h2>

                {/* Steps */}
                <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-10">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl border border-[#4da3ff]/20 bg-[#0e1520] px-6 sm:px-8 py-6 text-left shadow-sm shadow-[#4da3ff]/10"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4da3ff]/10">
                                    <Icon size={22} className="text-[#4da3ff]" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#e6eefb]">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-[#e6eefb]/70">
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



