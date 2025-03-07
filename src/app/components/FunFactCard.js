"use client";

import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";

export default function FunFactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center md:px-12 mt-12">
        <div className="flex justify-center items-center text-yellow-500 text-4xl mb-3">
          <FaPaw className="text-teal-600" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">🐶💩 Fun Fact!</h3>
        <p className="text-xl text-gray-700 mb-4">
          One gram of dog poop can contain <strong>23 million bacteria</strong>,
          including E. coli and parasites that can linger in soil and water for
          months! Regular cleanup keeps your yard clean <strong>and</strong>{" "}
          protects the environment. 🚀♻️
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition">
          Book a Cleanup Now
        </button>
      </div>
    </motion.div>
  );
}
