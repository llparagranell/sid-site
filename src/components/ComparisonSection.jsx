import { motion } from "framer-motion";
import { Check, CheckCircle2, X, XCircle } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import Reveal, { Stagger } from "./motion/Reveal";
import { staggerChild } from "./motion/constants";
import { scrollToTarget } from "../lib/scroll";

/** Alias so the repo ESLint config (no react plugin) sees the `motion` import as used. */
const MotionLi = motion.li;

const withUs = [
    {
        title: "Expert Developer and Designer",
        desc: "Senior people on every build, with reviews and tests that keep quality up.",
    },
    {
        title: "Streamlined Project Management",
        desc: "Clear milestones, agile workflows, and transparent communication from day one.",
    },
    {
        title: "Transparent Pricing & Clear Contracts",
        desc: "No hidden costs, no surprises — everything defined upfront.",
    },
    {
        title: "24/7 Dedicated Support",
        desc: "Quick responses from a team that deeply understands your project.",
    },
    {
        title: "Modern Technology Stack",
        desc: "Current tools chosen per project, so the product is easy to hire for and extend.",
    },
];

const withoutUs = [
    {
        title: "Junior Developer and Designer",
        desc: "Inexperienced teams may compromise on quality and scalability.",
    },
    {
        title: "Chaotic Project Management",
        desc: "Missed deadlines, unclear scope, and inconsistent communication.",
    },
    {
        title: "Hidden Costs & Vague Contracts",
        desc: "Unexpected charges and unclear deliverables create frustration.",
    },
    {
        title: "Limited & Inconsistent Support",
        desc: "Slow responses and lack of accountability.",
    },
    {
        title: "Outdated Technology",
        desc: "Legacy tools leading to performance and security issues.",
    },
];

export default function ComparisonSection() {
    return (
        <section id="why" aria-labelledby="why-heading" className="band-light section-pad border-b border-line">
            <Container>
                <SectionHeading
                    id="why-heading"
                    eyebrow="Why us"
                    title={
                        <>
                            The DevGrowth <em>difference</em>.
                        </>
                    }
                    align="center"
                />

                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-6 pt-6 md:pt-8">
                        <h3 className="type-eyebrow flex items-center gap-2.5 text-muted">
                            <XCircle size={16} aria-hidden="true" />
                            Without DevGrowth
                        </h3>
                        <Stagger as="ul" className="divide-y divide-line border-y border-line">
                            {withoutUs.map((item) => (
                                <MotionLi
                                    key={item.title}
                                    variants={staggerChild}
                                    className="flex items-start gap-3 py-5"
                                >
                                    <X size={16} aria-hidden="true" className="mt-1 shrink-0 text-muted" />
                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-medium text-muted">{item.title}</h4>
                                        <p className="text-sm text-muted">{item.desc}</p>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </div>

                    <div className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 md:p-8">
                        <h3 className="type-eyebrow flex items-center gap-2.5 text-accent">
                            <CheckCircle2 size={16} aria-hidden="true" />
                            With DevGrowth
                        </h3>
                        <Stagger as="ul" className="divide-y divide-line border-t border-line">
                            {withUs.map((item) => (
                                <MotionLi
                                    key={item.title}
                                    variants={staggerChild}
                                    className="flex items-start gap-3 py-5"
                                >
                                    <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-accent" />
                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-semibold text-ink">{item.title}</h4>
                                        <p className="text-sm text-muted">{item.desc}</p>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </div>
                </div>

                <Reveal className="mt-12 flex justify-center">
                    <Button variant="primary" arrow onClick={() => scrollToTarget("#contact")}>
                        Book your free consultation
                    </Button>
                </Reveal>
            </Container>
        </section>
    );
}
