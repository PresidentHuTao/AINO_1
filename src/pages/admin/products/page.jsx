import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    tenSanPham: '',
    namSanXuat: '',
    trongLuong: '',
    duongDanHinhAnh: null
  });
  const [editProduct, setEditProduct] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
          throw new Error('Failed to upload image');
        }
  
        const uploadData = await uploadResponse.json();
        const imageUrl = uploadData.data.url;
  
        setProducts([...products, { ...newProduct, duongDanHinhAnh: imageUrl }]);
        setNewProduct({
          tenSanPham: '',
          namSanXuat: '',
          trongLuong: '',
          duongDanHinhAnh: null
        });
        setImagePreview(null);
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert("Không thể tải ảnh lên. Vui lòng kiểm tra lại kết nối hoặc URL API.");
      }
    } else {
      alert('Tên sản phẩm và hình ảnh là bắt buộc');
    }
  };

  const handleEditClick = (product) => {
    setEditProduct({...product});
    setImagePreview(product.duongDanHinhAnh);
    setIsEditModalOpen(true);
  };

  const handleUpdateProduct = async () => {
    try {
      let imageUrl = editProduct.duongDanHinhAnh;

      // If a new image was selected, upload it first
      if (editProduct.duongDanHinhAnh instanceof File) {
        const formData = new FormData();
        formData.append('file', editProduct.duongDanHinhAnh);
        
        const uploadResponse = await fetch('https://api.postimages.org/upload', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload image');
        }

        const uploadData = await uploadResponse.json();
        imageUrl = uploadData.data.url;
      }

      const response = await fetch(`http://localhost:8080/rest/san_pham/update/${editProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editProduct.id,
          loaiSanPham: {
            id: editProduct.loaiSanPham.id
          },
          nguonNhap: {
            id: editProduct.nguonNhap.id
          },
          chatLieu: {
            id: editProduct.chatLieu.id
          },
          kichThuocLaptop: {
            id: editProduct.kichThuocLaptop.id
          },
          tenSanPham: editProduct.tenSanPham,
          namSanXuat: editProduct.namSanXuat,
          trongLuong: editProduct.trongLuong,
          gioiThieu: editProduct.gioiThieu,
          thoiHanBaoHanh: editProduct.thoiHanBaoHanh,
          cardDoHoa: editProduct.cardDoHoa,
          pin: editProduct.pin,
          trangThai: editProduct.trangThai,
          duongDanHinhAnh: imageUrl
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      // Update the products list
      const updatedProducts = products.map(p => {
        if (p.id === editProduct.id) {
          return {
            ...p,
            tenSanPham: editProduct.tenSanPham,
            namSanXuat: editProduct.namSanXuat,
            trongLuong: editProduct.trongLuong,
            duongDanHinhAnh: imageUrl
          };
        }
        return p;
      });
      
      setProducts(updatedProducts);
      setIsEditModalOpen(false);
      setEditProduct(null);
      setImagePreview(null);
      alert('Cập nhật sản phẩm thành công!');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Không thể cập nhật sản phẩm. Vui lòng thử lại.');
    }
  };

  const handleImageChange = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (file) {
      if (isEdit) {
        setEditProduct({ ...editProduct, duongDanHinhAnh: file });
      } else {
        setNewProduct({ ...newProduct, duongDanHinhAnh: file });
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition duration-200"
          >
            Thêm sản phẩm
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hình Ảnh</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Sản Phẩm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Năm Sản Xuất</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trọng Lượng</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loại Sản Phẩm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={product.duongDanHinhAnh} alt={product.tenSanPham} className="w-16 h-16 rounded-lg object-cover" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.tenSanPham}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.namSanXuat}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.trongLuong}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {product.tenLoai}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-6">Thêm sản phẩm mới</h2>
              <input 
                type="text" 
                value={newProduct.tenSanPham} 
                onChange={(e) => setNewProduct({ ...newProduct, tenSanPham: e.target.value })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                placeholder="Tên sản phẩm"
              />
              <input 
                type="number" 
                value={newProduct.namSanXuat} 
                onChange={(e) => setNewProduct({ ...newProduct, namSanXuat: e.target.value })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                placeholder="Năm sản xuất"
              />
              <input 
                type="text" 
                value={newProduct.trongLuong} 
                onChange={(e) => setNewProduct({ ...newProduct, trongLuong: e.target.value })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                placeholder="Trọng lượng"
              />
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleImageChange(e, false)} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg mb-4" />
              )}
              <div className="flex justify-end gap-4">
                <button 
                  onClick={() => {
                    setIsModalOpen(false);
                    setImagePreview(null);
                  }} 
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-200"
                >
                  Hủy
                </button>
                <button 
                  onClick={handleAddProduct} 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        )}

        {isEditModalOpen && editProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-6">Sửa sản phẩm</h2>
              <input 
                type="text" 
                value={editProduct.tenSanPham} 
                onChange={(e) => setEditProduct({ ...editProduct, tenSanPham: e.target.value })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                placeholder="Tên sản phẩm"
              />
              <input 
                type="number" 
                value={editProduct.namSanXuat} 
                onChange={(e) => setEditProduct({ ...editProduct, namSanXuat: e.target.value })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                placeholder="Năm sản xuất"
              />
              <input 
                type="text" 
                value={editProduct.trongLuong} 
                onChange={(e) => setEditProduct({ ...editProduct, trongLuong: e.target.value })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                placeholder="Trọng lượng"
              />
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleImageChange(e, true)} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg mb-4" />
              )}
              <div className="flex justify-end gap-4">
                <button 
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setEditProduct(null);
                    setImagePreview(null);
                  }} 
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-200"
                >
                  Hủy
                </button>
                <button 
                  onClick={handleUpdateProduct} 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductManagement;