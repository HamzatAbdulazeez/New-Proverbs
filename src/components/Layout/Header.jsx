import React from 'react';
import { FaBars, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Import React Router Link

function Header({ toggleSidebar }) {
  return (
    <header className="bg-[#FCF8F3] p-6 flex justify-between items-center border-b border-gray-200">
      {/* Sidebar Toggle Button */}
      <button className="md:hidden text-xl" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-14 text-base font-medium">
        <Link to="/" className="text-black">Home</Link>
        <Link to="/" className="text-black">About Us</Link>
        <Link to="/" className="text-black">Pricing</Link>
        <Link to="/" className="text-black">Contact Us</Link>
      </nav>

      {/* Notification & Profile Section */}
      <div className="flex items-center space-x-6">
        <FaBell className="text-xl cursor-pointer" />
        
        {/* Add Proverb Button */}
        <button className="bg-[#BB5D06] text-white text-sm px-4 py-2 rounded-lg">
          <Link to="/proverbs">Add Proverb</Link> 
        </button>

        {/* Profile Icon */}
        <div className="w-8 h-8 rounded-full bg-[#BB5D06] flex items-center justify-center text-white">
          GM
        </div>
      </div>
    </header>
  );
}

export default Header;
