import React from "react";

const Pricing = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">
        Pet Waste Removal Pricing
      </h1>
      <p className="text-gray-600 mt-2">
        Affordable and reliable pet waste removal services to keep your yard
        clean and fresh. Based on standard quarter acre lots.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">
            One-Time Cleanup
          </h2>
          <p className="text-gray-600">
            Great for first-time customers or special occasions.
          </p>
          <p className="text-2xl font-bold text-teal-600">$30 - $60</p>
          <a
            href="#"
            className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
          >
            Book Now
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">
            Bi-Weekly Service (2 visits/month)
          </h2>
          <p className="text-gray-600">
            Perfect for pet owners who need regular cleanup.
          </p>
          <p className="text-2xl font-bold text-teal-600">$30/month</p>
          <p className="text-sm text-gray-500">+$10 per extra dog</p>
          <a
            href="#"
            className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
          >
            Get Started
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">
            Weekly Service (4 visits/month)
          </h2>
          <p className="text-gray-600">
            Best for maintaining a consistently clean yard.
          </p>
          <p className="text-2xl font-bold text-teal-600">$60/month</p>
          <p className="text-sm text-gray-500">+$10 per extra dog</p>
          <a
            href="#"
            className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
          >
            Get Started
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">
            Twice Weekly Service (8 visits/month)
          </h2>
          <p className="text-gray-600">
            Perfect for pet owners who need regular cleanup.
          </p>
          <p className="text-2xl font-bold text-teal-600">$90/month</p>
          <p className="text-sm text-gray-500">+$10 per extra dog</p>
          <a
            href="#"
            className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
          >
            Get Started
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">
            Deodorizing & Sanitizing
          </h2>
          <p className="text-gray-600">
            Keep your yard smelling fresh and bacteria-free.
          </p>
          <p className="text-2xl font-bold text-teal-600">+$10 per visit</p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
          >
            Add to Service
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Commercial</h2>
          <p className="text-gray-600">
            Email or give us a call today for a free quote
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
