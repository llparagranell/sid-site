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
        <section className="bg-brand-bg relative overflow-hidden py-24 sm:py-32 lg:py-40 border-y border-brand-dark/5">

            {/* Background Transitions / Grids */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(30, 27, 75, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 27, 75, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16 text-center relative z-10">

                {/* Badge */}
                <span className="inline-block mb-4 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1 text-sm text-brand-dark font-bold uppercase tracking-widest text-xs">
                    How it starts?
                </span>

                {/* Heading */}
                <h2 className="mt-6 text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tight">
                    See what you <br />
                    <span className="italic font-light text-brand-dark">can expect.</span>
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
                                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-3xl bg-brand-accent/20 backdrop-blur-sm px-6 sm:px-8 py-8 text-left border border-brand-dark/5 hover:border-brand-dark/20 transition-all"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-dark text-white shadow-lg">
                                    <Icon size={22} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-brand-dark">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-brand-dark/70 text-base leading-relaxed font-medium">
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



