import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import Services from "../components/Services";
import WorkPhilosophy from "../components/WorkPhilosophy";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ProcessSection from "../components/ProcessSection";
import ComparisonSection from "../components/ComparisonSection";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import { useState } from "react";

export default function Home() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

    return (
        <div className="relative min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">

            {/* Global Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-[0.03]" />
                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(30, 27, 75, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 27, 75, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <Navbar onBookClick={toggleBooking} />
            <Hero onBookClick={toggleBooking} />
            <Services />

            <VideoSection />

            <WorkPhilosophy />


            <ComparisonSection />
            <TechStack />

            <ProcessSection />
            <Projects />
            <FAQ />
            <ContactSection />
            <Footer />

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}



