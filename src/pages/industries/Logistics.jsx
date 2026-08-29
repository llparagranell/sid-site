import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    CheckCircle2,
    Cloud,
    Code2,
    Database,
    Layers,
    Package,
    RefreshCcw,
    Rocket,
    Search,
    Smartphone,
    Truck,
    Warehouse,
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
import cx from "../../lib/cx";

// PascalCase aliases: the project ESLint config only counts these as uses of `motion`.
const MotionLi = motion.li;
const MotionPath = motion.path;

const solutions = [
    {
        title: "Fleet & Driver Management Systems",
        desc: "Everything in one clear dashboard. Managing vehicles and drivers shouldn't require ten different tools.",
        points: ["Track vehicles in real time", "Manage driver assignments", "Plan routes efficiently", "Track maintenance schedules"],
        icon: Truck,
    },
    {
        title: "Shipment Tracking Platforms",
        desc: "Customers today expect transparency. Less calling. More visibility.",
        points: ["Real-time tracking portals", "Automated delivery updates", "Status notifications", "Customer-facing dashboards"],
        icon: Package,
    },
    {
        title: "Warehouse & Inventory Systems",
        desc: "Manual inventory tracking leads to mistakes. Simple structure. Better control.",
        points: ["Track stock levels accurately", "Monitor incoming/outgoing goods", "Reduce inventory errors", "Manage multiple warehouses"],
        icon: Warehouse,
    },
    {
        title: "Mobile Apps for Field Teams",
        desc: "Your drivers and warehouse teams need tools that are fast and easy to use.",
        points: ["Delivery confirmation apps", "Route information access", "Real-time communication", "Instant status updates"],
        icon: Smartphone,
    },
    {
        title: "Reliable & Scalable Infrastructure",
        desc: "As your business grows, your system should grow with it. Built for long-term growth.",
        points: ["Cloud-based deployment", "Secure data management", "High-performance backend", "Scalable database systems"],
        icon: Cloud,
    },
];

const visibilityPoints = [
    { label: "Predictive Routing", desc: "Reduce fuel costs and delivery times." },
    { label: "Automated Alerts", desc: "Stay informed of delays before they happen." },
];

const whyChoose = [
    "We understand operational pressure",
    "We build practical, not overly complex systems",
    "We focus on reliability and speed",
    "We design clean and easy-to-use dashboards",
    "We stay available for ongoing improvements",
];

const processSteps = [
    { id: "01", title: "Operations Analysis", desc: "Understanding your fleet, routes, and coordination challenges.", icon: Search },
    { id: "02", title: "System Architecture", desc: "Designing a unified platform for fleet, shipping, and inventory.", icon: Layers },
    { id: "03", title: "Development", desc: "Building dashboards, mobile apps, and tracking systems.", icon: Code2 },
    { id: "04", title: "Integration & Testing", desc: "Connecting systems and testing with real operational data.", icon: Database },
    { id: "05", title: "Launch & Training", desc: "Deployment with onboarding for drivers and operations staff.", icon: Rocket },
    { id: "06", title: "Ongoing Optimization", desc: "Continuous improvements as your operations grow.", icon: RefreshCcw },
];

/**
 * Shipment route for the tracking panel, in a 400x300 box: depot (60,95) top-left to
 * destination (335,235) bottom-right. The other two corners hold the data chips, so
 * neither node sits under a chip at any panel width (checked at 390, 1024 and 1440).
 */
const ROUTE_PATH = "M60,95 C130,95 180,235 335,235";

/** Dark-band panel that sketches one shipment in transit. Decorative; the copy is read as text. */
function TrackingPanel() {
    const reduced = useReducedMotion();

    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line-dark bg-ink-2">
            <svg
                aria-hidden="true"
                viewBox="0 0 400 300"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 h-full w-full text-accent-bright"
                fill="none"
            >
                {/* Dashed guide shows the whole route; the solid line draws over it once in view.
                    No dasharray on the MotionPath: animating pathLength makes framer-motion own stroke-dasharray. */}
                <path d={ROUTE_PATH} stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-20" />
                <MotionPath
                    d={ROUTE_PATH}
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: reduced ? 1 : 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
                />
                <circle cx="60" cy="95" r="6" fill="currentColor" />
                <circle cx="335" cy="235" r="6" fill="currentColor" />
            </svg>

            {/* Depot marker sits just above the first node: 60/400 across, 95/300 down. */}
            <span
                aria-hidden="true"
                className="absolute bottom-[68.3%] left-[15%] mb-3 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-lg bg-ink-3 text-accent-bright"
            >
                <Truck size={20} />
            </span>

            <dl className="absolute right-4 top-4 flex flex-col gap-1 rounded-xl border border-line-dark bg-ink/80 p-4 md:right-6 md:top-6">
                <dt className="type-eyebrow text-accent-bright">Estimated Arrival</dt>
                <dd className="type-mono text-xl font-semibold text-paper">14:30 PM</dd>
                <dd className="type-eyebrow pt-1 text-muted-dark">On Schedule</dd>
            </dl>

            <dl className="absolute bottom-4 left-4 flex flex-col gap-1 rounded-xl bg-accent p-4 text-white md:bottom-6 md:left-6">
                <dt className="type-eyebrow opacity-80">Package ID</dt>
                <dd className="type-mono text-sm font-semibold tracking-widest">DS-992-X</dd>
            </dl>
        </div>
    );
}

