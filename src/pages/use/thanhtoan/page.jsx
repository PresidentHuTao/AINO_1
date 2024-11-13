import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Layout/DefaultLayout/Navbar";
import CustomerInformation from '../../../components/GioHangComponenst/CustomerInformation';
import DeliveryMethod from '../../../components/GioHangComponenst/DeliveryMethod';
import PickupInfo from '../../../components/GioHangComponenst/PickupInfo';
import ShippingInfo from '../../../components/GioHangComponenst/ShippingInfo';
import PaymentMethod from '../../../components/GioHangComponenst/PaymentMethod';
import OrderSummary from '../../../components/GioHangComponenst/OrderSummary';

const host = "https://provinces.open-api.vn/api/";

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [specificAddress, setSpecificAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [deliveryMethod, setDeliveryMethod] = useState("pickup"); // New state for delivery method
  const [stores, setStores] = useState([]); // New state for stores
  const [selectedStore, setSelectedStore] = useState(""); // New state for selected store
  const [pickupDate, setPickupDate] = useState(""); // New state for pickup date
  const [paymentMethod, setPaymentMethod] = useState("cod"); // New state for payment method

  useEffect(() => {
    const checkoutItems =
      JSON.parse(localStorage.getItem("checkoutItems")) || [];
    const initialQuantities = {};
    let initialTotalAmount = 0;

    checkoutItems.forEach((item) => {
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
      {
        id: "1",
        name: "Cửa hàng A",
        address: "123 Đường A, Quận 1",
        hours: "8:00 - 17:00",
      },
      {
        id: "2",
        name: "Cửa hàng B",
        address: "456 Đường B, Quận 2",
        hours: "9:00 - 18:00",
      },
      {
        id: "3",
        name: "Cửa hàng C",
        address: "789 Đường C, Quận 3",
        hours: "10:00 - 19:00",
      },
    ]);
  }, []);

  const callAPI = async (api) => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  const callApiDistrict = async (provinceId) => {
    try {
      const response = await fetch(`${host}p/${provinceId}?depth=2`);
      const data = await response.json();
      setDistricts(data.districts);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const callApiWard = async (districtId) => {
    try {
      const response = await fetch(`${host}d/${districtId}?depth=2`);
      const data = await response.json();
      setWards(data.wards);
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    setSelectedDistrict("");
    setSelectedWard("");
    setDistricts([]);
    setWards([]);
    setErrors((prev) => ({ ...prev, province: "", district: "", ward: "" }));
    callApiDistrict(provinceId);
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setSelectedWard("");
    setWards([]);
    setErrors((prev) => ({ ...prev, district: "", ward: "" }));
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
    if (deliveryMethod === "pickup") {
      if (!selectedStore) {
        newErrors.store = "Vui lòng chọn cửa hàng";
      }
      if (!pickupDate) {
        newErrors.pickupDate = "Vui lòng chọn thời gian tới lấy hàng";
      } else {
        const today = new Date();
        const selectedDate = new Date(pickupDate);
        if (
          selectedDate < today ||
          selectedDate > new Date(today.setDate(today.getDate() + 7))
        ) {
          newErrors.pickupDate =
            "Ngày nhận hàng phải từ ngày mai đến 7 ngày sau";
        }
      }
    }
    if (deliveryMethod === "shipping") {
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
        const provinceName = provinces.find(
          (p) => p.code === parseInt(selectedProvince)
        )?.name;
        const districtName = districts.find(
          (d) => d.code === parseInt(selectedDistrict)
        )?.name;
        const wardName = wards.find(
          (w) => w.code === parseInt(selectedWard)
        )?.name;

        const orderData = {
          customerInfo: {
            name: customerName.trim(),
            phone: phoneNumber,
            email: email.trim(),
            address:
              deliveryMethod === "pickup"
                ? { store: selectedStore, pickupDate }
                : {
                    province: provinceName,
                    district: districtName,
                    ward: wardName,
                    specificAddress: specificAddress.trim(),
                  },
            paymentMethod: paymentMethod, // Include payment method in order data
          },
          items: cartItems.map((item) => ({
            productId: item.maDinhDanh,
            quantity: quantities[item.maDinhDanh],
            price: parseFloat(item.donGia),
          })),
          totalAmount: totalAmount,
        };

        console.log("Order data:", orderData);

        // ví momo
        if (paymentMethod === "momo") {
          const paymentUrl = `https://momo.vn/pay?amount=${totalAmount}&shippingFee=0`; // Assuming shipping fee is 0
          window.location.href = paymentUrl; // Redirect to Momo payment page
        } else {
        }
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "Có lỗi xảy ra khi xử lý đơn hàng. Vui lòng thử lại.",
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
              <h2 className="text-xl font-semibold mb-4">
                Thông tin khách hàng
              </h2>

              <CustomerInformation
                customerName={customerName}
                setCustomerName={setCustomerName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                email={email}
                setEmail={setEmail}
                errors={errors}
                setErrors={setErrors}
              />

              <DeliveryMethod
                deliveryMethod={deliveryMethod}
                setDeliveryMethod={setDeliveryMethod}
                setErrors={setErrors}
                setPickupDate={setPickupDate}
              />

              {deliveryMethod === "pickup" && (
                <PickupInfo
                  stores={stores}
                  selectedStore={selectedStore}
                  setSelectedStore={setSelectedStore}
                  pickupDate={pickupDate}
                  setPickupDate={setPickupDate}
                  errors={errors}
                  setErrors={setErrors}
                />
              )}

              {deliveryMethod === "shipping" && (
                <ShippingInfo
                  provinces={provinces}
                  districts={districts}
                  wards={wards}
                  selectedProvince={selectedProvince}
                  selectedDistrict={selectedDistrict}
                  selectedWard={selectedWard}
                  specificAddress={specificAddress}
                  handleProvinceChange={handleProvinceChange}
                  handleDistrictChange={handleDistrictChange}
                  setSelectedWard={setSelectedWard}
                  setSpecificAddress={setSpecificAddress}
                  errors={errors}
                  setErrors={setErrors}
                />
              )}

              <PaymentMethod
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                errors={errors}
                setErrors={setErrors}
              />
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full md:w-1/2 px-4">
            <OrderSummary
              cartItems={cartItems}
              quantities={quantities}
              totalAmount={totalAmount}
              errors={errors}
              loading={loading}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
