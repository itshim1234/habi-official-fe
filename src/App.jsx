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
import ConsultationPopup from "./sections/Hero/ConsultationPopup";

// Memoize Footer to prevent unnecessary re-renders
const Footer = memo(lazy(() => import("./sections/Footer/Footer")));
import QuotationPopup from "./sections/Quotation/QuotationPopup";

function App() {
  const [isPreloading, setIsPreloading] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup State
  const [isQuotationVisible, setIsQuotationVisible] = useState(false);
  const [quotationData, setQuotationData] = useState(null);
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

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const toggleQuotationPopup = (data) => {
    setQuotationData(data);
    setIsQuotationVisible(!isQuotationVisible);
  };
  useEffect(() => {
    if (isPopupVisible || isQuotationVisible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isPopupVisible, isQuotationVisible]);

  if (isPreloading) {
    return <Preloader onVideoEnd={() => setIsPreloading(false)} />;
  }

  return (
    <div className="overflow-x-hidden bg-black">
      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<div className="loading-screen"></div>}>
        <Routes>
          <Route
            path="/"
            element={
              <HabiService
                togglePopup={togglePopup}
                toggleQuotationPopup={toggleQuotationPopup}
              />
            }
          />

          <Route path="/baap" element={<HabiProduct />} />
          <Route path="/faq" element={<FaqExpanded />} />
          <Route path="/about-habi" element={<AboutHabi />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/project" element={<ProjectExpand />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route
            path="/cost-estimator"
            element={
              <CostEstimator1
                costEstimatorOpen={true}
                togglePopup={togglePopup}
                toggleQuotationPopup={toggleQuotationPopup}
              />
            }
          />
          <Route
            path="/*"
            element={
              <HabiService
                togglePopup={togglePopup}
                toggleQuotationPopup={toggleQuotationPopup}
              />
            }
          />
        </Routes>
      </Suspense>

      {/* Render Footer only if it's not the Projects page */}
      {location.pathname !== "/project" && <Footer />}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
          <ConsultationPopup onClose={togglePopup} />
        </div>
      )}

      {isQuotationVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
          <QuotationPopup
            isVisible={isQuotationVisible}
            onClose={() => setIsQuotationVisible(false)}
            quotationData={quotationData}
          />
        </div>
      )}
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
