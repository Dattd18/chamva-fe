import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="w-full bg-gray-100">
      <div className="w-full px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ml-20">
            <Link to="/">
              <img alt="logo" className="w-20 h-20 cursor-pointer" src={logo} />
            </Link>
          </div>

          {/* Navigation Menu & Icons */}
          <div className="flex items-center space-x-12">
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-indigo-600 hover:text-indigo-800 font-medium text-xl transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-indigo-600 hover:text-indigo-800 font-medium text-xl transition-colors duration-200"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-indigo-600 hover:text-indigo-800 font-medium text-xl transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-indigo-600 hover:text-indigo-800 font-medium text-xl transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/location"
                className="text-indigo-600 hover:text-indigo-800 font-medium text-xl transition-colors duration-200"
              >
                Location
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              <button className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <Search size={22} />
              </button>
              <button className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <ShoppingCart size={22} />
              </button>
              <button className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <User size={22} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-indigo-600 hover:text-indigo-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-100">
        <div className="px-4 py-2 space-y-1 bg-white">
          <a
            href="#home"
            className="block px-3 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Home
          </a>
          <a
            href="#shop"
            className="block px-3 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Shop
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Contact
          </a>
          <a
            href="#location"
            className="block px-3 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Location
          </a>
        </div>
      </div>
    </header>
  );
}
