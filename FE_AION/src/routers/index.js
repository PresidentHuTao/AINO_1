import HomePage from '../pages/use/home/page';
import CartPage from '../pages/use/giohang/page';
import AdminDashboard from '../pages/admin/homeAdmin/page';
import ChiTietSanPham from '../pages/chitietsanpham[/id]/page'; // Import thành phần chi tiết sản phẩm
import CheckoutPage from '../pages/use/thanhtoan/page';

// Public routes (có thể truy cập mà không cần đăng nhập)
const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage }, 
  { path: '/cart', component: CartPage },
  { path: '/chitietsanpham/:maDinhDanh', component: ChiTietSanPham }, // Route cho chi tiết sản phẩm
  { path: '/checkout', component: CheckoutPage }, // Route cho thanh toán
];

// Private routes (chỉ truy cập khi đã đăng nhập)
const privateRoutes = [
  { path: '/admin', component: AdminDashboard }
];

export { privateRoutes, publicRoutes };
