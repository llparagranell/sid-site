import { motion } from "framer-motion";
import { Handshake, Construction, Cpu, Rocket } from "lucide-react";

const processStages = [
    {
        icon: Handshake,
        title: "Strategic Handshake",
        description: "We don't just sign deals; we form partnerships. This stage is about deep-diving into your business goals to ensure the build aligns perfectly with your vision.",
        detail: "Focus: Business Logic & Unit Economics"
    },
    {
        icon: Construction,
        title: "Architectural Blueprint",
        description: "Before a single line of code is written, we engineer the foundation. We map out the technical stack, data structures, and user flows.",
        detail: "Focus: Scalability & Tech Stack"
    },
    {
        icon: Cpu,
        title: "High-Velocity Engineering",
        description: "Our core engineers build your MVP with precision and speed. We prioritize clean, modular code that's ready for high-load environments.",
        detail: "Focus: Rapid Build & Performance"
    },
    {
        icon: Rocket,
        title: "Market Domination",
        description: "We handle the logistics of launching your product and optimizing for scale. From AWS/GCP setup to final quality checks.",
        detail: "Focus: Launch & Scaling"
    }
];

export default function VideoSection() {
    return (
        <section className="py-24 md:py-40 bg-brand-dark relative overflow-hidden text-white">
            {/* Background Grid - Dark Theme Variation */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block mb-6 rounded-full border border-white/10 bg-brand-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                            Our Methodology
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter">
                            Connecting <br />
                            <span className="text-brand-accent italic font-light">Deal to Build.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl"
                    >
                        We bridge the gap between business strategy and engineering excellence.
                        Our process ensures that every commercial agreement translates into
                        a high-performance digital product.
                    </motion.p>
                </div>

                {/* Process Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processStages.map((stage, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group relative p-8 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <stage.icon size={120} strokeWidth={1} />
                            </div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-brand-accent flex items-center justify-center text-brand-dark mb-8 shadow-lg shadow-brand-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                    <stage.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight">
                                    {stage.title}
                                </h3>
                                <p className="text-white/50 text-base leading-relaxed font-medium mb-8">
                                    {stage.description}
                                </p>
                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                                        {stage.detail}
                                    </span>
                                </div>
                            </div>

                            <motion.div
                                className="absolute bottom-0 left-0 h-1 bg-brand-accent"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Large Decorative Text for Background */}
            <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.03] select-none">
                <span className="text-[400px] font-black tracking-tighter leading-none">BUILD</span>
            </div>
        </section>
    );
}
