import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { publicRoutes, privateRoutes } from './routers/index';
import LoginPage from './pages/login/page'; // Đảm bảo đã import LoginPage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Quản lý trạng thái đăng nhập
  const navigate = useNavigate();

  // Hàm xử lý đăng nhập
  const handleLogin = () => {
    setIsLoggedIn(true); // Đặt trạng thái đăng nhập thành true
    navigate('/admin'); // Điều hướng đến trang admin sau khi đăng nhập thành công
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full">
        <Routes>
          {/* Route cho trang đăng nhập */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

          {/* Public routes */}
          {Array.isArray(publicRoutes) &&
            publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}

          {/* Private routes */}
          {isLoggedIn &&
            privateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}

          {/* Nếu người dùng chưa đăng nhập, điều hướng về trang login khi truy cập admin */}
          {!isLoggedIn && <Route path="/admin" element={<LoginPage onLogin={handleLogin} />} />}
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
