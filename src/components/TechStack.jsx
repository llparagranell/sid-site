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
    const duplicated = [...skills, ...skills];

    const Card = ({ skill }) => {
        const Icon = skill.icon;

        return (
            <motion.div
                whileHover={{ scale: 1.06 }}
                className="
          flex items-center gap-3
          min-w-[150px] sm:min-w-[170px] md:min-w-[200px]
          px-5 py-4
          rounded-2xl
          bg-brand-dark
          border border-white/10
          shadow-md
          hover:shadow-xl
          hover:border-white/20
          transition-all duration-300
          group
        "
            >
                <Icon
                    size={24}
                    className="text-white/80 group-hover:text-white transition"
                />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition">
                    {skill.name}
                </span>
            </motion.div>
        );
    };

    return (
        <section className="w-full py-20 md:py-28 bg-brand-bg relative overflow-hidden">

            {/* Background Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Heading */}
            <div className="text-center mb-14 px-6 md:px-12 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
                    Technologies we work with
                </h2>
                <p className="mt-4 text-base md:text-lg text-brand-dark/60 font-medium">
                    Modern, scalable, industry-proven tools
                </p>
            </div>

            {/* Marquee Rows */}
            <div className="relative flex flex-col gap-8 z-10">

                {/* Row 1 */}
                <div className="overflow-hidden w-full">
                    <motion.div
                        className="flex gap-6 w-max px-6 md:px-12"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 25,
                            ease: "linear",
                        }}
                    >
                        {duplicated.map((skill, index) => (
                            <Card key={index} skill={skill} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 */}
                <div className="overflow-hidden w-full">
                    <motion.div
                        className="flex gap-6 w-max px-6 md:px-12"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                        }}
                    >
                        {duplicated.map((skill, index) => (
                            <Card key={index} skill={skill} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}