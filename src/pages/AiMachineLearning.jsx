import { motion } from "framer-motion";
import { useState } from "react";
import {
    Sparkles, Brain, Database, Cloud, Code2, Rocket,
    Search, BarChart3, Cpu, RefreshCcw, ShieldCheck,
    TrendingUp, CheckCircle2, Layers, Zap
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";

const serviceTypes = [
    {
        title: "Custom AI Solution Development",
        desc: "We build tailored AI systems aligned with your business needs — from automation engines to decision-support systems.",
        points: ["Business process automation", "Intelligent decision systems", "Custom AI model integration", "Scalable architecture"],
        icon: Brain
    },
    {
        title: "Machine Learning Model Development",
        desc: "Designing and training ML models that learn from your data and improve over time.",
        points: ["Predictive analytics", "Classification & regression models", "Recommendation systems", "Model optimization & tuning"],
        icon: TrendingUp
    },
    {
        title: "AI for Startups (AI-Enabled MVPs)",
        desc: "Rapid development of AI-powered MVPs to validate innovative product ideas.",
        points: ["AI-based feature integration", "Rapid prototyping", "Data pipeline setup", "Investor-ready AI products"],
        icon: Rocket
    },
    {
        title: "AI Automation & Integration",
        desc: "Seamlessly integrating AI into your existing systems to enhance efficiency and performance.",
        points: ["Chatbots & AI assistants", "Workflow automation", "CRM & ERP AI integration", "API-based AI services"],
        icon: Zap
    }
];

const techStack = [
    { name: "Python", category: "AI & ML", icon: Code2 },
    { name: "TensorFlow", category: "AI & ML", icon: Brain },
    { name: "Scikit-learn", category: "AI & ML", icon: Cpu },
    { name: "OpenAI APIs", category: "AI & ML", icon: Sparkles },
    { name: "Pandas", category: "Data & Analytics", icon: BarChart3 },
    { name: "NumPy", category: "Data & Analytics", icon: BarChart3 },
    { name: "Power BI", category: "Data & Analytics", icon: BarChart3 },
    { name: "Node.js", category: "Backend", icon: Code2 },
    { name: "FastAPI", category: "Backend", icon: Code2 },
    { name: "Docker", category: "Deployment", icon: Layers },
    { name: "AWS AI", category: "Cloud", icon: Cloud },
    { name: "Google Cloud AI", category: "Cloud", icon: Cloud },
];

const processSteps = [
    { id: "01", title: "Problem Understanding & Strategy", desc: "Identifying business challenges and defining AI opportunities.", icon: Search },
    { id: "02", title: "Data Collection & Preparation", desc: "Data cleaning, transformation, and pipeline setup.", icon: Database },
    { id: "03", title: "Model Design & Training", desc: "Developing and training machine learning models.", icon: Brain },
    { id: "04", title: "Testing & Validation", desc: "Performance evaluation, accuracy testing, and optimization.", icon: ShieldCheck },
    { id: "05", title: "Deployment & Integration", desc: "Integrating AI models into production systems.", icon: Code2 },
    { id: "06", title: "Monitoring & Improvement", desc: "Tracking performance and improving models over time.", icon: TrendingUp },
    { id: "07", title: "Scaling & Optimization", desc: "Enhancing infrastructure for growth and high-load environments.", icon: RefreshCcw },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function AiMachineLearning() {
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
                            AI & MACHINE LEARNING
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-12"
                        >
                            Building Intelligent <br />
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="italic font-light text-brand-dark/70 block sm:inline"
                            >
                                AI Solutions
                            </motion.span> <br />
                            That Drive Growth.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-brand-dark/60 font-medium text-lg max-w-2xl mx-auto mb-10"
                        >
                            AI-powered systems designed to automate, optimize, and scale your operations.
                        </motion.p>

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
                                Build Your AI Solution <Sparkles size={18} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleBooking}
                                className="bg-white border-2 border-brand-dark/10 text-brand-dark px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm transition-all cursor-pointer"
                            >
                                Book Free AI Consultation
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
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
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-10 text-brand-accent italic font-light">
                                Transforming Data <br />
                                <span className="text-white not-italic font-black">into Intelligent</span> <br />
                                Business Decisions.
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 100 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-1 bg-brand-accent mb-10"
                            />
                            <div className="space-y-6 text-lg text-white/60 font-medium leading-relaxed">
                                <p>At Devgrowth Solutions, we design and develop AI-powered systems that turn complex data into actionable insights. From predictive analytics to intelligent automation, our solutions help businesses reduce manual effort, increase efficiency, and unlock scalable growth.</p>
                                <p>Whether you're a startup exploring AI integration or an enterprise looking to optimize operations, we build intelligent systems tailored to your business goals.</p>
                                <p>Our focus is not just implementing AI — it's delivering measurable impact, automation, and long-term competitive advantage.</p>
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
                                    className="w-[340px] h-[340px] border-[12px] border-white/10 rounded-[48px] overflow-hidden bg-brand-bg relative shadow-2xl shadow-brand-accent/5 mx-auto"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80"
                                        alt="AI Machine Learning"
                                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="p-6 bg-brand-accent/90 backdrop-blur-md rounded-2xl text-brand-dark text-center shadow-2xl"
                                        >
                                            <Brain size={32} className="mx-auto mb-2" />
                                            <span className="text-xs font-black uppercase tracking-widest">Intelligent Systems</span>
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

            {/* AI Architecture Visual (Unique Component) */}
            <section className="py-20 bg-brand-bg relative overflow-hidden border-y border-brand-dark/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <div className="relative h-[400px] w-full bg-brand-dark rounded-[40px] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,237,219,0.1),transparent_70%)]" />

                                {/* Neural Network Visual Simulation */}
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="relative w-full h-full flex justify-between items-center">
                                        {[1, 2, 3].map((column, colIdx) => (
                                            <div key={colIdx} className="flex flex-col gap-8 justify-center">
                                                {[...Array(colIdx === 1 ? 4 : 3)].map((_, nodeIdx) => (
                                                    <motion.div
                                                        key={nodeIdx}
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        transition={{ delay: (colIdx * 0.2) + (nodeIdx * 0.1) }}
                                                        className="w-4 h-4 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(162,237,219,0.5)] z-20"
                                                    />
                                                ))}
                                            </div>
                                        ))}

                                        {/* Connecting Lines (Simplified with SVGs) */}
                                        <svg className="absolute inset-0 w-full h-full z-10 opacity-30">
                                            <filter id="glow">
                                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                            <motion.path
                                                d="M 100 150 L 300 100 M 100 150 L 300 200 M 100 250 L 300 100 M 100 250 L 300 300"
                                                stroke="white"
                                                strokeWidth="1"
                                                fill="none"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 2, ease: "easeInOut" }}
                                            />
                                        </svg>

                                        {/* Pulsing Data Points */}
                                        <motion.div
                                            animate={{
                                                x: [100, 500],
                                                opacity: [0, 1, 0],
                                                y: [150, 100]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute w-2 h-2 rounded-full bg-white z-30"
                                        />
                                        <motion.div
                                            animate={{
                                                x: [100, 500],
                                                opacity: [0, 1, 0],
                                                y: [250, 300]
                                            }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                                            className="absolute w-2 h-2 rounded-full bg-brand-accent z-30"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Architecture Status</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                                            <span className="text-[10px] font-bold text-brand-accent uppercase">Optimizing</span>
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
                                Advanced Engineering
                            </motion.span>
                            <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter mb-8 leading-tight">
                                Neural Network <br />
                                <span className="italic font-light">Architectures.</span>
                            </h3>
                            <p className="text-brand-dark/60 text-lg font-medium leading-relaxed mb-8">
                                We don't just use APIs. We design custom neural architectures tailored to your specific data patterns, ensuring maximum accuracy and performance for complex decision-making tasks.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: "Architecture", value: "Custom" },
                                    { label: "Optimization", value: "Hyper-tuned" },
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-brand-dark/[0.03] border border-brand-dark/5">
                                        <div className="text-[10px] font-black tracking-widest text-brand-dark/40 uppercase mb-1">{stat.label}</div>
                                        <div className="text-xl font-black text-brand-dark">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Service Types */}
            <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">OUR CORE OFFERINGS</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">AI & ML <br /> <span className="italic font-light">Services.</span></h2>
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
                                        <motion.li key={pIdx} whileHover={{ x: 5 }} className="flex items-center gap-3 text-sm font-bold text-brand-dark/70">
                                            <CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />
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
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">OUR AI STACK</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter mb-8">Modern AI Technologies <br /> <span className="italic font-light">for Intelligent Systems.</span></h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                    >
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-8 rounded-[32px] bg-white shadow-sm border border-brand-dark/5 flex flex-col items-center justify-center group hover:bg-brand-dark transition-all duration-500"
                            >
                                <tech.icon className="text-brand-dark group-hover:text-brand-accent mb-4 transition-colors" size={28} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 group-hover:text-white/40 block mb-1">{tech.category}</span>
                                <span className="text-xs font-bold group-hover:text-white transition-colors text-center">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. Process Section */}
            <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
                <div className="mx-auto max-w-none sm:max-w-7xl px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">HOW WE WORK</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter">Our AI & ML <br /> <span className="italic font-light">Implementation Process.</span></h2>
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
            <section className="py-20 sm:py-28 md:py-40 bg-brand-bg">
                <div className="w-full sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-16">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full rounded-none sm:rounded-[80px] bg-brand-dark px-5 sm:px-12 md:px-20 py-20 sm:py-24 md:py-32 text-center overflow-hidden shadow-2xl"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(162,237,219,0.15),transparent_70%)]"
                        />
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight md:leading-[0.9] tracking-tight mb-8 sm:mb-10 uppercase">
                                We don't just build AI systems. <br />
                                We engineer <span className="text-brand-accent italic font-light lowercase">intelligent</span> solutions.
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(162, 237, 219, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleBooking}
                                className="bg-brand-accent text-brand-dark px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-black uppercase tracking-widest transition-all shadow-xl hover:shadow-brand-accent/20 cursor-pointer flex items-center gap-3 mx-auto mt-8 sm:mt-10"
                            >
                                Build Your AI Solution <Sparkles size={18} />
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
