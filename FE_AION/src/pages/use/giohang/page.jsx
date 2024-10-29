import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Layout/DefaultLayout/Navbar';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    
    // Khởi tạo số lượng mặc định là 1 cho mỗi sản phẩm
    const initialQuantities = {};
    storedCartItems.forEach(item => {
      initialQuantities[item.maDinhDanh] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const handleRemoveFromCart = (maDinhDanh) => {
    const updatedCart = cartItems.filter(item => item.maDinhDanh !== maDinhDanh);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (maDinhDanh, newQuantity) => {
    if (newQuantity > 0) {
      setQuantities(prev => ({
        ...prev,
        [maDinhDanh]: newQuantity
      }));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const quantity = quantities[item.maDinhDanh] || 1;
      return total + (parseFloat(item.donGia) * quantity);
    }, 0);
  };

  const handleCheckout = () => {
    // Xử lý thanh toán ở đây
    console.log('Proceeding to checkout with items:', cartItems);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Giỏ hàng của bạn</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600">Giỏ hàng của bạn đang trống</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.maDinhDanh} className="flex items-center border-b pb-4">
                  <img 
                    src={item.sanPham.hinhAnh} 
                    alt={item.sanPham.tenSanPham} 
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-semibold">{item.sanPham.tenSanPham}</h3>
                    <p className="text-red-600 font-bold">{item.donGia}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleQuantityChange(item.maDinhDanh, (quantities[item.maDinhDanh] || 1) - 1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantities[item.maDinhDanh] || 1}
                      onChange={(e) => handleQuantityChange(item.maDinhDanh, parseInt(e.target.value))}
                      className="w-16 text-center border rounded p-1"
                    />
                    <button 
                      onClick={() => handleQuantityChange(item.maDinhDanh, (quantities[item.maDinhDanh] || 1) + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.maDinhDanh)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Tổng tiền:</span>
                <span className="text-xl font-bold text-red-600">
                  {calculateTotal().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </span>
              </div>
              
              <div className="mt-6 flex justify-end space-x-4">
                <button 
                  onClick={() => {
                    setCartItems([]);
                    localStorage.removeItem('cartItems');
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Xóa tất cả
                </button>
                <button
                  onClick={handleCheckout}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
