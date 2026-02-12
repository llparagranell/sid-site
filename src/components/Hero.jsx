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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0f14] text-white">

      {/* ================= VIDEO ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover md:object-contain"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* ✅ Softer overlay — improves clarity */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* ✅ Narrower side gradients — text readable but robot visible */}
      <div className="absolute inset-y-0 left-0 w-1/3 md:w-1/4 z-[2] bg-gradient-to-r from-black/70 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/3 md:w-1/4 z-[2] bg-gradient-to-l from-black/70 to-transparent" />

      {/* ================= FLOAT PARTICLES ================= */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -50, 0], x: [0, i % 2 ? -25 : 25, 0] }}
          transition={{ duration: 22 + i, repeat: Infinity }}
          className="absolute z-[3] h-1.5 w-1.5 rounded-full bg-white/20"
          style={{
            top: `${6 + i * 7}%`,
            left: `${10 + (i % 6) * 14}%`,
          }}
        />
      ))}

      {/* ================= CONTENT ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 py-28 sm:px-8 lg:grid-cols-3 lg:gap-12 lg:px-20 lg:py-0"
      >

        {/* LEFT */}
        <motion.div variants={item} className="space-y-6 text-center lg:text-left">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
            DevGrowth Studio
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Intelligent <br />
            <span className="text-blue-400 font-light">
              Digital Systems
            </span>
          </h1>

          <p className="text-white/75 max-w-md mx-auto lg:mx-0">
            Scalable platforms, modern UX, and performance-first
            engineering for ambitious companies.
          </p>
        </motion.div>

        {/* CENTER spacer */}
        <div className="hidden lg:block" />

        {/* RIGHT */}
        <motion.div
          variants={item}
          className="space-y-6 text-center lg:text-right"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Built for <br />
            <span className="text-blue-400 font-light">
              High Growth
            </span>
          </h2>

          <p className="text-white/75 max-w-md mx-auto lg:ml-auto">
            Long-term technology partnerships — not just delivery.
            Strategy + engineering + scale.
          </p>

          <div className="flex justify-center lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-medium text-white hover:bg-blue-500 transition"
            >
              Start a project
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="text-white/60" />
      </motion.div> */}

    </section>
  );
}

