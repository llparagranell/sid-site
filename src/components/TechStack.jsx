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
    return (
        <section className="py-24 bg-[#0b0f14] overflow-hidden">
            <div className="mx-auto max-w-6xl px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#e6eefb]">
                        Technologies we work with
                    </h2>
                    <p className="mt-4 text-[#e6eefb]/70">
                        Modern, scalable, and industry-proven tools
                    </p>
                </div>

                {/* Marquee */}
                <div className="relative">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                    >
                        {[...skills, ...skills].map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex min-w-[180px] items-center gap-3 rounded-2xl border border-[#4da3ff]/20 bg-[#0e1520] px-6 py-4 shadow-sm shadow-[#4da3ff]/10"
                                >
                                    <Icon size={26} className="text-[#4da3ff]" />
                                    <span className="text-sm font-medium text-[#e6eefb]">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Gradient fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0f14] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0f14] to-transparent" />
                </div>
            </div>
        </section>
    );
}



