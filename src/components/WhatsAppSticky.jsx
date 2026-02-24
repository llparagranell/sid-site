import { useState } from "react";
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
            {/* Sticky Button Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {/* Hover Label */}
                <m.div
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : 20,
                        scale: isHovered ? 1 : 0.8
                    }}
                    className="bg-white px-4 py-2 rounded-xl shadow-xl border border-brand-dark/5 text-brand-dark text-sm font-bold whitespace-nowrap pointer-events-none"
                >
                    Chat with us 👋
                </m.div>

                {/* Main Button */}
                <div className="relative group">
                    {/* Pulse Effect */}
                    <m.div
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-[#25D366] rounded-full blur-md"
                    />

                    <m.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => setIsOpen(true)}
                        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl cursor-pointer hover:bg-[#20ba59] transition-colors overflow-hidden border-2 border-white/20"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-7 h-7 fill-white relative z-10"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <m.div
                            className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        />
                    </m.button>
                </div>
            </div>

            {/* Modal */}
            <AP>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md"
                        />
                        <m.div
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border border-brand-dark/5"
                        >
                            {/* Header */}
                            <div className="bg-brand-dark p-8 text-white relative overflow-hidden">
                                {/* Grid Background */}
                                <div className="absolute inset-0 opacity-[0.05]"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px'
                                    }}
                                />

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute right-6 top-6 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-all cursor-pointer z-20 group"
                                >
                                    <X size={18} className="group-hover:rotate-90 transition-transform" />
                                </button>

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10">
                                        <MessageCircle size={32} className="text-[#25D366]" />
                                    </div>
                                    <h3 className="text-3xl font-black tracking-tight">Let's Chat</h3>
                                    <p className="mt-2 text-white/70 font-medium">Have a project in mind? We'd love to hear from you.</p>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleWhatsApp} className="p-8 space-y-6 bg-brand-bg/30 relative">
                                <div className="space-y-4">
                                    <div className="relative">
                                        <label className="block text-xs font-black text-brand-dark/40 uppercase tracking-widest mb-2 ml-1">Full name</label>
                                        <input
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full rounded-2xl border border-brand-dark/10 bg-white px-6 py-4 text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-4 focus:ring-brand-dark/5 focus:border-brand-dark/20 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-xs font-black text-brand-dark/40 uppercase tracking-widest mb-2 ml-1">Email address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full rounded-2xl border border-brand-dark/10 bg-white px-6 py-4 text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-4 focus:ring-brand-dark/5 focus:border-brand-dark/20 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-xs font-black text-brand-dark/40 uppercase tracking-widest mb-2 ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={3}
                                            name="details"
                                            value={formData.details}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project..."
                                            className="w-full rounded-2xl border border-brand-dark/10 bg-white px-6 py-4 text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-4 focus:ring-brand-dark/5 focus:border-brand-dark/20 transition-all shadow-sm resize-none"
                                        />
                                    </div>
                                </div>

                                <m.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full rounded-2xl bg-brand-dark py-5 text-base font-bold text-white transition-all shadow-xl shadow-brand-dark/20 cursor-pointer flex items-center justify-center gap-2 group overflow-hidden relative"
                                >
                                    <span className="relative z-10">Start Chatting</span>
                                    <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </m.button>

                                <p className="text-center text-[10px] text-brand-dark/40 font-bold uppercase tracking-tighter">
                                    Typical response time: Under 2 hours
                                </p>
                            </form>
                        </m.div>
                    </div>
                )}
            </AP>
        </>
    );
}
