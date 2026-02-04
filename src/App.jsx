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
    <>
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <ProcessSection />
      <ComparisonSection />
      {/* <WorkPhilosophy /> */}

      {/* <Projects />
      <Testimonials /> */}
      <FAQ />
      <ContactSection />
      {/* <ContactCTA /> */}
      <Footer />
    </>
  );
}


