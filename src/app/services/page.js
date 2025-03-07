// src/app/pages/services.js or in a components directory

import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Standard Scooping</h2>
          <p className="text-gray-600 mb-4">
            We provide reliable and efficient scooping services for your yard.
            Regular scooping keeps your outdoor space clean and odor-free.
          </p>
          <Link
            href="/book"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition duration-200"
          >
            Book Now
          </Link>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">One-Time Cleanup</h2>
          <p className="text-gray-600 mb-4">
            If your yard needs a deep clean, our one-time service will get rid
            of all pet waste quickly and effectively.
          </p>
          <Link
            href="/book"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition duration-200"
          >
            Book Now
          </Link>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Pet Waste Removal Subscription
          </h2>
          <p className="text-gray-600 mb-4">
            Enjoy the convenience of regular pet waste removal with our
            subscription plan. Choose from weekly, bi-weekly, or monthly
            schedules.
          </p>
          <Link
            href="/book"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className=" bg-teal-600 text-white py-10 md:py-20 px-6 md:px-12 mt-12">
        <h3 className="text-2xl font-semibold text-white text-center">
          Why Choose Fresh Paws?
        </h3>
        <p className="text-white mt-4 max-w-2xl mx-auto text-xl">
          At Fresh Paws, we’re dedicated to making your life easier by keeping
          your yard clean and safe for your pets and family. Let us handle the
          dirty work, so you can focus on enjoying your time outdoors!
        </p>
      </div>
    </div>
  );
}
