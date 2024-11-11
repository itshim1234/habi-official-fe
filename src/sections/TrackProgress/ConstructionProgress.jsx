import React from "react";

const ConstructionProgress = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center w-full xl:max-w-screen-xl xl:mx-auto"
      style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}
    >
      {/* Centered Video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          className="w-[280px] sm:w-[360px] md:w-[450px] lg:w-[500px] drop-shadow-lg"
          src="/path-to-your-video.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      {/* Card Section */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 px-6 mt-10 sm:mt-16">
        {/* Card 1 */}
        <div className="bg-white p-4 shadow-lg rounded-lg max-w-[300px]">
          <h2 className="text-xl font-bold">Design & Documents</h2>
          <p className="text-gray-600 mt-2">
            The app makes it easy to organize and manage your designs and
            documents in one place.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-4 shadow-lg rounded-lg max-w-[300px]">
          <h2 className="text-xl font-bold">Construction on Site</h2>
          <p className="text-gray-600 mt-2">
            Track live updates and monitor construction progress in real-time.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-4 shadow-lg rounded-lg max-w-[300px]">
          <h2 className="text-xl font-bold">Track Stages</h2>
          <p className="text-gray-600 mt-2">
            Monitor each stage of construction, from foundation to completion.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-4 shadow-lg rounded-lg max-w-[300px]">
          <h2 className="text-xl font-bold">Integrated Payment</h2>
          <p className="text-gray-600 mt-2">
            Easily manage all construction payments in one app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionProgress;
