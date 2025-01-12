import React, { useState } from "react";
import Sidebar from "../UserDashboard/Sidebar";
import { Link } from "react-router-dom";

const Button = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    "Technology",
    "Lifestyle and Fashion",
    "Beauty and Makeup",
    "Entertainment",
    "Food and Cooking",
    "Travel",
    "Comedy",
    "Gamer",
  ];

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <>
    <Sidebar/>
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen ml-44">
      {/* Step Slider */}
      <div className="w-[70vw] mb-8">
        <div className="flex justify-between gap-2">
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    <Link to='/past-collabs' > <button
        className=" ml-[60rem] bg-blue-200 text-blue-600 py-2 px-6 mt-[-1rem] rounded shadow "
        onClick={() => alert(`Selected Niche: ${selected || "None"}`)}
      >
        Next
      </button></Link>
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 text-gray-500">Pick Your Niche</h2>
      <p className="text-gray-500 mb-6">
        Select one that shows your content type
      </p>

      {/* Options List */}
      <div className="flex flex-col gap-4 w-[60vw] max-w-md">
        {options.map((option, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-center border rounded-lg ${
              selected === option
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Button */}
     
    </div>
    </>
  );
};

export default Button;
