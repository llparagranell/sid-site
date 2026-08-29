import { useState } from "react";
import { motion } from "framer-motion";
import {
    ShoppingCart,
    Search,
    ShieldCheck,
    CheckCircle2,
    Cloud,
    Code2,
    Rocket,
    TrendingUp,
    Layers,
    Smartphone,
    Database,
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
import { staggerChild } from "../../components/motion/constants";
import cx from "../../lib/cx";

// PascalCase alias: the project ESLint config only counts this as a use of `motion`.
const MotionLi = motion.li;

const serviceTypes = [
    {
        title: "Custom E-Commerce Website Development",
        desc: "We build tailored online stores that match your brand and business model. Your store works exactly the way your business needs it to.",
        points: ["Custom storefront design", "Product catalog setup", "Shopping cart & checkout", "Payment gateway integration"],
        icon: ShoppingCart,
    },
    {
        title: "Marketplace & Multi-Vendor Solutions",
        desc: "Planning to build the next big marketplace? We help you structure and scale it properly. Built for growth and operational clarity.",
        points: ["Vendor onboarding systems", "Commission management", "Multi-seller dashboards", "Order & inventory management"],
        icon: Layers,
    },
    {
        title: "E-Commerce App Development",
        desc: "Mobile shopping is growing fast. We help you stay ahead with smooth experience across web and mobile.",
        points: ["iOS & Android shopping apps", "Real-time order tracking", "Push notifications", "Reliable payment integration"],
        icon: Smartphone,
    },
    {
        title: "Store Optimization & Scaling",
        desc: "Already have an online store? We help you improve performance and increase conversions. Small improvements lead to significant revenue growth.",
        points: ["Speed optimization", "Checkout flow improvements", "Conversion-focused UI", "Analytics integration"],
        icon: TrendingUp,
    },
];

const techStack = [
    { name: "React", category: "Frontend", icon: Code2 },
    { name: "Next.js", category: "Frontend", icon: Code2 },
    { name: "Node.js", category: "Backend", icon: Code2 },
    { name: "Express.js", category: "Backend", icon: Code2 },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "MySQL", category: "Database", icon: Database },
    { name: "Stripe", category: "Payments", icon: ShieldCheck },
    { name: "Razorpay", category: "Payments", icon: ShieldCheck },
    { name: "AWS", category: "Cloud", icon: Cloud },
    { name: "Firebase", category: "Cloud", icon: Cloud },
];

const processSteps = [
    { id: "01", title: "Business & Market Understanding", desc: "Understanding your products, audience, and competition.", icon: Search },
    { id: "02", title: "Store Planning & Structure", desc: "Designing product categories, checkout flow, and admin system.", icon: Layers },
    { id: "03", title: "UI/UX Design", desc: "Creating a clean, trust-building shopping experience.", icon: Code2 },
    { id: "04", title: "Development & Integration", desc: "Building your store with secure payment and backend systems.", icon: ShoppingCart },
    { id: "05", title: "Testing & Security Validation", desc: "Ensuring performance, mobile responsiveness, and secure transactions.", icon: ShieldCheck },
    { id: "06", title: "Launch & Growth Support", desc: "Deployment, analytics setup, and scaling as sales increase.", icon: Rocket },
];

const checkoutFeatures = [
    { label: "One-Click Pay", icon: Zap },
    { label: "Secure Auth", icon: ShieldCheck },
];

/** Progress pips in the checkout mock; the last one is the active stage. */
const CHECKOUT_STAGES = [1, 2, 3];

const OVERVIEW_IMAGE = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80";

const lightIconBox = "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent";
const darkIconBox = "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright";

