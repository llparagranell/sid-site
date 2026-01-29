import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1C1C1C] text-gray-300 pt-32">
            <div className="mx-auto max-w-7xl px-8 sm:px-16">

                {/* Top divider */}
                <div className="border-t border-gray-700 mb-16" />

                {/* Footer grid */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

                    {/* Brand + Contact */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-2xl font-semibold text-white">
                            YourAgency
                        </h3>

                        <div className="space-y-3 text-sm">
                            <p className="flex items-start gap-3">
                                <Phone size={16} />
                                +91 79094 61009
                            </p>
                            <p className="flex items-start gap-3">
                                <Mail size={16} />
                                contact@youragency.com
                            </p>
                            <p className="flex items-start gap-3 max-w-sm">
                                <MapPin size={16} />
                                3rd Floor, Wright Town, Jabalpur (M.P.), India
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Web Development</li>
                            <li>Mobile Development</li>
                            <li>MVP Development</li>
                            <li>UI / UX Design</li>
                            <li>Marketing</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>About</li>
                            <li>How we work</li>
                            <li>Career</li>
                            <li>Join us</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Social Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <FaInstagram /> Instagram
                            </li>
                            <li className="flex items-center gap-3">
                                <FaFacebookF /> Facebook
                            </li>
                            <li className="flex items-center gap-3">
                                <FaLinkedinIn /> LinkedIn
                            </li>
                            <li className="flex items-center gap-3">
                                <FaYoutube /> YouTube
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-20 border-t border-gray-700 py-6 text-sm text-center text-gray-500">
                    © {new Date().getFullYear()} YourAgency. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
