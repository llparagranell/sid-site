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

import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="bg-brand-bg text-brand-dark/60 pt-24 md:pt-32 relative overflow-hidden border-t border-brand-dark/10">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="mx-auto max-w-7xl px-6 sm:px-16 relative z-10">

                {/* Top divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="border-t border-brand-dark/10 mb-16"
                />

                {/* Footer grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5"
                >

                    {/* Brand + Contact */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-col gap-4">
                            <span className="text-2xl font-black text-brand-dark tracking-tighter">
                                Devgrowthsolutions
                            </span>
                        </div>

                        <div className="space-y-4 text-sm font-bold">
                            <p className="flex items-center gap-4 text-brand-dark/80">
                                <Phone size={18} className="text-brand-dark" />
                                +91 62600 45626
                            </p>
                            <p className="flex items-center gap-4 text-brand-dark/80">
                                <Mail size={18} className="text-brand-dark" />
                                contact@devgrowth.com
                            </p>
                            <p className="flex items-start gap-4 text-brand-dark/80">
                                <MapPin size={18} className="text-brand-dark" />
                                3rd Floor, Wright Town, Jabalpur (M.P.), India
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-brand-dark font-black mb-6 uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-3 text-sm font-bold">
                            <li className="hover:text-brand-dark transition-all cursor-pointer">Web Development</li>
                            <li className="hover:text-brand-dark transition-all cursor-pointer">Mobile Development</li>
                            <li className="hover:text-brand-dark transition-all cursor-pointer">MVP Development</li>
                            <li className="hover:text-brand-dark transition-all cursor-pointer">UI / UX Design</li>
                            <li className="hover:text-brand-dark transition-all cursor-pointer">Marketing</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-brand-dark font-black mb-6 uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-3 text-sm font-bold">
                            <li className="hover:text-brand-dark transition-all cursor-pointer">About Us</li>
                            <li className="hover:text-brand-dark transition-all cursor-pointer">How we work</li>
                            <li className="hover:text-brand-dark transition-all cursor-pointer">Careers</li>
                            <li className="hover:text-brand-dark transition-all cursor-pointer">Join us</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-brand-dark font-black mb-8 uppercase tracking-widest text-xs">Social Links</h4>
                        <ul className="space-y-4 text-sm font-bold text-brand-dark/60">
                            <li className="flex items-center gap-3 hover:text-brand-dark transition-all hover:translate-x-1 cursor-pointer">
                                <FaInstagram className="text-brand-dark" /> Instagram
                            </li>
                            <li className="flex items-center gap-3 hover:text-brand-dark transition-all hover:translate-x-1 cursor-pointer">
                                <FaFacebookF className="text-brand-dark" /> Facebook
                            </li>
                            <li className="flex items-center gap-3 hover:text-brand-dark transition-all hover:translate-x-1 cursor-pointer">
                                <FaLinkedinIn className="text-brand-dark" /> LinkedIn
                            </li>
                            <li className="flex items-center gap-3 hover:text-brand-dark transition-all hover:translate-x-1 cursor-pointer">
                                <FaYoutube className="text-brand-dark" /> YouTube
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
                    className="mt-20 border-t border-brand-dark/10 py-6 text-sm text-center text-brand-dark/40 font-bold"
                >
                    (c) {new Date().getFullYear()} DevGrowth. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
}




