import Local from "./components/Local";
export default function Home() {
  return (
    <div>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundColor: "rgba(31, 41, 55, .5)",
          backgroundImage: "url('/images/goldenRetrieverGrass.jpg')",
        }}
      >
        {/* Gray overlay */}
        <div
          className="absolute inset-0 bg-gray-800"
          style={{ opacity: 0.5 }} // Set the opacity here
        />

        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-teal-500">Fresh Paws</h1>
          <h3 className="mt-2 text-3xl font-bold text-gray-200">
            Pet Waste Removal Service
          </h3>
          <p className="mt-4 text-xl text-gray-200">
            We clean up after your pets so you do not have to!
          </p>

          <button className="mt-8 px-6 py-2 bg-teal-600 text-white rounded-lg shadow-xl hover:bg-teal-700">
            Get Started
          </button>
        </div>
      </div>
      <Local />
    </div>
  );
}
