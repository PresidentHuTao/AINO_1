export const addToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCart = [...existingCart, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    alert('Đã thêm sản phẩm vào giỏ hàng!');
};