import React from "react";

const LocalBusiness = () => {
  return (
    <div className="bg-teal-600 text-white py-10 md:py-20 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Title and Icon */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex justify-center md:justify-start items-center">
            Proudly Serving Our Local Community
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-100 text-center md:text-left">
            We are a local, licensed, and insured pet waste removal service. Our
            team takes pride in serving the areas of
            <span className="font-bold text-yellow-100">
              {" "}
              Port Charlotte, North Port, and Venice
            </span>{" "}
            with reliable, professional, and friendly care.
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Get in Touch
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/florida-white-star.png"
            alt="Florida Map"
            className="w-64 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LocalBusiness;
