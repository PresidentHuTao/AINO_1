import React, { useState, useEffect } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleAddToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
  };

  return (
    <div className="w-full h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Giỏ hàng của bạn</h1>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div className="border border-purple-500 p-4">
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center justify-between mb-2 border-b pb-2">
                <img src={item.image} alt={item.name} className="w-16 h-16" />
                <span className="flex-1 ml-4">{item.name}</span>
                <div className="flex items-center">
                  <input type="number" min="1" defaultValue="1" className="w-12 text-center border" />
                  <span className="flex-1 text-center ml-4">{item.price}</span>
                  <button onClick={() => handleRemoveFromCart(item)} className="text-red-500 ml-4">Xóa</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <div>
              <button className="text-blue-500 mr-4">Chọn tất cả</button>
              <button className="text-red-500">Xóa</button>
            </div>
            <span>Tổng thanh toán sản phẩm: {cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g,"")), 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            <button onClick={handleCheckout} className="p-2 bg-blue-500 text-white">Mua hàng</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
