import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
    return (
        <section className="relative bg-white pt-40 pb-0">

            {/* Floating card */}
            <div className="relative z-20 mx-auto max-w-6xl px-8 sm:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl border border-[#E7DDC8] bg-white px-12 py-20 text-center shadow-xl"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#E7DDC8] bg-[#FBF8F3] px-4 py-1 text-sm text-gray-700">
                        ✨ Let’s connect
                    </span>

                    {/* Heading */}
                    <h2 className="mt-8 text-4xl md:text-5xl font-semibold text-gray-900">
                        Let’s connect{" "}
                        <span className="text-gray-500 font-light">
                            today?
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                        See the difference between working with industry experts versus
                        settling for less.
                    </p>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className="group inline-flex mt-10 items-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:shadow-xl"
                    >
                        Book Your Free Consultation
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>
            </div>

            {/* Spacer that lets footer overlap (≈10%) */}
            <div className="h-32" />
        </section>
    );
}
