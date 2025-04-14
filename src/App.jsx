// import React, { useState, useEffect, Suspense, lazy, memo } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import "./App.css";
// import Preloader from "./components/preloader/Preloader";
// import ProgressBar from "./components/ProgressBar";
// // Lazy load pages and sections
// const HabiService = lazy(() => import("./pages/HabiService/HabiService"));
// const HabiProduct = lazy(() => import("./pages/HabiProduct/HabiProduct"));
// const AboutHabi = lazy(() => import("./sections/About/AboutHabi"));
// const FaqExpanded = lazy(() => import("./sections/FAQ/FaqExpanded"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
// const TermsAndCondition = lazy(() =>
//   import("./pages/TermsAndCondition/TermsAndCondition")
// );
// const ProjectExpand = lazy(() => import("./sections/Projects/ProjectExpand"));
// const CostEstimator1 = lazy(() =>
//   import("./sections/CostEstimator/CostEstimator1")
// );
// import ConsultationPopup from "./sections/Hero/ConsultationPopup";

// // Memoize Footer to prevent unnecessary re-renders
// const Footer = memo(lazy(() => import("./sections/Footer/Footer")));
// import QuotationPopup from "./sections/Quotation/QuotationPopup";

// function App() {
//   const [isPreloading, setIsPreloading] = useState(false);
//   const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup State
//   const [isQuotationVisible, setIsQuotationVisible] = useState(false);
//   const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);
//   const [quotationData, setQuotationData] = useState(null);
//   const [completed, setCompleted] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     // Check if the preloader has already been shown in this session
//     if (!sessionStorage.getItem("hasLoaded")) {
//       setIsPreloading(true);
//       sessionStorage.setItem("hasLoaded", "true"); // Store flag for the session

//       // Fallback timeout to remove preloader
//       const timeout = setTimeout(() => setIsPreloading(false), 8000);
//       return () => clearTimeout(timeout); // Cleanup on unmount
//     }
//   }, []);

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };
//   const toggleQuotationPopup = (data) => {
//     setQuotationData(data);
//     setIsQuotationVisible(!isQuotationVisible);
//   };
//   const handleProgress = (value) => {
//     setIsProgressBarVisible(value);
//   };
//   const handleCompleted = (value) => {
//     setCompleted(value);
//   };
//   useEffect(() => {
//     if (isPopupVisible || isQuotationVisible) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Enable scrolling when closed
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Reset on unmount
//     };
//   }, [isPopupVisible, isQuotationVisible, isProgressBarVisible]);

//   if (isPreloading) {
//     return <Preloader onVideoEnd={() => setIsPreloading(false)} />;
//   }

//   return (
//     <div className="overflow-x-hidden bg-black">
//       {/* Suspense for lazy-loaded components */}
//       <Suspense fallback={<div className="loading-screen"></div>}>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <HabiService
//                 togglePopup={togglePopup}
//                 toggleQuotationPopup={toggleQuotationPopup}
//               />
//             }
//           />

//           <Route path="/baap" element={<HabiProduct />} />
//           <Route path="/faq" element={<FaqExpanded />} />
//           <Route path="/about-habi" element={<AboutHabi />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/project" element={<ProjectExpand />} />
//           <Route path="/terms-and-condition" element={<TermsAndCondition />} />
//           <Route
//             path="/Construction-Cost-Calculator"
//             element={
//               <CostEstimator1
//                 costEstimatorOpen={true}
//                 togglePopup={togglePopup}
//                 toggleQuotationPopup={toggleQuotationPopup}
//                 title="Construction Cost Calculator"
//               />
//             }
//           />
//           <Route
//             path="/*"
//             element={
//               <HabiService
//                 togglePopup={togglePopup}
//                 toggleQuotationPopup={toggleQuotationPopup}
//               />
//             }
//           />
//           <Route path="/abc" element={<ProgressBar />} />
//         </Routes>
//       </Suspense>

//       {/* Render Footer only if it's not the Projects page */}
//       {location.pathname !== "/project" && <Footer />}
//       {isPopupVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
//           <ConsultationPopup onClose={togglePopup} />
//         </div>
//       )}

//       {isQuotationVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
//           <QuotationPopup
//             isVisible={isQuotationVisible}
//             onClose={() => setIsQuotationVisible(false)}
//             quotationData={quotationData}
//             handleProgressiveBar={handleProgress}
//             handleCompleted={handleCompleted}
//           />
//         </div>
//       )}

//       {isProgressBarVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
//           <ProgressBar completed={completed} />
//         </div>
//       )}
//     </div>
//   );
// }

// function AppWithRouter() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default AppWithRouter;

