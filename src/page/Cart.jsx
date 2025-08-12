import { useCart } from "./CartContext";
import Header from "../component/header";
import Footer from "../component/footer";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [selectedItems, setSelectedItems] = useState(new Set());
  const navigate = useNavigate();

  // Tính tổng tiền cho items được chọn
  const selectedTotal = cartItems
    .filter(item => selectedItems.has(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Tổng tiền tất cả items
  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Số lượng tổng items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Handle select/unselect item
  const handleSelectItem = (itemId) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  // Select/unselect all
  const handleSelectAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map(item => item.id)));
    }
  };

  // Handle quantity update
  const handleQuantityUpdate = (itemId, newQuantity, selectedOption = null) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      setSelectedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    } else {
      updateQuantity(itemId, newQuantity, selectedOption);
    }
  };
    const handleCheckout = () => {
    const itemsToCheckout = selectedItems.size > 0 
      ? cartItems.filter(item => selectedItems.has(item.id))
      : cartItems;
    
    const checkoutData = {
      items: itemsToCheckout,
      total: selectedItems.size > 0 ? selectedTotal : grandTotal,
      selectedCount: selectedItems.size > 0 ? selectedItems.size : cartItems.length
    };

    navigate('/check-out', { state: checkoutData });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Giỏ hàng trống
            </h2>
            <p className="text-gray-600 mb-8">
              Bạn chưa thêm sản phẩm nào vào giỏ hàng
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Tiếp tục mua sắm
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header giỏ hàng */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Giỏ hàng ({totalItems} sản phẩm)
            </h1>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedItems.size === cartItems.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                Chọn tất cả ({cartItems.length})
              </label>
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Xóa tất cả
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Danh sách sản phẩm */}
            <div className="xl:col-span-2">
              <div className="rounded-xl shadow-sm border border-gray-200"
              style={{ backgroundColor: "#545A9D" }}>
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-6 ${
                      index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedItems.has(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="mt-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />

                      {/* Ảnh sản phẩm */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.selectedOption || item.images?.[0]}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                        />
                      </div>

                      {/* Thông tin sản phẩm */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.name}
                        </h3>
                        
                        {/* Tùy chọn sản phẩm */}
                        {item.options && item.options.length > 0 && (
                          <div className="mb-3">
                            <label className="text-sm text-white block mb-1">
                              Tùy chọn:
                            </label>
                            <select
                              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              value={item.selectedOption || ""}
                              onChange={(e) =>
                                handleQuantityUpdate(item.id, item.quantity, e.target.value)
                              }
                            >
                              <option value="">Chọn tùy chọn</option>
                              {item.options.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* Giá */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xl text-white">
                            {item.price.toLocaleString()}đ
                          </span>
                          {item.oldPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {item.oldPrice.toLocaleString()}đ
                            </span>
                          )}
                        </div>

                        {/* Số lượng và xóa */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 border border-gray-300 rounded-lg">
                            <button
                              onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors text-white"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 font-medium min-w-[3rem] text-center text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors text-white"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                            title="Xóa sản phẩm"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tổng kết đơn hàng */}
            <div className="xl:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Tổng kết đơn hàng
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Tạm tính ({totalItems} sản phẩm):
                    </span>
                    <span className="font-medium">
                      {grandTotal.toLocaleString()}đ
                    </span>
                  </div>
                  
                  {selectedItems.size > 0 && selectedItems.size < cartItems.length && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        Đã chọn ({selectedItems.size} sản phẩm):
                      </span>
                      <span className="font-medium text-indigo-600">
                        {selectedTotal.toLocaleString()}đ
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Phí vận chuyển:</span>
                    <span className="font-medium text-green-600">Miễn phí</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-900">
                        Tổng cộng:
                      </span>
                      <span className="text-xl font-bold text-indigo-600">
                        {(selectedItems.size > 0 ? selectedTotal : grandTotal).toLocaleString()}đ
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      selectedItems.size > 0 || cartItems.length > 0
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={cartItems.length === 0}
                    onClick={handleCheckout}
                  >
                    {selectedItems.size > 0 
                      ? `Thanh toán (${selectedItems.size})` 
                      : 'Thanh toán tất cả'
                    }
                  </button>
                  
                  <button 
                    onClick={() => window.history.back()}
                    className="w-full py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>

                {/* Thông tin bảo hành */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">
                    🛡️ Cam kết của CHAMVA
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✅ Miễn phí vận chuyển</li>
                    <li>✅ Đổi trả trong 7 ngày</li>
                    <li>✅ Bảo hành chính hãng</li>
                    <li>✅ Thanh toán an toàn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}