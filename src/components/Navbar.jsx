import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ExternalLink, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "SERVICES", href: "#services", hasDropdown: true },
    { name: "INDUSTRIES", href: "#industries", hasDropdown: true },
    { name: "ABOUT US", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white backdrop-blur-md border-brand-dark/10 shadow-sm py-5`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-dark rounded p-1.5 flex items-center justify-center">
            <Box size={20} className="text-brand-bg" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-dark">
            Devgrowthsolutions
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-[13px] font-bold text-brand-dark/70 hover:text-brand-dark transition-colors tracking-wide"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown size={14} className="text-brand-muted group-hover:text-brand-dark transition-colors" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-lg bg-brand-dark px-6 py-2.5 text-sm font-bold text-white hover:opacity-90 transition-all"
          >
            Get Started
            <ExternalLink size={16} className="text-brand-muted group-hover:text-white" />
          </motion.button>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-brand-dark p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-dark/10 shadow-xl overflow-hidden lg:hidden z-40"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex justify-between items-center text-sm font-bold text-brand-dark uppercase tracking-wide"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </a>
              ))}
              <button className="w-full flex justify-center items-center gap-2 rounded-lg bg-brand-dark py-4 font-bold text-white">
                Get Started
                <ExternalLink size={18} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

