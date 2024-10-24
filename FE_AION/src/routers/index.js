import HomePage from '../pages/home/page';
import CartPage from '../pages/giohang/page';
import AdminDashboard from '../pages/homeAdmin/page';

// Public routes (có thể truy cập mà không cần đăng nhập)
const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage }, 
  { path: '/cart', component: CartPage }
];

// Private routes (chỉ truy cập khi đã đăng nhập)
const privateRoutes = [
  { path: '/admin', component: AdminDashboard }
];

export { privateRoutes, publicRoutes };
