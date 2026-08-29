import { useState } from "react";
import { motion } from "framer-motion";
import {
    Brain,
    CheckCircle2,
    Code2,
    Database,
    Layers,
    RefreshCcw,
    Search,
    ShieldCheck,
    Smartphone,
    Users,
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
const MotionLi = motion.li;

const solutions = [
    {
        title: "Hospital & Clinic Management Systems",
        desc: "Everything organized in one secure system for streamlined healthcare operations.",
        points: ["Patient record management", "Appointment scheduling", "Billing & payment tracking", "Doctor & staff management"],
        icon: Users,
    },
    {
        title: "Healthcare Mobile Applications",
        desc: "Improving communication between providers and patients with intuitive mobile apps.",
        points: ["Appointment booking apps", "Telemedicine applications", "Prescription tracking", "Patient notifications"],
        icon: Smartphone,
    },
    {
        title: "Secure Database & Cloud Infrastructure",
        desc: "Because healthcare data must be protected. Encrypted, secure, and always available.",
        points: ["Encrypted patient data storage", "Secure cloud deployment", "Role-based access control", "Backup & disaster recovery"],
        icon: ShieldCheck,
    },
    {
        title: "AI-Powered Healthcare Solutions",
        desc: "Helping providers make smarter decisions with data through intelligent automation.",
        points: ["Patient data analysis", "Predictive health insights", "Automated chat assistants", "Workflow automation"],
        icon: Brain,
    },
];

const challenges = [
    "Managing patient data securely",
    "Reducing administrative workload",
    "Improving patient communication",
    "Automating scheduling & billing",
];

const standards = ["HIPAA", "GDPR", "HL7"];

const complianceStats = [
    { value: "100%", label: "Encrypted Data" },
    { value: "Uptime", label: "Critical Systems" },
];

const whyChoose = [
    "Strong focus on data security",
    "Scalable cloud-based systems",
    "Clean and easy-to-use interfaces",
    "Custom solutions based on real workflows",
    "Ongoing support and system maintenance",
];

const processSteps = [
    { id: "01", title: "Understanding Requirements", desc: "We analyze your existing workflows and operational challenges.", icon: Search },
    { id: "02", title: "System Architecture", desc: "We design a secure, scalable system tailored to healthcare needs.", icon: Layers },
    { id: "03", title: "Development & Integration", desc: "We build and integrate the system with existing infrastructure.", icon: Code2 },
    { id: "04", title: "Security & Compliance", desc: "Ensuring data protection and proper access controls.", icon: ShieldCheck },
    { id: "05", title: "Testing & Validation", desc: "Rigorous testing to ensure reliability and accuracy.", icon: Database },
    { id: "06", title: "Launch & Ongoing Support", desc: "Monitoring and continuous improvement post-deployment.", icon: RefreshCcw },
];

/** Static vitals trace for the compliance panel; decorative only. */
const VITALS_PATH = "M0,50 L40,50 L50,20 L60,80 L70,50 L110,50 L120,10 L135,90 L150,50 L200,50";

export default function Healthcare() {
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
                            <Eyebrow tone="dark">Healthcare industry</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Technology Solutions Designed for <em className="italic text-accent-bright">Modern</em>{" "}
                                Healthcare.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">
                                We build secure, reliable, and user-friendly digital systems that help healthcare providers
                                deliver better patient care.
                            </p>
                            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={toggleBooking}>
                                    Build Healthcare Software
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={toggleBooking}>
                                    Book Free Consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* Why healthcare is different */}
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
                                            Healthcare Is Not Just <em>Another</em> Industry.
                                        </>
                                    }
                                    lede="Healthcare is sensitive, regulated, and trust-driven. Hospitals, clinics, and health startups face challenges like managing patient data securely, reducing administrative workload, and ensuring compliance."
                                />
                                <Reveal delay={0.1} className="flex flex-col gap-8">
                                    <p className="max-w-[56ch] text-base md:text-lg leading-relaxed text-muted">
                                        Technology in healthcare must be reliable, secure, and easy to use — for both staff and
                                        patients. At DevGrowth Solutions, we understand that in healthcare, systems must be
                                        accurate, secure, and always available.
                                    </p>
                                    <ul className="grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
                                        {challenges.map((challenge) => (
                                            <li key={challenge} className="flex items-start gap-3 text-base text-ink">
                                                <CheckCircle2 size={18} aria-hidden="true" className="mt-1 shrink-0 text-accent" />
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            </div>

                            <Reveal as="figure" delay={0.15} className="flex w-full max-w-md flex-col gap-4 lg:justify-self-end">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                                    alt="Healthcare technology in a clinical setting"
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
                                />
                                <figcaption className="type-eyebrow flex items-center gap-3 text-muted">
                                    <ShieldCheck size={14} aria-hidden="true" className="shrink-0 text-accent" />
                                    Secure Healthcare Systems
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Trust & security */}
                <section
                    id="compliance"
                    aria-labelledby="compliance-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                            <Reveal
                                delay={0.15}
                                className="order-2 flex flex-col gap-8 rounded-2xl border border-line-dark bg-ink-2 p-6 md:p-8 lg:order-1"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                    <ShieldCheck size={20} aria-hidden="true" />
                                </span>
                                <svg
                                    viewBox="0 0 200 100"
                                    aria-hidden="true"
                                    fill="none"
                                    className="w-full text-accent-bright opacity-70"
                                >
                                    <path
                                        d={VITALS_PATH}
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <ul className="flex flex-wrap gap-2 border-t border-line-dark pt-6">
                                    {standards.map((standard) => (
                                        <li
                                            key={standard}
                                            className="type-eyebrow rounded-full border border-line-dark px-3 py-2 text-muted-dark"
                                        >
                                            {standard}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>

                            <div className="order-1 flex flex-col gap-10 lg:order-2">
                                <SectionHeading
                                    id="compliance-heading"
                                    tone="dark"
                                    eyebrow="Trust & Security"
                                    title={
                                        <>
                                            Zero-Compromise <em>Compliance</em> Standards.
                                        </>
                                    }
                                    lede="We bake security into the core of every healthcare application. From end-to-end encryption to strict access controls, we ensure your systems meet and exceed international healthcare data protection standards."
                                />
                                <Reveal delay={0.1}>
                                    <ul className="grid grid-cols-2 gap-8 border-t border-line-dark pt-8">
                                        {complianceStats.map(({ value, label }) => (
                                            <li key={label} className="flex flex-col gap-2">
                                                <span className="type-display text-4xl text-paper md:text-5xl">{value}</span>
                                                <span className="type-eyebrow text-muted-dark">{label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Solutions */}
                <section
                    id="solutions"
                    aria-labelledby="solutions-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="solutions-heading"
                            eyebrow="Healthcare solutions"
                            title={
                                <>
                                    Healthcare Solutions We <em>Provide</em>.
                                </>
                            }
                        />
                        <Stagger as="ul" className="grid gap-4 md:grid-cols-2">
                            {solutions.map(({ title, desc, points, icon: Icon }) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted md:p-8"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                    <p className="text-base leading-relaxed text-muted md:text-lg">{desc}</p>
                                    <ul className="mt-auto grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
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
                                            Why Healthcare Providers Choose <em>DevGrowth</em>.
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
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80"
                                    alt="Healthcare team"
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
                                    Our Healthcare <em>Implementation</em> Process.
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
                                    Technology should support care — <em>not complicate it.</em>
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={toggleBooking}>
                                Build Healthcare Software
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
