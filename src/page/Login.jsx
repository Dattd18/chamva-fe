import React, { useState } from "react";
import { User, MapPin, Phone, Mail, Facebook } from "lucide-react";
import Footer from "../component/footer";
import bg from "../assets/khan5.jpg";
import { useNavigate } from "react-router-dom";

const ChamvaLoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      alert("Đăng nhập thành công!");
      navigate("/"); // Redirect to home page after login
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  const handleRegister = () => {
    if (username && password && email) {
      alert("Đăng ký thành công!");
      setShowLogin(true);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Login Section */}
      <div
        className="flex-1 flex items-center justify-center py-16 relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay để làm rõ content */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* User Icon */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#545A9D" }}
          >
            <User className="w-12 h-12 text-white" />
          </div>

          {/* Login Form */}
          {showLogin ? (
            <div className="space-y-4 w-80">
              <input
                type="text"
                placeholder="Tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-6 py-4 text-white placeholder-white backdrop-blur-sm border-0 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-center text-lg font-medium shadow-lg"
                style={{ backgroundColor: "#545A9D" }}
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 text-white placeholder-white backdrop-blur-sm border-0 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-center text-lg font-medium shadow-lg"
                style={{ backgroundColor: "#545A9D" }}
              />
              <div className="text-center">
                <button
                  onClick={() =>
                    alert("Chức năng quên mật khẩu đang phát triển")
                  }
                  className="hover:text-white text-sm underline font-medium"
                  style={{ color: "white" }}
                >
                  Quên mật khẩu
                </button>
              </div>
              <button
                onClick={handleLogin}
                className="w-56 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium text-base transition-colors shadow-lg ml-10"
                style={{ backgroundColor: "#545A9D" }}
              >
                Đăng nhập
              </button>
            </div>
          ) : (
            /* Register Form */
            <div className="space-y-4 w-80">
              <input
                type="text"
                placeholder="Tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-6 py-4 text-white placeholder-white backdrop-blur-sm border-0 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-center text-lg font-medium shadow-lg"
                style={{ backgroundColor: "#545A9D" }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 text-white placeholder-white backdrop-blur-sm border-0 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-center text-lg font-medium shadow-lg"
                style={{ backgroundColor: "#545A9D" }}
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 text-white placeholder-white backdrop-blur-sm border-0 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-center text-lg font-medium shadow-lg"
                style={{ backgroundColor: "#545A9D" }}
              />
              <button
                onClick={handleRegister}
                className="w-56 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium text-base transition-colors shadow-lg ml-12"
                style={{ backgroundColor: "#545A9D" }}
              >
                Đăng ký
              </button>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => {
              setShowLogin(!showLogin);
              setUsername("");
              setPassword("");
              setEmail("");
            }}
            className="hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors shadow-lg"
            style={{ backgroundColor: "#545A9D" }}
          >
            {showLogin ? "Đăng Ký" : "Đăng Nhập"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ChamvaLoginPage;