/** Static illustration of a checkout screen. Decorative: hidden from assistive tech. */
function CheckoutMock() {
    return (
        <div
            aria-hidden="true"
            className="flex w-full max-w-[400px] flex-col gap-8 rounded-2xl border border-line-dark bg-ink-2 p-6 md:p-8"
        >
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold tracking-tight text-paper">Checkout</span>
                <div className="flex gap-1">
                    {CHECKOUT_STAGES.map((stage) => (
                        <span
                            key={stage}
                            className={cx(
                                "h-1.5 w-6 rounded-full",
                                stage === CHECKOUT_STAGES.length ? "bg-accent-bright" : "bg-ink-3",
                            )}
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-line-dark bg-ink p-4">
                <span className={darkIconBox}>
                    <ShoppingCart size={18} />
                </span>
                <div className="flex flex-1 flex-col gap-2">
                    <span className="h-2 w-24 rounded-full bg-paper/20" />
                    <span className="h-1.5 w-12 rounded-full bg-paper/10" />
                </div>
                <span className="type-mono text-sm text-paper">$49.00</span>
            </div>

            <div className="flex flex-col gap-3 border-t border-line-dark pt-6">
                <div className="flex justify-between type-eyebrow text-muted-dark">
                    <span>Subtotal</span>
                    <span>$49.00</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-paper">
                    <span>Total</span>
                    <span className="type-mono text-accent-bright">$49.00</span>
                </div>
                <span className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white">
                    Place Order
                </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-line-dark bg-ink px-4 py-3 text-sm font-semibold text-paper">
                <CheckCircle2 size={18} className="shrink-0 text-accent-bright" />
                <span>Order Confirmed</span>
            </div>
        </div>
    );
}

export default function EcommerceSolutions() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-paper text-ink font-sans">
            <Navbar onBookClick={toggleBooking} />

            <main>
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-6 md:gap-8">
                            <Eyebrow tone="dark">E-Commerce Solutions</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                E-Commerce Solutions That Turn Visitors into{" "}
                                <em className="italic text-accent-bright">Customers</em>.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch] leading-relaxed">
                                We build fast, secure, and scalable online stores designed to drive sales and long-term
                                growth.
                            </p>
                            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
                                <Button tone="dark" variant="accent" arrow onClick={toggleBooking}>
                                    Build Your Online Store
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={toggleBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                <section aria-labelledby="overview-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="overview-heading"
                                    eyebrow="Overview"
                                    title={
                                        <>
                                            Powerful Online Stores Built for <em>Growth</em>.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-5 text-base leading-relaxed text-muted md:text-lg"
                                >
                                    <p>
                                        At DevGrowth Solutions, we create e-commerce platforms that are easy to manage,
                                        simple to use, and built to scale. Whether you&apos;re launching a new brand or
                                        expanding online, we design systems that make selling straightforward.
                                    </p>
                                    <p>
                                        From product browsing to secure checkout, every part of the experience is optimized
                                        for performance, trust, and conversions.
                                    </p>
                                    <p className="font-semibold text-ink">
                                        We don&apos;t just build online stores. We build digital sales engines.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal as="figure" delay={0.15} className="flex w-full max-w-[440px] flex-col gap-4 lg:ml-auto">
                                <img
                                    src={OVERVIEW_IMAGE}
                                    alt="Customer paying with a phone at a card terminal"
                                    width={600}
                                    height={600}
                                    loading="lazy"
                                    className="aspect-square w-full rounded-2xl border border-line object-cover"
                                />
                                <figcaption className="flex items-center gap-3 type-eyebrow text-muted">
                                    <span className={lightIconBox}>
                                        <ShoppingCart size={18} aria-hidden="true" />
                                    </span>
                                    Digital Sales Engine
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                <section aria-labelledby="checkout-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                            <div className="flex flex-col gap-10 lg:order-2">
                                <SectionHeading
                                    id="checkout-heading"
                                    tone="dark"
                                    eyebrow="Conversion Science"
                                    title={
                                        <>
                                            Frictionless <em>Checkout</em> Flows.
                                        </>
                                    }
                                    lede="We specialize in reducing friction at the most critical stage of the buyer journey. Our checkout designs are engineered to minimize drop-offs and maximize trust, resulting in higher conversion rates."
                                />
                                <Stagger as="ul" className="grid gap-6 sm:grid-cols-2">
                                    {checkoutFeatures.map(({ label, icon: Icon }) => (
                                        <MotionLi key={label} variants={staggerChild} className="flex items-center gap-4">
                                            <span className={darkIconBox}>
                                                <Icon size={18} aria-hidden="true" />
                                            </span>
                                            <span className="text-base font-semibold text-paper">{label}</span>
                                        </MotionLi>
                                    ))}
                                </Stagger>
                            </div>

                            <Reveal delay={0.1} className="flex justify-center lg:order-1 lg:justify-start">
                                <CheckoutMock />
                            </Reveal>
                        </div>
                    </Container>
                </section>

                <section aria-labelledby="services-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="services-heading"
                            eyebrow="Our core offerings"
                            title={
                                <>
                                    Our E-Commerce <em>Services</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid gap-6 md:grid-cols-2">
                            {serviceTypes.map(({ title, desc, points, icon: Icon }) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted md:p-8"
                                >
                                    <span className={lightIconBox}>
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                        <p className="text-base leading-relaxed text-muted md:text-lg">{desc}</p>
                                    </div>
                                    <ul className="grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
                                        {points.map((point) => (
                                            <li key={point} className="flex items-start gap-3 text-sm font-medium text-ink">
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

                <section aria-labelledby="tech-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="tech-heading"
                            tone="dark"
                            eyebrow="Technologies we use"
                            title={
                                <>
                                    Technologies We <em>Work</em> With.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                            {techStack.map(({ name, category, icon: Icon }) => (
                                <MotionLi
                                    key={name}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line-dark bg-ink-2 p-6 transition-colors duration-300 hover:border-muted-dark"
                                >
                                    <span className={darkIconBox}>
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <div className="flex flex-col gap-1.5">
                                        <span className="type-eyebrow text-muted-dark">{category}</span>
                                        <span className="text-base font-semibold text-paper">{name}</span>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                <section aria-labelledby="process-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                            <div className="self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="process-heading"
                                    eyebrow="How we work"
                                    title={
                                        <>
                                            Our E-Commerce Development <em>Process</em>.
                                        </>
                                    }
                                />
                            </div>

                            <ol role="list" className="divide-y divide-line border-y border-line">
                                {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                    <Reveal as="li" key={id} className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                                        <span className="type-mono text-sm text-muted">{id}</span>
                                        <div className="flex gap-4">
                                            <span className={lightIconBox}>
                                                <Icon size={18} aria-hidden="true" />
                                            </span>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                                <p className="max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">{desc}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </Container>
                </section>

                <section aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10 text-center">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            align="center"
                            eyebrow="Next step"
                            titleClassName="max-w-[24ch]"
                            title={
                                <>
                                    We don&apos;t just build e-commerce sites. We create <em>scalable</em> online businesses.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" icon={ShoppingCart} arrow onClick={toggleBooking}>
                                Build Your Online Store
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
