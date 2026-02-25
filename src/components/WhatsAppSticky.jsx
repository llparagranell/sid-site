import { useState, useEffect } from "react";
import { motion as m, AnimatePresence as AP } from "framer-motion";
import { X, MessageCircle, Send } from "lucide-react";

export default function WhatsAppSticky() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        details: ""
    });

    // Lock body scroll when modal open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => (document.body.style.overflow = "unset");
    }, [isOpen]);

    // ESC close
    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const phoneNumber = "916260045626";

        const message = `
New Inquiry:

Name: ${formData.name}
Email: ${formData.email}
Project Details: ${formData.details}
        `;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message.trim()
        )}`;

        window.open(whatsappURL, "_blank");

        setIsOpen(false);
        setFormData({ name: "", email: "", details: "" });
    };

    return (
        <>
            {/* Sticky Button */}
            <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">

                {/* Tooltip */}
                <m.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                    className="hidden sm:block bg-white px-4 py-2 rounded-xl shadow-lg border border-black/5 text-sm font-semibold text-gray-700 pointer-events-none"
                >
                    Chat with us 👋
                </m.div>

                {/* Button */}
                <div className="relative">
                    {/* Soft Pulse */}
                    <m.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute inset-0 bg-[#25D366] rounded-full blur-lg"
                    />

                    <m.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => setIsOpen(true)}
                        className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#25D366] shadow-2xl border-4 border-white/30"
                    >
                        <MessageCircle className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </m.button>
                </div>
            </div>

            {/* Modal */}
            <AP>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">

                        {/* Backdrop */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <m.div
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 60, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="
                                relative w-full sm:max-w-md
                                bg-white
                                rounded-t-[32px] sm:rounded-[32px]
                                shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]
                                max-h-[90vh]
                                flex flex-col
                                overflow-hidden
                            "
                        >
                            {/* Mobile Handle */}
                            <div className="sm:hidden flex justify-center pt-3">
                                <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
                            </div>

                            {/* Header */}
                            <div className="relative px-6 sm:px-8 pt-6 pb-5 bg-gradient-to-br from-brand-dark to-black text-white">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                >
                                    <X size={18} />
                                </button>

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                                        <MessageCircle size={28} className="text-[#25D366]" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                        Let's Talk
                                    </h3>
                                    <p className="text-white/70 text-sm mt-2">
                                        Tell us about your project — we reply fast.
                                    </p>
                                </div>
                            </div>

                            {/* Form Body */}
                            <form
                                onSubmit={handleWhatsApp}
                                className="px-6 sm:px-8 py-6 space-y-5 overflow-y-auto"
                            >
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-4 focus:ring-black/5 focus:border-black/20 outline-none"
                                />

                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-4 focus:ring-black/5 focus:border-black/20 outline-none"
                                />

                                <textarea
                                    required
                                    rows={3}
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm resize-none focus:ring-4 focus:ring-black/5 focus:border-black/20 outline-none"
                                />

                                <m.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full rounded-xl bg-brand-dark py-4 text-white font-semibold shadow-lg flex items-center justify-center gap-2"
                                >
                                    Start Chat
                                    <Send size={16} />
                                </m.button>

                                <p className="text-center text-xs text-gray-400">
                                    Typical response time: under 2 hours
                                </p>
                            </form>
                        </m.div>
                    </div>
                )}
            </AP>
        </>
    );
}