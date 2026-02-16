import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section className="bg-brand-bg relative overflow-hidden py-24 md:py-32 border-t border-brand-dark/10">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(30, 27, 75, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 27, 75, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                        Testimonials
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tight mb-12">
                        What <span className="italic font-light text-brand-dark">Clients Say</span>
                    </h2>
                    <p className="text-2xl md:text-3xl italic font-light text-brand-dark/70 leading-relaxed mb-8">
                        "Amazing experience! The team delivered exactly what we needed."
                    </p>
                    <p className="text-lg font-bold text-brand-dark">— Startup Founder</p>
                </motion.div>
            </div>
        </section>
    );
}



