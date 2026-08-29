import { useState } from "react";
import { motion } from "framer-motion";
import {
    Brain,
    CheckCircle2,
    Cloud,
    Code2,
    CreditCard,
    Database,
    RefreshCcw,
    Rocket,
    Search,
    ShieldCheck,
    Smartphone,
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
import { staggerChild } from "../../components/motion/constants";

// PascalCase alias: the project ESLint config only counts this as a use of `motion`.
const MotionItem = motion.li;

const solutions = [
    {
        title: "Payment & Transaction Platforms",
        desc: "Built to handle financial operations smoothly with real-time processing and multi-currency support.",
        points: [
            "Secure payment gateway integrations",
            "Wallet systems",
            "Real-time transaction processing",
            "Transaction history & reporting",
        ],
        icon: CreditCard,
    },
    {
        title: "Fintech Mobile Applications",
        desc: "Fast, secure, and user-friendly mobile apps for digital finance.",
        points: [
            "Digital wallet apps",
            "Investment & trading platforms",
            "Loan management systems",
            "Secure authentication (OTP, MFA)",
        ],
        icon: Smartphone,
    },
    {
        title: "Security & Data Protection",
        desc: "Security is never optional in fintech. Your users' trust depends on it.",
        points: [
            "Encrypted data storage",
            "Secure API architecture",
            "Role-based access control",
            "Fraud detection integrations",
        ],
        icon: ShieldCheck,
    },
    {
        title: "Cloud Infrastructure for Fintech",
        desc: "Designed to perform under pressure with high-availability and real-time architecture.",
        points: [
            "Scalable cloud deployment",
            "High-availability architecture",
            "Load balancing",
            "Continuous monitoring",
        ],
        icon: Cloud,
    },
    {
        title: "AI in Fintech",
        desc: "Helping you make data-driven decisions with intelligent features.",
        points: [
            "Fraud detection models",
            "Risk assessment systems",
            "Credit scoring models",
            "Predictive analytics",
        ],
        icon: Brain,
    },
];

const securityFeatures = ["End-to-End Encryption", "Biometric Ready", "PCI-DSS Compliant", "Audit Logs"];

const whyChoose = [
    "Strong focus on security and stability",
    "Clean and intuitive user interfaces",
    "Scalable backend architecture",
    "Real-time performance optimization",
    "Long-term technical support",
];

const processSteps = [
    {
        id: "01",
        title: "Requirement Discovery",
        desc: "Understanding your fintech product's goals and compliance needs.",
        icon: Search,
    },
    {
        id: "02",
        title: "Security-First Architecture",
        desc: "Designing systems with security and scalability at the core.",
        icon: ShieldCheck,
    },
    {
        id: "03",
        title: "Development & Integration",
        desc: "Building payment flows, APIs, and secure user authentication.",
        icon: Code2,
    },
    {
        id: "04",
        title: "Performance Testing",
        desc: "Load testing, penetration testing, and performance validation.",
        icon: Database,
    },
    {
        id: "05",
        title: "Compliance & Launch",
        desc: "Ensuring regulatory alignment and controlled deployment.",
        icon: Rocket,
    },
    {
        id: "06",
        title: "Monitoring & Improvement",
        desc: "Real-time monitoring, fraud detection, and ongoing optimization.",
        icon: RefreshCcw,
    },
];

const TRUST_IMAGE = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80";
const WHY_IMAGE = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80";

const lightCard =
    "flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted";
const lightIconBox = "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent";

export default function Fintech() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* Page header — dark band */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-8">
                            <Eyebrow tone="dark">Fintech industry</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Secure and scalable technology for modern{" "}
                                <em className="italic text-accent-bright">financial</em> businesses.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">
                                We build reliable digital platforms that help fintech companies innovate while
                                maintaining trust and security.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    Build your fintech platform
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    Book free consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* Finance runs on trust — light band */}
                <section
                    id="fintech-trust"
                    aria-labelledby="fintech-trust-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="fintech-trust-heading"
                                    eyebrow="Our approach"
                                    title={
                                        <>
                                            Finance runs on <em>trust</em> — technology must support it.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-5 text-base md:text-lg leading-relaxed text-muted"
                                >
                                    <p>
                                        In fintech, performance matters. But security matters even more. Whether
                                        you&apos;re building a payment platform, lending app, or digital banking
                                        solution — your users are trusting you with their money and data.
                                    </p>
                                    <p>
                                        At DevGrowth Solutions, we build fintech systems with stability, security, and
                                        scalability at the core. No unnecessary complexity. Just reliable systems that
                                        work.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal as="figure" delay={0.15} className="flex flex-col gap-4">
                                <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                                    <img
                                        src={TRUST_IMAGE}
                                        alt="Fintech solutions"
                                        loading="lazy"
                                        className="aspect-[4/5] w-full object-cover"
                                    />
                                </div>
                                <figcaption className="flex items-center gap-3">
                                    <span className={lightIconBox}>
                                        <CreditCard size={18} aria-hidden="true" />
                                    </span>
                                    <span className="type-eyebrow text-muted">Security-first fintech</span>
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Security infrastructure — dark band */}
                <section
                    id="fintech-security"
                    aria-labelledby="fintech-security-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            <Reveal className="order-2 lg:order-1">
                                <div className="flex flex-col items-center gap-8 rounded-2xl border border-line-dark bg-ink-2 p-10 text-center md:p-14">
                                    <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                        <ShieldCheck size={32} aria-hidden="true" />
                                    </span>
                                    <div className="flex flex-col items-center gap-3">
                                        <p className="type-eyebrow flex items-center gap-2 text-muted-dark">
                                            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                                            Secure network active
                                        </p>
                                        <p className="type-mono text-3xl text-paper md:text-4xl">AES-256</p>
                                    </div>
                                </div>
                            </Reveal>

                            <div className="order-1 flex flex-col gap-8 lg:order-2">
                                <SectionHeading
                                    id="fintech-security-heading"
                                    tone="dark"
                                    eyebrow="Security infrastructure"
                                    title={
                                        <>
                                            Bank-grade data <em>security</em>.
                                        </>
                                    }
                                    lede="We don't just add security; we build it into the DNA of your product. Our fintech solutions utilize multi-layer encryption, secure vaulting, and real-time threat monitoring to protect every single transaction."
                                />
                                <Reveal delay={0.1}>
                                    <ul className="grid gap-3 sm:grid-cols-2">
                                        {securityFeatures.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-3 text-sm font-semibold text-paper"
                                            >
                                                <CheckCircle2
                                                    size={16}
                                                    aria-hidden="true"
                                                    className="shrink-0 text-accent-bright"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Solutions — light band */}
                <section
                    id="fintech-solutions"
                    aria-labelledby="fintech-solutions-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        {/* Sticky heading + stacked list: five cards never leave an orphan row the way a 3-up grid does. */}
                        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                            <div className="flex flex-col items-start gap-8 self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="fintech-solutions-heading"
                                    eyebrow="Fintech solutions"
                                    title={
                                        <>
                                            Fintech solutions we <em>provide</em>.
                                        </>
                                    }
                                />
                            </div>

                            <ul className="flex flex-col gap-4">
                                {solutions.map(({ title, desc, points, icon: Icon }) => (
                                    <Reveal
                                        as="li"
                                        key={title}
                                        className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted md:p-8"
                                    >
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                                            <span className={lightIconBox}>
                                                <Icon size={20} aria-hidden="true" />
                                            </span>
                                            <div className="flex flex-col gap-3">
                                                <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">
                                                    {title}
                                                </h3>
                                                <p className="max-w-[56ch] text-base md:text-lg leading-relaxed text-muted">
                                                    {desc}
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="grid gap-x-8 gap-y-3 border-t border-line pt-6 sm:grid-cols-2">
                                            {points.map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex items-start gap-3 text-sm md:text-base text-ink"
                                                >
                                                    <CheckCircle2
                                                        size={16}
                                                        aria-hidden="true"
                                                        className="mt-1 shrink-0 text-accent"
                                                    />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Reveal>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </section>

                {/* Why choose us — dark band */}
                <section
                    id="fintech-why"
                    aria-labelledby="fintech-why-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            <div className="flex flex-col gap-10">
                                <SectionHeading
                                    id="fintech-why-heading"
                                    tone="dark"
                                    eyebrow="Why choose us"
                                    title={
                                        <>
                                            Why fintech companies <em>choose</em> DevGrowth Solutions.
                                        </>
                                    }
                                />
                                <Stagger as="ul" className="flex flex-col divide-y divide-line-dark border-y border-line-dark">
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

                            <Reveal
                                delay={0.1}
                                className="overflow-hidden rounded-2xl border border-line-dark bg-ink-2"
                            >
                                <img
                                    src={WHY_IMAGE}
                                    alt="Fintech"
                                    loading="lazy"
                                    className="aspect-[4/3] w-full object-cover"
                                />
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Process — light band */}
                <section
                    id="fintech-process"
                    aria-labelledby="fintech-process-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            id="fintech-process-heading"
                            eyebrow="How we work"
                            title={
                                <>
                                    Our fintech development <em>process</em>.
                                </>
                            }
                        />
                        <Stagger as="ol" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                <MotionItem key={id} variants={staggerChild} className={lightCard}>
                                    <div className="flex items-center justify-between">
                                        <span className={lightIconBox}>
                                            <Icon size={20} aria-hidden="true" />
                                        </span>
                                        <span className="type-mono text-sm text-muted">{id}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-sans text-xl font-semibold tracking-tight">{title}</h3>
                                        <p className="text-base leading-relaxed text-muted">{desc}</p>
                                    </div>
                                </MotionItem>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Closing CTA — dark band */}
                <section id="fintech-cta" aria-labelledby="fintech-cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-start gap-10">
                        <SectionHeading
                            id="fintech-cta-heading"
                            tone="dark"
                            size="lg"
                            eyebrow="Next step"
                            title={
                                <>
                                    Financial technology should empower users — <em>not worry them</em>.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Build your fintech platform
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
