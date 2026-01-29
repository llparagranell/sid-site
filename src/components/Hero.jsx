import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const particles = Array.from({ length: 10 });

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#FBF8F3]">

            {/* ================= CSS PAPER GRID ================= */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(200, 32, 32, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                    opacity: 0.15,
                }}
            />

            {/* ================= SOFT LARGE BLOBS ================= */}
            <motion.div
                animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
                transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1/3 left-1/4 z-[1] h-[520px] w-[520px] rounded-full bg-white/60 blur-[120px]"
            />

            <motion.div
                animate={{ x: [0, -60, 0], y: [0, 70, 0] }}
                transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 z-[1] h-[460px] w-[460px] rounded-full bg-white/50 blur-[140px]"
            />

            <motion.div
                animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
                transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-1/2 z-[1] -translate-x-1/2 h-[380px] w-[380px] rounded-full bg-white/40 blur-[160px]"
            />

            {/* ================= FLOATING PARTICLES ================= */}
            {particles.map((_, i) => (
                <motion.span
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, i % 2 === 0 ? 20 : -20, 0],
                    }}
                    transition={{
                        duration: 14 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute z-[2] h-2 w-2 rounded-full bg-gray-400/30"
                    style={{
                        top: `${10 + i * 7}%`,
                        left: `${15 + (i % 5) * 15}%`,
                    }}
                />
            ))}

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-4xl"
                >
                    <span className="inline-block rounded-full border border-[#E7DDC8] bg-white/80 px-4 py-1 text-sm text-gray-700 backdrop-blur">
                        Digital Design & Development Studio
                    </span>

                    <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight text-gray-900">
                        We create{" "}
                        <span className="font-light text-gray-500">meaningful</span>{" "}
                        digital
                        experiences
                    </h1>

                    <p className="mt-8 mx-auto max-w-2xl text-lg text-gray-600">
                        A creative web development agency focused on thoughtful design,
                        scalable technology, and long-term partnerships.
                    </p>

                    <div className="mt-12 flex justify-center">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:bg-gray-900"
                        >
                            Start a project
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
