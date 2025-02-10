import React, {
  useState,
  useRef,
  lazy,
  Suspense,
  useCallback,
  memo,
} from "react";
import "./style.css";

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

function HabiService({ togglePopup }) {
  const [isServiceView, setIsServiceView] = useState(true);
  const [costEstimatorOpen, setCostEstimatorOpen] = useState(false);
  const [animation, setAnimation] = useState("");

  const projectsRef = useRef(null);
  const costEstimatorRef = useRef(null);

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

  // Smooth scroll to Cost Estimator and open it
  const scrollToCostEstimator = useCallback(() => {
    costEstimatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setCostEstimatorOpen(true);
  }, []);

  // Toggle Popup Function

  return (
    <div>
      <Suspense>
        <Hero
          scrollToProjects={scrollToProjects}
          scrollToCostEstimator={scrollToCostEstimator}
        />
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
              <div ref={costEstimatorRef}>
                <CostEstimator1
                  costEstimatorOpen={costEstimatorOpen}
                  togglePopup={togglePopup}
                />
              </div>
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
