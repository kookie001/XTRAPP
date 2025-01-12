import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white mt-[-13rem]">
      <h1 className="text-6xl sm:text-5xl font-light text-gray-600 ">
        Media Kits Are <span className="text-pink-500 font-semibold">Vintage</span> Now
      </h1>
      <h2 className="mt-4 text-4xl sm:text-4xl font-medium text-blue-600 flex items-center">
        Try X-Portfolio
        <span className="ml-2 text-blue-500 text-2xl">✦</span>
      </h2>
    </div>
  );
};

export default Navbar;
