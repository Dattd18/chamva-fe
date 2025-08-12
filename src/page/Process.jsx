import React, { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useLocation } from "react-router-dom";

// Mock data để demo - trong thực tế sẽ lấy từ cart context

const useCheckoutData = () => {
  const location = useLocation();

  // Kiểm tra nếu có dữ liệu từ cart
  if (location.state?.items) {
    return location.state;
  }

  // Nếu không có dữ liệu, redirect về cart hoặc dùng mock data
  const mockData = {
    items: [
      {
        id: 1,
        name: "Túi quai chéo thổ cẩm Chamva",
        price: 150000,
        quantity: 1,
        images: ["/api/placeholder/80/80"],
      },
    ],
    total: 150000,
    selectedCount: 1,
  };

  return mockData;
};
export default function CheckoutPage() {
  const checkoutData = useCheckoutData();

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("vnpay");
  const [promoCode, setPromoCode] = useState("");

  const orderItems = checkoutData.items;
  console.log("Order Items:", orderItems);
  
  const subtotal = checkoutData.total;
  const shipping = 0; // Miễn phí vận chuyển
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đặt hàng thành công! Tổng tiền: ${total.toLocaleString()}đ`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-5 w-5" />
                Quay lại giỏ hàng
              </button>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Thanh toán</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form thông tin */}
          <div className="space-y-8">
            {/* Thông tin nhận hàng */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2
                className="text-xl font-semibold  mb-6"
                style={{ color: "#545A9D" }}
              >
                Thông tin nhận hàng
              </h2>

              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Họ và tên"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="Tỉnh thành"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white"
                    >
                      <option value="">Quận huyện</option>
                      <option value="quan1">Quận 1</option>
                      <option value="quan2">Quận 2</option>
                      <option value="quan3">Quận 3</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select
                      name="ward"
                      value={formData.ward}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white"
                    >
                      <option value="">Phường xã</option>
                      <option value="phuong1">Phường 1</option>
                      <option value="phuong2">Phường 2</option>
                      <option value="phuong3">Phường 3</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <textarea
                    name="notes"
                    placeholder="Ghi chú (tùy chọn)"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Phương thức thanh toán */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-6">
                Thanh Toán
              </h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="vnpay"
                    checked={paymentMethod === "vnpay"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="flex-1">Thanh toán qua VNPAY-QR</span>
                  <img
                    src="/api/placeholder/60/30"
                    alt="VNPAY"
                    className="h-6"
                  />
                </label>

                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="flex-1">Thanh toán khi giao hàng (COD)</span>
                  <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium">
                    COD
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Tóm tắt đơn hàng */}
          <div className="lg:sticky lg:top-4">
            <div
              className="rounded-lg shadow-sm text-white p-6"
              style={{ backgroundColor: "#545A9D" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">
                  Đơn hàng ({orderItems.length} sản phẩm)
                </h2>
              </div>

              {/* Danh sách sản phẩm */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-28 h-28 object-cover rounded-lg"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-white/90 font-medium text-xl">
                        {item.price.toLocaleString()}₫
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mã giảm giá */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg text-gray-900 text-sm"
                  />
                  <button className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                    Áp dụng
                  </button>
                </div>
              </div>

              {/* Tổng tiền */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí vận chuyển</span>
                  <span className="text-green-300">Miễn phí</span>
                </div>
                <div className="border-t border-blue-500 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Tổng cộng</span>
                    <span>{total.toLocaleString()}₫</span>
                  </div>
                </div>
              </div>

              {/* Nút đặt hàng */}
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                ĐẶT HÀNG
              </button>
            </div>

            {/* Thông tin hỗ trợ */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Thông tin liên hệ
                </h3>
                <p className="text-sm text-gray-600">
                  📍 111 Tố 4, Ấp Phum Soài
                </p>
                <p className="text-sm text-gray-600">📞 0903 321 046</p>
                <p className="text-sm text-gray-600">✉️ chamva@gmail.com</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Mạng Xã Hội
                </h3>
                <p className="text-sm text-gray-600">Facebook</p>
                <p className="text-sm text-gray-600">TikTok</p>
                <p className="text-sm text-gray-600">Fanpage</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-2">Chính Sách</h3>
                <p className="text-sm text-gray-600">• Chính sách bảo mật</p>
                <p className="text-sm text-gray-600">• FAQ</p>
                <p className="text-sm text-gray-600">• Bảo hành & Đổi trả</p>
                <p className="text-sm text-gray-600">• Giao hàng hoà tốc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
