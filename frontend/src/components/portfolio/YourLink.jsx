import React, { useState } from "react";
import Sidebar from "../UserDashboard/Sidebar";

const YourLink = () => {


  return (
    <>
    <Sidebar/>
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      {/* Step Slider */}
      <div className="w-[70vw] mb-8 ml-[9rem]">
        <div className="flex justify-between gap-2">
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-500 mb-2 mt-10 ml-24">Personalise Your Link</h2>
      <p className="text-gray-500 mb-6 ml-24">Use alphabets and numbers only</p>

      {/* Fields */}
      <div className="flex text-lg mt-[10rem] ml-20">
        <h1 className="text-blue-700">xtrapp.co/</h1>
        <input type="text" placeholder="username"  className="py-2 px-4 border-gray-400 border rounded-lg mt-[-0.5rem] ml-3"/>
      </div>

      {/* Add Field Button */}
      

      {/* Skip Button */}
      <button  className=" ml-[5rem] bg-blue-500 text-white py-2 px-16 mt-[15rem] rounded shadow ">
        Complete
      </button>
    </div>
    </>
  );
};

export default YourLink;
