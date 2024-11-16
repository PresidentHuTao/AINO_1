import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../../../utils/cartUtils'; 
import Navbar from '../../../components/Layout/DefaultLayout/Navbar'; 
import Footer from '../../../components/Layout/DefaultLayout/Footer';

const ChiTietSanPham = () => {
    const { idSanPham } = useParams(); // Lấy id sản phẩm từ URL
    const [product, setProduct] = useState(null);
    const [laptops, setLaptops] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]); // State for related products
    const navigate = useNavigate(); // Hook to navigate programmatically

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/rest/spctDTO/getById/${idSanPham}`);
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
    }, [idSanPham]); 

    useEffect(() => {
        const fetchProductImage = async () => {
            try {
                const response = await fetch(`http://localhost:8080/rest/san_pham_chi_tiet/getIMG/${idSanPham}`);
                console.log(idSanPham);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const imageData = await response.json();
                // Assuming imageData contains the image URL or path
                setProduct(prevState => ({
                    ...prevState,
                    hinhAnh: imageData.imageUrl // Update the product state with the new image URL
                }));
            } catch (error) {
                console.error('Error fetching product image:', error);
            }
        };

        fetchProductImage();
    }, [idSanPham]); 

    useEffect(() => {
        const fetchLaptops = async () => {
          try {
            const response = await fetch('http://localhost:8080/rest/spctDTO/getAll'); // Fetch laptops from local server
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setLaptops(data);
            // Filter related products based on the product's id
            const related = data.filter(item => item.idSanPham === product?.idSanPham);
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

    const handleBuyNow = () => {
        navigate(`/xacnhandonhang/${product.id}`); // Navigate to the order confirmation page with the product
    };

    // Function to format price with commas
    const formatPrice = (price) => {
        if (typeof price === 'undefined' || price === null) {
            return 'N/A';
        }
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div>
              <Navbar /> 
        <div className="container mx-auto p-4">
          
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
              
                <div className="md:w-1/2">
                    <img src={product.hinhAnh} alt={product.tenSanPham} className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-2">{product.tenSanPhamChiTiet}</h1>
                    <p className="text-gray-700 mb-4">{product.gioiThieu}</p>
                    <p className="text-lg font-semibold mb-2">Giá: {formatPrice(product.donGia)} VNĐ</p>
                    <h2 className="text-lg font-semibold mb-2">Thông tin chi tiết:</h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Mã sản phẩm: {product.maSpct}</li>
                        <li>Chất liệu: {product.chatLieu}</li>
                        <li>RAM: {product.dungLuongRam} GB</li>
                        <li>Ổ lưu trữ: {product.dungLuong} GB</li>
                        <li>Màn hình: {product.kichThuocLaptop} inch, Độ phân giải: {product.doPhanGiai}</li>
                        <li>Tần số quét: {product.tanSoQuet} Hz</li>
                        <li>Số nhân: {product.soNhan}</li>
                        <li>Kiến trúc công nghệ: {product.kienTrucCongNghe}</li>
                        <li>CPU: {product.tenCPU}</li>
                        <li>Mã SPCT: {product.maSpct}</li>
                    </ul>
                    <div className="flex justify-between mt-4">
                        <button onClick={handleBuyNow} className="px-4 py-2 bg-green-500 text-white rounded-md">Mua ngay</button>
                        <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Sản phẩm liên quan:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {relatedProducts.map((relatedProduct) => (
                        <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md p-4" onClick={() => handleRelatedProductClick(relatedProduct)}>
                            <img src={relatedProduct.hinhAnh} alt={relatedProduct.tenSanPham} className="w-full h-32 object-cover mb-2" />
                            <h3 className="font-semibold">{relatedProduct.tenSanPhamChiTiet}</h3>
                            <p className="text-red-600 font-bold">{formatPrice(relatedProduct.donGia)} VNĐ</p>
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