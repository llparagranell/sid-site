import Container from "./ui/Container";
import HandUnderline from "./ui/HandUnderline";

/**
 * #stack — a table. The <caption> is the h2 (serif, hand-drawn accent underline under "not")
 * with a mono annotation derived from the data; six rows follow with the category as a row
 * header and the tools typeset as a sentence. Static: no reveal, no tabs, no chips.
 *
 * On a phone the note sits under the tools inside the same cell; from lg it moves to a third
 * column so the row reads category | tools | note. The table and the closing aside share one
 * 960px column at lg, so the right-aligned aside closes on the table's right edge rather than
 * drifting to the wider Container edge.
 */
const CATEGORIES = [
    {
        id: "frontend",
        label: "Frontend",
        note: "Component-driven interfaces, server-rendered where it helps.",
        items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
        id: "backend",
        label: "Backend",
        note: "APIs and data layers that stay simple to run.",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
        id: "mobile",
        label: "Mobile",
        note: "One codebase for iOS and Android when the product allows it.",
        items: ["React Native", "Flutter"],
    },
    {
        id: "cloud",
        label: "Cloud & DevOps",
        note: "Managed services first, custom infrastructure only when needed.",
        items: ["AWS", "Google Cloud", "Git"],
    },
    {
        id: "platforms",
        label: "Platforms",
        note: "Where a proven platform beats a custom build.",
        items: ["WordPress", "Shopify"],
    },
    {
        id: "ai",
        label: "AI & automation",
        note: "n8n runs the workflows. LLM features wired into real product flows, Python for the data work.",
        items: ["n8n", "LLM integrations", "Python"],
    },
];

const TOOL_COUNT = CATEGORIES.reduce((n, c) => n + c.items.length, 0); // 20

export default function TechStack() {
    return (
        <section
            id="stack"
            aria-labelledby="stack-heading"
            className="band-light section-pad-tight border-b border-line"
        >
            <Container>
                <div className="lg:max-w-[960px]">
                    <table className="w-full border-collapse">
                        <caption className="caption-top pb-6 text-left">
                            <h2
                                id="stack-heading"
                                className="type-display max-w-[16ch] text-3xl text-ink md:text-4xl lg:text-5xl"
                            >
                                Chosen per project, <HandUnderline>not</HandUnderline> a fixed menu.
                            </h2>
                            <p className="type-mono mt-3 text-xs text-muted">
                                {TOOL_COUNT} tools · {CATEGORIES.length} categories
                            </p>
                        </caption>
                        <tbody>
                            {CATEGORIES.map((c) => (
                                <tr key={c.id} className="border-t border-line last:border-b">
                                    <th
                                        scope="row"
                                        className="type-mono w-[6.5rem] py-4 pr-3 text-left align-top text-xs font-medium leading-relaxed text-muted lg:w-[12rem] lg:py-5"
                                    >
                                        {c.label}
                                    </th>
                                    <td className="py-4 align-top lg:py-5">
                                        <p className="text-base leading-snug text-ink lg:text-lg">{c.items.join(", ")}</p>
                                        <p className="type-display mt-1.5 text-[17px] italic leading-snug text-muted lg:hidden">
                                            {c.note}
                                        </p>
                                    </td>
                                    <td className="type-display hidden w-[22rem] py-5 pl-10 align-top text-lg italic leading-snug text-muted lg:table-cell">
                                        {c.note}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p className="type-display mt-8 max-w-[40ch] text-xl italic leading-snug text-muted lg:ml-auto lg:text-right">
                        Boring where it should be boring, modern where it pays off. This is what we reach for most.
                    </p>
                </div>
            </Container>
        </section>
    );
}
