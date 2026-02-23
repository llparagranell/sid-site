import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function WhatsAppSticky() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
New Inquiry from WhatsApp Button:

Name: ${formData.name}
Email: ${formData.email}
Project Details: ${formData.details}
        `;
        const encodedMessage = encodeURIComponent(message.trim());
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
        setIsOpen(false);
        setFormData({ name: "", email: "", details: "" });
    };

    return (
        <>
            {/* Sticky Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl cursor-pointer hover:bg-[#20ba59] transition-colors"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
                        >
                            <div className="bg-brand-dark p-8 text-white relative">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute right-6 top-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                                >
                                    <X size={20} />
                                </button>
                                <h3 className="text-2xl font-black tracking-tight mt-2">Start a conversation</h3>
                                <p className="mt-2 text-white/80 font-medium">Please fill out the form below to chat with us on WhatsApp.</p>
                            </div>

                            <form onSubmit={handleWhatsApp} className="p-8 space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-2">Full name</label>
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full rounded-2xl border border-brand-dark/10 bg-brand-bg px-5 py-3 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-4 focus:ring-brand-dark/5 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-2">Email address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-2xl border border-brand-dark/10 bg-brand-bg px-5 py-3 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-4 focus:ring-brand-dark/5 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        name="details"
                                        value={formData.details}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        className="w-full rounded-2xl border border-brand-dark/10 bg-brand-bg px-5 py-3 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-4 focus:ring-brand-dark/5 transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-2xl bg-brand-dark py-4 text-base font-bold text-white transition hover:bg-brand-dark/90 shadow-xl shadow-brand-dark/10 cursor-pointer"
                                >
                                    Submit & Chat
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
