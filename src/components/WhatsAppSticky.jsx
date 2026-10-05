import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion as Motion } from "framer-motion";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./ui/Button";
import { EASE } from "./motion/constants";

const PHONE_NUMBER = "916260045626";
const EMPTY_FORM = { name: "", email: "", details: "" };

const fieldClass =
    "w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted transition-colors duration-300 focus:border-accent";

export default function WhatsAppSticky() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);
    const rootRef = useRef(null);
    const triggerRef = useRef(null);
    const firstFieldRef = useRef(null);
    const panelId = useId();
    const titleId = useId();

    /* While open: move focus into the panel and dismiss on any press outside the widget. */
    useEffect(() => {
        if (!open) return undefined;
        firstFieldRef.current?.focus();
        const onPointerDown = (event) => {
            if (!rootRef.current?.contains(event.target)) setOpen(false);
        };
        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [open]);

    const close = () => {
        setOpen(false);
        triggerRef.current?.focus();
    };

    const onPanelKeyDown = (event) => {
        if (event.key === "Escape") close();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = `
New Inquiry:

Name: ${form.name}
Email: ${form.email}
Project Details: ${form.details}
        `;
        const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message.trim())}`;
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
        setForm(EMPTY_FORM);
        close();
    };

    return (
        <div ref={rootRef} className="fixed right-6 bottom-6 z-30 flex flex-col items-end gap-3">
            <MotionConfig reducedMotion="user">
                <AnimatePresence>
                    {open && (
                        <Motion.div
                            key="whatsapp-panel"
                            id={panelId}
                            role="dialog"
                            aria-labelledby={titleId}
                            onKeyDown={onPanelKeyDown}
                            data-lenis-prevent
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="max-h-[calc(100dvh-7rem)] w-[calc(100vw-3rem)] max-w-sm overflow-y-auto overscroll-contain rounded-2xl border border-line bg-surface p-5 text-ink shadow-lg shadow-ink/10"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="type-eyebrow text-muted">WhatsApp</span>
                                    <h3
                                        id={titleId}
                                        className="font-sans text-xl font-semibold tracking-tight text-ink"
                                    >
                                        Tell us about your project
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted">
                                        We reply on WhatsApp.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={close}
                                    aria-label="Close chat"
                                    className="-mt-2 -mr-2 inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-line text-muted transition-colors duration-300 hover:border-ink hover:text-ink"
                                >
                                    <X size={16} aria-hidden="true" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
                                <label className="flex flex-col gap-1.5">
                                    <span className="sr-only">Full name</span>
                                    <input
                                        ref={firstFieldRef}
                                        required
                                        name="name"
                                        autoComplete="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Full name"
                                        className={fieldClass}
                                    />
                                </label>
                                <label className="flex flex-col gap-1.5">
                                    <span className="sr-only">Email address</span>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email address"
                                        className={fieldClass}
                                    />
                                </label>
                                <label className="flex flex-col gap-1.5">
                                    <span className="sr-only">Project details</span>
                                    <textarea
                                        required
                                        rows={3}
                                        name="details"
                                        value={form.details}
                                        onChange={handleChange}
                                        placeholder="What are you building?"
                                        className={`${fieldClass} resize-none`}
                                    />
                                </label>
                                <Button type="submit" variant="accent" arrow className="mt-1 w-full">
                                    Open WhatsApp
                                </Button>
                            </form>
                        </Motion.div>
                    )}
                </AnimatePresence>
            </MotionConfig>

            {/* #25D366 is WhatsApp's brand green: the one non-token color allowed on the site, kept for recognition. */}
            <button
                ref={triggerRef}
                type="button"
                onClick={() => setOpen((current) => !current)}
                aria-label="Chat on WhatsApp"
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls={open ? panelId : undefined}
                className="inline-flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink/20 transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
                <FaWhatsapp size={26} aria-hidden="true" />
            </button>
        </div>
    );
}
