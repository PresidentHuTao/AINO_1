import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/rest/tttk/getAll');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    // Logic to delete customer
    console.log(`Xóa khách hàng với ID: ${id}`);
  };

  return (
    <div className="min-h-screen flex">
      <NavbarAdmin />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Quản lý khách hàng</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Tên</th>
              <th className="py-2 px-4 border-b text-left">Địa chỉ</th>
              <th className="py-2 px-4 border-b text-left">Số điện thoại</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td className="py-2 px-4 border-b text-left">{customer.hoTen}</td>
                <td className="py-2 px-4 border-b text-left">{customer.diaChi}</td>
                <td className="py-2 px-4 border-b text-left">{customer.soDienThoai}</td>
                <td className="py-2 px-4 border-b text-left">{customer.email}</td>
                <td className="py-2 px-4 border-b text-left">
                  <button 
                    onClick={() => handleDelete(customer.id)} 
                    className="text-red-500 hover:text-red-700"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default CustomerManagement; 