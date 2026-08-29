import { useState } from "react";
import { motion } from "framer-motion";
import {
    Sparkles,
    Smartphone,
    Code2,
    Rocket,
    Zap,
    Database,
    Cloud,
    Search,
    PenTool,
    ShieldCheck,
    RefreshCcw,
    Layers,
    Cpu,
    CheckCircle2,
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

const MotionLi = motion.li;

const serviceTypes = [
    {
        title: "Cross-Platform App Development",
        desc: "Using Flutter and React Native, we build high-performance apps that work reliably on both Android and iOS — reducing cost and time to market.",
        points: ["Single codebase", "Faster launch", "Cost-efficient", "Scalable architecture"],
        icon: Smartphone,
    },
    {
        title: "Native Mobile App Development",
        desc: "For businesses requiring high performance and deep device integration, we develop optimized native applications.",
        points: ["High performance", "Advanced device features", "Custom integrations"],
        icon: Cpu,
    },
    {
        title: "Startup MVP App Development",
        desc: "Lean, scalable mobile applications designed to validate product ideas quickly.",
        points: ["Rapid prototyping", "Investor-ready product", "Scalable backend setup", "Future expansion ready"],
        icon: Rocket,
    },
    {
        title: "App Maintenance & Scaling",
        desc: "We provide ongoing support, updates, and scaling solutions to ensure your app grows with your business.",
        points: ["Performance optimization", "Feature enhancements", "Cloud scaling", "Security updates"],
        icon: RefreshCcw,
    },
];

const techStack = [
    { name: "Flutter", category: "Frontend", icon: Smartphone },
    { name: "React Native", category: "Frontend", icon: Smartphone },
    { name: "Node.js", category: "Backend", icon: Database },
    { name: "Express.js", category: "Backend", icon: Database },
    { name: "MongoDB", category: "Backend", icon: Database },
    { name: "AWS", category: "Cloud & Deployment", icon: Cloud },
    { name: "Firebase", category: "Cloud & Deployment", icon: Zap },
];

/** The stack grouped by category, in first-seen order, so each row reads "Frontend: Flutter, React Native". */
const stackGroups = techStack.reduce((groups, tech) => {
    const group = groups.find((g) => g.category === tech.category);
    if (group) {
        group.items.push(tech);
    } else {
        groups.push({ category: tech.category, items: [tech] });
    }
    return groups;
}, []);

const processSteps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        desc: "Understanding your idea, audience, and business model.",
        icon: Search,
    },
    {
        id: "02",
        title: "Wireframing & UX Planning",
        desc: "Creating intuitive user journeys and experience flows.",
        icon: Layers,
    },
    {
        id: "03",
        title: "UI Design",
        desc: "Modern, clean, and brand-focused mobile interfaces.",
        icon: PenTool,
    },
    {
        id: "04",
        title: "Development",
        desc: "Agile development using scalable architecture.",
        icon: Code2,
    },
    {
        id: "05",
        title: "Testing & Quality Assurance",
        desc: "Performance testing, device compatibility, and security validation.",
        icon: ShieldCheck,
    },
    {
        id: "06",
        title: "Launch & Deployment",
        desc: "App Store & Play Store deployment support.",
        icon: Rocket,
    },
    {
        id: "07",
        title: "Post-Launch Growth",
        desc: "Analytics tracking, feature upgrades, scaling support.",
        icon: RefreshCcw,
    },
];

const interfaceHighlights = [
    { title: "Gestural Navigation", icon: Smartphone },
    { title: "System-Deep Integration", icon: Cpu },
];

/** Bar heights (%) for the wireframe chart inside the phone mock. */
const chartBars = [40, 70, 50, 90, 60, 80];

const OVERVIEW_IMAGE = {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    alt: "iPhone home screen showing a grid of app icons",
    width: 600,
    height: 400,
};

