import { useState } from "react";
import { motion } from "framer-motion";
import {
    Sparkles, Brain, Database, Cloud, Code2, Rocket,
    Search, BarChart3, Cpu, RefreshCcw, ShieldCheck,
    TrendingUp, CheckCircle2, Layers, Zap,
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

const OVERVIEW_IMAGE = {
    src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
    alt: "Abstract render of a machine learning model",
};

const serviceTypes = [
    {
        title: "Custom AI Solution Development",
        desc: "We build tailored AI systems aligned with your business needs — from automation engines to decision-support systems.",
        points: ["Business process automation", "Intelligent decision systems", "Custom AI model integration", "Scalable architecture"],
        icon: Brain,
    },
    {
        title: "Machine Learning Model Development",
        desc: "Designing and training ML models that learn from your data and improve over time.",
        points: ["Predictive analytics", "Classification & regression models", "Recommendation systems", "Model optimization & tuning"],
        icon: TrendingUp,
    },
    {
        title: "AI for Startups (AI-Enabled MVPs)",
        desc: "Rapid development of AI-powered MVPs to validate innovative product ideas.",
        points: ["AI-based feature integration", "Rapid prototyping", "Data pipeline setup", "Investor-ready AI products"],
        icon: Rocket,
    },
    {
        title: "ML Integration & Deployment",
        desc: "Getting trained models into your existing systems and keeping them healthy in production.",
        points: ["CRM & ERP AI integration", "API-based AI services", "Inference infrastructure", "Monitoring & retraining"],
        icon: Zap,
    },
];

const techStack = [
    { name: "Python", category: "AI & ML", icon: Code2 },
    { name: "TensorFlow", category: "AI & ML", icon: Brain },
    { name: "Scikit-learn", category: "AI & ML", icon: Cpu },
    { name: "OpenAI APIs", category: "AI & ML", icon: Sparkles },
    { name: "Pandas", category: "Data & Analytics", icon: BarChart3 },
    { name: "NumPy", category: "Data & Analytics", icon: BarChart3 },
    { name: "Power BI", category: "Data & Analytics", icon: BarChart3 },
    { name: "Node.js", category: "Backend", icon: Code2 },
    { name: "FastAPI", category: "Backend", icon: Code2 },
    { name: "Docker", category: "Deployment", icon: Layers },
    { name: "AWS AI", category: "Cloud", icon: Cloud },
    { name: "Google Cloud AI", category: "Cloud", icon: Cloud },
];

const processSteps = [
    { id: "01", title: "Problem Understanding & Strategy", desc: "Identifying business challenges and defining AI opportunities.", icon: Search },
    { id: "02", title: "Data Collection & Preparation", desc: "Data cleaning, transformation, and pipeline setup.", icon: Database },
    { id: "03", title: "Model Design & Training", desc: "Developing and training machine learning models.", icon: Brain },
    { id: "04", title: "Testing & Validation", desc: "Performance evaluation, accuracy testing, and optimization.", icon: ShieldCheck },
    { id: "05", title: "Deployment & Integration", desc: "Integrating AI models into production systems.", icon: Code2 },
    { id: "06", title: "Monitoring & Improvement", desc: "Tracking performance and improving models over time.", icon: TrendingUp },
    { id: "07", title: "Scaling & Optimization", desc: "Enhancing infrastructure for growth and high-load environments.", icon: RefreshCcw },
];

const architectureStats = [
    { label: "Architecture", value: "Custom" },
    { label: "Optimization", value: "Hyper-tuned" },
];

/* ------------------------------------------------------------------------
   Static blueprint of a 3–4–3 network. Nothing moves; the card reveals once.
   ------------------------------------------------------------------------ */
const LAYERS = [
    { id: "input", x: 80, nodes: [80, 160, 240] },
    { id: "hidden", x: 240, nodes: [60, 125, 190, 255] },
    { id: "output", x: 400, nodes: [80, 160, 240] },
];

const EDGES = LAYERS.slice(0, -1).flatMap((from, i) => {
    const to = LAYERS[i + 1];
    return from.nodes.flatMap((y1) =>
        to.nodes.map((y2) => ({
            id: `${from.id}-${y1}-${to.id}-${y2}`,
            d: `M${from.x} ${y1} L${to.x} ${y2}`,
        })),
    );
});

function NetworkDiagram() {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-line-dark bg-ink-2">
            <svg
                aria-hidden="true"
                viewBox="0 0 480 320"
                className="w-full text-accent-bright"
                fill="none"
            >
                <g stroke="currentColor" strokeWidth="1" className="opacity-30">
                    {EDGES.map((edge) => (
                        <path key={edge.id} d={edge.d} />
                    ))}
                </g>
                {LAYERS.map((layer) =>
                    layer.nodes.map((y) => (
                        <circle
                            key={`${layer.id}-${y}`}
                            cx={layer.x}
                            cy={y}
                            r="6"
                            strokeWidth="1.5"
                            className="fill-ink-2 stroke-accent-bright"
                        />
                    )),
                )}
            </svg>
            <div className="flex items-center justify-between gap-4 border-t border-line-dark px-5 py-4">
                <span className="type-eyebrow text-muted-dark">Architecture Status</span>
                <span className="type-eyebrow flex items-center gap-2 text-accent-bright">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                    Optimizing
                </span>
            </div>
        </div>
    );
}

function IconBox({ icon: Icon, tone = "light" }) {
    return (
        <span
            className={
                tone === "dark"
                    ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright"
                    : "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
            }
        >
            <Icon size={20} aria-hidden="true" />
        </span>
    );
}

