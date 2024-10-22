import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './login/page';
import './App.css';
import HomePage from './home/page';
import CartPage from './giohang/page';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full">
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin}/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
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
