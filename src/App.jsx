import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./sections/Footer/Footer";
import Faq from "./sections/FAQ/Faq";

import HabiService from "./pages/HabiService/HabiService";
import HabiProduct from "./pages/HabiProduct/HabiProduct";
import AboutHabi from "./sections/About/AboutHabi";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden bg-black">
        {/* Routing for different pages */}
        <Routes>
          <Route path="*" element={<HabiService />} /> {/* Service Page */}
          <Route path="/" element={<HabiService />} /> {/* Service Page */}
          <Route path="/baap" element={<HabiProduct />} /> {/* Product Page */}
          <Route path="/faq" element={<Faq />} /> {/* FAQs Page */}
          <Route path="/about" element={<AboutHabi />} /> {/* FAQs Page */}
        </Routes>

        {/* Footer is common */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
