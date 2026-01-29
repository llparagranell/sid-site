import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-8 text-3xl font-bold text-main-text">
                        What Clients Say
                    </h2>
                    <p className="italic text-sub-text">
                        “Amazing experience! The team delivered exactly what we needed.”
                    </p>
                    <p className="mt-4 font-semibold text-main-text">— Startup Founder</p>
                </motion.div>
            </div>
        </section>
    );
}
