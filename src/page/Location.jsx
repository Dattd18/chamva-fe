import React from "react";
import { MapPin, Phone, Clock, ShoppingBag, Navigation, Star } from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";
import Bg from "../assets/Bg.jpg";
import Bg1 from "../assets/g1.png";
import Bg2 from "../assets/location.png";

function Location() {
  const storeHours = [
    { day: "Thứ 2 - Thứ 6", hours: "8:00 - 20:00" },
    { day: "Thứ 7 - Chủ nhật", hours: "8:00 - 21:00" },
    { day: "Lễ Tết", hours: "9:00 - 18:00" },
  ];

  const features = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Sản phẩm thủ công",
      desc: "Thổ cẩm Chăm dệt tay tinh xảo, mang đậm bản sắc văn hóa",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Chất lượng cao",
      desc: "Sử dụng nguyên liệu tốt, bền đẹp theo thời gian",
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Vị trí thuận lợi",
      desc: "Dễ dàng tìm thấy tại trung tâm làng Chăm An Giang",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner */}
      <section
        className="relative h-[650px] bg-cover bg-center bg-no-repeat mt-6"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <img
            src={Bg1}
            className="rounded-2xl mx-auto mt-[300px] ml-10 w-64 h-80 object-cover"
          />
        </div>
      </section>

      {/* Main Location Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Store Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src={Bg2} className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">CHAMVA Thổ Cẩm</h3>
                  <p className="text-amber-200">
                    Sản phẩm thủ công truyền thống An Giang
                  </p>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Store Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-amber-900 mb-4">
                  CHAMVA THỔ CẨM AN GIANG
                </h2>
                <div className="w-20 h-1 bg-amber-600 mb-6"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Chào mừng bạn đến với CHAMVA - nơi gìn giữ và phát triển
                  nghề dệt thổ cẩm truyền thống của người Chăm tại An Giang.
                  Mỗi sản phẩm là một câu chuyện văn hóa, được dệt nên từ
                  đôi bàn tay khéo léo của các nghệ nhân làng nghề.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid gap-4">
                <div className="flex items-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <MapPin className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Địa chỉ</h4>
                    <p className="text-gray-700">
                      114, Ấp Phũm Xoài, Châu Phong, An Giang
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <Phone className="w-6 h-6 text-blue-700 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Điện thoại</h4>
                    <p className="text-gray-700">0296 xxx xxxx</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <Clock className="w-6 h-6 text-green-700 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900">Giờ mở cửa</h4>
                    <p className="text-gray-700">8:00 - 20:00 (Hàng ngày)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-12">
            GIỜ HOẠT ĐỘNG
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {storeHours.map((schedule, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-amber-900 font-bold text-lg mb-2">
                  {schedule.day}
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {schedule.hours}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-amber-100 rounded-xl">
            <p className="text-amber-800 font-medium">
              🎉 Giảm giá đặc biệt cho đơn hàng trên 1 triệu VNĐ vào thứ 7 & Chủ nhật!
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              ĐIỂM NỔI BẬT
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Khám phá những giá trị văn hóa và sản phẩm tinh xảo của CHAMVA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              BẢN ĐỒ CHỈ ĐƯỜNG
            </h3>
            <p className="text-gray-600">
              Dễ dàng tìm đường đến CHAMVA Thổ Cẩm An Giang
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-700 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-700 mb-2">
                  Bản đồ tương tác
                </h4>
                <p className="text-gray-600 mb-4">
                  114, Ấp Phũm Xoài, Châu Phong, An Giang
                </p>
                <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                  Mở Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-orange-800 text-white mb-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">HẸN GẶP BẠN TẠI CHAMVA!</h3>
          <p className="text-xl mb-8 text-amber-100">
            Ghé thăm cửa hàng để chiêm ngưỡng và sở hữu những sản phẩm thổ cẩm Chăm độc đáo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105">
              Gọi ngay
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300">
              Xem sản phẩm
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Location;
