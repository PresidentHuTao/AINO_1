import React from 'react';
import LoginPage from './login/page';
import './App.css';
import HomePage from './home/page';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
