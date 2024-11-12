import React from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';

const CustomerManagement = () => {
  const customers = [
    { id: 1, name: 'Nguyễn Văn A', address: '123 Đường ABC, TP.HCM', phone: '0123456789', email: 'a@example.com' },
    { id: 2, name: 'Trần Thị B', address: '456 Đường DEF, Hà Nội', phone: '0987654321', email: 'b@example.com' },
    { id: 3, name: 'Lê Văn C', address: '789 Đường GHI, Đà Nẵng', phone: '0112233445', email: 'c@example.com' },
  ];

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
                <td className="py-2 px-4 border-b text-left">{customer.name}</td>
                <td className="py-2 px-4 border-b text-left">{customer.address}</td>
                <td className="py-2 px-4 border-b text-left">{customer.phone}</td>
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