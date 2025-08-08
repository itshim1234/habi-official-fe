import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
  useCallback,
  lazy,
  memo,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Preloader from "./components/preloader/Preloader";
import ProgressBar from "./components/ProgressBar";
import CalculatorButton from "./components/CalculatorButton";
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
import HomeButton from "./components/HomeButton";
import AllBlogs from "./Blogs/AllBlogs";
import BlogGenerator from "./BlogGenerator/BlogGenerator";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import BlogEditor from "./components/blog/BlogEditor";
import { AuthProvider } from "./contexts/AuthContext";
import { StrictMode } from "react";

function App() {
  const [isPreloading, setIsPreloading] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup State

  const [isQuotationVisible, setIsQuotationVisible] = useState(false);
  const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);
  const [quotationData, setQuotationData] = useState(null);

  const [completed, setCompleted] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomeRoute = location.pathname === "/";

  const isCalculatorRoute =
    location.pathname === "/Construction-Cost-Calculator";

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

  const toggleOtpForm = () => {
    setIsOtpFormVisible(!isOtpFormVisible);
  };
  const toggleQuotationPopup = (data) => {
    setQuotationData(data);
    setIsQuotationVisible(!isQuotationVisible);
  };
  const handleProgress = (value) => {
    setIsProgressBarVisible(value);
  };
  const handleCompleted = (value) => {
    setCompleted(value);
  };
  const handleCalculatorClick = () => {
    navigate("/Construction-Cost-Calculator");
  };

  const handleHomeButtonClick = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("Window fully loaded (including images, etc)");
    setIsAppLoaded(true);
  }, []);

  useEffect(() => {
    if (isPopupVisible || isQuotationVisible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isPopupVisible, isQuotationVisible, isProgressBarVisible]);

  if (isPreloading) {
    return <Preloader onVideoEnd={() => setIsPreloading(false)} />;
  }

  return (
    <AuthProvider>
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
          
          {/* Blog Routes */}
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/create" element={<StrictMode>
  <BlogEditor />
</StrictMode>} />
          <Route path="/admin/edit/:id" element={<StrictMode>
  <BlogEditor />
</StrictMode>} />
          
          {/* Legacy blog routes (keeping for backward compatibility) */}
          {/* <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/create" element={<BlogGenerator />} /> */}
          <Route
            path="/Construction-Cost-Calculator"
            element={
              <CostEstimator1
                costEstimatorOpen={true}
                togglePopup={togglePopup}
                toggleQuotationPopup={toggleQuotationPopup}
                title="Construction Cost Calculator"
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
          <Route path="/abc" element={<ProgressBar />} />
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
              handleProgressiveBar={handleProgress}
              handleCompleted={handleCompleted}
            />
          </div>
        )}
        {isProgressBarVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
            <ProgressBar completed={completed} />
          </div>
        )}
        {/* {!isPreloading && isAppLoaded && ( */}

        {isHomeRoute && (
          <CalculatorButton
            className="hidden sm:block"
            isAppLoaded={isAppLoaded}
            onClickCalculator={handleCalculatorClick}
          />
        )}
        {isCalculatorRoute && (
          <HomeButton
            className="hidden sm:block"
            onClick={handleHomeButtonClick}
          />
        )}
      </div>
    </AuthProvider>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
      {/* <OtpForm /> */}
    </Router>
  );
}

export default AppWithRouter;
