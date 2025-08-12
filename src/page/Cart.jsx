import { useCart } from "./CartContext";
import Header from "../component/header";
import Footer from "../component/footer";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Nội dung giỏ hàng */}
      <main className="flex flex-1 gap-6 p-4 max-w-7xl mx-auto w-full">
        {/* Danh sách sản phẩm */}
        <div className="bg-[#3D3B97] text-white p-4 flex-1 rounded-md">
          {cartItems.length === 0 ? (
            <p className="text-center py-10">Giỏ hàng của bạn đang trống</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 border-b border-gray-500 last:border-none"
              >
                <input
                  type="radio"
                  name="selectedItem"
                  className="accent-white"
                />
                <img
                  src={item.selectedOption}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <select
                    className="bg-white text-black text-sm p-1 rounded mt-1"
                    value={item.selectedOption || ""}
                    onChange={(e) =>
                      updateQuantity(item.id, item.quantity, e.target.value)
                    }
                  >
                    <option value="">Chọn</option>
                    {item.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="text-sm mt-2">
                    <span className="font-semibold">
                      {item.price.toLocaleString()}vnd
                    </span>
                    {item.oldPrice && (
                      <span className="line-through ml-2 text-gray-300">
                        {item.oldPrice.toLocaleString()}vnd
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 bg-gray-300 text-black rounded"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 bg-gray-300 text-black rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-white hover:text-red-400"
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {/* Tổng tiền */}
        <div className="w-64 p-4 border rounded-md">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Tổng tiền</span>
            <span className="font-semibold">{total.toLocaleString()}vnd</span>
          </div>
          <button className="w-full bg-[#3D3B97] text-white py-2 rounded hover:bg-[#2c2b70]">
            Thanh toán
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
