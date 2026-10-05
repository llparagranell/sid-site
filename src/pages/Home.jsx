import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProofBand from "../components/ProofBand";
import Services from "../components/Services";
import Projects from "../components/Projects";
import ProcessSection from "../components/ProcessSection";
import TechStack from "../components/TechStack";
import WorkPhilosophy from "../components/WorkPhilosophy";
import ComparisonSection from "../components/ComparisonSection";
import SegmentedCTA from "../components/SegmentedCTA";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import CubeStage from "../components/hero/CubeStage";
import { stageEnabled } from "../components/hero/stage";

/**
 * Homepage. Bands run dark / light / dark / light / dark / light / light (grain) /
 * dark / light / dark / light (grain) / dark: Hero, Proof, Work, Services, Process,
 * Stack, About, Why, Start, Contact, FAQ, Footer. The hero is dark so the Navbar
 * renders transparent over it until the page scrolls.
 *
 * No overflow-x on this wrapper: body already clips horizontal overflow, and an
 * overflow-x-hidden ancestor would break every `sticky` column below.
 */
export default function Home() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    // The fixed cube overlay (assembles behind the preloader, settles into the hero,
    // drifts with the scroll) — desktop fine-pointer only; see hero/stage.js.
    const [stageOn] = useState(() => stageEnabled());
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-paper text-ink font-sans">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
            >
                Skip to content
            </a>
            <Navbar onBookClick={openBooking} />

            <main id="main" tabIndex={-1} className="outline-none!">
                <Hero onBookClick={openBooking} />
                <ProofBand />
                <Projects />
                <Services />
                <ProcessSection />
                <TechStack />
                <WorkPhilosophy />
                <ComparisonSection />
                <SegmentedCTA onBookClick={openBooking} />
                <ContactSection />
                <FAQ />
            </main>

            <Footer />

            {stageOn && <CubeStage />}
            <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
        </div>
    );
}
