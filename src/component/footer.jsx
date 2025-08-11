import { Facebook, Youtube } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked */}
        <div className="block sm:hidden">
          {/* Logo centered on mobile */}
          <div className="flex justify-center">
            <Link to="/">
              <img alt="logo" className="w-16 h-16 cursor-pointer -mb-10" src={logo} />
            </Link>
          </div>
          
          {/* Copyright and Social Media in row */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-1 text-xs text-indigo-600">
              <span>Chamva.com.vn</span>
              <a
                href="#wsp"
                className="text-indigo-600 hover:text-indigo-800 underline font-medium transition-colors duration-200"
              >
                WSP.VN
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <Link
                to="#"
                className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors duration-200"
              >
                <Facebook size={16} className="text-white" />
              </Link>
              <Link
                to="#"
                className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors duration-200"
              >
                <Youtube size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tablet Layout - Stacked but more spacious */}
        <div className="hidden sm:block md:hidden">
          {/* Logo centered on tablet */}
          <div className="flex justify-center mb-4">
            <Link to="/">
              <img alt="logo" className="w-18 h-18 cursor-pointer" src={logo} />
            </Link>
          </div>
          
          {/* Copyright and Social Media in row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-indigo-600">
              <span>Chamva.com.vn</span>
              <a
                href="#wsp"
                className="text-indigo-600 hover:text-indigo-800 underline font-medium transition-colors duration-200"
              >
                WSP.VN
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 ml-10">
              <Link
                to="#"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors duration-200"
              >
                <Facebook size={18} className="text-white" />
              </Link>
              <Link
                to="#"
                className="w-9 h-9 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors duration-200"
              >
                <Youtube size={18} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original horizontal layout */}
        <div className="hidden md:flex md:items-center md:justify-between">
          {/* Copyright Text */}
          <div className="flex items-center space-x-2 text-sm text-indigo-600">
            <span>Chamva.com.vn</span>
            <a
              href="#wsp"
              className="text-indigo-600 hover:text-indigo-800 underline font-medium transition-colors duration-200"
            >
              WSP.VN
            </a>
          </div>

          {/* Center Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img alt="logo" className="w-20 h-20 cursor-pointer ml-96" src={logo} />
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <Link
              to="#"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors duration-200"
            >
              <Facebook size={20} className="text-white" />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors duration-200"
            >
              <Youtube size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}