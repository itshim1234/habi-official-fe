import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/ArrowRight.webp";

const TermsAndCondition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page is at the top on load
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="text-white p-6 pt-10 md:p-12 font-giloryM">
      <Helmet>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Calculate Cost of the total cost to building a new house"
        />
        <link rel="canonical" href="https://habi.one/terms-and-condition" />
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
      <div className="max-w-5xl mx-auto shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-20 text-center">
          Terms and Conditions
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">General Conditions</h2>
          <ul className="list-disc ml-6">
            <li>
              The Client shall provide the necessary documents for
              liaison/permission from relevant municipal authorities where the
              site is located.
            </li>
            <li>
              Modifications to the client's requirements are only feasible prior
              to the project entering the manufacturing stage; changes requested
              after this point cannot be accommodated.
            </li>
            <li>
              The client may instruct HABI to suspend or terminate work on the
              project via written instruction delivered to the address or
              emailed. HABI will be entitled to full remuneration for services
              rendered and disbursements incurred to the date of instruction.
            </li>
            <li>
              Fees for incomplete stages will be calculated pro rata. For
              projects in the manufacturing stage, the client must bear the
              manufacturing costs.
            </li>
            <li>
              An administration fee of 10% of the amount payable will apply for
              project suspension.
            </li>
            <li>
              If work remains suspended for more than 30 days, the project will
              be deemed terminated, and mobilisation fees will apply pro rata.
            </li>
            <li>
              Resumed projects after suspension will incur updated costs based
              on current market rates and a 10% mobilisation charge.
            </li>
            <li>
              The contract value includes the total market-related construction
              cost, including GST. The construction cost is determined at the
              project's conclusion.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Exclusions</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Design Iterations:</strong> Package includes up to 3
              design iterations; additional iterations charged at ₹25/sqft.
            </li>
            <li>
              <strong>Liaison with Authorities:</strong> Client manages and
              funds liaison with Municipal Corporation, PCB/Environment Dept.,
              AERB, etc.
            </li>
            <li>
              <strong>Government Liaison Assistance:</strong> Services charged
              at ₹10/sqft of the total built-up area.
            </li>
            <li>
              <strong>Temporary Utilities:</strong> Temporary power and water
              connections to be provided by the owner.
            </li>
            <li>
              <strong>Permanent Utilities:</strong> Owner responsible for BESCOM
              and BBMP payments, including deposits, charges, and liaison fees.
            </li>
            <li>
              <strong>Additional Charges:</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Work not specified in the package or outside the site
                  boundary.
                </li>
                <li>
                  Material delivery constraints or small quantity orders charged
                  at actuals.
                </li>
                <li>Road cutting charges for utility connections.</li>
              </ul>
            </li>
            <li>
              <strong>Special Considerations:</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Labour shed included; off-site accommodation incurs extra
                  charges.
                </li>
                <li>Room height exceeding 10ft charged extra.</li>
                <li>
                  Basement construction not included; extra charges apply.
                </li>
                <li>
                  Additional structural support (e.g., retaining walls) incurs
                  extra charges.
                </li>
                <li>
                  Standard isolated foundation included; other foundation types
                  charged based on structural/soil tests.
                </li>
              </ul>
            </li>
            <li>
              <strong>Optional Services:</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  3D walkthrough and interior design available with interior
                  package.
                </li>
                <li>Bore well and submersible pump not included.</li>
                <li>Steel/concrete lofts not included.</li>
              </ul>
            </li>
            <li>
              <strong>Site Levelling:</strong> Additional charges apply if
              ground level needs to be raised above 18 inches.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndCondition;

