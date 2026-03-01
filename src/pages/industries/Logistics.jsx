import { motion } from "framer-motion";
import { useState } from "react";
import {
    Truck, Package, Warehouse, Smartphone, Cloud, CheckCircle2,
    Search, Layers, Code2, Rocket, RefreshCcw, Database
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import PageHeaderBackground from "../../components/PageHeaderBackground";

const solutions = [
    {
        title: "Fleet & Driver Management Systems",
        desc: "Everything in one clear dashboard. Managing vehicles and drivers shouldn't require ten different tools.",
        points: ["Track vehicles in real time", "Manage driver assignments", "Plan routes efficiently", "Track maintenance schedules"],
        icon: Truck
    },
    {
        title: "Shipment Tracking Platforms",
        desc: "Customers today expect transparency. Less calling. More visibility.",
        points: ["Real-time tracking portals", "Automated delivery updates", "Status notifications", "Customer-facing dashboards"],
        icon: Package
    },
    {
        title: "Warehouse & Inventory Systems",
        desc: "Manual inventory tracking leads to mistakes. Simple structure. Better control.",
        points: ["Track stock levels accurately", "Monitor incoming/outgoing goods", "Reduce inventory errors", "Manage multiple warehouses"],
        icon: Warehouse
    },
    {
        title: "Mobile Apps for Field Teams",
        desc: "Your drivers and warehouse teams need tools that are fast and easy to use.",
        points: ["Delivery confirmation apps", "Route information access", "Real-time communication", "Instant status updates"],
        icon: Smartphone
    },
    {
        title: "Reliable & Scalable Infrastructure",
        desc: "As your business grows, your system should grow with it. Built for long-term growth.",
        points: ["Cloud-based deployment", "Secure data management", "High-performance backend", "Scalable database systems"],
        icon: Cloud
    }
];

const whyChoose = [
    "We understand operational pressure",
    "We build practical, not overly complex systems",
    "We focus on reliability and speed",
    "We design clean and easy-to-use dashboards",
    "We stay available for ongoing improvements",
];

const processSteps = [
    { id: "01", title: "Operations Analysis", desc: "Understanding your fleet, routes, and coordination challenges.", icon: Search },
    { id: "02", title: "System Architecture", desc: "Designing a unified platform for fleet, shipping, and inventory.", icon: Layers },
    { id: "03", title: "Development", desc: "Building dashboards, mobile apps, and tracking systems.", icon: Code2 },
    { id: "04", title: "Integration & Testing", desc: "Connecting systems and testing with real operational data.", icon: Database },
    { id: "05", title: "Launch & Training", desc: "Deployment with onboarding for drivers and operations staff.", icon: Rocket },
    { id: "06", title: "Ongoing Optimization", desc: "Continuous improvements as your operations grow.", icon: RefreshCcw },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

export default function Logistics() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="text-center">
                        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40">LOGISTICS INDUSTRY</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-6">
                            Technology That Keeps Your <br />
                            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="italic font-light text-brand-dark/70">Logistics Moving Smoothly.</motion.span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-brand-dark/60 font-medium text-lg max-w-2xl mx-auto mb-10">
                            We build digital systems that help logistics businesses stay organized, reduce delays, and grow without chaos.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-brand-dark text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm shadow-2xl transition-all cursor-pointer flex items-center gap-3">
                                Build Your Logistics System <Truck size={18} />
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
                                Logistics Is Complex — <br /><span className="text-white not-italic font-black">But Your System</span><br />Shouldn't Be.
                            </h2>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-1 bg-brand-accent mb-10" />
                            <div className="space-y-6 text-lg text-white/60 font-medium leading-relaxed">
                                <p>Vehicles on the road. Goods in warehouses. Drivers on schedule. Customers waiting for updates. When systems are outdated or disconnected, things quickly become messy.</p>
                                <p>At Devgrowth Solutions, we help logistics companies bring structure and clarity to their operations through simple, reliable technology. We don't believe in overcomplicated systems.</p>
                            </div>
                        </motion.div>
                        <div className="relative flex justify-center">
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "backOut" }}>
                                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-[340px] h-[420px] border-[12px] border-white/10 rounded-[48px] overflow-hidden bg-brand-bg relative shadow-2xl mx-auto">
                                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" alt="Logistics Technology" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-brand-dark/40 flex items-end justify-center pb-8">
                                        <div className="p-4 bg-brand-accent/90 backdrop-blur-md rounded-2xl text-brand-dark text-center shadow-2xl">
                                            <Truck size={24} className="mx-auto mb-1" />
                                            <span className="text-xs font-black uppercase tracking-widest">Organized Operations</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supply Chain Tracking Visual (Unique Component) */}
            <section className="py-24 bg-brand-bg relative overflow-hidden border-b border-brand-dark/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                            <div className="relative w-full h-[400px] bg-brand-dark rounded-[48px] overflow-hidden shadow-2xl p-1 relative">
                                {/* Map Grid Background */}
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />

                                <div className="relative w-full h-full flex items-center justify-center">
                                    <svg viewBox="0 0 400 300" className="w-full h-full text-brand-accent">
                                        <circle cx="80" cy="220" r="6" fill="currentColor" className="animate-pulse" />
                                        <circle cx="320" cy="80" r="6" fill="currentColor" />

                                        <motion.path
                                            d="M80,220 Q200,220 200,150 T320,80"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeDasharray="8 8"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                        />

                                        <motion.g
                                            initial={{ offset: 0 }}
                                            animate={{ offset: 1 }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Truck size={24} className="text-brand-accent shadow-2xl" />
                                        </motion.g>
                                    </svg>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
                                    >
                                        <div className="text-[10px] font-black text-brand-accent uppercase mb-1">Estimated Arrival</div>
                                        <div className="text-xl font-black text-white">14:30 PM</div>
                                        <div className="text-[10px] text-white/40 font-bold uppercase mt-2">On Schedule</div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-10 left-10 p-4 bg-brand-accent rounded-2xl text-brand-dark shadow-2xl"
                                    >
                                        <div className="text-[10px] font-black uppercase mb-1">Package ID</div>
                                        <div className="text-sm font-black uppercase tracking-widest">DS-992-X</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4 text-xs font-bold tracking-[0.3em] text-brand-dark opacity-30 uppercase"
                            >
                                Logistics Engineering
                            </motion.span>
                            <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter mb-8 leading-tight">
                                Real-Time <br />
                                <span className="italic font-light">System Visibility.</span>
                            </h3>
                            <p className="text-brand-dark/60 text-lg font-medium leading-relaxed mb-10">
                                We bridge the gap between operations and information. Our systems provide total visibility across your supply chain, from fleet telematics to warehouse inventory, ensuring you can make informed decisions in real-time.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: "Predictive Routing", desc: "Reduce fuel costs and delivery times." },
                                    { label: "Automated Alerts", desc: "Stay informed of delays before they happen." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="h-6 w-6 mt-1 text-brand-accent"><Package size={24} /></div>
                                        <div>
                                            <div className="text-sm font-black text-brand-dark uppercase tracking-widest mb-1">{item.label}</div>
                                            <div className="text-xs font-medium text-brand-dark/50">{item.desc}</div>
                                        </div>
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
                            <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter mb-10">Why Logistics Companies <br /><span className="italic font-light">Choose Devgrowth.</span></h2>
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
                                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80" alt="Logistics" className="w-full max-w-md rounded-[48px] shadow-2xl object-cover h-[400px]" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">HOW WE WORK</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Our Logistics<br /><span className="italic font-light">Implementation Process.</span></h2>
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
                                Logistics is already challenging. <br />Your technology <span className="text-brand-accent italic font-light lowercase">shouldn't make it harder.</span>
                            </h2>
                            <motion.button whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(162, 237, 219, 0.4)" }} whileTap={{ scale: 0.95 }} onClick={toggleBooking} className="bg-brand-accent text-brand-dark px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-black uppercase tracking-widest transition-all shadow-xl cursor-pointer flex items-center gap-3 mx-auto mt-8 sm:mt-10">
                                Build Your Logistics System <Truck size={18} />
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
