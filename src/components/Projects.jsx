import Container from "./ui/Container";
import Button from "./ui/Button";
import Stamp from "./ui/Stamp";
import PhoneFrame from "./ui/PhoneFrame";
import { scrollToTarget } from "../lib/scroll";
import goseva from "../assets/goseva.webp";
import upasthit from "../assets/upasthit.webp";
import swadeit from "../assets/swadeit.webp";

const projects = [
    {
        id: "swadeit",
        title: "Swadeit",
        desc: "Buy and sell products locally, within your city.",
        tech: ["React Native", "Express", "MongoDB"],
        img: swadeit,
        alt: "Swadeit app icon",
        packageId: "in.swadeit.app",
        url: "https://play.google.com/store/apps/details?id=in.swadeit.app",
    },
    {
        id: "upasthit",
        title: "Upasthit",
        desc: "Attendance tracking built for LNCT students.",
        tech: ["React Native", "Express", "PostgreSQL"],
        img: upasthit,
        alt: "Upasthit app icon",
        packageId: "com.upasthit.app",
        url: "https://play.google.com/store/apps/details?id=com.upasthit.app&hl=en_US",
    },
    {
        id: "goseva",
        title: "Sri Govinduni Goseva",
        desc: "Order Desi-cow and natural farming products.",
        tech: ["React Native", "Express", "PostgreSQL"],
        img: goseva,
        alt: "Sri Govinduni Goseva app icon",
        packageId: "com.goseva.customer",
        url: "https://play.google.com/store/apps/details?id=com.goseva.customer",
    },
];

const CAPTION = "Three products, live today.";
const LEDE = "Built end to end with the founders behind them — design, engineering, launch.";
const ANNOTATION = "N° 01 – 03 · built end to end";

/**
 * #work — a rubber stamp over a strip of phone frames; the heading is a caption after the object.
 *
 * Phone (390): stamp, mono annotation, a swipe strip (three frames + a dashed "Your product here"
 * frame carrying the CTA), then the h2 and lede. There is one h2 in the DOM. The wrapper is a flex
 * column on phones and `order` places the strip between the annotation and the caption visually,
 * while the DOM (what a screen reader and heading navigation get) stays stamp → h2 → lede →
 * annotation → strip. Nothing between the h2 and the strip is focusable, so tab order is unchanged.
 *
 * From lg the wrapper is a two-column grid: stamp, h2, lede and a ghost Button on the left; the
 * strip on the right with the annotation typed beneath it as a plate caption (mono never sits above
 * an h2). The strip keeps scrolling inside its column and bleeds to the viewport edge, because three
 * 220px frames need 708px and a 7fr column has less below 1280. From xl the right track is
 * content-sized, the strip stops scrolling and the middle frame lifts 24px.
 *
 * No motion: native scroll-snap only.
 */
export default function Projects() {
    const startProject = () => scrollToTarget("#contact");

    return (
        <section
            id="work"
            aria-labelledby="work-heading"
            className="band-dark section-pad-tight overflow-clip border-b border-line-dark"
        >
            <Container>
                <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-x-12 xl:grid-cols-[minmax(0,1fr)_auto]">
                    {/* Left column from lg. On phones `contents` hands its children to the flex column
                        so `order` can slot the strip between the stamp and the caption. */}
                    <div className="contents lg:col-start-1 lg:row-start-1 lg:row-end-3 lg:block">
                        {/* The div keeps the inline-block stamp shrink-to-fit; as a bare flex item it would stretch. */}
                        <div>
                            <Stamp tone="dark">Live on Google Play</Stamp>
                        </div>

                        <h2
                            id="work-heading"
                            className="type-display order-3 mt-8 max-w-[14ch] text-3xl text-paper md:text-4xl lg:mt-10 lg:text-5xl xl:text-6xl"
                        >
                            {CAPTION}
                        </h2>
                        <p className="order-4 mt-3 max-w-[44ch] text-base leading-relaxed text-muted-dark lg:mt-4 lg:text-lg">
                            {LEDE}
                        </p>
                        <div className="mt-8 hidden lg:block">
                            <Button tone="dark" variant="ghost" arrow onClick={startProject}>
                                Start a project
                            </Button>
                        </div>
                    </div>

                    <p className="type-mono order-1 mt-3 text-xs text-muted-dark lg:col-start-2 lg:row-start-2">
                        {ANNOTATION}
                    </p>

                    <ul
                        aria-label="Selected work"
                        data-lenis-prevent=""
                        className="scrollbar-hide order-2 -mx-6 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 py-2 md:-mx-10 md:scroll-pl-10 md:px-10 lg:col-start-2 lg:row-start-1 lg:-mr-14 lg:-ml-2 lg:mt-0 lg:gap-6 lg:scroll-pl-2 lg:pr-14 lg:pl-2 xl:mr-0 xl:overflow-visible xl:pr-0"
                    >
                        {projects.map((project, index) => (
                            <li key={project.id} className={index === 1 ? "shrink-0 snap-start xl:-translate-y-6" : "shrink-0 snap-start"}>
                                <PhoneFrame
                                    icon={project.img}
                                    alt={project.alt}
                                    name={project.title}
                                    tagline={project.desc}
                                    stack={project.tech}
                                    packageId={project.packageId}
                                    url={project.url}
                                />
                            </li>
                        ))}
                        <li className="shrink-0 snap-start lg:hidden">
                            <div className="flex h-[440px] w-[220px] flex-col justify-center gap-4 rounded-[28px] border border-dashed border-line-dark p-6">
                                <p className="type-display text-2xl text-paper">Your product here.</p>
                                <p className="text-sm leading-relaxed text-muted-dark">We take on a small number of builds at a time.</p>
                                <Button tone="dark" variant="ghost" className="min-h-11 w-full" onClick={startProject}>
                                    Start a project
                                </Button>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}
