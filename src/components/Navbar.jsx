import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ THEME SWITCH
  const textMain = scrolled ? "text-white" : "text-white";
  const textSub = scrolled ? "text-white/70" : "text-white/80";
  const hover = scrolled ? "hover:text-[#4da3ff]" : "hover:text-white";

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${scrolled
          ? "bg-[#0b0f14]/95 py-0 backdrop-blur border-b border-white/10"
          : "bg-transparent py-2"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <h1 className={`text-xl font-semibold tracking-tight ${textMain}`}>
            DevGrowth
          </h1>

          {/* DESKTOP NAV */}
          <nav className={`ml-10 hidden lg:flex items-center gap-8 text-sm font-medium ${textSub}`}>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <motion.button
                whileHover={{ y: -1 }}
                className={`flex items-center gap-1 transition ${hover}`}
              >
                Services
                <ChevronDown size={16} />
              </motion.button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-8 w-56 rounded-xl border border-white/10 bg-[#0e1520] shadow-xl overflow-hidden text-white/80"
                  >
                    {[
                      "UI / UX Design",
                      "Web Development",
                      "App Development",
                      "Deployment & Hosting",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#services"
                        className="block px-5 py-3 text-sm hover:bg-white/5 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -1 }}
                className={`transition ${hover}`}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:inline-flex rounded-lg px-5 py-2 text-sm font-medium transition
              ${scrolled
                ? "bg-[#4da3ff] text-white hover:bg-[#2f7fe6]"
                : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            Get Started
          </motion.button>

          {/* MOBILE BTN */}
          <button
            onClick={() => setOpen(!open)}
            className={`ml-4 inline-flex lg:hidden items-center justify-center rounded-md p-2 ${textMain}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 bottom-0 z-[49] lg:hidden bg-[#0b0f14]/98 backdrop-blur-xl border-t border-white/5 overflow-y-auto"
          >
            <nav className="flex flex-col px-8 py-12 gap-8 text-lg font-medium text-white/90">

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between list-none">
                    <span className="text-xl">Services</span>
                    <ChevronDown size={20} className="transition-transform group-open:rotate-180 text-blue-400" />
                  </summary>
                  <div className="mt-5 flex flex-col gap-4 pl-4 text-white/60 border-l border-white/10 ml-1">
                    <a onClick={() => setOpen(false)} href="#services" className="hover:text-blue-400 transition-colors">UI / UX Design</a>
                    <a onClick={() => setOpen(false)} href="#services" className="hover:text-blue-400 transition-colors">Web Development</a>
                    <a onClick={() => setOpen(false)} href="#services" className="hover:text-blue-400 transition-colors">App Development</a>
                    <a onClick={() => setOpen(false)} href="#services" className="hover:text-blue-400 transition-colors">Deployment & Hosting</a>
                  </div>
                </details>
              </motion.div>

              {[
                { name: "Projects", href: "#projects" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  onClick={() => setOpen(false)}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 rounded-2xl bg-blue-600 text-white py-5 text-base font-semibold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20"
              >
                Get Started
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-auto pt-10 text-white/30 text-sm text-center"
              >
                &copy; {new Date().getFullYear()} DevGrowth. High Performance Digital.
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

