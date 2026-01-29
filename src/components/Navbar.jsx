import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="grid grid-cols-2 h-20">

                {/* LEFT SIDE */}
                <div className="flex items-center px-8 sm:px-16">
                    <h1 className="text-xl font-semibold tracking-tight text-gray-900">
                        YourAgency
                    </h1>

                    {/* DESKTOP NAV */}
                    <nav className="ml-10 hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">

                        {/* SERVICES DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1 hover:text-black">
                                Services
                                <ChevronDown size={16} />
                            </button>

                            {servicesOpen && (
                                <div className="absolute left-0 top-8 w-56 rounded-xl border bg-white shadow-lg overflow-hidden">
                                    {[
                                        "UI / UX Design",
                                        "Web Development",
                                        "App Development",
                                        "Deployment & Hosting",
                                    ].map((item) => (
                                        <a
                                            key={item}
                                            href="#services"
                                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="#projects" className="hover:text-black">Projects</a>
                        <a href="#about" className="hover:text-black">About</a>
                        <a href="#contact" className="hover:text-black">Contact</a>
                    </nav>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-end px-8 sm:px-16">
                    <button className="hidden lg:inline-flex rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-900">
                        Get Started
                    </button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="ml-4 inline-flex lg:hidden items-center justify-center rounded-md p-2 text-gray-800"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {open && (
                <div className="lg:hidden bg-white border-t">
                    <nav className="flex flex-col px-8 py-6 gap-6 text-sm font-medium text-gray-700">

                        {/* MOBILE SERVICES DROPDOWN */}
                        <details>
                            <summary className="flex cursor-pointer items-center justify-between">
                                Services
                                <ChevronDown size={16} />
                            </summary>
                            <div className="mt-3 flex flex-col gap-2 pl-4 text-gray-600">
                                <a onClick={() => setOpen(false)} href="#services">UI / UX Design</a>
                                <a onClick={() => setOpen(false)} href="#services">Web Development</a>
                                <a onClick={() => setOpen(false)} href="#services">App Development</a>
                                <a onClick={() => setOpen(false)} href="#services">Deployment & Hosting</a>
                            </div>
                        </details>

                        <a onClick={() => setOpen(false)} href="#projects">Projects</a>
                        <a onClick={() => setOpen(false)} href="#about">About</a>
                        <a onClick={() => setOpen(false)} href="#contact">Contact</a>

                        <button className="mt-4 rounded-lg bg-black py-3 text-white">
                            Get Started
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
