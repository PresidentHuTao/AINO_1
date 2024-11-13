import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Layout/DefaultLayout/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedItems, setSelectedItems] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const uniqueItems = [];
    const initialQuantities = {};
    const initialSelectedItems = {};

    storedCartItems.forEach(item => {
      if (!initialQuantities[item.maDinhDanh]) {
        uniqueItems.push(item);
        initialQuantities[item.maDinhDanh] = 1;
        initialSelectedItems[item.maDinhDanh] = false;
      } else {
        initialQuantities[item.maDinhDanh] += 1;
      }
    });

    setCartItems(uniqueItems);
    setQuantities(initialQuantities);
    setSelectedItems(initialSelectedItems);
  }, []);

  const handleRemoveFromCart = (maDinhDanh) => {
    const updatedCart = cartItems.filter(item => item.maDinhDanh !== maDinhDanh);
    setCartItems(updatedCart);
    
    // Update localStorage with filtered items
    const currentCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = currentCartItems.filter(item => item.maDinhDanh !== maDinhDanh);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[maDinhDanh];
    setQuantities(updatedQuantities);

    const updatedSelectedItems = { ...selectedItems };
    delete updatedSelectedItems[maDinhDanh];
    setSelectedItems(updatedSelectedItems);
  };

  const handleQuantityChange = (maDinhDanh, newQuantity) => {
    const item = cartItems.find(item => item.maDinhDanh === maDinhDanh);
    if (newQuantity > 0 && newQuantity <= item.soLuong) {
      setQuantities(prev => ({
        ...prev,
        [maDinhDanh]: newQuantity
      }));
      
      // Update localStorage with new quantity
      const currentCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const updatedCartItems = currentCartItems.map(cartItem => {
        if (cartItem.maDinhDanh === maDinhDanh) {
          return { ...cartItem, soLuong: newQuantity };
        }
        return cartItem;
      });
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      alert(`Số lượng sản phẩm không được vượt quá số lượng trong kho`);
    }
  };

  const handleSelectItem = (maDinhDanh) => {
    setSelectedItems(prev => ({
      ...prev,
      [maDinhDanh]: !prev[maDinhDanh]
    }));
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const updatedSelectedItems = {};
    cartItems.forEach(item => {
      updatedSelectedItems[item.maDinhDanh] = newSelectAll;
    });
    setSelectedItems(updatedSelectedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (selectedItems[item.maDinhDanh]) {
        const quantity = quantities[item.maDinhDanh] || 1;
        return total + (parseFloat(item.donGia) * quantity);
      }
      return total;
    }, 0);
  };

  const handleCheckout = () => {
    const itemsToCheckout = cartItems.filter(item => selectedItems[item.maDinhDanh]);
    if (itemsToCheckout.length === 0) {
      alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán');
      return;
    }
    
    const checkoutData = itemsToCheckout.map(item => ({
      ...item,
      soLuong: quantities[item.maDinhDanh] || 1
    }));
    localStorage.setItem('checkoutItems', JSON.stringify(checkoutData));
    navigate('/checkout');
  };

  const handleRemoveSelectedItems = () => {
    const itemsToKeep = cartItems.filter(item => !selectedItems[item.maDinhDanh]);
    setCartItems(itemsToKeep);
    
    // Update localStorage with remaining items
    const currentCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = currentCartItems.filter(item => !selectedItems[item.maDinhDanh]);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    const updatedQuantities = { ...quantities };
    const updatedSelectedItems = { ...selectedItems };

    cartItems.forEach(item => {
      if (selectedItems[item.maDinhDanh]) {
        delete updatedQuantities[item.maDinhDanh];
        delete updatedSelectedItems[item.maDinhDanh];
      }
    });

    setQuantities(updatedQuantities);
    setSelectedItems(updatedSelectedItems);
    setSelectAll(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Giỏ hàng của bạn</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600">Giỏ hàng của bạn đang trống</p>
            <Link to="/" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <input 
                type="checkbox" 
                checked={selectAll} 
                onChange={handleSelectAll} 
                className="mr-2"
              />
              <span>Chọn tất cả ({cartItems.length})</span>
            </div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.maDinhDanh} className="flex items-center border-b pb-4">
                  <input 
                    type="checkbox" 
                    checked={selectedItems[item.maDinhDanh] || false} 
                    onChange={() => handleSelectItem(item.maDinhDanh)} 
                    className="mr-4"
                  />
                  <img 
                    src={item.sanPham.hinhAnh} 
                    alt={item.sanPham.tenSanPham} 
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-semibold">{item.sanPham.tenSanPham}</h3>
                    <p className="text-red-600 font-bold">
                      {parseFloat(item.donGia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleQuantityChange(item.maDinhDanh, (quantities[item.maDinhDanh] || 1) - 1)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={item.soLuong}
                      value={quantities[item.maDinhDanh] || 1}
                      onChange={(e) => handleQuantityChange(item.maDinhDanh, parseInt(e.target.value))}
                      className="w-16 text-center border rounded p-1"
                    />
                    <button 
                      onClick={() => handleQuantityChange(item.maDinhDanh, (quantities[item.maDinhDanh] || 1) + 1)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
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
                  onClick={handleRemoveSelectedItems}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Xóa các mục đã chọn
                </button>
                <button
                  onClick={handleCheckout}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Xác nhận
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
