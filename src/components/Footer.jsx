import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Container from "./ui/Container";
import Button from "./ui/Button";
import HandUnderline from "./ui/HandUnderline";
import { scrollToTarget, scrollToTop } from "../lib/scroll";
import { services } from "../constants/servicesData";
import { industries } from "../constants/industryData";
import footerLogo from "../assets/logo-lockup-light.png";

const EMAIL = "contact@devgrowth.com";
const CONTACT_HASH = "#contact";
const CONTACT_PATH = `/${CONTACT_HASH}`;

/* Intrinsic size of the png lockup, so the slot is reserved before it loads. It is a stacked
   mark (cube over the wordmark), so it needs height: at 112px "Solutions" is still legible. */
const LOGO_SIZE = { width: 332, height: 320 };

/* Address block, typeset in mono. A line without `href` is plain text (the place). */
const CONTACT = [
    { label: "+91 62600 45626", href: "tel:+916260045626" },
    { label: EMAIL, href: `mailto:${EMAIL}` },
    { label: "Jabalpur, Madhya Pradesh, India" },
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
    { label: "Instagram", href: "https://www.instagram.com/devgrowthsolutions/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/devgrowth-solutions/posts/" },
];

/* Column titles are mono annotations: the `type-eyebrow` utility, not the Eyebrow component,
   so no leading rule and no accent. */
const COLUMN_TITLE = "type-eyebrow text-muted-dark";
const LINK_CLASS =
    "flex min-h-11 items-center text-sm text-muted-dark transition-colors duration-300 hover:text-paper";

const contactSectionMounted = () => Boolean(document.querySelector(CONTACT_HASH));

/* One site-map column: mono title over a list of router links, every row a 44px tap target. */
function NavColumn({ column, onContactLinkClick }) {
    return (
        <nav aria-label={column.title}>
            <h3 className={COLUMN_TITLE}>{column.title}</h3>
            <ul className="mt-3">
                {column.items.map((item) => (
                    <li key={item.title}>
                        <Link
                            to={item.path}
                            onClick={item.path === CONTACT_PATH ? onContactLinkClick : undefined}
                            className={LINK_CLASS}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function Footer() {
    const navigate = useNavigate();
    const year = new Date().getFullYear();
    const [company, serviceLinks, industryLinks] = LINK_COLUMNS;

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
            <Container>
                {/* Sign-off: the closing line, one call to action, the address to write to. Static. */}
                <div className="flex flex-col gap-8 py-16 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12 lg:py-24">
                    <p className="type-display max-w-[14ch] text-4xl text-paper lg:text-6xl">
                        Let&rsquo;s build something that{" "}
                        <HandUnderline tone="dark">lasts</HandUnderline>.
                    </p>
                    <div className="flex flex-col gap-4 lg:items-end">
                        <Button
                            tone="dark"
                            variant="primary"
                            arrow
                            className="min-h-12 w-full lg:w-auto"
                            onClick={startProject}
                        >
                            Start a project
                        </Button>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="type-mono inline-flex min-h-11 w-fit items-center text-sm text-muted-dark underline decoration-line-dark underline-offset-4 transition-colors duration-300 hover:text-paper"
                        >
                            {EMAIL}
                        </a>
                    </div>
                </div>

                {/* Colophon: who we are, where we are, the map of the site. */}
                <div className="flex flex-col gap-10 border-t border-line-dark py-12 lg:grid lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-4">
                        <img
                            src={footerLogo}
                            alt="DevGrowth Solutions"
                            width={LOGO_SIZE.width}
                            height={LOGO_SIZE.height}
                            loading="lazy"
                            decoding="async"
                            className="h-28 w-auto"
                        />
                        <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-muted-dark">
                            Product engineering studio. MVPs for founders and growing businesses.
                        </p>
                        <address className="type-mono mt-4 flex flex-col text-sm not-italic text-muted-dark">
                            {CONTACT.map(({ label, href }) =>
                                href ? (
                                    <a
                                        key={label}
                                        href={href}
                                        className="flex min-h-11 w-fit items-center transition-colors duration-300 hover:text-paper"
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <span key={label} className="flex min-h-11 items-center">
                                        {label}
                                    </span>
                                ),
                            )}
                        </address>
                    </div>

                    {/* Phone: two columns of ten rows each, Company over Industries and Services over
                        Follow, so neither column outruns the other. Column A sizes to its longest
                        link and B takes the rest, which keeps "Mobile App Development" on one line
                        at 390. From lg the wrappers dissolve (`contents`) and the four navs share
                        one row, packed left with the Follow column absorbing the slack. */}
                    <div className="grid grid-cols-[auto_1fr] gap-x-10 lg:col-span-8 lg:grid-cols-[auto_auto_auto_1fr]">
                        <div className="flex flex-col gap-10 lg:contents">
                            <NavColumn column={company} onContactLinkClick={onContactLinkClick} />
                            <NavColumn column={industryLinks} />
                        </div>
                        <div className="flex flex-col gap-10 lg:contents">
                            <NavColumn column={serviceLinks} />
                            <nav aria-label="Follow">
                                <h3 className={COLUMN_TITLE}>Follow</h3>
                                <ul className="mt-3">
                                    {SOCIAL.map(({ label, href }) => (
                                        <li key={label}>
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-dark transition-colors duration-300 hover:text-paper"
                                            >
                                                {label}
                                                <ArrowUpRight size={14} aria-hidden="true" />
                                                <span className="sr-only">{" (opens in a new tab)"}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Imprint. `sm:pr-16` keeps "Back to top" clear of the sticky WhatsApp button. */}
                <div className="type-eyebrow flex flex-col gap-2 border-t border-line-dark py-6 text-muted-dark sm:flex-row sm:items-center sm:justify-between sm:pr-16">
                    <p>&copy; {year} DevGrowth Solutions</p>
                    <p className="hidden sm:block">Jabalpur, Madhya Pradesh, India</p>
                    <button
                        type="button"
                        onClick={() => scrollToTop()}
                        className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-paper"
                    >
                        Back to top
                        <ArrowUp size={12} aria-hidden="true" />
                    </button>
                </div>
            </Container>
        </footer>
    );
}
