import React from "react";
import house from "../../assets/images/house.png";
import arrow from "../../assets/images/ArrowRight.png";

const AboutHabi = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">logo</div>
        <div>
          <img src={arrow} alt="arrow inline" />
          <a href="/" className="text-sm border-b">
            Go back to website
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 lg:px-20 py-8">
        {/* Introduction Section */}
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          About habi
        </h1>

        <section className="md:flex md:items-center lg:justify-between lg:space-x-8 text-center md:text-left">
          <div className="lg:w-3/4 lg:text-left">
            <h2 className="text-lg lg:text-2xl">
              habi has a better way
              <span className="block text-orange-400">
                l which is modular construction and envisioning building as a
                product
              </span>
            </h2>
            <p className="text-md lg:text-lg max-w-2xl">
              We are a One Stop Design Centric 'BaaP' Company. <br />
              We provide design-centric approached services that are tailored to
              meet your unique ideas, needs, desires & requirements to enhance
              your overall experience of home design & construction.
            </p>
            <p className="italic text-gray-400">
              *BaaP = Building as a Product
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/4">
            <img
              src={house}
              alt="Modern House"
              className="rounded-lg shadow-lg mx-auto lg:mx-0"
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="space-y-4 text-center mt-12">
          <h2 className="text-2xl lg:text-3xl font-semibold">Vision</h2>
          <p className="text-md lg:text-lg max-w-4xl mx-auto">
            We envision forging a realm where affordability, accessibility,
            sustainability, and cutting-edge design seamlessly unite to elevate
            the quality of life and foster environmental well-being,
            transcending boundaries on Earth & Beyond.
          </p>
        </section>

        {/* Mission Section */}
        <section className="space-y-4 text-center mt-8">
          <h2 className="text-2xl lg:text-3xl font-semibold">Mission</h2>
          <ul className="space-y-2 text-md lg:text-lg">
            <li>🌿 Sustainable Living Solutions</li>
            <li>🧑‍🦽 Accessible Design for All</li>
            <li>🏡 Smart & Adaptive Spaces</li>
            <li>📦 Modular Centric Construction</li>
            <li>🏭 Industry Leader in Dynamic Manufacturing</li>
          </ul>
        </section>

        {/* Footer Cards */}
        <section className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl">Trust</h3>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl">Indian Design</h3>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl">no. One</h3>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl">Product Value</h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutHabi;
