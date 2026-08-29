import { useState } from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    Smartphone,
    Users,
    Cloud,
    Brain,
    Check,
    Search,
    Layers,
    Code2,
    Database,
    Rocket,
    RefreshCcw,
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

const MotionItem = motion.li;

const solutions = [
    {
        title: "Learning Management Systems (LMS)",
        desc: "Everything you need to manage courses and students in one place. Organized. Structured. Easy to manage.",
        points: ["Course creation & management", "Student enrollment", "Assignments & quizzes", "Progress tracking"],
        icon: BookOpen,
    },
    {
        title: "Education Mobile Apps",
        desc: "Learning doesn't just happen in classrooms anymore. Making learning available anytime, anywhere.",
        points: ["Student learning apps", "Live class integrations", "Notifications & reminders", "Interactive content"],
        icon: Smartphone,
    },
    {
        title: "Online Course & EdTech Platforms",
        desc: "If you're building an online education business, we help you set up a solid foundation. Built for startups and growing EdTech brands.",
        points: ["Course marketplace development", "Subscription systems", "Secure payment integration", "Instructor dashboards"],
        icon: Users,
    },
    {
        title: "Secure & Scalable Infrastructure",
        desc: "Education platforms face peak traffic during exams. We make sure your system can handle it. Reliable systems build trust.",
        points: ["Secure student data storage", "Cloud-based scalability", "Backup & recovery", "Performance optimization"],
        icon: Cloud,
    },
    {
        title: "Smart Features with AI",
        desc: "Helping institutions use technology in a meaningful way with intelligent integrations.",
        points: ["Personalized learning suggestions", "Automated grading", "Student performance insights", "AI-based support chat"],
        icon: Brain,
    },
];

const whyChoose = [
    "We build systems based on real educational workflows",
    "We keep interfaces clean and simple",
    "We think long-term scalability",
    "We focus on security and stability",
    "We provide ongoing support after launch",
];

const processSteps = [
    { id: "01", title: "Understanding Your Platform", desc: "We learn your institution's workflows and student journey.", icon: Search },
    { id: "02", title: "Platform Architecture", desc: "We design a scalable structure for courses, users, and content.", icon: Layers },
    { id: "03", title: "Development & Integration", desc: "We build the platform with payment, video, and assessment features.", icon: Code2 },
    { id: "04", title: "Testing & QA", desc: "Thorough testing for performance, load, and usability.", icon: Database },
    { id: "05", title: "Launch & Training", desc: "We help you launch and onboard your team.", icon: Rocket },
    { id: "06", title: "Ongoing Support", desc: "Continuous monitoring and feature development post-launch.", icon: RefreshCcw },
];

const experienceHighlights = [
    { label: "Gamified Learning", value: "Active" },
    { label: "Mobile First", value: "Responsive" },
];

/** Placeholder rows in the course-progress illustration. */
const MOCK_ROWS = [1, 2, 3];

const SHIFT_IMAGE = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80";
const WHY_IMAGE = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80";

