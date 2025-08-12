// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productData from "../data/productData";
import Header from "../component/header";
import Footer from "../component/footer";
import { ShoppingCart, Eye, PhoneCall } from "lucide-react";
import bg6 from "../assets/IMG_8357.jpg";
import { useCart } from "./CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((p) => p.id.toString() === id);

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    const selectedProduct = productData.find((p) => p.id.toString() === id);
    if (selectedProduct) {
      setMainImage(selectedProduct.images[0]);
    }
  }, [id]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  // Lấy các sản phẩm khác
  const otherProducts = productData.filter((p) => p.id !== product.id);

  const totalPages = Math.ceil(otherProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = otherProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const addToCartHandler = () => {
    addToCart({ ...product, quantity, selectedOption: mainImage });
    setQuantity(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        {/* Bố cục chính */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ảnh sản phẩm */}
          <div>
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[250px] sm:h-[350px] lg:h-[800px] object-contain rounded-lg bg-gray-100"
            />
            <div className="flex gap-2 mt-4">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 object-cover rounded border cursor-pointer ${
                    mainImage === img ? "border-indigo-600" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thông tin sản phẩm */}
          <div className="border p-6 rounded-lg">
            <h1 className="text-xl font-bold text-indigo-700">
              {product.name}
            </h1>
            <p className="text-lg font-semibold mt-2 text-gray-800">
              {product.price.toLocaleString()}đ
            </p>

            <h3 className="mt-4 font-semibold text-indigo-600 text-lg">
              Mô tả sản phẩm:
            </h3>
            <p className="text-sm mt-1">{product.description}</p>

            <h3 className="mt-4 mb-2 font-semibold text-indigo-600 text-lg">
              Kích thước:
            </h3>
            <p className="text-sm">Chiều dài: 130cm</p>
            <p className="text-sm">Rộng: 50cm</p>

            {/* Nút */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => addToCartHandler()}
                className="border border-indigo-600 text-indigo-600 py-2 rounded hover:bg-indigo-50"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
              <button className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                MUA NGAY
              </button>

              {/* Số lượng */}
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 border rounded"
                >
                  –
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Các sản phẩm khác */}
        <h2 className="text-center text-lg font-bold text-indigo-700 mt-12 mb-6">
          Các Sản Phẩm Khác
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="relative group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white p-2 rounded-full text-purple-600 hover:text-purple-800 shadow">
                  <ShoppingCart size={18} />
                </button>
                <button className="bg-white p-2 rounded-full text-purple-600 hover:text-purple-800 shadow">
                  <Eye size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Nút phân trang */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-3 h-3 rounded-full transition ${
                currentPage === i + 1 ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </main>
      <section className="bg-[#4b4fa3] text-white py-3">
        <div className="container mx-auto flex justify-center items-center gap-2 text-sm md:text-base">
          <span className="text-lg">
            <PhoneCall />
          </span>
          <span>
            Hỗ trợ / Mua hàng:{" "}
            <a href="tel:0909697993" className=" hover:text-gray-200">
              0909697993
            </a>
          </span>
        </div>
      </section>
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

export default ProductDetail;
