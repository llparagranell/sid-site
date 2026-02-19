import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import goseva from "../assets/goseva.webp";
import upasthit from "../assets/upasthit.webp";
import swadeit from "../assets/swadeit.webp";

const projects = [
    {
        title: "Swadeit",
        desc: "SwadeIt is the smart, simple way to buy and sell products within your city.",
        tech: ["React-Native", "Express", "MongoDB"],
        img: swadeit,
        url: "https://play.google.com/store/apps/details?id=in.swadeit.app",
    },
    {
        title: "Upasthit",
        desc: "Upasthit is the ultimate attendance tracking app made exclusively for LNCT students.",
        tech: ["React-Native", "Express", "PostgreSQL"],
        img: upasthit,
        url: "https://play.google.com/store/apps/details?id=com.upasthit.app&hl=en_US",
    },
    {
        title: "Sri Govinduni Goseva",
        desc: "Sri Govinduni Goseva is a dependable app to order Desi cow–based and natural farming products.",
        tech: ["React-Native", "Express", "PostgreSQL"],
        img: goseva,
        url: "https://play.google.com/store/apps/details?id=com.goseva.customer",
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const card = {
    hidden: {
        opacity: 0,
        y: 50,
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

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="max-w-7xl mx-auto px-0 md:px-6 relative z-10">

                {/* Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-brand-accent/20 backdrop-blur-sm border-y md:border border-brand-dark/10 rounded-none md:rounded-[48px] p-6 md:p-14 shadow-sm"
                >

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-16 px-6 md:px-0">
                        <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                            Our Work
                        </span>

                        <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tight">
                            Featured <br />
                            <span className="italic font-light text-brand-dark">
                                Projects
                            </span>
                        </h2>

                        <p className="mt-4 text-brand-dark/70 leading-relaxed font-medium">
                            A selection of recent builds showcasing full-stack, cloud, and
                            product engineering capabilities.
                        </p>
                    </div>

                    {/* Grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                variants={card}
                                className="group rounded-[32px] overflow-hidden border border-brand-dark/10 bg-brand-bg hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(48,54,79,0.1)]"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Content */}
                                <div className="p-6 text-brand-dark">
                                    <h3 className="text-xl font-bold">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-brand-dark/70 leading-relaxed">
                                        {project.desc}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3 py-1 rounded-full bg-brand-accent border border-brand-dark/10 text-brand-dark font-bold"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 text-sm text-brand-dark hover:opacity-70 transition-opacity font-bold"
                                    >
                                        View Project
                                        <ArrowUpRight size={16} />
                                    </a>

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
