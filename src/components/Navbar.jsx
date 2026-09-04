import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { services } from "../constants/servicesData";
import { industries } from "../constants/industryData";
import logoMark from "../assets/devgrowthlogo.jpeg";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { EASE, staggerChild, staggerParent } from "./motion/constants";
import { scrollToTarget, scrollToTop } from "../lib/scroll";
import cx from "../lib/cx";

const SCROLL_THRESHOLD = 24;
const CLOSE_DELAY = 120;
const FOCUSABLE =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionUl = motion.ul;
const MotionLi = motion.li;

const NAV = [
    { key: "services", label: "Services", hash: "#services", match: "/services", items: services },
    { key: "industries", label: "Industries", match: "/industries", items: industries },
    { key: "case-studies", label: "Case Studies", to: "/case-studies", match: "/case-studies" },
    { key: "blog", label: "Blog", to: "/blog", match: "/blog" },
    { key: "about", label: "About", to: "/about", match: "/about" },
];

/* Intrinsic size of the jpeg mark, so the 48px slot is reserved before it loads. */
const MARK_SIZE = { width: 391, height: 243 };

const subscribeScroll = (callback) => {
    window.addEventListener("scroll", callback, { passive: true });
    return () => window.removeEventListener("scroll", callback);
};
const getScrolled = () => window.scrollY > SCROLL_THRESHOLD;
const getScrolledServer = () => false;

function Logo({ overDark, onClick }) {
    return (
        <Link to="/" onClick={onClick} className="col-start-1 flex w-fit items-center gap-3">
            {/* One jpeg mark for both states: on paper it sits in a white tile; over the dark band it is
                inverted to light and screen-blended so its white background disappears into the ink. */}
            <span
                className={cx(
                    "flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border transition-colors duration-300",
                    overDark ? "border-transparent bg-transparent" : "border-line bg-surface",
                )}
            >
                <img
                    src={logoMark}
                    alt="DevGrowth Solutions"
                    width={MARK_SIZE.width}
                    height={MARK_SIZE.height}
                    className={cx(
                        "size-full object-contain transition-[filter] duration-300",
                        overDark && "invert grayscale mix-blend-screen",
                    )}
                />
            </span>
            <span aria-hidden="true" className="whitespace-nowrap text-lg font-semibold tracking-tight">
                DevGrowth Solutions
            </span>
        </Link>
    );
}

function DropdownItem({ entry, onNavigate }) {
    const Icon = entry.icon;
    return (
        <Link
            to={entry.path}
            onClick={onNavigate}
            className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-paper focus-visible:bg-paper"
        >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-paper text-ink transition-colors duration-200 group-hover:bg-accent-soft group-hover:text-accent">
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-sm font-medium leading-snug text-ink">{entry.title}</span>
                <span className="text-xs leading-snug text-muted">{entry.desc}</span>
            </span>
        </Link>
    );
}

