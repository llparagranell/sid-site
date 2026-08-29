import { useState } from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Cloud,
    Code2,
    Database,
    LayoutDashboard,
    Layers,
    RefreshCcw,
    Rocket,
    Search,
    ShieldCheck,
    Users,
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

// PascalCase alias: the project ESLint config only counts this as a use of `motion`.
const MotionLi = motion.li;

const CTA = {
    build: "Let's build your software",
    consult: "Book free consultation",
};

const heroImage = {
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
    alt: "Laptop screen showing application source code",
    caption: "Built for you",
};

const serviceTypes = [
    {
        title: "Internal Business Systems",
        desc: "Still managing work on spreadsheets or multiple disconnected tools? We can simplify that. Everything in one place. Clear. Organized. Efficient.",
        points: ["Custom dashboards", "Employee management", "CRM & workflow tools", "Reporting systems"],
        icon: LayoutDashboard,
    },
    {
        title: "SaaS Product Development",
        desc: "If you have an idea for a software product, we help you turn it into something real. From idea to launch with confidence.",
        points: ["Scalable product architecture", "Secure login & user management", "Subscription & billing setup", "Cloud deployment"],
        icon: Rocket,
    },
    {
        title: "Enterprise & Large-Scale Systems",
        desc: "For growing businesses that need structured, secure, and powerful systems. Built to handle growth — without breaking.",
        points: ["Advanced backend systems", "Multi-role access control", "Secure integrations", "High-performance databases"],
        icon: Users,
    },
    {
        title: "Improving Existing Software",
        desc: "Already have a system but facing issues? Sometimes you don't need to rebuild — you just need to improve the right parts.",
        points: ["Performance improvements", "System upgrades", "API integrations", "Modern UI redesign"],
        icon: RefreshCcw,
    },
];

const architecturePoints = [
    { label: "Scalable Micro-services", icon: CheckCircle2 },
    { label: "Clean Code Architecture", icon: CheckCircle2 },
    { label: "Automated Deployment", icon: CheckCircle2 },
];

const techStack = [
    { name: "React", category: "Frontend", icon: Code2 },
    { name: "Node.js", category: "Backend", icon: Code2 },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "AWS", category: "Cloud", icon: Cloud },
    { name: "Docker", category: "DevOps", icon: Layers },
];

const processSteps = [
    { id: "01", title: "Understanding Your Business", desc: "We take time to understand how you work and what's not working.", icon: Search },
    { id: "02", title: "Planning the Right Structure", desc: "We design a clear and scalable system architecture.", icon: Layers },
    { id: "03", title: "Design (If Needed)", desc: "We create simple and intuitive interfaces.", icon: Code2 },
    { id: "04", title: "Development in Phases", desc: "We build step by step, keeping you updated throughout.", icon: Code2 },
    { id: "05", title: "Testing & Refinement", desc: "We make sure everything runs smoothly before launch.", icon: ShieldCheck },
    { id: "06", title: "Launch & Ongoing Support", desc: "After launch, we stay available as your system grows.", icon: Rocket },
];

/* Static "blueprint" panel next to the architecture copy. Purely decorative. */
const WINDOW_DOTS = ["one", "two", "three"];
const CODE_LINES = [
    { id: "l1", width: "w-3/4" },
    { id: "l2", width: "w-1/2" },
    { id: "l3", width: "w-5/6" },
    { id: "l4", width: "w-2/3" },
    { id: "l5", width: "w-3/4" },
    { id: "l6", width: "w-1/2" },
];
const MODULES = ["m1", "m2", "m3", "m4"];

function IconBox({ icon: Icon, tone = "light" }) {
    return (
        <span
            className={
                tone === "dark"
                    ? "flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright"
                    : "flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
            }
        >
            <Icon size={20} aria-hidden="true" />
        </span>
    );
}