export default function AiMachineLearning() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* Page header */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-8">
                            <Eyebrow tone="dark">AI &amp; Machine Learning</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Building <em className="italic text-accent-bright">intelligent</em> AI solutions that drive
                                growth.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch] leading-relaxed">
                                AI-powered systems designed to automate, optimize, and scale your operations.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    Build your AI solution
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    Book free AI consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* Overview */}
                <section aria-labelledby="overview-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="overview-heading"
                                    eyebrow="Overview"
                                    title={
                                        <>
                                            Transforming data into <em>intelligent</em> business decisions.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-5 text-base leading-relaxed text-muted md:text-lg"
                                >
                                    <p>
                                        At DevGrowth Solutions, we design and develop AI-powered systems that turn complex
                                        data into actionable insights. From predictive analytics to intelligent automation,
                                        our solutions help businesses reduce manual effort, increase efficiency, and unlock
                                        scalable growth.
                                    </p>
                                    <p>
                                        Whether you're a startup exploring AI integration or an enterprise looking to
                                        optimize operations, we build intelligent systems tailored to your business goals.
                                    </p>
                                    <p>
                                        Our focus is not just implementing AI — it's delivering measurable impact,
                                        automation, and long-term competitive advantage.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal delay={0.15} className="flex flex-col gap-4">
                                <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                                    <img
                                        src={OVERVIEW_IMAGE.src}
                                        alt={OVERVIEW_IMAGE.alt}
                                        loading="lazy"
                                        className="aspect-square w-full object-cover"
                                    />
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4">
                                    <IconBox icon={Brain} />
                                    <span className="type-eyebrow text-ink">Intelligent Systems</span>
                                </div>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Neural network architectures */}
                <section
                    aria-labelledby="architecture-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
                            <Reveal className="order-2 lg:order-1">
                                <NetworkDiagram />
                            </Reveal>

                            <div className="order-1 flex flex-col gap-8 lg:order-2">
                                <SectionHeading
                                    id="architecture-heading"
                                    tone="dark"
                                    eyebrow="Advanced Engineering"
                                    title={
                                        <>
                                            Neural network <em>architectures</em>.
                                        </>
                                    }
                                />
                                <Reveal delay={0.1} className="flex flex-col gap-8">
                                    <p className="max-w-[56ch] text-base leading-relaxed text-muted-dark md:text-lg">
                                        We don't just use APIs. We design custom neural architectures tailored to your
                                        specific data patterns, ensuring maximum accuracy and performance for complex
                                        decision-making tasks.
                                    </p>
                                    <dl className="grid gap-4 sm:grid-cols-2">
                                        {architectureStats.map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="flex flex-col gap-2 rounded-2xl border border-line-dark bg-ink-2 p-6"
                                            >
                                                <dt className="type-eyebrow text-muted-dark">{stat.label}</dt>
                                                <dd className="font-sans text-xl font-semibold tracking-tight text-paper md:text-2xl">
                                                    {stat.value}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Services */}
                <section aria-labelledby="services-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="services-heading"
                            eyebrow="Our core offerings"
                            title={
                                <>
                                    AI &amp; ML <em>services</em>.
                                </>
                            }
                        />

                        <Stagger as="ul" className="grid gap-4 md:grid-cols-2 md:gap-6">
                            {serviceTypes.map(({ title, desc, points, icon }) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted md:p-8"
                                >
                                    <IconBox icon={icon} />
                                    <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                    <p className="text-base leading-relaxed text-muted md:text-lg">{desc}</p>
                                    <ul className="grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
                                        {points.map((point) => (
                                            <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
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

                {/* Tech stack */}
                <section aria-labelledby="stack-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="stack-heading"
                            tone="dark"
                            eyebrow="Our AI stack"
                            title={
                                <>
                                    Modern AI technologies for <em>intelligent</em> systems.
                                </>
                            }
                        />

                        <Stagger
                            as="ul"
                            stagger={0.05}
                            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6"
                        >
                            {techStack.map(({ name, category, icon }) => (
                                <MotionLi
                                    key={name}
                                    variants={staggerChild}
                                    className="flex flex-col gap-4 rounded-2xl border border-line-dark bg-ink-2 p-5 transition-colors duration-300 hover:border-muted-dark"
                                >
                                    <IconBox icon={icon} tone="dark" />
                                    <div className="flex flex-col gap-1.5">
                                        <span className="type-eyebrow leading-normal text-muted-dark">{category}</span>
                                        <span className="font-sans text-base font-semibold tracking-tight text-paper">
                                            {name}
                                        </span>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Process */}
                <section aria-labelledby="process-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                            <div className="self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="process-heading"
                                    eyebrow="How we work"
                                    title={
                                        <>
                                            Our AI &amp; ML implementation <em>process</em>.
                                        </>
                                    }
                                />
                            </div>

                            <ol className="divide-y divide-line border-y border-line">
                                {processSteps.map(({ id, title, desc, icon }) => (
                                    <Reveal
                                        as="li"
                                        key={id}
                                        className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 sm:gap-6 sm:py-8"
                                    >
                                        <IconBox icon={icon} />
                                        <div className="flex flex-col gap-2">
                                            <span className="type-mono text-sm text-muted">{id}</span>
                                            <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">
                                                {title}
                                            </h3>
                                            <p className="max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">
                                                {desc}
                                            </p>
                                        </div>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </Container>
                </section>

                {/* Closing CTA */}
                <section aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10 text-center">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            align="center"
                            title={
                                <>
                                    We don't just build AI systems. We engineer <em>intelligent</em> solutions.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Build your AI solution
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