function NavItem({ item, isHome, active, isOpen, highlighted, reduce, onHover, onOpen, onScheduleClose, onClose }) {
    const triggerRef = useRef(null);
    const panelRef = useRef(null);
    const focusFirst = useRef(false);
    const panelId = useId();
    const hasMenu = Boolean(item.items);

    /* Focus the first link once a panel that was opened from the trigger has mounted. */
    useEffect(() => {
        if (!isOpen || !focusFirst.current) return;
        focusFirst.current = false;
        panelRef.current?.querySelector("a")?.focus();
    }, [isOpen]);

    /* Open the panel and move focus in, whether or not it is already mounted (e.g. opened by hover first). */
    const openAndFocusFirst = () => {
        onOpen(item.key);
        const first = panelRef.current?.querySelector("a");
        if (first) first.focus();
        else focusFirst.current = true;
    };

    const handleItemKeyDown = (event) => {
        if (hasMenu && isOpen && event.key === "Escape") {
            event.preventDefault();
            onClose();
            triggerRef.current?.focus();
        }
    };

    /* Disclosure pattern: focus alone never opens the panel; ArrowDown / Space do.
       Space needs preventDefault on the <a href="#…"> variant or it would page-scroll. */
    const handleTriggerKeyDown = (event) => {
        if (!hasMenu || (event.key !== "ArrowDown" && event.key !== " ")) return;
        event.preventDefault();
        openAndFocusFirst();
    };

    const linkClass = cx(
        "type-eyebrow text-sm relative inline-flex items-center gap-1.5 whitespace-nowrap py-2 transition-opacity duration-300",
        highlighted ? "opacity-100" : "opacity-70 hover:opacity-100",
    );

    const label = (
        <>
            <span>{item.label}</span>
            {hasMenu && (
                <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={cx("transition-transform duration-300", isOpen && "rotate-180")}
                />
            )}
            {highlighted && (
                <MotionSpan
                    layoutId="nav-underline"
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px bg-current"
                    transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
                />
            )}
        </>
    );

    let trigger;
    if (!hasMenu) {
        trigger = (
            <Link ref={triggerRef} to={item.to} aria-current={active ? "page" : undefined} className={linkClass}>
                {label}
            </Link>
        );
    } else if (!item.hash) {
        /* No section or page to go to (Industries): the label is a disclosure button on every route. */
        trigger = (
            <button
                ref={triggerRef}
                type="button"
                aria-expanded={isOpen}
                aria-controls={isOpen ? panelId : undefined}
                aria-current={active ? "page" : undefined}
                onClick={openAndFocusFirst}
                onKeyDown={handleTriggerKeyDown}
                className={cx(linkClass, "cursor-pointer")}
            >
                {label}
            </button>
        );
    } else if (isHome) {
        trigger = (
            <a
                ref={triggerRef}
                href={item.hash}
                aria-expanded={isOpen}
                aria-controls={isOpen ? panelId : undefined}
                onClick={(event) => {
                    event.preventDefault();
                    onClose();
                    scrollToTarget(item.hash);
                }}
                onKeyDown={handleTriggerKeyDown}
                className={linkClass}
            >
                {label}
            </a>
        );
    } else {
        trigger = (
            <Link
                ref={triggerRef}
                to="/"
                state={{ scrollTo: item.hash }}
                aria-current={active ? "page" : undefined}
                aria-expanded={isOpen}
                aria-controls={isOpen ? panelId : undefined}
                onClick={onClose}
                onKeyDown={handleTriggerKeyDown}
                className={linkClass}
            >
                {label}
            </Link>
        );
    }

    return (
        <li
            className="relative flex h-20 items-center"
            onMouseEnter={() => {
                onHover(item.key);
                if (hasMenu) onOpen(item.key);
            }}
            onMouseLeave={() => {
                onHover(null);
                if (hasMenu) onScheduleClose();
            }}
            onFocus={() => onHover(item.key)}
            onBlur={(event) => {
                if (event.currentTarget.contains(event.relatedTarget)) return;
                onHover(null);
                if (hasMenu) onClose();
            }}
            onKeyDown={handleItemKeyDown}
        >
            {trigger}
            {hasMenu && (
                <AnimatePresence>
                    {isOpen && (
                        <MotionDiv
                            key="panel"
                            initial={{ opacity: 0, y: 8, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 8, x: "-50%" }}
                            transition={{ duration: reduce ? 0 : 0.2, ease: EASE }}
                            className="absolute left-1/2 top-full pt-2"
                        >
                            <div
                                ref={panelRef}
                                id={panelId}
                                className="grid w-[560px] min-w-[280px] grid-cols-2 gap-1 rounded-2xl border border-line bg-surface p-2 text-left text-ink shadow-[0_24px_60px_-24px] shadow-ink/35"
                            >
                                {item.items.map((entry) => (
                                    <DropdownItem key={entry.title} entry={entry} onNavigate={onClose} />
                                ))}
                            </div>
                        </MotionDiv>
                    )}
                </AnimatePresence>
            )}
        </li>
    );
}

