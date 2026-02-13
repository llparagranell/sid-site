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
        <section id="services" className="py-28 bg-[#0b0f14]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Light Panel with entrance animation */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#0e1520] rounded-[40px] p-10 md:p-14 "
                >

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block mb-4 rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-4 py-1 text-sm text-[#e6eefb]/80">
                            Our Services
                        </span>

                        <h2 className="text-4xl md:text-5xl font-semibold text-[#e6eefb]">
                            Comprehensive <br />
                            <span className="font-light text-[#4da3ff]">
                                Digital Solutions
                            </span>
                        </h2>

                        <p className="mt-4 text-[#e6eefb]/70 leading-relaxed">
                            From concept to deployment, we provide end-to-end technology
                            services tailored to your business goals.
                        </p>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {services.map((service, i) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={i}
                                    variants={card}
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    className="group rounded-2xl bg-[#0e1520] text-[#e6eefb] border border-[#4da3ff]/15 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4da3ff]/25 hover:bg-[#4da3ff] cursor-pointer"
                                >

                                    {/* Icon */}
                                    <motion.div
                                        variants={{
                                            rest: { scale: 1, rotate: 0 },
                                            hover: {
                                                scale: 1.15,
                                                rotate: 4,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 12,
                                                },
                                            },
                                        }}
                                        className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4da3ff]/10 text-[#4da3ff] transition-colors duration-300 group-hover:bg-[#0e1520]/20 group-hover:text-white"
                                    >
                                        <Icon size={20} />
                                    </motion.div>

                                    <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-white">
                                        {service.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-[#e6eefb]/70 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                                        {service.desc}
                                    </p>

                                    <ul className="mt-4 space-y-2 text-sm text-[#e6eefb]/70 transition-colors duration-300 group-hover:text-white/85">
                                        {service.points.map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#4da3ff]/60 transition-colors duration-300 group-hover:bg-[#0e1520]/80" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                </motion.div>
                            );
                        })}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

