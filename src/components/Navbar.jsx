import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, ExternalLink, Box, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../constants/servicesData";
import { industries } from "../constants/industryData";

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- CLICK OUTSIDE CLOSE ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "SERVICES", href: "#services", hasDropdown: true },
    { name: "INDUSTRIES", href: "#industries", hasDropdown: true },
    { name: "ABOUT US", href: "#about" },
    { name: "BLOG", href: "#blog" },
    { name: "CASE STUDIES", href: "#case-studies" },
  ];

  /* ---------------- DROPDOWN ---------------- */
  const DropdownContent = ({ items, type }) => (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-[90%] left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-brand-dark/10 rounded-2xl shadow-2xl overflow-hidden p-2 z-50"
    >
      <div className="grid grid-cols-1 gap-1">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={`#${type}`}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-bg transition-all duration-300 group/item"
            >
              <div className="p-2 bg-brand-dark/5 rounded-lg text-brand-dark group-hover/item:bg-brand-dark group-hover/item:text-white transition-colors">
                <Icon size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-brand-dark tracking-wide">
                  {item.title}
                </div>
                <div className="text-[10px] text-brand-dark/50 line-clamp-1 group-hover/item:text-brand-dark/70 transition-colors">
                  {item.desc}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
        ? "bg-white/80 backdrop-blur-lg border-brand-dark/10 shadow-lg py-3"
        : "bg-white border-transparent py-6"
        }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-12">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          <motion.div
            layout
            className="bg-brand-dark rounded-lg p-1.5 flex items-center justify-center shadow-lg group-hover:shadow-brand-dark/20 transition-all duration-300"
          >
            <Box size={scrolled ? 18 : 22} className="text-brand-bg" />
          </motion.div>
          <span
            className={`font-bold tracking-tight text-brand-dark transition-all duration-300 ${scrolled ? "text-lg" : "text-xl"
              }`}
          >
            Devgrowthsolutions
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative flex items-center h-full group"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="relative flex items-center gap-1 text-[12px] font-bold text-brand-dark/60 hover:text-brand-dark transition-all duration-300 tracking-widest px-1 py-4"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                  />
                )}
                {/* Fixed Underline Animation */}
                <span className={`absolute bottom-2 left-0 h-0.5 bg-brand-dark transition-all duration-300 origin-left ${activeDropdown === link.name ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </a>

              <AnimatePresence>
                {activeDropdown === link.name && (
                  <DropdownContent
                    items={link.name === "SERVICES" ? services : industries}
                    type={link.name === "SERVICES" ? "services" : "industries"}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookClick}
            className={`flex items-center gap-2 font-bold text-brand-dark hover:opacity-70 transition-all cursor-pointer ${scrolled ? "text-xs" : "text-sm"}`}
          >
            <Sparkles size={scrolled ? 14 : 16} className="opacity-50" />
            Book Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 rounded-full bg-brand-dark text-white font-bold transition-all duration-300 shadow-lg hover:shadow-brand-dark/20 cursor-pointer ${scrolled
              ? "px-5 py-2 text-xs"
              : "px-7 py-3 text-sm"
              }`}
          >
            Get Started
            <ExternalLink size={scrolled ? 14 : 16} />
          </motion.button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-brand-dark p-2 hover:bg-brand-dark/5 rounded-full transition-colors"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-full left-0 right-0 bg-white border-t border-brand-dark/10 shadow-2xl lg:hidden z-40 overflow-y-auto"
          >
            <div className="flex flex-col p-8 gap-8 pb-32">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        setActiveDropdown(
                          activeDropdown === link.name
                            ? null
                            : link.name
                        );
                      } else {
                        setOpen(false);
                      }
                    }}
                    className="flex justify-between items-center text-lg font-black text-brand-dark uppercase tracking-tighter w-full text-left"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        size={24}
                        className={`transition-transform duration-500 ${activeDropdown === link.name
                          ? "rotate-180"
                          : ""
                          }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {link.hasDropdown &&
                      activeDropdown === link.name && (
                        <motion.div
                          key="accordion"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-1 pl-6 border-l-2 border-brand-dark/10 ml-2 overflow-hidden"
                        >
                          {(link.name === "SERVICES"
                            ? services
                            : industries
                          ).map((item, idx) => {
                            const ItemIcon = item.icon;
                            return (
                              <a
                                key={idx}
                                href={`#${link.name === "SERVICES"
                                  ? "services"
                                  : "industries"
                                  }`}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-4 py-4 text-sm font-bold text-brand-dark/60 hover:text-brand-dark transition-colors group"
                              >
                                <div className="p-2 bg-brand-dark/5 rounded-lg group-hover:bg-brand-dark group-hover:text-white transition-colors">
                                  <ItemIcon size={18} />
                                </div>
                                <span>{item.title}</span>
                              </a>
                            );
                          })}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4 flex flex-col gap-4">
                <button className="w-full flex justify-center items-center gap-3 rounded-2xl bg-brand-dark py-5 text-lg font-bold text-white shadow-xl cursor-pointer active:scale-95 transition-transform">
                  Get Started
                  <ExternalLink size={20} />
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex justify-center items-center gap-3 rounded-2xl border-2 border-brand-dark/10 py-5 text-lg font-bold text-brand-dark cursor-pointer active:scale-95 transition-transform hover:border-brand-dark"
                >
                  <Sparkles size={20} className="opacity-50" />
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
