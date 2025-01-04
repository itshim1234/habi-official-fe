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
    // Simulate a 3-second preloader
    setTimeout(() => {
      setIsPreloading(false);
    }, 7500); // Adjust the duration as needed
  }, []);

  // Check if the current route is the "Projects" page
  const isProjectPage = location.pathname === "/project";

  if (isPreloading) {
    return <Preloader />;
  }

  return (
    <div className="overflow-x-hidden bg-black">
      {/* Routing for different pages */}
      <Routes>
        <Route path="/" element={<HabiService />} />
        {/* Service Page */}
        <Route path="/baap" element={<HabiProduct />} /> {/* Product Page */}
        <Route path="/faq" element={<FaqExpanded />} /> {/* FAQs Page */}
        <Route path="/about-habi" element={<AboutHabi />} /> {/* About Page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
        {/* Privacy Policy Page */}
        <Route path="/project" element={<ProjectExpand />} />{" "}
        {/* Projects Page */}
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        {/* Terms and Conditions Page */}
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