export default function Logistics() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-paper text-ink font-sans">
            <Navbar onBookClick={toggleBooking} />

            <main>
                {/* Page header */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-6">
                            <Eyebrow tone="dark">Logistics industry</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Technology That Keeps Your Logistics <em className="italic text-accent-bright">Moving</em>{" "}
                                Smoothly.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">
                                We build digital systems that help logistics businesses stay organized, reduce delays, and grow
                                without chaos.
                            </p>
                            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={toggleBooking}>
                                    Build Your Logistics System
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={toggleBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* Overview */}
                <section id="overview" aria-labelledby="overview-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="overview-heading"
                                    eyebrow="Overview"
                                    title={
                                        <>
                                            Logistics Is Complex — But Your System <em>Shouldn't</em> Be.
                                        </>
                                    }
                                />
                                <Reveal delay={0.1} className="flex max-w-[56ch] flex-col gap-5 text-base md:text-lg leading-relaxed text-muted">
                                    <p>
                                        Vehicles on the road. Goods in warehouses. Drivers on schedule. Customers waiting for
                                        updates. When systems are outdated or disconnected, things quickly become messy.
                                    </p>
                                    <p>
                                        At DevGrowth Solutions, we help logistics companies bring structure and clarity to their
                                        operations through simple, reliable technology. We don't believe in overcomplicated
                                        systems.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal as="figure" delay={0.15} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
                                <img
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                                    alt="Freight being loaded for dispatch at a logistics depot"
                                    loading="lazy"
                                    className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
                                />
                                <figcaption className="flex items-center gap-4 border-t border-line p-5">
                                    <span
                                        aria-hidden="true"
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
                                    >
                                        <Truck size={20} />
                                    </span>
                                    <span className="type-eyebrow text-ink">Organized Operations</span>
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Real-time visibility */}
                <section
                    id="visibility"
                    aria-labelledby="visibility-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
                            <Reveal delay={0.1} className="order-2 lg:order-1">
                                <TrackingPanel />
                            </Reveal>

                            <div className="order-1 flex flex-col gap-10 lg:order-2">
                                <SectionHeading
                                    id="visibility-heading"
                                    tone="dark"
                                    eyebrow="Logistics engineering"
                                    title={
                                        <>
                                            Real-Time System <em>Visibility</em>.
                                        </>
                                    }
                                    lede="We bridge the gap between operations and information. Our systems provide total visibility across your supply chain, from fleet telematics to warehouse inventory, ensuring you can make informed decisions in real-time."
                                />
                                <Reveal as="ul" delay={0.1} className="flex flex-col gap-6">
                                    {visibilityPoints.map((item) => (
                                        <li key={item.label} className="flex items-start gap-4">
                                            <span
                                                aria-hidden="true"
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright"
                                            >
                                                <Package size={20} />
                                            </span>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="font-sans text-lg font-semibold tracking-tight text-paper">
                                                    {item.label}
                                                </h3>
                                                <p className="text-base leading-relaxed text-muted-dark">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* What we build */}
                <section id="solutions" aria-labelledby="solutions-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="solutions-heading"
                            eyebrow="What we build"
                            title={
                                <>
                                    What We Can Build for <em>You</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid gap-4 md:grid-cols-2 md:gap-6">
                            {solutions.map(({ title, desc, points, icon: Icon }, i) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className={cx(
                                        "flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink md:p-8",
                                        // An odd last card would sit alone; let it take the full row.
                                        i === solutions.length - 1 && solutions.length % 2 === 1 && "md:col-span-2",
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent"
                                    >
                                        <Icon size={20} />
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                                        <p className="max-w-[56ch] text-base md:text-lg leading-relaxed text-muted">{desc}</p>
                                    </div>
                                    <ul className="grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
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

                {/* Why choose us */}
                <section id="why-us" aria-labelledby="why-us-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
                            <div className="flex flex-col gap-10">
                                <SectionHeading
                                    id="why-us-heading"
                                    tone="dark"
                                    eyebrow="Why choose us"
                                    title={
                                        <>
                                            Why Logistics Companies Choose <em>DevGrowth</em> Solutions.
                                        </>
                                    }
                                />
                                <Reveal as="ul" delay={0.1} className="flex flex-col divide-y divide-line-dark border-y border-line-dark">
                                    {whyChoose.map((item) => (
                                        <li key={item} className="flex items-center gap-4 py-4 text-base md:text-lg text-paper">
                                            <span
                                                aria-hidden="true"
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright"
                                            >
                                                <CheckCircle2 size={18} />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </Reveal>
                            </div>

                            <Reveal delay={0.15} className="overflow-hidden rounded-2xl border border-line-dark bg-ink-2">
                                <img
                                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"
                                    alt="Racks of stocked goods inside a logistics warehouse"
                                    loading="lazy"
                                    className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                                />
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Process */}
                <section id="process" aria-labelledby="process-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="process-heading"
                            eyebrow="How we work"
                            title={
                                <>
                                    Our Logistics Implementation <em>Process</em>.
                                </>
                            }
                        />
                        <Stagger as="ol" className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                            {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                <MotionLi
                                    key={id}
                                    variants={staggerChild}
                                    className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink"
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            aria-hidden="true"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent"
                                        >
                                            <Icon size={20} />
                                        </span>
                                        <span className="type-mono text-sm text-muted">{id}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-sans text-xl font-semibold tracking-tight">{title}</h3>
                                        <p className="text-base leading-relaxed text-muted">{desc}</p>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Closing CTA */}
                <section id="cta" aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10 text-center">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            align="center"
                            size="lg"
                            eyebrow="Get started"
                            title={
                                <>
                                    Logistics is already challenging. Your technology <em>shouldn't</em> make it harder.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={toggleBooking}>
                                Build Your Logistics System
                            </Button>
                        </Reveal>
                    </Container>
                </section>
            </main>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
