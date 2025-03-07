"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaPaw } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          <div className="flex row ">
            Fresh Paws <FaPaw />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:bg-teal-700">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li className="hover:bg-teal-700">
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li className="hover:bg-teal-700">
            <Link href="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li className="hover:bg-teal-700">
            <Link href="/pricing" className="hover:text-gray-200">
              Pricing
            </Link>
          </li>
          <li className="hover:bg-teal-700">
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-teal-600">
          <ul className="flex flex-col space-y-4 text-white text-center">
            <li className="hover:bg-teal-700">
              <Link
                href="/"
                className="block px-4 py-2 transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-teal-700">
              <Link
                href="/about"
                className="block px-4 py-2 transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="hover:bg-teal-700">
              <Link
                href="/services"
                className="block px-4 py-2 transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="hover:bg-teal-700">
              <Link
                href="/pricing"
                className="block px-4 py-2 transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li className="hover:bg-teal-700">
              <Link
                href="/contact"
                className="block px-4 py-2 transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
