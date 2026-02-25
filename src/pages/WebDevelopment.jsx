import { motion } from "framer-motion";
import { useState } from "react";
import {
    Sparkles,
    Globe,
    Code2,
    Rocket,
    Zap,
    Layout,
    ShoppingCart,
    Database,
    Cpu,
    Search,
    PenTool,
    ShieldCheck,
    RefreshCcw,
    Layers,
    Monitor,
    Smartphone
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";

const services = [
    {
        title: "Business & Corporate Websites",
        desc: "Professional, responsive websites designed to establish strong digital credibility.",
        icon: Globe
    },
    {
        title: "Startup MVP Websites",
        desc: "Lean, fast-to-launch platforms designed to validate your product idea.",
        icon: Rocket
    },
    {
        title: "E-commerce Development",
        desc: "High-converting online stores built on scalable platforms.",
        icon: ShoppingCart
    },
    {
        title: "Custom Web Applications",
        desc: "Tailor-made web apps with advanced functionality and integrations.",
        icon: Cpu
    },
    {
        title: "CMS-Based Websites",
        desc: "Easy-to-manage websites built with WordPress or other CMS platforms.",
        icon: Layout
    },
    {
        title: "Landing Pages",
        desc: "Conversion-optimized landing pages for marketing campaigns and product launches.",
        icon: Zap
    }
];

const techStack = [
    { name: "React.js", category: "Frontend", icon: Layers },
    { name: "Next.js", category: "Frontend", icon: Layers },
    { name: "Node.js", category: "Backend", icon: Database },
    { name: "Express.js", category: "Backend", icon: Database },
    { name: "MongoDB", category: "Backend (MERN Stack)", icon: Database },
    { name: "WordPress", category: "CMS & E-commerce", icon: Layout },
    { name: "Shopify", category: "CMS & E-commerce", icon: ShoppingCart }
];

const processSteps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        desc: "We understand your business goals, target audience, and product vision.",
        icon: Search
    },
    {
        id: "02",
        title: "UI/UX Planning",
        desc: "Wireframes, user flows, and experience architecture planning.",
        icon: PenTool
    },
    {
        id: "03",
        title: "Development",
        desc: "Agile development with scalable architecture and clean coding standards.",
        icon: Code2
    },
    {
        id: "04",
        title: "Testing & Optimization",
        desc: "Performance testing, responsiveness checks, security audits.",
        icon: ShieldCheck
    },
    {
        id: "05",
        title: "Launch & Deployment",
        desc: "Smooth deployment with cloud optimization.",
        icon: Rocket
    },
    {
        id: "06",
        title: "Post-Launch Support",
        desc: "Ongoing maintenance, improvements, and scaling support.",
        icon: RefreshCcw
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function WebDevelopment() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            {/* 1. Hero Section */}
            <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40"
                        >
                            WEB DEVELOPMENT SERVICES
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-12"
                        >
                            From Idea to <br />
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="italic font-light text-brand-dark/70"
                            >
                                Market-Ready
                            </motion.span> <br />
                            Website.
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleBooking}
                                className="bg-brand-dark text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm shadow-2xl hover:shadow-brand-dark/20 transition-all cursor-pointer flex items-center gap-3"
                            >
                                Start Your Project <Rocket size={18} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleBooking}
                                className="bg-white border-2 border-brand-dark/10 text-brand-dark px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm transition-all cursor-pointer"
                            >
                                Book a Free Consultation
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-[10%] opacity-10 pointer-events-none hidden lg:block"
                >
                    <Code2 size={120} />
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-[5%] opacity-10 pointer-events-none hidden lg:block"
                >
                    <Globe size={100} />
                </motion.div>
            </section>

            {/* 2. Overview Section */}
            <section className="py-24 md:py-40 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-10">
                                Crafting Scalable <br />
                                <span className="text-brand-accent italic font-light">& High-Impact</span> <br />
                                Experiences.
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-1 bg-brand-accent mb-10"
                            />
                            <div className="space-y-6 text-lg text-white/60 font-medium leading-relaxed">
                                <p>At Devgrowth Solutions, we build websites that are more than just digital presence — they are growth engines. Our web development services focus on performance, scalability, and user experience to help startups and businesses launch confidently.</p>
                                <p>Whether you need a landing page to validate your MVP or a full-scale web application, we deliver secure, responsive, and future-ready solutions built with modern technologies.</p>
                                <p>We combine strategic thinking, clean architecture, and conversion-focused design to ensure your website not only looks great but performs exceptionally.</p>
                            </div>
                        </motion.div>
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "backOut" }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="space-y-4 pt-12">
                                    <motion.div
                                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                                        className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10 flex flex-col items-center text-center transition-colors shadow-2xl"
                                    >
                                        <Monitor className="text-brand-accent mb-4" size={40} />
                                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">Responsive</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                                        className="bg-white/10 backdrop-blur-sm p-8 rounded-[32px] border border-white/10 flex flex-col items-center text-center transition-colors shadow-2xl"
                                    >
                                        <Zap className="text-brand-accent mb-4" size={40} />
                                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">Fast</span>
                                    </motion.div>
                                </div>
                                <div className="space-y-4">
                                    <motion.div
                                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                                        className="bg-white/10 backdrop-blur-sm p-8 rounded-[32px] border border-white/10 flex flex-col items-center text-center transition-colors shadow-2xl"
                                    >
                                        <ShieldCheck className="text-brand-accent mb-4" size={40} />
                                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">Secure</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-brand-accent p-8 rounded-[32px] flex flex-col items-center text-center shadow-2xl"
                                    >
                                        <Sparkles className="text-brand-dark mb-4" size={40} />
                                        <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Modern</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Services Grid */}
            <section className="py-24 md:py-40 bg-brand-bg relative">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">EXPERT WEB SOLUTIONS</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Our Web Development <br /> <span className="italic font-light">Services.</span></h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
                                    borderColor: "rgba(30, 27, 121, 0.2)"
                                }}
                                className="p-10 rounded-[40px] bg-white border border-brand-dark/5 hover:shadow-2xl transition-all duration-500 group relative z-10"
                            >
                                <div className="h-16 w-16 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-brand-dark mb-4 tracking-tighter">{service.title}</h3>
                                <p className="text-brand-dark/50 font-medium leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Tech Stack */}
            <section className="py-24 md:py-40 bg-brand-accent/10 relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">OUR WEB STACK</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter mb-8">Technologies <br /> <span className="italic font-light">We Use.</span></h2>
                        <p className="text-brand-dark/60 font-medium text-lg lg:text-xl">
                            We leverage modern, scalable, and industry-leading technologies to build high-performing web solutions.
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
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">THE ROADMAP</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Our Development <br /> <span className="italic font-light">Process.</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="relative p-12 rounded-[48px] bg-white border border-brand-dark/5 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                            >
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                                    className="absolute top-8 right-12 text-6xl font-black text-brand-dark/5 group-hover:text-brand-accent/20 transition-colors z-0"
                                >
                                    {step.id}
                                </motion.span>
                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 12, scale: 1.1 }}
                                        className="h-14 w-14 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500"
                                    >
                                        <step.icon size={28} />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-brand-dark mb-4 tracking-tighter">{step.title}</h3>
                                    <p className="text-brand-dark/50 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-brand-accent"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 sm:py-28 md:py-40 bg-brand-bg">
                <div className="w-full sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-16">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="
                relative
                w-full
                rounded-none sm:rounded-[80px]
                bg-brand-dark
                px-5 sm:px-12 md:px-20
                py-20 sm:py-24 md:py-32
                text-center
                overflow-hidden
                shadow-2xl
            "
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 
                bg-[radial-gradient(circle_at_50%_120%,rgba(211,216,213,0.1),transparent_70%)]" />

                        <div className="relative z-10">

                            {/* Heading */}
                            <h2 className="
                    text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                    font-black text-white
                    leading-tight md:leading-[0.9]
                    tracking-tight
                    mb-8 sm:mb-10
                    uppercase
                ">
                                Let's build <br />
                                YOUR{" "}
                                <span className="text-brand-accent italic font-light lowercase">
                                    digital
                                </span>{" "}
                                <br />
                                future.
                            </h2>

                            {/* Button */}
                            <motion.button
                                whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(162, 237, 219, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleBooking}
                                className="
                        bg-brand-accent text-brand-dark
                        px-8 sm:px-12
                        py-4 sm:py-6
                        rounded-2xl sm:rounded-3xl
                        font-black uppercase tracking-widest
                        text-sm sm:text-base
                        transition-all shadow-xl
                        hover:shadow-brand-accent/20
                        cursor-pointer
                        flex items-center gap-3
                        mx-auto mt-8 sm:mt-10
                    "
                            >
                                Start Your Project <Sparkles size={18} />
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
