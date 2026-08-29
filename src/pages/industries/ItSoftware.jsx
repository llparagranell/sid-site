import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    Brain,
    CheckCircle2,
    Cloud,
    Code2,
    Layers,
    RefreshCcw,
    Rocket,
    Search,
    ShieldCheck,
    Zap,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import PageHeaderBackground from "../../components/PageHeaderBackground";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import Reveal, { Stagger } from "../../components/motion/Reveal";
import { EASE, VIEWPORT, staggerChild } from "../../components/motion/constants";

const MotionItem = motion.li;
const MotionSvg = motion.svg;
const MotionPath = motion.path;

const solutions = [
    {
        title: "SaaS Platforms",
        desc: "A strong foundation for your software product, designed to handle growth from day one.",
        points: ["Secure user authentication", "Subscription & billing systems", "Admin dashboards", "Cloud-based deployment"],
        icon: Rocket,
    },
    {
        title: "Backend & API Development",
        desc: "Behind every great software product is a strong backend. We build systems that developers enjoy working on.",
        points: ["Clean API development", "Structured database design", "Performance optimization", "Scalable architecture"],
        icon: Code2,
    },
    {
        title: "Cloud & DevOps Setup",
        desc: "Releasing updates shouldn't feel risky. We help you deploy confidently and consistently.",
        points: ["Automated deployment pipelines", "Containerized environments", "Monitoring and logging", "Auto-scaling systems"],
        icon: Cloud,
    },
    {
        title: "Improving Existing Systems",
        desc: "Already have a product but facing issues? Sometimes small structural changes make a big difference.",
        points: ["Refactoring messy code", "Performance tuning", "Architecture restructuring", "Cloud migration"],
        icon: RefreshCcw,
    },
    {
        title: "Smart Features & AI Integration",
        desc: "We integrate AI only where it actually adds value to your product.",
        points: ["Automation features", "Predictive insights", "Recommendation systems", "Data-driven dashboards"],
        icon: Brain,
    },
];

const whyChoose = [
    "We understand product thinking",
    "We build with scalability in mind",
    "We prioritize clean and maintainable systems",
    "We focus on long-term performance",
    "We communicate clearly and transparently",
];

const processSteps = [
    { id: "01", title: "Product Discovery", desc: "Understanding your product goals, users, and technical constraints.", icon: Search },
    { id: "02", title: "Architecture Planning", desc: "Designing scalable, maintainable system structure.", icon: Layers },
    { id: "03", title: "Development", desc: "Agile development with regular updates and demos.", icon: Code2 },
    { id: "04", title: "Testing & Code Review", desc: "Quality checks, performance tests, and security audits.", icon: ShieldCheck },
    { id: "05", title: "Deployment & DevOps", desc: "CI/CD setup, containerization, and cloud deployment.", icon: Rocket },
    { id: "06", title: "Ongoing Partnership", desc: "Long-term support, feature development, and scaling.", icon: RefreshCcw },
];

const lifecycleHighlights = [
    { label: "High Availability", icon: ShieldCheck },
    { label: "Rapid Deployment", icon: Zap },
];

const loopStops = [
    { label: "Develop", icon: Code2, position: "left-1/4" },
    { label: "Deploy", icon: Rocket, position: "left-3/4" },
];

/** Figure-eight drawn once on reveal; the two lobes carry the Develop / Deploy labels. */
const LOOP_PATH =
    "M50,25 C10,25 10,75 50,75 C90,75 110,25 150,25 C190,25 190,75 150,75 C110,75 90,25 50,25";

/**
 * Draw variants for the loop. The `<svg>` root owns the viewport trigger (an
 * IntersectionObserver on a bare `<path>` is not reliable everywhere) and the
 * labels propagate to the path. Under reduced motion the stroke starts complete:
 * MotionConfig only shortcuts positional keys, not `pathLength`.
 */
const loopDraw = (reduced) => ({
    hidden: { pathLength: reduced ? 1 : 0 },
    show: { pathLength: 1, transition: { duration: 1.6, ease: EASE } },
});

const lightCard =
    "flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink";

/**
 * Industry page: IT & Software. Bands alternate dark / light from the dark
 * header down to the closing dark CTA; the Footer draws its own top hairline.
 *
 * No overflow-x on the wrapper: body already clips horizontal overflow, and an
 * overflow-x-hidden ancestor would break any `sticky` column.
 */
