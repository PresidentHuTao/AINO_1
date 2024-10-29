import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    if (!username) {
      setUsernameError('Vui lòng nhập username');
      valid = false;
    } else {
      setUsernameError('');
    }
    if (!password) {
      setPasswordError('Vui lòng nhập mật khẩu');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      if (username === 'admin' && password === 'admin') {
        onLogin();
      } else {
        setPasswordError('Tên đăng nhập hoặc mật khẩu không đúng');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://cdnb.artstation.com/p/assets/images/images/016/802/459/large/shuja-shuaib-banner.jpg?1553535424')"}}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Đăng nhập vào website</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Nhập username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <div className="text-red-500 text-sm mt-1">{usernameError}</div>}
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
            >
              {/* {showPassword ? "Ẩn" : "Hiện"} */}
            </button>
            {passwordError && <div className="text-red-500 text-sm mt-1">{passwordError}</div>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Đăng nhập
          </button>
        </form>
        <div className="mt-4 flex justify-between text-sm">
          <a href="#" className="text-teal-500 hover:text-teal-600">Quên mật khẩu?</a>
          <a href="#" className="text-teal-500 hover:text-teal-600">Tạo tài khoản mới</a>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;