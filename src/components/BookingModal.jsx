import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, X } from "lucide-react";
import { industries } from "../constants/industryData";
import { EASE } from "./motion/constants";
import Button from "./ui/Button";
import Eyebrow from "./ui/Eyebrow";
import cx from "../lib/cx";

const WHATSAPP_NUMBER = "916260045626";
const DEFAULT_INDUSTRY = industries[0]?.title || "Generic";
const RESET_DELAY_MS = 300;
const FOCUSABLE =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), ' +
    'textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const fieldClass =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink outline-none " +
    "transition-colors placeholder:text-muted focus:border-accent";
const labelClass = "type-eyebrow text-muted";

// Aliased once at module scope: the project ESLint config does not count `<motion.x>`
// member expressions as a use of `motion`, PascalCase identifiers it does.
const MotionDiv = motion.div;
const MotionForm = motion.form;

const emptyForm = () => ({ name: "", mobile: "", industry: DEFAULT_INDUSTRY });

/** The next 14 days, starting tomorrow. */
function generateDates() {
    const today = new Date();
    return Array.from({ length: 14 }, (_, offset) => {
        const date = new Date(today);
        date.setDate(today.getDate() + offset + 1);
        return date;
    });
}

function formatDate(date) {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function isSameDate(a, b) {
    return Boolean(a && b && a.toDateString() === b.toDateString());
}

/**
 * Two-step booking dialog (pick a date → leave details) that hands off to WhatsApp.
 *
 *   <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
 */
export default function BookingModal({ isOpen, onClose }) {
    const reduce = useReducedMotion();

    const [step, setStep] = useState(1);
    const [dates, setDates] = useState(generateDates);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(emptyForm);
    const [whatsappURL, setWhatsappURL] = useState("");

    const dialogRef = useRef(null);
    const previouslyFocused = useRef(null);
    const pressedOnOverlay = useRef(false);
    const isOpenRef = useRef(isOpen);
    const hasOpened = useRef(false);

    const baseId = useId();
    const titleId = `${baseId}-title`;
    const stepLabelId = `${baseId}-step`;
    const nameId = `${baseId}-name`;
    const mobileId = `${baseId}-mobile`;
    const industryId = `${baseId}-industry`;

    useEffect(() => {
        isOpenRef.current = isOpen;
        if (isOpen) hasOpened.current = true;
    }, [isOpen]);

    // Lock page scroll while open (native + Lenis). Only restart Lenis if this dialog stopped it,
    // so a Lenis paused by something else (the preloader, a menu) is left alone.
    useEffect(() => {
        if (!isOpen) return undefined;
        const html = document.documentElement;
        const previousOverflow = document.body.style.overflow;
        html.classList.add("lenis-stopped");
        document.body.style.overflow = "hidden";
        const lenis = window.__lenis;
        const stoppedLenis = Boolean(lenis && !lenis.isStopped);
        if (stoppedLenis) lenis.stop();
        return () => {
            html.classList.remove("lenis-stopped");
            document.body.style.overflow = previousOverflow;
            if (stoppedLenis) window.__lenis?.start();
        };
    }, [isOpen]);

    // Remember what was focused before opening and hand focus back on close.
    useEffect(() => {
        if (!isOpen) return undefined;
        previouslyFocused.current = document.activeElement;
        return () => {
            const el = previouslyFocused.current;
            previouslyFocused.current = null;
            if (el && typeof el.focus === "function") el.focus();
        };
    }, [isOpen]);

    // Escape closes; Tab / Shift+Tab cycle inside the dialog. Listening on the document
    // keeps the trap working even when focus has fallen to <body> (e.g. after the focused
    // submit button becomes disabled while the hand-off is in flight).
    useEffect(() => {
        if (!isOpen) return undefined;
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
                return;
            }
            if (event.key !== "Tab") return;
            const dialog = dialogRef.current;
            if (!dialog) return;
            const focusable = Array.from(dialog.querySelectorAll(FOCUSABLE));
            if (focusable.length === 0) {
                event.preventDefault();
                dialog.focus();
                return;
            }
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;
            const outside = !dialog.contains(active);
            if (event.shiftKey) {
                if (outside || active === first) {
                    event.preventDefault();
                    last.focus();
                }
            } else if (outside || active === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen, onClose]);

    // Move focus to the first field when the dialog opens or the step changes.
    useEffect(() => {
        if (!isOpen) return undefined;
        const frame = requestAnimationFrame(() => {
            const dialog = dialogRef.current;
            if (!dialog) return;
            const target = dialog.querySelector("[data-autofocus]") ?? dialog;
            target.focus({ preventScroll: true });
        });
        return () => cancelAnimationFrame(frame);
    }, [isOpen, step]);

    // Reset once the exit animation has finished (skipped on first mount: nothing to reset).
    useEffect(() => {
        if (isOpen || !hasOpened.current) return undefined;
        const timer = window.setTimeout(() => {
            setStep(1);
            setDates(generateDates());
            setSelectedDate(null);
            setIsSubmitting(false);
            setFormData(emptyForm());
            setWhatsappURL("");
        }, RESET_DELAY_MS);
        return () => window.clearTimeout(timer);
    }, [isOpen]);

    const updateField = (field) => (event) => {
        const { value } = event.target;
        setFormData((current) => ({ ...current, [field]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        const message = `
New Consultation Booking:

Name: ${formData.name}
Mobile: ${formData.mobile}
Industry: ${formData.industry}
Selected Date: ${formatDate(selectedDate)}
        `;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.open(url, "_blank", "noopener,noreferrer");

        // Closed while the hand-off was in flight: the reset effect owns the state now.
        if (!isOpenRef.current) return;
        // Kept so the step-3 fallback link re-opens the same prefilled chat.
        setWhatsappURL(url);
        setIsSubmitting(false);
        setStep(3);
    };

    // A click closes only when the press started on the overlay itself, so a drag that
    // begins inside the dialog (selecting text) and ends outside does not dismiss it.
    const handleOverlayPointerDown = (event) => {
        pressedOnOverlay.current = event.target === event.currentTarget;
    };

    const handleOverlayClick = (event) => {
        const pressed = pressedOnOverlay.current;
        pressedOnOverlay.current = false;
        if (pressed && event.target === event.currentTarget) onClose();
    };

    const exitTransition = { duration: reduce ? 0 : 0.25, ease: EASE };
    const overlayMotion = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: exitTransition },
        transition: { duration: reduce ? 0 : 0.3, ease: EASE },
    };
    const dialogMotion = {
        initial: { opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98, transition: exitTransition },
        transition: { duration: reduce ? 0 : 0.45, ease: EASE },
    };
    const stepMotion = {
        initial: { opacity: 0, y: reduce ? 0 : 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: reduce ? 0 : 0.4, ease: EASE },
    };

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <MotionDiv
                    key="booking-overlay"
                    {...overlayMotion}
                    onPointerDown={handleOverlayPointerDown}
                    onClick={handleOverlayClick}
                    className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/70 backdrop-blur-sm"
                >
                    <MotionDiv
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        tabIndex={-1}
                        data-lenis-prevent=""
                        {...dialogMotion}
                        className="relative flex max-h-[90vh] w-[calc(100%-2rem)] max-w-[560px] flex-col gap-6 overflow-y-auto rounded-2xl border border-line bg-surface p-6 text-ink outline-none md:p-8"
                    >
                        <div className="flex items-start justify-between gap-6">
                            <div className="flex flex-col gap-4">
                                <Eyebrow>Book a call</Eyebrow>
                                <h2 id={titleId} className="type-display text-3xl text-ink md:text-4xl">
                                    Let&rsquo;s talk about your <em className="text-accent">product</em>.
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close"
                                className="-mt-1 -mr-2 inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-paper hover:text-ink"
                            >
                                <X size={20} aria-hidden="true" />
                            </button>
                        </div>

                        {step !== 3 && (
                            <div className="flex items-center justify-between gap-4 border-t border-line pt-6">
                                <span id={stepLabelId} className={labelClass}>
                                    {step === 1 ? "Select a date" : `Details for ${formatDate(selectedDate)}`}
                                </span>
                                <span className={labelClass}>Step {String(step).padStart(2, "0")}/02</span>
                            </div>
                        )}

                        {step === 1 && (
                            <MotionDiv key="step-date" {...stepMotion} className="flex flex-col gap-6">
                                <div
                                    role="group"
                                    aria-labelledby={stepLabelId}
                                    className="grid grid-cols-4 gap-2 sm:grid-cols-7"
                                >
                                    {dates.map((date, index) => {
                                        const selected = isSameDate(selectedDate, date);
                                        return (
                                            <button
                                                key={date.toDateString()}
                                                type="button"
                                                aria-pressed={selected}
                                                aria-label={formatDate(date)}
                                                data-autofocus={index === 0 ? "" : undefined}
                                                onClick={() => setSelectedDate(date)}
                                                className={cx(
                                                    "flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border transition-colors",
                                                    selected
                                                        ? "border-ink bg-ink text-paper"
                                                        : "border-line bg-paper text-ink hover:border-ink",
                                                )}
                                            >
                                                <span className={cx("type-eyebrow", selected ? "text-muted-dark" : "text-muted")}>
                                                    {date.toLocaleDateString("en-US", { weekday: "short" })}
                                                </span>
                                                <span className="type-mono text-lg leading-none">{date.getDate()}</span>
                                                <span className={cx("type-eyebrow", selected ? "text-muted-dark" : "text-muted")}>
                                                    {date.toLocaleDateString("en-US", { month: "short" })}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <Button
                                    variant="primary"
                                    arrow
                                    disabled={!selectedDate}
                                    onClick={() => setStep(2)}
                                    className="w-full"
                                >
                                    Next step
                                </Button>
                            </MotionDiv>
                        )}

                        {step === 2 && (
                            <MotionForm
                                key="step-details"
                                {...stepMotion}
                                onSubmit={handleSubmit}
                                aria-busy={isSubmitting || undefined}
                                className="flex flex-col gap-5"
                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor={nameId} className={labelClass}>
                                        Full name
                                    </label>
                                    <input
                                        id={nameId}
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        placeholder="Your name"
                                        data-autofocus=""
                                        value={formData.name}
                                        onChange={updateField("name")}
                                        className={fieldClass}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor={mobileId} className={labelClass}>
                                            Mobile number
                                        </label>
                                        <input
                                            id={mobileId}
                                            name="mobile"
                                            type="tel"
                                            required
                                            autoComplete="tel"
                                            placeholder="+91"
                                            value={formData.mobile}
                                            onChange={updateField("mobile")}
                                            className={fieldClass}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor={industryId} className={labelClass}>
                                            Industry
                                        </label>
                                        <div className="relative">
                                            <select
                                                id={industryId}
                                                name="industry"
                                                value={formData.industry}
                                                onChange={updateField("industry")}
                                                className={cx(fieldClass, "cursor-pointer appearance-none pr-11")}
                                            >
                                                {industries.map((industry) => (
                                                    <option key={industry.title} value={industry.title}>
                                                        {industry.title}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown
                                                size={18}
                                                aria-hidden="true"
                                                className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <Button variant="ghost" onClick={() => setStep(1)} className="shrink-0">
                                        Back
                                    </Button>
                                    <Button variant="accent" arrow type="submit" disabled={isSubmitting} className="w-full">
                                        {isSubmitting ? "Opening WhatsApp" : "Continue on WhatsApp"}
                                    </Button>
                                </div>
                            </MotionForm>
                        )}

                        {step === 3 && (
                            <MotionDiv
                                key="step-done"
                                {...stepMotion}
                                className="flex flex-col items-center gap-6 border-t border-line pt-8 pb-2 text-center"
                            >
                                <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
                                    <Check size={26} aria-hidden="true" />
                                </span>
                                <div className="flex flex-col gap-3">
                                    {/* Focus lands here so the outcome is announced; Done is one Tab away. */}
                                    <h3
                                        tabIndex={-1}
                                        data-autofocus=""
                                        className="font-sans text-xl font-semibold tracking-tight md:text-2xl"
                                    >
                                        One more step.
                                    </h3>
                                    <p className="max-w-[40ch] text-base leading-relaxed text-muted md:text-lg">
                                        Send the WhatsApp message we just opened to confirm{" "}
                                        <span className="font-semibold text-ink">{formatDate(selectedDate)}</span>. If it
                                        did not open, message us on{" "}
                                        <a
                                            href={whatsappURL || `https://wa.me/${WHATSAPP_NUMBER}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-semibold text-ink underline underline-offset-4"
                                        >
                                            +91 62600 45626
                                        </a>
                                        .
                                    </p>
                                </div>
                                <Button variant="primary" onClick={onClose}>
                                    Done
                                </Button>
                            </MotionDiv>
                        )}
                    </MotionDiv>
                </MotionDiv>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}
