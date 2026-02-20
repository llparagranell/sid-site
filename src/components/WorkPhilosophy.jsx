import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const items = [
    {
        id: "clients",
        title: "Putting Clients First",
        description: [
            "We begin every project by deeply understanding your business goals, users, and challenges.",
            "This ensures the solutions we build are not just technically strong but strategically aligned with your growth and long-term success.",
        ],
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "innovation",
        title: "Innovation Drives Us",
        description: [
            "We adopt modern technologies, efficient development practices, and creative design approaches to deliver future-ready digital products.",
            "Innovation helps us build solutions that remain scalable, competitive, and adaptable.",
        ],
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "partners",
        title: "Partners, Not Vendors",
        description: [
            "We work alongside our clients as technology partners.",
            "Our focus is on building lasting relationships.",
        ],
        image:
            "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "quality",
        title: "Quality & Trust First",
        description: [
            "From clean code architecture to transparent communication.",
            "Reliability and performance come first.",
        ],
        image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "learning",
        title: "Continuous Learning",
        description: [
            "We stay updated with new tools and frameworks.",
            "Modern, efficient solutions always.",
        ],
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
];

export default function WorkPhilosophy() {
    const [active, setActive] = useState(items[0]);
    const scrollRef = useRef(null);

    /* ---- Intersection Observer for Active Section ---- */
    useEffect(() => {
        const sections = scrollRef.current.querySelectorAll("[data-section]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const item = items.find(
                            (i) => i.id === entry.target.dataset.section
                        );
                        if (item) setActive(item);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((s) => observer.observe(s));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            className="bg-brand-bg relative py-16 sm:py-24 overflow-hidden"
        >
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-16 relative z-10">

                {/* ===== Sticky Header ===== */}
                <div className="sticky top-20 z-30 bg-brand-bg/95 backdrop-blur-md border-b border-brand-dark/10 pb-8 mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                                Our Methodology
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tighter">
                                Work <br className="hidden sm:block" />
                                <span className="text-brand-dark italic font-light">
                                    Philosophy
                                </span>
                            </h2>
                        </div>
                        {/* <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-brand-dark uppercase tracking-widest opacity-40">
                                Phase
                            </span>
                            <span className="text-6xl md:text-8xl font-black text-brand-dark/10 leading-none">
                                {String(items.indexOf(active) + 1).padStart(2, "0")}
                            </span>
                        </div> */}
                    </div>
                </div>

                {/* ===== Main Grid Layout ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-auto sm:h-[80vh]">

                    {/* ===== LEFT SIDEBAR (Sticky) ===== */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-82">
                            <ul className="space-y-8">
                                {items.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => {
                                                const el = scrollRef.current.querySelector(`[data-section="${item.id}"]`);
                                                el?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className={`block border-b-2 pb-3 text-[12px] font-black uppercase tracking-[0.2em] transition-all text-left w-full ${active.id === item.id
                                                ? "text-brand-dark border-brand-dark translate-x-2"
                                                : "text-brand-muted border-brand-dark/10 hover:text-brand-dark/40"
                                                }`}
                                        >
                                            {item.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ===== CENTER CONTENT (SCROLLABLE ONLY) ===== */}
                    <div
                        ref={scrollRef}
                        className="lg:col-span-5 overflow-y-auto pr-4 scrollbar-hide"
                    >
                        <div className="space-y-24 py-10">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    data-section={item.id}
                                    className=" flex flex-col justify-center"
                                >
                                    <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight uppercase">
                                        {item.title}
                                    </h3>

                                    <div className="space-y-6">
                                        {item.description.map((text, i) => (
                                            <p
                                                key={i}
                                                className="text-brand-dark/70 leading-relaxed text-lg font-medium"
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Mobile Image */}
                                    <div className="mt-10 lg:hidden rounded-2xl overflow-hidden shadow-xl">
                                        <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== RIGHT IMAGE (Sticky) ===== */}
                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-82">
                            <div className="relative">
                                <motion.div
                                    key={active.image + "_overlay"}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 bg-brand-dark/5 rounded-[40px] z-10 pointer-events-none"
                                />
                                <motion.img
                                    key={active.image}
                                    src={active.image}
                                    alt={active.title}
                                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 0.8, ease: "circOut" }}
                                    className="h-[500px] w-full rounded-[40px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-brand-dark/10 z-0"
                                />
                                <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
