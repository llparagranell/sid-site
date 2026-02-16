import { motion } from "framer-motion";
import { Layers, PenTool, Sparkles, Zap, ExternalLink } from "lucide-react";

const FloatingCard = ({ children, x, y, delay = 0, glowColor = "rgba(0, 0, 0, 0.05)", layoutId }) => (
  <motion.div
    layoutId={layoutId}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotate: [0, 2, 0]
    }}
    transition={{
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
      rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      layout: { duration: 0.8, ease: "easeInOut" }
    }}
    style={{ position: 'absolute', left: x, top: y }}
    whileHover={{ scale: 1.1, rotate: 0, transition: { duration: 0.2 } }}
    className="z-20"
  >
    <div className="relative group">
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: glowColor }}
      />
      <div className="relative bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
        {children}
      </div>
    </div>
  </motion.div>
);

const FloatingIcon = ({ icon: Icon, x, y, delay = 0, color = "text-brand-dark/20", size = 24 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.2, 1],
      y: [0, -20, 0],
      x: [0, 10, 0],
    }}
    transition={{
      duration: 5 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    style={{ position: 'absolute', left: x, top: y }}
    className={`hidden lg:block z-0 pointer-events-none ${color}`}
  >
    <Icon size={size} />
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-bg text-brand-dark flex items-center justify-center py-20 mt-8">

      {/* Decorative Floating Icons */}
      <FloatingIcon icon={Sparkles} x="10vw" y="25vh" delay={0.5} size={32} />
      <FloatingIcon icon={Zap} x="85vw" y="20vh" delay={1.2} size={28} />
      <FloatingIcon icon={Layers} x="15vw" y="70vh" delay={2} size={36} />
      <FloatingIcon icon={PenTool} x="80vw" y="65vh" delay={0.8} size={30} />
      <FloatingIcon icon={Sparkles} x="50vw" y="15vh" delay={2.5} size={20} />
      <FloatingIcon icon={Zap} x="45vw" y="80vh" delay={1.8} size={24} />
      <FloatingIcon icon={Layers} x="90vw" y="45vh" delay={3} size={22} />
      <FloatingIcon icon={PenTool} x="5vw" y="50vh" delay={0.2} size={26} />

      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 blur-[1px] opacity-60">
          {/* Vertical Lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #64748b4a 0.5px, transparent 0.5px)`,
              backgroundSize: '60px 100%'
            }}
          />
          {/* Horizontal Lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, #64748b4a 0.5px, transparent 0.5px)`,
              backgroundSize: '100% 60px'
            }}
          />
        </div>
      </div>

      {/* Radial Glow Center */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-0 opacity-20 blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.1) 20%, rgba(79, 70, 229, 0) 70%)"
        }}
      />

      {/* Floating Cards */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <FloatingCard x="15vw" y="18vh" delay={0} layoutId="icon-Layers">
          <Layers size={32} className="text-brand-dark" />
        </FloatingCard>

        <FloatingCard x="8vw" y="62vh" delay={1.5} layoutId="icon-PenTool">
          <PenTool size={32} className="text-brand-dark" />
        </FloatingCard>

        <FloatingCard x="82vw" y="12vh" delay={0.8} layoutId="icon-Sparkles">
          <Sparkles size={32} className="text-brand-dark" />
        </FloatingCard>

        <FloatingCard x="88vw" y="58vh" delay={2.2} layoutId="icon-Zap">
          <Zap size={32} className="text-brand-dark" />
        </FloatingCard>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Blurry Background Circle for Emphasis */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-brand-dark leading-[0.95] md:leading-[0.9]"
        >
          Engineering MVPs<br />
          <span className="text-brand-dark/90">That Matter.</span>
        </motion.h1>

        {/* Description */}
        <div className="mt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-dark/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-medium"
          >
            We craft scalable MVPs delivering UX, rapid launches, validation, and business growth.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark/90 transition-all shadow-[0_20px_40px_rgba(48,54,79,0.1)] overflow-hidden"
          >
            <span className="relative z-10">Get Started Today</span>
            <ExternalLink size={18} className="relative z-10 text-brand-muted group-hover:text-white transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-muted to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
