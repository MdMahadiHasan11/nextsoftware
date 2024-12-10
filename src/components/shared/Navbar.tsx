"use client";

import { useState, useEffect } from "react";
import { FaSearch, FaRegEnvelope, FaBell, FaCog, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-custom-background text-white p-4 flex justify-between items-center">
      {/* Left side: Search Bar */}
      <div className="flex items-center space-x-2">
        <div className="relative">
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="bg-gray-700 text-white p-2 pl-8 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right side: Icons */}
      <div className="flex items-center space-x-4">
        {/* Message Icon with Green Status Dot */}
        <button className="relative">
          <FaRegEnvelope className="text-black hover:text-gray-300" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </button>

        {/* Notification Icon with Green Status Dot */}
        <button className="relative">
          <FaBell className="text-black hover:text-gray-300" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </button>

        {/* Settings Icon */}
        <button>
          <FaCog className="text-black  hover:text-gray-300" />
        </button>

        {/* Profile Icon */}
        <button>
          <FaUserCircle className="text-black hover:text-gray-300 text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
