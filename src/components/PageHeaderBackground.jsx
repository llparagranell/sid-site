import { motion } from "framer-motion";
import { Sparkles, Zap, Layers, PenTool } from "lucide-react";

const FloatingIcon = ({ icon: Icon, x, y, delay = 0, color = "text-brand-dark/10" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
            x: [0, 8, 0],
        }}
        transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay
        }}
        style={{ position: 'absolute', left: x, top: y }}
        className={`z-0 pointer-events-none ${color}`}
    >
        <Icon className="w-5 h-5 md:w-8 md:h-8" />
    </motion.div>
);

export default function PageHeaderBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 blur-[1px] opacity-40">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, #64748b4a 0.5px, transparent 0.5px)`,
                        backgroundSize: '60px 100%'
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #64748b4a 0.5px, transparent 0.5px)`,
                        backgroundSize: '100% 60px'
                    }}
                />
            </div>

            {/* Radial Glow */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
                style={{
                    background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 20%, rgba(79, 70, 229, 0) 70%)"
                }}
            />

            {/* Floating Icons */}
            <FloatingIcon icon={Sparkles} x="10vw" y="20vh" delay={0.1} />
            <FloatingIcon icon={Zap} x="85vw" y="15vh" delay={0.2} />
            <FloatingIcon icon={Layers} x="15vw" y="60vh" delay={0.3} />
            <FloatingIcon icon={PenTool} x="80vw" y="55vh" delay={0.15} />
        </div>
    );
}
