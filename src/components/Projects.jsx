import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { Stagger } from "./motion/Reveal";
import { staggerChild } from "./motion/constants";
import { scrollToTarget } from "../lib/scroll";
import cx from "../lib/cx";
import goseva from "../assets/goseva.webp";
import upasthit from "../assets/upasthit.webp";
import swadeit from "../assets/swadeit.webp";

const projects = [
    {
        id: "swadeit",
        title: "SwadeIt",
        desc: "Buy and sell products locally, within your city.",
        tech: ["React-Native", "Express", "MongoDB"],
        img: swadeit,
        alt: "Screens from the SwadeIt app",
        url: "https://play.google.com/store/apps/details?id=in.swadeit.app",
    },
    {
        id: "upasthit",
        title: "Upasthit",
        desc: "Attendance tracking built for LNCT students.",
        tech: ["React-Native", "Express", "PostgreSQL"],
        img: upasthit,
        alt: "Screens from the Upasthit app",
        url: "https://play.google.com/store/apps/details?id=com.upasthit.app&hl=en_US",
    },
    {
        id: "goseva",
        title: "Sri Govinduni Goseva",
        desc: "Order Desi-cow and natural farming products.",
        tech: ["React-Native", "Express", "PostgreSQL"],
        img: goseva,
        alt: "Screens from the Sri Govinduni Goseva app",
        url: "https://play.google.com/store/apps/details?id=com.goseva.customer",
    },
];

/**
 * Left/right inset that lines the strip up with the Container column:
 * the Container gutter on narrow screens, gutter + centering offset past 1280px.
 * `--gutter` is set responsively on the scroller to mirror Container's px-6 / md:px-10 / lg:px-14.
 */
const GUTTER_INSET = "max(var(--gutter), calc((100% - 1280px) / 2 + var(--gutter)))";

const CARD_WIDTH = "w-[82vw] shrink-0 snap-start sm:w-[480px] lg:w-[560px]";

/** The row is much wider than the viewport, so a ratio-based amount can never be met on phones. */
const CARD_VIEWPORT = { once: true, amount: "some", margin: "-80px 0px" };

const DRAG_THRESHOLD_PX = 6;
const SNAP_RESTORE_FALLBACK_MS = 700;

const MotionLi = motion.li;
const MotionDiv = motion.div;

const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** scrollLeft values that put each card flush with the column gutter, clamped to the scroll range. */
function snapTargets(scroller) {
    const cards = Array.from(scroller.querySelectorAll("[data-snap-card]"));
    if (cards.length === 0) return [];
    const origin = cards[0].offsetLeft;
    const max = scroller.scrollWidth - scroller.clientWidth;
    return cards.map((card) => Math.min(card.offsetLeft - origin, max));
}

function nearestIndex(targets, left) {
    let best = 0;
    for (let i = 1; i < targets.length; i += 1) {
        if (Math.abs(targets[i] - left) < Math.abs(targets[best] - left)) best = i;
    }
    return best;
}

