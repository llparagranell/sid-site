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
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-[#0b0f14] text-[#e6eefb]/80 pt-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-8 sm:px-16">

                {/* Top divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="border-t border-[#4da3ff]/20 mb-16"
                />

                {/* Footer grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid gap-12 md:grid-cols-2 lg:grid-cols-5"
                >

                    {/* Brand + Contact */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-2xl font-semibold text-[#e6eefb]">
                            DevGrowth
                        </h3>

                        <div className="space-y-3 text-sm">
                            <p className="flex items-start gap-3">
                                <Phone size={16} className="text-[#4da3ff]" />
                                +91 62600 45626
                            </p>
                            <p className="flex items-start gap-3">
                                <Mail size={16} className="text-[#4da3ff]" />
                                contact@devgrowth.com
                            </p>
                            <p className="flex items-start gap-3 max-w-sm">
                                <MapPin size={16} className="text-[#4da3ff]" />
                                3rd Floor, Wright Town, Jabalpur (M.P.), India
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[#4da3ff] font-medium mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Mobile Development</li>
                            <li className="hover:text-white transition-colors cursor-pointer">MVP Development</li>
                            <li className="hover:text-white transition-colors cursor-pointer">UI / UX Design</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Marketing</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[#4da3ff] font-medium mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer">About</li>
                            <li className="hover:text-white transition-colors cursor-pointer">How we work</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Career</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Join us</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-[#4da3ff] font-medium mb-4">Social Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                                <FaInstagram className="text-[#4da3ff]" /> Instagram
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                                <FaFacebookF className="text-[#4da3ff]" /> Facebook
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                                <FaLinkedinIn className="text-[#4da3ff]" /> LinkedIn
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                                <FaYoutube className="text-[#4da3ff]" /> YouTube
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 border-t border-white/5 py-6 text-sm text-center text-[#e6eefb]/40"
                >
                    (c) {new Date().getFullYear()} DevGrowth. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
}




