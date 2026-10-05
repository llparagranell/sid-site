import { useState } from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Code2,
    Eye,
    Layers,
    Monitor,
    PenTool,
    RefreshCcw,
    Search,
    Smartphone,
} from "lucide-react";
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
import cx from "../lib/cx";

const MotionItem = motion.li;

const PHILOSOPHY_IMAGE =
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80";

const philosophy = [
    "At DevGrowth Solutions, we believe design is more than just how something looks — it's how it works, how it feels, and how easily users can interact with it.",
    "We design websites and mobile apps that are clean, intuitive, and aligned with your brand. Every button, every screen, and every interaction is carefully planned to improve usability and drive engagement.",
    "Good design isn't decoration. It's strategy.",
];

const systemHighlights = [
    { title: "Atomic Design Approach", icon: Layers },
    { title: "Design-to-Code Sync", icon: Code2 },
];

const swatches = [
    { id: "accent", className: "bg-accent-bright" },
    { id: "paper", className: "bg-paper/20" },
    { id: "ink", className: "bg-ink-3" },
];

const serviceTypes = [
    {
        title: "User Experience (UX) Research & Strategy",
        desc: "Before designing, we understand your users. We design with clarity — not assumptions.",
        points: ["User research & competitor analysis", "User journey mapping", "Wireframing", "Usability strategy"],
        icon: Search,
    },
    {
        title: "User Interface (UI) Design",
        desc: "Modern, clean, and brand-focused visual design. Every screen is designed to feel effortless.",
        points: ["Mobile app interface design", "Website interface design", "Dashboard & SaaS design", "High-fidelity prototypes"],
        icon: Monitor,
    },
    {
        title: "Mobile & Web App Design",
        desc: "We design digital products optimized for real users on real devices — looking great and working even better.",
        points: ["iOS & Android app UI", "Responsive web design", "Interactive prototypes", "Accessibility considerations"],
        icon: Smartphone,
    },
    {
        title: "UI/UX Redesign & Optimization",
        desc: "Already have a product? We help improve it. Small design improvements create big business impact.",
        points: ["UX audit & usability testing", "Interface redesign", "Conversion optimization", "Design consistency enhancements"],
        icon: RefreshCcw,
    },
];

const techStack = [
    { name: "Figma", category: "Design", icon: PenTool },
    { name: "Adobe XD", category: "Design", icon: PenTool },
    { name: "Photoshop", category: "Design", icon: Layers },
    { name: "Illustrator", category: "Design", icon: PenTool },
    { name: "Prototyping", category: "Collaboration", icon: Eye },
    { name: "Dev Handoff", category: "Collaboration", icon: Code2 },
];

const processSteps = [
    { id: "01", title: "Discovery & Research", desc: "Understanding your product, users, and goals.", icon: Search },
    { id: "02", title: "Wireframing & Structure", desc: "Creating low-fidelity layouts and user flows.", icon: Layers },
    { id: "03", title: "Visual Design", desc: "Designing clean, modern, brand-aligned interfaces.", icon: PenTool },
    { id: "04", title: "Testing & Feedback", desc: "Refining designs based on usability and feedback.", icon: Eye },
    { id: "05", title: "Developer Handoff", desc: "Providing clear design systems and specs for smooth development.", icon: Code2 },
    { id: "06", title: "Continuous Improvement", desc: "Optimizing based on real user behavior and analytics.", icon: RefreshCcw },
];

/**
 * UI/UX Design service page. Bands alternate dark / light from a dark page header
 * down to a dark closing CTA that hands off to the dark Footer.
 *
 * No overflow-x on the wrapper: body already clips horizontal overflow, and an
 * overflow-x-hidden ancestor would break the sticky process column.
 */
