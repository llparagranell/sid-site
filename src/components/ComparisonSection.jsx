import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const withUs = [
    {
        title: "Expert Developer and Designer",
        desc: "Experienced professionals ensuring exceptional quality, best practices, and attention to detail.",
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
        desc: "Future-proof solutions built with the latest tools and best practices.",
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

export default function ComparisonSection() {
    return (
        <section className="bg-[#FBF8F3] py-40">
            <div className="mx-auto max-w-6xl px-8 sm:px-16">

                {/* ================= HEADER ================= */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <span className="iinline-block mb-4 rounded-full bg-black text-white px-4 py-1 text-sm">
                        Why Choose Us
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900">
                        What makes us{" "}
                        <span className="font-light text-gray-500">unique?</span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-600">
                        See the difference between working with industry experts versus
                        settling for less.
                    </p>

                    <a
                        href="#contact"
                        className="group inline-flex mt-10 items-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:bg-gray-900"
                    >
                        Book Your Free Consultation
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </div>

                {/* ================= COMPARISON CARD ================= */}
                <div className="overflow-hidden rounded-[32px] border border-[#E7DDC8] bg-white shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ================= WITH YOU ================= */}
                        <div className="bg-[#F1FAF5] p-12">
                            <div className="mb-10 flex items-center gap-3">
                                <CheckCircle2 className="text-green-600" />
                                <h3 className="text-xl font-semibold text-green-700">
                                    With YourAgency
                                </h3>
                            </div>

                            <ul className="space-y-8">
                                {withUs.map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <CheckCircle2 className="mt-1 text-green-600" size={20} />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                {item.title}
                                            </h4>
                                            <p className="mt-1 text-gray-600">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ================= WITHOUT YOU ================= */}
                        <div className="bg-[#FFF1F1] p-12">
                            <div className="mb-10 flex items-center gap-3">
                                <XCircle className="text-red-500" />
                                <h3 className="text-xl font-semibold text-red-600">
                                    Without YourAgency
                                </h3>
                            </div>

                            <ul className="space-y-8">
                                {withoutUs.map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <XCircle className="mt-1 text-red-500" size={20} />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                {item.title}
                                            </h4>
                                            <p className="mt-1 text-gray-600">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
