import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";
import bg1 from "../assets/khan5.jpg";
import bg2 from "../assets/khan6.jpg";
import bg3 from "../assets/khan7.jpg";
import tuyendung from "../assets/tuyendung.jpg";
import contact from "../assets/contact.png";

const Contact = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    // Sample images - replace with actual images
    const heroSlides = [bg1, bg2, bg3];
  
  return (
    <div className="min-h-screen bg-light-500">
      <Header />
      {/* Hero Section with Thread Display */}
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Coffee Master Image Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={contact}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    LIÊN HỆ VỚI CHÚNG TÔI
                  </h3>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold mb-2">Email tuyển dụng:</p>
                      <a
                        href="mailto:tuyendung.chamva@gmail.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        chamva.tuyendung@gmail.com
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">
                        Email Customer service:
                      </p>
                      <a
                        href="mailto:chamva.official@gmail.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        chamva.official@gmail.com
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">
                        Email về thông tin business, nhượng quyền và các thông
                        tin khác:
                      </p>
                      <a
                        href="mailto:hanly.chamva@gmail.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        hanly.chamva@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Info Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side - Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={tuyendung}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Right side - Business Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                  CHAMVA
                </h3>

                <div className="space-y-4 text-gray-700">
                  <div className="text-center">
                    <p className="font-semibold">PHONE: 0903321364</p>
                    <p className="text-sm">
                      EMAIL (FOR WORK): CHAMVAAPASTEUR@GMAIL.COM
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <p className="font-semibold text-amber-900 mb-2">
                        ADDRESS
                      </p>
                      <p className="text-sm">
                        114, Ấp Phũm Xoài, Châu Phong, An Giang
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-amber-900 mb-2">
                        ADDRESS
                      </p>
                      <p className="text-sm">
                        114, Ấp Phũm Xoài, Châu Phong, An Giang
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-900 text-center mb-8">
              GỬI TIN NHẮN CHO CHÚNG TÔI
            </h3>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-800 text-white px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
