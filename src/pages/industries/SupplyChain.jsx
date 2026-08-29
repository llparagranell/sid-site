import { useState } from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    Brain,
    CheckCircle2,
    Cloud,
    Code2,
    Database,
    Layers,
    Package,
    RefreshCcw,
    Rocket,
    Search,
    Truck,
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
import cx from "../../lib/cx";

// PascalCase alias: the project ESLint config only counts this as a use of `motion`.
const MotionLi = motion.li;

const solutions = [
    {
        title: "Supplier & Vendor Management Systems",
        desc: "Managing multiple suppliers becomes easier with the right system. Everything organized and accessible.",
        points: ["Supplier tracking dashboards", "Order management systems", "Performance monitoring", "Payment tracking"],
        icon: Package,
    },
    {
        title: "Inventory & Demand Planning Systems",
        desc: "Avoid overstocking or stockouts. Better planning reduces waste and cost.",
        points: ["Real-time inventory tracking", "Low-stock alerts", "Demand forecasting tools", "Inventory reporting dashboards"],
        icon: BarChart3,
    },
    {
        title: "Distribution & Logistics Integration",
        desc: "Keep production and delivery connected. Improved coordination across the chain.",
        points: ["Shipment tracking systems", "Distribution dashboards", "Delivery performance monitoring", "Real-time updates across teams"],
        icon: Truck,
    },
    {
        title: "Centralized Cloud-Based Platforms",
        desc: "Supply chains generate a lot of data. Reliable systems build operational confidence.",
        points: ["Secure cloud deployment", "Centralized data systems", "Multi-location access", "Scalable infrastructure"],
        icon: Cloud,
    },
    {
        title: "Smart Insights & Automation",
        desc: "Helping you move from reactive to proactive planning with intelligent features.",
        points: ["Demand forecasting models", "Predictive inventory planning", "Automated reporting", "Performance analytics"],
        icon: Brain,
    },
];

const operationsFeatures = [
    { label: "Predictive Analytics", icon: BarChart3 },
    { label: "Multi-Node Registry", icon: Database },
];

const inventoryStatus = [
    { label: "In Transit", active: true },
    { label: "Stock Level: 92%", active: false },
];

/** Nine cells in the static inventory panel; the centre node is the highlighted one. */
const INVENTORY_CELLS = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
const HIGHLIGHTED_CELL = "b2";

const whyChoose = [
    "We understand operational complexity",
    "We build structured, practical systems",
    "We focus on clarity and usability",
    "We design for scalability",
    "We provide long-term support",
];

const processSteps = [
    { id: "01", title: "Supply Chain Analysis", desc: "Mapping your suppliers, inventory flow, and distribution chain.", icon: Search },
    { id: "02", title: "Platform Architecture", desc: "Designing a unified platform with visibility at every step.", icon: Layers },
    { id: "03", title: "Development & Integration", desc: "Building dashboards, automation rules, and reporting systems.", icon: Code2 },
    { id: "04", title: "Testing & Validation", desc: "Stress testing with simulated supply chain scenarios.", icon: Database },
    { id: "05", title: "Launch & Training", desc: "Onboarding your operations team for smooth adoption.", icon: Rocket },
    { id: "06", title: "Continuous Improvement", desc: "Monitoring KPIs and expanding features as needs grow.", icon: RefreshCcw },
];

