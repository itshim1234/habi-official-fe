import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./sections/Footer/Footer";
import HabiService from "./pages/HabiService/HabiService";
import HabiProduct from "./pages/HabiProduct/HabiProduct";
import AboutHabi from "./sections/About/AboutHabi";
import FaqExpanded from "./sections/FAQ/FaqExpanded";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
import ProjectExpand from "./sections/Projects/ProjectExpand";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Set a fallback timeout in case the video doesn't end
    const timeout = setTimeout(() => setIsPreloading(false), 8000); // Fallback duration

    return () => clearTimeout(timeout);
  }, []);

  // Callback when preloader video ends
  const handlePreloaderEnd = () => {
    setIsPreloading(false);
  };

  // Check if the current route is the "Projects" page
  const isProjectPage = location.pathname === "/project";

  if (isPreloading) {
    return <Preloader onVideoEnd={handlePreloaderEnd} />;
  }

  return (
    <div className="overflow-x-hidden bg-black">
      {/* Routing for different pages */}
      <Routes>
        <Route path="/" element={<HabiService />} />
        <Route path="/*" element={<HabiService />} />
        <Route path="/baap" element={<HabiProduct />} />
        <Route path="/faq" element={<FaqExpanded />} />
        <Route path="/about-habi" element={<AboutHabi />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/project" element={<ProjectExpand />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      </Routes>

      {/* Render Footer only if it's not the Projects page */}
      {!isProjectPage && <Footer />}
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
