import React from "react";
import callus from "../../assets/images/callus.webp";
import employeeLogin from "../../assets/images/Employeelogin.webp";
import facebook from "../../assets/images/Facebook.webp";
import insta from "../../assets/images/insta.webp";
import linkedin from "../../assets/images/Linkedin.webp";
import mail from "../../assets/images/mail.webp";
import twitter from "../../assets/images/twitter.webp";
import youtube from "../../assets/images/youtube.webp";
import logo from "../../assets/images/Logo2.webp";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
  };

  return (
    <footer className="bg-[#000000] py-10 md:pr-10 px-5 ml-3 text-white font-giloryM md:text-lg">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and Tagline */}
        <div className="col-span-2 justify-center md:w-44">
          <img
            src={logo}
            alt="Home construction Bengaluru"
            className="cursor-pointer w-24 ml-2 md:ml-5 lg:ml-8"
            onClick={handleLogoClick}
          />
          <p className="font-Dune text-white text-[8px] md:text-[10px]  lg:text-[12px]">
            The way of Living
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg md:text-2xl font-giloryS">Company</h3>
          <p
            className="mt-2 cursor-pointer"
            onClick={() => navigate("/about-habi")} // Corrected navigation
          >
            About habi
          </p>
          <p
            className="mt-2 cursor-pointer"
            onClick={() => navigate("/faq")} // Corrected navigation
          >
            Faq's
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg md:text-2xl font-giloryS">Follow us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/company/habiwayofliving"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.instagram.com/habi.wayofliving"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img src={insta} alt="Instagram" className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.youtube.com/@habi.wayofliving"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img src={youtube} alt="YouTube" className="w-5 h-5 mr-2" />
                YouTube
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://twitter.com/habiwayofliving"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img src={twitter} alt="Twitter" className="w-5 h-5 mr-2" />
                Twitter
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.facebook.com/habi.wayofliving"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img src={facebook} alt="Facebook" className="w-5 h-5 mr-2" />
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg md:text-2xl font-giloryS">Contact us</h3>
          <p className="flex items-center mt-2">
            <a href="tel:9606210818" className="flex items-center">
              <img src={callus} alt="Phone" className="w-5 h-5 mr-2" />
              9606210818
            </a>
          </p>
          <a
            href="mailto:hello@habi.one"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="flex items-center mt-2">
              <img src={mail} alt="Email" className="w-5 h-5 mr-2" />
              hello@habi.one
            </p>
          </a>

          <div className="hidden md:inline">
            <h3 className="text-lg md:text-2xl font-giloryS mt-4">Work</h3>
            <p 
              className="mt-2 flex items-center cursor-pointer hover:text-gray-300 transition-colors"
              onClick={() => navigate("/login")}
            >
              <img src={employeeLogin} alt="Employee Login" className="w-5 h-5 mr-2" />
              Employee Login
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <h3 className="text-lg md:text-2xl font-giloryS">Work</h3>
          <p 
            className="mt-2 flex items-center cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => navigate("/login")}
          >
            <img src={employeeLogin} alt="Employee Login" className="w-5 h-5 mr-2" />
            Employee Login
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center xl:pr-[6%]">
        <div className="mx-auto flex flex-col md:flex-row justify-between text-[#c0c0c0] text-sm">
          <p>&copy; 2020 - 24 Designasm Technologies Pvt Ltd.</p>
          <div className="space-x-4 mt-2 md:mt-0 flex mx-auto md:mx-0">
            <p
              className="cursor-pointer"
              onClick={() => navigate("/privacy-policy")} // Corrected navigation
            >
              Privacy Policy
            </p>
            <span>|</span>
            <p
              className="cursor-pointer"
              onClick={() => navigate("/terms-and-condition")} // Corrected navigation
            >
              Terms and conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

