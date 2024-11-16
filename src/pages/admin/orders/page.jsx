import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

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

  return (
    <div className="min-h-screen flex">
      <NavbarAdmin />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Quản lý đơn hàng</h1>
        
        <div className="mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-left">Tên khách hàng</th>
                <th className="py-2 px-4 border-b text-left">Tổng tiền</th>
                <th className="py-2 px-4 border-b text-left">Thời gian lập hóa đơn</th>
                <th className="py-2 px-4 border-b text-left">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b text-left">{order.id}</td>
                  <td className="py-2 px-4 border-b text-left">{order.thongTinTaiKhoan.hoTen}</td>
                  <td className="py-2 px-4 border-b text-left">{order.tongTien.toLocaleString()}₫</td>
                  <td className="py-2 px-4 border-b text-left">{order.thoiGianLapHoaDon}</td>
                  <td className="py-2 px-4 border-b text-left">{order.trangThai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;