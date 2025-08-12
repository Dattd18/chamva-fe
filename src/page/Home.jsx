import React, { useState } from "react";
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
import Header from "../component/header";
import Footer from "../component/footer";
import bg1 from "../assets/khan5.jpg";
import bg2 from "../assets/khan6.jpg";
import bg3 from "../assets/khan7.jpg";
import bg4 from "../assets/IMG_8279.jpg";
import bg5 from "../assets/bg5.png";
import bg6 from "../assets/IMG_8357.jpg";

import img1 from "../assets/Bg.jpg";
import img2 from "../assets/IMG_8333.jpg";
import img3 from "../assets/khan3.jpg";
const ChamvaWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productSlide, setProductSlide] = useState(0); // Separate state for products

  // Sample images - replace with actual images
  const heroSlides = [bg1, bg2, bg3];

  const products = [
    {
      title: "Cuộn tơ",
      image: img1,
      category: "traditional",
    },
    {
      title: "Vải Thổ Cẩm",
      image: img2,
      category: "fabric",
    },
    {
      title: "Túi",
      image: img3,
      category: "accessories",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Slider */}
      <section className="relative h-[650px] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={heroSlides[currentSlide]}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Slider controls */}
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev > 0 ? prev - 1 : heroSlides.length - 1
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev < heroSlides.length - 1 ? prev + 1 : 0
              )
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slider dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center text-indigo-800 mb-12 weight-bold">
            Sản Phẩm Bán Chạy
          </h2>

          <div className="relative">
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Card 1 - Cuốn tơ */}
              <div
                onClick={() => setProductSlide(0)}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  productSlide === 0 ? "ring-4 ring-indigo-500" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-96">
                  <img
                    src={products[0].image}
                    alt="Cuốn tơ"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-indigo-600/90 text-white text-center py-4">
                    <h3 className="text-lg font-medium">{products[0].title}</h3>
                  </div>
                </div>
              </div>

              {/* Card 2 - Vải Thổ Cẩm */}
              <div
                onClick={() => setProductSlide(1)}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  productSlide === 1 ? "ring-4 ring-indigo-500" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-96">
                  <img
                    src={products[1].image}
                    alt="Vải Thổ Cẩm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-indigo-600/90 text-white text-center py-4">
                    <h3 className="text-lg font-medium">{products[1].title}</h3>
                  </div>
                </div>
              </div>

              {/* Card 3 - Túi */}
              <div
                onClick={() => setProductSlide(2)}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  productSlide === 2 ? "ring-4 ring-indigo-500" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-96">
                  <img
                    src={products[2].image}
                    alt="Túi"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-indigo-600/90 text-white text-center py-4">
                    <h3 className="text-lg font-medium">{products[2].title}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setProductSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    productSlide === index ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16">
        <div
          className="max-w-7xl mx-auto px-4 h-[650px]"
          style={{
            backgroundImage: `url(${bg4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <div></div>
            {/* Right side - Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                VỀ CHÚNG TÔI
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ở làng Chăm ven sông An Giang, dệt thổ cẩm từng là nghề của
                  hầu hết các gia đình. Tiếng khung cửi, sắc chỉ rực rỡ và những
                  hoa văn cổ truyền là một phần nhịp sống. Nhưng theo thời gian,
                  nghề dệt thưa dần. Cái khó, cái nhọc khiến nhiều người bỏ
                  khung cửi.
                </p>
                <p>
                  Cuối cùng, cả làng chỉ còn lại cơ sở của chú – người gắn bó
                  với nghề hơn nửa đời. Đã có lúc chú muốn dừng, nhưng ký ức về
                  ông bà, cha mẹ và truyền thống hơn 100 năm vẫn thôi thúc. Nghề
                  này là máu thịt, là niềm tự hào, không thể để mất. Chú bắt tay
                  phục dựng cơ sở, khôi phục từng hoa văn, giữ nguyên kỹ thuật
                  xưa nhưng cải tiến để phù hợp với thời nay. Không chỉ để bán
                  vải, chú muốn nghề sống lại, để con cháu sau này còn biết, còn
                  tiếp nối.
                </p>
                <p>
                  Chamva được hình thành từ ý chí đó – tôn vinh tinh hoa dệt thổ
                  cẩm Chăm, gìn giữ di sản, và đưa nó bước vào đời sống hiện
                  đại. Mỗi sản phẩm là kết nối giữa bàn tay, ký ức và tương lai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 h-[650px]">
          <img
            src={bg5}
            className="w-full h-full object-cover rounded-lg mx-auto mb-4"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-16 bg-white"
        style={{
          backgroundImage: `url(${bg6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/90 backdrop-blur-sm rounded-lg p-8">
            {/* Left side - Contact info */}
            <div className="text-black pt-28">
              <h3 className="text-3xl font-bold mb-8 text-center">
                LIÊN HỆ CHÚNG TÔI
              </h3>
              <div className="text-center space-y-3 text-lg">
                <p className="text-2xl font-bold">CHAMVA</p>
                <p>Hotline: 0903 321 046</p>
                <p>Web: chamva.com.vn</p>
                <p>Fb: https://www.facebook.com/chamva/</p>
                <p>Địa chỉ: Phúm Xoài - Châu Phong - An Giang</p>
                <div className="pt-6">
                  <p className="text-xl font-bold">GIỜ MỞ CỬA</p>
                  <p className="text-lg">T2 - T7: Từ 8h - 18h</p>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 border border-gray-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Ý KIẾN ĐÁNH GIÁ
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tên
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <button
                  onClick={() => alert("Cảm ơn bạn đã gửi tin nhắn!")}
                  className="w-full bg-gray-600 text-white py-3 rounded-md font-medium hover:bg-gray-700 transition-colors mt-6"
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChamvaWebsite;
