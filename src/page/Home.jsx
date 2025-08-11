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
import Bg from "../assets/Bg.jpg";
import Bg1 from "../assets/g1.png";
import Bg2 from "../assets/bg2.jpg";
import Bg3 from "../assets/bg3.jpg";
import Bg4 from "../assets/bg4.jpg";
import Bg5 from "../assets//bg5.png";


const Home = () => {
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

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Purple background with nature image */}
            <div className="relative">
              <div className="bg-indigo-600 rounded-3xl p-12 text-center">
                <img
                  src={Bg2}
                  className="rounded-2xl mx-auto mb-8 w-64 h-80 object-cover"
                />
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Xem thêm
                </button>
              </div>
            </div>

            {/* Right Side - Light background with textile image */}
            <div className="relative">
              <div className="bg-gray-300 rounded-3xl p-12 text-center">
                <img
                  src={Bg3}
                  className="rounded-2xl mx-auto mb-8 w-64 h-80 object-cover"
                />
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <img
          src={Bg4}
          className="rounded-2xl bg-cover bg-center bg-no-repeat w-full h-[450px] object-cover"
        />
      </section>

      {/* Story Section */}
      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full translate-x-48 translate-y-48"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              Câu chuyện của chúng tôi
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-tight">
              OUR STORY
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left column - Decorative quote */}
            <div className="lg:col-span-3">
              <div className="sticky top-8">
                <div className="text-6xl text-amber-300 font-serif leading-none mb-4">
                  "
                </div>
                <p className="text-xl font-light text-amber-700 italic leading-relaxed">
                  Từng sợi chỉ kể một câu chuyện, từng màu sắc mang một ký ức
                </p>
              </div>
            </div>

            {/* Right column - Main content */}
            <div className="lg:col-span-9">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
                      <p className="text-lg text-gray-700 leading-relaxed pl-8">
                        Ở làng Chăm vùng An Giang, dòng sông cùng loại cây không
                        còn xa lạ gì đâu. Trong khung cổ, xác chết rực và hỗ
                        trợng màu sắc tét truyền ngôi nghề dệt thô này cùng thế
                        hệ này đến thế hệ khác.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-amber-400 rounded-full"></div>
                      <p className="text-lg text-gray-700 leading-relaxed pl-8">
                        Cuối tuần này chúng tôi sẽ có dịp đến thăm cụ bà và nơi
                        mà mọi người đều biết tiếng về thổ cẩm cho người địa,
                        cho cả những người muốn mua khăn, thổ cẩm. Chỉ là khó
                        khăn cò mà luật sự hoá, cũng theo thời khi mới đổi họp
                        với thời nay không ích lại đó dễ thân cờ và qua có thật
                        nét về điều mày cái phó heo sau tuần trạng.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
                      <p className="text-lg text-gray-700 leading-relaxed pl-8">
                        Chỉ làm như phục trang có có khối phức tạp thì xin, tiện
                        nguyên trạng thành sốt sáng trang chỉ dần để gọi lợi với
                        thời thôi không đổi kết luôn của chúng tôi, hiện trong
                        trong khoảng cải sửa ấy cùi đói chỉ — con tiến không do
                        thế Chamva được thành học và yếu tố — làm xinh việt hiểu
                        bớt sự xưa của mình Chăm, được gỉ số sấp, và thái rõ
                        hoặc yêu cả nay hơn nữa. Mối sinh hoạt nhật ký yêu sinh
                        phiền lộ tết vui giúa bình tây, là y tế chi đoàng mặt.
                      </p>
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="mt-12 pt-8 border-t border-amber-200">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <p className="text-sm text-amber-700 font-medium">
                          Khám phá thêm về di sản văn hóa Chăm
                        </p>
                      </div>
                      <button className="group bg-gradient-to-r from-amber-400 to-orange-400 text-white px-8 py-3 rounded-full font-medium hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Tìm hiểu thêm
                        <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <img
          src={Bg5}
          className="rounded-2xl bg-cover bg-center bg-no-repeat w-full h-full object-cover"
        />
      </section>
      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Điện thoại
              </h3>
              <p className="text-gray-600">Gọi trực tiếp để tư vấn</p>
            </div>

            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Địa chỉ
              </h3>
              <p className="text-gray-600">Đến tận nơi để trải nghiệm</p>
            </div>

            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Nhắn tin
              </h3>
              <p className="text-gray-600">Liên hệ qua mạng xã hội</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
