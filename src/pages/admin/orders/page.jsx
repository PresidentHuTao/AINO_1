import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/rest/hoa_don/getAll');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  const handleOrderClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/rest/hdct/Byidhd/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Ensure data is always an array
      const detailsArray = Array.isArray(data) ? data : [data];

      // Filter out any null or undefined details
      const validDetails = detailsArray.filter(detail => detail != null);

      if (validDetails.length > 0) {
        setOrderDetails(validDetails);
        // Get order info from the first detail's hoaDon property
        setSelectedOrder(validDetails[0]?.hoaDon || null);
      } else {
        console.warn('No valid order details found');
        setOrderDetails([]);
        setSelectedOrder(null);
      }

    } catch (error) {
      console.error('Error fetching order details:', error);
      setOrderDetails([]);
      setSelectedOrder(null);
    }
  };

  const handleUpdateStatus = async () => {
    if (!selectedOrder || selectedStatus === null) return;

    // Kiểm tra nếu đơn hàng đã hủy hoặc thành công thì không cho cập nhật
    if (selectedOrder.trangThaiThanhToan === 0) {
      alert('Không thể cập nhật đơn hàng đã hủy');
      setShowStatusModal(false);
      setSelectedStatus(null);
      return;
    }

    if (selectedOrder.trangThaiThanhToan === 1) {
      alert('Không thể cập nhật đơn hàng đã thành công');
      setShowStatusModal(false);
      setSelectedStatus(null);
      return;
    }

    try {
      // Update status directly without fetching full order first
      const response = await fetch(`http://localhost:8080/rest/hoa_don/update/${selectedOrder.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedOrder.id,
          trangThaiThanhToan: selectedStatus,
          // Include other required fields from selectedOrder
          tongTien: selectedOrder.tongTien,
          thoiGianLapHoaDon: selectedOrder.thoiGianLapHoaDon,
          diaChiNhanHang: selectedOrder.diaChiNhanHang,
          thongTinTaiKhoan: selectedOrder.thongTinTaiKhoan,
          cuaHang: selectedOrder.cuaHang,
          hinhThucThanhToan: selectedOrder.hinhThucThanhToan,
          voucher: selectedOrder.voucher
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      // Update local state
      setOrders(orders.map(order => 
        order.id === selectedOrder.id 
          ? {...order, trangThaiThanhToan: selectedStatus}
          : order
      ));
      
      setSelectedOrder({...selectedOrder, trangThaiThanhToan: selectedStatus});
      setShowStatusModal(false);
      setSelectedStatus(null);

      alert('Cập nhật trạng thái đơn hàng thành công');

    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Cập nhật trạng thái đơn hàng thất bại');
    }
  };

  return (
    <div className="min-h-screen flex">
      <NavbarAdmin />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Quản lý đơn hàng</h1>
        
        <div className="mt-4 overflow-hidden shadow-lg rounded-lg">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên khách hàng</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời gian lập hóa đơn</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map(order => (
                <tr 
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer" onClick={() => handleOrderClick(order.id)}>{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer" onClick={() => handleOrderClick(order.id)}>{order.thongTinTaiKhoan?.hoTen}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer" onClick={() => handleOrderClick(order.id)}>{order.tongTien?.toLocaleString()}₫</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer" onClick={() => handleOrderClick(order.id)}>{order.thoiGianLapHoaDon}</td>
                  <td className="px-6 py-4 whitespace-nowrap cursor-pointer" onClick={() => handleOrderClick(order.id)}>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.trangThaiThanhToan === 0 ? 'bg-red-100 text-red-800' : 
                        order.trangThaiThanhToan === 1 ? 'bg-green-100 text-green-800' : 
                        order.trangThaiThanhToan === 2 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                      {order.trangThaiThanhToan === 0 ? 'Đã hủy' :
                       order.trangThaiThanhToan === 1 ? 'Thành công' :
                       order.trangThaiThanhToan === 2 ? 'Chờ thanh toán' : 'Không xác định'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {order.trangThaiThanhToan === 2 && (
                      <button 
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowStatusModal(true);
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                      >
                        Cập nhật trạng thái
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showStatusModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
                <h2 className="text-xl font-bold mb-4">Cập nhật trạng thái</h2>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value={1}
                      checked={selectedStatus === 1}
                      onChange={(e) => setSelectedStatus(Number(e.target.value))}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="text-gray-700">Thành công</span>
                  </label>
                  <label className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value={0}
                      checked={selectedStatus === 0}
                      onChange={(e) => setSelectedStatus(Number(e.target.value))}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="text-gray-700">Đã hủy</span>
                  </label>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowStatusModal(false);
                      setSelectedStatus(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleUpdateStatus}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedOrder && orderDetails.length > 0 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg w-3/4 max-h-[80vh] overflow-y-auto shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Chi tiết đơn hàng #{selectedOrder.id}</h2>
                  <button 
                    onClick={() => {
                      setSelectedOrder(null);
                      setOrderDetails([]);
                    }}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Thông tin khách hàng</h3>
                    <div className="space-y-2">
                      <p><span className="font-semibold">Họ tên:</span> {selectedOrder.thongTinTaiKhoan?.hoTen}</p>
                      <p><span className="font-semibold">Số điện thoại:</span> {selectedOrder.thongTinTaiKhoan?.soDienThoai}</p>
                      <p><span className="font-semibold">Email:</span> {selectedOrder.thongTinTaiKhoan?.email}</p>
                      <p><span className="font-semibold">CCCD:</span> {selectedOrder.thongTinTaiKhoan?.soCccd}</p>
                      <p><span className="font-semibold">Địa chỉ:</span> {selectedOrder.thongTinTaiKhoan?.diaChi}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Thông tin đơn hàng</h3>
                    <div className="space-y-2">
                      <p><span className="font-semibold">Ngày đặt:</span> {selectedOrder.thoiGianLapHoaDon}</p>
                      <p><span className="font-semibold">Trạng thái:</span> 
                        <span className={`ml-2 px-2 py-1 rounded-full text-sm font-semibold
                          ${selectedOrder.trangThaiThanhToan === 0 ? 'bg-red-100 text-red-800' : 
                            selectedOrder.trangThaiThanhToan === 1 ? 'bg-green-100 text-green-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                          {selectedOrder.trangThaiThanhToan === 0 ? 'Đã hủy' :
                           selectedOrder.trangThaiThanhToan === 1 ? 'Thành công' :
                           selectedOrder.trangThaiThanhToan === 2 ? 'Chờ thanh toán' : 'Không xác định'}
                        </span>
                      </p>
                      <p><span className="font-semibold">Địa chỉ nhận hàng:</span> {selectedOrder.diaChiNhanHang}</p>
                      <p><span className="font-semibold">Hình thức thanh toán:</span> {selectedOrder.hinhThucThanhToan?.tenHinhThuc}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-4">Thông tin cửa hàng</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p><span className="font-semibold">Tỉnh/Thành phố:</span> {selectedOrder.cuaHang?.tinh}</p>
                      <p><span className="font-semibold">Quận/Huyện:</span> {selectedOrder.cuaHang?.huyen}</p>
                      <p><span className="font-semibold">Phường/Xã:</span> {selectedOrder.cuaHang?.phuong}</p>
                    </div>
                    <div>
                      <p><span className="font-semibold">Địa chỉ:</span> {selectedOrder.cuaHang?.soNha}</p>
                      <p><span className="font-semibold">Thời gian hoạt động:</span> {selectedOrder.cuaHang?.thoiGianMoCua} - {selectedOrder.cuaHang?.thoiGianDongCua}</p>
                    </div>
                  </div>
                </div>

                {selectedOrder.voucher && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-bold mb-4">Thông tin voucher</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p><span className="font-semibold">Mã voucher:</span> {selectedOrder.voucher.maVoucher}</p>
                        <p><span className="font-semibold">Số tiền giảm tối đa:</span> {selectedOrder.voucher.soTienToiDa?.toLocaleString()}₫</p>
                        <p><span className="font-semibold">Phần trăm giảm:</span> {(selectedOrder.voucher.phanTramApDung * 100)}%</p>
                      </div>
                      <div>
                        <p><span className="font-semibold">Điều kiện áp dụng:</span> Đơn hàng từ {selectedOrder.voucher.dieuKienApDung?.toLocaleString()}₫</p>
                        <p><span className="font-semibold">Thời gian hết hạn:</span> {selectedOrder.voucher.thoiGianHenKet}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sản phẩm</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thông số</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Đơn giá</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orderDetails.map((detail, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <p className="font-bold text-gray-900">{detail.sanPhamChiTiet?.sanPham?.tenSanPham}</p>
                            <p className="text-sm text-gray-500">Mã SP: {detail.sanPhamChiTiet?.maSpct}</p>
                            <p className="text-sm text-gray-500">Năm SX: {detail.sanPhamChiTiet?.sanPham?.namSanXuat}</p>
                            <p className="text-sm text-gray-500">Bảo hành: {detail.sanPhamChiTiet?.sanPham?.thoiHanBaoHanh}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm"><span className="font-semibold">CPU:</span> {detail.sanPhamChiTiet?.cpu?.hangSanXuat} {detail.sanPhamChiTiet?.cpu?.ten}</p>
                            <p className="text-sm"><span className="font-semibold">RAM:</span> {detail.sanPhamChiTiet?.ram?.dungLuong}GB</p>
                            <p className="text-sm"><span className="font-semibold">Ổ cứng:</span> {detail.sanPhamChiTiet?.oluuTru?.dungLuong}GB {detail.sanPhamChiTiet?.oluuTru?.loaiOCung}</p>
                            <p className="text-sm"><span className="font-semibold">GPU:</span> {detail.sanPhamChiTiet?.gpu?.hangSanXuat} {detail.sanPhamChiTiet?.gpu?.ten}</p>
                            <p className="text-sm"><span className="font-semibold">Màn hình:</span> {detail.sanPhamChiTiet?.manHinh?.doPhanGiai}, {detail.sanPhamChiTiet?.manHinh?.tanSoQuet}Hz</p>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{detail.soLuong}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{detail.gia?.toLocaleString()}₫</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{(detail.soLuong * detail.gia)?.toLocaleString()}₫</td>
                        </tr>
                      ))}
                      <tr className="bg-gray-50">
                        <td colSpan="4" className="px-6 py-4 text-right font-bold">Tổng cộng:</td>
                        <td className="px-6 py-4 font-bold text-blue-600">{selectedOrder.tongTien?.toLocaleString()}₫</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;