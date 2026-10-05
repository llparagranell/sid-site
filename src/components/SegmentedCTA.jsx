import { useId, useRef, useState } from "react";
import { Scissors } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Stamp from "./ui/Stamp";
import { scrollToTarget } from "../lib/scroll";
import cx from "../lib/cx";

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
 * Closing CTA set as a scope sheet. On phones the three audiences are serif tabs on a hairline
 * and the white sheet shows one column at a time; from lg the tabs go away and the sheet shows
 * all three columns side by side. Static on scroll; a tab switch is instant.
 * `onBookClick` opens the booking modal from Home.
 *
 *   <SegmentedCTA onBookClick={toggleBooking} />
 */
export default function SegmentedCTA({ onBookClick }) {
    const [activeId, setActiveId] = useState(SEGMENTS[0].id);
    const tabRefs = useRef({});
    const uid = useId();
    const tabId = (id) => `${uid}-tab-${id}`;
    const panelId = (id) => `${uid}-panel-${id}`;

    const select = (id) => {
        setActiveId(id);
        tabRefs.current[id]?.focus();
    };

    const onTablistKeyDown = (event) => {
        const count = SEGMENTS.length;
        const current = SEGMENTS.findIndex((segment) => segment.id === activeId);
        let next;
        switch (event.key) {
            case "ArrowRight":
                next = (current + 1) % count;
                break;
            case "ArrowLeft":
                next = (current - 1 + count) % count;
                break;
            case "Home":
                next = 0;
                break;
            case "End":
                next = count - 1;
                break;
            default:
                return;
        }
        event.preventDefault();
        select(SEGMENTS[next].id);
    };

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
            className="band-light section-pad-tight border-b border-line"
        >
            <Container>
                {/* Phones: serif tabs on a hairline. From lg the sheet shows every column, so the
                    tabs go; aria-labelledby still resolves to their text, so each panel keeps its name. */}
                <div
                    role="tablist"
                    aria-label="Who this is for"
                    onKeyDown={onTablistKeyDown}
                    className="grid grid-cols-3 border-b border-line lg:hidden"
                >
                    {SEGMENTS.map(({ id, audience }) => {
                        const active = id === activeId;
                        return (
                            <button
                                key={id}
                                type="button"
                                role="tab"
                                id={tabId(id)}
                                aria-selected={active}
                                aria-controls={panelId(id)}
                                tabIndex={active ? 0 : -1}
                                ref={(el) => {
                                    tabRefs.current[id] = el;
                                }}
                                onClick={() => select(id)}
                                className={cx(
                                    "type-display relative min-h-12 cursor-pointer text-xl transition-colors duration-300",
                                    active ? "text-ink" : "text-muted hover:text-ink",
                                )}
                            >
                                {audience}
                                {active && (
                                    <span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-0.5 bg-ink" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* The sheet: white, hairline, no radius. A dashed tear-off rule along the top and an
                    ink stamp in the corner are this section's two devices. */}
                <div className="relative mt-6 border border-line bg-surface p-6 lg:mt-0 lg:p-10">
                    <p className="type-mono flex items-center gap-3 border-b border-dashed border-line pb-3 text-xs text-muted">
                        <Scissors size={12} aria-hidden="true" className="shrink-0" />
                        Scope sheet — keep this page
                    </p>

                    {/* On a 390px phone the stamp is wider than the space beside the tear-off label,
                        so it sits in flow under the rule; from lg it is pinned to the corner, above the
                        rule (top-6 keeps its rotated bottom corner off the dashed line). */}
                    <div className="mt-4 flex justify-end lg:absolute lg:right-8 lg:top-6 lg:mt-0">
                        <Stamp tone="surface" color="ink" rotate={6} className="whitespace-nowrap">
                            Reply within a business day
                        </Stamp>
                    </div>

                    <h2
                        id="start-heading"
                        className="type-display mt-5 max-w-[14ch] text-3xl text-ink md:text-4xl lg:text-5xl"
                    >
                        Built for the stage <em>you’re</em> at.
                    </h2>

                    <div className="lg:mt-10 lg:grid lg:grid-cols-3 lg:divide-x lg:divide-line">
                        {SEGMENTS.map(({ id, audience, headline, bullets, cta }) => {
                            const active = id === activeId;
                            return (
                                <div
                                    key={id}
                                    id={panelId(id)}
                                    role="tabpanel"
                                    aria-labelledby={tabId(id)}
                                    className={cx(
                                        active ? "mt-6" : "hidden",
                                        "lg:mt-0 lg:flex lg:flex-col lg:px-8 lg:first:pl-0 lg:last:pr-0",
                                    )}
                                >
                                    {/* Column title. On phones the active tab already says it, so it only
                                        shows from lg where the tabs are gone. */}
                                    <p className="type-mono hidden text-xs text-muted lg:block">
                                        {audience}
                                    </p>
                                    <h3 className="font-sans text-xl font-semibold tracking-tight text-ink lg:mt-2">
                                        {headline}
                                    </h3>
                                    <ul className="mt-4 divide-y divide-line border-y border-line">
                                        {bullets.map((line) => (
                                            <li key={line} className="py-3 text-base text-ink">
                                                {line}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 lg:mt-auto lg:pt-8">
                                        <Button
                                            tone="light"
                                            variant={cta.variant}
                                            arrow={cta.arrow}
                                            className="w-full min-h-12 lg:w-auto"
                                            onClick={() => handleCta(cta.action)}
                                        >
                                            {cta.label}
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                    <p className="type-mono text-sm text-muted">
                        Prefer email?{" "}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="inline-flex min-h-11 items-center text-ink underline decoration-line underline-offset-4 transition-colors duration-300 hover:decoration-ink"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </p>
                    <p className="type-mono text-xs text-muted">
                        Jabalpur, India · Remote-first
                    </p>
                </div>
            </Container>
        </section>
    );
}
