import Container from "./ui/Container";
import NoteCard from "./ui/NoteCard";
import Reveal from "./motion/Reveal";

const items = [
    {
        id: "clients",
        title: "Clients first",
        description: [
            "Every build starts with your goals and the market you are selling into.",
            "For startups and SMEs alike, the aim is an MVP that solves one real problem and can be measured from day one.",
        ],
    },
    {
        id: "innovation",
        title: "Tools chosen on purpose",
        description: [
            "We build on React, Next.js, Flutter and the MERN stack, with WordPress or Shopify when a platform beats a custom build.",
            "A newer tool earns its place by paying off in the product, not by being new.",
        ],
    },
    {
        id: "partners",
        title: "Long-term, not hand-off",
        description: [
            "We stay on after launch. Support, iteration and the next feature are part of the engagement, not an upsell.",
            "You get direct access to the engineers doing the work, so decisions are made with you, not relayed to you.",
        ],
    },
    {
        id: "quality",
        title: "Quality you can inspect",
        description: [
            "Clean architecture, readable code and a UI that behaves the way it looks. Security and performance are checked before launch, not after.",
            "You see the process as it happens: a written plan, a shared board, and a weekly update you can act on.",
        ],
    },
    {
        id: "learning",
        title: "We keep learning",
        description: [
            "Tooling changes fast, so the team keeps its AI, cloud and framework skills current.",
            "That is what keeps what we ship maintainable a year from now.",
        ],
    },
];

// The brand line's one permitted use on the site: static, inside the note card.
const SIGNATURE = "Develop. Grow. Dominate.";

const index = (i) => String(i + 1).padStart(2, "0");

/**
 * What the note card says. The card is placed twice in the tree (under the heading on desktop,
 * after the essay on phones) and only one of the two is displayed at any width.
 */
function NoteContent() {
    return (
        <>
            <p className="type-display italic text-2xl text-ink">{SIGNATURE}</p>
            <p className="mt-3 type-eyebrow text-muted">DevGrowth Solutions · Jabalpur</p>
        </>
    );
}

export default function WorkPhilosophy() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="paper-grain section-pad-tight border-b border-line"
        >
            <Container className="lg:grid lg:grid-cols-[4fr_8fr] lg:gap-20">
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <h2
                        id="about-heading"
                        className="type-display max-w-[16ch] text-3xl text-ink md:text-4xl lg:text-5xl"
                    >
                        We listen before we write code.
                    </h2>
                    <p className="mt-3 type-eyebrow text-muted">How we work · five commitments</p>

                    <Reveal y={16} className="mt-10 hidden lg:mt-12 lg:block">
                        <NoteCard>
                            <NoteContent />
                        </NoteCard>
                    </Reveal>
                </div>

                {/*
                 * The essay. From lg the whole block is indented by the gutter (pl-14) so the
                 * drop-cap intro and the five commitments share one left edge, and each index
                 * hangs in that gutter as a marginal note. Below lg the index runs inline.
                 */}
                <div className="mt-8 max-w-[62ch] lg:mt-0 lg:pl-14">
                    <p className="drop-cap text-base leading-relaxed text-muted lg:text-lg">
                        We are a small product-engineering studio in Jabalpur. Five things we hold ourselves to on
                        every build:
                    </p>

                    <ol className="mt-6 flex flex-col gap-6 text-base leading-relaxed text-muted lg:text-lg">
                        {items.map((item, i) => (
                            <li key={item.id} className="lg:relative">
                                <span className="mr-2 type-mono text-xs text-muted lg:absolute lg:top-2 lg:-left-14">
                                    {index(i)}
                                </span>
                                <strong className="font-sans font-semibold text-ink">{item.title}.</strong>{" "}
                                {item.description.join(" ")}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Phone sign-off: the slip sits bottom-right after the essay, like a signature. */}
                <Reveal y={16} className="mt-10 lg:hidden">
                    <NoteCard className="ml-auto">
                        <NoteContent />
                    </NoteCard>
                </Reveal>
            </Container>
        </section>
    );
}