export default function ItSoftware() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);
    const reduced = useReducedMotion();

    return (
        <div className="relative min-h-screen overflow-x-clip bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* ---------------------------------------------------------------- Header */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-8">
                            <Eyebrow tone="dark">IT &amp; Software industry</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                We Help Tech Companies Build Stronger,{" "}
                                <em className="italic text-accent-bright">Scalable</em> Products.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch] leading-relaxed">
                                From SaaS platforms to complex backend systems, we support IT and software businesses
                                with technology that's built to grow.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    Let's Build Your Product
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* ---------------------------------------------------------- Expectations */}
                <section
                    aria-labelledby="it-expectations-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="it-expectations-heading"
                                    eyebrow="Why it matters"
                                    title={
                                        <>
                                            When You're in Tech, <em>Expectations</em> Are Higher.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-5 text-base md:text-lg leading-relaxed text-muted"
                                >
                                    <p>
                                        Users expect smooth performance. Investors expect scalability. Teams expect clean
                                        systems. And updates need to go live without breaking anything.
                                    </p>
                                    <p>
                                        At DevGrowth Solutions, we work with tech companies as a long-term partner. We
                                        focus on building systems that are clean, scalable, and ready for growth.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
                                <img
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                                    alt="Lines of source code on a developer's monitor"
                                    loading="lazy"
                                    className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
                                />
                                <p className="type-eyebrow absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-ink">
                                    <Zap size={14} aria-hidden="true" className="text-accent" />
                                    Built for Scale
                                </p>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* ------------------------------------------------------------- Lifecycle */}
                <section
                    aria-labelledby="it-lifecycle-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            <Reveal className="order-2 lg:order-1">
                                <div className="flex items-center justify-center rounded-2xl border border-line-dark bg-ink-2 p-8 md:p-12">
                                    <div className="relative w-full max-w-[320px]">
                                        <MotionSvg
                                            viewBox="0 0 200 100"
                                            aria-hidden="true"
                                            className="h-auto w-full text-accent-bright"
                                            fill="none"
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={VIEWPORT}
                                        >
                                            <path
                                                d={LOOP_PATH}
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                className="opacity-20"
                                            />
                                            <MotionPath
                                                d={LOOP_PATH}
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                variants={loopDraw(reduced)}
                                            />
                                        </MotionSvg>
                                        {loopStops.map(({ label, icon: Icon, position }) => (
                                            <div
                                                key={label}
                                                className={`absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 ${position}`}
                                            >
                                                <Icon size={20} aria-hidden="true" className="text-accent-bright" />
                                                <span className="type-eyebrow text-muted-dark">{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            <div className="order-1 flex flex-col gap-8 lg:order-2">
                                <SectionHeading
                                    id="it-lifecycle-heading"
                                    tone="dark"
                                    eyebrow="Lifecycle management"
                                    title={
                                        <>
                                            Continuous <em>Innovation</em> Loop.
                                        </>
                                    }
                                    lede="We implement CI/CD pipelines that allow for rapid, reliable, and frequent updates. Our goal is to reduce the time from code-commit to production-ready features, keeping your product ahead of the competition."
                                />
                                <Reveal as="ul" role="list" delay={0.1} className="flex flex-wrap gap-x-8 gap-y-4">
                                    {lifecycleHighlights.map(({ label, icon: Icon }) => (
                                        <li key={label} className="flex items-center gap-3">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                                <Icon size={18} aria-hidden="true" />
                                            </span>
                                            <span className="type-eyebrow text-paper">{label}</span>
                                        </li>
                                    ))}
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ----------------------------------------------------------- What we build */}
                <section aria-labelledby="it-build-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="it-build-heading"
                            eyebrow="What we build"
                            title={
                                <>
                                    What We Can Build for <em>You</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" role="list" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {solutions.map(({ title, desc, points, icon: Icon }) => (
                                <MotionItem key={title} variants={staggerChild} className={lightCard}>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                    <p className="text-base leading-relaxed text-muted">{desc}</p>
                                    <ul role="list" className="mt-auto grid gap-2.5 border-t border-line pt-5">
                                        {points.map((point) => (
                                            <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                                                <CheckCircle2 size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </MotionItem>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* ------------------------------------------------------------ Why choose us */}
                <section aria-labelledby="it-why-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div className="flex flex-col gap-10">
                                <SectionHeading
                                    id="it-why-heading"
                                    tone="dark"
                                    eyebrow="Why choose us"
                                    title={
                                        <>
                                            Why IT Companies Work With <em>DevGrowth Solutions</em>.
                                        </>
                                    }
                                />
                                <Stagger as="ul" role="list" className="flex flex-col divide-y divide-line-dark border-y border-line-dark">
                                    {whyChoose.map((item) => (
                                        <MotionItem
                                            key={item}
                                            variants={staggerChild}
                                            className="flex items-center gap-4 py-4 text-base md:text-lg text-paper"
                                        >
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                                <CheckCircle2 size={18} aria-hidden="true" />
                                            </span>
                                            <span>{item}</span>
                                        </MotionItem>
                                    ))}
                                </Stagger>
                            </div>

                            <Reveal delay={0.15} className="mx-auto w-full max-w-md">
                                <img
                                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
                                    alt="Laptop on a desk in a software studio"
                                    loading="lazy"
                                    className="aspect-[4/5] w-full rounded-2xl border border-line-dark object-cover"
                                />
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* ---------------------------------------------------------------- Process */}
                <section aria-labelledby="it-process-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="it-process-heading"
                            eyebrow="How we work"
                            title={
                                <>
                                    Our IT &amp; Software Development <em>Process</em>.
                                </>
                            }
                        />
                        <Stagger as="ol" role="list" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                <MotionItem key={id} variants={staggerChild} className={lightCard}>
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                            <Icon size={20} aria-hidden="true" />
                                        </span>
                                        <span className="type-mono text-sm text-muted">{id}</span>
                                    </div>
                                    <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                    <p className="text-base leading-relaxed text-muted">{desc}</p>
                                </MotionItem>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* -------------------------------------------------------------------- CTA */}
                <section aria-labelledby="it-cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10 text-center">
                        <SectionHeading
                            id="it-cta-heading"
                            tone="dark"
                            align="center"
                            eyebrow="Next step"
                            title={
                                <>
                                    In the software world, your product speaks for you. We help it speak <em>louder</em>.
                                </>
                            }
                            titleClassName="md:max-w-[24ch]"
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Let's Build Your Product
                            </Button>
                        </Reveal>
                    </Container>
                </section>
            </main>

            <Footer />

            <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
        </div>
    );
}
