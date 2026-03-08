import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppSticky from "./components/WhatsAppSticky";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogView from "./pages/BlogView";
import CaseStudies from "./pages/CaseStudies";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
// Service Pages
import AiMachineLearning from "./pages/AiMachineLearning";
import CloudSolutions from "./pages/CloudSolutions";
import UiUxDesign from "./pages/UiUxDesign";
import DatabaseManagement from "./pages/DatabaseManagement";
import CustomSoftware from "./pages/CustomSoftware";
import EcommerceSolutions from "./pages/industries/EcommerceSolutions";

// Industry Pages
import Healthcare from "./pages/industries/Healthcare";
import Education from "./pages/industries/Education";
import Fintech from "./pages/industries/Fintech";
import ItSoftware from "./pages/industries/ItSoftware";
import Logistics from "./pages/industries/Logistics";
import SupplyChain from "./pages/industries/SupplyChain";
// import EcommerceSolutions from "./pages/industries/EcommerceSolutions";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogView />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        {/* Service Routes */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/ai-machine-learning" element={<AiMachineLearning />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/database-management" element={<DatabaseManagement />} />
        <Route path="/services/custom-software" element={<CustomSoftware />} />
        {/* Industry Routes */}
        <Route path="/industries/ecommercesolutions" element={<EcommerceSolutions />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/fintech" element={<Fintech />} />
        <Route path="/industries/it-software" element={<ItSoftware />} />
        <Route path="/industries/logistics" element={<Logistics />} />
        <Route path="/industries/supply-chain" element={<SupplyChain />} />
      </Routes>
      <WhatsAppSticky />
    </Router>
  );
}



