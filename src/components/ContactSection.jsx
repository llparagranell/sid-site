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

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "919993638242";

        const message = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Details: ${formData.details}
        `;

        const encodedMessage = encodeURIComponent(message.trim());
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section
            id="contact"
            className="bg-brand-bg relative overflow-hidden py-24 md:py-32"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)`,
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
                        <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                            Let's connect
                        </span>

                        <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tight">
                            Let's build something{" "}
                            <span className="italic font-light text-brand-dark">
                                meaningful?
                            </span>
                        </h2>

                        <p className="mt-6 text-lg text-brand-dark/70 font-medium leading-relaxed hidden sm:block">
                            We are always ready to have a discussion about your project,
                            ideas, or challenges. Tell us what you're building, and we'll
                            explore how we can help bring it to life.
                        </p>

                        <ul className="mt-10 space-y-4 text-brand-dark/60 font-bold hidden sm:block">
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 mt-1.5 rounded-full bg-brand-dark shrink-0" />
                                <span>Clear communication & timelines</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 mt-1.5 rounded-full bg-brand-dark shrink-0" />
                                <span>Transparent pricing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 mt-1.5 rounded-full bg-brand-dark shrink-0" />
                                <span>Long-term collaboration & support</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full rounded-none sm:rounded-[48px] border-y sm:border border-brand-dark/10 bg-brand-accent/20 backdrop-blur-sm p-8 md:p-14 shadow-sm"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Input
                                label="Full name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
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
                            <label className="block text-sm font-bold text-brand-dark mb-2">
                                Project details
                            </label>
                            <textarea
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Tell us about your project..."
                                required
                                className="w-full rounded-2xl border border-brand-dark/10 bg-brand-bg px-5 py-4 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-4 focus:ring-brand-dark/5 transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-10 w-full rounded-2xl bg-brand-dark px-8 py-5 text-base font-bold text-white transition hover:bg-brand-dark/95 shadow-2xl shadow-brand-dark/10 cursor-pointer"
                        >
                            Send message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function Input({ label, type = "text", name, value, onChange, placeholder, required = false }) {
    return (
        <div>
            <label className="block text-sm font-bold text-brand-dark mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-2xl border border-brand-dark/10 bg-brand-bg px-5 py-4 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-4 focus:ring-brand-dark/5 transition-all"
            />
        </div>
    );
}

