import { motion } from "framer-motion";
import { useState } from "react";
import {
    Code2, Search, ShieldCheck, RefreshCcw, CheckCircle2,
    Cloud, Rocket, TrendingUp, Layers, Database, Users, LayoutDashboard
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";

const serviceTypes = [
    {
        title: "Internal Business Systems",
        desc: "Still managing work on spreadsheets or multiple disconnected tools? We can simplify that. Everything in one place. Clear. Organized. Efficient.",
        points: ["Custom dashboards", "Employee management", "CRM & workflow tools", "Reporting systems"],
        icon: LayoutDashboard
    },
    {
        title: "SaaS Product Development",
        desc: "If you have an idea for a software product, we help you turn it into something real. From idea to launch with confidence.",
        points: ["Scalable product architecture", "Secure login & user management", "Subscription & billing setup", "Cloud deployment"],
        icon: Rocket
    },
    {
        title: "Enterprise & Large-Scale Systems",
        desc: "For growing businesses that need structured, secure, and powerful systems. Built to handle growth — without breaking.",
        points: ["Advanced backend systems", "Multi-role access control", "Secure integrations", "High-performance databases"],
        icon: Users
    },
    {
        title: "Improving Existing Software",
        desc: "Already have a system but facing issues? Sometimes you don't need to rebuild — you just need to improve the right parts.",
        points: ["Performance improvements", "System upgrades", "API integrations", "Modern UI redesign"],
        icon: RefreshCcw
    }
];

const techStack = [
    { name: "React", category: "Frontend", icon: Code2 },
    { name: "Node.js", category: "Backend", icon: Code2 },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "AWS", category: "Cloud", icon: Cloud },
    { name: "Docker", category: "DevOps", icon: Layers },
];

