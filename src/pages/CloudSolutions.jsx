import { useState } from "react";
import { motion } from "framer-motion";
import {
    Cloud,
    Server,
    Database,
    ShieldCheck,
    RefreshCcw,
    Search,
    Code2,
    Rocket,
    TrendingUp,
    CheckCircle2,
    Layers,
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

const OVERVIEW_IMAGE =
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80";

const serviceTypes = [
    {
        title: "Cloud Infrastructure Setup",
        desc: "We build cloud environments from the ground up. Secure server setup, database configuration, and scalable architecture planning.",
        points: ["Secure server setup", "Database configuration", "Scalable architecture planning", "Cost-efficient resource allocation"],
        icon: Server,
    },
    {
        title: "Cloud Migration",
        desc: "Still running on traditional servers? We help you move to the cloud smoothly and safely. The shift feels seamless — not stressful.",
        points: ["Application migration", "Database migration", "Minimal downtime transition", "Post-migration tuning"],
        icon: Cloud,
    },
    {
        title: "DevOps & Deployment Automation",
        desc: "Speed matters. We help you release updates faster and more reliably. Less manual work. Fewer errors. Faster releases.",
        points: ["CI/CD pipeline setup", "Automated deployments", "Docker containerization", "Infrastructure as Code"],
        icon: Code2,
    },
    {
        title: "Cloud Monitoring & Scaling",
        desc: "Growth brings traffic. Traffic brings pressure. We make sure your system handles both as your business grows.",
        points: ["Auto-scaling setup", "Real-time monitoring", "Backup & disaster recovery", "Continuous optimization"],
        icon: TrendingUp,
    },
];

const techStack = [
    { name: "AWS", category: "Cloud", icon: Cloud },
    { name: "Google Cloud", category: "Cloud", icon: Cloud },
    { name: "Azure", category: "Cloud", icon: Cloud },
    { name: "Docker", category: "DevOps", icon: Layers },
    { name: "Kubernetes", category: "DevOps", icon: Layers },
    { name: "GitHub Actions", category: "DevOps", icon: Code2 },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "SSL & Firewall", category: "Security", icon: ShieldCheck },
];

const processSteps = [
    { id: "01", title: "Understanding Your Setup", desc: "We analyze what you have and where you want to go.", icon: Search },
    { id: "02", title: "Planning the Architecture", desc: "We design a structure that fits your business — not a generic template.", icon: Layers },
    { id: "03", title: "Setup or Migration", desc: "We deploy or migrate your systems carefully and securely.", icon: Server },
    { id: "04", title: "Testing & Optimization", desc: "We test performance, security, and reliability before going live.", icon: ShieldCheck },
    { id: "05", title: "Launch & Monitoring", desc: "We monitor everything closely after deployment.", icon: Rocket },
    { id: "06", title: "Ongoing Support & Scaling", desc: "As your business grows, we scale your infrastructure accordingly.", icon: RefreshCcw },
];

/* Top of the stack is narrowest; the foundation layer runs full width. */
const cloudLayers = [
    { title: "SaaS", desc: "Software solutions", inset: "sm:mx-16" },
    { title: "PaaS", desc: "Development platform", inset: "sm:mx-8" },
    { title: "IaaS", desc: "Infrastructure foundation", inset: "" },
];

const architectureHighlights = [
    { title: "Multi-Region Availability", icon: Cloud },
    { title: "Disaster Recovery Systems", icon: ShieldCheck },
];

function IconBox({ icon: Icon, tone = "light" }) {
    return (
        <span
            className={cx(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                tone === "dark" ? "bg-ink-3 text-accent-bright" : "bg-accent-soft text-accent",
            )}
        >
            <Icon size={18} aria-hidden="true" />
        </span>
    );
}

