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
        <section className="bg-[#FBF8F3] py-40">
            <div className="mx-auto max-w-4xl px-8 sm:px-16 text-center">

                {/* Badge */}
                <span className="inline-block mb-4 rounded-full bg-black text-white px-4 py-1 text-sm">
                    How it starts?
                </span>

                {/* Heading */}
                <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900">
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
                                className="flex items-start gap-6 rounded-2xl border border-[#E7DDC8] bg-white px-8 py-6 text-left"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3ECDD]">
                                    <Icon size={22} className="text-gray-800" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
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
