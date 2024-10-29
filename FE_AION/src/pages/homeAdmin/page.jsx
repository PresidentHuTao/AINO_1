import React from 'react';
import { FaChartPie, FaUser, FaTable, FaBell, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Example icons

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Material Tailwind React</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="py-2 px-4 flex items-center hover:bg-gray-200 font-bold">
              <FaChartPie className="mr-2" />
              <span>Dashboard</span>
            </li>
            <li className="py-2 px-4 flex items-center hover:bg-gray-200">
              <FaUser className="mr-2" />
              <span>Profile</span>
            </li>
            <li className="py-2 px-4 flex items-center hover:bg-gray-200">
              <FaTable className="mr-2" />
              <span>Tables</span>
            </li>
            <li className="py-2 px-4 flex items-center hover:bg-gray-200">
              <FaBell className="mr-2" />
              <span>Notifications</span>
            </li>
          </ul>

          <div className="mt-6 border-t pt-4">
            <ul>
              <li className="py-2 px-4 flex items-center hover:bg-gray-200">
                <FaSignInAlt className="mr-2" />
                <span>Sign In</span>
              </li>
              <li className="py-2 px-4 flex items-center hover:bg-gray-200">
                <FaUserPlus className="mr-2" />
                <span>Sign Up</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        {/* Breadcrumbs and Search */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            <span>Dashboard / Home</span>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-4 py-2"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Analytics Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-sm text-gray-600">Today's Money</h3>
            <p className="text-2xl font-bold">$53k</p>
            <span className="text-green-500 text-sm">+55% than last week</span>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-sm text-gray-600">Today's Users</h3>
            <p className="text-2xl font-bold">2,300</p>
            <span className="text-green-500 text-sm">+3% than last month</span>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-sm text-gray-600">New Clients</h3>
            <p className="text-2xl font-bold">3,462</p>
            <span className="text-red-500 text-sm">-2% than yesterday</span>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-sm text-gray-600">Sales</h3>
            <p className="text-2xl font-bold">$103,430</p>
            <span className="text-green-500 text-sm">+5% than yesterday</span>
          </div>
        </section>

        {/* Charts and Additional Content */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold">Website View</h3>
            <div className="h-64 bg-gray-200 flex justify-center items-center">
              <p>Chart Placeholder (API Needed)</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold">Daily Sales</h3>
            <div className="h-64 bg-gray-200 flex justify-center items-center">
              <p>Chart Placeholder (API Needed)</p>
            </div>
          </div>
        </section>

        {/* Project and Orders Overview */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold">Projects</h3>
            <p>Project List Placeholder (API Needed)</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold">Orders Overview</h3>
            <p>Order Overview Placeholder (API Needed)</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
