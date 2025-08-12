// ProductList.jsx
import React, { useState } from "react";
import productData from "../data/productData";
import { ShoppingCart, Eye } from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";

const ProductsByCategory = () => {
  const categories = [...new Set(productData.map((p) => p.category))];

  const [page, setPage] = useState(
    categories.reduce((acc, category) => {
      acc[category] = 1;
      return acc;
    }, {})
  );

  const itemsPerPage = 4;

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
            <div key={category} className="mb-12">
              {/* Tên category */}
              <h2 className="text-center text-xl font-bold uppercase mb-6 relative">
                <span className="px-4 bg-white relative z-10 text-indigo-600">
                  {category === "cuonchi"
                    ? "Cuộn Chỉ"
                    : category === "khan"
                    ? "Khăn"
                    : category}
                </span>
                <div className="absolute left-0 right-0 top-1/2 border-t border-dotted border-gray-400 -z-0"></div>
              </h2>

              {/* Danh sách sản phẩm */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                  >
                    {/* Ảnh sản phẩm */}
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />

                    {/* Overlay icon, thấp hơn một chút */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsByCategory;
