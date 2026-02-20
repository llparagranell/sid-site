import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";
import { useState } from "react";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function BlogView() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);
    const { id } = useParams();

    // Mock data for the single post view
    const post = {
        title: "Scaling MVPs for Seed-Stage Startups",
        category: "Scalability",
        date: "Feb 15, 2026",
        readTime: "8 min read",
        author: "DevGrowth Team",
        content: `
            <p className="text-lg md:text-xl text-brand-dark/80 leading-relaxed mb-8 font-medium">
                Building a Minimum Viable Product (MVP) is just the beginning. The real challenge lies in architecture 
                decisions that allow your product to grow from ten users to ten thousand without requiring 
                a complete technical overhaul.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark mt-12 mb-6 tracking-tighter leading-tight">The "Disposable MVP" Myth</h2>
            <p className="text-brand-dark/70 leading-relaxed mb-6">
                Many founders fall into the trap of thinking an MVP should be built to be thrown away. 
                While speed is critical, total disregard for architecture leads to "technical bankruptcy" 
                at the exact moment your business starts to succeed.
            </p>

            <div className="my-12 p-8 rounded-4xl bg-brand-dark text-white border-l-4 border-brand-accent">
                <p className="italic text-lg font-medium">
                    "Scalability isn't about handling a million users today; it's about the ease with 
                    which you can change the system to handle them tomorrow."
                </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-brand-dark mt-12 mb-6 tracking-tighter leading-tight">Strategic Tech Stack Selection</h2>
            <p className="text-brand-dark/70 leading-relaxed mb-6">
                Choosing a stack isn't just about what's trendy. It's about finding the balance between 
                developer velocity and infrastructure scalability. We recommend starting with 
                robust, well-supported frameworks like React and Node.js that have proven 
                ecosystems for modular growth.
            </p>
        `
    };

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            {/* Header / Hero */}
            <header className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-dark/40 hover:text-brand-dark font-bold text-xs uppercase tracking-[0.3em] mb-8 transition-colors">
                            <ArrowLeft size={16} /> Back to Blog
                        </Link>
                        <span className="block mb-6 text-brand-accent font-black uppercase tracking-[0.3em] text-xs">
                            {post.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark tracking-tighter leading-[0.9] mb-10">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-brand-dark/40 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <Calendar size={14} /> {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={14} /> {post.readTime}
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={14} /> {post.author}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Article Content */}
            <article className="py-24 relative">
                <div className="mx-auto max-w-3xl px-6 relative z-10">
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-brand-dark prose-p:text-brand-dark/70 prose-strong:text-brand-dark"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-20 pt-12 border-t border-brand-dark/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center">
                                <User size={20} className="text-brand-dark" />
                            </div>
                            <div>
                                <div className="text-sm font-black text-brand-dark">{post.author}</div>
                                <div className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest">Digital Strategy Lead</div>
                            </div>
                        </div>
                        <button className="p-4 rounded-2xl bg-brand-dark/5 text-brand-dark hover:bg-brand-dark hover:text-white transition-all cursor-pointer">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </article>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
