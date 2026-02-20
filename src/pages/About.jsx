import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import { useState } from "react";
import { Sparkles, Target, Rocket, Users, ShieldCheck, Heart, Coffee, Globe, Code2, ClipboardCheck } from "lucide-react";
import PageHeaderBackground from "../components/PageHeaderBackground";

export default function About() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    const principles = [
        {
            icon: Target,
            title: "Precision Engineering",
            desc: "We don't just write code; we architect solutions. Every line of our code is optimized for performance, scalability, and long-term maintainability."
        },
        {
            icon: Rocket,
            title: "Growth Acceleration",
            desc: "Our primary objective is your growth. We build digital products that aren't just technical achievements, but strategic assets that drive revenue."
        },
        {
            icon: ShieldCheck,
            title: "Unwavering Integrity",
            desc: "Transparent communication is our bedrock. We provide honest timelines, clear pricing, and no-nonsense advice to ensure mutual success."
        },
        {
            icon: Heart,
            title: "Human-Centric Design",
            desc: "Technology should serve people. Our designs focus on intuitive user experiences that forge emotional connections with your brand."
        }
    ];

    const processSteps = [
        {
            id: "01",
            title: "Discovery & Strategy",
            desc: "We dive deep into your business goals, target audience, and market landscape to define a clear roadmap for success."
        },
        {
            id: "02",
            title: "Architectural Planning",
            desc: "Detailed mapping of the technical stack, user flows, and data architecture to ensure a solid foundation for development."
        },
        {
            id: "03",
            title: "Iterative Development",
            desc: "Rapid prototyping and agile development cycles that keep you involved at every stage of the build process."
        },
        {
            id: "04",
            title: "Quality Assurance",
            desc: "Rigorous testing across devices and scenarios to ensure a bug-free, premium experience for your users."
        }
    ];

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            {/* Hero Section */}
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
                            WHO WE ARE
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-12"
                        >
                            Elevating <span className="italic font-light">Digital</span> <br />
                            Standard.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="max-w-3xl mx-auto text-lg md:text-xl text-brand-dark/60 font-medium leading-relaxed"
                        >
                            Devgrowthsolutions is a premier digital agency specializing in high-performance MVPs
                            and scalable enterprise solutions. We bridge the gap between complex technical
                            challenges and seamless user experiences.
                        </motion.p>
                    </div>
                </div>

                {/* Background Decorations */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 blur-3xl w-[500px] h-[500px] bg-brand-dark rounded-full -z-10"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 blur-3xl w-[500px] h-[500px] bg-brand-accent rounded-full -z-10"
                />
            </section>

            {/* Strategic Approach */}
            <section className="py-24 md:py-40 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-10"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-6">
                                    Strategic <br />
                                    <span className="text-brand-accent italic font-light">Infrastructure.</span>
                                </h2>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 80 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-1 bg-brand-accent"
                                />
                            </div>

                            <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-xl">
                                We don't just build apps; we engineer foundations. Our approach combines
                                rigorous technical standards with business-aligned outcomes, ensuring your
                                product is ready for the demands of the modern market.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <div className="text-3xl md:text-4xl font-black text-brand-accent mb-2 tracking-tighter">98%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Client Satisfaction</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <div className="text-3xl md:text-4xl font-black text-brand-accent mb-2 tracking-tighter">150+</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Successful Launches</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {principles.map((pri, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                                    className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group"
                                >
                                    <pri.icon className="text-brand-accent mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" size={32} />
                                    <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tighter leading-tight">{pri.title}</h3>
                                    <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium">{pri.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 md:py-40 bg-brand-bg relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40 mb-4 block">How we deliver excellence</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-none">
                                Our <br />
                                <span className="italic font-light">Process.</span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="max-w-md text-brand-dark/60 font-medium text-lg md:text-xl"
                        >
                            We've refined our workflow over hundreds of projects to ensure maximum
                            efficiency without compromising on quality or creativity.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative p-10 rounded-[40px] bg-white border border-brand-dark/5 hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-500 group overflow-hidden"
                            >
                                <span className="absolute top-8 right-10 text-5xl font-black text-brand-dark/5 group-hover:text-brand-accent/20 transition-colors z-0">
                                    {step.id}
                                </span>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                                        {idx === 0 && <Globe size={24} />}
                                        {idx === 1 && <ClipboardCheck size={24} />}
                                        {idx === 2 && <Code2 size={24} />}
                                        {idx === 3 && <Target size={24} />}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-brand-dark mb-4 tracking-tighter leading-tight">{step.title}</h3>
                                    <p className="text-brand-dark/50 font-medium text-sm md:text-base leading-relaxed">{step.desc}</p>
                                </div>
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-brand-accent"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder's Philosophy */}
            <section className="py-24 md:py-32 bg-brand-accent/20">
                <div className="mx-auto max-w-5xl px-6 lg:px-16 text-center">
                    <div className="mb-12 inline-block p-4 bg-brand-dark text-brand-accent rounded-full">
                        <Coffee size={32} />
                    </div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-dark tracking-tighter leading-tight mb-10 italic"
                    >
                        "Technology is the brush, but business growth <br className="hidden md:block" /> is the masterpiece we aim to paint."
                    </motion.h3>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-1 bg-brand-dark mb-4" />
                        <span className="text-brand-dark font-black uppercase tracking-widest text-sm">Devgrowth Solutions</span>
                        <span className="text-brand-dark/40 font-bold text-xs mt-1">Our Core Philosophy</span>
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            < section className="py-24 md:py-40" >
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="relative rounded-[80px] bg-brand-dark p-12 md:p-32 text-center overflow-hidden shadow-2xl">
                        {/* Background Sparkle Effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(211,216,213,0.1),transparent_70%)]" />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase">
                                Let's <span className="text-brand-accent italic font-light lowercase">build</span> <br />
                                your future?
                            </h2>
                            <p className="text-white/50 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                                Whether you're a startup looking for an MVP or an enterprise seeking
                                digital transformation, we have the expertise to make it happen.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleBooking}
                                className="inline-flex items-center gap-3 bg-brand-accent text-brand-dark px-12 py-6 rounded-3xl font-black uppercase tracking-widest transition-all shadow-xl hover:shadow-brand-accent/20 cursor-pointer"
                            >
                                Start Your Project <Sparkles size={22} />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section >

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div >
    );
}
