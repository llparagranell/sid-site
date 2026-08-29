import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Rocket, ShieldCheck, Heart, Globe, ClipboardCheck, Code2 } from "lucide-react";
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

const PRINCIPLES = [
    {
        icon: Target,
        title: "Precision Engineering",
        desc: "We don't just write code; we architect solutions. Every line of our code is optimized for performance, scalability, and long-term maintainability.",
    },
    {
        icon: Rocket,
        title: "Growth Acceleration",
        desc: "Our primary objective is your growth. We build digital products that aren't just technical achievements, but strategic assets that drive revenue.",
    },
    {
        icon: ShieldCheck,
        title: "Unwavering Integrity",
        desc: "Transparent communication is our bedrock. We provide honest timelines, clear pricing, and no-nonsense advice to ensure mutual success.",
    },
    {
        icon: Heart,
        title: "Human-Centric Design",
        desc: "Technology should serve people. Our designs focus on intuitive user experiences that forge emotional connections with your brand.",
    },
];

const STATS = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "150+", label: "Successful Launches" },
];

const PROCESS_STEPS = [
    {
        id: "01",
        icon: Globe,
        title: "Discovery & Strategy",
        desc: "We dive deep into your business goals, target audience, and market landscape to define a clear roadmap for success.",
    },
    {
        id: "02",
        icon: ClipboardCheck,
        title: "Architectural Planning",
        desc: "Detailed mapping of the technical stack, user flows, and data architecture to ensure a solid foundation for development.",
    },
    {
        id: "03",
        icon: Code2,
        title: "Iterative Development",
        desc: "Rapid prototyping and agile development cycles that keep you involved at every stage of the build process.",
    },
    {
        id: "04",
        icon: Target,
        title: "Quality Assurance",
        desc: "Rigorous testing across devices and scenarios to ensure a bug-free, premium experience for your users.",
    },
];

/**
 * About page. Bands alternate dark / light: dark header, light approach,
 * dark process, light philosophy, dark closing CTA, then the dark Footer.
 *
 * No overflow-x on the wrapper: body already clips horizontal overflow, and an
 * overflow-x-hidden ancestor would break the sticky column below.
 */
export default function About() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* Page header */}
                <header
                    aria-labelledby="about-title"
                    className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
                >
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-6 md:gap-8">
                            <Eyebrow tone="dark">Who we are</Eyebrow>
                            <h1
                                id="about-title"
                                className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]"
                            >
                                Elevating <em className="italic text-accent-bright">Digital</em> Standard.
                            </h1>
                            <p className="max-w-[56ch] text-lg leading-relaxed text-muted-dark md:text-xl">
                                DevGrowth Solutions is a premier digital agency specializing in high-performance MVPs
                                and scalable enterprise solutions. We bridge the gap between complex technical
                                challenges and smooth user experiences.
                            </p>
                        </Reveal>
                    </Container>
                </header>

                {/* Strategic approach */}
                <section
                    aria-labelledby="approach-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="flex flex-col gap-10 self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="approach-heading"
                                    eyebrow="Our approach"
                                    title={
                                        <>
                                            Strategic <em>Infrastructure</em>.
                                        </>
                                    }
                                    lede="We don't just build apps; we engineer foundations. Our approach combines rigorous technical standards with business-aligned outcomes, ensuring your product is ready for the demands of the modern market."
                                />

                                <Reveal delay={0.1}>
                                    <ul role="list" className="grid grid-cols-2 gap-8 border-t border-line pt-8">
                                        {STATS.map((stat) => (
                                            <li key={stat.label} className="flex flex-col gap-2">
                                                <span className="type-mono text-4xl text-ink md:text-5xl">
                                                    {stat.value}
                                                </span>
                                                <span className="type-eyebrow leading-normal text-muted">{stat.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            </div>

                            <Stagger as="ul" role="list" className="grid gap-4 sm:grid-cols-2">
                                {PRINCIPLES.map(({ icon: Icon, title, desc }) => (
                                    <MotionLi
                                        key={title}
                                        variants={staggerChild}
                                        className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                            <Icon size={20} aria-hidden="true" />
                                        </span>
                                        <h3 className="font-sans text-xl font-semibold tracking-tight text-ink md:text-2xl">
                                            {title}
                                        </h3>
                                        <p className="text-base leading-relaxed text-muted">{desc}</p>
                                    </MotionLi>
                                ))}
                            </Stagger>
                        </div>
                    </Container>
                </section>

                {/* Process */}
                <section
                    aria-labelledby="process-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="process-heading"
                            tone="dark"
                            eyebrow="How we deliver excellence"
                            title={
                                <>
                                    Our <em>Process</em>.
                                </>
                            }
                            lede="We've refined our workflow over hundreds of projects to ensure maximum efficiency without compromising on quality or creativity."
                        />

                        <Stagger as="ol" role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {PROCESS_STEPS.map(({ id, icon: Icon, title, desc }) => (
                                <MotionLi
                                    key={id}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line-dark bg-ink-2 p-6 transition-colors duration-300 hover:border-muted-dark"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                            <Icon size={20} aria-hidden="true" />
                                        </span>
                                        <span className="type-mono text-sm text-muted-dark">{id}</span>
                                    </div>
                                    <h3 className="font-sans text-xl font-semibold tracking-tight text-paper md:text-2xl">
                                        {title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-muted-dark">{desc}</p>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Core philosophy */}
                <section
                    aria-labelledby="philosophy-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col items-center gap-8 text-center">
                        <SectionHeading
                            id="philosophy-heading"
                            align="center"
                            eyebrow="Our Core Philosophy"
                            titleClassName="max-w-[24ch]"
                            title={
                                <>
                                    &ldquo;Technology is the brush, but business growth is the{" "}
                                    <em>masterpiece</em> we aim to paint.&rdquo;
                                </>
                            }
                        />
                        <Reveal delay={0.1} className="flex flex-col items-center gap-4">
                            <span aria-hidden="true" className="h-px w-12 bg-ink" />
                            <p className="type-eyebrow text-ink">DevGrowth Solutions</p>
                        </Reveal>
                    </Container>
                </section>

                {/* Closing CTA */}
                <section aria-labelledby="join-heading" className="band-dark section-pad">
                    <Container className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
                        <SectionHeading
                            id="join-heading"
                            tone="dark"
                            eyebrow="Join us"
                            title={
                                <>
                                    Let's <em>build</em> your future?
                                </>
                            }
                            lede="Whether you're a startup looking for an MVP or an enterprise seeking digital transformation, we have the expertise to make it happen."
                        />
                        <Reveal delay={0.1} className="shrink-0">
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Start Your Project
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
