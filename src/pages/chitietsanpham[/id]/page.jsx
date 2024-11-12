import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../../../utils/cartUtils'; 
import Navbar from '../../../components/Layout/DefaultLayout/Navbar'; 
import Footer from '../../../components/Layout/DefaultLayout/Footer';

const ChiTietSanPham = () => {
    const { maDinhDanh } = useParams(); // Lấy id sản phẩm từ URL
    const [product, setProduct] = useState(null);
    const [laptops, setLaptops] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]); // State for related products
    const navigate = useNavigate(); // Hook to navigate programmatically

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/rest/san_pham_chi_tiet/getById/${maDinhDanh}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data); // Sét sản phẩm hiển thị lên từ json trả về
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [maDinhDanh]); 

    useEffect(() => {
        const fetchLaptops = async () => {
          try {
            const response = await fetch('http://localhost:8080/rest/san_pham_chi_tiet/getAll'); // Fetch laptops from local server
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setLaptops(data);
            // Filter related products based on the product's id
            const related = data.filter(item => item.sanPham.id === product?.sanPham.id);
            setRelatedProducts(related);
          } catch (error) {
            console.error('Error fetching laptops:', error);
          }
        };
        fetchLaptops();
      }, [product]);

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    const handleAddToCart = (item) => {
        addToCart(item); // Sử dụng hàm chung
    };

    const handleRelatedProductClick = (relatedProduct) => {
        navigate(`/chitietsanpham/${relatedProduct.id}`); // Navigate to the related product's detail page
    };

    return (
        <div>
              <Navbar /> 
        <div className="container mx-auto p-4">
          
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
              
                <div className="md:w-1/2">
                    <img src={product.sanPham.hinhAnh} alt={product.sanPham.tenSanPham} className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-2">{product.tenSpct}</h1>
                    <p className="text-gray-700 mb-4">{product.sanPham.gioiThieu}</p>
                    <p className="text-lg font-semibold mb-2">Giá: {product.donGia} VNĐ</p>
                    <p className="mb-2">Số lượng: {product.soLuong}</p>
                    <p className="mb-4">Trạng thái: {product.trangThai}</p>
                    <h2 className="text-lg font-semibold mb-2">Thông tin chi tiết:</h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Mã sản phẩm: {product.maDinhDanh}</li>
                        <li>Hãng sản xuất: {product.sanPham.hangSanXuat}</li>
                        <li>GPU: {product.gpu.ten}</li>
                        <li>RAM: {product.ram.dungLuong} GB, Tốc độ: {product.ram.tocDo} MHz</li>
                        <li>GPU: {product.gpu.ten}, VRAM: {product.gpu.vram} GB</li>
                        <li>Màn hình: {product.manHinh.kichThuoc} inch, Độ phân giải: {product.manHinh.doPhanGiai}</li>
                        <li>Ổ lưu trữ: {product.oluuTru.dungLuong} GB, Loại: {product.oluuTru.loaiOCung}</li>
                    </ul>
                    <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Thêm vào giỏ</button>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Sản phẩm liên quan:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {relatedProducts.map((relatedProduct) => (
                        <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md p-4" onClick={() => handleRelatedProductClick(relatedProduct)}>
                            <img src={relatedProduct.sanPham.hinhAnh} alt={relatedProduct.sanPham.tenSanPham} className="w-full h-32 object-cover mb-2" />
                            <h3 className="font-semibold">{relatedProduct.tenSpct}</h3>
                            <p className="text-red-600 font-bold">{relatedProduct.donGia} VNĐ</p>
                            <button onClick={(e) => { e.stopPropagation(); handleAddToCart(relatedProduct); }} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Thêm vào giỏ</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default ChiTietSanPham;