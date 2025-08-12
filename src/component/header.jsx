import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useCart } from "../page/CartContext";

export default function Header() {
  const location = useLocation(); // Hook để lấy đường dẫn hiện tại
  const [searchValue, setSearchValue] = useState("");
  const { cartItems } = useCart();

  const navItems = [
    { id: "home", label: "TRANG CHỦ", path: "/" },
    { id: "products", label: "SẢN PHẨM", path: "/products" },
    { id: "contact", label: "LIÊN HỆ", path: "/contact" },
    { id: "about", label: "VỀ CHÚNG TÔI", path: "/about" },
  ];

  // Function để xác định nav item nào đang active dựa trên pathname
  const getActiveNav = () => {
    const currentPath = location.pathname;
    
    // Tìm nav item khớp với đường dẫn hiện tại
    const activeItem = navItems.find(item => {
      if (item.path === "/" && currentPath === "/") {
        return true; // Trang chủ chính xác
      }
      if (item.path !== "/" && currentPath.startsWith(item.path)) {
        return true; // Các trang khác (bao gồm sub-routes)
      }
      return false;
    });

    return activeItem ? activeItem.id : "home"; // Mặc định về home nếu không tìm thấy
  };

  const activeNav = getActiveNav();

  return (
    <header className="w-full bg-white shadow-lg relative z-50">
      {/* Hàng trên */}
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center justify-center flex-1 ml-[650px]">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-24 h-24" />
          </Link>
        </div>

        {/* Thanh tìm kiếm + Icons */}
        <div className="flex items-center space-x-6">
          {/* Ô tìm kiếm */}
          <div className="relative group">
            <div
              className="flex items-center px-4 py-2 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg"
              style={{ backgroundColor: "#545A9D" }}
            >
              <Search
                size={20}
                className="text-white transition-transform duration-300 group-hover:scale-110"
              />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Tìm kiếm sản phẩm..."
                className="ml-3 bg-transparent outline-none text-white placeholder-white/80 w-48 h-8 text-sm"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <Link
              to="/cart"
              className="p-3 rounded-full transition-all duration-300 hover:bg-indigo-50 hover:shadow-md transform hover:scale-110 relative group text-[#545A9D]"
            >
              <ShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Giỏ hàng
              </div>
            </Link>

            <Link
              to="/login"
              className="inline-block p-3 rounded-full transition-all duration-300 hover:bg-indigo-50 hover:shadow-md transform hover:scale-110 relative group text-[#545A9D]"
            >
              <User size={22} />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tài khoản
              </div>
            </Link>
          </div>

          {/* Ngôn ngữ */}
          <div className="flex items-center space-x-3 text-sm font-medium">
            <button className="px-3 py-1 rounded-md transition-all duration-300 border-2 border-indigo-600 bg-indigo-600 text-white">
              Vi
            </button>
            <button className="px-3 py-1 rounded-md transition-all duration-300 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
              En
            </button>
          </div>
        </div>
      </div>

      {/* Hàng dưới - Navigation */}
      <nav className="flex justify-center items-center space-x-4 py-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105
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