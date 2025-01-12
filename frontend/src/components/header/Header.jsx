import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  // const [role, setRole] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userRole = localStorage.getItem('role');
  //   setRole(userRole);
  // }, []);

  

  return (
    <div className="min-h-[10vh] bg-pink-100 relative mt-[-0.5rem]">
      {/* Navbar */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 rounded-xl bg-pink-50 mt-2 shadow-md">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">
            <img src="/public/assets/logo.png" alt="Logo" className="h-10 w-40" />
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-black text-black">
              Home
            </Link>
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </div>
          {/* User Account and Logout */}
          <div className="flex items-center space-x-4">
            {/* {role ? (
              <>
                <span className="text-gray-700">Logged in as: {role}</span>
               
              </>
            ) : ( */}
              <Link to="/Auth" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform">
                Build Yours!
              </Link>
            {/* )} */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
