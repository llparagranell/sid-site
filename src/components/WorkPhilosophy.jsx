import { useEffect, useState } from "react";
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

    useEffect(() => {
        const sections = document.querySelectorAll("[data-section]");

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
            { threshold: 0.45 }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="bg-brand-bg relative py-16 sm:py-32">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="mx-auto max-w-7xl px-6 sm:px-16 relative z-10">

                {/* ===== Header (Sticky) ===== */}
                <div className="sticky top-24 z-30 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-dark/10 pb-6 mb-16">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest text-xs">
                            Our Work Philosophy
                        </h2>
                        <span className="text-4xl font-light text-brand-dark italic">
                            {String(items.indexOf(active) + 1).padStart(2, "0")}
                        </span>
                    </div>
                </div>

                {/* ===== Grid ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* ===== LEFT SIDEBAR (STICKY on Desktop) ===== */}
                    <div className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-52">
                            <ul className="space-y-6">
                                {items.map((item) => (
                                    <li key={item.id}>
                                        <span
                                            className={`block border-b pb-2 text-sm font-bold transition-all ${active.id === item.id
                                                ? "text-brand-dark border-brand-dark translate-x-1"
                                                : "text-brand-muted border-brand-dark/10 hover:text-brand-dark/60"
                                                }`}
                                        >
                                            {item.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ===== CENTER CONTENT (SCROLLS) ===== */}
                    <div className="lg:col-span-6 space-y-24 md:space-y-32 lg:space-y-40">
                        {items.map((item) => (
                            <div key={item.id} data-section={item.id} className="min-h-[50vh] lg:min-h-[75vh]">
                                <h3 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight">
                                    {item.title}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:block">
                                    <div>
                                        {item.description.map((text, i) => (
                                            <p
                                                key={i}
                                                className="text-brand-dark/70 leading-relaxed mb-6 text-lg font-medium"
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="lg:hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-48 w-full rounded-2xl object-cover mb-10 shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ===== RIGHT IMAGE (STICKY) ===== */}
                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-52">
                            <motion.img
                                key={active.image}
                                src={active.image}
                                alt={active.title}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="h-[450px] w-full rounded-[32px] object-cover shadow-2xl shadow-brand-dark/10 grayscale hover:grayscale-0 transition-all duration-700 border border-brand-dark/5"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