export default function SupplyChain() {
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
                            <Eyebrow tone="dark">Supply chain industry</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Bringing <em className="italic text-accent-bright">Clarity</em> and Control to Complex Supply
                                Chains.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">
                                We build digital systems that help businesses manage suppliers, inventory, and distribution
                                with better visibility and fewer disruptions.
                            </p>
                            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={toggleBooking}>
                                    Strengthen Your Supply Chain
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={toggleBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* The industry */}
                <section
                    id="industry"
                    aria-labelledby="industry-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div className="flex flex-col gap-10">
                                <SectionHeading
                                    id="industry-heading"
                                    eyebrow="The industry"
                                    title={
                                        <>
                                            Supply Chains Are Complex — But They Don&apos;t Have to Feel <em>Chaotic</em>.
                                        </>
                                    }
                                    lede="A supply chain involves multiple moving parts: Suppliers. Manufacturers. Warehouses. Distributors. Retailers. When one part slows down, the entire chain feels the impact."
                                />
                                <Reveal delay={0.1}>
                                    <p className="max-w-[56ch] border-t border-line pt-8 text-base md:text-lg leading-relaxed text-muted">
                                        At DevGrowth Solutions, we build systems that bring everything together into one
                                        structured, transparent platform. Our goal: help you make faster, more informed
                                        decisions with less manual effort.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal as="figure" delay={0.15} className="flex w-full max-w-md flex-col gap-4 lg:justify-self-end">
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                                    alt="Craftsman turning a wooden part on a lathe in a workshop"
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
                                />
                                <figcaption className="type-eyebrow flex items-center gap-3 text-muted">
                                    <Package size={14} aria-hidden="true" className="shrink-0 text-accent" />
                                    Full Chain Visibility
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Operations design */}
                <section
                    id="operations"
                    aria-labelledby="operations-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                            <Reveal
                                delay={0.15}
                                className="order-2 flex flex-col gap-8 rounded-2xl border border-line-dark bg-ink-2 p-6 md:p-8 lg:order-1"
                            >
                                <div aria-hidden="true" className="mx-auto grid w-full max-w-[280px] grid-cols-3 gap-3">
                                    {INVENTORY_CELLS.map((cell) => (
                                        <span
                                            key={cell}
                                            className={cx(
                                                "flex aspect-square items-center justify-center rounded-lg border",
                                                cell === HIGHLIGHTED_CELL
                                                    ? "border-accent-bright bg-ink-3 text-accent-bright"
                                                    : "border-line-dark bg-ink text-muted-dark",
                                            )}
                                        >
                                            <Package size={20} />
                                        </span>
                                    ))}
                                </div>
                                <ul className="flex flex-wrap gap-2 border-t border-line-dark pt-6">
                                    {inventoryStatus.map(({ label, active }) => (
                                        <li
                                            key={label}
                                            className="type-eyebrow inline-flex items-center gap-2 rounded-full border border-line-dark px-3 py-2 text-muted-dark"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={cx(
                                                    "h-1.5 w-1.5 shrink-0 rounded-full",
                                                    active ? "bg-accent-bright" : "bg-line-dark",
                                                )}
                                            />
                                            {label}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>

                            <div className="order-1 flex flex-col gap-10 lg:order-2">
                                <SectionHeading
                                    id="operations-heading"
                                    tone="dark"
                                    eyebrow="Operations Design"
                                    title={
                                        <>
                                            Integrated Inventory <em>Intelligence</em>.
                                        </>
                                    }
                                    lede="Stop guessing and start knowing. Our supply chain platforms provide a unified view of your entire inventory lifecycle, enabling automated reordering, demand-sensitive replenishment, and multi-node coordination."
                                />
                                <Reveal delay={0.1}>
                                    <ul className="grid gap-6 border-t border-line-dark pt-8 sm:grid-cols-2">
                                        {operationsFeatures.map(({ label, icon: Icon }) => (
                                            <li key={label} className="flex items-center gap-4">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                                    <Icon size={20} aria-hidden="true" />
                                                </span>
                                                <span className="type-eyebrow text-paper">{label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* What we build */}
                <section
                    id="solutions"
                    aria-labelledby="solutions-heading"
                    className="band-light section-pad border-b border-line"
                >
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
                        <Stagger as="ul" className="grid gap-4 md:grid-cols-2">
                            {solutions.map(({ title, desc, points, icon: Icon }, index) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className={cx(
                                        "flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted md:p-8",
                                        index === solutions.length - 1 && "md:col-span-2",
                                    )}
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                    <p className="max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">{desc}</p>
                                    <ul
                                        className={cx(
                                            "mt-auto grid gap-3 border-t border-line pt-5 sm:grid-cols-2",
                                            index === solutions.length - 1 && "lg:grid-cols-4",
                                        )}
                                    >
                                        {points.map((point) => (
                                            <li key={point} className="flex items-start gap-3 text-sm text-ink">
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
                <section
                    id="why-us"
                    aria-labelledby="why-us-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div className="flex flex-col gap-10">
                                <SectionHeading
                                    id="why-us-heading"
                                    tone="dark"
                                    eyebrow="Why choose us"
                                    title={
                                        <>
                                            Why Businesses Choose DevGrowth Solutions for <em>Supply Chain</em>.
                                        </>
                                    }
                                />
                                <Stagger as="ul" className="flex flex-col divide-y divide-line-dark border-y border-line-dark">
                                    {whyChoose.map((item) => (
                                        <MotionLi
                                            key={item}
                                            variants={staggerChild}
                                            className="flex items-center gap-4 py-4 text-base text-paper md:text-lg"
                                        >
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                                <CheckCircle2 size={18} aria-hidden="true" />
                                            </span>
                                            <span>{item}</span>
                                        </MotionLi>
                                    ))}
                                </Stagger>
                            </div>

                            <Reveal delay={0.15} className="w-full max-w-md lg:justify-self-end">
                                <img
                                    src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=600&q=80"
                                    alt="Aerial view of stacked shipping containers and a gantry crane at a container yard"
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[4/5] w-full rounded-2xl border border-line-dark object-cover"
                                />
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Process */}
                <section
                    id="process"
                    aria-labelledby="process-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="process-heading"
                            eyebrow="How we work"
                            title={
                                <>
                                    Our Supply Chain <em>Implementation</em> Process.
                                </>
                            }
                        />
                        <Stagger as="ol" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                <MotionLi
                                    key={id}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                            <Icon size={20} aria-hidden="true" />
                                        </span>
                                        <span className="type-mono text-sm text-muted">{id}</span>
                                    </div>
                                    <h3 className="font-sans text-xl font-semibold tracking-tight">{title}</h3>
                                    <p className="text-base leading-relaxed text-muted">{desc}</p>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Closing CTA */}
                <section id="cta" aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            align="center"
                            size="lg"
                            eyebrow="Next step"
                            title={
                                <>
                                    A strong supply chain is built on <em>visibility, coordination,</em> and smart decisions.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={toggleBooking}>
                                Strengthen Your Supply Chain
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
