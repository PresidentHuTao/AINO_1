import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Layout/DefaultLayout/Navbar';

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];
    const initialQuantities = {};
    let initialTotalAmount = 0;

    checkoutItems.forEach(item => {
      initialQuantities[item.maDinhDanh] = item.soLuong;
      initialTotalAmount += item.soLuong * parseFloat(item.donGia);
    });

    setCartItems(checkoutItems);
    setQuantities(initialQuantities);
    setTotalAmount(initialTotalAmount);
  }, []);

  const handleQuantityChange = (maDinhDanh, newQuantity) => {
    const item = cartItems.find(item => item.maDinhDanh === maDinhDanh);
    if (newQuantity > 0 && newQuantity <= item.soLuong) {
      setQuantities(prev => ({
        ...prev,
        [maDinhDanh]: newQuantity
      }));
      
      const updatedTotalAmount = cartItems.reduce((total, cartItem) => {
        const quantity = cartItem.maDinhDanh === maDinhDanh ? 
          newQuantity : 
          quantities[cartItem.maDinhDanh] || 1;
        return total + (parseFloat(cartItem.donGia) * quantity);
      }, 0);
      setTotalAmount(updatedTotalAmount);
    } else {
      alert(`Số lượng sản phẩm không được vượt quá số lượng trong kho`);
    }
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      
      const orderData = {
        items: cartItems.map(item => ({
          maDinhDanh: item.maDinhDanh,
          soLuong: quantities[item.maDinhDanh] || 1,
          donGia: item.donGia
        })),
        tongTien: totalAmount
      };

      const response = await fetch('http://localhost:8080/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error('Đặt hàng thất bại');
      }

      localStorage.removeItem('checkoutItems');
      
      const currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];
      const updatedCart = currentCart.filter(item => 
        !cartItems.some(checkoutItem => checkoutItem.maDinhDanh === item.maDinhDanh)
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      alert('Đặt hàng thành công!');
      window.location.href = '/';
    } catch (error) {
      alert('Đặt hàng thất bại: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Thanh toán</h1>
        
        {/* Thông tin đơn hàng */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Thông tin đơn hàng</h2>
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
                  <h3 className="font-semibold text-lg">{item.sanPham.tenSanPham}</h3>
                  <div className="mt-2 text-gray-600">
                    <p>Đơn giá: <span className="text-red-600 font-semibold">
                      {parseFloat(item.donGia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </span></p>
                    <p>Số lượng: <span className="font-semibold">{quantities[item.maDinhDanh] || 1}</span></p>
                    <p>Thành tiền: <span className="text-red-600 font-semibold">
                      {((quantities[item.maDinhDanh] || 1) * parseFloat(item.donGia)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tổng cộng và nút thanh toán */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-lg font-semibold">Tạm tính:</span>
            <span className="text-xl font-bold text-red-600">
              {totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </span>
          </div>
          
          <div className="flex justify-between items-center border-b py-4">
            <span className="text-lg font-semibold">Phí vận chuyển:</span>
            <span className="text-xl font-bold text-gray-600">Miễn phí</span>
          </div>

          <div className="flex justify-between items-center pt-4">
            <span className="text-xl font-bold">Tổng cộng:</span>
            <span className="text-2xl font-bold text-red-600">
              {totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </span>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Đang xử lý...' : 'Xác nhận thanh toán'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
