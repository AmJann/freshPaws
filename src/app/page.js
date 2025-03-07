import FunFactCard from "./components/FunFactCard";
import Local from "./components/Local";
import RunningDog from "./components/RunningDog";
export default function Home() {
  return (
    <div>
      <div
        className="relative h-[100vh] w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundColor: "rgba(31, 41, 55, .5)",
          backgroundImage: "url('/images/goldenRetrieverGrass.jpg')",
        }}
      >
        {/* Gray overlay */}
        <div
          className="absolute inset-0 bg-gray-800"
          style={{ opacity: 0.5 }}
        ></div>

        {/* Curvy Bottom SVG */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
          {/* White space between image and teal border */}
          <path
            fill="white"
            d="M0,256L80,245.3C160,235,320,213,480,192C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224V320H0Z"
          ></path>

          {/* Teal Border */}
          <path
            fill="none"
            stroke="#14b8a6"
            strokeWidth="30"
            d="M0,256L80,245.3C160,235,320,213,480,192C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224"
          ></path>

          {/* White Border (Drawn Last - On Top) */}
          {/* <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            d="M0,256L80,245.3C160,235,320,213,480,192C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224"
          ></path> */}
        </svg>

        <div className="relative z-10 text-center bg-black/20 p-5">
          <h1 className="text-6xl font-bold text-teal-500">Fresh Paws</h1>
          <h3 className="mt-2 text-3xl font-bold text-gray-200">
            Pet Waste Removal Service
          </h3>
          <p className="mt-4 text-xl text-gray-200">
            More play, less mess! We clean up after your pets so you can enjoy a
            spotless yard.
          </p>

          <button className="mt-8 px-6 py-2 bg-teal-600 text-white rounded-lg shadow-xl hover:bg-teal-700">
            Get a Cleaner Yard Now
          </button>
        </div>
      </div>
      <Local />
      <FunFactCard />
    </div>
  );
}
