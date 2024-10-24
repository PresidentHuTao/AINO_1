import React from 'react';
 const Navbar = () => {
    return (
        <header className="bg-green-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="flex space-x-4">
              <a href="#" className="hover:underline">Thiết bị</a>
              <a href="#" className="hover:underline">Mac</a>
              <a href="#" className="hover:underline">Laptop</a>
              <a href="/new" className="hover:underline">Tin tức</a>
            </nav>
            <div className="flex items-center space-x-4">
              <input
                icon="fa-solid fa-magnifying-glass"
                type="text"
                placeholder="Tìm kiếm"
                className="px-3 py-1 rounded-full text-black"
                // value={searchTerm}
                // onChange={handleSearch}
              />
              {/* <Link to="/cart" icon="fa-solid fa-cart-shopping" className="hover:underline">Giỏ hàng ({cartItems.length})</Link> */}
            </div>
          </div>
        </div>
      </header>
    )
 };
 export default Navbar