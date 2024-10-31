import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Layout/DefaultLayout/Navbar';

const host = "https://provinces.open-api.vn/api/";

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [specificAddress, setSpecificAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({}); // State để lưu trữ thông báo lỗi

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

  useEffect(() => {
    callAPI(`${host}?depth=1`);
  }, []);

  const callAPI = async (api) => {
    try {
      const response = await fetch(api, { mode: 'cors' });
      const data = await response.json();
      setProvinces(data); // Thiết lập state cho các tỉnh
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  }

  const callApiDistrict = async (provinceId) => {
    try {
      const response = await fetch(`${host}p/${provinceId}?depth=2`, { mode: 'cors' });
      const data = await response.json();
      setDistricts(data.districts); // Thiết lập state cho các quận
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  }

  const callApiWard = async (districtId) => {
    try {
      const response = await fetch(`${host}d/${districtId}?depth=2`, { mode: 'cors' });
      const data = await response.json();
      setWards(data.wards); // Thiết lập state cho các phường
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  }

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    setDistricts([]);
    setWards([]);
    callApiDistrict(provinceId);
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setWards([]);
    callApiWard(districtId);
  };

  const validateFields = () => {
    const newErrors = {};
    if (!customerName || customerName.length > 100) newErrors.name = "Họ tên không được để trống và không quá 100 ký tự.";
    if (!/^[0-9]{10}$/.test(phoneNumber)) newErrors.phone = "Số điện thoại phải là 10 số và bắt đầu bằng 0.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 100) newErrors.email = "Email không hợp lệ hoặc không quá 100 ký tự.";
    if (!selectedProvince) newErrors.province = "Vui lòng chọn tỉnh thành.";
    if (!selectedDistrict) newErrors.district = "Vui lòng chọn quận huyện.";
    if (!selectedWard) newErrors.ward = "Vui lòng chọn phường xã.";
    if (!specificAddress) newErrors.address = "Vui lòng nhập địa chỉ cụ thể.";
    if (specificAddress.length > 250) newErrors.addressLength = "Địa chỉ không được vượt quá 250 ký tự.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (validateFields()) {
      console.log('Proceeding to checkout with items:', cartItems);
      console.log('Delivery address:', specificAddress, selectedWard, selectedDistrict, selectedProvince);
      console.log('Customer Info:', { customerName, phoneNumber, email });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Thanh toán</h1>

        <div className="mb-4">
          <label htmlFor="customerName" className="block text-lg font-semibold mb-2">Họ tên:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="border rounded p-2 w-full"
            maxLength={100}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>} {/* Thông báo lỗi */}
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-lg font-semibold mb-2">Số điện thoại:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border rounded p-2 w-full"
            maxLength={10}
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>} {/* Thông báo lỗi */}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 w-full"
            maxLength={100}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>} {/* Thông báo lỗi */}
        </div>

        <div className="mb-4">
          <label htmlFor="province" className="block text-lg font-semibold mb-2">Chọn tỉnh thành:</label>
          <select id="province" value={selectedProvince} onChange={handleProvinceChange} className="border rounded p-2 w-full">
            <option value="" disabled>Chọn tỉnh thành</option>
            {provinces.map(province => (
              <option key={province.code} value={province.code}>{province.name}</option>
            ))}
          </select>
          {errors.province && <p className="text-red-500">{errors.province}</p>} {/* Thông báo lỗi */}
        </div>

        <div className="mb-4">
          <label htmlFor="district" className="block text-lg font-semibold mb-2">Chọn quận huyện:</label>
          <select id="district" value={selectedDistrict} onChange={handleDistrictChange} className="border rounded p-2 w-full" disabled={!selectedProvince}>
            <option value="" disabled>Chọn quận huyện</option>
            {districts.map(district => (
              <option key={district.code} value={district.code}>{district.name}</option>
            ))}
          </select>
          {errors.district && <p className="text-red-500">{errors.district}</p>} {/* Thông báo lỗi */}
        </div>

        <div className="mb-4">
          <label htmlFor="ward" className="block text-lg font-semibold mb-2">Chọn phường xã:</label>
          <select id="ward" value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} className="border rounded p-2 w-full" disabled={!selectedDistrict}>
            <option value="" disabled>Chọn phường xã</option>
            {wards.map(ward => (
              <option key={ward.code} value={ward.code}>{ward.name}</option>
            ))}
          </select>
          {errors.ward && <p className="text-red-500">{errors.ward}</p>} {/* Thông báo lỗi */}
        </div>

        <div className="mb-4">
          <label htmlFor="specificAddress" className="block text-lg font-semibold mb-2">Nhập địa chỉ cụ thể:</label>
          <input
            type="text"
            id="specificAddress"
            value={specificAddress}
            onChange={(e) => setSpecificAddress(e.target.value)}
            className="border rounded p-2 w-full"
            maxLength={250}
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>} {/* Thông báo lỗi */}
          {errors.addressLength && <p className="text-red-500">{errors.addressLength}</p>} {/* Thông báo lỗi độ dài */}
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
            <span className="text-xl font-bold text-gray-600">Miễn phí cái nồn</span>
          </div>

          <div className="flex justify-between items-center pt-4">
            <span className="text-xl font-bold">Tổng cộng:</span>
            <span className="text-2xl font-bold text-red-600">
              {totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </span>
          </div>
        </div>
        {/* Nút xác nhận đơn hàng */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`w-full md:w-auto px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Đang xử lý...' : 'Xác nhận đơn hàng'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default CheckoutPage;
