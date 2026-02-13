// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useRef, useEffect } from "react";
// import video from "../assets/video.mp4";

// const particles = Array.from({ length: 10 });

// export default function Hero() {
//     const videoRef = useRef(null);

//     // ✅ autoplay once on load
//     useEffect(() => {
//         const v = videoRef.current;
//         if (!v) return;

//         v.play().catch(() => {});
//     }, []);

//     const handleEnter = () => {
//         videoRef.current?.play();
//     };

//     const handleLeave = () => {
//         if (videoRef.current) {
//             videoRef.current.pause();
//             videoRef.current.currentTime = 0;
//         }
//     };

//     return (
//         <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0f14] text-[#e6eefb]">

//             {/* Grid */}
//             <div
//                 className="absolute inset-0 z-0 opacity-[0.07]"
//                 style={{
//                     backgroundImage: `
//             linear-gradient(to right, rgba(0,127,255,0.12) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(0,127,255,0.12) 1px, transparent 1px)
//           `,
//                     backgroundSize: "48px 48px",
//                 }}
//             />

//             {/* Blob */}
//             <motion.div
//                 animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
//                 transition={{ duration: 28, repeat: Infinity }}
//                 className="absolute -top-1/3 left-1/4 z-[1] h-[520px] w-[520px] rounded-full bg-[#4da3ff]/20 blur-[140px]"
//             />

//             {/* Particles */}
//             {particles.map((_, i) => (
//                 <motion.span
//                     key={i}
//                     animate={{ y: [0, -40, 0], x: [0, i % 2 ? -20 : 20, 0] }}
//                     transition={{ duration: 16 + i * 2, repeat: Infinity }}
//                     className="absolute z-[2] h-2 w-2 rounded-full bg-[#4da3ff]/25"
//                     style={{
//                         top: `${10 + i * 7}%`,
//                         left: `${15 + (i % 5) * 15}%`,
//                     }}
//                 />
//             ))}

//             {/* Layout */}
//             <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

//                 {/* LEFT */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                 >
//                     <span className="inline-block rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-4 py-1 text-sm text-[#e6eefb]/80 backdrop-blur">
//                         Digital Design & Development Studio
//                     </span>

//                     <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05]">
//                         We create{" "}
//                         <span className="font-light text-[#4da3ff]">
//                             meaningful
//                         </span>{" "}
//                         digital experiences
//                     </h1>

//                     <p className="mt-8 max-w-xl text-lg text-[#e6eefb]/70 leading-relaxed">
//                         A creative web development agency focused on thoughtful design,
//                         scalable technology, and long-term partnerships.
//                     </p>

//                     <div className="mt-12">
//                         <a
//                             href="#contact"
//                             className="group inline-flex items-center gap-2 rounded-xl bg-[#4da3ff] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2f7fe6]"
//                         >
//                             Start a project
//                             <ArrowRight
//                                 size={16}
//                                 className="transition-transform group-hover:translate-x-1"
//                             />
//                         </a>
//                     </div>
//                 </motion.div>

//                 {/* RIGHT VIDEO — 10% smaller */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1 }}
//                     className="relative mx-auto w-full max-w-lg"   
//                     onMouseEnter={handleEnter}
//                     onMouseLeave={handleLeave}
//                 >
//                     <div className="overflow-hidden rounded-2xl border border-[#4da3ff]/20 bg-[#0e1520] shadow-2xl shadow-[#4da3ff]/20">
//                         <video
//                             ref={videoRef}
//                             src={video}
//                             muted
//                             playsInline
//                             onEnded={() => videoRef.current?.pause()}  // stop after first play
//                             className="w-full h-full object-cover transition duration-500 hover:scale-[1.03]"
//                         />
//                     </div>
//                 </motion.div>

//             </div>
//         </section>
//     );
// }
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import video from "../assets/Robot_Vid.mp4";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0f14] text-white flex items-center">

      {/* ================= BACKGROUND ================= */}

      {/* Video (Desktop only) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-50 hidden lg:block"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Fallback / Mobile Background - Animated Blob */}
      <div className="absolute inset-0 z-0 lg:opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]"
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#4da3ff 1px, transparent 1px), linear-gradient(90deg, #4da3ff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* ✅ Premium overlays */}
      <div className="absolute inset-0 z-[1] bg-black/40 lg:bg-black/20" />

      {/* ✅ Directional gradients for text focus */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-[2] bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/3 z-[2] bg-gradient-to-l from-black/60 to-transparent lg:block hidden" />

      {/* ================= FLOAT PARTICLES ================= */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -60, 0],
            x: [0, i % 2 ? -30 : 30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute z-[3] h-1 w-1 rounded-full bg-blue-400/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* ================= CONTENT ================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-16 lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div variants={itemVariants} className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-300 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              DevGrowth Studio
            </motion.span>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Intelligent <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-light"
              >
                Digital Systems
              </motion.span>
            </h1>

            <p className="text-white/70 max-w-lg text-lg sm:text-xl leading-relaxed">
              We engineer high-performance platforms and bespoke digital experiences
              that scale with your ambition.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-10 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500  w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </motion.a>

              <a
                href="#services"
                className="text-white/60 hover:text-white font-medium transition-colors py-3 underline underline-offset-8 decoration-white/20 hover:decoration-white/100"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT (Desktop only visual balance or smaller side text) */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex flex-col items-end text-right space-y-10"
          >
            <div className="space-y-4 max-w-xs">
              <h3 className="text-3xl font-semibold text-white/90">Built for Scale</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Our architecture focuses on long-term sustainability and performance under load.
              </p>
            </div>

            <div className="space-y-4 max-w-xs">
              <h3 className="text-3xl font-semibold text-white/90">AI-Ready Architecture</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Intelligent data layers built for the next generation of digital products.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2.4, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="text-white/40 hover:text-white transition-colors" size={32} />
      </motion.div>

    </section>
  );
}

