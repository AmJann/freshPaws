import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-teal-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-white text-2xl font-bold">
            Fresh Paws
          </Link>
          {/* <p className="text-gray-200 text-xl">Clean Trails, Wagging Tails</p> */}
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
