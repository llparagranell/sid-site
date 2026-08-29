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

const fieldClass =
    "w-full rounded-xl border border-line-dark bg-ink px-4 py-3.5 text-paper " +
    "placeholder:text-muted-dark outline-none transition-colors duration-300 focus:border-accent-bright";

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
        <section id="contact" aria-labelledby="contact-heading" className="band-dark section-pad">
            <Container>
                <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div className="flex flex-col gap-10">
                        <SectionHeading
                            id="contact-heading"
                            tone="dark"
                            eyebrow="Contact"
                            title={
                                <>
                                    Tell us what you&apos;re <em>building</em>.
                                </>
                            }
                            lede="We reply within a business day with next steps — usually a 30-minute call and a written scope after it."
                        />

                        <Reveal delay={0.1} className="flex flex-col gap-8">
                            <ul className="flex flex-col gap-3">
                                {bullets.map((line) => (
                                    <li key={line} className="flex items-start gap-3 text-muted-dark">
                                        <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 bg-accent-bright" />
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="mailto:contact@devgrowth.com"
                                className="type-eyebrow normal-case -my-4 self-start py-4 text-paper transition-colors duration-300 hover:text-accent-bright"
                            >
                                contact@devgrowth.com
                            </a>
                        </Reveal>
                    </div>

                    <Reveal
                        as="form"
                        action={FORM_ACTION}
                        method="POST"
                        delay={0.1}
                        className="flex flex-col gap-5 rounded-2xl border border-line-dark bg-ink-2 p-6 md:p-8"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <Field
                                id={`${uid}-name`}
                                label="Full name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
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
                            rows={5}
                            value={formData.details}
                            onChange={handleChange}
                            placeholder="Tell us about your project..."
                            required
                        />

                        <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center sm:justify-between">
                            <Button type="submit" tone="dark" variant="accent" arrow className="w-full sm:w-auto">
                                Send message
                            </Button>
                            <p className="type-eyebrow leading-normal text-muted-dark">No spam. No newsletter. Just a reply.</p>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}

function Field({ id, label, as = "input", type = "text", className, ...rest }) {
    const Tag = as;
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="type-eyebrow text-muted-dark">
                {label}
            </label>
            <Tag
                id={id}
                type={as === "input" ? type : undefined}
                className={cx(fieldClass, as === "textarea" && "min-h-32 resize-y", className)}
                {...rest}
            />
        </div>
    );
}
