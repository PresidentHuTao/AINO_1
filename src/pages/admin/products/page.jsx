import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    tenSanPham: '',
    namSanXuat: '',
    trongLuong: '',
    duongDanHinhAnh: null // Changed to null to avoid issues with file input
  });
  const [imagePreview, setImagePreview] = useState(null); // State for image preview

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/rest/san_pham/getDTOADMIN');
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    if (newProduct.tenSanPham && newProduct.duongDanHinhAnh) {
      const formData = new FormData();
      formData.append('file', newProduct.duongDanHinhAnh);
      
      try {
        const uploadResponse = await fetch('https://api.postimages.org/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (!uploadResponse.ok) {
          throw new Error('Failed to upload image'); // Handle non-200 responses
        }
  
        const uploadData = await uploadResponse.json();
        const imageUrl = uploadData.data.url;
  
        setProducts([...products, { ...newProduct, duongDanHinhAnh: imageUrl }]);
        setNewProduct({
          tenSanPham: '',
          namSanXuat: '',
          trongLuong: '',
          duongDanHinhAnh: null // Reset to null after adding product
        });
        setImagePreview(null); // Reset image preview
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert("Không thể tải ảnh lên. Vui lòng kiểm tra lại kết nối hoặc URL API.");
      }
    } else {
      alert('Tên sản phẩm và hình ảnh là bắt buộc'); // Thêm thông báo lỗi rõ ràng cho người dùng
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({ ...newProduct, duongDanHinhAnh: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex">
      <NavbarAdmin />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Quản lý sản phẩm</h1>
        <div className="mb-4">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Thêm sản phẩm
          </button>
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Hình Ảnh</th>
              <th className="border px-4 py-2">Tên Sản Phẩm</th>
              <th className="border px-4 py-2">Năm Sản Xuất</th>
              <th className="border px-4 py-2">Trọng Lượng</th>
              <th className="border px-4 py-2">Loại Sản Phẩm</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  <img src={product.duongDanHinhAnh} alt={product.tenSanPham} className="w-16 h-16 object-cover" />
                </td>
                <td className="border px-4 py-2">{product.tenSanPham}</td>
                <td className="border px-4 py-2">{product.namSanXuat}</td>
                <td className="border px-4 py-2">{product.trongLuong}</td>
                <td className="border px-4 py-2">{product.tenLoai}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-4">Thêm sản phẩm mới</h2>
              <input 
                type="text" 
                value={newProduct.tenSanPham} 
                onChange={(e) => setNewProduct({ ...newProduct, tenSanPham: e.target.value })} 
                className="border p-2 w-full mb-4"
                placeholder="Tên sản phẩm"
              />
              <input 
                type="number" 
                value={newProduct.namSanXuat} 
                onChange={(e) => setNewProduct({ ...newProduct, namSanXuat: e.target.value })} 
                className="border p-2 w-full mb-4"
                placeholder="Năm sản xuất"
              />
              <input 
                type="text" 
                value={newProduct.trongLuong} 
                onChange={(e) => setNewProduct({ ...newProduct, trongLuong: e.target.value })} 
                className="border p-2 w-full mb-4"
                placeholder="Trọng lượng"
              />
              <input 
                type="file" 
                accept="image/*" // Only allow image files
                onChange={handleImageChange} 
                className="border p-2 w-full mb-4"
                placeholder="Chọn hình ảnh"
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover mb-4" />
              )}
              <button 
                onClick={handleAddProduct} 
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Thêm
              </button>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductManagement; 