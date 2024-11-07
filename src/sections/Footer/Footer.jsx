import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 py-10 px-5 ml-3">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and Tagline */}
        <div className="col-span-2">
          <h2 className="text-white text-2xl">Logo</h2>
          <p className="mt-2 text-gray-500">The way of living</p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white text-xl">Company</h3>
          <p className="mt-2 text-gray-400">About habi</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-white text-xl">Follow us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <img
                src="/assets/linkedin-icon.png"
                alt="LinkedIn"
                className="w-5 h-5 mr-2"
              />
              LinkedIn
            </li>
            <li className="flex items-center">
              <img
                src="/assets/instagram-icon.png"
                alt="Instagram"
                className="w-5 h-5 mr-2"
              />
              Instagram
            </li>
            <li className="flex items-center">
              <img
                src="/assets/youtube-icon.png"
                alt="YouTube"
                className="w-5 h-5 mr-2"
              />
              YouTube
            </li>
            <li className="flex items-center">
              <img
                src="/assets/twitter-icon.png"
                alt="Twitter"
                className="w-5 h-5 mr-2"
              />
              Twitter
            </li>
            <li className="flex items-center">
              <img
                src="/assets/facebook-icon.png"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Facebook
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-xl">Contact us</h3>
          <p className="flex items-center mt-2 text-gray-400">
            <img
              src="/assets/phone-icon.png"
              alt="Phone"
              className="w-5 h-5 mr-2"
            />
            9606210818
          </p>
          <p className="flex items-center mt-2 text-gray-400">
            <img
              src="/assets/email-icon.png"
              alt="Email"
              className="w-5 h-5 mr-2"
            />
            hello@habi.one
          </p>
          <div className="hidden md:inline">
            <h3 className="text-white text-xl mt-4">Work</h3>
            <p className="mt-2 text-gray-400">Employee Login</p>
          </div>
        </div>
        <div className="md:hidden">
          <h3 className="text-white text-xl">Work</h3>
          <p className="mt-2 text-gray-400">Employee Login</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between text-gray-500 text-sm">
          <p>&copy; 2020 - 24 Designasm Studio Pvt Ltd.</p>
          <div className="space-x-4 mt-2 lg:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms and conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