export default function UiUxDesign() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* ---- Page header ---- */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-6 md:gap-8">
                            <Eyebrow tone="dark">UI/UX Design</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Designing Experiences That Users{" "}
                                <em className="italic text-accent-bright">Love</em>.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch] leading-relaxed">
                                We create intuitive, modern, and meaningful digital experiences that turn visitors into
                                loyal users.
                            </p>
                            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    Start Your Design Project
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* ---- Philosophy ---- */}
                <section
                    aria-labelledby="philosophy-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="philosophy-heading"
                                    title={
                                        <>
                                            Thoughtful Design That Solves <em>Real Problems</em>.
                                        </>
                                    }
                                />
                                <Reveal delay={0.1} className="flex flex-col gap-5">
                                    {philosophy.map((paragraph, i) => (
                                        <p
                                            key={paragraph}
                                            className={cx(
                                                "max-w-[56ch] text-base md:text-lg leading-relaxed",
                                                i === philosophy.length - 1 ? "font-semibold text-ink" : "text-muted",
                                            )}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </Reveal>
                            </div>

                            <Reveal
                                as="figure"
                                delay={0.15}
                                className="relative overflow-hidden rounded-2xl border border-line bg-surface"
                            >
                                <img
                                    src={PHILOSOPHY_IMAGE}
                                    alt="Hand-drawn interface sketches and colour swatches laid out on a designer's desk"
                                    loading="lazy"
                                    className="aspect-[4/5] w-full object-cover sm:aspect-square lg:aspect-[4/5]"
                                />
                                <figcaption className="type-eyebrow absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-ink">
                                    <PenTool size={14} aria-hidden="true" className="text-accent" />
                                    Design That Converts
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* ---- Design systems ---- */}
                <section
                    aria-labelledby="systems-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="systems-heading"
                                    tone="dark"
                                    eyebrow="Design Systems"
                                    title={
                                        <>
                                            Scalable Design <em>Frameworks</em>.
                                        </>
                                    }
                                    lede="We don't just design screens; we build comprehensive design systems. This ensures your product remains visually consistent as it grows, making it easier for developers to build and users to navigate."
                                />
                                <Reveal delay={0.1}>
                                    <ul className="grid gap-4 sm:grid-cols-2">
                                        {systemHighlights.map(({ title, icon: Icon }) => (
                                            <li
                                                key={title}
                                                className="flex items-center gap-4 rounded-2xl border border-line-dark bg-ink-2 p-4"
                                            >
                                                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                                    <Icon size={18} aria-hidden="true" />
                                                </span>
                                                <span className="font-sans text-base font-semibold tracking-tight text-paper">
                                                    {title}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            </div>

                            {/* Static mock of a token sheet. role="img" keeps the sample controls out of the tab order. */}
                            <Reveal delay={0.15} className="lg:order-first">
                                <div
                                    role="img"
                                    aria-label="Sample design tokens: primary and outline buttons, three colour swatches and placeholder text"
                                    className="flex flex-col gap-8 rounded-2xl border border-line-dark bg-ink-2 p-6 md:p-8"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="type-eyebrow text-muted-dark">Design Tokens</span>
                                        <span className="size-2 rounded-full bg-accent-bright" />
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white">
                                            Primary
                                        </span>
                                        <span className="inline-flex items-center rounded-full border border-line-dark px-5 py-2.5 text-sm font-semibold text-paper">
                                            Outline
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {swatches.map((swatch) => (
                                            <span
                                                key={swatch.id}
                                                className={cx("size-8 rounded-full border border-paper/10", swatch.className)}
                                            />
                                        ))}
                                        <span className="h-px w-20 bg-line-dark" />
                                    </div>

                                    <div className="flex flex-col gap-4 rounded-xl border border-line-dark bg-paper/5 p-6">
                                        <span className="h-2 w-2/3 rounded-full bg-paper/20" />
                                        <span className="h-2 w-1/2 rounded-full bg-paper/10" />
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* ---- Services ---- */}
                <section
                    aria-labelledby="services-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="services-heading"
                            eyebrow="Our core offerings"
                            title={
                                <>
                                    Our UI/UX <em>Design Services</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid gap-4 md:grid-cols-2 md:gap-6">
                            {serviceTypes.map(({ title, desc, points, icon: Icon }) => (
                                <MotionItem
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink md:p-8"
                                >
                                    <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                    <p className="text-base md:text-lg leading-relaxed text-muted">{desc}</p>
                                    <ul className="grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
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

                {/* ---- Tools ---- */}
                <section
                    aria-labelledby="tools-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="tools-heading"
                            tone="dark"
                            eyebrow="Tools we use"
                            title={
                                <>
                                    Design Tools &amp; <em>Technologies</em>.
                                </>
                            }
                            lede="Modern design tools to create scalable and developer-friendly designs."
                        />
                        <Stagger as="ul" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                            {techStack.map(({ name, category, icon: Icon }) => (
                                <MotionItem
                                    key={name}
                                    variants={staggerChild}
                                    className="flex flex-col items-start gap-5 rounded-2xl border border-line-dark bg-ink-2 p-5 transition-colors duration-300 hover:border-muted-dark md:p-6"
                                >
                                    <span className="flex size-10 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <div className="flex flex-col gap-1.5">
                                        <span className="type-eyebrow text-muted-dark">{category}</span>
                                        <span className="font-sans text-base font-semibold tracking-tight text-paper">{name}</span>
                                    </div>
                                </MotionItem>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* ---- Process ---- */}
                <section
                    aria-labelledby="process-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                            <div className="self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="process-heading"
                                    eyebrow="How we work"
                                    title={
                                        <>
                                            Our UI/UX Design <em>Process</em>.
                                        </>
                                    }
                                />
                            </div>

                            <ol role="list" className="divide-y divide-line border-t border-line">
                                {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                    <Reveal
                                        as="li"
                                        key={id}
                                        className="grid grid-cols-[auto_1fr] gap-5 py-7 md:gap-6 md:py-8"
                                    >
                                        <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                            <Icon size={18} aria-hidden="true" />
                                        </span>
                                        <div className="flex flex-col gap-2">
                                            <span className="type-mono text-sm text-muted">{id}</span>
                                            <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                            <p className="max-w-[56ch] text-base md:text-lg leading-relaxed text-muted">{desc}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </Container>
                </section>

                {/* ---- Closing CTA (Footer carries its own top rule) ---- */}
                <section aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10 text-center">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            align="center"
                            size="lg"
                            titleClassName="max-w-[22ch]"
                            title={
                                <>
                                    We don&apos;t just design screens. We design <em>experiences</em> that build trust.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Start Your Design Project
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
