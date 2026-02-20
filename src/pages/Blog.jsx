import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import { useState } from "react";
import { Sparkles, Calendar, User, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeaderBackground from "../components/PageHeaderBackground";

export default function Blog() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    const posts = [
        {
            title: "Scaling MVPs for Seed-Stage Startups",
            category: "Scalability",
            date: "Feb 15, 2026",
            excerpt: "Learn the core strategies for building a robust MVP that can handle rapid user growth without a complete rewrite.",
            author: "DevGrowth Team"
        },
        {
            title: "Architecting for Global Performance",
            category: "Engineering",
            date: "Feb 10, 2026",
            excerpt: "How we optimize latency and consistency for enterprise-level applications across multiple regions.",
            author: "DevGrowth Team"
        },
        {
            title: "The Future of AI in Modern UX",
            category: "Design",
            date: "Feb 05, 2026",
            excerpt: "Exploring how generative AI is transforming traditional UI components into intelligent agents.",
            author: "DevGrowth Team"
        },
        {
            title: "Securing Your Digital Infrastructure",
            category: "Security",
            date: "Jan 28, 2026",
            excerpt: "Best practices for implementing zero-trust security in modern cloud-native architectures.",
            author: "DevGrowth Team"
        }
    ];

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            {/* Hero Section */}
            <header className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden border-b border-brand-dark/5 bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-7xl px-6 lg:px-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark opacity-40">
                            INSIGHTS & PERSPECTIVES
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark tracking-tighter leading-[0.9] mb-12">
                            Our <span className="italic font-light">Blog.</span>
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-brand-dark/60 font-medium leading-relaxed">
                            Thoughts on scaling technology, engineering culture, and the future of digital products.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 27, 75, 0.05) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </header>

            {/* Featured Post */}
            <section className="py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="group relative rounded-[48px] bg-brand-dark text-white overflow-hidden p-8 md:p-20 shadow-2xl flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className="flex-1 space-y-6">
                            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs opacity-60">Featured Article</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight group-hover:text-brand-accent transition-colors">
                                Bridging the Gap: From MVP to Enterprise Solution
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                                Discover our battle-tested methodology for handling the technical
                                transition as your startup begins its journey toward global scale.
                            </p>
                            <div className="flex items-center gap-6 pt-4">
                                <button className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all text-sm cursor-pointer">
                                    Read Article <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 aspect-square rounded-[40px] bg-gradient-to-br from-brand-accent/20 to-white/5 border border-white/10 flex items-center justify-center p-12">
                            <div className="w-full h-full rounded-2xl bg-white/5 animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 rounded-[40px] border border-brand-dark/5 bg-white hover:shadow-2xl hover:shadow-brand-dark/5 transition-all duration-500 cursor-pointer relative"
                            >
                                <Link to={`/blog/${idx}`} className="absolute inset-0 z-10" />
                                <div className="relative z-0">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="bg-brand-accent/20 text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-brand-dark/30 text-[10px] font-bold">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-brand-dark mb-4 tracking-tighter leading-tight group-hover:text-brand-dark/70 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-brand-dark/50 font-medium text-sm md:text-base leading-relaxed mb-8">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-8 border-t border-brand-dark/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-brand-dark/10 flex items-center justify-center">
                                                <User size={14} className="text-brand-dark" />
                                            </div>
                                            <span className="text-xs font-bold text-brand-dark/60">{post.author}</span>
                                        </div>
                                        <ArrowRight size={20} className="text-brand-dark opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