export default function CloudSolutions() {
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
                        <Reveal className="flex flex-col items-start gap-6">
                            <Eyebrow tone="dark">Cloud Solutions</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Cloud solutions that help your business{" "}
                                <em className="italic text-accent-bright">scale</em>.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">
                                We build secure, scalable cloud systems so your business can grow without worrying
                                about infrastructure.
                            </p>
                            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    Move to the Cloud
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* ---- Overview ---- */}
                <section
                    aria-labelledby="cloud-overview-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="cloud-overview-heading"
                                    eyebrow="Overview"
                                    title={
                                        <>
                                            Smart cloud infrastructure for <em>modern</em> businesses.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-6 text-base md:text-lg leading-relaxed text-muted"
                                >
                                    <p>
                                        At DevGrowth Solutions, we help businesses simplify and strengthen their
                                        technology with the right cloud setup. Whether you&apos;re a startup launching
                                        your first product or a growing company managing increasing traffic, your
                                        infrastructure should support growth — not slow it down.
                                    </p>
                                    <p>
                                        We design cloud environments that are secure, reliable, and built to handle
                                        scale. Our goal is simple: make your infrastructure faster, safer, and ready
                                        for the future.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal
                                delay={0.15}
                                className="overflow-hidden rounded-2xl border border-line bg-surface"
                            >
                                <img
                                    src={OVERVIEW_IMAGE}
                                    alt="Earth seen from orbit at night, city lights tracing the continents"
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[4/3] w-full object-cover"
                                />
                                <div className="flex items-center gap-4 border-t border-line p-5">
                                    <IconBox icon={Cloud} />
                                    <span className="type-eyebrow text-ink">Built to Scale</span>
                                </div>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* ---- Architecture layers ---- */}
                <section
                    aria-labelledby="cloud-architecture-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="flex flex-col items-start gap-8 self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="cloud-architecture-heading"
                                    tone="dark"
                                    eyebrow="Architecture Depth"
                                    title={
                                        <>
                                            Full-stack cloud <em>architecture</em>.
                                        </>
                                    }
                                    lede="We specialize in the entire cloud stack. From setting up the physical infrastructure layers (IaaS) to managing deployment platforms (PaaS) and building finished software products (SaaS), our team ensures vertical integration for maximum efficiency."
                                />
                                <Reveal as="ul" delay={0.1} className="flex flex-col gap-4">
                                    {architectureHighlights.map(({ title, icon }) => (
                                        <li key={title} className="flex items-center gap-4">
                                            <IconBox icon={icon} tone="dark" />
                                            <span className="font-semibold text-paper">{title}</span>
                                        </li>
                                    ))}
                                </Reveal>
                            </div>

                            <Stagger as="ol" className="flex flex-col gap-3 self-center">
                                {cloudLayers.map(({ title, desc, inset }) => (
                                    <MotionItem
                                        key={title}
                                        variants={staggerChild}
                                        className={cx(
                                            "flex items-baseline justify-between gap-6 rounded-2xl border border-line-dark bg-ink-2 p-6 transition-colors duration-300 hover:border-muted-dark md:p-8",
                                            inset,
                                        )}
                                    >
                                        <h3 className="type-display text-4xl text-paper md:text-5xl">{title}</h3>
                                        <p className="type-eyebrow leading-normal text-right text-muted-dark">{desc}</p>
                                    </MotionItem>
                                ))}
                            </Stagger>
                        </div>
                    </Container>
                </section>

                {/* ---- Services ---- */}
                <section
                    aria-labelledby="cloud-services-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="cloud-services-heading"
                            eyebrow="Our core offerings"
                            title={
                                <>
                                    Our cloud <em>services</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid gap-4 md:grid-cols-2">
                            {serviceTypes.map(({ title, desc, points, icon }) => (
                                <MotionItem
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink md:p-8"
                                >
                                    <IconBox icon={icon} />
                                    <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                    <p className="text-base md:text-lg leading-relaxed text-muted">{desc}</p>
                                    <ul className="mt-auto grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
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

                {/* ---- Technologies ---- */}
                <section
                    aria-labelledby="cloud-tech-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="cloud-tech-heading"
                            tone="dark"
                            eyebrow="Technologies we use"
                            title={
                                <>
                                    Technologies we <em>work</em> with.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {techStack.map(({ name, category, icon }) => (
                                <MotionItem
                                    key={name}
                                    variants={staggerChild}
                                    className="flex items-center gap-4 rounded-2xl border border-line-dark bg-ink-2 p-6 transition-colors duration-300 hover:border-muted-dark"
                                >
                                    <IconBox icon={icon} tone="dark" />
                                    <div className="flex flex-col gap-1.5">
                                        <span className="type-eyebrow text-muted-dark">{category}</span>
                                        <span className="font-semibold text-paper">{name}</span>
                                    </div>
                                </MotionItem>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* ---- Process ---- */}
                <section
                    aria-labelledby="cloud-process-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="cloud-process-heading"
                            eyebrow="How we work"
                            title={
                                <>
                                    Our cloud implementation <em>process</em>.
                                </>
                            }
                        />
                        <Stagger as="ol" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {processSteps.map(({ id, title, desc, icon }) => (
                                <MotionItem
                                    key={id}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink"
                                >
                                    <div className="flex items-center justify-between">
                                        <IconBox icon={icon} />
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

                {/* ---- Closing CTA ---- */}
                <section aria-labelledby="cloud-cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-start gap-10">
                        <SectionHeading
                            id="cloud-cta-heading"
                            tone="dark"
                            size="lg"
                            eyebrow="Get started"
                            titleClassName="max-w-[20ch]"
                            title={
                                <>
                                    We don&apos;t just set up servers. We build <em>reliable</em> digital foundations.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Move to the Cloud
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
