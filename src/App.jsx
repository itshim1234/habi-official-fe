import React, { useState, useEffect, Suspense, lazy, memo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Preloader from "./components/preloader/Preloader";

// Lazy load pages and sections
const HabiService = lazy(() => import("./pages/HabiService/HabiService"));
const HabiProduct = lazy(() => import("./pages/HabiProduct/HabiProduct"));
const AboutHabi = lazy(() => import("./sections/About/AboutHabi"));
const FaqExpanded = lazy(() => import("./sections/FAQ/FaqExpanded"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const TermsAndCondition = lazy(() =>
  import("./pages/TermsAndCondition/TermsAndCondition")
);
const ProjectExpand = lazy(() => import("./sections/Projects/ProjectExpand"));
const CostEstimator1 = lazy(() =>
  import("./sections/CostEstimator/CostEstimator1")
);
import FloorSelector from "./components/FloorSelector";
import FloorHeightSelector from "./components/FloorHeightselector";
import FlipCard from "./components/FlipCard";

// Memoize Footer to prevent unnecessary re-renders
const Footer = memo(lazy(() => import("./sections/Footer/Footer")));

function App() {
  const [isPreloading, setIsPreloading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the preloader has already been shown in this session
    if (!sessionStorage.getItem("hasLoaded")) {
      setIsPreloading(true);
      sessionStorage.setItem("hasLoaded", "true"); // Store flag for the session

      // Fallback timeout to remove preloader
      const timeout = setTimeout(() => setIsPreloading(false), 8000);
      return () => clearTimeout(timeout); // Cleanup on unmount
    }
  }, []);

  if (isPreloading) {
    return <Preloader onVideoEnd={() => setIsPreloading(false)} />;
  }

  return (
    <div className="overflow-x-hidden bg-black">
      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<div className="loading-screen"></div>}>
        <Routes>
          <Route path="/" element={<HabiService />} />
          <Route path="/*" element={<HabiService />} />
          <Route path="/baap" element={<HabiProduct />} />
          <Route path="/faq" element={<FaqExpanded />} />
          <Route path="/about-habi" element={<AboutHabi />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/project" element={<ProjectExpand />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route
            path="/cost-estimator"
            element={<CostEstimator1 costEstimatorOpen={true} />}
          />
        </Routes>
      </Suspense>

      {/* Render Footer only if it's not the Projects page */}
      {location.pathname !== "/project" && <Footer />}
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