/** Quiet wireframe of a course-progress screen: the one illustration on the page. */
function CourseProgressMock() {
    return (
        <div className="flex flex-col gap-6 rounded-2xl border border-line-dark bg-ink-2 p-6 md:p-8">
            <div className="flex items-center justify-between">
                <div aria-hidden="true" className="flex flex-col gap-2">
                    <span className="h-2 w-24 rounded-full bg-accent-bright" />
                    <span className="h-1.5 w-16 rounded-full bg-ink-3" />
                </div>
                <BookOpen size={20} aria-hidden="true" className="text-accent-bright" />
            </div>

            <ul aria-hidden="true" className="flex flex-col gap-3">
                {MOCK_ROWS.map((n) => (
                    <li
                        key={n}
                        className="flex items-center justify-between rounded-xl border border-line-dark bg-ink px-4 py-3"
                    >
                        <div className="flex items-center gap-3">
                            <span className="type-mono flex h-8 w-8 items-center justify-center rounded-lg bg-ink-3 text-xs text-accent-bright">
                                {n}
                            </span>
                            <span className="h-2 w-32 rounded-full bg-ink-3" />
                        </div>
                        <span className="h-4 w-4 rounded-full border border-accent-bright" />
                    </li>
                ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-line-dark pt-6">
                <div className="type-eyebrow flex items-center justify-between text-muted-dark">
                    <span>Course Progress</span>
                    <span className="text-accent-bright">85% Complete</span>
                </div>
                <div aria-hidden="true" className="h-1.5 w-full overflow-hidden rounded-full bg-ink-3">
                    <span className="block h-full w-[85%] rounded-full bg-accent-bright" />
                </div>
            </div>
        </div>
    );
}

export default function Education() {
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
                            <Eyebrow tone="dark">Education industry</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Technology that makes learning simpler, smarter, and more{" "}
                                <em className="italic text-accent-bright">accessible</em>.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch]">
                                We build digital platforms that help schools, institutes, and EdTech startups deliver
                                better learning experiences.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                    Let&apos;s build your education platform
                                </Button>
                                <Button tone="dark" variant="ghost" onClick={openBooking}>
                                    Book free consultation
                                </Button>
                            </div>
                        </Reveal>
                    </Container>
                </header>

                {/* Education is changing — light band */}
                <section
                    id="education-shift"
                    aria-labelledby="education-shift-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="education-shift-heading"
                                    eyebrow="The shift"
                                    title={
                                        <>
                                            Education is <em>changing</em> — fast.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-6 text-base md:text-lg leading-relaxed text-muted"
                                >
                                    <p>
                                        Students expect online access. Teachers need tools to manage classes easily.
                                        Institutes want smoother operations. And EdTech startups need platforms that
                                        can scale quickly without breaking.
                                    </p>
                                    <p>
                                        Technology in education should make life easier — not more complicated. At
                                        DevGrowth Solutions, we build systems that support educators and make learning
                                        more accessible for students.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal as="figure" delay={0.15} className="flex flex-col gap-4">
                                <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                                    <img
                                        src={SHIFT_IMAGE}
                                        alt="A group of people working together on laptops around a table"
                                        loading="lazy"
                                        className="aspect-[4/5] w-full object-cover"
                                    />
                                </div>
                                <figcaption className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                        <BookOpen size={18} aria-hidden="true" />
                                    </span>
                                    <span className="type-eyebrow text-muted">Smarter Learning</span>
                                </figcaption>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Experience design — dark band */}
                <section
                    id="experience"
                    aria-labelledby="experience-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            <div className="flex flex-col gap-10">
                                <SectionHeading
                                    id="experience-heading"
                                    tone="dark"
                                    eyebrow="Experience design"
                                    title={
                                        <>
                                            Engaging &amp; <em>outcome-driven</em> UX.
                                        </>
                                    }
                                    lede="We design learning platforms that students actually want to use. By combining gamification, intuitive navigation, and clear progress tracking, we help EdTech providers increase engagement and completion rates."
                                />
                                <Stagger as="ul" className="grid grid-cols-2 gap-4">
                                    {experienceHighlights.map(({ label, value }) => (
                                        <MotionItem
                                            key={label}
                                            variants={staggerChild}
                                            className="flex flex-col gap-2 rounded-2xl border border-line-dark bg-ink-2 p-6"
                                        >
                                            <span className="type-eyebrow text-muted-dark">{label}</span>
                                            <span className="font-sans text-xl font-semibold tracking-tight text-paper">
                                                {value}
                                            </span>
                                        </MotionItem>
                                    ))}
                                </Stagger>
                            </div>

                            <Reveal delay={0.1} className="lg:order-first">
                                <CourseProgressMock />
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* What we can build — light band */}
                <section
                    id="solutions"
                    aria-labelledby="solutions-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                            <div className="flex flex-col items-start gap-8 self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="solutions-heading"
                                    eyebrow="What we can build"
                                    title={
                                        <>
                                            What we can build <em>for you</em>.
                                        </>
                                    }
                                />
                            </div>

                            <ul className="flex flex-col gap-4">
                                {solutions.map(({ title, desc, points, icon: Icon }) => (
                                    <Reveal
                                        as="li"
                                        key={title}
                                        className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink md:p-8"
                                    >
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
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
                                                    <span
                                                        aria-hidden="true"
                                                        className="mt-[0.7em] h-1 w-1 shrink-0 bg-accent"
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

                {/* Why work with us — dark band */}
                <section
                    id="why-us"
                    aria-labelledby="why-us-heading"
                    className="band-dark section-pad border-b border-line-dark"
                >
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            <div className="flex flex-col gap-10">
                                <SectionHeading
                                    id="why-us-heading"
                                    tone="dark"
                                    eyebrow="Why choose us"
                                    title={
                                        <>
                                            Why work with <em>DevGrowth Solutions</em>?
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
                                                <Check size={18} aria-hidden="true" />
                                            </span>
                                            <span>{item}</span>
                                        </MotionItem>
                                    ))}
                                </Stagger>
                            </div>

                            <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-line-dark bg-ink-2">
                                <img
                                    src={WHY_IMAGE}
                                    alt="Children at their desks in a classroom, facing a teacher at the whiteboard"
                                    loading="lazy"
                                    className="aspect-[4/5] w-full object-cover"
                                />
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Process — light band */}
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
                                    Our education <em>development</em> process.
                                </>
                            }
                        />
                        <Stagger as="ol" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {processSteps.map(({ id, title, desc, icon: Icon }) => (
                                <MotionItem
                                    key={id}
                                    variants={staggerChild}
                                    className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
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
                <section id="get-started" aria-labelledby="get-started-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10">
                        <SectionHeading
                            id="get-started-heading"
                            tone="dark"
                            align="center"
                            eyebrow="Get started"
                            titleClassName="md:max-w-[24ch]"
                            title={
                                <>
                                    Education shapes the future. The technology behind it should be{" "}
                                    <em>dependable</em> and built to grow.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Build your education platform
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
