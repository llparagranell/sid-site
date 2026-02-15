import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
  // ✅ Load UnicornStudio (replacement for your embed script)
  useEffect(() => {
    const init = () => window.UnicornStudio?.init();

    if (window.UnicornStudio && window.UnicornStudio.init) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0f14] text-white flex items-center justify-center">

      {/* ===== 3D MODEL BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        <div
          data-us-project="0kAWlXiBhnD3sXh4vqI3"
          className="w-full h-full"
        />
      </div>

      {/* ===== DARK OVERLAY FOR TEXT READABILITY ===== */}
      <div className="absolute inset-0 z-[1] bg-[#0b0f14]/60" />

      {/* ===== GRID OVERLAY ===== */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#4da3ff 1px, transparent 1px), linear-gradient(90deg,#4da3ff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ===== CONTENT CENTER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-xs uppercase tracking-wider text-blue-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          DevGrowth Solutions
        </span>

        {/* ✅ smaller centered heading */}
        <h1 className="mt-6 text-4xl sm:text-5xl xl:text-7xl font-bold leading-tight px-2">
          Engineering MVPs{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            That Matter
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-lg px-4 sm:px-0">
          We design and launch scalable MVP products with strong UX,
          rapid validation, and business-first architecture.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3 font-semibold shadow-lg shadow-blue-500/20"
          >
            Get Started
            <ArrowRight size={18} />
          </motion.a>

          <a
            href="#services"
            className="text-white/70 hover:text-white underline underline-offset-8"
          >
            Explore Services
          </a>
        </div>
      </motion.div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <ChevronDown size={28} className="text-white/40 hover:text-white" />
      </motion.div>

    </section>
  );
}
