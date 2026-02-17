import { motion } from "framer-motion";
import IntroVideo from "../assets/Intro.mp4";

export default function VideoSection() {
    return (
        <section className="relative py-20 bg-brand-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-dark/20 to-brand-muted/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />

                    <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl bg-white">
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

                        {/* Play/Pause Overlay (Optional, but keeping it simple for now as it's an 'Intro' video) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none" />

                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">Our Process in Action</h3>
                                <p className="text-white/80 max-w-lg">
                                    Watch how we transform ideas into scalable MVPs with precision and speed.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
