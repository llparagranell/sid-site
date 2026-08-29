import { useState } from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Cloud,
    Code2,
    Database,
    Layers,
    RefreshCcw,
    Search,
    ShieldCheck,
    TrendingUp,
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

// PascalCase alias: the project ESLint config only counts this as a use of `motion`.
const MotionLi = motion.li;

const FOUNDATIONS_IMAGE =
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80";

const serviceTypes = [
    {
        title: "Database Architecture & Design",
        desc: "We design structured, scalable databases that align with your application. A strong structure today prevents problems tomorrow.",
        points: ["Schema design & normalization", "Relationship modeling", "Performance-focused structuring", "Cloud database setup"],
        icon: Database,
    },
    {
        title: "Database Optimization & Performance Tuning",
        desc: "Slow queries and lagging apps hurt user experience. We fix that and make your database faster and more efficient.",
        points: ["Query optimization", "Indexing strategies", "Performance audits", "Bottleneck identification"],
        icon: TrendingUp,
    },
    {
        title: "Database Migration & Upgrades",
        desc: "Upgrading or moving databases without breaking your system requires precision. Smooth transitions with minimal downtime.",
        points: ["Database migration planning", "Version upgrades", "Cloud database migration", "Zero-data-loss strategy"],
        icon: Cloud,
    },
    {
        title: "Database Monitoring & Maintenance",
        desc: "We ensure your database stays healthy as your business grows. Your data stays protected, optimized, and available.",
        points: ["Real-time monitoring", "Backup & recovery setup", "Security hardening", "Scaling support"],
        icon: ShieldCheck,
    },
];

const techStack = [
    { name: "MySQL", category: "Relational", icon: Database },
    { name: "PostgreSQL", category: "Relational", icon: Database },
    { name: "MongoDB", category: "NoSQL", icon: Database },
    { name: "Firebase Firestore", category: "NoSQL", icon: Database },
    { name: "AWS RDS", category: "Cloud", icon: Cloud },
    { name: "MongoDB Atlas", category: "Cloud", icon: Cloud },
    { name: "Google Cloud DB", category: "Cloud", icon: Cloud },
];

/** `techStack` grouped by category, in first-seen order. */
const techGroups = techStack.reduce((groups, tech) => {
    const group = groups.find((entry) => entry.category === tech.category);
    if (group) {
        group.items.push(tech);
    } else {
        groups.push({ category: tech.category, items: [tech] });
    }
    return groups;
}, []);

const processSteps = [
    { id: "01", title: "Requirement Analysis", desc: "Understanding your application, traffic expectations, and data flow.", icon: Search },
    { id: "02", title: "Architecture Planning", desc: "Designing the right database structure and relationships.", icon: Layers },
    { id: "03", title: "Implementation or Migration", desc: "Setting up or improving your database environment.", icon: Code2 },
    { id: "04", title: "Testing & Optimization", desc: "Performance testing, indexing, and query refinement.", icon: TrendingUp },
    { id: "05", title: "Security & Backup Setup", desc: "Ensuring data protection and recovery planning.", icon: ShieldCheck },
    { id: "06", title: "Ongoing Monitoring & Scaling", desc: "Supporting growth with continuous optimization.", icon: RefreshCcw },
];

const foundationParagraphs = [
    "Your applications are only as strong as the database behind them. At DevGrowth Solutions, we help businesses manage their data efficiently and securely.",
    "From architecture design to performance tuning and long-term maintenance, we make sure your data infrastructure supports your growth — not limits it.",
    "We don't just store data. We structure it for speed, stability, and scalability.",
];

const pipelineFeatures = [
    { title: "Zero Data Loss", icon: ShieldCheck },
    { title: "Sub-ms Latency", icon: TrendingUp },
];

const PIPELINE_SOURCES = ["source-a", "source-b"];

/** 40px icon tile. `tone="dark"` on a dark band. */
function IconBox({ icon: Icon, tone = "light" }) {
    return (
        <span
            className={cx(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                tone === "dark" ? "bg-ink-3 text-accent-bright" : "bg-accent-soft text-accent",
            )}
        >
            <Icon size={20} aria-hidden="true" />
        </span>
    );
}

/**
 * Static diagram: two application nodes feeding one database. The connectors are
 * hairlines drawn once; nothing loops.
 */
