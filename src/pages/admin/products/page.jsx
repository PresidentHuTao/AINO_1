import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';
import axios from 'axios';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleted, setShowDeleted] = useState(false);
  const [newProduct, setNewProduct] = useState({
    sanPham: {
      tenSanPham: '',
      namSanXuat: '',
      trongLuong: '',
      gioiThieu: '',
      thoiHanBaoHanh: '',
      loaiSanPham: {
        id: ''
      },
      nguonNhap: {
        id: ''
      },
      chatLieu: {
        id: ''
      },
      cardDoHoa: {
        id: ''
      },
      kichThuocLaptop: {
        id: ''
      },
      pin: '',
      trangThai: 1
    },
    imageUrls: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loaiSanPhams, setLoaiSanPhams] = useState([]);
  const [nguonNhaps, setNguonNhaps] = useState([]);
  const [chatLieus, setChatLieus] = useState([]);
  const [cardDoHoas, setCardDoHoas] = useState([]);
  const [ktlts, setKtlts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/rest/san_pham/getAll');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchOptions = async () => {
      try {
        const [loaiRes, nguonRes, chatLieuRes, cardRes, ktltRes] = await Promise.all([
          axios.get('http://localhost:8080/rest/loai_san_pham/getAll'),
          axios.get('http://localhost:8080/rest/nguon_nhap/getAll'),
          axios.get('http://localhost:8080/rest/chat_lieu/getAll'),
          axios.get('http://localhost:8080/rest/card_do_hoa/getAll'),
          axios.get('http://localhost:8080/rest/ktlt/getAll')
        ]);
        setLoaiSanPhams(loaiRes.data);
        setNguonNhaps(nguonRes.data);
        setChatLieus(chatLieuRes.data);
        setCardDoHoas(cardRes.data);
        setKtlts(ktltRes.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchProducts();
    fetchOptions();
  }, []);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  const removeSelectedImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const uploadImages = async () => {
    const uploadedUrls = [];
    
    for (const image of selectedImages) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('api_key', '791946539476834');
      formData.append('upload_preset', 'laptop_preset');

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dmtek0eaq/image/upload',
          formData
        );
        uploadedUrls.push(response.data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
      }
    }

    return uploadedUrls;
  };

  const handleEditProduct = async (product) => {
    setSelectedProduct(product);
    setNewProduct({
      sanPham: {
        ...product,
        loaiSanPham: product.loaiSanPham || { id: '' },
        nguonNhap: product.nguonNhap || { id: '' },
        chatLieu: product.chatLieu || { id: '' },
        cardDoHoa: product.cardDoHoa || { id: '' },
        kichThuocLaptop: product.kichThuocLaptop || { id: '' }
      },
      imageUrls: product.imageUrls || []
    });

    try {
      const response = await axios.get('http://localhost:8080/rest/hinh_anh/getAll');
      const productImages = response.data.filter(img => img.productId === product.id);
      setExistingImages(productImages);
    } catch (error) {
      console.error('Error fetching product images:', error);
    }

    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleUpdateProduct = async () => {
    if (!selectedProduct || !newProduct.sanPham.tenSanPham) {
      setError('Thông tin sản phẩm không hợp lệ');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const updatedProduct = {
        id: selectedProduct.id,
        tenSanPham: newProduct.sanPham.tenSanPham,
        namSanXuat: newProduct.sanPham.namSanXuat,
        trongLuong: newProduct.sanPham.trongLuong,
        gioiThieu: newProduct.sanPham.gioiThieu,
        thoiHanBaoHanh: newProduct.sanPham.thoiHanBaoHanh,
        pin: newProduct.sanPham.pin,
        trangThai: newProduct.sanPham.trangThai,
        loaiSanPham: {
          id: newProduct.sanPham.loaiSanPham.id
        },
        nguonNhap: {
          id: newProduct.sanPham.nguonNhap.id
        },
        chatLieu: {
          id: newProduct.sanPham.chatLieu.id
        },
        kichThuocLaptop: {
          id: newProduct.sanPham.kichThuocLaptop.id
        },
        cardDoHoa: newProduct.sanPham.cardDoHoa.id ? {
          id: newProduct.sanPham.cardDoHoa.id
        } : null,
        imageUrls: existingImages.map(img => img.url)
      };

      const response = await axios.put(
        `http://localhost:8080/rest/san_pham/update/${selectedProduct.id}`,
        updatedProduct
      );

      if (response.status === 200) {
        const updatedResponse = await fetch('http://localhost:8080/rest/san_pham/getAll');
        const updatedData = await updatedResponse.json();
        setProducts(updatedData);

        setNewProduct({
          sanPham: {
            tenSanPham: '',
            namSanXuat: '',
            trongLuong: '',
            gioiThieu: '',
            thoiHanBaoHanh: '',
            loaiSanPham: { id: '' },
            nguonNhap: { id: '' },
            chatLieu: { id: '' },
            cardDoHoa: { id: '' },
            kichThuocLaptop: { id: '' },
            pin: '',
            trangThai: 1
          },
          imageUrls: []
        });
        setSelectedImages([]);
        setExistingImages([]);
        setIsModalOpen(false);
        setIsEditing(false);
        setSelectedProduct(null);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      setError('Cập nhật sản phẩm thất bại. Vui lòng thử lại.');
      if (error.response) {
        console.error('Error details:', error.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async () => {
    if (newProduct.sanPham.tenSanPham) {
      setLoading(true);
      setError(null);
      
      try {
        const imageUrls = await uploadImages();
        
        const productWithImages = {
          ...newProduct,
          imageUrls: imageUrls
        };

        const response = await axios.post('http://localhost:8080/rest/san_pham/add', productWithImages);
        
        if (response.status === 200) {
          const updatedResponse = await fetch('http://localhost:8080/rest/san_pham/getAll');
          const updatedData = await updatedResponse.json();
          setProducts(updatedData);
          
          setNewProduct({
            sanPham: {
              tenSanPham: '',
              namSanXuat: '',
              trongLuong: '',
              gioiThieu: '',
              thoiHanBaoHanh: '',
              loaiSanPham: { id: '' },
              nguonNhap: { id: '' },
              chatLieu: { id: '' },
              cardDoHoa: { id: '' },
              kichThuocLaptop: { id: '' },
              pin: '',
              trangThai: 1
            },
            imageUrls: []
          });
          setSelectedImages([]);
          setIsModalOpen(false);
        }
      } catch (error) {
        console.error('Error adding product:', error);
        setError('Thêm sản phẩm thất bại. Vui lòng thử lại.');
        if (error.response) {
          console.error('Error details:', error.response.data);
        }
      } finally {
        setLoading(false);
      }
    } else {
      setError('Tên sản phẩm là bắt buộc');
    }
  };

  const handleToggleStatus = async (product) => {
    try {
      const updatedProduct = {
        ...product,
        trangThai: product.trangThai === 1 ? 0 : 1
      };

      await axios.put(
        `http://localhost:8080/rest/san_pham/update/${product.id}`,
        updatedProduct
      );

      const updatedResponse = await fetch('http://localhost:8080/rest/san_pham/getAll');
      const updatedData = await updatedResponse.json();
      setProducts(updatedData);
    } catch (error) {
      console.error('Error toggling product status:', error);
    }
  };

  const filteredProducts = showDeleted 
    ? products.filter(product => product.trangThai === 0)
    : products.filter(product => product.trangThai === 1);

  return (
    <div className="min-h-screen flex">
      <NavbarAdmin />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Quản lý sản phẩm</h1>
        <div className="mb-4 flex justify-between">
          <button 
            onClick={() => {
              setIsEditing(false);
              setSelectedProduct(null);
              setIsModalOpen(true);
            }} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Thêm sản phẩm
          </button>
          <button
            onClick={() => setShowDeleted(!showDeleted)}
            className={`px-4 py-2 ${showDeleted ? 'bg-green-500' : 'bg-red-500'} text-white rounded`}
          >
            {showDeleted ? 'Xem sản phẩm đang bán' : 'Xem thùng rác'}
          </button>
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Tên Sản Phẩm</th>
              <th className="border px-4 py-2">Năm Sản Xuất</th>
              <th className="border px-4 py-2">Trọng Lượng</th>
              <th className="border px-4 py-2">Loại Sản Phẩm</th>
              <th className="border px-4 py-2">Trạng thái</th>
              <th className="border px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{product.tenSanPham}</td>
                <td className="border px-4 py-2">{product.namSanXuat}</td>
                <td className="border px-4 py-2">{product.trongLuong}</td>
                <td className="border px-4 py-2">{product.loaiSanPham?.tenLoai}</td>
                <td className="border px-4 py-2">
                  {product.trangThai === 1 ? 'Đang bán' : 'Đã ẩn'}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleToggleStatus(product)}
                    className={`px-3 py-1 ${product.trangThai === 1 ? 'bg-red-500' : 'bg-green-500'} text-white rounded`}
                  >
                    {product.trangThai === 1 ? 'Ẩn' : 'Khôi phục'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-lg font-bold mb-4">
                {isEditing ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}
              </h2>
              <input 
                type="text" 
                value={newProduct.sanPham.tenSanPham} 
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, tenSanPham: e.target.value }
                })} 
                className="border p-2 w-full mb-4"
                placeholder="Tên sản phẩm"
              />
              <input 
                type="number" 
                value={newProduct.sanPham.namSanXuat} 
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, namSanXuat: parseInt(e.target.value) }
                })} 
                className="border p-2 w-full mb-4"
                placeholder="Năm sản xuất"
              />
              <input 
                type="number" 
                value={newProduct.sanPham.trongLuong} 
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, trongLuong: parseFloat(e.target.value) }
                })} 
                className="border p-2 w-full mb-4"
                placeholder="Trọng lượng (kg)"
              />
              <textarea
                value={newProduct.sanPham.gioiThieu}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, gioiThieu: e.target.value }
                })}
                className="border p-2 w-full mb-4"
                placeholder="Giới thiệu"
                rows="3"
              />
              <input 
                type="text"
                value={newProduct.sanPham.thoiHanBaoHanh}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, thoiHanBaoHanh: e.target.value }
                })}
                className="border p-2 w-full mb-4"
                placeholder="Thời hạn bảo hành"
              />
              <input 
                type="number"
                value={newProduct.sanPham.pin}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, pin: parseInt(e.target.value) }
                })}
                className="border p-2 w-full mb-4"
                placeholder="Dung lượng pin (Wh)"
              />
              <select
                value={newProduct.sanPham.loaiSanPham.id}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, loaiSanPham: { id: e.target.value } }
                })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn loại sản phẩm</option>
                {loaiSanPhams.map((loai) => (
                  <option key={loai.id} value={loai.id}>{loai.tenLoai}</option>
                ))}
              </select>
              <select
                value={newProduct.sanPham.nguonNhap.id}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, nguonNhap: { id: e.target.value } }
                })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn nguồn nhập</option>
                {nguonNhaps.map((nguon) => (
                  <option key={nguon.id} value={nguon.id}>{nguon.tenNhaCungUng}</option>
                ))}
              </select>
              <select
                value={newProduct.sanPham.chatLieu.id}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, chatLieu: { id: e.target.value } }
                })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn chất liệu</option>
                {chatLieus.map((chatLieu) => (
                  <option key={chatLieu.id} value={chatLieu.id}>{chatLieu.tenChatLieu}</option>
                ))}
              </select>
              <select
                value={newProduct.sanPham.cardDoHoa.id}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, cardDoHoa: { id: e.target.value } }
                })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn card đồ họa</option>
                {cardDoHoas.map((card) => (
                  <option key={card.id} value={card.id}>{card.tenCard}</option>
                ))}
              </select>
              <select
                value={newProduct.sanPham.kichThuocLaptop.id}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  sanPham: { ...newProduct.sanPham, kichThuocLaptop: { id: e.target.value } }
                })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn kích thước laptop</option>
                {ktlts.map((ktlt) => (
                  <option key={ktlt.id} value={ktlt.id}>{ktlt.kichThuoc} inch</option>
                ))}
              </select>

              {!isEditing && (
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="border p-2 w-full mb-4"
                  accept="image/*"
                />
              )}

              {!isEditing && selectedImages.length > 0 && (
                <div className="mb-4">
                  <p>Hình ảnh đã chọn:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="w-20 h-20 relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => removeSelectedImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isEditing && existingImages.length > 0 && (
                <div className="mb-4">
                  <p>Hình ảnh hiện tại:</p>
                  <div className="flex flex-wrap gap-2">
                    {existingImages.map((image, index) => (
                      <div key={index} className="w-20 h-20">
                        <img
                          src={image.url}
                          alt={`Existing ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <div className="flex justify-end">
                <button 
                  onClick={isEditing ? handleUpdateProduct : handleAddProduct}
                  disabled={loading}
                  className={`px-4 py-2 rounded ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'
                  } text-white`}
                >
                  {loading ? 'Đang tải...' : isEditing ? 'Cập nhật' : 'Thêm'}
                </button>
                <button 
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsEditing(false);
                    setSelectedProduct(null);
                    setExistingImages([]);
                  }} 
                  className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Đóng
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