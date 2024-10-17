import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './login/page';
import './App.css';
import HomePage from './home/page';

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
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
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
