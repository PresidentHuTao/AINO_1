import React from 'react';

function OrderSummary({ cartItems, quantities, totalAmount, errors, loading, handleCheckout }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Thông tin đơn hàng</h2>
      {errors.cart && (
        <p className="text-red-500 mb-4">{errors.cart}</p>
      )}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.maDinhDanh} className="flex items-center border-b pb-4">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={item.sanPham.hinhAnh}
                alt={item.sanPham.tenSanPham}
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div className="flex-1 ml-4">
              <h3 className="font-semibold text-lg">
                {item.sanPham.tenSanPham}
              </h3>
              <div className="mt-2 text-gray-600">
                <p>
                  Đơn giá:{" "}
                  <span className="text-red-600 font-semibold">
                    {parseFloat(item.donGia).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </p>
                <p>
                  Số lượng:{" "}
                  <span className="font-semibold">
                    {quantities[item.maDinhDanh] || 1}
                  </span>
                </p>
                <p>
                  Thành tiền:{" "}
                  <span className="text-red-600 font-semibold">
                    {((quantities[item.maDinhDanh] || 1) * parseFloat(item.donGia)).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center border-b pb-4">
          <span className="text-lg font-semibold">Tạm tính:</span>
          <span className="text-xl font-bold text-red-600">
            {totalAmount.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>

        <div className="flex justify-between items-center border-b py-4">
          <span className="text-lg font-semibold">Phí vận chuyển:</span>
          <span className="text-xl font-bold text-gray-600">
            Miễn phí
          </span>
        </div>

        <div className="flex justify-between items-center pt-4">
          <span className="text-xl font-bold">Tổng cộng:</span>
          <span className="text-2xl font-bold text-red-600">
            {totalAmount.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
      </div>

      <div className="mt-6">
        {errors.submit && (
          <p className="text-red-500 mb-4">{errors.submit}</p>
        )}
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors
            ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Đang xử lý..." : "Xác nhận đơn hàng"}
        </button>
      </div>
    </div>
  );
}

export default OrderSummary; 