import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-[#0b0f14] py-24 sm:py-32 lg:py-40"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ================= LEFT: CONTENT ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
                    >
                        {/* Small intro */}
                        <span className="inline-block mb-4 rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-4 py-1 text-sm text-[#e6eefb]/80">
                            Let's connect
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#e6eefb] leading-tight">
                            Let's build something{" "}
                            <span className="font-light text-[#4da3ff]">
                                meaningful?
                            </span>
                        </h2>

                        <p className="mt-6 text-lg text-[#e6eefb]/70">
                            We are always ready to have a discussion about your project,
                            ideas, or challenges. Tell us what you're building, and we'll
                            explore how we can help bring it to life.
                        </p>

                        <ul className="mt-10 space-y-4 text-[#e6eefb]/70 text-left max-w-md mx-auto lg:mx-0">
                            <li>- Clear communication & timelines</li>
                            <li>- Transparent pricing</li>
                            <li>- Long-term collaboration & support</li>
                        </ul>
                    </motion.div>

                    {/* ================= RIGHT: FORM ================= */}
                    <motion.form
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="
              w-full
              rounded-[28px]
              border border-[#4da3ff]/20
              bg-[#0e1520]
              p-10 sm:p-12
              shadow-2xl
              shadow-[#4da3ff]/10
            "
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Input label="Full name" placeholder="John Doe" />
                            <Input label="Email address" placeholder="you@example.com" />
                        </div>

                        <div className="mt-6">
                            <Input label="Company" placeholder="Your company name" />
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-[#e6eefb]/80 mb-2">
                                Project details
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Tell us about your project..."
                                className="
                  w-full rounded-xl border border-[#4da3ff]/20
                  bg-[#0b0f14] px-4 py-3
                  text-sm text-[#e6eefb]
                  placeholder:text-[#e6eefb]/50
                  focus:outline-none focus:ring-2 focus:ring-[#4da3ff]/20
                  transition
                "
                            />
                        </div>

                        <button
                            type="submit"
                            className="
                mt-10 w-full
                rounded-xl bg-[#4da3ff]
                px-8 py-4
                text-sm font-medium text-white
                transition hover:bg-[#2f7fe6]
              "
                        >
                            Send message
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}

/* ================= INPUT ================= */
function Input({ label, placeholder }) {
    return (
        <div>
            <label className="block text-sm font-medium text-[#e6eefb]/80 mb-2">
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="
          w-full rounded-xl border border-[#4da3ff]/20
          bg-[#0b0f14] px-4 py-3
          text-sm text-[#e6eefb]
          placeholder:text-[#e6eefb]/50
          focus:outline-none focus:ring-2 focus:ring-[#4da3ff]/20
          transition
        "
            />
        </div>
    );
}




