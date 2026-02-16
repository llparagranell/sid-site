import { motion } from "framer-motion";
import {
    Layers,
    PenTool,
    Sparkles,
    Zap,
    ShoppingCart,
    Palette,
    Database,
    Code2,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Layers,
        title: "Web Development",
        desc: "Custom websites and web applications built with modern technologies.",
        points: ["Responsive websites", "SPA & SSR", "Performance optimization"],
        layoutId: "icon-Layers"
    },
    {
        icon: PenTool,
        title: "Mobile App Development",
        desc: "Native mobile solutions for iOS and Android.",
        points: ["iOS & Android", "React Native / Flutter", "App Store deployment"],
        layoutId: "icon-PenTool"
    },
    {
        icon: Sparkles,
        title: "AI & Machine Learning",
        desc: "Intelligent solutions powered by artificial intelligence and ML.",
        points: ["Predictive models", "NLP & CV", "Model deployment"],
        layoutId: "icon-Sparkles"
    },
    {
        icon: Zap,
        title: "Cloud Solutions",
        desc: "Scalable cloud infrastructure and migration services.",
        points: ["Cloud migration", "Serverless", "Cost optimization"],
        layoutId: "icon-Zap"
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        desc: "Complete online store solutions with payment integration.",
        points: ["Payments", "Inventory", "Conversion optimization"],
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Beautiful, intuitive designs that users love.",
        points: ["User research", "Prototyping", "Design systems"],
    },
    {
        icon: Database,
        title: "Database Management",
        desc: "Robust database design, optimization, and maintenance.",
        points: ["Schema design", "Backups", "Performance tuning"],
    },
    {
        icon: Code2,
        title: "Custom Software",
        desc: "Tailored software solutions for unique business needs.",
        points: ["Custom apps", "APIs", "Integrations"],
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const card = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.96,
        filter: "blur(6px)",
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">

            {/* Background Transitions / Grids */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(30, 27, 121, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 27, 121, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10"
                style={{

                    backgroundColor: ' #d3d8d52b',
                    borderRadius: '50px',
                    padding: '50px'
                }}>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                        Our Expertise
                    </span>

                    <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tight">
                        We build the <br className="hidden sm:block" />
                        <span className="text-brand-dark italic font-light">
                            Future of Digital
                        </span>
                    </h2>

                    <p className="mt-6 text-brand-dark/70 text-lg leading-relaxed">
                        From rapid MVP development to enterprise-level architecture,
                        we deliver high-performance solutions tailored for growth.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={card}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative rounded-3xl bg-brand-bg border border-brand-dark/10 px-8 py-10 hover:shadow-[0_20px_50px_rgba(48,54,79,0.08)] hover:border-brand-dark/20 transition-all duration-500"
                            >
                                {/* Active State Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/30 to-transparent opacity-100 group-hover:opacity-0 rounded-3xl transition-all duration-500" />

                                {/* Icon Container */}
                                <div className="mb-6 relative">
                                    <motion.div
                                        layoutId={service.layoutId}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className="h-16 w-16 rounded-2xl bg-brand-dark text-white flex items-center justify-center  transition-all duration-500 shadow-sm border border-brand-dark/10"
                                    >
                                        <Icon size={28} />
                                    </motion.div>
                                    {/* Small floating detail */}
                                    {/* <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-brand-muted blur-[2px] opacity-100 group-hover:opacity-0 transition-opacity" /> */}
                                </div>

                                <h3 className="text-xl font-bold text-brand-dark mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-brand-dark/60 text-sm leading-relaxed mb-6 group-hover:text-brand-dark/80 transition-colors">
                                    {service.desc}
                                </p>

                                <ul className="space-y-3">
                                    {service.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-xs font-bold text-brand-muted group-hover:text-brand-dark/70 transition-colors">
                                            <div className="h-1 w-1 rounded-full bg-brand-muted group-hover:bg-brand-dark" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom corner arrow */}
                                <div className="mt-8 flex justify-end opacity-100 group-hover:opacity-0 transition-opacity">

                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
