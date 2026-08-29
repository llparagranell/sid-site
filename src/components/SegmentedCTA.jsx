import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { Stagger } from "./motion/Reveal";
import { staggerChild } from "./motion/constants";
import { scrollToTarget } from "../lib/scroll";

const MotionItem = motion.li;

const CONTACT_EMAIL = "contact@devgrowth.com";

const SEGMENTS = [
    {
        id: "founders",
        audience: "Founders",
        headline: "Validate and launch an MVP in weeks, not quarters.",
        bullets: [
            "A written scope and estimate in one week",
            "Weekly demos, no surprise invoices",
            "You own the code and the accounts",
        ],
        cta: { label: "Scope my MVP", variant: "accent", arrow: true, action: "contact" },
    },
    {
        id: "businesses",
        audience: "Businesses",
        headline: "Replace the spreadsheet, the legacy app, or the agency that stopped replying.",
        bullets: [
            "Audit of what you have before we propose anything",
            "Migrations without downtime",
            "Support after launch, not just a handover",
        ],
        cta: { label: "Modernize our product", variant: "primary", arrow: true, action: "contact" },
    },
    {
        id: "agencies",
        audience: "Agencies",
        headline: "White-label engineering for teams that sell design and strategy.",
        bullets: [
            "Your brand, our build",
            "Overflow capacity when a launch lands",
            "One point of contact throughout",
        ],
        cta: { label: "Book a 30-min call", variant: "ghost", arrow: false, action: "book" },
    },
];

/**
 * Audience-segmented closing CTA: one card per kind of client, each ending in the
 * action that suits them. `onBookClick` opens the booking modal from Home.
 *
 *   <SegmentedCTA onBookClick={toggleBooking} />
 */
export default function SegmentedCTA({ onBookClick }) {
    const handleCta = (action) => {
        if (action === "book") {
            onBookClick?.();
            return;
        }
        scrollToTarget("#contact");
    };

    return (
        <section
            id="start"
            aria-labelledby="start-heading"
            className="band-dark section-pad border-b border-line-dark"
        >
            <Container className="flex flex-col gap-12">
                <SectionHeading
                    id="start-heading"
                    tone="dark"
                    align="left"
                    eyebrow="Start here"
                    title={
                        <>
                            Built for the stage <em>you’re</em> at.
                        </>
                    }
                />

                <div className="flex flex-col gap-8">
                    {/* Three-up from lg: below that a card is too narrow for its widest pill. */}
                    <Stagger as="ul" className="grid gap-4 lg:grid-cols-3">
                        {SEGMENTS.map(({ id, audience, headline, bullets, cta }) => (
                            <MotionItem
                                key={id}
                                variants={staggerChild}
                                className="flex flex-col gap-6 rounded-2xl border border-line-dark bg-ink-2 p-7 transition-colors duration-300 hover:border-muted-dark xl:p-8"
                            >
                                <p className="type-eyebrow text-accent-bright">{audience}</p>

                                <h3 className="font-sans text-2xl font-semibold tracking-tight text-paper">
                                    {headline}
                                </h3>

                                <ul className="flex flex-col gap-3">
                                    {bullets.map((line) => (
                                        <li
                                            key={line}
                                            className="flex items-start gap-3 text-base leading-relaxed text-muted-dark"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="mt-[0.7em] h-1 w-1 shrink-0 bg-accent-bright"
                                            />
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-2">
                                    <Button
                                        tone="dark"
                                        variant={cta.variant}
                                        arrow={cta.arrow}
                                        onClick={() => handleCta(cta.action)}
                                    >
                                        {cta.label}
                                    </Button>
                                </div>
                            </MotionItem>
                        ))}
                    </Stagger>

                    <div className="flex flex-col flex-wrap gap-3 border-t border-line-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="type-mono text-sm text-muted-dark">
                            Prefer email?{" "}
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="text-paper underline decoration-muted-dark underline-offset-4 transition-colors duration-300 hover:text-accent-bright hover:decoration-accent-bright"
                            >
                                {CONTACT_EMAIL}
                            </a>
                        </p>
                        <p className="type-eyebrow text-muted-dark">Jabalpur, India · Remote-first</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
