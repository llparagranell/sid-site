import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../constants/servicesData";
import { industries } from "../constants/industryData";
import footerLogo from "../assets/footerLogo-removebg-preview.png";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

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

const COMPANY_LINKS = [
    { label: "About Us", to: "/about" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Blog", to: "/blog" },
];

export default function Footer() {
    return (
        <footer className="relative bg-brand-dark text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/40 to-black opacity-80 pointer-events-none" />

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,.05) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 pt-24">

                {/* Animated Top Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-px w-full mb-20 origin-left bg-gradient-to-r from-brand-accent via-indigo-400/40 to-transparent"
                />

                <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-12">

                    {/* Brand Section */}
                    <motion.div {...fadeUp(0)} className="lg:col-span-4 flex flex-col gap-10">

                        {/* Bigger Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="h-44 w-44 md:h-52 md:w-52"
                        >
                            <img
                                src={footerLogo}
                                alt="DevGrowth Solutions Logo"
                                className="h-full w-full object-contain drop-shadow-[0_10px_30px_rgba(79,70,229,0.35)]"
                            />
                        </motion.div>

                        <p className="text-sm text-white/60 max-w-sm leading-relaxed font-medium">
                            Building digital products that scale — from idea to launch and beyond.
                        </p>

                        {/* Contact */}
                        <ul className="space-y-4">
                            {[
                                { Icon: Phone, text: "+91 62600 45626" },
                                { Icon: Mail, text: "contact@devgrowth.com" },
                                { Icon: MapPin, text: "Jabalpur, Madhya Pradesh, India" },
                            ].map(({ Icon, text }) => (
                                <li key={text} className="flex items-start gap-4 group">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[.05] ring-1 ring-white/10 group-hover:bg-brand-accent/20 transition">
                                        <Icon size={16} className="text-white/70 group-hover:text-brand-accent" />
                                    </span>
                                    <span className="text-sm text-white/60 group-hover:text-white transition">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Dynamic Link Columns */}
                    {[
                        { title: "Services", data: services.slice(0, 6) },
                        { title: "Industries", data: industries.slice(0, 6) },
                        { title: "Company", data: COMPANY_LINKS }
                    ].map((section, idx) => (
                        <motion.div key={section.title} {...fadeUp(0.1 + idx * 0.1)} className="lg:col-span-2">
                            <h4 className="mb-6 text-xs uppercase tracking-[0.25em] font-bold text-white/40">
                                {section.title}
                            </h4>

                            <ul className="space-y-3">
                                {section.data.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            to={item.path || item.to || "/"}
                                            className="relative text-sm font-semibold text-white/55 hover:text-white transition group"
                                        >
                                            {item.title || item.label}
                                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Social Section */}
                    <motion.div {...fadeUp(0.4)} className="lg:col-span-2 flex flex-col gap-8">
                        <div>
                            <h4 className="mb-6 text-xs uppercase tracking-[0.25em] font-bold text-white/40">
                                Follow Us
                            </h4>

                            <ul className="space-y-4">
                                {SOCIAL.map(({ icon: Icon, label, href }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 text-sm font-semibold text-white/55 hover:text-white transition"
                                        >
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[.05] ring-1 ring-white/10 group-hover:bg-brand-accent transition-all duration-300 group-hover:scale-110">
                                                <Icon size={16} />
                                            </span>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-20 border-t border-white/10 py-8 text-center text-xs text-white/40"
                >
                    © {new Date().getFullYear()} DevGrowth Solutions. Crafted with precision.
                </motion.div>

            </div>
        </footer>
    );
}