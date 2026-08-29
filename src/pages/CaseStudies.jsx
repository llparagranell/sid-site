import { useState } from "react";
import { Globe, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Reveal from "../components/motion/Reveal";
import cx from "../lib/cx";

const STUDIES = [
    {
        id: "alphapay",
        title: "Global FinTech Scaling",
        client: "AlphaPay",
        industry: "Finance",
        stat: "+300% Growth",
        desc: "Redesigning core transaction infrastructure to support 1M+ active users with sub-50ms latency.",
        tags: ["React Native", "AWS", "Node.js"],
    },
    {
        id: "cloudnexus",
        title: "Modern SaaS Marketplace",
        client: "CloudNexus",
        industry: "SaaS",
        stat: "$2.4M ARR Boost",
        desc: "Developing a multi-tenant marketplace platform with advanced subscription management.",
        tags: ["Next.js", "PostgreSQL", "Tailwind"],
    },
    {
        id: "vitalsync",
        title: "Healthcare Data Platform",
        client: "VitalSync",
        industry: "HealthTech",
        stat: "99.9% Compliance",
        desc: "Architecting a HIPAA-compliant data pipeline for real-time patient monitoring.",
        tags: ["Security", "Kubernetes", "TypeScript"],
    },
];

/**
 * Case studies. Dark page header, one light band listing the studies (text on one
 * side, a dark metric plate on the other, sides alternating), then a dark booking CTA.
 *
 * No overflow-x on the wrapper: body already clips horizontal overflow.
 */
export default function CaseStudies() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-6 md:gap-8">
                            <Eyebrow tone="dark">Proven results</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Case <em className="italic text-accent-bright">Studies</em>.
                            </h1>
                            <p className="max-w-[56ch] text-lg leading-relaxed text-muted-dark md:text-xl">
                                Deep dives into how we partner with experienced teams to build high-impact digital
                                products.
                            </p>
                        </Reveal>
                    </Container>
                </header>

                <section
                    id="studies"
                    aria-labelledby="studies-heading"
                    className="band-light section-pad border-b border-line"
                >
                    <Container className="flex flex-col gap-16 md:gap-24">
                        <SectionHeading
                            id="studies-heading"
                            eyebrow="Selected work"
                            title={
                                <>
                                    What we built, and what it <em>changed</em>.
                                </>
                            }
                            lede="Each study covers the brief, the build and the metric that moved."
                        />

                        <ul role="list" className="flex flex-col gap-16 md:gap-24">
                            {STUDIES.map((study, i) => (
                                <Reveal
                                    as="li"
                                    key={study.id}
                                    className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
                                >
                                    <div className={cx("flex flex-col items-start gap-6", i % 2 === 1 && "lg:order-2")}>
                                        <p className="flex w-full items-center gap-4">
                                            <span className="type-eyebrow text-muted">
                                                {study.industry} / {study.client}
                                            </span>
                                            <span aria-hidden="true" className="h-px flex-1 bg-line" />
                                        </p>
                                        <h3 className="type-display text-4xl text-ink sm:text-5xl md:text-[3.5rem]">
                                            {study.title}
                                        </h3>
                                        <p className="max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">
                                            {study.desc}
                                        </p>
                                        <Button variant="ghost" arrow onClick={openBooking}>
                                            Full Case Study
                                        </Button>
                                    </div>

                                    <div className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-2xl border border-line-dark bg-ink p-6 text-paper md:p-8 lg:aspect-[4/3]">
                                        <Globe
                                            aria-hidden="true"
                                            strokeWidth={1}
                                            className="pointer-events-none absolute -right-10 -bottom-10 size-48 text-paper opacity-[0.06]"
                                        />
                                        <div className="relative flex items-center justify-between gap-4">
                                            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright">
                                                <TrendingUp size={20} aria-hidden="true" />
                                            </span>
                                            <span className="type-eyebrow text-muted-dark">Success metric</span>
                                        </div>
                                        <p className="relative type-display tabular text-4xl text-paper sm:text-5xl md:text-6xl">
                                            {study.stat}
                                        </p>
                                        <ul aria-label="Built with" className="relative flex flex-wrap gap-2">
                                            {study.tags.map((tag) => (
                                                <li
                                                    key={tag}
                                                    className="type-eyebrow rounded-full border border-line-dark px-2.5 py-1 text-muted-dark"
                                                >
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </ul>
                    </Container>
                </section>

                <section
                    id="book"
                    aria-labelledby="book-heading"
                    className="band-dark section-pad"
                >
                    <Container className="flex flex-col items-center gap-10 text-center">
                        <SectionHeading
                            id="book-heading"
                            tone="dark"
                            align="center"
                            size="lg"
                            eyebrow="Next step"
                            title={
                                <>
                                    Ready for your <em>success story</em>?
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Book Consultation
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
