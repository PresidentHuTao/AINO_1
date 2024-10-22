import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const laptops = [
    { id: 1, name: 'MacBook Air 13 inch 2020', price: '23.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1', '8GB', '256GB', '13.3 inch'] },
    { id: 2, name: 'MacBook Pro 13 inch 2022', price: '32.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M2', '8GB', '512GB', '13.3 inch'] },
    { id: 3, name: 'MacBook Pro 14 inch 2021', price: '52.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Pro', '16GB', '512GB', '14.2 inch'] },
    { id: 4, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 5, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 6, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 7, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 8, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 9, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 10, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 11, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 12, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 13, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 14, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 15, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 16, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 17, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 18, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 19, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 20, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 21, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 22, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 23, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 24, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 25, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 26, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 27, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 28, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 29, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 30, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 31, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 32, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 33, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 34, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 35, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 36, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 37, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 38, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
    { id: 39, name: 'MacBook Pro 16 inch 2021', price: '62.990.000₫', image: 'https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg', specs: ['M1 Max', '32GB', '1TB', '16.2 inch'] },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = laptops.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(laptops.length / itemsPerPage);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLaptops = laptops.filter(laptop =>
    laptop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentFilteredItems = filteredLaptops.slice(0, indexOfLastItem);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-green-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="flex space-x-4">
              <a href="#" className="hover:underline">Thiết bị</a>
              <a href="#" className="hover:underline">Mac</a>
              <a href="#" className="hover:underline">Laptop</a>
              <a href="/new" className="hover:underline">Tin tức</a>
            </nav>
            <div className="flex items-center space-x-4">
              <input
                icon="fa-solid fa-magnifying-glass"
                type="text"
                placeholder="Tìm kiếm"
                className="px-3 py-1 rounded-full text-black"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Link to="/cart" icon="fa-solid fa-cart-shopping" className="hover:underline">Giỏ hàng ({cartItems.length})</Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-4 px-4">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold">Chuyển sang dùng Mac</h2>
          <p className="text-lg">Thịnh đẹp trai vô địch vũ trụ</p>
          <img src="https://cdnb.artstation.com/p/assets/images/images/016/802/459/large/shuja-shuaib-banner.jpg?1553535424" alt="MacBook Pro Banner" />
        </div>
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold">MacBook</h3>
        </div>
        {currentFilteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentFilteredItems.map((laptop, index) => (
              <div key={laptop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h3 className="text-sm font-semibold mb-1">{indexOfFirstItem + index + 1}. {laptop.name}</h3>
                  <p className="text-red-600 font-bold text-lg mt-1">{laptop.price}</p>
                  <div className="mt-2">
                    {laptop.specs.map((spec, index) => (
                      <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">{spec}</span>
                    ))}
                  </div>
                  <button onClick={() => handleAddToCart(laptop)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Thêm vào giỏ</button>
                  <Link to={`/chitietsanpham/${laptop.id}`} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md inline-block text-center">Xem chi tiết</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-4">
            <p>Không có sản phẩm</p>
          </div>
        )}
        <div className="flex justify-center mt-4 space-x-2">
          <button onClick={handleLoadMore} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded-md">
            Xem thêm
          </button>
        </div>
        <div className="text-center mt-4">
          <p>Hiển thị {currentFilteredItems.length} trên {filteredLaptops.length} sản phẩm</p>
        </div>
      </main>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Tin tức</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg" alt="News 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Bộ đôi laptop siêu mỏng nhẹ mới của MacBook sắp về Việt Nam</h3>
                <p className="text-gray-600 text-sm">23/10/2023</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg" alt="News 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Cập nhật tính năng mới trên Windows 11: Bản Moment 3</h3>
                <p className="text-gray-600 text-sm">4 ngày trước</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://media.studio7thailand.com/69968/MacBook_Pro_13-inch_Silver_1-square_medium.jpg" alt="News 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">ASUS ra mắt ROG Ally: Máy chơi Game cầm tay chạy Windows 11 tại Việt Nam với giá dưới 20 triệu</h3>
                <p className="text-gray-600 text-sm">10/10/2023</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Xem tất cả tin tức</button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-8 text-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-2">Chính sách</h3>
              <ul>
                <li>Trả góp lãi suất 0%</li>
                <li>Giao hàng</li>
                <li>Đổi trả hàng</li>
                <li>Sửa chữa</li>
                <li>Bảo hành</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Thông tin</h3>
              <ul>
                <li>Tuyển dụng</li>
                <li>Góp ý kiến</li>
                <li>Phương thức thanh toán</li>
                <li>Bảo hành sản phẩm</li>
                <li>Liên hệ hợp tác kinh doanh</li>
                <li>Truyền thông</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Hỗ trợ khách hàng</h3>
              <ul>
                <li>Tư vấn mua hàng</li>
                <li>Đơn đặt hàng</li>
                <li>Hướng dẫn sử dụng</li>
                <li>Tìm trung tâm bảo hành</li>
                <li>Tra cứu hóa đơn</li>
                <li>Hỗ trợ kỹ thuật</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 Shop thịnh.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
