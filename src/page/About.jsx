import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";
import Bg from "../assets/bgAbout.png";
import Bg1 from "../assets/g1.png";
import Bg2 from "../assets/IMG_8279.jpg";
import Bg3 from "../assets/IMG_8285.jpg";
import Bg4 from "../assets/IMG_8333.jpg";
import Bg5 from "../assets/IMG_8357.jpg";
import logo from "../assets/logo.png";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for slideshow (using placeholder images)
  const slideImages = [Bg2, Bg3, Bg4, Bg5];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideImages.length) % slideImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="min-h-screen bg-light-500">
      <Header />

      {/* Hero Section with Thread Display */}
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                  OUR STORY
                </h2>
                <div className="w-20 h-1 bg-amber-600"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong>Thổ Cẩm Chăm An Giang</strong> được hình thành từ lâu
                  đời, bắt nguồn từ bàn tay khéo léo của những người phụ nữ Chăm
                  nơi miền Tây sông nước. Không chỉ đơn thuần là một nghề truyền
                  thống để mưu sinh, thổ cẩm Chăm còn chứa đựng trong đó tình
                  yêu quê hương, niềm tự hào văn hóa và bản sắc dân tộc được gìn
                  giữ qua nhiều thế hệ
                </p>

                <p>
                  Các sản phẩm thổ cẩm Chăm mang màu sắc rực rỡ, họa tiết tinh
                  xảo và mang đậm hơi thở của đời sống cộng đồng Chăm. Chúng tôi
                  tự hào giới thiệu đến khách hàng những sản phẩm thổ cẩm được
                  dệt hoàn toàn thủ công, mỗi đường kim mũi chỉ đều ẩn chứa tâm
                  huyết và câu chuyện của người làm ra nó.
                </p>

                <p>
                  Hiện tại, chúng tôi có xưởng sản xuất tại An Giang và đã phân
                  phối sản phẩm đến nhiều tỉnh thành trong cả nước. Trong thời
                  gian tới, chúng tôi đặt mục tiêu đưa thổ cẩm Chăm An Giang ra
                  thị trường quốc tế, để bạn bè năm châu biết đến vẻ đẹp tinh tế
                  và giá trị văn hóa đặc sắc của Việt Nam.
                </p>
              </div>
            </div>

            {/* Logo/Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-amber-50 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <img
                      src={logo}
                      className="w-40 h-40 object-cover rounded-none mb-4"
                    />
                    <p className="text-lg font-semibold text-amber-900">
                      Chamva.com.vn
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-600 rounded-full opacity-20 animate-pulse"></div>
                <div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-amber-50 mb-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-4">
            AUTHENTIC CHAM BROCADE BASE
          </h3>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Sợi vải được nhuộm từ màu tự nhiên và dệt thủ công bởi các nghệ nhân
            Chăm, lưu giữ trọn vẹn hồn cốt và tinh hoa của nghề dệt truyền
            thống.
          </p>

          {/* Image Slideshow */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {slideImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Coffee slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
