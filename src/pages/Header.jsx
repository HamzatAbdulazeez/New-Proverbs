import React, { useState } from 'react';
import { FaBars, FaBell, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HomeHeader({ toggleSidebar }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-[#FCF8F3] p-4 flex justify-between items-center border-gray-200 xl:px-40 lg:pl-20 lg:pr-30 md:px-20 lg:gap-10 md:gap-8 gap-5 h-full">
      <div className="flex items-center space-x-4">
        {/* Sidebar Toggle Button */}
        <button className="md:hidden text-xl" onClick={toggleSidebar}>
          <FaBars />
        </button>

        {/* Logo */}
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1741096252/We-Immersive/primarylogo.ebc6ec00_x9uzsw.svg" 
            alt="Logo" 
            className="w-32 h-auto"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-14 text-base font-medium">
        <Link to="/" className="text-black">Home</Link>
        <Link to="/" className="text-black">About Us</Link>
        <Link to="/" className="text-black">Pricing</Link>
        <Link to="/" className="text-black">FAQs</Link>
        <Link to="/" className="text-black">Contact Us</Link>
      </nav>

      {/* Right Side - Notification, Register & Profile */}
      <div className="flex items-center space-x-6">
        <FaBell className="text-xl cursor-pointer" />

        {/* Register Button with Dropdown */}
        <div className="relative">
          <button 
            className="bg-[#BB5D06] text-white text-sm px-8 py-3 rounded-sm flex items-center space-x-2 cursor-pointer"
          >
            <span>Login</span>
          </button>
        </div>

        <div className="relative">
          <button 
            className="bg-[#BB5D06] text-white text-sm px-8 py-3 rounded-sm flex items-center space-x-2 cursor-pointer"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <span>Register</span>
            <FaChevronDown />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2">
              <Link to="/auth/register" className="block px-4 py-2 text-black hover:bg-gray-100">Individual Account</Link>
              <Link to="/auth/register" className="block px-4 py-2 text-black hover:bg-gray-100">Corporate Account</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
