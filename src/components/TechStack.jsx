import { motion } from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
} from "react-icons/si";

const skills = [
    { name: "React", icon: FaReact },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: FaGitAlt },
];

export default function TechStack() {
    const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
    const secondRow = skills.slice(Math.ceil(skills.length / 2));

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(30, 27, 75, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 27, 75, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="mx-auto max-w-6xl px-6 relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-5xl font-bold text-brand-dark tracking-tight">
                        Technologies we work with
                    </h2>
                    <p className="mt-4 text-brand-dark/60 text-lg font-medium">
                        Modern, scalable, and industry-proven tools
                    </p>
                </motion.div>

                {/* Dual Marquee Container */}
                <div className="flex flex-col gap-4 md:gap-8 relative">

                    {/* Row 1: Left Moving */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-4 md:gap-8 pr-4 md:pr-8"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 25,
                                ease: "linear",
                            }}
                        >
                            {[...firstRow, ...firstRow, ...firstRow].map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            scale: 1.02,
                                            borderColor: "rgba(30, 27, 75, 0.2)",
                                            backgroundColor: "rgba(148, 163, 184, 0.1)"
                                        }}
                                        className="flex min-w-[140px] md:min-w-[190px] items-center gap-3 rounded-2xl border border-brand-dark/10 bg-brand-bg px-4 md:px-6 py-5 shadow-sm transition-all cursor-default"
                                    >
                                        <Icon size={26} className="text-brand-dark group-hover:text-black transition-colors" />
                                        <span className="text-sm md:text-base font-bold text-brand-dark/80">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Row 2: Right Moving */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-4 md:gap-8 pr-4 md:pr-8"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 30,
                                ease: "linear",
                            }}
                        >
                            {[...secondRow, ...secondRow, ...secondRow].map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "rgba(48, 54, 79, 0.5)",
                                            backgroundColor: "rgba(225, 217, 188, 0.2)"
                                        }}
                                        className="flex min-w-[140px] md:min-w-[180px] items-center gap-3 rounded-2xl border border-brand-dark/10 bg-brand-bg px-4 md:px-6 py-4 shadow-sm transition-all cursor-default"
                                    >
                                        <Icon size={24} className="text-brand-dark" />
                                        <span className="text-sm md:text-base font-bold text-brand-dark/80">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Gradient fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10" />
                </div>
            </div>
        </section>
    );
}



