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
        <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="mx-auto max-w-6xl px-0 sm:px-10 lg:px-16 relative z-10">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-20 max-w-3xl text-center px-6 sm:px-0"
                >
                    <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                        Why Choose Us?
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tight mb-6">
                        The Devgrowth <br />
                        <span className="italic font-light text-brand-dark">Difference</span>
                    </h2>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex mt-10 items-center gap-3 rounded-xl bg-brand-dark px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-dark/10 transition-all hover:bg-brand-dark/90"
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
                    className="grid md:grid-cols-2 gap-0 md:gap-8 ring-0 sm:ring-1 ring-brand-dark/10 rounded-none sm:rounded-[48px] bg-brand-bg p-0 md:p-8 shadow-2xl shadow-brand-dark/5"
                >

                    {/* ================= WITHOUT YOU (LEFT) ================= */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="p-8 md:p-12 bg-gradient-to-br from-brand-accent/30 via-brand-bg to-brand-bg rounded-none sm:rounded-[40px] border-b sm:border border-brand-dark/5"
                    >
                        <div className="mb-10 flex items-center gap-3 opacity-80">
                            <XCircle className="text-brand-muted" size={24} />
                            <h3 className="text-2xl font-bold text-brand-dark/50">
                                Without Devgrowth
                            </h3>
                        </div>

                        <ul className="space-y-8">
                            {withoutUs.map((item, i) => (
                                <motion.li key={i} variants={itemVariants} className="flex gap-4">
                                    <XCircle className="mt-1 text-brand-muted/60" size={20} />
                                    <div>
                                        <h4 className="font-bold text-brand-dark/70">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-brand-muted text-sm">
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
                        className="bg-gradient-to-br from-brand-dark via-brand-dark to-[#2a266a] p-8 sm:p-10 md:p-12 rounded-none sm:rounded-[40px] text-white shadow-xl"
                    >
                        <div className="mb-10 flex items-center gap-3">
                            <CheckCircle2 className="text-brand-accent" size={24} />
                            <h3 className="text-2xl font-bold text-brand-bg">
                                With Devgrowth
                            </h3>
                        </div>

                        <ul className="space-y-8">
                            {withUs.map((item, i) => (
                                <motion.li key={i} variants={itemVariantsRight} className="flex gap-4">
                                    <CheckCircle2 className="mt-1 text-brand-accent" size={20} />
                                    <div>
                                        <h4 className="font-bold text-brand-bg">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-brand-muted text-sm opacity-90">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