/** Hairline wireframe of an app screen. Decorative: nothing in it is content. */
function PhoneMock() {
    return (
        <div
            aria-hidden="true"
            className="relative flex aspect-[9/19] w-full max-w-[300px] flex-col gap-4 overflow-hidden rounded-2xl border border-line-dark bg-ink-2 p-5 pt-10"
        >
            <span className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-ink-3" />

            <div className="flex items-center justify-between">
                <span className="h-3 w-20 rounded-full bg-ink-3" />
                <span className="h-7 w-7 rounded-full border border-line-dark bg-ink-3" />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex h-28 flex-col justify-between rounded-2xl border border-line-dark bg-ink p-4">
                    <span className="h-2 w-1/2 rounded-full bg-ink-3" />
                    <div className="flex h-10 items-end gap-1">
                        {chartBars.map((height) => (
                            <span
                                key={height}
                                style={{ height: `${height}%` }}
                                className="flex-1 rounded-t-sm bg-accent-bright/40"
                            />
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <span className="h-20 rounded-2xl border border-line-dark bg-ink" />
                    <span className="h-20 rounded-2xl border border-line-dark bg-ink" />
                </div>
            </div>

            <div className="mt-auto flex h-11 items-center justify-center rounded-xl bg-accent">
                <span className="h-1.5 w-10 rounded-full bg-ink/20" />
            </div>
        </div>
    );
}

export default function MobileAppDevelopment() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* Page header */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-8">
                            <Eyebrow tone="dark">Mobile app development</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Building Scalable Mobile Apps That Power{" "}
                                <em className="italic text-accent-bright">Growth</em>.
                            </h1>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    Start Your App Project
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* Overview */}
                <section
                    id="overview"
                    aria-labelledby="overview-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="overview-heading"
                                    eyebrow="Overview"
                                    title={
                                        <>
                                            Transforming Ideas into <em>High-Performance</em> Applications.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-5 text-base leading-relaxed text-muted md:text-lg"
                                >
                                    <p>
                                        At DevGrowth Solutions, we build mobile applications that are fast, scalable, and
                                        user-centric. Whether you are launching a startup MVP or expanding your digital
                                        ecosystem, our mobile solutions are engineered for performance and growth.
                                    </p>
                                    <p>
                                        We combine strategic planning, intuitive design, and robust development to deliver
                                        consistent mobile experiences across platforms.
                                    </p>
                                    <p>
                                        Our focus is not just development — it’s delivering apps that drive engagement,
                                        retention, and business impact.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal delay={0.15} className="flex justify-center lg:justify-end">
                                <figure className="w-full max-w-[440px] overflow-hidden rounded-2xl border border-line bg-surface">
                                    <img
                                        src={OVERVIEW_IMAGE.src}
                                        alt={OVERVIEW_IMAGE.alt}
                                        width={OVERVIEW_IMAGE.width}
                                        height={OVERVIEW_IMAGE.height}
                                        loading="lazy"
                                        className="aspect-[3/2] w-full object-cover"
                                    />
                                    <figcaption className="type-eyebrow flex items-center gap-2.5 border-t border-line px-5 py-4 text-ink">
                                        <Sparkles size={14} aria-hidden="true" className="text-accent" />
                                        Built to Perform
                                    </figcaption>
                                </figure>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Interfaces */}
                <section
                    id="interfaces"
                    aria-labelledby="interfaces-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                            <Reveal className="order-2 flex justify-center lg:order-1">
                                <PhoneMock />
                            </Reveal>

                            <div className="order-1 flex flex-col gap-8 lg:order-2">
                                <SectionHeading
                                    id="interfaces-heading"
                                    tone="dark"
                                    eyebrow="Experience Engineering"
                                    title={
                                        <>
                                            High-Fidelity App <em>Interfaces</em>.
                                        </>
                                    }
                                    lede="We design and build mobile interfaces that feel natural and fluid. Every transition, gesture, and interaction is optimized for the platform, ensuring your users have a premium experience on any device."
                                />
                                <Reveal as="ul" role="list" delay={0.1} className="flex flex-col gap-4">
                                    {interfaceHighlights.map(({ title, icon: Icon }) => (
                                        <li key={title} className="flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                                <Icon size={18} aria-hidden="true" />
                                            </span>
                                            <span className="text-base font-medium text-paper">{title}</span>
                                        </li>
                                    ))}
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Services */}
                <section
                    id="services"
                    aria-labelledby="services-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="services-heading"
                            eyebrow="Our core offerings"
                            title={
                                <>
                                    Mobile Application <em>Services</em>.
                                </>
                            }
                        />

                        <Stagger as="ul" role="list" className="grid gap-6 md:grid-cols-2">
                            {serviceTypes.map(({ title, desc, points, icon: Icon }) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink md:p-8"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                        <Icon size={18} aria-hidden="true" />
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                        <p className="text-base leading-relaxed text-muted">{desc}</p>
                                    </div>
                                    <ul role="list" className="mt-auto grid gap-2.5 border-t border-line pt-5 sm:grid-cols-2">
                                        {points.map((point) => (
                                            <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                                                <CheckCircle2 size={16} aria-hidden="true" className="shrink-0 text-accent" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Tech stack */}
                <section
                    id="stack"
                    aria-labelledby="stack-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="stack-heading"
                            tone="dark"
                            eyebrow="Our mobile stack"
                            title={
                                <>
                                    Technologies We <em>Use</em>.
                                </>
                            }
                            lede="Modern technologies for powerful mobile experiences. We choose the right tool for the job."
                        />

                        <Stagger as="ul" role="list" className="flex flex-col divide-y divide-line-dark border-y border-line-dark">
                            {stackGroups.map(({ category, items }) => (
                                <MotionLi
                                    key={category}
                                    variants={staggerChild}
                                    className="grid gap-4 py-6 md:grid-cols-[220px_1fr] md:items-center md:gap-8 md:py-7"
                                >
                                    <p className="type-eyebrow text-muted-dark">{category}</p>
                                    <ul role="list" className="flex flex-wrap gap-3">
                                        {items.map(({ name, icon: Icon }) => (
                                            <li
                                                key={name}
                                                className="flex items-center gap-3 rounded-2xl border border-line-dark bg-ink-2 px-4 py-3 transition-colors duration-300 hover:border-muted-dark"
                                            >
                                                <Icon size={18} aria-hidden="true" className="shrink-0 text-accent-bright" />
                                                <span className="text-sm font-medium text-paper sm:text-base">{name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Process */}
                <section
                    id="process"
                    aria-labelledby="process-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                            <div className="self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="process-heading"
                                    eyebrow="Mobile-first workflow"
                                    title={
                                        <>
                                            Our Mobile App Development <em>Process</em>.
                                        </>
                                    }
                                />
                            </div>

                            <ol role="list" className="divide-y divide-line border-y border-line">
                                {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                    <Reveal as="li" key={id} className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 py-7">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                            <Icon size={18} aria-hidden="true" />
                                        </span>
                                        <div className="flex flex-col gap-2">
                                            <span className="type-mono text-sm text-muted">{id}</span>
                                            <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                            <p className="max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">{desc}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </Container>
                </section>

                {/* Closing CTA */}
                <section id="cta" aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-start gap-10">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            size="lg"
                            eyebrow="Get started"
                            titleClassName="max-w-[22ch]"
                            title={
                                <>
                                    We don’t just build apps. We build scalable <em>digital</em> products.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Start Your App Project
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