function BlueprintPanel() {
    return (
        <Reveal
            aria-hidden="true"
            className="order-2 flex flex-col gap-4 rounded-2xl border border-line-dark bg-ink-2 p-6 md:p-8 lg:order-1"
        >
            <div className="flex gap-2">
                {WINDOW_DOTS.map((id) => (
                    <span key={id} className="size-2.5 rounded-full bg-ink-3" />
                ))}
            </div>
            <div className="grid items-center gap-8 rounded-xl border border-line-dark bg-ink p-6 sm:grid-cols-[1fr_auto] md:p-8">
                <div className="flex flex-col gap-3">
                    {CODE_LINES.map((line) => (
                        <span key={line.id} className={`h-2 rounded-full bg-ink-3 ${line.width}`} />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {MODULES.map((id) => (
                        <span
                            key={id}
                            className="flex size-16 items-center justify-center rounded-lg border border-line-dark bg-ink-2 text-accent-bright"
                        >
                            <Layers size={22} />
                        </span>
                    ))}
                </div>
            </div>
        </Reveal>
    );
}

export default function CustomSoftware() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* ---------------- Header ---------------- */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-6">
                            <Eyebrow tone="dark">Custom software</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Custom software that actually <em className="italic text-accent-bright">fits</em> your
                                business.
                            </h1>
                            <p className="max-w-[56ch] text-lg leading-relaxed text-muted-dark md:text-xl">
                                We build software around the way you work — so your systems support your growth, not slow
                                it down.
                            </p>
                            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    {CTA.build}
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    {CTA.consult}
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* ---------------- Why custom ---------------- */}
                <section aria-labelledby="why-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="why-heading"
                                    eyebrow="Why custom software"
                                    title={
                                        <>
                                            Because every business works <em>differently</em>.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-5 text-base leading-relaxed text-muted md:text-lg"
                                >
                                    <p>
                                        No two businesses operate the same way. That's why generic software often feels
                                        limiting. You end up adjusting your workflow to match the tool — instead of the
                                        tool adapting to you.
                                    </p>
                                    <p>
                                        At DevGrowth Solutions, we build custom software that fits naturally into your
                                        operations. Whether you need an internal system, a SaaS product, or a platform to
                                        manage customers and processes.
                                    </p>
                                    <p>
                                        Our goal is simple: Build software that solves real problems and grows with your
                                        business.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal
                                as="figure"
                                delay={0.15}
                                className="overflow-hidden rounded-2xl border border-line bg-surface"
                            >
                                <img
                                    src={heroImage.src}
                                    alt={heroImage.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[4/3] w-full object-cover"
                                />
                                <figcaption className="flex items-center gap-3 border-t border-line px-5 py-4">
                                    <IconBox icon={Code2} />
                                    <span className="type-eyebrow text-muted">{heroImage.caption}</span>
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* ---------------- Architecture ---------------- */}
                <section
                    aria-labelledby="architecture-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                            <BlueprintPanel />

                            <div className="order-1 flex flex-col gap-8 lg:order-2">
                                <SectionHeading
                                    id="architecture-heading"
                                    tone="dark"
                                    eyebrow="Software architecture"
                                    title={
                                        <>
                                            Modular &amp; <em>scalable</em> codebases.
                                        </>
                                    }
                                    lede="We don't just write code; we architect systems. Our modular approach ensures that your software is extensible, maintainable, and built for the long haul. Every module is a building block for your future growth."
                                />
                                <Reveal as="ul" delay={0.1} className="flex flex-col gap-3">
                                    {architecturePoints.map(({ label, icon: Icon }) => (
                                        <li key={label} className="flex items-center gap-3 text-paper">
                                            <Icon size={18} aria-hidden="true" className="shrink-0 text-accent-bright" />
                                            <span className="text-sm font-semibold sm:text-base">{label}</span>
                                        </li>
                                    ))}
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ---------------- What we build ---------------- */}
                <section aria-labelledby="build-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            id="build-heading"
                            eyebrow="What we build"
                            title={
                                <>
                                    What we can <em>build</em> for you.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid gap-4 md:grid-cols-2">
                            {serviceTypes.map(({ title, desc, points, icon }) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink md:p-8"
                                >
                                    <IconBox icon={icon} />
                                    <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                    <p className="text-base leading-relaxed text-muted md:text-lg">{desc}</p>
                                    <ul className="grid gap-2.5 border-t border-line pt-5 sm:grid-cols-2">
                                        {points.map((point) => (
                                            <li key={point} className="flex items-start gap-2.5 text-sm font-medium">
                                                <CheckCircle2
                                                    size={16}
                                                    aria-hidden="true"
                                                    className="mt-0.5 shrink-0 text-accent"
                                                />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* ---------------- Technologies ---------------- */}
                <section aria-labelledby="stack-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            id="stack-heading"
                            tone="dark"
                            eyebrow="How we build it"
                            title={
                                <>
                                    Technologies we <em>use</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                            {techStack.map(({ name, category, icon }) => (
                                <MotionLi
                                    key={name}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line-dark bg-ink-2 p-5 transition-colors duration-300 hover:border-muted-dark"
                                >
                                    <IconBox icon={icon} tone="dark" />
                                    <div className="flex flex-col gap-1.5">
                                        <span className="type-eyebrow text-muted-dark">{category}</span>
                                        <span className="font-sans text-base font-semibold tracking-tight text-paper">
                                            {name}
                                        </span>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* ---------------- Process ---------------- */}
                <section aria-labelledby="process-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                            <div className="self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="process-heading"
                                    eyebrow="How we work"
                                    title={
                                        <>
                                            Our development <em>process</em>.
                                        </>
                                    }
                                />
                            </div>

                            <Stagger as="ol" className="divide-y divide-line border-t border-line">
                                {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                    <MotionLi
                                        key={id}
                                        variants={staggerChild}
                                        className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-7 sm:grid-cols-[3rem_2.5rem_1fr] sm:gap-x-5"
                                    >
                                        <span className="type-mono pt-2.5 text-sm text-muted">{id}</span>
                                        <span className="hidden size-10 items-center justify-center rounded-lg bg-accent-soft text-accent sm:flex">
                                            <Icon size={18} aria-hidden="true" />
                                        </span>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">
                                                {title}
                                            </h3>
                                            <p className="max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">
                                                {desc}
                                            </p>
                                        </div>
                                    </MotionLi>
                                ))}
                            </Stagger>
                        </div>
                    </Container>
                </section>

                {/* ---------------- Closing CTA ---------------- */}
                <section aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-start gap-10">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            eyebrow="Next step"
                            titleClassName="max-w-[24ch]"
                            title={
                                <>
                                    We don't just develop software. We build systems that make your business{" "}
                                    <em>smarter</em>.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                {CTA.build}
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
