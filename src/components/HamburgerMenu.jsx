import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      {/* Hamburger Trigger */}
      <div ref={hamburgerRef}>
        <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-10 md:top-14 right-0 z-30 flex flex-col bg-black/50 backdrop-blur-md px-3 py-2 md:py-4 border border-[#7c7c7c] rounded-lg font-giloryS"
        >
          <button
            className="text-white text-[18px]"
            onClick={() => {
              navigate("/blogs");
              setIsMenuOpen(false);
            }}
          >
            Blogs
          </button>
          <hr className="my-2 w-[70%] mx-auto" />
          <button
            className="text-white text-[18px]"
            onClick={() => {
              navigate("/baap");
              setIsMenuOpen(false);
            }}
          >
            Product
          </button>
          <hr className="my-2 w-[70%] mx-auto lg:hidden" />
          <button
            className="text-white text-[18px] lg:hidden"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1J51DKaEezb1tnUWPZZo10pFhLEmU0Oxu/view?usp=sharing",
                "_blank"
              );
              setIsMenuOpen(false);
            }}
          >
            Brochure
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
