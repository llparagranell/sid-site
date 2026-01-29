import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
    {
        id: "clients",
        title: "Putting Clients First",
        description: [
            "Our mission goes beyond simply delivering IT solutions — we focus on creating real business impact.",
            "Every project begins with listening: understanding your goals, challenges, users, and long-term vision.",
            "We take a consultative approach, helping you make informed technical and design decisions.",
            "By aligning strategy, design, and development, we ensure solutions that scale with your growth.",
            "Your success is the benchmark by which we measure our own performance.",
        ],
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "innovation",
        title: "Innovation is Our Middle Name",
        description: [
            "Technology evolves rapidly, and we make it our responsibility to stay ahead of the curve.",
            "Our team continuously experiments with modern frameworks, tools, and workflows.",
            "Innovation for us isn’t about trends — it’s about choosing the right solutions for the right problems.",
            "We combine creativity with engineering excellence to build future-ready digital products.",
            "This mindset allows us to deliver solutions that remain relevant long after launch.",
        ],
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "partners",
        title: "Partners, Not Vendors",
        description: [
            "We believe great products are built through strong collaboration, not transactional relationships.",
            "Our role extends beyond execution — we think, plan, and solve problems alongside your team.",
            "Transparency, communication, and shared ownership are central to how we work.",
            "We integrate seamlessly into your workflow, acting as an extension of your internal team.",
            "This partnership-driven approach leads to better decisions and stronger outcomes.",
        ],
        image:
            "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "trust",
        title: "Trust & Quality Are Our Foundation",
        description: [
            "Trust is earned through consistency, honesty, and delivering on promises.",
            "We maintain high standards across design, development, testing, and deployment.",
            "Every detail matters — from performance and accessibility to maintainability and security.",
            "We believe quality is not a phase, but a mindset applied throughout the project lifecycle.",
            "Our long-term client relationships are built on reliability and mutual respect.",
        ],
        image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
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

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-[#FBF8F3] py-32">
            <div className="mx-auto max-w-7xl px-8 sm:px-16">

                {/* ================= STICKY HEADER ================= */}
                <div className="sticky top-10 z-30 bg-[#FBF8F3] border-b pb-6 mb-20">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Our Work Philosophy
                        </h2>
                        <span className="text-3xl font-light text-gray-400">
                            {String(items.indexOf(active) + 1).padStart(2, "0")}
                        </span>
                    </div>
                </div>

                {/* ================= LAYOUT ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">

                    {/* LEFT: STICKY NAV */}
                    <div className="lg:col-span-1">
                        <ul className="sticky top-32 space-y-6">
                            {items.map((item) => (
                                <li key={item.id}>
                                    <span
                                        className={`block border-b pb-2 text-sm transition ${active.id === item.id
                                            ? "text-black border-black"
                                            : "text-gray-400 border-gray-200"
                                            }`}
                                    >
                                        {item.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CENTER: SCROLLING CONTENT */}
                    <div className="lg:col-span-2 space-y-40">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                data-section={item.id}
                                className="min-h-[70vh]"
                            >
                                <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                                    {item.title}
                                </h3>

                                {item.description.map((text, i) => (
                                    <p
                                        key={i}
                                        className="text-gray-600 leading-relaxed mb-4"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: STICKY IMAGE (CROPPED 50%) */}
                    <div className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-32">
                            <motion.img
                                key={active.image}
                                src={active.image}
                                alt={active.title}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="h-[260px] w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
