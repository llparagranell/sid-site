import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Button from "../components/ui/Button";
import Reveal from "../components/motion/Reveal";
import { scrollToTarget } from "../lib/scroll";

const POST = {
    title: "Scaling MVPs for Seed-Stage Startups",
    /** The word the headline sets in italic accent. */
    emphasis: "MVPs",
    category: "Scalability",
    date: "Feb 15, 2026",
    dateTime: "2026-02-15",
    readTime: "8 min read",
    author: "DevGrowth Team",
    authorRole: "Digital Strategy Lead",
    intro:
        "Launching a Minimum Viable Product (MVP) is an exciting milestone — but it’s not the finish line. The real inflection point begins when early traction demands rapid growth. The technical decisions you make at the MVP stage determine whether your product scales effortlessly — or struggles under the weight of its own success.",
};

const SECTIONS = [
    {
        id: "build-now-fix-later",
        index: "01",
        title: "The Dangerous “Build Now, Fix Later” Mindset",
        paragraphs: [
            "Speed is essential for startups. But treating your MVP as disposable technical debt is one of the most expensive mistakes founders make. What feels like a shortcut today often turns into engineering paralysis tomorrow — slowing releases, increasing bugs, and forcing painful rewrites right when growth accelerates.",
            "A scalable MVP doesn’t mean over-engineering. It means building with intentional flexibility — structuring code, APIs, and infrastructure in a way that supports iteration without introducing hidden fragility.",
        ],
        quote: "Scalability isn’t about handling a million users today — it’s about how effortlessly your system adapts when that moment arrives.",
    },
    {
        id: "designing-for-growth",
        index: "02",
        title: "Designing for Growth from Day One",
        paragraphs: [
            "Smart architectural decisions early on dramatically reduce future risk. Modular codebases, clean separation of concerns, and predictable data models create a foundation that can evolve without costly disruption.",
            "Rather than chasing trends, founders should prioritize battle-tested ecosystems. Frameworks like React and Node.js provide maturity, performance, and strong communities — enabling rapid development today and scalable infrastructure tomorrow.",
        ],
    },
    {
        id: "velocity-with-stability",
        index: "03",
        title: "Balancing Velocity with Stability",
        paragraphs: [
            "The goal is not perfection — it’s controlled acceleration. Your MVP should move fast, but in the right direction. Clear technical boundaries, scalable hosting strategies, and well-defined APIs ensure your product can handle exponential growth without engineering chaos.",
        ],
    },
];

/** Sets the first occurrence of `emphasis` inside `title` as the italic accent word. */
function Headline({ title, emphasis }) {
    const at = emphasis ? title.indexOf(emphasis) : -1;
    if (at === -1) return title;
    return (
        <>
            {title.slice(0, at)}
            <em className="italic text-accent-bright">{emphasis}</em>
            {title.slice(at + emphasis.length)}
        </>
    );
}

export default function BlogView() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const copiedTimer = useRef(0);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);
    const { id } = useParams();

    useEffect(() => () => window.clearTimeout(copiedTimer.current), []);

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({ title: POST.title, url });
                return;
            } catch (error) {
                // The reader dismissed the share sheet; anything else falls through to the clipboard.
                if (error?.name === "AbortError") return;
            }
        }
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.clearTimeout(copiedTimer.current);
            copiedTimer.current = window.setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable (insecure context or permission denied); nothing to report.
        }
    };

    const jumpTo = (event, sectionId) => {
        event.preventDefault();
        scrollToTarget(`#${sectionId}`);
    };

    return (
        <div className="relative min-h-screen bg-paper text-ink font-sans">
            <Navbar onBookClick={toggleBooking} />

            <main>
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-8">
                            <Link
                                to="/blog"
                                className="type-eyebrow -my-2 inline-flex items-center gap-2 py-2 text-muted-dark transition-colors duration-300 hover:text-paper"
                            >
                                <ArrowLeft size={14} aria-hidden="true" />
                                Back to Blog
                            </Link>

                            <div className="flex flex-col gap-5">
                                <Eyebrow tone="dark">{POST.category}</Eyebrow>
                                <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                    <Headline title={POST.title} emphasis={POST.emphasis} />
                                </h1>
                            </div>

                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">{POST.intro}</p>

                            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line-dark pt-6 type-eyebrow text-muted-dark">
                                <li className="flex items-center gap-2">
                                    <Calendar size={14} aria-hidden="true" />
                                    <time dateTime={POST.dateTime}>{POST.date}</time>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Clock size={14} aria-hidden="true" />
                                    <span>{POST.readTime}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <User size={14} aria-hidden="true" />
                                    <span>{POST.author}</span>
                                </li>
                            </ul>
                        </Reveal>
                    </Container>
                </header>

                <section className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
                            <Reveal
                                as="nav"
                                aria-label="In this article"
                                className="flex flex-col gap-6 self-start lg:sticky lg:top-28"
                            >
                                <Eyebrow>In this article</Eyebrow>
                                <ol className="flex flex-col divide-y divide-line border-y border-line">
                                    {SECTIONS.map((section) => (
                                        <li key={section.id}>
                                            <a
                                                href={`#${section.id}`}
                                                onClick={(event) => jumpTo(event, section.id)}
                                                className="flex items-baseline gap-4 py-4 text-ink transition-colors duration-300 hover:text-accent"
                                            >
                                                <span className="type-mono text-sm text-muted">{section.index}</span>
                                                <span className="font-sans text-base md:text-lg font-semibold tracking-tight">
                                                    {section.title}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </Reveal>

                            {/* Keyed on the route param so the article and its scroll reveals remount when the reader moves between posts. */}
                            <article key={id} className="flex flex-col gap-12">
                                {SECTIONS.map((section) => (
                                    <Reveal
                                        as="section"
                                        key={section.id}
                                        id={section.id}
                                        aria-labelledby={`${section.id}-heading`}
                                        className="flex flex-col gap-6 scroll-mt-28"
                                    >
                                        <h2
                                            id={`${section.id}-heading`}
                                            className="type-display text-3xl sm:text-4xl md:text-[2.75rem] text-ink"
                                        >
                                            {section.title}
                                        </h2>
                                        {section.paragraphs.map((paragraph) => (
                                            <p key={paragraph} className="max-w-[60ch] text-base md:text-lg leading-relaxed text-ink">
                                                {paragraph}
                                            </p>
                                        ))}
                                        {section.quote && (
                                            <blockquote className="mt-2 flex gap-5 rounded-2xl border border-line bg-surface p-6 md:p-8">
                                                <span aria-hidden="true" className="w-px shrink-0 self-stretch bg-accent" />
                                                <p className="type-display text-2xl md:text-3xl italic text-ink">
                                                    “{section.quote}”
                                                </p>
                                            </blockquote>
                                        )}
                                    </Reveal>
                                ))}

                                <Reveal className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-4">
                                        <span
                                            aria-hidden="true"
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
                                        >
                                            <User size={18} />
                                        </span>
                                        <div className="flex flex-col gap-1">
                                            <p className="font-sans font-semibold tracking-tight text-ink">{POST.author}</p>
                                            <p className="type-eyebrow text-muted">{POST.authorRole}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <Button variant="ghost" icon={Share2} onClick={handleShare}>
                                            {copied ? "Link copied" : "Share"}
                                        </Button>
                                        <p role="status" className="sr-only">
                                            {copied ? "Link copied to clipboard" : ""}
                                        </p>
                                    </div>
                                </Reveal>
                            </article>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
