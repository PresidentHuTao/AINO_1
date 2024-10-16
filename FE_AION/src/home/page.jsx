import React from 'react';

const HomePage = () => {
  const laptops = [
    { id: 1, name: 'MacBook Air 15 inch M2 2023', price: '31.990.000₫', image: '/images/macbook-air-15-m2-2023.jpg', specs: ['Apple M2', '8GB', '256GB', '15.3 inch'] },
    { id: 2, name: 'Asus TUF Gaming F15 FX506HF i5', price: '16.990.000₫', image: '/images/asus-tuf-gaming-f15-fx506hf-i5.jpg', specs: ['i5 11400H', '8GB', '512GB', '15.6"Full HD'] },
    { id: 3, name: 'HP 15s fq5229TU i3 1215U', price: '10.990.000₫', image: '/images/hp-15s-fq5229tu-i3.jpg', specs: ['i3 1215U', '8GB', '256GB', '15.6"Full HD'] },
    { id: 4, name: 'Lenovo Ideapad 3 15IAU7 i3', price: '9.990.000₫', image: '/images/lenovo-ideapad-3-15iau7-i3.jpg', specs: ['i3 1215U', '8GB', '256GB', '15.6"Full HD'] },
    { id: 5, name: 'Acer Aspire 7 Gaming A715 76G 5132 i5', price: '17.990.000₫', image: '/images/acer-aspire-7-gaming-a715-76g-5132-i5.jpg', specs: ['i5 12450H', '8GB', '512GB', '15.6"Full HD'] },
    { id: 6, name: 'Dell XPS 13 9310 i5', price: '28.990.000₫', image: '/images/dell-xps-13-9310-i5.jpg', specs: ['i5 1135G7', '8GB', '512GB SSD', '13.4"Full HD+'] },
    { id: 7, name: 'MSI Modern 14 B11MOU i3', price: '11.990.000₫', image: '/images/msi-modern-14-b11mou-i3.jpg', specs: ['i3 1115G4', '8GB', '256GB SSD', '14"Full HD'] },
    { id: 8, name: 'LG Gram 17 2021 i7', price: '39.990.000₫', image: '/images/lg-gram-17-2021-i7.jpg', specs: ['i7 1165G7', '16GB', '512GB SSD', '17"WQXGA'] },
    { id: 9, name: 'Huawei MateBook D15 R5', price: '14.990.000₫', image: '/images/huawei-matebook-d15-r5.jpg', specs: ['Ryzen 5 3500U', '8GB', '256GB SSD', '15.6"Full HD'] },
    { id: 10, name: 'Microsoft Surface Laptop 4 i5', price: '24.990.000₫', image: '/images/microsoft-surface-laptop-4-i5.jpg', specs: ['i5 1135G7', '8GB', '512GB SSD', '13.5"Touch'] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-yellow-400 text-black py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Thế Giới Di Động</h1>
            <div className="flex items-center space-x-4">
              <input type="text" placeholder="Bạn tìm gì..." className="px-3 py-1 rounded-full" />
              <a href="#" className="hover:underline">Đăng nhập</a>
              <a href="#" className="hover:underline">Giỏ hàng</a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-4 px-4">
        <div className="mb-4">
          <img src="/images/laptop-banner.jpg" alt="Laptop Banner" className="w-full rounded-lg" />
        </div>
        <div className="mb-4">
          <ul className="flex flex-wrap gap-2">
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">MacBook</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">ASUS</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">HP</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">Lenovo</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">Acer</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">Dell</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">MSI</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">Surface</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">LG</a></li>
            <li><a href="#" className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300">GIGABYTE</a></li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="text-sm font-semibold mb-1">{laptop.name}</h3>
                <p className="text-red-600 font-bold text-lg mt-1">{laptop.price}</p>
                <div className="mt-2">
                  {laptop.specs.map((spec, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">{spec}</span>
                  ))}
                </div>
                <div className="mt-2 text-xs text-blue-600">
                  <span className="border border-blue-600 rounded px-1 mr-1">Trả góp 0%</span>
                  <span className="border border-blue-600 rounded px-1">Giảm 1.000.000₫</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-sm">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Thế Giới Di Động. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