function PipelineDiagram() {
    return (
        <div className="flex flex-col gap-8 rounded-2xl border border-line-dark bg-ink-2 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex flex-col gap-8">
                    {PIPELINE_SOURCES.map((id) => (
                        <span
                            key={id}
                            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line-dark bg-ink-3 text-muted-dark"
                        >
                            <Layers size={24} aria-hidden="true" />
                        </span>
                    ))}
                </div>

                {/* viewBox height matches the 160px source column, so the curve ends sit on the node centres. */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 100 160"
                    preserveAspectRatio="none"
                    fill="none"
                    className="h-40 min-w-0 flex-1 text-muted-dark"
                >
                    <path
                        d="M0 32 C50 32 50 80 100 80"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 6"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-60"
                    />
                    <path
                        d="M0 128 C50 128 50 80 100 80"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 6"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-60"
                    />
                </svg>

                <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-line-dark bg-ink-3 text-accent-bright">
                    <Database size={40} aria-hidden="true" />
                </span>
            </div>

            <p className="type-eyebrow flex items-center gap-2 text-muted-dark">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
                Sync Protocol Active
            </p>
        </div>
    );
}

export default function DatabaseManagement() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* ---- Page header ---- */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-6 md:gap-8">
                            <Eyebrow tone="dark">Database management</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-paper max-w-[14ch]">
                                Reliable Database Solutions Built for{" "}
                                <em className="italic text-accent-bright">Performance</em>.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">
                                We design, optimize, and manage databases that are secure, scalable, and built for performance.
                            </p>
                            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    Optimize Your Database
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* ---- Foundations ---- */}
                <section aria-labelledby="foundations-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="foundations-heading"
                                    eyebrow="Overview"
                                    title={
                                        <>
                                            Strong Data Foundations for <em>Scalable</em> Digital Products.
                                        </>
                                    }
                                />
                                <Reveal delay={0.1} className="flex max-w-[56ch] flex-col gap-5">
                                    {foundationParagraphs.map((paragraph) => (
                                        <p key={paragraph} className="text-base md:text-lg leading-relaxed text-muted">
                                            {paragraph}
                                        </p>
                                    ))}
                                </Reveal>
                            </div>

                            <Reveal delay={0.1} as="figure" className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
                                {/* Square, like the original frame: the source is 600x417, so a portrait crop would upscale it. */}
                                <div className="aspect-square overflow-hidden rounded-2xl border border-line bg-surface">
                                    <img
                                        src={FOUNDATIONS_IMAGE}
                                        alt="Wooden library card catalogue drawers"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 type-eyebrow text-ink">
                                    <Database size={14} aria-hidden="true" className="text-accent" />
                                    Data-Driven Systems
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* ---- Data pipelines ---- */}
                <section aria-labelledby="pipelines-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="pipelines-heading"
                                    tone="dark"
                                    eyebrow="Data Engineering"
                                    title={
                                        <>
                                            High-Performance <em>Data Pipelines</em>.
                                        </>
                                    }
                                    lede="We design high-speed data pipelines that ensure reliable synchronization across your entire distributed system. Whether it's real-time analytics or multi-region data replication, we guarantee consistency and speed."
                                />
                                <Stagger as="ul" role="list" className="grid grid-cols-2 gap-4">
                                    {pipelineFeatures.map(({ title, icon }) => (
                                        <MotionLi
                                            key={title}
                                            variants={staggerChild}
                                            className="flex flex-col gap-4 rounded-2xl border border-line-dark bg-ink-2 p-5 transition-colors duration-300 hover:border-muted-dark md:p-6"
                                        >
                                            <IconBox icon={icon} tone="dark" />
                                            <span className="font-sans text-base font-semibold tracking-tight text-paper md:text-lg">
                                                {title}
                                            </span>
                                        </MotionLi>
                                    ))}
                                </Stagger>
                            </div>

                            <Reveal delay={0.1} className="lg:order-first">
                                <PipelineDiagram />
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* ---- Services ---- */}
                <section aria-labelledby="offerings-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="offerings-heading"
                            eyebrow="Our core offerings"
                            title={
                                <>
                                    Database Management <em>Services</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" role="list" className="grid gap-4 md:grid-cols-2">
                            {serviceTypes.map(({ title, desc, points, icon }) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink md:p-8"
                                >
                                    <IconBox icon={icon} />
                                    <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                    <p className="text-base md:text-lg leading-relaxed text-muted">{desc}</p>
                                    <ul role="list" className="mt-auto grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
                                        {points.map((point) => (
                                            <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                                                <CheckCircle2 size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* ---- Technologies ---- */}
                <section aria-labelledby="technologies-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="technologies-heading"
                            tone="dark"
                            eyebrow="Technologies we use"
                            title={
                                <>
                                    Technologies We <em>Work With</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" role="list" className="grid gap-4 md:grid-cols-3">
                            {techGroups.map(({ category, items }) => (
                                <MotionLi
                                    key={category}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line-dark bg-ink-2 p-6 transition-colors duration-300 hover:border-muted-dark"
                                >
                                    <p className="type-eyebrow text-accent-bright">{category}</p>
                                    <ul role="list" className="flex flex-col divide-y divide-line-dark">
                                        {items.map(({ name, icon }) => (
                                            <li key={name} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                                                <IconBox icon={icon} tone="dark" />
                                                <span className="font-sans text-base font-semibold tracking-tight text-paper md:text-lg">
                                                    {name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* ---- Process ---- */}
                <section aria-labelledby="process-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                            <div className="self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="process-heading"
                                    eyebrow="How we work"
                                    title={
                                        <>
                                            Our Database <em>Management Process</em>.
                                        </>
                                    }
                                />
                            </div>

                            <ol role="list" className="divide-y divide-line">
                                {processSteps.map(({ id, title, desc, icon }) => (
                                    <Reveal as="li" key={id} className="grid grid-cols-[56px_1fr] gap-4 py-7 md:py-8">
                                        <span className="type-mono pt-2 text-sm text-muted">{id}</span>
                                        <div className="flex flex-col gap-3">
                                            <IconBox icon={icon} />
                                            <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                            <p className="max-w-[56ch] text-base md:text-lg leading-relaxed text-muted">{desc}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </Container>
                </section>

                {/* ---- Closing CTA ---- */}
                <section aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            eyebrow="Get started"
                            titleClassName="lg:max-w-[22ch]"
                            title={
                                <>
                                    We don&apos;t just manage databases. We build <em>strong data systems</em> that power growth.
                                </>
                            }
                        />
                        <Reveal delay={0.1} className="shrink-0">
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Optimize Your Database
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
