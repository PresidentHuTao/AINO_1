import React, { useState } from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';

const OrderManagement = () => {
  return (
    <div className="min-h-screen flex">
      <NavbarAdmin />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Quản lý đơn hàng</h1>
        
        <div className="mt-4">
          <img 
            src="https://i.imgur.com/LmrD1dI.png"
            alt="Order Management"
            className="max-w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;