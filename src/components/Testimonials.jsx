import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section className="bg-[#f7fbff] py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-8 text-3xl font-bold text-[#0b1b2b]">
                        What Clients Say
                    </h2>
                    <p className="italic text-[#0b1b2b]/70">
                        "Amazing experience! The team delivered exactly what we needed."
                    </p>
                    <p className="mt-4 font-semibold text-[#0b1b2b]">- Startup Founder</p>
                </motion.div>
            </div>
        </section>
    );
}



