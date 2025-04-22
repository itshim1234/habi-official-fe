import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/ArrowRight.webp";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page is at the top on load
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="text-white p-6 md:p-12 font-giloryM">
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Calculate Cost of the total cost to building a new house"
        />
        <link rel="canonical" href="https://habi.one/privacy-policy" />
      </Helmet>
      <div
        className="absolute top-5 md:top-10 right-5 md:right-10 z-10 cursor-pointer"
        onClick={handleGoBack}
      >
        <img
          src={arrow}
          alt="left"
          className="inline rotate-180 pt-0.5 mr-1 mb-1"
        />
        <p className="inline border-b pb-1 md:text-2xl font-giloryS">Back</p>
      </div>
      <div className="max-w-4xl mx-auto shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-20 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-4">
          Last Updated: November 25, 2024
        </p>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            DESIGNASM TECHNOLOGIES PRIVATE LIMITED ("we", "us", or "our")
            respects your privacy and is committed to protecting it through this
            Privacy Policy.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website habi (the
            "Site") or our mobile application (collectively, the "Services").
            Please read this Privacy Policy carefully.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Collection of Your Information
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc ml-6">
            <li>
              Personal Data, such as your name, email address, phone number,
              etc.
            </li>
            <li>
              Derivative Data, such as your IP address, browser type, and access
              times.
            </li>
            <li>
              Mobile Application Information, including access permissions and
              camera usage.
            </li>
            <li>
              Cookies and Tracking Data to enhance the user experience and
              functionality.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Use of Your Information
          </h2>
          <p>
            We use the information collected about you to provide, maintain, and
            improve our Services. Some uses include:
          </p>
          <ul className="list-disc ml-6">
            <li>Account creation and management.</li>
            <li>Processing payments and sending updates.</li>
            <li>Enhancing personalization and operational efficiency.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Storage and Security of Your Data
          </h2>
          <p>
            We retain your data as long as necessary to fulfill the purposes
            outlined in this Privacy Policy. While we strive to protect your
            data, absolute security cannot be guaranteed.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Disclosure of Your Information
          </h2>
          <p>
            Your data may be shared with service providers, legal authorities,
            and during business transactions. We do not sell your personal data
            for promotional purposes.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Push Notifications</h2>
          <p>
            We may send push notifications to inform you about your account or
            updates related to the Services. You may opt out of these
            notifications in your device settings.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Your Rights and Choices
          </h2>
          <p>
            You can request access to your personal data, update it, or request
            its deletion by contacting us. You may also withdraw your consent
            for certain data processing activities.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Grievance Officer</h2>
          <p>
            If you have any concerns about the processing of your information,
            contact our Grievance Officer:
          </p>
          <ul className="list-none ml-6">
            <li>Name: Naveen</li>
            <li>
              Email :
              <a href="mailto:hello@habi.one" className="text-blue-500 ml-1">
                hello@habi.one
              </a>
            </li>
            <li>Phone: +91 9606210818</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be
            posted on this page with the revised "Last Updated" date. By
            continuing to use the Services, you agree to the updated Privacy
            Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

