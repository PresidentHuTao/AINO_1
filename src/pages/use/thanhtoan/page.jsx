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
  const [errors, setErrors] = useState({});
  const [deliveryMethod, setDeliveryMethod] = useState('pickup'); // New state for delivery method
  const [stores, setStores] = useState([]); // New state for stores
  const [selectedStore, setSelectedStore] = useState(''); // New state for selected store
  const [pickupDate, setPickupDate] = useState(''); // New state for pickup date
  const [paymentMethod, setPaymentMethod] = useState('cod'); // New state for payment method

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
    // Fake store data with address and working hours
    setStores([
      { id: '1', name: 'Cửa hàng A', address: '123 Đường A, Quận 1', hours: '8:00 - 17:00' },
      { id: '2', name: 'Cửa hàng B', address: '456 Đường B, Quận 2', hours: '9:00 - 18:00' },
      { id: '3', name: 'Cửa hàng C', address: '789 Đường C, Quận 3', hours: '10:00 - 19:00' },
    ]);
  }, []);

  const callAPI = async (api) => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  }

  const callApiDistrict = async (provinceId) => {
    try {
      const response = await fetch(`${host}p/${provinceId}?depth=2`);
      const data = await response.json();
      setDistricts(data.districts);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  }

  const callApiWard = async (districtId) => {
    try {
      const response = await fetch(`${host}d/${districtId}?depth=2`);
      const data = await response.json();
      setWards(data.wards);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  }

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    setSelectedDistrict('');
    setSelectedWard('');
    setDistricts([]);
    setWards([]);
    setErrors(prev => ({...prev, province: '', district: '', ward: ''}));
    callApiDistrict(provinceId);
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setSelectedWard('');
    setWards([]);
    setErrors(prev => ({...prev, district: '', ward: ''}));
    callApiWard(districtId);
  };

  const validateFields = () => {
    const newErrors = {};

    // Validate customer name
    if (!customerName.trim()) {
      newErrors.name = "Họ tên không được để trống";
    } else if (customerName.length > 100) {
      newErrors.name = "Họ tên không được vượt quá 100 ký tự";
    } else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(customerName)) {
      newErrors.name = "Họ tên chỉ được chứa chữ cái và khoảng trắng";
    }

    // Validate phone number
    if (!phoneNumber) {
      newErrors.phone = "Số điện thoại không được để trống";
    } else if (!/^0\d{9}$/.test(phoneNumber)) {
      newErrors.phone = "Số điện thoại phải có 10 số và bắt đầu bằng số 0";
    }

    // Validate email (not mandatory)
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email không hợp lệ";
    } else if (email.length > 100) {
      newErrors.email = "Email không được vượt quá 100 ký tự";
    }

    // Validate address
    if (deliveryMethod === 'pickup') {
      if (!selectedStore) {
        newErrors.store = "Vui lòng chọn cửa hàng";
      }
      if (!pickupDate) {
        newErrors.pickupDate = "Vui lòng chọn thời gian tới lấy hàng";
      } else {
        const today = new Date();
        const selectedDate = new Date(pickupDate);
        if (selectedDate < today || selectedDate > new Date(today.setDate(today.getDate() + 7))) {
          newErrors.pickupDate = "Ngày nhận hàng phải từ ngày mai đến 7 ngày sau";
        }
      }
    }
    if (deliveryMethod === 'shipping') {
      if (!selectedProvince) {
        newErrors.province = "Vui lòng chọn tỉnh/thành phố";
      }
      if (!selectedDistrict) {
        newErrors.district = "Vui lòng chọn quận/huyện";
      }
      if (!selectedWard) {
        newErrors.ward = "Vui lòng chọn phường/xã";
      }
      if (!specificAddress.trim()) {
        newErrors.address = "Vui lòng nhập địa chỉ cụ thể";
      } else if (specificAddress.length > 250) {
        newErrors.address = "Địa chỉ không được vượt quá 250 ký tự";
      }
    }

    // Validate cart
    if (!cartItems || cartItems.length === 0) {
      newErrors.cart = "Giỏ hàng không được để trống";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      if (validateFields()) {
        // Get province, district, ward names
        const provinceName = provinces.find(p => p.code === parseInt(selectedProvince))?.name;
        const districtName = districts.find(d => d.code === parseInt(selectedDistrict))?.name;
        const wardName = wards.find(w => w.code === parseInt(selectedWard))?.name;

        const orderData = {
          customerInfo: {
            name: customerName.trim(),
            phone: phoneNumber,
            email: email.trim(),
            address: deliveryMethod === 'pickup' ? { store: selectedStore, pickupDate } : {
              province: provinceName,
              district: districtName,
              ward: wardName,
              specificAddress: specificAddress.trim()
            },
            paymentMethod: paymentMethod // Include payment method in order data
          },
          items: cartItems.map(item => ({
            productId: item.maDinhDanh,
            quantity: quantities[item.maDinhDanh],
            price: parseFloat(item.donGia)
          })),
          totalAmount: totalAmount
        };

        console.log('Order data:', orderData);
        
       // ví momo
        if (paymentMethod === 'momo') {
          const paymentUrl = `https://momo.vn/pay?amount=${totalAmount}&shippingFee=0`; // Assuming shipping fee is 0
          window.location.href = paymentUrl; // Redirect to Momo payment page
        } else {
        
        }
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'Có lỗi xảy ra khi xử lý đơn hàng. Vui lòng thử lại.'
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Thanh toán</h1>

        <div className="flex flex-wrap -mx-4">
          {/* Left Column - Customer Information */}
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>
              
              <div className="mb-4">
                <label htmlFor="customerName" className="block text-lg font-semibold mb-2">Họ tên:</label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    setErrors(prev => ({...prev, name: ''}));
                  }}
                  className={`border rounded p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
                  maxLength={100}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-lg font-semibold mb-2">Số điện thoại:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setPhoneNumber(value);
                    setErrors(prev => ({...prev, phone: ''}));
                  }}
                  className={`border rounded p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
                  maxLength={10}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors(prev => ({...prev, email: ''}));
                  }}
                  className={`border rounded p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
                  maxLength={100}
                />
                <p className="text-gray-500 text-sm mt-1">Nhập email để nhận hóa đơn online (*Không bắt buộc)</p>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="deliveryMethod" className="block text-lg font-semibold mb-2">Phương thức nhận hàng:</label>
                <select 
                  id="deliveryMethod" 
                  value={deliveryMethod} 
                  onChange={(e) => {
                    setDeliveryMethod(e.target.value);
                    setErrors(prev => ({...prev, store: '', province: '', district: '', ward: '', address: '', pickupDate: ''}));
                    if (e.target.value === 'pickup') {
                      const today = new Date();
                      const nextDay = new Date(today);
                      nextDay.setDate(today.getDate() + 1);
                      const maxDate = new Date(today);
                      maxDate.setDate(today.getDate() + 7);
                      setPickupDate(nextDay.toISOString().split('T')[0]); // Set default pickup date to tomorrow
                    } else {
                      setPickupDate('');
                    }
                  }} 
                  className={`border rounded p-2 w-full`}
                >
                  <option value="pickup">Nhận hàng tại quầy</option>
                  <option value="shipping">Gửi đi</option>
                </select>
              </div>

              {deliveryMethod === 'pickup' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="store" className="block text-lg font-semibold mb-2">Chọn cửa hàng:</label>
                    <select 
                      id="store" 
                      value={selectedStore} 
                      onChange={(e) => {
                        setSelectedStore(e.target.value);
                        setErrors(prev => ({...prev, store: ''}));
                      }} 
                      className={`border rounded p-2 w-full ${errors.store ? 'border-red-500' : ''}`}
                    >
                      <option value="" disabled>Chọn cửa hàng</option>
                      {stores.map(store => (
                        <option key={store.id} value={store.id}>
                          {store.name} - {store.address} (Giờ mở cửa: {store.hours})
                        </option>
                      ))}
                    </select>
                    {errors.store && <p className="text-red-500 text-sm mt-1">{errors.store}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="pickupDate" className="block text-lg font-semibold mb-2">Chọn thời gian tới lấy hàng:</label>
                    <input
                      type="date"
                      id="pickupDate"
                      value={pickupDate}
                      onChange={(e) => {
                        setPickupDate(e.target.value);
                        setErrors(prev => ({...prev, pickupDate: ''}));
                      }}
                      className={`border rounded p-2 w-full ${errors.pickupDate ? 'border-red-500' : ''}`}
                      min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // Minimum is tomorrow
                      max={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // Maximum is in a week
                    />
                    {errors.pickupDate && <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>}
                  </div>
                </>
              )}

              {deliveryMethod === 'shipping' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="province" className="block text-lg font-semibold mb-2">Chọn tỉnh thành:</label>
                    <select 
                      id="province" 
                      value={selectedProvince} 
                      onChange={handleProvinceChange} 
                      className={`border rounded p-2 w-full ${errors.province ? 'border-red-500' : ''}`}
                    >
                      <option value="" disabled>Chọn tỉnh thành</option>
                      {provinces.map(province => (
                        <option key={province.code} value={province.code}>{province.name}</option>
                      ))}
                    </select>
                    {errors.province && <p className="text-red-500 text-sm mt-1">{errors.province}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="district" className="block text-lg font-semibold mb-2">Chọn quận huyện:</label>
                    <select 
                      id="district" 
                      value={selectedDistrict} 
                      onChange={handleDistrictChange} 
                      className={`border rounded p-2 w-full ${errors.district ? 'border-red-500' : ''}`} 
                      disabled={!selectedProvince}
                    >
                      <option value="" disabled>Chọn quận huyện</option>
                      {districts.map(district => (
                        <option key={district.code} value={district.code}>{district.name}</option>
                      ))}
                    </select>
                    {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="ward" className="block text-lg font-semibold mb-2">Chọn phường xã:</label>
                    <select 
                      id="ward" 
                      value={selectedWard} 
                      onChange={(e) => {
                        setSelectedWard(e.target.value);
                        setErrors(prev => ({...prev, ward: ''}));
                      }} 
                      className={`border rounded p-2 w-full ${errors.ward ? 'border-red-500' : ''}`} 
                      disabled={!selectedDistrict}
                    >
                      <option value="" disabled>Chọn phường xã</option>
                      {wards.map(ward => (
                        <option key={ward.code} value={ward.code}>{ward.name}</option>
                      ))}
                    </select>
                    {errors.ward && <p className="text-red-500 text-sm mt-1">{errors.ward}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="specificAddress" className="block text-lg font-semibold mb-2">Nhập địa chỉ số nhà cụ thể:</label>
                    <input
                      type="text"
                      id="specificAddress"
                      value={specificAddress}
                      onChange={(e) => {
                        setSpecificAddress(e.target.value);
                        setErrors(prev => ({...prev, address: ''}));
                      }}
                      className={`border rounded p-2 w-full ${errors.address ? 'border-red-500' : ''}`}
                      maxLength={250}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                 
                </>
              )}
               {/* Payment Method Section moved to the end */}
               <div className="mb-4">
                    <label htmlFor="paymentMethod" className="block text-lg font-semibold mb-2">Phương thức thanh toán:</label>
                    <select 
                      id="paymentMethod" 
                      value={paymentMethod} 
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setErrors(prev => ({...prev, payment: ''})); // Clear payment errors on change
                      }} 
                      className={`border rounded p-2 w-full ${errors.payment ? 'border-red-500' : ''}`}
                    >
                      <option value="cod">Thanh toán khi nhận hàng</option>
                      <option value="momo">Thanh toán qua Momo</option>
                      <option value="vnpay">Thanh toán qua VNPay</option>
                    </select>
                    {errors.payment && <p className="text-red-500 text-sm mt-1">{errors.payment}</p>}
                  </div>
            </div>
            
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Thông tin đơn hàng</h2>
              {errors.cart && <p className="text-red-500 mb-4">{errors.cart}</p>}
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

              <div className="mt-6">
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
              </div>

              <div className="mt-6">
                {errors.submit && <p className="text-red-500 mb-4">{errors.submit}</p>}
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className={`w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors
                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Đang xử lý...' : 'Xác nhận đơn hàng'}
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default CheckoutPage;