export default function Projects() {
    const scrollerRef = useRef(null);
    const drag = useRef({ active: false, pointerId: null, startX: 0, startLeft: 0, moved: false, suppressClick: false });
    const settle = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const { scrollXProgress } = useScroll({ container: scrollerRef });
    useMotionValueEvent(scrollXProgress, "change", (value) => {
        setAtStart(value <= 0.005);
        setAtEnd(value >= 0.995);
    });

    const clearSettle = () => {
        if (settle.current) {
            settle.current();
            settle.current = null;
        }
    };

    /** Re-enable CSS snapping once the programmatic scroll has come to rest. */
    const restoreSnapAfterScroll = (el) => {
        clearSettle();
        const finish = () => {
            clearSettle();
            el.style.scrollSnapType = "";
        };
        const timer = window.setTimeout(finish, SNAP_RESTORE_FALLBACK_MS);
        el.addEventListener("scrollend", finish, { once: true });
        settle.current = () => {
            window.clearTimeout(timer);
            el.removeEventListener("scrollend", finish);
        };
    };

    const settleToNearest = (el) => {
        const targets = snapTargets(el);
        const target = targets.length ? targets[nearestIndex(targets, el.scrollLeft)] : el.scrollLeft;
        if (Math.abs(target - el.scrollLeft) < 1) {
            el.style.scrollSnapType = "";
            return;
        }
        restoreSnapAfterScroll(el);
        el.scrollTo({ left: target, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    };

    const step = (direction) => {
        const el = scrollerRef.current;
        if (!el) return;
        clearSettle();
        el.style.scrollSnapType = "";
        const targets = snapTargets(el);
        if (targets.length === 0) return;
        const next = Math.max(0, Math.min(targets.length - 1, nearestIndex(targets, el.scrollLeft) + direction));
        el.scrollTo({ left: targets[next], behavior: prefersReducedMotion() ? "auto" : "smooth" });
    };

    const onPointerDown = (e) => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        clearSettle();
        drag.current = {
            active: true,
            pointerId: e.pointerId,
            startX: e.clientX,
            startLeft: e.currentTarget.scrollLeft,
            moved: false,
            suppressClick: false,
        };
    };

    const onPointerMove = (e) => {
        const d = drag.current;
        if (!d.active || e.pointerId !== d.pointerId) return;
        const el = e.currentTarget;
        const dx = e.clientX - d.startX;
        if (!d.moved) {
            if (Math.abs(dx) < DRAG_THRESHOLD_PX) return;
            d.moved = true;
            el.style.scrollSnapType = "none";
            el.setPointerCapture(e.pointerId);
            setDragging(true);
        }
        el.scrollLeft = d.startLeft - dx;
    };

    const onPointerEnd = (e) => {
        const d = drag.current;
        if (!d.active || e.pointerId !== d.pointerId) return;
        d.active = false;
        if (!d.moved) return;
        const el = e.currentTarget;
        if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
        d.suppressClick = true;
        window.setTimeout(() => {
            d.suppressClick = false;
        }, 0);
        setDragging(false);
        settleToNearest(el);
    };

    const onClickCapture = (e) => {
        if (!drag.current.suppressClick) return;
        drag.current.suppressClick = false;
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <section id="work" className="band-dark section-pad overflow-hidden">
            <Container>
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <SectionHeading
                        tone="dark"
                        eyebrow="Selected work"
                        title={
                            <>
                                Products that are <em>live</em> today.
                            </>
                        }
                        lede="Built end to end with the founders behind them — design, engineering, launch."
                    />
                    <div className="hidden shrink-0 items-center gap-3 md:flex">
                        <NavButton label="Previous project" icon={ArrowLeft} disabled={atStart} onClick={() => step(-1)} />
                        <NavButton label="Next project" icon={ArrowRight} disabled={atEnd} onClick={() => step(1)} />
                    </div>
                </div>
            </Container>

            <div className="mt-12 flex flex-col gap-8 md:mt-16 md:gap-10">
                <div
                    ref={scrollerRef}
                    className={cx(
                        "[--gutter:1.5rem] md:[--gutter:2.5rem] lg:[--gutter:3.5rem]",
                        "relative scrollbar-hide snap-x snap-mandatory overflow-x-auto overflow-y-hidden select-none",
                        dragging ? "cursor-grabbing" : "cursor-grab",
                    )}
                    style={{ scrollPaddingLeft: GUTTER_INSET }}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerEnd}
                    onPointerCancel={onPointerEnd}
                    onClickCapture={onClickCapture}
                    onDragStart={(e) => e.preventDefault()}
                >
                    <Stagger
                        as="ul"
                        viewport={CARD_VIEWPORT}
                        className={cx("flex w-max gap-6", dragging && "pointer-events-none")}
                        style={{ paddingLeft: GUTTER_INSET, paddingRight: GUTTER_INSET }}
                        aria-label="Selected work"
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                        <GhostCard />
                    </Stagger>
                </div>

                <Container>
                    <div aria-hidden="true" className="h-px w-full bg-line-dark">
                        <MotionDiv className="h-full w-full origin-left bg-paper" style={{ scaleX: scrollXProgress }} />
                    </div>
                </Container>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <MotionLi variants={staggerChild} data-snap-card className={CARD_WIDTH}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line-dark bg-ink-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={project.img}
                        alt={project.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
                    />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-b from-transparent to-ink-2" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="font-sans text-xl font-semibold tracking-tight text-paper md:text-2xl">{project.title}</h3>
                    <p className="max-w-[56ch] text-sm leading-relaxed text-muted-dark md:text-base">{project.desc}</p>
                    <ul aria-label="Built with" className="flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                            <li key={tag} className="type-eyebrow rounded-full border border-line-dark px-2.5 py-1 text-muted-dark">
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex self-start pt-2 text-sm font-semibold text-paper after:absolute after:inset-0 after:cursor-grab after:content-['']"
                    >
                        <span className="relative z-10 inline-flex cursor-pointer items-center gap-1.5">
                            View on Google Play<span className="sr-only">{`, ${project.title} (opens in a new tab)`}</span>
                            <ArrowUpRight
                                size={16}
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </span>
                    </a>
                </div>
            </article>
        </MotionLi>
    );
}

function GhostCard() {
    return (
        <MotionLi variants={staggerChild} data-snap-card className={CARD_WIDTH}>
            <div className="flex h-full flex-col items-start justify-center gap-5 rounded-2xl border border-dashed border-line-dark p-6 md:p-8">
                <p className="font-sans text-xl font-semibold tracking-tight text-paper md:text-2xl">Your product here.</p>
                <p className="max-w-[36ch] text-sm leading-relaxed text-muted-dark md:text-base">
                    We take on a small number of builds at a time.
                </p>
                <Button tone="dark" variant="ghost" onClick={() => scrollToTarget("#contact")}>
                    Start a project
                </Button>
            </div>
        </MotionLi>
    );
}

function NavButton({ label, icon: Icon, disabled, onClick }) {
    return (
        <button
            type="button"
            aria-label={label}
            disabled={disabled}
            onClick={onClick}
            className={cx(
                "inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line-dark text-paper",
                "transition-colors duration-300 hover:border-paper",
                "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line-dark",
            )}
        >
            <Icon size={18} aria-hidden="true" />
        </button>
    );
}
