import React from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';

const AttributeManagement = () => {
  return (
    <div className="min-h-screen flex">
      <NavbarAdmin />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Quản lý thuộc tính</h1>
        {/* Add attribute management content here */}
      </main>
    </div>
  );
};

export default AttributeManagement; 