import React from "react";
import callus from "../../assets/images/callus.png";
import employeeLogin from "../../assets/images/Employeelogin.png";
import facebook from "../../assets/images/Facebook.png";
import insta from "../../assets/images/insta.png";
import linkedin from "../../assets/images/Linkedin.png";
import mail from "../../assets/images/mail.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-[#000000]  py-10 px-5 ml-3 text-white font-giloryM md:text-lg">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and Tagline */}
        <div className="col-span-2">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-Samarkan text-secondary">
            habi
          </h2>
          <p className="md:mt-4 text-sm">The way of living</p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg md:text-2xl font-giloryS">Company</h3>
          <p className="mt-2">About habi</p>
          <a href="/faq">
            <p className="mt-2">Faq's</p>
          </a>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg md:text-2xl font-giloryS">Follow us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5 mr-2" />
              LinkedIn
            </li>
            <li className="flex items-center">
              <img src={insta} alt="Instagram" className="w-5 h-5 mr-2" />
              Instagram
            </li>
            <li className="flex items-center">
              <img src={youtube} alt="YouTube" className="w-5 h-5 mr-2" />
              YouTube
            </li>
            <li className="flex items-center">
              <img src={twitter} alt="Twitter" className="w-5 h-5 mr-2" />
              Twitter
            </li>
            <li className="flex items-center">
              <img src={facebook} alt="Facebook" className="w-5 h-5 mr-2" />
              Facebook
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg md:text-2xl font-giloryS">Contact us</h3>
          <p className="flex items-center mt-2">
            <img src={callus} alt="Phone" className="w-5 h-5 mr-2" />
            9606210818
          </p>
          <p className="flex items-center mt-2">
            <img src={mail} alt="Email" className="w-5 h-5 mr-2" />
            hello@habi.one
          </p>
          <div className="hidden md:inline">
            <h3 className="text-lg md:text-2xl font-giloryS mt-4">Work</h3>
            <p className="mt-2 flex items-center">
              <img src={employeeLogin} alt="Phone" className="w-5 h-5 mr-2" />
              Employee Login
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <h3 className="text-lg md:text-2xl font-giloryS">Work</h3>
          <p className="mt-2 flex items-center">
            <img src={employeeLogin} alt="Phone" className="w-5 h-5 mr-2" />
            Employee Login
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center xl:pr-[6%]">
        <div className=" mx-auto flex flex-col md:flex-row justify-between text-[#c0c0c0] text-sm">
          <p>&copy; 2020 - 24 Designasm Technologies Pvt Ltd.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/about" className="hover:underline">
              Terms and conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
