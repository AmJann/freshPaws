"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">
        About Fresh Paws
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Who Are We?</h2>
          <p className="text-gray-600 mb-4">
            Fresh Paws is a pet waste removal service run by me, Amber
            Jankowski. As a passionate and dedicated pet lover, I have always
            found joy in making life easier for pet owners. With a background in
            software engineering and a strong commitment to providing
            exceptional customer service, I combined my skills and love for
            animals to start this service.
          </p>
          <p className="text-gray-600 mb-4">
            I started this journey as a solo venture, focusing on providing
            reliable, professional, and affordable pet waste removal to make
            your life easier. With my focus on quality, I am here to ensure that
            your yard stays clean and safe for both your pets and family.
          </p>
          <p className="text-gray-600 mb-4">
            When I am not running Fresh Paws, you can find me continuing to
            learn new skills in technology and problem-solving, as well as
            spending time with my family and pets.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Fresh Paws?</h2>
          <p className="text-gray-600 mb-4">
            I know how important it is to have a clean and safe environment for
            your pets and family. That's why Fresh Paws offers a personal,
            friendly approach to pet waste removal. With affordable plans,
            flexible scheduling, and consistent results, you can rely on Fresh
            Paws to handle the dirty work so you don not have to!
          </p>
          <motion.div
            className="mt-4"
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-4">
              Let me take care of your pet waste removal needs with
              professionalism and care. I am committed to making your life
              easier and your outdoor spaces cleaner.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
