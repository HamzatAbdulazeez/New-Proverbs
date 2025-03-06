import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaThLarge,
  FaUser,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import SidebarItem from "./SidebarItem";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      <aside className={`fixed md:relative top-0 left-0 h-screen bg-white shadow-lg z-50 transition-all duration-300 w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="py-6 space-y-6">
          <div className="px-6">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1741096252/We-Immersive/primarylogo.ebc6ec00_x9uzsw.svg"
              alt="African Art"
              className="w-48 object-cover"
            />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <SidebarLink to="/dashboard" label="Dashboard" icon={<FaThLarge />} />
            <SidebarLink to="/employees" label="Student/Employee" icon={<FaUser />} />
            <SidebarLink to="/notifications" label="Notification" icon={<FaBell />} />
            <SidebarLink to="/settings" label="Settings" icon={<FaCog />} />
          </nav>

          {/* Sign Out */}
          <div className="mt-auto px-6">
            <SidebarItem icon={<FaSignOutAlt />} label="Sign out" iconSize={24} color="text-black" />
          </div>
        </div>
      </aside>

      {isOpen && <div className="fixed inset-0 bg-black opacity-25 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
}

const SidebarLink = ({ to, label, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-4 px-6 py-3 rounded-md cursor-pointer transition-colors ${
        isActive ? "bg-gray-200 text-black" : "hover:bg-gray-100 text-gray-700"
      }`
    }
  >
    <SidebarItem icon={icon} label={label} iconSize={24} />
  </NavLink>
);

export default Sidebar;
