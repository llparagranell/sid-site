import { MotionConfig } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./motion/Reveal";
import { scrollToTarget, scrollToTop } from "../lib/scroll";
import { services } from "../constants/servicesData";
import { industries } from "../constants/industryData";
import footerLogo from "../assets/footerLogo-removebg-preview.png";

const EMAIL = "contact@devgrowth.com";
const CONTACT_HASH = "#contact";
const CONTACT_PATH = `/${CONTACT_HASH}`;

/* Intrinsic size of the png lockup, so the 48px-tall slot is reserved before it loads. */
const LOGO_SIZE = { width: 301, height: 192 };

const CONTACT = [
    { icon: Phone, label: "+91 62600 45626", href: "tel:+916260045626" },
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: "Jabalpur, Madhya Pradesh, India" },
];

const COMPANY_LINKS = [
    { title: "About Us", path: "/about" },
    { title: "Case Studies", path: "/case-studies" },
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: CONTACT_PATH },
];

const LINK_COLUMNS = [
    { title: "Company", items: COMPANY_LINKS },
    { title: "Services", items: services },
    { title: "Industries", items: industries },
];

const SOCIAL = [
    {
        icon: FaInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/devgrowthsolutions/",
    },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/devgrowth-solutions/posts/",
    },
];

const linkClass =
    "group relative inline-block text-sm text-muted-dark transition-colors duration-300 hover:text-paper";

const contactSectionMounted = () => Boolean(document.querySelector(CONTACT_HASH));

function Underline() {
    return (
        <span
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
    );
}

export default function Footer() {
    const navigate = useNavigate();
    const year = new Date().getFullYear();

    /* On the homepage the contact form is on the page: scroll to it. Elsewhere, go home with
       `state.scrollTo` and let the Navbar's state handler finish the scroll once Home is mounted.
       The "Contact Us" link below deliberately does NOT carry that state: it navigates to "/#contact"
       and ScrollToTop's hash handler lands it. Adding state as well makes the Navbar `replace` the
       location without the hash, which re-runs ScrollToTop and resets the page to the top. */
    const startProject = () => {
        if (contactSectionMounted()) {
            scrollToTarget(CONTACT_HASH);
        } else {
            navigate("/", { state: { scrollTo: CONTACT_HASH } });
        }
    };

    const onContactLinkClick = (event) => {
        if (contactSectionMounted()) {
            event.preventDefault();
            scrollToTarget(CONTACT_HASH);
        }
    };

    return (
        <footer className="band-dark border-t border-line-dark">
            <MotionConfig reducedMotion="user">
                <Container>
                    <Reveal className="grid items-end gap-12 py-20 md:py-28 lg:grid-cols-[1.2fr_0.8fr]">
                        <p className="type-display max-w-[20ch] text-4xl text-paper sm:text-5xl md:text-6xl">
                            Let&rsquo;s build something that{" "}
                            <em className="italic text-accent-bright">lasts</em>.
                        </p>
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
                            <Button tone="dark" variant="accent" arrow onClick={startProject}>
                                Start a project
                            </Button>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="type-eyebrow inline-flex min-h-10 items-center text-muted-dark transition-colors duration-300 hover:text-paper"
                            >
                                {EMAIL}
                            </a>
                        </div>
                    </Reveal>

                    <Reveal className="grid gap-10 border-t border-line-dark py-14 sm:grid-cols-2 lg:grid-cols-12">
                        <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-4">
                            <img
                                src={footerLogo}
                                alt="DevGrowth Solutions"
                                width={LOGO_SIZE.width}
                                height={LOGO_SIZE.height}
                                loading="lazy"
                                decoding="async"
                                className="h-12 w-auto"
                            />
                            <p className="max-w-[36ch] text-sm leading-relaxed text-muted-dark">
                                Product engineering studio. MVPs for founders and growing businesses.
                            </p>
                            <ul className="flex flex-col gap-3">
                                {CONTACT.map(({ icon: Icon, label, href }) => (
                                    <li key={label} className="flex items-center gap-3">
                                        <Icon size={16} aria-hidden="true" className="shrink-0 text-muted-dark" />
                                        {href ? (
                                            <a
                                                href={href}
                                                className="text-sm text-muted-dark transition-colors duration-300 hover:text-paper"
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <span className="text-sm text-muted-dark">{label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {LINK_COLUMNS.map((column) => (
                            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-5 lg:col-span-2">
                                <h3 className="type-eyebrow text-muted-dark">{column.title}</h3>
                                <ul className="flex flex-col gap-3">
                                    {column.items.map((item) => {
                                        const isContact = item.path === CONTACT_PATH;
                                        return (
                                            <li key={item.title}>
                                                <Link
                                                    to={item.path}
                                                    onClick={isContact ? onContactLinkClick : undefined}
                                                    className={linkClass}
                                                >
                                                    {item.title}
                                                    <Underline />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        ))}

                        <div className="flex flex-col gap-5 lg:col-span-2">
                            <h3 className="type-eyebrow text-muted-dark">Follow</h3>
                            <ul className="flex gap-3">
                                {SOCIAL.map(({ icon: Icon, label, href }) => (
                                    <li key={label}>
                                        {/* 36px box as designed; the ::before pad widens the hit area to 44px. */}
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line-dark text-muted-dark transition-[color,border-color,translate] duration-300 ease-out before:absolute before:-inset-1 hover:-translate-y-0.5 hover:border-paper/40 hover:text-paper"
                                        >
                                            <Icon size={16} aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <div className="flex flex-col gap-3 border-t border-line-dark py-6 sm:flex-row sm:items-center sm:justify-between sm:pr-16">
                        <p className="type-eyebrow text-muted-dark">&copy; {year} DevGrowth Solutions</p>
                        <button
                            type="button"
                            onClick={() => scrollToTop()}
                            className="type-eyebrow inline-flex w-fit cursor-pointer items-center gap-2 text-muted-dark transition-colors hover:text-paper"
                        >
                            Back to top
                            <ArrowUp size={12} aria-hidden="true" />
                        </button>
                    </div>
                </Container>
            </MotionConfig>
        </footer>
    );
}
