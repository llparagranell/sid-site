import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import { useState } from "react";
import { Sparkles, ArrowUpRight, TrendingUp, Zap, Users, Globe } from "lucide-react";
import PageHeaderBackground from "../components/PageHeaderBackground";

export default function CaseStudies() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    const studies = [
        {
            title: "Global FinTech Scaling",
            client: "AlphaPay",
            industry: "Finance",
            stat: "+300% Growth",
            desc: "Redesigning core transaction infrastructure to support 1M+ active users with sub-50ms latency.",
            tags: ["React Native", "AWS", "Node.js"]
        },
        {
            title: "Next-Gen SaaS Marketplace",
            client: "CloudNexus",
            industry: "SaaS",
            stat: "$2.4M ARR Boost",
            desc: "Developing a multi-tenant marketplace platform with advanced subscription management.",
            tags: ["Next.js", "PostgreSQL", "Tailwind"]
        },
        {
            title: "Healthcare Data Platform",
            client: "VitalSync",
            industry: "HealthTech",
            stat: "99.9% Compliance",
            desc: "Architecting a HIPAA-compliant data pipeline for real-time patient monitoring.",
            tags: ["Security", "Kubernetes", "TypeScript"]
        }
    ];

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            {/* Hero Section */}
            <header className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-7xl px-6 lg:px-16 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40">
                            PROVEN RESULTS
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark tracking-tighter leading-[0.9] mb-12 uppercase italic">
                            Case <span className="font-light not-italic">Studies.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/60 font-medium leading-relaxed">
                            Deep dives into how we partner with world-class teams to build
                            high-impact digital products.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Case Studies List */}
            <section className="pb-32 pt-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-16 space-y-24">
                    {studies.map((study, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-dark/40">{study.industry} / {study.client}</span>
                                    <div className="h-[1px] flex-1 bg-brand-dark/5" />
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-none">
                                    {study.title}
                                </h2>
                                <p className="text-brand-dark/60 text-lg md:text-xl font-medium leading-relaxed">
                                    {study.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-8 p-8 rounded-4xl bg-brand-dark text-white">
                                    <div>
                                        <div className="text-brand-accent mb-2"><TrendingUp size={24} /></div>
                                        <div className="text-2xl md:text-3xl font-black tracking-tighter">{study.stat}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Success Metric</div>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <div className="flex flex-wrap gap-2">
                                            {study.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[8px] font-bold py-1 px-2 border border-white/10 rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm text-brand-dark border-b-2 border-brand-dark pb-1 cursor-pointer"
                                >
                                    Full Case Study <ArrowUpRight size={18} />
                                </motion.button>
                            </div>

                            <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[60px] bg-brand-accent/20 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/10 to-transparent group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-12 border-2 border-brand-dark/5 rounded-[40px] flex items-center justify-center">
                                    <Globe size={120} className="text-brand-dark/5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 md:py-40 bg-brand-dark text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-12 uppercase">
                            Ready for your <br />
                            <span className="text-brand-accent italic font-light lowercase">Success Story?</span>
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleBooking}
                            className="bg-white text-brand-dark px-12 py-6 rounded-3xl font-black uppercase tracking-widest shadow-xl cursor-pointer"
                        >
                            Book Consultation <Sparkles size={20} className="ml-2 inline" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
