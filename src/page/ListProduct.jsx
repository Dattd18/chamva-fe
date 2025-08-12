import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import productData from "../data/productData";
import { ShoppingCart, Eye } from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";
import bg6 from "../assets/IMG_8357.jpg";

const ProductsByCategory = () => {
  const categoryOrder = ["khan", "tui", "thocam"];
  const navigate = useNavigate();

  const categories = [...new Set(productData.map((p) => p.category))].sort(
    (a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);

      if (indexA === -1 && indexB === -1) return 0; // cả 2 không nằm trong list chuẩn
      if (indexA === -1) return 1; // a không có -> cho xuống cuối
      if (indexB === -1) return -1; // b không có -> cho xuống cuối

      return indexA - indexB; // so sánh vị trí trong categoryOrder
    }
  );

  const [page, setPage] = useState(
    categories.reduce((acc, category) => {
      acc[category] = 1;
      return acc;
    }, {})
  );

  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Thay đổi số sản phẩm mỗi hàng khi responsive
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handlePageChange = (category, newPage) => {
    setPage((prev) => ({
      ...prev,
      [category]: newPage,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Nội dung */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        {categories.map((category) => {
          const products = productData.filter((p) => p.category === category);
          const totalPages = Math.ceil(products.length / itemsPerPage);
          const startIndex = (page[category] - 1) * itemsPerPage;
          const displayedProducts = products.slice(
            startIndex,
            startIndex + itemsPerPage
          );

          return (
            <div key={category} className="mb-12 w-full">
              {/* Tên category */}
              <h2 className="text-center text-xl uppercase mb-6 relative">
                <span className="px-4 bg-white relative z-10 text-indigo-600">
                  {category === "khan"
                    ? "Khăn"
                    : category === "tui"
                    ? "Túi"
                    : category === "thocam"
                    ? "Vải thổ cẩm"
                    : "Sản phẩm khác"}
                </span>
                <div className="absolute left-0 right-0 top-1/2 border-t border-dotted border-gray-400 -z-0"></div>
              </h2>

              {/* Danh sách sản phẩm — grid nằm trong từng category */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {displayedProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="relative group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                  >
                    {/* Ảnh sản phẩm */}
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />

                    {/* Overlay icon */}
                    <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                      <button className="bg-white p-2 rounded-full text-purple-600 hover:text-purple-800 shadow">
                        <ShoppingCart size={22} />
                      </button>
                      <button className="bg-white p-2 rounded-full text-purple-600 hover:text-purple-800 shadow">
                        <Eye size={22} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phân trang */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(category, index + 1)}
                      className={`w-3 h-3 rounded-full ${
                        page[category] === index + 1
                          ? "bg-purple-600"
                          : "bg-gray-300"
                      }`}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </main>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsByCategory;
