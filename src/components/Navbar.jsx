import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Marble Shop
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:text-gray-400">
              Categories ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded shadow-lg">
                <Link to="/sculptures" className="block px-4 py-2 hover:bg-gray-700">
                  Sculptures
                </Link>
                <Link to="/decor" className="block px-4 py-2 hover:bg-gray-700">
                  Home Decor
                </Link>
                <Link to="/custom-orders" className="block px-4 py-2 hover:bg-gray-700">
                  Custom Orders
                </Link>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Right: Cart & User Menu */}
        <div className="flex items-center space-x-4">
          
          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="Search..." 
            className="hidden md:block p-1 rounded text-black"
          />

          {/* Cart Icon */}
          <Link to="/cart" className="text-lg relative">
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">3</span>
          </Link>

          {/* User Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!isUserMenuOpen)}
              className="hover:text-gray-400 flex items-center"
            >
              <FaUser size={22} />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded shadow-lg">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">
                  Profile
                </Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-700">
                  My Orders
                </Link>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <Link to="/" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/sculptures" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Sculptures</Link>
          <Link to="/decor" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Home Decor</Link>
          <Link to="/custom-orders" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Custom Orders</Link>
          <Link to="/about" className="block py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
