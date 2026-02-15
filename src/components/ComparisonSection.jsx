import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const withUs = [
    {
        title: "Expert Developer and Designer",
        desc: "Experienced professionals ensuring exceptional quality, best practices, and attention to detail.",
    },
    {
        title: "Streamlined Project Management",
        desc: "Clear milestones, agile workflows, and transparent communication from day one.",
    },
    {
        title: "Transparent Pricing & Clear Contracts",
        desc: "No hidden costs, no surprises -- everything defined upfront.",
    },
    {
        title: "24/7 Dedicated Support",
        desc: "Quick responses from a team that deeply understands your project.",
    },
    {
        title: "Modern Technology Stack",
        desc: "Future-proof solutions built with the latest tools and best practices.",
    },
];

const withoutUs = [
    {
        title: "Junior Developer and Designer",
        desc: "Inexperienced teams may compromise on quality and scalability.",
    },
    {
        title: "Chaotic Project Management",
        desc: "Missed deadlines, unclear scope, and inconsistent communication.",
    },
    {
        title: "Hidden Costs & Vague Contracts",
        desc: "Unexpected charges and unclear deliverables create frustration.",
    },
    {
        title: "Limited & Inconsistent Support",
        desc: "Slow responses and lack of accountability.",
    },
    {
        title: "Outdated Technology",
        desc: "Legacy tools leading to performance and security issues.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ComparisonSection() {
    return (
        <section className="bg-[#0b0f14] py-16 sm:py-32 lg:py-40 overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <span className="inline-block mb-4 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                        What Makes Us Unique
                    </span>

                    <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
                        Experience the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">DevGrowth Difference</span>
                    </h2>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex mt-10 items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-500"
                    >
                        Book Your Free Consultation
                        <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </motion.a>
                </motion.div>

                {/* ================= COMPARISON CARD ================= */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0e1520] shadow-2xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ================= WITHOUT YOU (LEFT) ================= */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 sm:p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5"
                        >
                            <div className="mb-10 flex items-center gap-3 opacity-60">
                                <XCircle className="text-white/60" size={24} />
                                <h3 className="text-2xl font-bold text-white/70">
                                    Without DevGrowth
                                </h3>
                            </div>

                            <ul className="space-y-8">
                                {withoutUs.map((item, i) => (
                                    <motion.li key={i} variants={itemVariants} className="flex gap-4">
                                        <XCircle className="mt-1 text-red-500/50" size={20} />
                                        <div>
                                            <h4 className="font-bold text-white/50">
                                                {item.title}
                                            </h4>
                                            <p className="mt-1 text-white/30 text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* ================= WITH YOU (RIGHT) ================= */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-blue-600/[0.03] p-8 sm:p-10 md:p-12"
                        >
                            <div className="mb-10 flex items-center gap-3">
                                <CheckCircle2 className="text-blue-400" size={24} />
                                <h3 className="text-2xl font-bold text-blue-400">
                                    With DevGrowth
                                </h3>
                            </div>

                            <ul className="space-y-8">
                                {withUs.map((item, i) => (
                                    <motion.li key={i} variants={itemVariantsRight} className="flex gap-4">
                                        <CheckCircle2 className="mt-1 text-blue-400" size={20} />
                                        <div>
                                            <h4 className="font-bold text-white">
                                                {item.title}
                                            </h4>
                                            <p className="mt-1 text-white/60 text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}



