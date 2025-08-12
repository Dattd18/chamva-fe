import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useCart } from "../page/CartContext";

export default function Header() {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const { cartItems } = useCart();

  const navItems = [
    { id: "home", label: "TRANG CHỦ", path: "/" },
    { id: "products", label: "SẢN PHẨM", path: "/products" },
    { id: "contact", label: "LIÊN HỆ", path: "/contact" },
    { id: "about", label: "VỀ CHÚNG TÔI", path: "/about" },
  ];

  const getActiveNav = () => {
    const currentPath = location.pathname;
    
    const activeItem = navItems.find(item => {
      if (item.path === "/" && currentPath === "/") {
        return true;
      }
      if (item.path !== "/" && currentPath.startsWith(item.path)) {
        return true;
      }
      return false;
    });

    return activeItem ? activeItem.id : "home";
  };

  const activeNav = getActiveNav();

  return (
    <header className="w-full bg-white shadow-lg relative z-50">
      {/* Hàng trên */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 lg:py-6">
        {/* Logo - căn giữa */}
        <div className="flex items-center justify-center flex-1 ml-0 sm:ml-32 md:ml-48 lg:ml-[650px]">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
          </Link>
        </div>

        {/* Thanh tìm kiếm + Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          {/* Ô tìm kiếm */}
          <div className="relative group">
            <div
              className="flex items-center px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg"
              style={{ backgroundColor: "#545A9D" }}
            >
              <Search
                size={18}
                className="sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:scale-110"
              />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Tìm kiếm..."
                className="ml-2 sm:ml-3 bg-transparent outline-none text-white placeholder-white/80 w-24 sm:w-32 md:w-40 lg:w-48 h-6 sm:h-7 lg:h-8 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
            <Link
              to="/cart"
              className="p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-300 hover:bg-indigo-50 hover:shadow-md transform hover:scale-110 relative group text-[#545A9D]"
            >
              <ShoppingCart size={18} className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 lg:-top-2 lg:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Giỏ hàng
              </div>
            </Link>

            <Link
              to="/login"
              className="inline-block p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-300 hover:bg-indigo-50 hover:shadow-md transform hover:scale-110 relative group text-[#545A9D]"
            >
              <User size={18} className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Tài khoản
              </div>
            </Link>
          </div>

          {/* Ngôn ngữ */}
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 lg:space-x-3 text-xs sm:text-sm font-medium">
            <button className="px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-md transition-all duration-300 border-2 border-indigo-600 bg-indigo-600 text-white">
              Vi
            </button>
            <button className="px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-md transition-all duration-300 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
              En
            </button>
          </div>
        </div>
      </div>

      {/* Hàng dưới - Navigation */}
      <nav className="flex justify-center items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 py-3 sm:py-3.5 lg:py-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white overflow-x-auto">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base whitespace-nowrap
        ${
          activeNav === item.id
            ? "bg-[#545A9D] text-white shadow-lg"
            : "text-gray-600 hover:bg-[#545A9D] hover:text-white hover:shadow-md"
        }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}