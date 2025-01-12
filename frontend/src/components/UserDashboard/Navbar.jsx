import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [name, setRole] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    setRole(storedName);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-blue-50 fixed w-full z-10 mt-[-5rem]">
      <div className="flex items-center ml-8">
        <div className="text-2xl font-bold text-blue-500">
          <img src="/public/assets/Xtrapp Logo.png" alt="Logo" className="h-8 w-10" />
        </div>
        <div className="ml-2">
          <div className="font-semibold">{name ? name : 'Guest'}</div>
          <div className="text-sm text-gray-500">
            {email ? (
              <span className="text-gray-700">Email: {email}</span>
            ) : (
              <span className="text-gray-700">No email found</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex space-x-10 mr-60 ">
        <button className="px-8 text-white bg-blue-400 rounded-3xl hover:bg-blue-500">Get Started</button>
        <button className="px-8 py-2 border border-gray-300 rounded-3xl hover:bg-blue-400 hover:text-white">Analytics</button>
        <button className="px-8 border border-gray-300 rounded-3xl py-2 hover:bg-blue-400 hover:text-white">Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
