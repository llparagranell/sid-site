import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { EASE } from "./motion/constants";
import cx from "../lib/cx";
import { services } from "../constants/servicesData";

const MotionDiv = motion.div;

const GROUP_DEFS = [
    {
        id: "build",
        word: "Build",
        description: "Websites, mobile apps, storefronts and custom software, built to ship and easy to extend.",
        titles: ["Web Development", "Mobile App Development", "Custom Software", "E-commerce"],
    },
    {
        id: "design",
        word: "Design",
        description: "User research, prototypes and design systems, so the product makes sense the first time someone opens it.",
        titles: ["UI/UX Design"],
    },
    {
        id: "scale",
        word: "Scale",
        description: "Cloud infrastructure, databases and migrations that hold up as traffic, data and the team grow.",
        titles: ["Cloud Solutions"],
    },
    {
        id: "ai",
        word: "AI",
        description:
            "n8n workflows, chatbots and agents that run the repeat work — plus predictive models and the pipelines to keep them in production.",
        titles: ["AI Automation", "AI & Machine Learning"],
    },
];

/** Marginal notes that tie a service line back to the three shipped apps. */
const NOTES = {
    "Mobile App Development": "↳ Swadeit, Upasthit and Goseva run on React Native",
    "E-commerce": "↳ Swadeit and Goseva take orders in the app",
};

const byTitle = new Map(services.map((service) => [service.title, service]));

// One running index across all groups (Build 01–04, Design 05, Scale 06, AI 07–08).
const GROUPS = GROUP_DEFS.reduce((groups, { titles, ...group }) => {
    const offset = groups.reduce((sum, g) => sum + g.items.length, 0);
    const items = titles
        .map((title) => byTitle.get(title))
        .filter(Boolean)
        .map((service, i) => ({
            ...service,
            index: String(offset + i + 1).padStart(2, "0"),
            note: NOTES[service.title],
        }));
    return [...groups, { ...group, items }];
}, []);

const TOTAL = GROUPS.reduce((sum, group) => sum + group.items.length, 0);

const countLabel = (n) => `${n} ${n === 1 ? "service" : "services"}`;

function ServiceRow({ group, open, reduced, onToggle }) {
    const triggerId = `services-${group.id}-trigger`;
    const panelId = `services-${group.id}-panel`;
    const transition = reduced
        ? { duration: 0 }
        : {
              height: { duration: 0.45, ease: EASE },
              opacity: { duration: 0.3, ease: EASE },
          };

    return (
        <li className="border-t border-line">
            <h3>
                <button
                    type="button"
                    id={triggerId}
                    aria-expanded={open}
                    aria-controls={open ? panelId : undefined}
                    onClick={onToggle}
                    className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left md:py-6"
                >
                    <span
                        className={cx(
                            "type-display min-w-0 uppercase text-5xl text-ink md:text-7xl lg:text-[5.5rem]",
                            open && "italic",
                        )}
                    >
                        {group.word}
                    </span>
                    <span className="flex shrink-0 items-center gap-4 md:gap-6">
                        <span className="type-eyebrow text-muted">{countLabel(group.items.length)}</span>
                        {/* A bare glyph, not a ringed button: the only rounded objects on the page are
                            Button, PhoneFrame and Stamp. The 40px box keeps the rotation pivot steady. */}
                        <span
                            aria-hidden="true"
                            className={cx(
                                "flex h-10 w-10 items-center justify-center",
                                "transition-[rotate,color] duration-500 ease-out-expo",
                                open ? "rotate-45 text-ink" : "text-muted",
                            )}
                        >
                            <Plus size={22} strokeWidth={1.5} />
                        </span>
                    </span>
                </button>
            </h3>

            <AnimatePresence initial={false}>
                {open && (
                    <MotionDiv
                        key={panelId}
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={transition}
                        // Horizontal breathing room so a row's focus ring is not clipped by overflow-hidden.
                        className="-mx-2 overflow-hidden px-2"
                    >
                        <div className="flex flex-col gap-6 pb-8 lg:grid lg:grid-cols-[4fr_8fr] lg:gap-10 lg:pb-10">
                            <p className="max-w-[56ch] text-base leading-relaxed text-muted lg:text-lg">
                                {group.description}
                            </p>
                            <ol role="list" className="divide-y divide-line border-t border-line">
                                {group.items.map((service) => (
                                    <li key={service.title}>
                                        <Link
                                            to={service.path}
                                            className="group/row grid min-h-11 grid-cols-[2.5rem_1fr_1.5rem] items-baseline gap-x-2 py-4 lg:grid-cols-[3rem_1fr_minmax(16rem,0.9fr)_1.5rem] lg:py-5"
                                        >
                                            <span className="type-mono text-xs text-muted">{service.index}</span>
                                            <span className="flex flex-col gap-1">
                                                <span className="font-sans text-lg font-semibold tracking-tight text-ink group-hover/row:underline group-hover/row:decoration-muted group-hover/row:underline-offset-4">
                                                    {service.title}
                                                </span>
                                                <span className="text-sm text-muted">{service.desc}</span>
                                                <span className="type-mono text-[11px] leading-snug text-muted lg:hidden">
                                                    {service.points.join(" · ")}
                                                </span>
                                                {service.note && (
                                                    <span className="type-mono mt-1 text-[11px] leading-snug text-muted">
                                                        {service.note}
                                                    </span>
                                                )}
                                            </span>
                                            <span className="type-mono hidden text-[11px] leading-relaxed text-muted lg:block">
                                                {service.points.join(" · ")}
                                            </span>
                                            <ArrowUpRight
                                                size={16}
                                                aria-hidden="true"
                                                className="self-center justify-self-end text-muted"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </li>
    );
}

export default function Services() {
    const reduced = useReducedMotion();
    // At most one group is open. Clicking the open row closes it.
    // Desktop opens the first group so the list is visible; phones start collapsed so the
    // four words read as an index and the page stays short until the reader taps one.
    const [openId, setOpenId] = useState(() =>
        typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches ? GROUPS[0].id : null,
    );
    const toggle = (id) => setOpenId((current) => (current === id ? null : id));

    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="band-light section-pad-tight border-b border-line"
        >
            <Container>
                {/* Labelled hairline: the h2 is knocked out of the rule on the left, the count on the
                    right. On phones the count drops under the rule because the italic h2 and the mono
                    label do not both fit on a 342px line. */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
                    <h2 id="services-heading" className="type-display shrink-0 text-xl italic text-ink">
                        Services, in four groups
                    </h2>
                    <span aria-hidden="true" className="h-px min-w-6 flex-1 bg-line" />
                    <p className="type-eyebrow basis-full text-right text-muted sm:basis-auto">{TOTAL} in total</p>
                </div>

                <ul role="list" className="mt-10 flex flex-col border-b border-line sm:mt-12">
                    {GROUPS.map((group) => (
                        <ServiceRow
                            key={group.id}
                            group={group}
                            open={openId === group.id}
                            reduced={reduced}
                            onToggle={() => toggle(group.id)}
                        />
                    ))}
                </ul>

                <p className="type-display mt-8 max-w-[40ch] text-lg italic text-muted lg:ml-auto lg:text-right">
                    Pick what you need now; the rest is there when you grow.
                </p>
            </Container>
        </section>
    );
}
