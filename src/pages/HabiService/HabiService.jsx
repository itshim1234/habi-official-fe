import React, {
  useState,
  useRef,
  lazy,
  Suspense,
  useCallback,
  memo,
} from "react";
import "./style.css";
import { useEffect } from "react";

// Lazy load sections for performance boost
const Hero = memo(lazy(() => import("../../sections/Hero/Hero")));
const Info = memo(lazy(() => import("../../sections/Info/Info")));
const Service = lazy(() => import("../../sections/habiService/Service"));
const Working = lazy(() => import("../../sections/HowItWorks/Working"));
const Model = lazy(() => import("../../sections/3DMobile/Model"));
const ConstructionProgress = lazy(() =>
  import("../../sections/TrackProgress/ConstructionProgress")
);
const Projects = lazy(() => import("../../sections/Projects/Projects"));
const Faq = lazy(() => import("../../sections/FAQ/Faq"));
const Baap = lazy(() => import("../../sections/Baap/Baap"));
const Testimonial = memo(
  lazy(() => import("../../sections/Testimonials/Testimonial"))
);
const CostEstimator1 = lazy(() =>
  import("../../sections/CostEstimator/CostEstimator1")
);

function HabiService({ togglePopup, toggleQuotationPopup }) {
  const [isServiceView, setIsServiceView] = useState(true);
  const [animation, setAnimation] = useState("");
  const [loading, setLoading] = useState(true);

  const projectsRef = useRef(null);

  // Toggle between Service and Baap with animation
  const toggleView = useCallback(() => {
    setAnimation(isServiceView ? "slide-out" : "slide-in");
    setTimeout(() => {
      setIsServiceView((prevState) => !prevState);
      setAnimation("");
    }, 300);
  }, [isServiceView]);

  // Smooth scroll to Projects section
  const scrollToProjects = useCallback(() => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div>
      <Suspense>
        <Hero scrollToProjects={scrollToProjects} />
        <Info />
        <div className={`content-container ${animation}`}>
          {isServiceView ? (
            <>
              <Service toggleView={toggleView} />
              <Working />
              <ConstructionProgress />
              <div ref={projectsRef}>
                <Projects />
              </div>
              <Testimonial />

              {/* 👉 Ref added here */}

              <CostEstimator1
                togglePopup={togglePopup}
                toggleQuotationPopup={toggleQuotationPopup}
              />

              {/* Pass popup toggle function to Model */}
              <Model togglePopup={togglePopup} />
              <Faq />
            </>
          ) : (
            <Baap toggleView={toggleView} />
          )}
        </div>
      </Suspense>
    </div>
  );
}

export default HabiService;
