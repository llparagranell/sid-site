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
    show: { transition: { staggerChildren: 0.12 } },
};

const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
    return (
        <section id="services" className="py-28 bg-[#f7fbff]">

            <div className="max-w-7xl mx-auto px-6">

                {/* LIGHT GLASS PANEL */}
                <div className="bg-white rounded-[40px] p-10 md:p-14 border border-[#007fff]/20 shadow-2xl shadow-[#007fff]/10">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        {/* softer badge */}
                        <span className="inline-block mb-4 rounded-full border border-[#007fff]/20 bg-[#007fff]/10 px-4 py-1 text-sm text-[#0b1b2b]/80">
                            Our Services
                        </span>

                        {/* softer headline */}
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0b1b2b]">
                            Comprehensive <br />
                            <span className="font-light text-[#007fff]">
                                Digital Solutions
                            </span>
                        </h2>

                        {/* softer paragraph */}
                        <p className="mt-4 text-[#0b1b2b]/70 leading-relaxed">
                            From concept to deployment, we provide end-to-end technology
                            services tailored to your business goals.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
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
                                    className="rounded-2xl bg-white text-[#0b1b2b] border border-[#007fff]/15 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#007fff]/20 cursor-pointer"
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
                                        className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#007fff]/10 text-[#007fff]"
                                    >
                                        <Icon size={20} />
                                    </motion.div>

                                    {/* softer card title */}
                                    <h3 className="font-semibold text-lg text-[#0b1b2b]">
                                        {service.title}
                                    </h3>

                                    {/* softer card desc */}
                                    <p className="mt-2 text-sm text-[#0b1b2b]/70 leading-relaxed">
                                        {service.desc}
                                    </p>

                                    {/* softer bullet list */}
                                    <ul className="mt-4 space-y-2 text-sm text-[#0b1b2b]/70">
                                        {service.points.map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#007fff]/60" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}


