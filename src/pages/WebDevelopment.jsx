import { useState } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Cpu,
    Database,
    Globe,
    Layers,
    Layout,
    Monitor,
    PenTool,
    RefreshCcw,
    Rocket,
    Search,
    ShieldCheck,
    ShoppingCart,
    Sparkles,
    Zap,
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

const MotionLi = motion.li;

const intro = [
    "At DevGrowth Solutions, we build websites that are more than just digital presence — they are growth engines. Our web development services focus on performance, scalability, and user experience to help startups and businesses launch confidently.",
    "Whether you need a landing page to validate your MVP or a full-scale web application, we deliver secure, responsive, and future-ready solutions built with modern technologies.",
    "We combine strategic thinking, clean architecture, and conversion-focused design to ensure your website not only looks great but performs exceptionally.",
];

const highlights = [
    { label: "Responsive", icon: Monitor },
    { label: "Fast", icon: Zap },
    { label: "Secure", icon: ShieldCheck },
    { label: "Modern", icon: Sparkles },
];

const frameworks = [
    { name: "React", icon: Layers },
    { name: "Next.js", icon: Rocket },
    { name: "Node.js", icon: Database },
    { name: "Tailwind", icon: Sparkles },
];

const architectureStats = [
    { value: "99.9%", label: "Uptime" },
    { value: "<200ms", label: "latency" },
];

const services = [
    {
        title: "Business & Corporate Websites",
        desc: "Professional, responsive websites designed to establish strong digital credibility.",
        icon: Globe,
    },
    {
        title: "Startup MVP Websites",
        desc: "Lean, fast-to-launch platforms designed to validate your product idea.",
        icon: Rocket,
    },
    {
        title: "E-commerce Development",
        desc: "High-converting online stores built on scalable platforms.",
        icon: ShoppingCart,
    },
    {
        title: "Custom Web Applications",
        desc: "Tailor-made web apps with advanced functionality and integrations.",
        icon: Cpu,
    },
    {
        title: "CMS-Based Websites",
        desc: "Easy-to-manage websites built with WordPress or other CMS platforms.",
        icon: Layout,
    },
    {
        title: "Landing Pages",
        desc: "Conversion-optimized landing pages for marketing campaigns and product launches.",
        icon: Zap,
    },
];

const techStack = [
    { name: "React.js", category: "Frontend", icon: Layers },
    { name: "Next.js", category: "Frontend", icon: Layers },
    { name: "Node.js", category: "Backend", icon: Database },
    { name: "Express.js", category: "Backend", icon: Database },
    { name: "MongoDB", category: "Backend (MERN Stack)", icon: Database },
    { name: "WordPress", category: "CMS & E-commerce", icon: Layout },
    { name: "Shopify", category: "CMS & E-commerce", icon: ShoppingCart },
];

/** The flat stack list, grouped by category in first-seen order for the stack grid. */
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
    {
        id: "01",
        title: "Discovery & Strategy",
        desc: "We understand your business goals, target audience, and product vision.",
        icon: Search,
    },
    {
        id: "02",
        title: "UI/UX Planning",
        desc: "Wireframes, user flows, and experience architecture planning.",
        icon: PenTool,
    },
    {
        id: "03",
        title: "Development",
        desc: "Agile development with scalable architecture and clean coding standards.",
        icon: Code2,
    },
    {
        id: "04",
        title: "Testing & Optimization",
        desc: "Performance testing, responsiveness checks, security audits.",
        icon: ShieldCheck,
    },
    {
        id: "05",
        title: "Launch & Deployment",
        desc: "Smooth deployment with cloud optimization.",
        icon: Rocket,
    },
    {
        id: "06",
        title: "Post-Launch Support",
        desc: "Ongoing maintenance, improvements, and scaling support.",
        icon: RefreshCcw,
    },
];

/** 40px icon tile. `dark` when it sits on a dark band. */
function IconBox({ icon: Icon, dark = false }) {
    return (
        <span
            aria-hidden="true"
            className={cx(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                dark ? "bg-ink-3 text-accent-bright" : "bg-accent-soft text-accent",
            )}
        >
            <Icon size={20} aria-hidden="true" />
        </span>
    );
}

