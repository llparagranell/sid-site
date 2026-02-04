import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import video from "../assets/video.mp4";

const particles = Array.from({ length: 10 });

export default function Hero() {
    const videoRef = useRef(null);

    const handleEnter = () => {
        videoRef.current?.play();
    };

    const handleLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#f7fbff] text-[#0b1b2b]">

            {/* Subtle grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.07]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(0,127,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,127,255,0.12) 1px, transparent 1px)
          `,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Soft blobs */}
            <motion.div
                animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
                transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1/3 left-1/4 z-[1] h-[520px] w-[520px] rounded-full bg-[#007fff]/20 blur-[140px]"
            />

            {/* Floating particles */}
            {particles.map((_, i) => (
                <motion.span
                    key={i}
                    animate={{ y: [0, -40, 0], x: [0, i % 2 ? -20 : 20, 0] }}
                    transition={{ duration: 16 + i * 2, repeat: Infinity }}
                    className="absolute z-[2] h-2 w-2 rounded-full bg-[#007fff]/25"
                    style={{
                        top: `${10 + i * 7}%`,
                        left: `${15 + (i % 5) * 15}%`,
                    }}
                />
            ))}

            {/* Layout */}
            <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="inline-block rounded-full border border-[#007fff]/20 bg-[#007fff]/10 px-4 py-1 text-sm text-[#0b1b2b]/80 backdrop-blur">
                        Digital Design & Development Studio
                    </span>

                    <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] text-[#0b1b2b]">
                        We create{" "}
                        <span className="font-light text-[#007fff]">
                            meaningful
                        </span>{" "}
                        digital experiences
                    </h1>

                    <p className="mt-8 max-w-xl text-lg text-[#0b1b2b]/70 leading-relaxed">
                        A creative web development agency focused on thoughtful design,
                        scalable technology, and long-term partnerships.
                    </p>

                    <div className="mt-12">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-xl bg-[#007fff] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#0066cc]"
                        >
                            Start a project
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT VIDEO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative mx-auto w-full max-w-xl"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <div className="overflow-hidden rounded-2xl border border-[#007fff]/20 bg-white shadow-2xl shadow-[#007fff]/20">
                        <video
                            ref={videoRef}
                            src={video}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition duration-500 hover:scale-[1.03]"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}