import React, { useState, useEffect, Suspense, lazy, memo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Preloader from "./components/preloader/Preloader";
import ProgressBar from "./components/ProgressBar";

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
const Footer = memo(lazy(() => import("./sections/Footer/Footer")));
import ConsultationPopup from "./sections/Hero/ConsultationPopup";
import QuotationPopup from "./sections/Quotation/QuotationPopup";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isQuotationVisible, setIsQuotationVisible] = useState(false);
  const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);
  const [quotationData, setQuotationData] = useState(null);
  const [completed, setCompleted] = useState(false);
  const location = useLocation();

  const togglePopup = () => setIsPopupVisible(!isPopupVisible);
  const toggleQuotationPopup = (data) => {
    setQuotationData(data);
    setIsQuotationVisible(!isQuotationVisible);
  };
  const handleProgress = (value) => setIsProgressBarVisible(value);
  const handleCompleted = (value) => setCompleted(value);

  function LazyWrapper({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => setLoading(false), 1000); // Short delay to show animation
      return () => clearTimeout(timeout);
    }, []);

    return loading ? <Preloader /> : children;
  }

  useEffect(() => {
    if (isPopupVisible || isQuotationVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupVisible, isQuotationVisible, isProgressBarVisible]);

  return (
    <div className="overflow-x-hidden bg-black">
      {/* <Suspense fallback={<Preloader />}> */}
      <Suspense fallback={<div>{console.log("consolelog triggred")}</div>}>
        <LazyWrapper>
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
            <Route
              path="/terms-and-condition"
              element={<TermsAndCondition />}
            />
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
        </LazyWrapper>
      </Suspense>

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
      <button className=" fixed bottom-8 right-8 flex items-center justify-end px-2 md:px-5 h-[40px] md:h-[50px] 2xl:h-[60px] rounded-lg border-2 border-white/20 bg-black/25 backdrop-blur-md text-white font-semibold">
        <span
          className=" text-[14px] md:text-[20px] 2xl:text-[24px] font-giloryS pb-0.5 leading-4"
          onClick={() => navigate("/Construction-Cost-Calculator")}
        >
          <h1>Construction Cost Calculator</h1>
        </span>
      </button>
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

// import React, { useState, useEffect, Suspense, lazy, memo } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import "./App.css";
// import Preloader from "./components/preloader/Preloader";
// import ProgressBar from "./components/ProgressBar";

// // Lazy load pages and sections
// const HabiService = lazy(() => import("./pages/HabiService/HabiService"));
// const HabiProduct = lazy(() => import("./pages/HabiProduct/HabiProduct"));
// const AboutHabi = lazy(() => import("./sections/About/AboutHabi"));
// const FaqExpanded = lazy(() => import("./sections/FAQ/FaqExpanded"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
// const TermsAndCondition = lazy(() =>
//   import("./pages/TermsAndCondition/TermsAndCondition")
// );
// const ProjectExpand = lazy(() => import("./sections/Projects/ProjectExpand"));
// const CostEstimator1 = lazy(() =>
//   import("./sections/CostEstimator/CostEstimator1")
// );
// const Footer = memo(lazy(() => import("./sections/Footer/Footer")));
// import ConsultationPopup from "./sections/Hero/ConsultationPopup";
// import QuotationPopup from "./sections/Quotation/QuotationPopup";

// function App() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isQuotationVisible, setIsQuotationVisible] = useState(false);
//   const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);
//   const [quotationData, setQuotationData] = useState(null);
//   const [completed, setCompleted] = useState(false);
//   const location = useLocation();

//   const togglePopup = () => setIsPopupVisible(!isPopupVisible);
//   const toggleQuotationPopup = (data) => {
//     setQuotationData(data);
//     setIsQuotationVisible(!isQuotationVisible);
//   };
//   const handleProgress = (value) => setIsProgressBarVisible(value);
//   const handleCompleted = (value) => setCompleted(value);

//   function LazyWrapper({ children }) {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       const timeout = setTimeout(() => setLoading(false), 1000); // Short delay to show animation
//       return () => clearTimeout(timeout);
//     }, []);

//     return loading ? <Preloader /> : children;
//   }

//   useEffect(() => {
//     if (isPopupVisible || isQuotationVisible) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isPopupVisible, isQuotationVisible, isProgressBarVisible]);

//   return (
//     <div className="overflow-x-hidden bg-black">
//       {/* <Suspense fallback={<Preloader />}> */}
//       <Suspense fallback={<div>{console.log("consolelog triggred")}</div>}>
//         <LazyWrapper>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <HabiService
//                   togglePopup={togglePopup}
//                   toggleQuotationPopup={toggleQuotationPopup}
//                 />
//               }
//             />
//             <Route path="/baap" element={<HabiProduct />} />
//             <Route path="/faq" element={<FaqExpanded />} />
//             <Route path="/about-habi" element={<AboutHabi />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/project" element={<ProjectExpand />} />
//             <Route
//               path="/terms-and-condition"
//               element={<TermsAndCondition />}
//             />
//             <Route
//               path="/Construction-Cost-Calculator"
//               element={
//                 <CostEstimator1
//                   costEstimatorOpen={true}
//                   togglePopup={togglePopup}
//                   toggleQuotationPopup={toggleQuotationPopup}
//                   title="Construction Cost Calculator"
//                 />
//               }
//             />
//             <Route
//               path="/*"
//               element={
//                 <HabiService
//                   togglePopup={togglePopup}
//                   toggleQuotationPopup={toggleQuotationPopup}
//                 />
//               }
//             />
//             <Route path="/abc" element={<ProgressBar />} />
//           </Routes>
//         </LazyWrapper>
//       </Suspense>

//       {location.pathname !== "/project" && <Footer />}

//       {isPopupVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
//           <ConsultationPopup onClose={togglePopup} />
//         </div>
//       )}

//       {isQuotationVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
//           <QuotationPopup
//             isVisible={isQuotationVisible}
//             onClose={() => setIsQuotationVisible(false)}
//             quotationData={quotationData}
//             handleProgressiveBar={handleProgress}
//             handleCompleted={handleCompleted}
//           />
//         </div>
//       )}

//       {isProgressBarVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
//           <ProgressBar completed={completed} />
//         </div>
//       )}
//       <button className=" fixed bottom-8 right-8 flex items-center justify-end px-2 md:px-5 h-[40px] md:h-[50px] 2xl:h-[60px] rounded-lg border-2 border-white/20 bg-black/25 backdrop-blur-md text-white font-semibold">
//         <span
//           className=" text-[14px] md:text-[20px] 2xl:text-[24px] font-giloryS pb-0.5 leading-4"
//           onClick={() => navigate("/Construction-Cost-Calculator")}
//         >
//           <h1>Construction Cost Calculator</h1>
//         </span>
//       </button>
//     </div>
//   );
// }

// function AppWithRouter() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default AppWithRouter;
