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
        desc: "Native and cross-platform mobile solutions for iOS and Android.",
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
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Services() {
    return (
        <section id="services" className="bg-[#FBF8F3] py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block mb-4 rounded-full bg-black text-white px-4 py-1 text-sm">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                        Comprehensive <br />
                        <span className="font-bold">Digital Solutions</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
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
                                whileHover={{ y: -8 }}
                                className="rounded-2xl border border-[#E7DDC8] bg-[#FBF8F3] p-6 transition-shadow hover:shadow-lg"
                            >
                                <motion.div
                                    whileHover={{ rotate: 6, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white"
                                >
                                    <Icon size={20} />
                                </motion.div>

                                <h3 className="font-semibold text-lg text-gray-900">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {service.desc}
                                </p>

                                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                    {service.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-[#E7DDC8]" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
