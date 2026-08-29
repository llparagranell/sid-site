import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/constants";
import cx from "../lib/cx";
import { services } from "../constants/servicesData";

/** How long the pointer has to rest on a row before hover opens it. */
const HOVER_INTENT_MS = 120;
/**
 * Panel height animation. Hover is ignored while a panel is still settling so a row that
 * slides under a moving pointer cannot chain-open the next one.
 */
const PANEL_MS = 550;
const SETTLE_MS = PANEL_MS + 100;

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
        description: "Cloud infrastructure and databases that hold up as traffic, data and the team grow.",
        titles: ["Cloud Solutions", "Database Management"],
    },
    {
        id: "ai",
        word: "AI",
        description: "Predictive models, language and vision features, and the pipelines to run them in production.",
        titles: ["AI & Machine Learning"],
    },
];

const byTitle = new Map(services.map((service) => [service.title, service]));

const GROUPS = GROUP_DEFS.map(({ titles, ...group }) => ({
    ...group,
    items: titles.map((title) => byTitle.get(title)).filter(Boolean),
}));

const countLabel = (n) => `${n} ${n === 1 ? "service" : "services"}`;

function ServiceCard({ service }) {
    const Icon = service.icon;
    return (
        <li className="flex">
            <Link
                to={service.path}
                className="group/card flex w-full flex-col gap-5 rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 ease-out-expo hover:border-ink"
            >
                <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                        <Icon size={18} aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="shrink-0 text-muted transition-[translate,color] duration-300 ease-out-expo group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-ink"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <h4 className="font-sans text-xl font-semibold tracking-tight text-ink md:text-2xl">
                        {service.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">{service.desc}</p>
                </div>
                <ul className="mt-auto flex flex-wrap gap-2">
                    {service.points.map((point) => (
                        <li
                            key={point}
                            className="type-eyebrow rounded-full border border-line px-3 py-2 text-muted"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </Link>
        </li>
    );
}

function ServiceRow({ group, open, reduced, onOpen, onHover, onHoverEnd }) {
    const triggerId = `services-${group.id}-trigger`;
    const panelId = `services-${group.id}-panel`;
    const transition = reduced
        ? { duration: 0 }
        : {
              height: { duration: PANEL_MS / 1000, ease: EASE },
              opacity: { duration: 0.4, ease: EASE },
          };

    return (
        <li className="border-t border-line">
            <h3>
                <button
                    type="button"
                    id={triggerId}
                    aria-expanded={open}
                    aria-controls={open ? panelId : undefined}
                    onClick={onOpen}
                    onPointerMove={onHover}
                    onPointerLeave={onHoverEnd}
                    className="group/row flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left md:py-8"
                >
                    <span
                        className={cx(
                            "type-display min-w-0 uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]",
                            "transition-colors duration-500 ease-out-expo",
                            open ? "text-accent" : "text-ink",
                        )}
                    >
                        {group.word}
                    </span>
                    <span className="flex shrink-0 items-center gap-4 md:gap-6">
                        <span className="type-eyebrow text-muted">{countLabel(group.items.length)}</span>
                        <span
                            aria-hidden="true"
                            className={cx(
                                "flex h-10 w-10 items-center justify-center rounded-full border",
                                "transition-[rotate,border-color,color] duration-500 ease-out-expo",
                                open
                                    ? "rotate-45 border-accent text-accent"
                                    : "border-line text-muted group-hover/row:border-ink group-hover/row:text-ink",
                            )}
                        >
                            <Plus size={18} />
                        </span>
                    </span>
                </button>
            </h3>

            <AnimatePresence initial={false}>
                {open && (
                    <Motion.div
                        key={panelId}
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={transition}
                        // Horizontal breathing room so the cards' focus ring is not clipped by overflow-hidden.
                        className="-mx-2 overflow-hidden px-2"
                    >
                        <div className="flex flex-col gap-6 pb-10 md:gap-8 md:pb-12">
                            <p className="max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">
                                {group.description}
                            </p>
                            <ul className="grid gap-4 sm:grid-cols-2">
                                {group.items.map((service) => (
                                    <ServiceCard key={service.title} service={service} />
                                ))}
                            </ul>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </li>
    );
}

export default function Services() {
    const reduced = useReducedMotion();
    const [openId, setOpenId] = useState(GROUPS[0].id);
    const [hoverId, setHoverId] = useState(null);
    // True while the last open/close is still animating; hover is ignored meanwhile.
    const settling = useRef(false);

    useEffect(() => {
        if (reduced) return undefined;
        settling.current = true;
        const timer = window.setTimeout(() => {
            settling.current = false;
        }, SETTLE_MS);
        return () => {
            window.clearTimeout(timer);
            settling.current = false;
        };
    }, [openId, reduced]);

    useEffect(() => {
        if (hoverId === null) return undefined;
        const timer = window.setTimeout(() => setOpenId(hoverId), HOVER_INTENT_MS);
        return () => window.clearTimeout(timer);
    }, [hoverId]);

    // Exactly one group is open at a time: a click opens (or keeps open), never collapses to none.
    const openGroup = (id) => {
        setHoverId(null);
        setOpenId(id);
    };

    const hover = (id, event) => {
        if (event.pointerType !== "mouse") return;
        if (settling.current) return;
        setHoverId(id);
    };

    const hoverEnd = (id) => {
        setHoverId((current) => (current === id ? null : current));
    };

    return (
        <section id="services" className="band-light section-pad border-b border-line">
            <Container className="flex flex-col gap-12 md:gap-16">
                <SectionHeading
                    eyebrow="Services"
                    title={
                        <>
                            Everything a product needs, <em>in-house</em>.
                        </>
                    }
                    lede="Four disciplines, one team. Pick what you need now; the rest is there when you grow."
                />

                <Reveal as="ul" className="flex flex-col border-b border-line">
                    {GROUPS.map((group) => (
                        <ServiceRow
                            key={group.id}
                            group={group}
                            open={openId === group.id}
                            reduced={reduced}
                            onOpen={() => openGroup(group.id)}
                            onHover={(event) => hover(group.id, event)}
                            onHoverEnd={() => hoverEnd(group.id)}
                        />
                    ))}
                </Reveal>
            </Container>
        </section>
    );
}
