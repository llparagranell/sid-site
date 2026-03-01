import { motion } from "framer-motion";
import { useState } from "react";
import {
    Database, Search, ShieldCheck, RefreshCcw, CheckCircle2,
    Cloud, Code2, Rocket, TrendingUp, Layers
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";

const serviceTypes = [
    {
        title: "Database Architecture & Design",
        desc: "We design structured, scalable databases that align with your application. A strong structure today prevents problems tomorrow.",
        points: ["Schema design & normalization", "Relationship modeling", "Performance-focused structuring", "Cloud database setup"],
        icon: Database
    },
    {
        title: "Database Optimization & Performance Tuning",
        desc: "Slow queries and lagging apps hurt user experience. We fix that and make your database faster and more efficient.",
        points: ["Query optimization", "Indexing strategies", "Performance audits", "Bottleneck identification"],
        icon: TrendingUp
    },
    {
        title: "Database Migration & Upgrades",
        desc: "Upgrading or moving databases without breaking your system requires precision. Smooth transitions with minimal downtime.",
        points: ["Database migration planning", "Version upgrades", "Cloud database migration", "Zero-data-loss strategy"],
        icon: Cloud
    },
    {
        title: "Database Monitoring & Maintenance",
        desc: "We ensure your database stays healthy as your business grows. Your data stays protected, optimized, and available.",
        points: ["Real-time monitoring", "Backup & recovery setup", "Security hardening", "Scaling support"],
        icon: ShieldCheck
    }
];

const techStack = [
    { name: "MySQL", category: "Relational", icon: Database },
    { name: "PostgreSQL", category: "Relational", icon: Database },
    { name: "MongoDB", category: "NoSQL", icon: Database },
    { name: "Firebase Firestore", category: "NoSQL", icon: Database },
    { name: "AWS RDS", category: "Cloud", icon: Cloud },
    { name: "MongoDB Atlas", category: "Cloud", icon: Cloud },
    { name: "Google Cloud DB", category: "Cloud", icon: Cloud },
];

const processSteps = [
    { id: "01", title: "Requirement Analysis", desc: "Understanding your application, traffic expectations, and data flow.", icon: Search },
    { id: "02", title: "Architecture Planning", desc: "Designing the right database structure and relationships.", icon: Layers },
    { id: "03", title: "Implementation or Migration", desc: "Setting up or improving your database environment.", icon: Code2 },
    { id: "04", title: "Testing & Optimization", desc: "Performance testing, indexing, and query refinement.", icon: TrendingUp },
    { id: "05", title: "Security & Backup Setup", desc: "Ensuring data protection and recovery planning.", icon: ShieldCheck },
    { id: "06", title: "Ongoing Monitoring & Scaling", desc: "Supporting growth with continuous optimization.", icon: RefreshCcw },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

export default function DatabaseManagement() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="text-center">
                        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40">DATABASE MANAGEMENT</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-6">
                            Reliable Database Solutions <br />
                            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="italic font-light text-brand-dark/70">Built for Performance.</motion.span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-brand-dark/60 font-medium text-lg max-w-2xl mx-auto mb-10">
                            We design, optimize, and manage databases that are secure, scalable, and built for performance.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-brand-dark text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm shadow-2xl transition-all cursor-pointer flex items-center gap-3">
                                Optimize Your Database <Database size={18} />
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
                                Strong Data Foundations <br /><span className="text-white not-italic font-black">for Scalable</span><br />Digital Products.
                            </h2>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-1 bg-brand-accent mb-10" />
                            <div className="space-y-6 text-lg text-white/60 font-medium leading-relaxed">
                                <p>Your applications are only as strong as the database behind them. At Devgrowth Solutions, we help businesses manage their data efficiently and securely.</p>
                                <p>From architecture design to performance tuning and long-term maintenance, we make sure your data infrastructure supports your growth — not limits it.</p>
                                <p>We don't just store data. We structure it for speed, stability, and scalability.</p>
                            </div>
                        </motion.div>
                        <div className="relative flex justify-center">
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "backOut" }}>
                                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-[340px] h-[340px] border-[12px] border-white/10 rounded-[48px] overflow-hidden bg-brand-bg relative shadow-2xl mx-auto">
                                    <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80" alt="Database Management" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                                        <div className="p-6 bg-brand-accent/90 backdrop-blur-md rounded-2xl text-brand-dark text-center shadow-2xl">
                                            <Database size={32} className="mx-auto mb-2" />
                                            <span className="text-xs font-black uppercase tracking-widest">Data-Driven Systems</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Sync & Flow (Unique Component) */}
            <section className="py-24 bg-brand-bg relative overflow-hidden border-b border-brand-dark/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                            <div className="relative w-full h-[400px] bg-brand-dark rounded-[48px] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,237,219,0.05),transparent_70%)]" />

                                {/* Database Nodes Visualization */}
                                <div className="absolute inset-0 flex items-center justify-between px-16">
                                    <div className="flex flex-col gap-12">
                                        {[1, 2].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                whileInView={{ x: [-20, 0], opacity: [0, 1] }}
                                                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20"
                                            >
                                                <Layers size={24} />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                                        className="w-32 h-32 rounded-[32px] bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent shadow-[0_0_50px_rgba(162,237,219,0.1)]"
                                    >
                                        <Database size={48} />
                                    </motion.div>
                                </div>

                                {/* Data Flow Arrows */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {[
                                        { top: '35%', left: '30%' },
                                        { top: '65%', left: '30%' }
                                    ].map((pos, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: 0, opacity: 0 }}
                                            animate={{ x: 150, opacity: [0, 1, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                            style={{ top: pos.top, left: pos.left }}
                                            className="absolute"
                                        >
                                            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="absolute bottom-10 left-10 text-[10px] font-black tracking-widest text-white/20 uppercase">Sync Protocol Active</div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4 text-xs font-bold tracking-[0.3em] text-brand-dark opacity-30 uppercase"
                            >
                                Data Engineering
                            </motion.span>
                            <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter mb-8 leading-tight">
                                High-Performance <br />
                                <span className="italic font-light">Data Pipelines.</span>
                            </h3>
                            <p className="text-brand-dark/60 text-lg font-medium leading-relaxed mb-10">
                                We design high-speed data pipelines that ensure seamless synchronization across your entire distributed system. Whether it's real-time analytics or multi-region data replication, we guarantee consistency and speed.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Zero Data Loss", icon: ShieldCheck },
                                    { title: "Sub-ms Latency", icon: TrendingUp },
                                ].map((item, i) => (
                                    <div key={i} className="p-6 rounded-3xl bg-brand-dark/[0.03] border border-brand-dark/5">
                                        <item.icon className="text-brand-dark mb-3 opacity-30" size={20} />
                                        <span className="text-xs font-bold text-brand-dark tracking-tight">{item.title}</span>
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
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">OUR CORE OFFERINGS</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Database Management <br /><span className="italic font-light">Services.</span></h2>
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
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">TECHNOLOGIES WE USE</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter mb-8">Technologies <br /><span className="italic font-light">We Work With.</span></h2>
                    </motion.div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
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
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Our Database <br /><span className="italic font-light">Management Process.</span></h2>
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
                                We don't just manage databases. <br />We build <span className="text-brand-accent italic font-light lowercase">strong data systems</span> that power growth.
                            </h2>
                            <motion.button whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(162, 237, 219, 0.4)" }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-brand-accent text-brand-dark px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-black uppercase tracking-widest transition-all shadow-xl cursor-pointer flex items-center gap-3 mx-auto mt-8 sm:mt-10">
                                Optimize Your Database <Database size={18} />
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