const processSteps = [
    { id: "01", title: "Understanding Your Business", desc: "We take time to understand how you work and what's not working.", icon: Search },
    { id: "02", title: "Planning the Right Structure", desc: "We design a clear and scalable system architecture.", icon: Layers },
    { id: "03", title: "Design (If Needed)", desc: "We create simple and intuitive interfaces.", icon: Code2 },
    { id: "04", title: "Development in Phases", desc: "We build step by step, keeping you updated throughout.", icon: Code2 },
    { id: "05", title: "Testing & Refinement", desc: "We make sure everything runs smoothly before launch.", icon: ShieldCheck },
    { id: "06", title: "Launch & Ongoing Support", desc: "After launch, we stay available as your system grows.", icon: Rocket },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

export default function CustomSoftware() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="text-center">
                        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40">CUSTOM SOFTWARE</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-6">
                            Custom Software That <br />
                            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="italic font-light text-brand-dark/70">Actually Fits Your Business.</motion.span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-brand-dark/60 font-medium text-lg max-w-2xl mx-auto mb-10">
                            We build software around the way you work — so your systems support your growth, not slow it down.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-brand-dark text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm shadow-2xl transition-all cursor-pointer flex items-center gap-3">
                                Let's Build Your Software <Code2 size={18} />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-white border-2 border-brand-dark/10 text-brand-dark px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm transition-all cursor-pointer">
                                Book Free Consultation
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -left-20 w-96 h-96 border border-brand-dark/5 rounded-full pointer-events-none opacity-20" />
            </section>

            <section className="py-24 md:py-40 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]" style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-10 text-brand-accent italic font-light">
                                Because Every Business <br /><span className="text-white not-italic font-black">Works</span><br />Differently.
                            </h2>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-1 bg-brand-accent mb-10" />
                            <div className="space-y-6 text-lg text-white/60 font-medium leading-relaxed">
                                <p>No two businesses operate the same way. That's why generic software often feels limiting. You end up adjusting your workflow to match the tool — instead of the tool adapting to you.</p>
                                <p>At Devgrowth Solutions, we build custom software that fits naturally into your operations. Whether you need an internal system, a SaaS product, or a platform to manage customers and processes.</p>
                                <p>Our goal is simple: Build software that solves real problems and grows with your business.</p>
                            </div>
                        </motion.div>
                        <div className="relative flex justify-center">
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "backOut" }}>
                                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-[340px] h-[340px] border-[12px] border-white/10 rounded-[48px] overflow-hidden bg-brand-bg relative shadow-2xl mx-auto">
                                    <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80" alt="Custom Software" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                                        <div className="p-6 bg-brand-accent/90 backdrop-blur-md rounded-2xl text-brand-dark text-center shadow-2xl">
                                            <Code2 size={32} className="mx-auto mb-2" />
                                            <span className="text-xs font-black uppercase tracking-widest">Built for You</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Code Modular View (Unique Component) */}
            <section className="py-24 bg-brand-bg relative overflow-hidden border-b border-brand-dark/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                            <div className="relative w-full h-[400px] bg-brand-dark rounded-[48px] overflow-hidden shadow-2xl p-8 flex flex-col gap-4">
                                <div className="flex gap-2">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="h-3 w-3 rounded-full bg-white/10" />
                                    ))}
                                </div>
                                <div className="flex-1 rounded-2xl bg-brand-bg/20 border border-white/5 p-6 font-mono text-xs text-brand-accent/40 overflow-hidden relative">
                                    <motion.div
                                        animate={{ y: [0, -200, 0] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="space-y-4"
                                    >
                                        <div className="h-4 w-3/4 bg-brand-accent/10 rounded" />
                                        <div className="h-4 w-1/2 bg-brand-accent/10 rounded" />
                                        <div className="h-4 w-5/6 bg-brand-accent/10 rounded" />
                                        <div className="h-4 w-2/3 bg-brand-accent/10 rounded" />
                                        <div className="h-4 w-3/4 bg-brand-accent/10 rounded" />
                                        <div className="h-4 w-1/2 bg-brand-accent/10 rounded" />
                                    </motion.div>

                                    {/* Abstract Modular Blocks */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="grid grid-cols-2 gap-4">
                                            {[1, 2, 3, 4].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
                                                    whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                                    className="w-24 h-24 bg-brand-accent border border-brand-dark/20 rounded-2xl flex items-center justify-center text-brand-dark shadow-xl"
                                                >
                                                    <Layers size={32} />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4 text-xs font-bold tracking-[0.3em] text-brand-dark opacity-30 uppercase"
                            >
                                Software Architecture
                            </motion.span>
                            <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter mb-8 leading-tight">
                                Modular & <br />
                                <span className="italic font-light">Scalable Codebases.</span>
                            </h3>
                            <p className="text-brand-dark/60 text-lg font-medium leading-relaxed mb-10">
                                We don't just write code; we architect systems. Our modular approach ensures that your software is extensible, maintainable, and built for the long haul. Every module is a building block for your future growth.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: "Scalable Micro-services", icon: CheckCircle2 },
                                    { label: "Clean Code Architecture", icon: CheckCircle2 },
                                    { label: "Automated Deployment", icon: CheckCircle2 },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.icon className="text-brand-accent" size={20} />
                                        <span className="text-sm font-bold text-brand-dark/80">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">WHAT WE BUILD</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">What We Can <br /><span className="italic font-light">Build for You.</span></h2>
                    </motion.div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {serviceTypes.map((service, idx) => (
                            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.06)" }} className="p-12 rounded-[48px] bg-white border border-brand-dark/5 hover:border-brand-accent/20 transition-all duration-500 group">
                                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="h-16 w-16 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500"><service.icon size={32} /></motion.div>
                                <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tighter">{service.title}</h3>
                                <p className="text-brand-dark/50 font-medium leading-relaxed mb-8 text-lg">{service.desc}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-center gap-3 text-sm font-bold text-brand-dark/70"><CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-40 bg-brand-accent/10 relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">HOW WE BUILD IT</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter mb-8">Technologies <br /><span className="italic font-light">We Use.</span></h2>
                    </motion.div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                        {techStack.map((tech, idx) => (
                            <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} className="p-8 rounded-[32px] bg-white shadow-sm border border-brand-dark/5 flex flex-col items-center justify-center group hover:bg-brand-dark transition-all duration-500">
                                <tech.icon className="text-brand-dark group-hover:text-brand-accent mb-4 transition-colors" size={28} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 group-hover:text-white/40 block mb-1">{tech.category}</span>
                                <span className="text-xs font-bold group-hover:text-white transition-colors text-center">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">HOW WE WORK</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Our Development <br /><span className="italic font-light">Process.</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processSteps.map((step, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="relative p-10 rounded-[40px] bg-white border border-brand-dark/5 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                                <span className="absolute top-8 right-10 text-5xl font-black text-brand-dark/5 group-hover:text-brand-accent/20 transition-colors">{step.id}</span>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500"><step.icon size={24} /></div>
                                    <h3 className="text-xl font-black text-brand-dark mb-4 tracking-tighter leading-tight">{step.title}</h3>
                                    <p className="text-brand-dark/50 font-medium text-sm leading-relaxed">{step.desc}</p>
                                </div>
                                <motion.div className="absolute bottom-0 left-0 h-1.5 bg-brand-dark group-hover:bg-brand-accent transition-colors" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 + idx * 0.1 }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-28 md:py-40 bg-brand-bg">
                <div className="w-full sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-16">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="relative w-full rounded-none sm:rounded-[80px] bg-brand-dark px-5 sm:px-12 md:px-20 py-20 sm:py-24 md:py-32 text-center overflow-hidden shadow-2xl">
                        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(162,237,219,0.15),transparent_70%)]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight md:leading-[0.9] tracking-tight mb-8 sm:mb-10 uppercase">
                                We don't just develop software. <br />We build systems that make your business <span className="text-brand-accent italic font-light lowercase">smarter</span>.
                            </h2>
                            <motion.button whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(162, 237, 219, 0.4)" }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-brand-accent text-brand-dark px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-black uppercase tracking-widest transition-all shadow-xl cursor-pointer flex items-center gap-3 mx-auto mt-8 sm:mt-10">
                                Let's Build Your Software <Code2 size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
