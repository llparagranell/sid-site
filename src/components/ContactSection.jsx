import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        details: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    return (
        <section
            id="contact"
            className="bg-brand-dark relative overflow-hidden py-24 md:py-32"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="mx-auto max-w-7xl px-0 sm:px-10 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-xl mx-auto lg:mx-0 text-left px-6 sm:px-0"
                    >
                        <span className="inline-block mb-6 rounded-full border border-white/10 bg-brand-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-accent">
                            Let's connect
                        </span>

                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
                            Let's build something{" "}
                            <span className="italic font-light text-brand-accent">
                                meaningful?
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-white/60 font-medium leading-relaxed block">
                            We are always ready to have a discussion about your project,
                            ideas, or challenges. Tell us what you're building, and we'll
                            explore how we can help bring it to life.
                        </p>

                        <ul className="mt-10 space-y-4 text-white/50 font-bold block">
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 mt-1.5 rounded-full bg-brand-accent shrink-0" />
                                <span className="text-sm md:text-base">Clear communication & timelines</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 mt-1.5 rounded-full bg-brand-accent shrink-0" />
                                <span className="text-sm md:text-base">Transparent pricing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 mt-1.5 rounded-full bg-brand-accent shrink-0" />
                                <span className="text-sm md:text-base">Long-term collaboration & support</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.form
                        action="https://formspree.io/f/paragrane000@gmail.com"
                        method="POST"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full rounded-3xl sm:rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-14 shadow-2xl"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Input
                                label="Full name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                            />
                            <Input
                                label="Email address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <Input
                                label="Company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Your company name"
                            />
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-bold text-white/80 mb-2">
                                Project details
                            </label>
                            <textarea
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Tell us about your project..."
                                required
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 transition-all font-medium"
                            />
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="flex-1 rounded-xl bg-brand-accent px-6 py-4 text-base font-bold text-brand-dark transition hover:bg-brand-accent/90 shadow-xl cursor-pointer"
                            >
                                Send via Email
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function Input({ label, type = "text", name, value, onChange, placeholder, required = false }) {
    return (
        <div>
            <label className="block text-sm font-bold text-white/80 mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 transition-all font-medium"
            />
        </div>
    );
}

