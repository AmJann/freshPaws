import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mt-6 dark:text-gray-100">
        Contact Us
      </h1>
      <p className="text-gray-600 mt-2 dark: text-white">
        Have questions or need to schedule a service? Get in touch with us!
      </p>

      {/* Centered Image Section */}
      <div className="mt-6 flex justify-center">
        <Image
          src="/images/phone.jpeg"
          alt="Phone Contact"
          width={500}
          height={500}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Contact Form */}
      <form className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-lg"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-2 border rounded-lg"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            className="w-full mt-2 p-2 border rounded-lg"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-gray-800">
        <h2 className="text-2xl font-bold">Our Contact Details</h2>
        <p className="mt-2">Phone: (941) 275-3331</p>
        <p>Email: info@freshpaws.com</p>
        <p>Hours 8am - 5pm</p>
        <p>Monday - Friday</p>
      </div>
    </div>
  );
};

export default Contact;
