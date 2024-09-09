"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu icons

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 text-white shadow-lg sticky top-0 z-50 backdrop-blur-lg">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider">
          <Link
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Artur Santos
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-300 transition duration-300 hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-300 transition duration-300 hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-yellow-300 transition duration-300 hover:scale-105"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-300 transition duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8 hover:text-yellow-300 transition duration-300" />
            ) : (
              <AiOutlineMenu className="w-8 h-8 hover:text-yellow-300 transition duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (conditional) */}
      <div
        className={`md:hidden flex flex-col items-center bg-gray-800 bg-opacity-95 backdrop-blur-lg transition-all duration-700 ease-in-out ${
          isOpen
            ? "max-h-96 py-4 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-full"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-6">
          <li>
            <Link
              href="/"
              className="text-lg hover:text-yellow-300 transition duration-300 hover:scale-105"
              onClick={toggleMenu} // Close the menu after clicking
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg hover:text-yellow-300 transition duration-300 hover:scale-105"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-lg hover:text-yellow-300 transition duration-300 hover:scale-105"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg hover:text-yellow-300 transition duration-300 hover:scale-105"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
