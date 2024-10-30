import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Layout/DefaultLayout/Navbar';
import { addToCart } from '../../../utils/cartUtils'; 

const HomePage = () => {
  const [laptops, setLaptops] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await fetch('http://localhost:8080/rest/san_pham_chi_tiet/getAll'); // Fetch laptops from local server
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLaptops(data);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };
    fetchLaptops();
  }, []);

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

  const handleAddToCart = (item) => {
    addToCart(item); // Sử dụng hàm chung
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto py-4 px-4">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold">Chuyển sang dùng Mac</h2>
          <p className="text-lg">Thịnh đẹp trai vô địch vũ trụ</p>
          <img src="https://cdnb.artstation.com/p/assets/images/images/016/802/459/large/shuja-shuaib-banner.jpg?1553535424" alt="MacBook Pro Banner" />
        </div>
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold">MacBook</h3>
        </div>
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentItems.map((laptop) => (
              <div key={laptop.maDinhDanh} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group" onClick={() => window.location.href = `/chitietsanpham/${laptop.maDinhDanh}`}>
                <img src={laptop.sanPham.hinhAnh} alt={laptop.sanPham.tenSanPham} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h3 className="text-sm font-semibold mb-1">{laptop.sanPham.tenSanPham}</h3>
                  <p className="text-red-600 font-bold text-lg mt-1">{laptop.donGia}</p>
                  <div className="mt-2">
                    {laptop.specs && Array.isArray(laptop.specs) && laptop.specs.map((spec, index) => (
                      <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">{spec}</span>
                    ))}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={(e) => { e.stopPropagation(); handleAddToCart(laptop); }} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Thêm vào giỏ</button>
                  </div>
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
          <p>Hiển thị {currentItems.length} trên {laptops.length} sản phẩm</p>
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
                <li>Đổi trả hng</li>
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
            <p>&copy; 2024 Shop thịnh ngựa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
