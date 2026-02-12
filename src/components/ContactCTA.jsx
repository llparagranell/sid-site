import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
    return (
        <section className="relative bg-[#0b0f14] pt-40 pb-0">

            {/* Floating card */}
            <div className="relative z-20 mx-auto max-w-6xl px-8 sm:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl border border-[#4da3ff]/20 bg-[#0e1520] px-6 py-14 sm:px-10 sm:py-16 md:px-12 md:py-20 text-center shadow-xl shadow-[#4da3ff]/10"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-4 py-1 text-sm text-[#e6eefb]/80">
                        Let's connect
                    </span>

                    {/* Heading */}
                    <h2 className="mt-8 text-4xl md:text-5xl font-semibold text-[#e6eefb]">
                        Let's connect{" "}
                        <span className="text-[#4da3ff] font-light">
                            today?
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-[#e6eefb]/70">
                        See the difference between working with industry experts versus
                        settling for less.
                    </p>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className="group inline-flex mt-10 items-center gap-2 rounded-xl bg-[#4da3ff] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:bg-[#2f7fe6]"
                    >
                        Book Your Free Consultation
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>
            </div>

            {/* Spacer that lets footer overlap (~10%) */}
            <div className="h-32" />
        </section>
    );
}




