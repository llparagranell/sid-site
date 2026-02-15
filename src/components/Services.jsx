import { motion } from "framer-motion";
import {
    Globe,
    Smartphone,
    Brain,
    Cloud,
    ShoppingCart,
    Palette,
    Database,
    Code2,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        desc: "Custom websites and web applications built with modern technologies.",
        points: ["Responsive websites", "SPA & SSR", "Performance optimization"],
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        desc: "Native mobile solutions for iOS and Android.",
        points: ["iOS & Android", "React Native / Flutter", "App Store deployment"],
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        desc: "Intelligent solutions powered by artificial intelligence and ML.",
        points: ["Predictive models", "NLP & CV", "Model deployment"],
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        desc: "Scalable cloud infrastructure and migration services.",
        points: ["Cloud migration", "Serverless", "Cost optimization"],
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
        <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#0b0f14] relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 h-96 w-96 bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 h-96 w-96 bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block mb-4 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                        Our Expertise
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        We build the <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Future of Digital
                        </span>
                    </h2>

                    <p className="mt-6 text-white/60 text-lg leading-relaxed">
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
                                className="group relative rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10 px-8 py-4 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-300"
                            >
                                {/* Active State Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent rounded-3xl transition-all duration-500" />

                                {/* Icon Container */}
                                <div className="mb-6 relative">
                                    <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                        <Icon size={28} />
                                    </div>
                                    {/* Small floating detail */}
                                    <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500/40 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                                    {service.desc}
                                </p>

                                <ul className="space-y-3">
                                    {service.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-xs font-medium text-white/40 group-hover:text-white/60 transition-colors">
                                            <div className="h-1 w-1 rounded-full bg-blue-500/50 group-hover:bg-blue-500" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom corner button / arrow */}
                                <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="h-8 w-8 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

