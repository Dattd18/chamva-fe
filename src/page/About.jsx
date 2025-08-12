import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";
import bg6 from "../assets/IMG_8357.jpg";
import logo from "../assets/IMG_8285.jpg";
import bg4 from "../assets/IMG_8279.jpg";
import bg5 from "../assets/khan5.jpg";
import bg7 from "../assets/bg5.png";
import bg8 from "../assets/bg7.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-light-500">
      <Header />

      {/* Hero Section with Thread Display */}
      <section className="py-16">
        <div
          className="w-full mx-auto px-4 h-[700px]"
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
      <section className="py-20 " style={{ backgroundColor: "#545A9D" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  HÀNH TRÌNH CỦA CHÚNG TÔI
                </h2>
                <div className="w-20 h-1 bg-amber-600"></div>
              </div>

              <div className="space-y-6 text-white leading-relaxed">
                <p className="text-lg">
                  Từ tiếng khung cửi bên bờ sông đến xưởng dệt hôm nay, Chamva
                  được dựng lại bằng ký ức và bàn tay của những người thợ Chăm.
                  Mỗi hoa văn là một lát cắt di sản – được giữ nguyên tinh thần
                  xưa, nhưng trình bày bằng ngôn ngữ của hiện tại.
                </p>
              </div>
            </div>
            {/* Logo/Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src={logo}
                  className="w-full h-full object-cover rounded-none ml-20"
                />
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo/Image - Now first on desktop */}
            <div className="order-1 lg:order-1 flex justify-center">
              <div className="relative">
                <img
                  src={bg5}
                  className="w-full h-full object-cover rounded-none mr-20"
                />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-600 rounded-full opacity-20 animate-pulse"></div>
                <div
                  className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>

            {/* Story Text - Now second on desktop */}
            <div className="order-2 lg:order-2">
              <div className="mb-6">
                <h2
                  className="text-4xl md:text-4xl font-bold text-white mb-4"
                  style={{ color: "#545A9D" }}
                >
                  Sứ mệnh – Tầm nhìn – Giá trị
                </h2>
                <div className="w-20 h-1 bg-amber-600"></div>
              </div>

              <div className="space-y-6 text-white leading-relaxed">
                <p className="text-lg" style={{ color: "#545A9D" }}>
                  <span className="font-bold">Sứ mệnh:</span> Gìn giữ và kể lại
                  di sản dệt thổ cẩm Chăm bằng sản phẩm ứng dụng hằng ngày.
                </p>

                <p className="text-lg" style={{ color: "#545A9D" }}>
                  <span className="font-bold">Tầm nhìn:</span> Trở thành nhịp
                  nối giữa làng nghề và đời sống đương đại, để thổ cẩm Chăm hiện
                  diện bền vững.
                </p>

                <p className="text-lg" style={{ color: "#545A9D" }}>
                  <span className="font-bold">Giá trị:</span> Thủ công chân thật
                  • Tôn trọng văn hóa • Minh bạch • Bền vững • Sáng tạo có trách
                  nhiệm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 h-[650px]">
          <img
            src={bg8}
            className="w-full h-full object-cover rounded-lg mx-auto mb-4"
          />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            {/* Header */}
            <div className="mb-8">
              <h2
                className="text-4xl md:text-4xl font-bold mb-4"
                style={{ color: "#545A9D" }}
              >
                HOẠ TIẾT A NGHÌN
              </h2>
              <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#545A9D" }}
              >
                Họa tiết A Nghìn – tinh hoa của nghề dệt Chăm – được ví như "vân
                mây" trên nền vải. Cái tên A Nghìn bắt nguồn từ ý niệm rằng, để
                tạo ra được hoa văn này, người thợ phải khéo léo và kiên nhẫn
                đến mức "khó như lên trời". Mỗi đường nét đều đòi hỏi kỹ thuật
                dệt ikat điêu luyện, nhuộm và canh sợi chính xác tuyệt đối để
                khi kết hợp, hoa văn hiện ra mềm mại như mây bay. Không chỉ là
                một mô-típ trang trí, A Nghìn còn là dấu ấn văn hoá, là câu
                chuyện về sự tỉ mỉ, bền bỉ và niềm tự hào mà người Chăm gửi gắm
                trong từng tấm vải.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 h-[650px]">
          <img
            src={bg7}
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

export default About;
