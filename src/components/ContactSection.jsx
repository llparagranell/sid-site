import { useId, useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import Reveal from "./motion/Reveal";
import cx from "../lib/cx";

const FORM_ACTION = "https://formspree.io/f/paragrane000@gmail.com";

const bullets = [
    "Clear communication & timelines",
    "Transparent pricing",
    "Long-term collaboration & support",
];

/*
 * Underline-only control: no box, a 2px hairline that turns paper on focus. The global
 * `:focus-visible` ring is unlayered (see index.css) so a plain `outline-none` cannot beat it;
 * the `!` keeps the ring off the fields only — the submit button still gets the global ring.
 * `appearance-none` strips iOS Safari's native textfield chrome; preflight only resets radius and fill.
 */
const fieldClass =
    "w-full appearance-none rounded-none border-0 border-b-2 border-line-dark bg-transparent px-0 py-3 text-base text-paper " +
    "placeholder:text-muted-dark outline-none transition-colors duration-300 focus:border-paper focus-visible:outline-none!";

const labelClass = "type-mono text-[11px] uppercase tracking-[0.16em] text-muted-dark";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        details: "",
    });
    const uid = useId();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" aria-labelledby="contact-heading" className="band-dark section-pad-tight">
            <Container className="lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
                <div>
                    <SectionHeading
                        id="contact-heading"
                        tone="dark"
                        eyebrow="Contact"
                        title={
                            <>
                                Tell us what you&apos;re <span className="italic">building</span>.
                            </>
                        }
                        lede="We reply within a business day with next steps — usually a 30-minute call and a written scope after it."
                    />
                    <p className="type-mono mt-6 text-xs leading-relaxed text-muted-dark">{bullets.join(" · ")}</p>
                    <a
                        href="mailto:contact@devgrowth.com"
                        className="type-mono mt-3 inline-flex min-h-11 items-center text-sm text-paper underline decoration-line-dark underline-offset-4 transition-colors duration-300 hover:decoration-paper"
                    >
                        contact@devgrowth.com
                    </a>
                </div>

                <Reveal as="form" action={FORM_ACTION} method="POST" className="mt-8 flex flex-col gap-6 lg:mt-0 lg:gap-7">
                    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-8">
                        <Field
                            id={`${uid}-name`}
                            label="Full name"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                        />
                        <Field
                            id={`${uid}-email`}
                            label="Email address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <Field
                        id={`${uid}-company`}
                        label="Company"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                    />

                    <Field
                        id={`${uid}-details`}
                        label="Project details"
                        name="details"
                        as="textarea"
                        rows={4}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="What it does, who it is for, when you need it."
                        required
                    />

                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <Button
                            type="submit"
                            tone="dark"
                            variant="accent"
                            arrow
                            className="mt-2 min-h-12 w-full lg:mt-0 lg:w-auto"
                        >
                            Send message
                        </Button>
                        <p className="type-mono text-[11px] uppercase leading-normal tracking-[0.16em] text-muted-dark">
                            No spam. No newsletter. Just a reply.
                        </p>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}

function Field({ id, label, as = "input", type = "text", className, ...rest }) {
    const Tag = as;
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className={labelClass}>
                {label}
            </label>
            <Tag
                id={id}
                type={as === "input" ? type : undefined}
                className={cx(fieldClass, as === "textarea" && "min-h-28 resize-y", className)}
                {...rest}
            />
        </div>
    );
}
