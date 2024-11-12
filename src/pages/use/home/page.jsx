import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Layout/DefaultLayout/Navbar';
import { addToCart } from '../../../utils/cartUtils';
import Footer from '../../../components/Layout/DefaultLayout/Footer';

const HomePage = () => {
  const [laptops, setLaptops] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    priceRange: '',
    brand: '',
    ram: '',
    storage: '',
    processor: ''
  });

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/rest/san_pham_chi_tiet/getAll');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLaptops(data);
        setHasMore(data.length > itemsPerPage);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLaptops();
  }, []);

  const filterLaptops = (laptops) => {
    return laptops.filter(laptop => {
      const price = parseFloat(laptop.donGia);
      
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (price < min || price > max) return false;
      }
      
      if (filters.brand && laptop.sanPham.thuongHieu !== filters.brand) return false;
      if (filters.ram && laptop.ram !== filters.ram) return false;
      if (filters.storage && laptop.storage !== filters.storage) return false;
      if (filters.processor && laptop.processor !== filters.processor) return false;
      
      return true;
    });
  };

  const filteredLaptops = filterLaptops(laptops);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLaptops.slice(0, indexOfLastItem); // Changed to show all items up to current page
  const totalPages = Math.ceil(filteredLaptops.length / itemsPerPage);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
      setHasMore(currentPage + 1 < totalPages);
    }
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
    setCurrentPage(1);
    setHasMore(true); // Reset hasMore when filters change
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto py-4 px-4">
        {/* Banner Section */}
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold">Chuyển sang dùng Mac</h2>
          <p className="text-lg">Thịnh đẹp trai vô địch vũ trụ các cụ khen hay các cô mê mệt</p>
          <img src="https://cdnb.artstation.com/p/assets/images/images/016/802/459/large/shuja-shuaib-banner.jpg?1553535424" alt="MacBook Pro Banner" className="w-full" />
        </div>

        <div className="flex flex-row gap-4">
          {/* Left Sidebar Filters */}
          <div className="w-full md:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Bộ lọc tìm kiếm</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Giá</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    <option value="0-20000000">Dưới 20 triệu</option>
                    <option value="20000000-40000000">20 - 40 triệu</option>
                    <option value="40000000-60000000">40 - 60 triệu</option>
                    <option value="60000000-100000000">Trên 60 triệu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Thương hiệu</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={filters.brand}
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    <option value="Apple">Apple</option>
                    <option value="Dell">Dell</option>
                    <option value="HP">HP</option>
                    <option value="Lenovo">Lenovo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">RAM</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={filters.ram}
                    onChange={(e) => handleFilterChange('ram', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    <option value="8GB">8GB</option>
                    <option value="16GB">16GB</option>
                    <option value="32GB">32GB</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ổ cứng</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={filters.storage}
                    onChange={(e) => handleFilterChange('storage', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    <option value="256GB">256GB SSD</option>
                    <option value="512GB">512GB SSD</option>
                    <option value="1TB">1TB SSD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Vi xử lý</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={filters.processor}
                    onChange={(e) => handleFilterChange('processor', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    <option value="Intel i5">Intel Core i5</option>
                    <option value="Intel i7">Intel Core i7</option>
                    <option value="Intel i9">Intel Core i9</option>
                    <option value="M1">Apple M1</option>
                    <option value="M2">Apple M2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-4/5">
            <div className="text-center mb-5">
              <h3 className="text-xl font-semibold">MacBook</h3>
            </div>
      
            {currentItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentItems.map((laptop) => (
                  <div key={laptop.maDinhDanh} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group" onClick={() => window.location.href = `/chitietsanpham/${laptop.id}`}>
                    <img src={laptop.sanPham.hinhAnh} alt={laptop.tenSpct} className="w-full h-48 object-cover" />
                    <div className="p-3">
                      <h3 className="text-sm font-semibold mb-1">{laptop.tenSpct}</h3>
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

            {hasMore && (
              <div className="flex justify-center mt-4 space-x-2">
                <button 
                  onClick={handleLoadMore} 
                  disabled={loading} 
                  className={`px-4 py-2 rounded-md ${loading ? 'bg-gray-400' : 'bg-gray-300 hover:bg-gray-400'}`}
                >
                  {loading ? 'Đang tải...' : 'Xem thêm'}
                </button>
              </div>
            )}

            <div className="text-center mt-4">
              <p>Hiển thị {currentItems.length} trên {filteredLaptops.length} sản phẩm</p>
            </div>

            {/* News Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tin tức mới nhất</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://images.macrumors.com/t/AJ8iZBqxqOAi7wqwzz8MyPYKYN0=/2500x0/article-new/2023/01/MacBook-Pro-M2-Pro-Max-General-Feature.jpg" alt="News 1" className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">MacBook Pro M2 Pro và M2 Max ra mắt</h3>
                    <p className="text-gray-600">Apple vừa giới thiệu dòng MacBook Pro mới với chip M2 Pro và M2 Max...</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://cdn.tgdd.vn/Files/2020/04/14/1249368/cach-su-dung-macbook-hieu-qua-cho-nguoi-moi_800x450.jpg" alt="News 2" className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Hướng dẫn sử dụng MacBook cho người mới</h3>
                    <p className="text-gray-600">Những thủ thuật và mẹo vặt giúp bạn làm quen với MacBook nhanh chóng...</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/06/MacBook-Air-15-inch-2.jpg" alt="News 3" className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">MacBook Air 15 inch - Đánh giá chi tiết</h3>
                    <p className="text-gray-600">Trải nghiệm thực tế với MacBook Air màn hình lớn đầu tiên của Apple...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
