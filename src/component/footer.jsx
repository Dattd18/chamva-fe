import { Facebook, Youtube } from "lucide-react";
import logo from "../assets/logoFooter.png";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  MessageCircle,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-4 sm:py-6"
    style={{ backgroundColor: "#545A9D", color: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo CHAMVA */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full h-ful rounded-lg flex items-center justify-center mb-2">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 h-32 object-contain cursor-pointer "
                />
              </Link>
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Thông tin liên hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Địa chỉ: 111 Tổ 4, Ấp Phụm Soai, Châu Phong, Tân Châu, An
                  Giang
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Hotline: 02963 824 465 - 0903 321 046</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>chamva@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Mạng Xã Hội */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Mạng Xã Hội</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4 flex-shrink-0" />
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Youtube className="w-4 h-4 flex-shrink-0" />
                </div>
              </div>
              <p className="text-sm font-medium">Fanpage</p>
            </div>
          </div>

          {/* Chính Sách */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Chính Sách</h4>
            <div className="space-y-2 text-sm">
              <p>• Chính sách bảo mật</p>
              <p>• FAQ</p>
              <p>• Chính sách Bảo Hành & Đổi Trả</p>
              <p>• Chính sách giao hàng toàn quốc</p>
            </div>
          </div>
        </div>
      </div>
      F
    </footer>
  );
}
