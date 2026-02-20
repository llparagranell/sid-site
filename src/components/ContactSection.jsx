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

    const handleWhatsApp = (e) => {
        e.preventDefault();

        const phoneNumber = "916260045626";

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
                        action="https://formspree.io/f/paragrane000@gmail.com"
                        method="POST"
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

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="flex-1 rounded-2xl bg-brand-dark px-8 py-5 text-base font-bold text-white transition hover:bg-brand-dark/95 shadow-2xl shadow-brand-dark/10 cursor-pointer"
                            >
                                Send via Email
                            </button>
                            <button
                                type="button"
                                onClick={handleWhatsApp}
                                className="flex-1 rounded-2xl bg-[#25D366] px-8 py-5 text-base font-bold text-white transition hover:brightness-110 shadow-2xl shadow-green-500/10 cursor-pointer flex items-center justify-center gap-2"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp Chat
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

