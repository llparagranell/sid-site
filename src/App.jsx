import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkPhilosophy from "./components/WorkPhilosophy";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ProcessSection from "./components/ProcessSection";
import ComparisonSection from "./components/ComparisonSection";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0b0f14] min-h-screen relative selection:bg-blue-500/30">

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      <Hero />
      <WorkPhilosophy />


      <Services />
      <ComparisonSection />
      <TechStack />

      <ProcessSection />
      <Projects />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}



