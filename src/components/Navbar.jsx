import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "bg-[#0b0f14]/95 backdrop-blur border-b border-white/10"
            : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">

        {/* LEFT */}
        <div className="flex items-center">
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
              <button className={`flex items-center gap-1 transition ${hover}`}>
                Services
                <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-8 w-56 rounded-xl border border-white/10 bg-[#0e1520] shadow-xl overflow-hidden text-white/80">
                  {[
                    "UI / UX Design",
                    "Web Development",
                    "App Development",
                    "Deployment & Hosting",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#services"
                      className="block px-5 py-3 text-sm hover:bg-white/5"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#projects" className={`transition ${hover}`}>Projects</a>
            <a href="#about" className={`transition ${hover}`}>About</a>
            <a href="#contact" className={`transition ${hover}`}>Contact</a>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center">

          {/* CTA */}
          <button
            className={`hidden lg:inline-flex rounded-lg px-5 py-2 text-sm font-medium transition
              ${
                scrolled
                  ? "bg-[#4da3ff] text-white hover:bg-[#2f7fe6]"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            Get Started
          </button>

          {/* MOBILE BTN */}
          <button
            onClick={() => setOpen(!open)}
            className={`ml-4 inline-flex lg:hidden items-center justify-center rounded-md p-2 ${textMain}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#0b0f14] border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-6 text-sm font-medium text-white/80">

            <details>
              <summary className="flex cursor-pointer items-center justify-between">
                Services
                <ChevronDown size={16} />
              </summary>
              <div className="mt-3 flex flex-col gap-2 pl-4 text-white/70">
                <a onClick={() => setOpen(false)} href="#services">UI / UX Design</a>
                <a onClick={() => setOpen(false)} href="#services">Web Development</a>
                <a onClick={() => setOpen(false)} href="#services">App Development</a>
                <a onClick={() => setOpen(false)} href="#services">Deployment & Hosting</a>
              </div>
            </details>

            <a onClick={() => setOpen(false)} href="#projects">Projects</a>
            <a onClick={() => setOpen(false)} href="#about">About</a>
            <a onClick={() => setOpen(false)} href="#contact">Contact</a>

            <button className="mt-4 rounded-lg bg-[#4da3ff] text-white py-3 hover:bg-[#2f7fe6] transition">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

