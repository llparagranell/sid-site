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

    const post = {
        title: "Scaling MVPs for Seed-Stage Startups",
        category: "Scalability",
        date: "Feb 15, 2026",
        readTime: "8 min read",
        author: "DevGrowth Team",
    };

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
            <Navbar onBookClick={toggleBooking} />

            {/* Header */}
            <header className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-bg">
                <PageHeaderBackground />
                <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-brand-dark/40 hover:text-brand-dark font-bold text-xs uppercase tracking-[0.3em] mb-8 transition-colors"
                        >
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

            {/* Article */}
            <article className="py-24 relative">
                <div className="mx-auto max-w-3xl px-6 relative z-10 space-y-8">

                    {/* Intro */}
                    <p className="text-brand-dark/70 leading-relaxed">
                        Launching a Minimum Viable Product (MVP) is an exciting milestone —
                        but it’s not the finish line. The real inflection point begins when
                        early traction demands rapid growth. The technical decisions you
                        make at the MVP stage determine whether your product scales effortlessly
                        — or struggles under the weight of its own success.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight">
                        The Dangerous “Build Now, Fix Later” Mindset
                    </h2>

                    <p className="text-brand-dark/70 leading-relaxed">
                        Speed is essential for startups. But treating your MVP as disposable
                        technical debt is one of the most expensive mistakes founders make.
                        What feels like a shortcut today often turns into engineering paralysis
                        tomorrow — slowing releases, increasing bugs, and forcing painful
                        rewrites right when growth accelerates.
                    </p>

                    <p className="text-brand-dark/70 leading-relaxed">
                        A scalable MVP doesn’t mean over-engineering. It means building with
                        intentional flexibility — structuring code, APIs, and infrastructure
                        in a way that supports iteration without introducing hidden fragility.
                    </p>

                    {/* Quote */}
                    <div className="my-12 p-8 rounded-3xl bg-brand-dark text-white border-l-4 border-brand-accent">
                        <p className="italic text-lg font-medium">
                            "Scalability isn’t about handling a million users today —
                            it’s about how effortlessly your system adapts when that moment arrives."
                        </p>
                    </div>

                    {/* Section 2 */}
                    <h2 className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight">
                        Designing for Growth from Day One
                    </h2>

                    <p className="text-brand-dark/70 leading-relaxed">
                        Smart architectural decisions early on dramatically reduce future risk.
                        Modular codebases, clean separation of concerns, and predictable data models
                        create a foundation that can evolve without costly disruption.
                    </p>

                    <p className="text-brand-dark/70 leading-relaxed">
                        Rather than chasing trends, founders should prioritize battle-tested ecosystems.
                        Frameworks like React and Node.js provide maturity, performance, and strong communities —
                        enabling rapid development today and scalable infrastructure tomorrow.
                    </p>

                    {/* Section 3 */}
                    <h2 className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight">
                        Balancing Velocity with Stability
                    </h2>

                    <p className="text-brand-dark/70 leading-relaxed">
                        The goal is not perfection — it’s controlled acceleration. Your MVP should
                        move fast, but in the right direction. Clear technical boundaries, scalable
                        hosting strategies, and well-defined APIs ensure your product can handle
                        exponential growth without engineering chaos.
                    </p>

                    {/* Author Section */}
                    <div className="mt-20 pt-12 border-t border-brand-dark/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center">
                                <User size={20} className="text-brand-dark" />
                            </div>
                            <div>
                                <div className="text-sm font-black text-brand-dark">{post.author}</div>
                                <div className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest">
                                    Digital Strategy Lead
                                </div>
                            </div>
                        </div>

                        <button className="p-4 rounded-2xl bg-brand-dark/5 text-brand-dark hover:bg-brand-dark hover:text-white transition-all cursor-pointer">
                            <Share2 size={20} />
                        </button>
                    </div>

                </div>
            </article>

            <Footer />
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
            />
        </div>
    );
}