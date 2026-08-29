import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FaAws } from "react-icons/fa";
import {
    SiCss3,
    SiExpress,
    SiFlutter,
    SiGit,
    SiGooglecloud,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiShopify,
    SiTailwindcss,
    SiWordpress,
} from "react-icons/si";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { Stagger } from "./motion/Reveal";
import { EASE, staggerChild } from "./motion/constants";
import cx from "../lib/cx";

const CATEGORIES = [
    {
        id: "frontend",
        label: "Frontend",
        note: "Component-driven interfaces, server-rendered where it helps.",
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss3 },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        note: "APIs and data layers that stay simple to run.",
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
        ],
    },
    {
        id: "mobile",
        label: "Mobile",
        note: "One codebase for iOS and Android when the product allows it.",
        items: [
            { name: "React Native", icon: SiReact },
            { name: "Flutter", icon: SiFlutter },
        ],
    },
    {
        id: "cloud",
        label: "Cloud & DevOps",
        note: "Managed services first, custom infrastructure only when needed.",
        items: [
            { name: "AWS", icon: FaAws },
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "Git", icon: SiGit },
        ],
    },
    {
        id: "platforms",
        label: "Platforms",
        note: "Where a proven platform beats a custom build.",
        items: [
            { name: "WordPress", icon: SiWordpress },
            { name: "Shopify", icon: SiShopify },
        ],
    },
    {
        id: "ai",
        label: "AI & data",
        note: "LLM features wired into real product flows. Python for the data work.",
        items: [
            { name: "LLM integrations", icon: Sparkles },
            { name: "Python", icon: SiPython },
        ],
    },
];

const MotionDiv = motion.div;
const MotionLi = motion.li;
const MotionP = motion.p;
const MotionSpan = motion.span;

const PANEL_ID = "stack-panel";
const tabId = (id) => `stack-tab-${id}`;

function Chip({ name, icon: Icon }) {
    return (
        <MotionLi
            variants={staggerChild}
            className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5"
        >
            <Icon size={20} aria-hidden="true" className="shrink-0 text-ink" />
            <span className="text-sm font-medium leading-snug sm:text-base">{name}</span>
        </MotionLi>
    );
}

export default function TechStack() {
    const reduceMotion = useReducedMotion();
    const [activeId, setActiveId] = useState(CATEGORIES[0].id);
    // After the first switch the panel animates in immediately. A scroll reveal alone can
    // leave it hidden when the panel sits inside the viewport margin the user just clicked above.
    const [switched, setSwitched] = useState(false);
    // Height of the current panel content; the tabpanel animates to it so sections below
    // slide instead of jumping when categories have a different number of rows.
    const [panelHeight, setPanelHeight] = useState(null);
    const tabRefs = useRef({});
    const contentRef = useRef(null);
    const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

    useEffect(() => {
        const el = contentRef.current;
        if (!el || typeof ResizeObserver === "undefined") return undefined;
        const observer = new ResizeObserver(([entry]) => {
            setPanelHeight(entry.contentRect.height);
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const select = (id) => {
        setActiveId(id);
        setSwitched(true);
        tabRefs.current[id]?.focus();
    };

    const onTablistKeyDown = (event) => {
        const count = CATEGORIES.length;
        const current = CATEGORIES.findIndex((c) => c.id === activeId);
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
        select(CATEGORIES[next].id);
    };

    const snap = { duration: reduceMotion ? 0 : 0.4, ease: EASE };

    return (
        <section id="stack" className="band-light section-pad border-b border-line">
            <Container className="flex flex-col gap-10 md:gap-14">
                <SectionHeading
                    eyebrow="Stack"
                    title={
                        <>
                            Chosen per project, <em>not</em> a fixed menu.
                        </>
                    }
                    lede="Boring where it should be boring, modern where it pays off. This is what we reach for most."
                />

                <div className="flex flex-col gap-8">
                    {/* Bleeds edge to edge and scrolls below md; from md the six tabs fit, so the
                        row stops clipping and focus rings render in full. */}
                    <Reveal className="-mx-6 overflow-x-auto py-1.5 scrollbar-hide md:mx-0 md:overflow-visible">
                        <div
                            role="tablist"
                            aria-label="Technology categories"
                            onKeyDown={onTablistKeyDown}
                            className="flex w-max min-w-full gap-6 border-b border-line px-6 md:gap-8 md:px-0"
                        >
                            {CATEGORIES.map((category) => {
                                const isActive = category.id === activeId;
                                return (
                                    <button
                                        key={category.id}
                                        type="button"
                                        role="tab"
                                        id={tabId(category.id)}
                                        aria-selected={isActive}
                                        aria-controls={PANEL_ID}
                                        tabIndex={isActive ? 0 : -1}
                                        ref={(el) => {
                                            tabRefs.current[category.id] = el;
                                        }}
                                        onClick={() => select(category.id)}
                                        className={cx(
                                            "type-eyebrow relative cursor-pointer whitespace-nowrap py-4 transition-colors duration-300",
                                            isActive ? "text-ink" : "text-muted hover:text-ink",
                                        )}
                                    >
                                        {category.label}
                                        {isActive && (
                                            <MotionSpan
                                                layoutId="stack-tab"
                                                aria-hidden="true"
                                                transition={snap}
                                                className="absolute inset-x-0 -bottom-px h-0.5 bg-ink"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </Reveal>

                    <MotionDiv
                        role="tabpanel"
                        id={PANEL_ID}
                        aria-labelledby={tabId(active.id)}
                        tabIndex={0}
                        initial={false}
                        animate={{ height: panelHeight ?? "auto" }}
                        transition={snap}
                    >
                        <div ref={contentRef}>
                            <Stagger
                                key={active.id}
                                animate={switched ? "show" : undefined}
                                className="flex flex-col gap-5"
                            >
                                <MotionP
                                    variants={staggerChild}
                                    className="max-w-[56ch] text-sm leading-relaxed text-muted md:text-base"
                                >
                                    {active.note}
                                </MotionP>
                                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                    {active.items.map((item) => (
                                        <Chip key={item.name} name={item.name} icon={item.icon} />
                                    ))}
                                </ul>
                            </Stagger>
                        </div>
                    </MotionDiv>
                </div>
            </Container>
        </section>
    );
}
