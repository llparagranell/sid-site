import { motion } from "framer-motion";
import { useState } from "react";
import {
    Code2, Rocket, Cloud, Brain, CheckCircle2,
    Search, Layers, ShieldCheck, RefreshCcw, Database, Zap
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import PageHeaderBackground from "../../components/PageHeaderBackground";

const solutions = [
    {
        title: "SaaS Platforms",
        desc: "A strong foundation for your software product, designed to handle growth from day one.",
        points: ["Secure user authentication", "Subscription & billing systems", "Admin dashboards", "Cloud-based deployment"],
        icon: Rocket
    },
    {
        title: "Backend & API Development",
        desc: "Behind every great software product is a strong backend. We build systems that developers enjoy working on.",
        points: ["Clean API development", "Structured database design", "Performance optimization", "Scalable architecture"],
        icon: Code2
    },
    {
        title: "Cloud & DevOps Setup",
        desc: "Releasing updates shouldn't feel risky. We help you deploy confidently and consistently.",
        points: ["Automated deployment pipelines", "Containerized environments", "Monitoring and logging", "Auto-scaling systems"],
        icon: Cloud
    },
    {
        title: "Improving Existing Systems",
        desc: "Already have a product but facing issues? Sometimes small structural changes make a big difference.",
        points: ["Refactoring messy code", "Performance tuning", "Architecture restructuring", "Cloud migration"],
        icon: RefreshCcw
    },
    {
        title: "Smart Features & AI Integration",
        desc: "We integrate AI only where it actually adds value to your product.",
        points: ["Automation features", "Predictive insights", "Recommendation systems", "Data-driven dashboards"],
        icon: Brain
    }
];

const whyChoose = [
    "We understand product thinking",
    "We build with scalability in mind",
    "We prioritize clean and maintainable systems",
    "We focus on long-term performance",
    "We communicate clearly and transparently",
];

const processSteps = [
    { id: "01", title: "Product Discovery", desc: "Understanding your product goals, users, and technical constraints.", icon: Search },
    { id: "02", title: "Architecture Planning", desc: "Designing scalable, maintainable system structure.", icon: Layers },
    { id: "03", title: "Development", desc: "Agile development with regular updates and demos.", icon: Code2 },
    { id: "04", title: "Testing & Code Review", desc: "Quality checks, performance tests, and security audits.", icon: ShieldCheck },
    { id: "05", title: "Deployment & DevOps", desc: "CI/CD setup, containerization, and cloud deployment.", icon: Rocket },
    { id: "06", title: "Ongoing Partnership", desc: "Long-term support, feature development, and scaling.", icon: RefreshCcw },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

export default function ItSoftware() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="text-center">
                        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40">IT & SOFTWARE INDUSTRY</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-6">
                            We Help Tech Companies Build <br />
                            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="italic font-light text-brand-dark/70">Stronger, Scalable Products.</motion.span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-brand-dark/60 font-medium text-lg max-w-2xl mx-auto mb-10">
                            From SaaS platforms to complex backend systems, we support IT and software businesses with technology that's built to grow.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-brand-dark text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm shadow-2xl transition-all cursor-pointer flex items-center gap-3">
                                Let's Build Your Product <Code2 size={18} />
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
                                When You're in Tech, <br /><span className="text-white not-italic font-black">Expectations</span><br />Are Higher.
                            </h2>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-1 bg-brand-accent mb-10" />
                            <div className="space-y-6 text-lg text-white/60 font-medium leading-relaxed">
                                <p>Users expect smooth performance. Investors expect scalability. Teams expect clean systems. And updates need to go live without breaking anything.</p>
                                <p>At Devgrowth Solutions, we work with tech companies as a long-term partner. We focus on building systems that are clean, scalable, and ready for growth.</p>
                            </div>
                        </motion.div>
                        <div className="relative flex justify-center">
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "backOut" }}>
                                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-[340px] h-[420px] border-[12px] border-white/10 rounded-[48px] overflow-hidden bg-brand-bg relative shadow-2xl mx-auto">
                                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="IT Software" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-brand-dark/40 flex items-end justify-center pb-8">
                                        <div className="p-4 bg-brand-accent/90 backdrop-blur-md rounded-2xl text-brand-dark text-center shadow-2xl">
                                            <Zap size={24} className="mx-auto mb-1" />
                                            <span className="text-xs font-black uppercase tracking-widest">Built for Scale</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DevOps Workflow Visual (Unique Component) */}
            <section className="py-24 bg-brand-bg relative overflow-hidden border-b border-brand-dark/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                            <div className="relative w-full h-[400px] bg-brand-dark rounded-[48px] overflow-hidden shadow-2xl p-12 flex items-center justify-center">
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="relative w-full max-w-[300px]"
                                >
                                    {/* Infinity Loop SVG */}
                                    <svg viewBox="0 0 200 100" className="w-full h-auto text-brand-accent/20">
                                        <path
                                            d="M50,25 C10,25 10,75 50,75 C90,75 110,25 150,25 C190,25 190,75 150,75 C110,75 90,25 50,25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <motion.path
                                            d="M50,25 C10,25 10,75 50,75 C90,75 110,25 150,25 C190,25 190,75 150,75 C110,75 90,25 50,25"
                                            fill="none"
                                            stroke="brandAccent"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0, stroke: "#A2EDDB" }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        />
                                    </svg>

                                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                        <Code2 className="text-brand-accent mb-1" size={20} />
                                        <span className="text-[8px] font-black tracking-widest text-white/40 uppercase">Develop</span>
                                    </div>
                                    <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                        <Rocket className="text-brand-accent mb-1" size={20} />
                                        <span className="text-[8px] font-black tracking-widest text-white/40 uppercase">Deploy</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4 text-xs font-bold tracking-[0.3em] text-brand-dark opacity-30 uppercase"
                            >
                                Lifecycle Management
                            </motion.span>
                            <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter mb-8 leading-tight">
                                Continuous <br />
                                <span className="italic font-light">Innovation Loop.</span>
                            </h3>
                            <p className="text-brand-dark/60 text-lg font-medium leading-relaxed mb-10">
                                We implement CI/CD pipelines that allow for rapid, reliable, and frequent updates. Our goal is to reduce the time from code-commit to production-ready features, keeping your product ahead of the competition.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "High Availability", icon: ShieldCheck },
                                    { label: "Rapid Deployment", icon: Zap },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.icon className="text-brand-accent" size={20} />
                                        <span className="text-xs font-bold text-brand-dark uppercase tracking-widest">{item.label}</span>
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
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">What We Can Build <br /><span className="italic font-light">for You.</span></h2>
                    </motion.div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((sol, idx) => (
                            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.06)" }} className="p-12 rounded-[48px] bg-white border border-brand-dark/5 hover:border-brand-accent/20 transition-all duration-500 group">
                                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="h-16 w-16 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500"><sol.icon size={32} /></motion.div>
                                <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tighter">{sol.title}</h3>
                                <p className="text-brand-dark/50 font-medium leading-relaxed mb-8 text-lg">{sol.desc}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {sol.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-center gap-3 text-sm font-bold text-brand-dark/70"><CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-40 bg-brand-accent/10 relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">WHY CHOOSE US</span>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter mb-10">Why IT Companies <br /><span className="italic font-light">Work With Devgrowth.</span></h2>
                            <ul className="space-y-5">
                                {whyChoose.map((item, idx) => (
                                    <motion.li key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="flex items-center gap-4 text-lg font-bold text-brand-dark">
                                        <div className="h-8 w-8 bg-brand-dark rounded-xl flex items-center justify-center flex-shrink-0"><CheckCircle2 size={16} className="text-brand-accent" /></div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <div className="relative flex justify-center">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80" alt="IT Software Company" className="w-full max-w-md rounded-[48px] shadow-2xl object-cover h-[400px]" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">HOW WE WORK</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Our IT & Software<br /><span className="italic font-light">Development Process.</span></h2>
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
                                In the software world, your product speaks for you. <br />We help it speak <span className="text-brand-accent italic font-light lowercase">louder.</span>
                            </h2>
                            <motion.button whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(162, 237, 219, 0.4)" }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-brand-accent text-brand-dark px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-black uppercase tracking-widest transition-all shadow-xl cursor-pointer flex items-center gap-3 mx-auto mt-8 sm:mt-10">
                                Let's Build Your Product <Code2 size={18} />
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
