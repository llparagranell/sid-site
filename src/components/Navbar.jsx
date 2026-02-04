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

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
            ${scrolled
                    ? "bg-[#f7fbff]/95 backdrop-blur border-b border-[#007fff]/20"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">

                {/* LEFT */}
                <div className="flex items-center">
                    <h1 className="text-xl font-semibold tracking-tight text-[#0b1b2b]">
                        YourAgency
                    </h1>

                    {/* DESKTOP NAV */}
                    <nav className="ml-10 hidden lg:flex items-center gap-8 text-sm font-medium text-[#0b1b2b]/70">

                        {/* SERVICES */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1 hover:text-[#007fff] transition">
                                Services
                                <ChevronDown size={16} />
                            </button>

                            {servicesOpen && (
                                <div className="absolute left-0 top-8 w-56 rounded-xl border border-[#007fff]/20 bg-white shadow-xl overflow-hidden text-[#0b1b2b]/80">
                                    {[
                                        "UI / UX Design",
                                        "Web Development",
                                        "App Development",
                                        "Deployment & Hosting",
                                    ].map((item) => (
                                        <a
                                            key={item}
                                            href="#services"
                                            className="block px-5 py-3 text-sm hover:bg-[#007fff]/10"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="#projects" className="hover:text-[#007fff] transition">Projects</a>
                        <a href="#about" className="hover:text-[#007fff] transition">About</a>
                        <a href="#contact" className="hover:text-[#007fff] transition">Contact</a>
                    </nav>
                </div>

                {/* RIGHT */}
                <div className="flex items-center justify-end">

                    {/* CTA */}
                    <button className="hidden lg:inline-flex rounded-lg bg-[#007fff] text-white px-5 py-2 text-sm font-medium transition hover:bg-[#0066cc]">
                        Get Started
                    </button>

                    {/* MOBILE BTN */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="ml-4 inline-flex lg:hidden items-center justify-center rounded-md p-2 text-[#0b1b2b]"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label="Toggle navigation menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div id="mobile-nav" className="lg:hidden bg-[#f7fbff] border-t border-[#007fff]/20">
                    <nav className="flex flex-col px-6 py-6 gap-6 text-sm font-medium text-[#0b1b2b]/80">

                        <details>
                            <summary className="flex cursor-pointer items-center justify-between">
                                Services
                                <ChevronDown size={16} />
                            </summary>
                            <div className="mt-3 flex flex-col gap-2 pl-4 text-[#0b1b2b]/70">
                                <a onClick={() => setOpen(false)} href="#services">UI / UX Design</a>
                                <a onClick={() => setOpen(false)} href="#services">Web Development</a>
                                <a onClick={() => setOpen(false)} href="#services">App Development</a>
                                <a onClick={() => setOpen(false)} href="#services">Deployment & Hosting</a>
                            </div>
                        </details>

                        <a onClick={() => setOpen(false)} href="#projects">Projects</a>
                        <a onClick={() => setOpen(false)} href="#about">About</a>
                        <a onClick={() => setOpen(false)} href="#contact">Contact</a>

                        <button className="mt-4 rounded-lg bg-[#007fff] text-white py-3">
                            Get Started
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}


