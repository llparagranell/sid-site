import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/motion/SmoothScroll";
import Preloader from "./components/Preloader";
import WhatsAppSticky from "./components/WhatsAppSticky";
import Home from "./pages/Home";

// Every non-home route is code-split so the homepage bundle only carries Home.
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogView = lazy(() => import("./pages/BlogView"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
// Service pages
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("./pages/MobileAppDevelopment"));
const AiMachineLearning = lazy(() => import("./pages/AiMachineLearning"));
const AiAutomation = lazy(() => import("./pages/AiAutomation"));
const CloudSolutions = lazy(() => import("./pages/CloudSolutions"));
const UiUxDesign = lazy(() => import("./pages/UiUxDesign"));
const CustomSoftware = lazy(() => import("./pages/CustomSoftware"));
// Industry pages
const EcommerceSolutions = lazy(() => import("./pages/industries/EcommerceSolutions"));
const Healthcare = lazy(() => import("./pages/industries/Healthcare"));
const Education = lazy(() => import("./pages/industries/Education"));
const Fintech = lazy(() => import("./pages/industries/Fintech"));
const ItSoftware = lazy(() => import("./pages/industries/ItSoftware"));
const Logistics = lazy(() => import("./pages/industries/Logistics"));
const SupplyChain = lazy(() => import("./pages/industries/SupplyChain"));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        {/* Preloader must mount in the same commit as the first page so the hero can wait for it. */}
        <Preloader />
        <SmoothScroll />
        <ScrollToTop />
        {/* Only the route outlet suspends; the shell above and below stays mounted across chunk loads. */}
        <Suspense fallback={<div className="min-h-screen bg-paper" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogView />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            {/* Service routes */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/ai-machine-learning" element={<AiMachineLearning />} />
            <Route path="/services/ai-automation" element={<AiAutomation />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            {/* Database Management was retired as a standalone service; Cloud Solutions covers
                database setup, migration and tuning. Keep the old URL alive for existing links. */}
            <Route
                path="/services/database-management"
                element={<Navigate to="/services/cloud-solutions" replace />}
            />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            {/* Industry routes */}
            <Route path="/industries/ecommercesolutions" element={<EcommerceSolutions />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/fintech" element={<Fintech />} />
            <Route path="/industries/it-software" element={<ItSoftware />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/supply-chain" element={<SupplyChain />} />
          </Routes>
        </Suspense>
        <WhatsAppSticky />
      </Router>
    </MotionConfig>
  );
}