function DesktopNav({ isHome, activeKey, reduce }) {
    const [hovered, setHovered] = useState(null);
    const [openKey, setOpenKey] = useState(null);
    const closeTimer = useRef(null);

    const cancelClose = () => {
        if (closeTimer.current !== null) {
            window.clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };
    const open = (key) => {
        cancelClose();
        setOpenKey(key);
    };
    const scheduleClose = () => {
        cancelClose();
        closeTimer.current = window.setTimeout(() => {
            closeTimer.current = null;
            setOpenKey(null);
        }, CLOSE_DELAY);
    };
    const close = () => {
        cancelClose();
        setOpenKey(null);
    };

    useEffect(
        () => () => {
            if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
        },
        [],
    );

    const highlighted = hovered ?? openKey ?? activeKey;

    return (
        <nav aria-label="Primary" className="col-start-2 hidden h-full justify-center lg:flex">
            <ul className="flex items-center gap-8">
                {NAV.map((item) => (
                    <NavItem
                        key={item.key}
                        item={item}
                        isHome={isHome}
                        active={activeKey === item.key}
                        isOpen={openKey === item.key}
                        highlighted={highlighted === item.key}
                        reduce={reduce}
                        onHover={setHovered}
                        onOpen={open}
                        onScheduleClose={scheduleClose}
                        onClose={close}
                    />
                ))}
            </ul>
        </nav>
    );
}

function MobileLabel({ active, children }) {
    return (
        <span className={cx("type-display text-4xl", active ? "text-accent-bright" : "text-paper")}>{children}</span>
    );
}

function MobileGroup({ item, active, expanded, reduce, onToggle, onNavigate }) {
    const panelId = useId();
    return (
        <>
            <button
                type="button"
                aria-expanded={expanded}
                aria-controls={expanded ? panelId : undefined}
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
                <MobileLabel active={active}>
                    {item.label}
                </MobileLabel>
                <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={cx("shrink-0 text-muted-dark transition-transform duration-300", expanded && "rotate-180")}
                />
            </button>
            <AnimatePresence initial={false}>
                {expanded && (
                    <MotionDiv
                        key="panel"
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                        className="overflow-hidden"
                    >
                        <ul className="grid gap-1 pb-5 sm:grid-cols-2">
                            {item.items.map((entry) => {
                                const Icon = entry.icon;
                                return (
                                    <li key={entry.title}>
                                        <Link
                                            to={entry.path}
                                            onClick={onNavigate}
                                            className="flex items-start gap-3 rounded-xl px-2 py-2.5 transition-colors duration-200 hover:bg-paper/5"
                                        >
                                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line-dark bg-ink-2 text-paper">
                                                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                                            </span>
                                            <span className="flex min-w-0 flex-col gap-0.5">
                                                <span className="text-sm font-medium leading-snug text-paper">{entry.title}</span>
                                                <span className="text-xs leading-snug text-muted-dark">{entry.desc}</span>
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </>
    );
}

function MobileMenu({ menuId, activeKey, reduce, onNavigate, onBookClick }) {
    const [expanded, setExpanded] = useState(null);

    return (
        <nav id={menuId} aria-label="Mobile" className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto">
                <Container className="py-4">
                    <MotionUl
                        variants={staggerParent(0.06, 0.2)}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col border-b border-line-dark"
                    >
                        {NAV.map((item) => {
                            const active = activeKey === item.key;
                            return (
                                <MotionLi key={item.key} variants={staggerChild} className="border-t border-line-dark">
                                    {item.items ? (
                                        <MobileGroup
                                            item={item}
                                                                                       active={active}
                                            expanded={expanded === item.key}
                                            reduce={reduce}
                                            onToggle={() => setExpanded((current) => (current === item.key ? null : item.key))}
                                            onNavigate={onNavigate}
                                        />
                                    ) : (
                                        <Link
                                            to={item.to}
                                            aria-current={active ? "page" : undefined}
                                            onClick={onNavigate}
                                            className="flex items-center justify-between gap-6 py-5"
                                        >
                                            <MobileLabel active={active}>
                                                {item.label}
                                            </MobileLabel>
                                            <ArrowUpRight size={20} aria-hidden="true" className="shrink-0 text-muted-dark" />
                                        </Link>
                                    )}
                                </MotionLi>
                            );
                        })}
                    </MotionUl>
                </Container>
            </div>
            <Container className="border-t border-line-dark pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <Button
                    variant="accent"
                    tone="dark"
                    className="w-full"
                    onClick={() => {
                        onNavigate();
                        onBookClick?.();
                    }}
                >
                    Book a call
                </Button>
            </Container>
        </nav>
    );
}

export default function Navbar({ onBookClick }) {
    const location = useLocation();
    const navigate = useNavigate();
    const reduce = useReducedMotion();
    const menuId = useId();
    const toggleRef = useRef(null);
    const overlayRef = useRef(null);
    /* Set by a logo tap while the mobile menu is open. Lenis is stopped until the menu
       effect's cleanup restarts it and ignores scrollTo before then, so the jump runs there. */
    const scrollTopOnClose = useRef(false);

    const { pathname } = location;
    const isHome = pathname === "/";
    const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getScrolledServer);
    /* Membership first (E-commerce sits under Services but routes to /industries/…), then the prefix rule. */
    const activeKey =
        NAV.find((item) => item.items?.some((entry) => pathname === entry.path || pathname === `${entry.path}/`))?.key ??
        NAV.find((item) => pathname.startsWith(item.match))?.key ??
        null;

    /* The menu remembers the route it opened on, so a route change closes it without an effect. */
    const [menu, setMenu] = useState({ open: false, path: pathname });
    const menuOpen = menu.open && menu.path === pathname;
    const closeMenu = () => setMenu((current) => (current.open ? { ...current, open: false } : current));
    const toggleMenu = () => setMenu({ open: !menuOpen, path: pathname });

    /* Every page opens with a dark header band, so the bar is transparent at the top of any route. */
    const overDark = !scrolled && !menuOpen;

    /* On "/" the Link would only push a duplicate history entry; jump to the top instead. */
    const onLogoClick = (event) => {
        event.preventDefault();
        if (menuOpen) {
            scrollTopOnClose.current = true;
            closeMenu();
        } else {
            scrollToTop();
        }
    };

    useEffect(() => {
        if (!menuOpen) return undefined;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        // Stop Lenis so wheel input over the fixed header (which has no data-lenis-prevent)
        // is cancelled instead of driving window.scrollTo from its raf. Lenis sets and
        // clears html.lenis-stopped itself while stopped. Only restart it if we stopped it;
        // body overflow:hidden stays as the reduced-motion / no-Lenis fallback.
        const lenis = window.__lenis;
        const stoppedLenis = Boolean(lenis && !lenis.isStopped);
        if (stoppedLenis) lenis.stop();

        const close = () => setMenu((current) => ({ ...current, open: false }));
        // Escape closes. Tab / Shift+Tab cycle between the header toggle and the overlay's
        // focusables so focus never walks into the page painted underneath the menu.
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                close();
                toggleRef.current?.focus();
                return;
            }
            if (event.key !== "Tab") return;
            const scope = [toggleRef.current, ...(overlayRef.current?.querySelectorAll(FOCUSABLE) ?? [])].filter(Boolean);
            if (scope.length === 0) return;
            const first = scope[0];
            const last = scope[scope.length - 1];
            const active = document.activeElement;
            const outside = !scope.includes(active);
            if (event.shiftKey ? outside || active === first : outside || active === last) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            }
        };
        const desktop = window.matchMedia("(min-width: 1024px)");
        const onMediaChange = (event) => {
            if (event.matches) close();
        };
        window.addEventListener("keydown", onKeyDown);
        desktop.addEventListener("change", onMediaChange);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            desktop.removeEventListener("change", onMediaChange);
            document.body.style.overflow = previousOverflow;
            if (stoppedLenis) window.__lenis?.start();
            if (scrollTopOnClose.current) {
                scrollTopOnClose.current = false;
                scrollToTop();
            }
        };
    }, [menuOpen]);

    /* Arriving on the homepage from a "Services" link on another page. */
    useEffect(() => {
        const target = location.state?.scrollTo;
        if (!isHome || !target) return undefined;
        const id = window.setTimeout(() => {
            scrollToTarget(target);
            navigate("/", { replace: true, state: null });
        }, 80);
        return () => window.clearTimeout(id);
    }, [isHome, location.state, navigate]);

    const headerTone = menuOpen
        ? "border-line bg-paper text-ink"
        : overDark
          ? "border-transparent bg-transparent text-paper"
          : "border-line bg-paper/85 text-ink backdrop-blur-md";

    return (
        <>
            <header className={cx("fixed inset-x-0 top-0 z-50 h-20 border-b transition-colors duration-300 ease-out", headerTone)}>
                <Container className="grid h-full grid-cols-[1fr_auto_1fr] items-center">
                    <Logo overDark={overDark} onClick={isHome ? onLogoClick : undefined} />
                    <DesktopNav isHome={isHome} activeKey={activeKey} reduce={reduce} />
                    <div className="col-start-3 flex items-center justify-end gap-3">
                        <Button
                            variant="accent"
                            tone={overDark ? "dark" : "light"}
                            size="lg"
                            onClick={onBookClick}
                            className="max-lg:hidden"
                        >
                            Book a call
                        </Button>
                        <button
                            ref={toggleRef}
                            type="button"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            aria-controls={menuOpen ? menuId : undefined}
                            onClick={toggleMenu}
                            className={cx(
                                "-mr-2 inline-flex size-10 items-center justify-center rounded-full transition-colors duration-300 lg:hidden",
                                overDark ? "hover:bg-paper/10" : "hover:bg-accent-soft",
                            )}
                        >
                            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
                        </button>
                    </div>
                </Container>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <MotionDiv
                        key="mobile-menu"
                        ref={overlayRef}
                        data-lenis-prevent=""
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                        className="band-dark fixed inset-0 z-[45] flex flex-col pt-20 lg:hidden"
                    >
                        <MobileMenu
                            menuId={menuId}
                            activeKey={activeKey}
                            reduce={reduce}
                            onNavigate={closeMenu}
                            onBookClick={() => {
                                /* The menu button is about to unmount; park focus on the always-mounted
                                   toggle so BookingModal has something real to return focus to. */
                                toggleRef.current?.focus();
                                onBookClick?.();
                            }}
                        />
                    </MotionDiv>
                )}
            </AnimatePresence>
        </>
    );
}
