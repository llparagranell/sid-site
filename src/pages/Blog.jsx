import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Reveal, { Stagger } from "../components/motion/Reveal";
import { staggerChild } from "../components/motion/constants";

const MotionArticle = motion.article;

const FEATURED = {
    eyebrow: "Featured Article",
    excerpt:
        "Discover our battle-tested methodology for handling the technical transition as your startup begins its journey toward global scale.",
    cta: "Read Article",
};

const POSTS = [
    {
        title: "Scaling MVPs for Seed-Stage Startups",
        category: "Scalability",
        date: "Feb 15, 2026",
        excerpt:
            "Learn the core strategies for building a robust MVP that can handle rapid user growth without a complete rewrite.",
        author: "DevGrowth Team",
    },
    {
        title: "Architecting for Global Performance",
        category: "Engineering",
        date: "Feb 10, 2026",
        excerpt:
            "How we optimize latency and consistency for enterprise-level applications across multiple regions.",
        author: "DevGrowth Team",
    },
    {
        title: "The Future of AI in Modern UX",
        category: "Design",
        date: "Feb 05, 2026",
        excerpt:
            "Exploring how generative AI is transforming traditional UI components into intelligent agents.",
        author: "DevGrowth Team",
    },
    {
        title: "Securing Your Digital Infrastructure",
        category: "Security",
        date: "Jan 28, 2026",
        excerpt:
            "Best practices for implementing zero-trust security in modern cloud-native architectures.",
        author: "DevGrowth Team",
    },
];

/**
 * Blog index. Dark page header, then a single light band: the featured
 * article sits in a sticky left column while the post cards scroll past on
 * the right. The band-dark Footer closes the page.
 *
 * No overflow-x on the wrapper: body already clips horizontal overflow, and an
 * overflow-x-hidden ancestor would break the sticky column.
 */
export default function Blog() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-paper text-ink font-sans">
            <Navbar onBookClick={toggleBooking} />

            <main>
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-6">
                            <Eyebrow tone="dark">Insights &amp; perspectives</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Our <em className="italic text-accent-bright">Blog</em>.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">
                                Thoughts on scaling technology, engineering culture, and the future of digital
                                products.
                            </p>
                        </Reveal>
                    </Container>
                </header>

                <section
                    id="posts"
                    aria-labelledby="featured-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="flex flex-col items-start gap-8 self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="featured-heading"
                                    eyebrow={FEATURED.eyebrow}
                                    title={
                                        <>
                                            Bridging the Gap: From MVP to <em>Enterprise</em> Solution
                                        </>
                                    }
                                    lede={FEATURED.excerpt}
                                />
                                <Reveal delay={0.1}>
                                    <Button type="button" variant="accent" arrow>
                                        {FEATURED.cta}
                                    </Button>
                                </Reveal>
                            </div>

                            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                {POSTS.map((post, idx) => (
                                    <MotionArticle
                                        key={post.title}
                                        variants={staggerChild}
                                        className="group relative flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink"
                                    >
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <span className="type-eyebrow rounded-full bg-accent-soft px-3 py-1.5 text-accent">
                                                {post.category}
                                            </span>
                                            <span className="type-mono flex items-center gap-2 text-xs text-muted">
                                                <Calendar size={14} aria-hidden="true" />
                                                {post.date}
                                            </span>
                                        </div>

                                        <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight text-ink">
                                            <Link
                                                to={`/blog/${idx}`}
                                                className="transition-colors duration-300 after:absolute after:inset-0 after:rounded-2xl group-hover:text-accent"
                                            >
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="max-w-[56ch] text-base leading-relaxed text-muted">{post.excerpt}</p>

                                        <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
                                            <span className="flex items-center gap-3 text-sm font-medium text-muted">
                                                <span
                                                    aria-hidden="true"
                                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent"
                                                >
                                                    <User size={14} />
                                                </span>
                                                {post.author}
                                            </span>
                                            <ArrowUpRight
                                                size={18}
                                                aria-hidden="true"
                                                className="text-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </div>
                                    </MotionArticle>
                                ))}
                            </Stagger>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
