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
        <section id="projects" className="py-16 md:py-28 bg-[#0b0f14]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#0e1520] rounded-[40px] p-10 md:p-14 "
                >

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block mb-4 rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-4 py-1 text-sm text-[#e6eefb]/80">
                            Our Work
                        </span>

                        <h2 className="text-3xl md:text-5xl font-semibold text-[#e6eefb]">
                            Featured <br />
                            <span className="font-light text-[#4da3ff]">
                                Projects
                            </span>
                        </h2>

                        <p className="mt-4 text-[#e6eefb]/70 leading-relaxed">
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
                                className="group rounded-2xl overflow-hidden border border-[#4da3ff]/15 bg-[#0e1520] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-[#4da3ff]/15"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Content */}
                                <div className="p-6 text-[#e6eefb]">
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-[#e6eefb]/70 leading-relaxed">
                                        {project.desc}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3 py-1 rounded-full bg-[#4da3ff]/10 border border-[#4da3ff]/20 text-[#4da3ff]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 text-sm text-[#4da3ff] hover:text-white transition-colors"
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
