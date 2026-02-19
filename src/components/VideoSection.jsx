import { motion } from "framer-motion";
import IntroVideo from "../assets/Intro.mp4";

export default function VideoSection() {
    return (
        <section className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">
            {/* Background Transitions / Grids */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(30, 27, 121, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 27, 121, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
                >
                    <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                        Experience Our Work
                    </span>

                    <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tight">
                        Our Process <br className="hidden sm:block" />
                        <span className="text-brand-dark italic font-light">
                            in Action
                        </span>
                    </h2>

                    <p className="mt-6 text-brand-dark/70 text-lg md:text-xl leading-relaxed">
                        Watch how we transform ideas into scalable MVPs with precision,
                        speed, and engineering excellence.
                    </p>
                </motion.div>
            </div>

            {/* Full Width Video Container */}
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden shadow-2xl"
            >
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={IntroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Subtle Overlay to maintain premium feel */}
                <div className="absolute inset-0 bg-brand-dark/10" />
            </motion.div>
        </section>
    );
}
