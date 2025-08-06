import { Facebook, Youtube } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Copyright Text */}
          <div className="flex items-center space-x-2 text-sm text-indigo-600">
            <span>DEN DA © 2017. All Rights Reserved. By</span>
            <a
              href="#wsp"
              className="text-indigo-600 hover:text-indigo-800 underline font-medium transition-colors duration-200"
            >
              WSP.VN
            </a>
          </div>

          {/* Center Logo */}
          <div className="flex items-center ml-96">
            <Link to="/">
              <img alt="logo" className="w-20 h-20 cursor-pointer" src={logo} />
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
