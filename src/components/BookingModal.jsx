import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Phone, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";
import { industries } from "../constants/industryData";

export default function BookingModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1); // 1: Date selection, 2: Form, 3: Success
    const [selectedDate, setSelectedDate] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        industry: industries[0]?.title || "Generic",
    });

    // Body Scroll Lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Reset when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setStep(1);
                setSelectedDate(null);
                setFormData({
                    name: "",
                    mobile: "",
                    industry: industries[0]?.title || "Generic",
                });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setStep(3); // Go to success state
    };

    // Custom Simple Calendar Logic (Next 14 Days)
    const generateDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const dates = generateDates();

    const formatDate = (date) => {
        if (!date) return "";
        return date.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' });
    };

    const isSameDate = (d1, d2) => {
        return d1 && d2 && d1.toDateString() === d2.toDateString();
    };

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
                    style={{ zIndex: 9999999 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
                        style={{ zIndex: -1 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-xl bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-brand-dark/5"
                        style={{ zIndex: 1 }}
                    >
                        {/* Header */}
                        <div className="p-8 pb-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark shadow-inner">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-brand-dark tracking-tighter uppercase leading-none">
                                        Book Your
                                    </h2>
                                    <p className="text-brand-dark italic font-light text-xl leading-none mt-1">
                                        Consultation
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center bg-brand-bg/50 hover:bg-brand-dark/5 rounded-full transition-all text-brand-dark/40 hover:text-brand-dark cursor-pointer shadow-sm"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 pt-4">
                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-brand-dark/40">
                                            <Calendar size={16} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Select a Date</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-brand-dark/20 uppercase tracking-widest">Step 01/02</span>
                                    </div>

                                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-[350px] overflow-y-auto pr-2 scrollbar-hide py-2">
                                        {dates.map((date, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => setSelectedDate(date)}
                                                className={`aspect-square rounded-2xl border-2 transition-all text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer group
                                                    ${isSameDate(selectedDate, date)
                                                        ? "border-brand-dark bg-brand-dark text-white shadow-xl scale-105"
                                                        : "border-brand-dark/5 hover:border-brand-dark/20 text-brand-dark bg-brand-bg/40 hover:scale-105"
                                                    }`}
                                            >
                                                <span className={`text-[8px] uppercase font-black tracking-tighter ${isSameDate(selectedDate, date) ? "opacity-60" : "opacity-40"}`}>
                                                    {date.toLocaleDateString("en-US", { weekday: 'short' })}
                                                </span>
                                                <span className="text-base font-black tracking-tighter leading-none">
                                                    {date.getDate()}
                                                </span>
                                                <span className={`text-[8px] font-bold ${isSameDate(selectedDate, date) ? "opacity-60" : "opacity-40"}`}>
                                                    {date.toLocaleDateString("en-US", { month: 'short' })}
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-brand-dark/5">
                                        <button
                                            type="button"
                                            disabled={!selectedDate}
                                            onClick={() => setStep(2)}
                                            className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl
                                                ${selectedDate
                                                    ? "bg-brand-dark text-white hover:scale-[1.02] cursor-pointer"
                                                    : "bg-brand-dark/5 text-brand-dark/10 cursor-not-allowed"
                                                }`}
                                        >
                                            Next Step
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-brand-dark/40">
                                            <User size={16} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Personal Details</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-brand-dark/20 uppercase tracking-widest">Step 02/02</span>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/20 group-focus-within:text-brand-dark transition-colors" size={18} />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className="w-full bg-brand-bg/50 border-2 border-brand-dark/5 rounded-2xl py-4 pl-12 pr-4 text-brand-dark font-bold placeholder:text-brand-dark/20 focus:border-brand-dark/20 focus:bg-white outline-none transition-all shadow-sm"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] ml-1">Mobile Number</label>
                                                <div className="relative group">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/20 group-focus-within:text-brand-dark transition-colors" size={18} />
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="+1"
                                                        className="w-full bg-brand-bg/50 border-2 border-brand-dark/5 rounded-2xl py-4 pl-12 pr-4 text-brand-dark font-bold placeholder:text-brand-dark/20 focus:border-brand-dark/20 focus:bg-white outline-none transition-all shadow-sm"
                                                        value={formData.mobile}
                                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] ml-1">Industry</label>
                                                <div className="relative group">
                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-dark/20 pointer-events-none transition-colors" size={18} />
                                                    <select
                                                        className="w-full bg-brand-bg/50 border-2 border-brand-dark/5 rounded-2xl py-4 pl-4 pr-12 text-brand-dark font-bold focus:border-brand-dark/20 focus:bg-white outline-none transition-all appearance-none cursor-pointer shadow-sm"
                                                        value={formData.industry}
                                                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                                    >
                                                        {industries.map((ind, idx) => (
                                                            <option key={idx} value={ind.title}>{ind.title}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6 flex gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="px-6 py-5 rounded-2xl font-bold uppercase tracking-widest text-brand-dark/30 hover:bg-brand-dark/5 transition-all text-sm cursor-pointer"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`flex-1 py-5 bg-brand-dark text-white rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-3
                                                    ${isSubmitting ? "opacity-70 cursor-not-allowed text-white/50" : "hover:scale-[1.02] cursor-pointer"}`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                        Processing
                                                    </>
                                                ) : "Confirm Booking"}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                                >
                                    <div className="w-24 h-24 bg-brand-accent rounded-3xl flex items-center justify-center text-brand-dark shadow-xl rotate-3">
                                        <CheckCircle2 size={48} className="-rotate-3" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-4xl font-black text-brand-dark uppercase tracking-tighter leading-tight">
                                            You're all set!
                                        </h3>
                                        <p className="text-brand-dark/60 font-medium text-lg leading-relaxed max-w-sm">
                                            We'll reach out shortly to discuss your project for <span className="text-brand-dark font-bold underline decoration-brand-accent underline-offset-4">{formatDate(selectedDate)}</span>.
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="mt-4 px-12 py-5 bg-brand-dark text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:scale-[1.05] transition-all cursor-pointer"
                                    >
                                        Back to home
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}
