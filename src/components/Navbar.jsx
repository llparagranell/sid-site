import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`flex h-14 md:h-16 w-full max-w-5xl items-center justify-between rounded-xl md:rounded-2xl px-4 md:px-6 transition-all duration-500 border ${scrolled
          ? "bg-[#0b0f14]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-blue-500/10"
          : "bg-[#0b0f14]/40 backdrop-blur-md border-white/5"
          }`}
      >
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-110"
          />
          {/* <span className="text-lg font-bold tracking-tight text-white">
            DevGrowth <span className="font-light text-blue-400">Solutions</span>
          </span> */}
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
          >
            Get Started
          </motion.button>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-6 right-6 bg-[#0e1520] border border-white/10 rounded-2xl overflow-hidden md:hidden z-40"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-white/80"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white">
                Get Started
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

