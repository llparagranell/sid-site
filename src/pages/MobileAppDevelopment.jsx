import { motion } from "framer-motion";
import { useState } from "react";
import {
    Sparkles,
    Smartphone,
    Code2,
    Rocket,
    Zap,
    Database,
    Cloud,
    Search,
    PenTool,
    ShieldCheck,
    RefreshCcw,
    Layers,
    Cpu,
    CheckCircle2
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";

const serviceTypes = [
    {
        title: "Cross-Platform App Development",
        desc: "Using Flutter and React Native, we build high-performance apps that work seamlessly on both Android and iOS — reducing cost and time to market.",
        points: ["Single codebase", "Faster launch", "Cost-efficient", "Scalable architecture"],
        icon: Smartphone
    },
    {
        title: "Native Mobile App Development",
        desc: "For businesses requiring high performance and deep device integration, we develop optimized native applications.",
        points: ["High performance", "Advanced device features", "Custom integrations"],
        icon: Cpu
    },
    {
        title: "Startup MVP App Development",
        desc: "Lean, scalable mobile applications designed to validate product ideas quickly.",
        points: ["Rapid prototyping", "Investor-ready product", "Scalable backend setup", "Future expansion ready"],
        icon: Rocket
    },
    {
        title: "App Maintenance & Scaling",
        desc: "We provide ongoing support, updates, and scaling solutions to ensure your app grows with your business.",
        points: ["Performance optimization", "Feature enhancements", "Cloud scaling", "Security updates"],
        icon: RefreshCcw
    }
];

const techStack = [
    { name: "Flutter", category: "Frontend", icon: Smartphone },
    { name: "React Native", category: "Frontend", icon: Smartphone },
    { name: "Node.js", category: "Backend", icon: Database },
    { name: "Express.js", category: "Backend", icon: Database },
    { name: "MongoDB", category: "Backend", icon: Database },
    { name: "AWS", category: "Cloud & Deployment", icon: Cloud },
    { name: "Firebase", category: "Cloud & Deployment", icon: Zap }
];

const processSteps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        desc: "Understanding your idea, audience, and business model.",
        icon: Search
    },
    {
        id: "02",
        title: "Wireframing & UX Planning",
        desc: "Creating intuitive user journeys and experience flows.",
        icon: Layers
    },
    {
        id: "03",
        title: "UI Design",
        desc: "Modern, clean, and brand-focused mobile interfaces.",
        icon: PenTool
    },
    {
        id: "04",
        title: "Development",
        desc: "Agile development using scalable architecture.",
        icon: Code2
    },
    {
        id: "05",
        title: "Testing & Quality Assurance",
        desc: "Performance testing, device compatibility, and security validation.",
        icon: ShieldCheck
    },
    {
        id: "06",
        title: "Launch & Deployment",
        desc: "App Store & Play Store deployment support.",
        icon: Rocket
    },
    {
        id: "07",
        title: "Post-Launch Growth",
        desc: "Analytics tracking, feature upgrades, scaling support.",
        icon: RefreshCcw
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function MobileAppDevelopment() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            {/* 1. Hero Section */}
            <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40"
                        >
                            MOBILE APP DEVELOPMENT
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-12"
                        >
                            Building Scalable <br />
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="italic font-light text-brand-dark/70 block sm:inline"
                            >
                                Mobile Apps
                            </motion.span> <br />
                            That Power Growth.
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleBooking}
                                className="bg-brand-dark text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm shadow-2xl hover:shadow-brand-dark/20 transition-all cursor-pointer flex items-center gap-3"
                            >
                                Start Your App Project <Smartphone size={18} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleBooking}
                                className="bg-white border-2 border-brand-dark/10 text-brand-dark px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm transition-all cursor-pointer"
                            >
                                Book Free Consultation
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Background Decorations */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 w-96 h-96 border border-brand-dark/5 rounded-full pointer-events-none opacity-20"
                />
            </section>

            {/* 2. Overview Section */}
            <section className="py-24 md:py-40 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-10 text-brand-accent italic font-light">
                                Transforming Ideas <br />
                                <span className="text-white not-italic font-black">into High-Performance</span> <br />
                                Applications.
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 100 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-1 bg-brand-accent mb-10"
                            />
                            <div className="space-y-6 text-lg text-white/60 font-medium leading-relaxed">
                                <p>At Devgrowth Solutions, we build mobile applications that are fast, scalable, and user-centric. Whether you are launching a startup MVP or expanding your digital ecosystem, our mobile solutions are engineered for performance and growth.</p>
                                <p>We combine strategic planning, intuitive design, and robust development to deliver seamless mobile experiences across platforms.</p>
                                <p>Our focus is not just development — it’s delivering apps that drive engagement, retention, and business impact.</p>
                            </div>
                        </motion.div>
                        <div className="relative flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "backOut" }}
                                className="relative z-10"
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-[300px] h-[600px] border-[12px] border-white/10 rounded-[48px] overflow-hidden bg-brand-bg relative shadow-2xl shadow-brand-accent/5"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-2xl z-20" />
                                    <img
                                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                                        alt="Mobile App"
                                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="p-6 bg-brand-accent/90 backdrop-blur-md rounded-2xl text-brand-dark text-center shadow-2xl"
                                        >
                                            <Sparkles size={32} className="mx-auto mb-2" />
                                            <span className="text-xs font-black uppercase tracking-widest">Built to Perform</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-accent rounded-full blur-3xl -z-10"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Service Types */}
            <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">OUR CORE OFFERINGS</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Mobile Application <br /> <span className="italic font-light">Services.</span></h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {serviceTypes.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.06)" }}
                                className="p-12 rounded-[48px] bg-white border border-brand-dark/5 hover:border-brand-accent/20 transition-all duration-500 group relative"
                            >
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="h-16 w-16 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500"
                                >
                                    <service.icon size={32} />
                                </motion.div>
                                <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tighter">{service.title}</h3>
                                <p className="text-brand-dark/50 font-medium leading-relaxed mb-8 text-lg">{service.desc}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.points.map((point, pIdx) => (
                                        <motion.li
                                            key={pIdx}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 text-sm font-bold text-brand-dark/70"
                                        >
                                            <CheckCircle2 size={16} className="text-brand-accent" />
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Tech Stack */}
            <section className="py-24 md:py-40 bg-brand-accent/10 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">OUR MOBILE STACK</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter mb-8">Technologies <br /> <span className="italic font-light">We Use.</span></h2>
                        <p className="text-brand-dark/60 font-medium text-lg lg:text-xl">
                            Modern technologies for powerful mobile experiences. We choose the right tool for the job.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
                    >
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-8 rounded-[32px] bg-white shadow-sm border border-brand-dark/5 flex flex-col items-center justify-center group hover:bg-brand-dark transition-all duration-500"
                            >
                                <tech.icon className="text-brand-dark group-hover:text-brand-accent mb-4 transition-colors" size={32} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 group-hover:text-white/40 block mb-1">{tech.category}</span>
                                <span className="text-sm font-bold group-hover:text-white transition-colors">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. Process Section */}
            <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">MOBILE-FIRST WORKFLOW</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Our Mobile App <br /> <span className="italic font-light">Development Process.</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative p-10 rounded-[40px] bg-white border border-brand-dark/5 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                            >
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                                    className="absolute top-8 right-10 text-5xl font-black text-brand-dark/5 group-hover:text-brand-accent/20 transition-colors"
                                >
                                    {step.id}
                                </motion.span>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                                        <step.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-brand-dark mb-4 tracking-tighter leading-tight">{step.title}</h3>
                                    <p className="text-brand-dark/50 font-medium text-sm leading-relaxed">{step.desc}</p>
                                </div>
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1.5 bg-brand-dark group-hover:bg-brand-accent transition-colors"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 md:py-40 bg-brand-bg">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[80px] bg-brand-dark p-12 md:p-32 text-center overflow-hidden shadow-2xl"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(162,237,219,0.15),transparent_70%)]"
                        />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase">
                                We don’t just build apps. <br />
                                We build scalable <span className="text-brand-accent italic font-light lowercase">digital</span> products.
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(162, 237, 219, 0.4)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleBooking}
                                className="bg-brand-accent text-brand-dark px-12 py-6 rounded-3xl font-black uppercase tracking-widest transition-all shadow-xl hover:shadow-brand-accent/20 cursor-pointer flex items-center gap-3 mx-auto mt-10"
                            >
                                Start Your App Project <Sparkles size={18} />
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
