import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [username, setUsername] = useState(""); // State để lưu tên tài khoản

  useEffect(() => {
    // Lấy tên tài khoản từ localStorage khi component được render
    const storedUsername = localStorage.getItem("sub");
    if (storedUsername) {
      setUsername(storedUsername);  // Lưu tên tài khoản vào state
    } else {
      console.log("Không tìm thấy tên tài khoản trong localStorage");
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700">
              <span>Dashboard</span>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <span>Quản lý bán hàng</span>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <span>Quản lý sản phẩm</span>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <span>Quản lý khách hàng</span>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <span>Quản lý đơn hàng</span>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <span>Quản lý thuộc tính sản phẩm</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="rounded-full mr-2"
            />
            {/* Hiển thị tên tài khoản đã lấy từ localStorage */}
            <span>{username ? username : "Loading..."}</span>
          </div>
        </div>

        {/* Analytics Section */}
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-xl">Impressions</h3>
              <p className="text-2xl font-bold">Cần api</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-xl">Goal</h3>
              <p className="text-2xl font-bold">Cần api</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-xl">Impact</h3>
              <p className="text-2xl font-bold">Cần api</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-xl">Success Rate</h3>
              <p className="text-2xl font-bold">Cần api</p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-bold">Sales Analytics</h3>
            <div className="mt-4 h-64 bg-gray-200 flex justify-center items-center">
              <p>Cần api</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
