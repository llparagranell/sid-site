import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "../constants/servicesData";

const TiltCard = ({ service, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Icon = service.icon;

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative h-[480px] w-full group overflow-hidden rounded-[32px] bg-white border border-brand-dark/5 shadow-sm transition-colors duration-500 hover:border-brand-dark/10"
        >
            {/* Spotlight Gradient */}
            <motion.div
                style={{
                    background: useTransform(
                        [mouseXSpring, mouseYSpring],
                        ([mx, my]) => `radial-gradient(600px circle at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, rgba(30, 27, 121, 0.06), transparent 40%)`
                    ),
                }}
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative z-10 h-full p-8 flex flex-col"
            >
                {/* Icon Section */}
                <div className="mb-8 p-1.5 inline-block rounded-2xl bg-brand-bg/50 border border-brand-dark/5 group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-500 shadow-sm">
                    <div className="h-14 w-14 rounded-xl bg-brand-dark text-white flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-all duration-500">
                        <Icon size={24} />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/30 group-hover:text-brand-dark/50 transition-colors">
                            {String(index + 1).padStart(2, "0")} / Service
                        </span>
                        <div className="h-[1px] w-8 bg-brand-dark/10 group-hover:bg-brand-dark/20 transition-colors" />
                    </div>

                    <h3 className="text-2xl font-black text-brand-dark mb-4 leading-none tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                        {service.title}
                    </h3>

                    <p className="text-brand-dark/60 text-sm leading-relaxed mb-8 group-hover:text-brand-dark/80 transition-colors">
                        {service.desc}
                    </p>

                    <ul className="space-y-4">
                        {service.points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-[11px] font-bold text-brand-dark/40 group-hover:text-brand-dark transition-all duration-500 group-hover:translate-x-2" style={{ transitionDelay: `${idx * 50}ms` }}>
                                <div className="h-1 w-1 rounded-full bg-brand-dark/40 group-hover:bg-brand-dark group-hover:scale-150 transition-all duration-500" />
                                <span className="uppercase tracking-widest">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Corner Detail */}
                <div className="pt-6 border-t border-brand-dark/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-brand-dark">Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-dark/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
};

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">
            {/* Background Transitions / Grids */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(30, 27, 121, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 27, 121, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

                {/* Heading Block */}
                <div className="bg-brand-accent/10 rounded-[40px] md:rounded-[60px] p-8 md:p-20 mb-16 relative overflow-hidden border border-brand-dark/5">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-brand-dark pointer-events-none">
                        <Sparkles size={200} />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block mb-6 rounded-full border border-brand-dark/10 bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
                            Our Expertise
                        </span>

                        <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tighter">
                            We build the <br className="hidden sm:block" />
                            <span className="text-brand-dark italic font-light">
                                Future of Digital
                            </span>
                        </h2>

                        <p className="mt-8 text-brand-dark/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            From rapid MVP development to enterprise-level architecture,
                            we deliver high-performance solutions tailored for growth.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <TiltCard key={i} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
