import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../Navbar/NavbarAdmin';
import axios from 'axios';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    tenSanPham: '',
    namSanXuat: '',
    trongLuong: '',
    gioiThieu: '',
    baoHanh: '',
    loaiSanPhamId: '',
    nguonNhapId: '',
    chatLieuId: '',
    cardDoHoaId: '',
    ktltId: ''
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
        const response = await fetch('http://localhost:8080/rest/san_pham/getDTOADMIN');
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

  const handleAddProduct = async () => {
    if (newProduct.tenSanPham) {
      setLoading(true);
      setError(null);
      
      try {
        setProducts([...products, { ...newProduct }]);
        setNewProduct({
          tenSanPham: '',
          namSanXuat: '',
          trongLuong: '',
          gioiThieu: '',
          baoHanh: '',
          loaiSanPhamId: '',
          nguonNhapId: '',
          chatLieuId: '',
          cardDoHoaId: '',
          ktltId: ''
        });
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error adding product:', error);
        setError('Failed to add product. Please try again.');
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
            <div className="bg-white p-6 rounded shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-lg font-bold mb-4">Thêm sản phẩm mới</h2>
              <input 
                type="text" 
                value={newProduct.tenSanPham} 
                onChange={(e) => setNewProduct({ ...newProduct, tenSanPham: e.target.value })} 
                className="border p-2 w-full mb-4"
                placeholder="Tên sản phẩm"
              />
              <input 
                type="date" 
                value={newProduct.namSanXuat} 
                onChange={(e) => setNewProduct({ ...newProduct, namSanXuat: e.target.value })} 
                className="border p-2 w-full mb-4"
              />
              <input 
                type="text" 
                value={newProduct.trongLuong} 
                onChange={(e) => setNewProduct({ ...newProduct, trongLuong: e.target.value })} 
                className="border p-2 w-full mb-4"
                placeholder="Trọng lượng"
              />
              <textarea
                value={newProduct.gioiThieu}
                onChange={(e) => setNewProduct({ ...newProduct, gioiThieu: e.target.value })}
                className="border p-2 w-full mb-4"
                placeholder="Giới thiệu"
                rows="3"
              />
              <input 
                type="text"
                value={newProduct.baoHanh}
                onChange={(e) => setNewProduct({ ...newProduct, baoHanh: e.target.value })}
                className="border p-2 w-full mb-4"
                placeholder="Bảo hành"
              />
              <select
                value={newProduct.loaiSanPhamId}
                onChange={(e) => setNewProduct({ ...newProduct, loaiSanPhamId: e.target.value })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn loại sản phẩm</option>
                {loaiSanPhams.map((loai) => (
                  <option key={loai.id} value={loai.id}>{loai.tenLoai}</option>
                ))}
              </select>
              <select
                value={newProduct.nguonNhapId}
                onChange={(e) => setNewProduct({ ...newProduct, nguonNhapId: e.target.value })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn nguồn nhập</option>
                {nguonNhaps.map((nguon) => (
                  <option key={nguon.id} value={nguon.id}>{nguon.tenNhaCungUng}</option>
                ))}
              </select>
              <select
                value={newProduct.chatLieuId}
                onChange={(e) => setNewProduct({ ...newProduct, chatLieuId: e.target.value })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn chất liệu</option>
                {chatLieus.map((chatLieu) => (
                  <option key={chatLieu.id} value={chatLieu.id}>{chatLieu.tenChatLieu}</option>
                ))}
              </select>
              <select
                value={newProduct.cardDoHoaId}
                onChange={(e) => setNewProduct({ ...newProduct, cardDoHoaId: e.target.value })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn card đồ họa</option>
                {cardDoHoas.map((card) => (
                  <option key={card.id} value={card.id}>{card.tenCard}</option>
                ))}
              </select>
              <select
                value={newProduct.ktltId}
                onChange={(e) => setNewProduct({ ...newProduct, ktltId: e.target.value })}
                className="border p-2 w-full mb-4"
              >
                <option value="">Chọn kích thước laptop</option>
                {ktlts.map((ktlt) => (
                  <option key={ktlt.id} value={ktlt.id}>{ktlt.kichThuoc} inch</option>
                ))}
              </select>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <div className="flex justify-end">
                <button 
                  onClick={handleAddProduct}
                  disabled={loading}
                  className={`px-4 py-2 rounded ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'
                  } text-white`}
                >
                  {loading ? 'Đang tải...' : 'Thêm'}
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)} 
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