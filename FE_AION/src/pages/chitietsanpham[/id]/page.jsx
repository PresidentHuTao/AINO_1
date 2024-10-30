import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/Layout/DefaultLayout/Navbar';
import { addToCart } from '../../../utils/cartUtils'; 

const ChiTietSanPham = () => {
    const { maDinhDanh } = useParams(); // Lấy id sản phẩm từ URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/rest/san_pham_chi_tiet/${maDinhDanh}`);
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

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    const handleAddToCart = (item) => {
        addToCart(item); // Sử dụng hàm chung
    };

    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
              
                <div className="md:w-1/2">
                    <img src={product.sanPham.hinhAnh} alt={product.sanPham.tenSanPham} className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-2">{product.sanPham.tenSanPham}</h1>
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
        </div>
    );
};

export default ChiTietSanPham;