import Container from "./ui/Container";
import Button from "./ui/Button";
import cx from "../lib/cx";
import { scrollToTarget } from "../lib/scroll";

const withUs = [
    {
        title: "Expert Developer and Designer",
        desc: "Senior people on every build, with reviews and tests that keep quality up.",
    },
    {
        title: "Streamlined Project Management",
        desc: "Clear milestones, agile workflows, and transparent communication from day one.",
    },
    {
        title: "Transparent Pricing & Clear Contracts",
        desc: "No hidden costs, no surprises — everything defined upfront.",
    },
    {
        title: "24/7 Dedicated Support",
        desc: "Quick responses from a team that deeply understands your project.",
    },
    {
        title: "Modern Technology Stack",
        desc: "Current tools chosen per project, so the product is easy to hire for and extend.",
    },
];

const withoutUs = [
    {
        title: "Junior Developer and Designer",
        desc: "Inexperienced teams may compromise on quality and scalability.",
    },
    {
        title: "Chaotic Project Management",
        desc: "Missed deadlines, unclear scope, and inconsistent communication.",
    },
    {
        title: "Hidden Costs & Vague Contracts",
        desc: "Unexpected charges and unclear deliverables create frustration.",
    },
    {
        title: "Limited & Inconsistent Support",
        desc: "Slow responses and lack of accountability.",
    },
    {
        title: "Outdated Technology",
        desc: "Legacy tools leading to performance and security issues.",
    },
];

/** One ledger entry: the struck original, then its replacement beneath (phone) or beside (md+). */
const ROWS = withoutUs.map((without, i) => ({ id: without.title, without, withUs: withUs[i] }));

/* The two edit marks, shared by the key and every entry so they never drift apart. */
const STRUCK = "line-through decoration-muted-dark decoration-[1.5px]";
const REPLACEMENT = "border-l-2 border-paper pl-4 md:border-l md:border-line-dark md:pl-12";

/**
 * #why — edit marks. No heading opener: the ledger starts on a key set exactly like an entry
 * (struck "Without", ruled "With"), each entry is a struck line with its replacement, and the
 * conclusion sits at the bottom. Static: no motion, no accent.
 */
export default function ComparisonSection() {
    return (
        <section id="why" aria-labelledby="why-heading" className="band-dark section-pad-tight border-b border-line-dark">
            <Container>
                <h2 id="why-heading" className="sr-only">
                    The DevGrowth difference
                </h2>

                {/* The key. Stacked on phones like the entries below it; column heads from md. */}
                <p className="type-eyebrow flex flex-col gap-2 border-b border-line-dark pb-3 text-muted-dark md:grid md:grid-cols-2 md:gap-x-12">
                    <s className={STRUCK}>Without DevGrowth</s>
                    <span className={cx(REPLACEMENT, "text-paper")}>With DevGrowth</span>
                </p>

                <ol className="divide-y divide-line-dark border-b border-line-dark">
                    {ROWS.map(({ id, without, withUs: w }) => (
                        <li key={id} className="py-5 md:grid md:grid-cols-2 md:gap-x-12 md:py-6">
                            <div>
                                <p className="text-base text-muted-dark">
                                    <s className={STRUCK}>{without.title}</s>
                                </p>
                                <p className="mt-1 text-sm text-muted-dark">{without.desc}</p>
                            </div>
                            <div className={cx("mt-4 md:mt-0", REPLACEMENT)}>
                                <p className="font-sans text-lg font-semibold tracking-tight text-paper">{w.title}</p>
                                <p className="mt-1 text-sm text-muted-dark">{w.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-8">
                    <p aria-hidden="true" className="type-display max-w-[20ch] text-3xl text-paper md:text-4xl lg:text-5xl">
                        That is the DevGrowth difference.
                    </p>
                    <Button
                        tone="dark"
                        variant="primary"
                        arrow
                        className="w-full min-h-12 md:w-auto md:shrink-0"
                        onClick={() => scrollToTarget("#contact")}
                    >
                        Book your free consultation
                    </Button>
                </div>
            </Container>
        </section>
    );
}
