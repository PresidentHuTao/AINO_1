import React from 'react';

function ProductDetailPage() {
  const product = {
    name: "MacBook Air M1 2020 (8GB RAM | 256GB SSD)",
    price: "18.590.000₫",
    oldPrice: "28.990.000₫",
    image: "https://example.com/macbook-air-m1.jpg",
    rating: 4.5,
    reviews: 150,
    features: [
      "Chip M1 của Apple",
      "CPU 8 lõi",
      "GPU 7 lõi",
      "Neural Engine 16 lõi",
      "Pin lên đến 18 giờ",
      "Bộ nhớ RAM 8GB",
      "Ổ cứng SSD 256GB",
    ],
    description: `
      MacBook Air M1 là dòng sản phẩm mới nhất của Apple - trang bị chip Apple M1 mạnh mẽ.
      Tốc độ nhanh vượt trội và hiệu năng CPU và đồ họa, cùng khả năng xử lý mạnh mẽ.
    `,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/3" />
        <div className="w-2/3 pl-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center">
            <span className="text-yellow-500">{"★".repeat(Math.floor(product.rating))}</span>
            <span className="ml-2 text-gray-600">({product.reviews} đánh giá)</span>
          </div>
          <div className="text-red-600 text-xl font-bold">{product.price}</div>
          <div className="text-gray-500 line-through">{product.oldPrice}</div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Mua ngay</button>
          <button className="mt-4 ml-2 px-4 py-2 bg-gray-300 rounded-md">Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Mô tả sản phẩm</h2>
        <p>{product.description}</p>
        <h3 className="text-lg font-semibold mt-2">Tính năng nổi bật</h3>
        <ul className="list-disc list-inside">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailPage;