export default function WebDevelopment() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* 1. Page header */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10 flex flex-col items-start gap-10">
                        <Reveal className="flex flex-col gap-6">
                            <Eyebrow tone="dark">Web development services</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-paper max-w-[14ch]">
                                From idea to <em className="italic text-accent-bright">market-ready</em> website.
                            </h1>
                        </Reveal>
                        <Reveal
                            delay={0.1}
                            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
                        >
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Start your project
                            </Button>
                            <Button tone="dark" variant="ghost" onClick={openBooking}>
                                Book a free consultation
                            </Button>
                        </Reveal>
                    </Container>
                </header>

                {/* 2. Overview */}
                <section aria-labelledby="overview-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                            <div className="flex flex-col gap-6">
                                <SectionHeading
                                    id="overview-heading"
                                    eyebrow="Overview"
                                    title={
                                        <>
                                            Crafting scalable <em>&amp; high-impact</em> experiences.
                                        </>
                                    }
                                    lede={intro[0]}
                                />
                                <Reveal delay={0.1} className="flex flex-col gap-5">
                                    {intro.slice(1).map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="max-w-[56ch] text-base md:text-lg leading-relaxed text-muted"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </Reveal>
                            </div>

                            <Stagger as="ul" role="list" className="grid gap-4 sm:grid-cols-2 lg:pt-2">
                                {highlights.map(({ label, icon }) => (
                                    <MotionLi
                                        key={label}
                                        variants={staggerChild}
                                        className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink"
                                    >
                                        <IconBox icon={icon} />
                                        <span className="font-sans text-lg font-semibold tracking-tight">{label}</span>
                                    </MotionLi>
                                ))}
                            </Stagger>
                        </div>
                    </Container>
                </section>

                {/* 3. Stack architecture */}
                <section
                    aria-labelledby="architecture-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <div className="flex flex-col gap-10">
                                <SectionHeading
                                    id="architecture-heading"
                                    tone="dark"
                                    eyebrow="Tech superiority"
                                    title={
                                        <>
                                            Modern stack <em>architecture</em>.
                                        </>
                                    }
                                    lede="We utilize the industry's most advanced frameworks and libraries to ensure your web application is fast, secure, and ready to scale. Our choice of tools is driven by performance and developer experience."
                                />
                                <Reveal delay={0.1}>
                                    <dl className="flex flex-wrap gap-x-12 gap-y-6 border-t border-line-dark pt-6">
                                        {architectureStats.map(({ value, label }) => (
                                            <div key={label} className="flex flex-col-reverse gap-2">
                                                <dt className="type-eyebrow text-muted-dark">{label}</dt>
                                                <dd className="type-mono text-3xl text-paper">{value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </Reveal>
                            </div>

                            <div className="flex flex-col gap-6">
                                <Stagger as="ul" role="list" className="grid grid-cols-2 gap-4">
                                    {frameworks.map(({ name, icon }) => (
                                        <MotionLi
                                            key={name}
                                            variants={staggerChild}
                                            className="flex flex-col gap-5 rounded-2xl border border-line-dark bg-ink-2 p-6 transition-colors duration-300 hover:border-muted-dark"
                                        >
                                            <IconBox icon={icon} dark />
                                            <span className="font-sans text-lg font-semibold tracking-tight text-paper">
                                                {name}
                                            </span>
                                        </MotionLi>
                                    ))}
                                </Stagger>
                                <Reveal delay={0.1}>
                                    <p className="type-eyebrow border-t border-line-dark pt-6 text-muted-dark">
                                        Used by Global Leaders
                                    </p>
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 4. Services */}
                <section aria-labelledby="services-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="services-heading"
                            eyebrow="Expert web solutions"
                            title={
                                <>
                                    Our web development <em>services</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" role="list" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {services.map(({ title, desc, icon }) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink"
                                >
                                    <IconBox icon={icon} />
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                        <p className="text-base leading-relaxed text-muted">{desc}</p>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* 5. Tech stack */}
                <section aria-labelledby="stack-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="stack-heading"
                            tone="dark"
                            eyebrow="Our web stack"
                            title={
                                <>
                                    Technologies we <em>use</em>.
                                </>
                            }
                            lede="We leverage modern, scalable, and industry-leading technologies to build high-performing web solutions."
                        />
                        <Stagger as="ul" role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {techGroups.map(({ category, items }) => (
                                <MotionLi
                                    key={category}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line-dark bg-ink-2 p-6"
                                >
                                    <p className="type-eyebrow text-accent-bright">{category}</p>
                                    <ul role="list" className="flex flex-col divide-y divide-line-dark">
                                        {items.map(({ name, icon }) => (
                                            <li key={name} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                                                <IconBox icon={icon} dark />
                                                <span className="font-sans text-lg font-semibold tracking-tight text-paper">
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

                {/* 6. Process */}
                <section aria-labelledby="process-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="process-heading"
                            eyebrow="The roadmap"
                            title={
                                <>
                                    Our development <em>process</em>.
                                </>
                            }
                        />
                        <Stagger as="ol" role="list" className="grid gap-x-12 md:grid-cols-2">
                            {processSteps.map(({ id, title, desc, icon }) => (
                                <MotionLi
                                    key={id}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 border-t border-line py-8"
                                >
                                    <div className="flex items-center gap-4">
                                        <IconBox icon={icon} />
                                        <span className="type-mono text-sm text-muted">{id}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                        <p className="max-w-[56ch] text-base leading-relaxed text-muted">{desc}</p>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* 7. Closing CTA */}
                <section aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10 text-center">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            align="center"
                            size="lg"
                            eyebrow="Get started"
                            title={
                                <>
                                    Let’s build your <em>digital</em> future.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Start your project
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
