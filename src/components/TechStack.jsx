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
        <section className="py-24 bg-[#FBF8F3] overflow-hidden">
            <div className="mx-auto max-w-6xl px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Technologies we work with
                    </h2>
                    <p className="mt-4 text-gray-600">
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
                            duration: 25,
                            ease: "linear",
                        }}
                    >
                        {[...skills, ...skills].map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex min-w-[180px] items-center gap-3 rounded-2xl border border-[#E7DDC8] bg-white px-6 py-4 shadow-sm"
                                >
                                    <Icon size={26} className="text-gray-700" />
                                    <span className="text-sm font-medium text-gray-800">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Gradient fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FBF8F3] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FBF8F3] to-transparent" />
                </div>
            </div>
        </section>
    );
}
