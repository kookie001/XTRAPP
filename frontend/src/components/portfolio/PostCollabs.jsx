import React, { useState } from "react";
import Sidebar from "../UserDashboard/Sidebar";
import { Link } from "react-router-dom";

const PastCollabs = () => {
  const [selectedBrands, setSelectedBrands] = useState(["Lakme", "Coca Cola"]);
  const [search, setSearch] = useState("");

  // Handle adding a brand
  const handleAddBrand = (brand) => {
    if (!selectedBrands.includes(brand)) {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Handle removing a brand
  const handleRemoveBrand = (brand) => {
    setSelectedBrands(selectedBrands.filter((item) => item !== brand));
  };

  // Handle file upload (for uploading logos)
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Logo uploaded: ${file.name}`);
    }
  };

  return (
    <>
    <Sidebar/>
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      {/* Step Slider */}
      <div className="w-[70vw] mb-8 ml-44">
        <div className="flex justify-between gap-2">
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
        </div>
      </div>
       {/* Next Button */}
      <Link to='/sponsored-contents'> <button  className=" ml-[70rem] bg-blue-200 text-blue-600 py-2 px-6 mt-[-1rem] rounded shadow ">
        Next
      </button></Link>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 text-gray-500">Past Collabs</h2>
      <p className="text-gray-500 mb-6">
        Select logos and showcase your experience
      </p>

      {/* Search Bar */}
      <div className="flex items-center w-[60vw] max-w-md mb-4">
        <input
          type="text"
          placeholder="Search your brands"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none"
        />
        <button className="bg-gray-200 px-4 py-2 rounded-r-lg">
          <span className="material-icons text-gray-500">search</span>
        </button>
      </div>

      {/* Selected Brands */}
      <div className="flex flex-wrap gap-2 w-[60vw] max-w-md mb-4">
        {selectedBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
          >
            {brand}
            <button
              onClick={() => handleRemoveBrand(brand)}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-3 gap-4 w-[60vw] max-w-md mb-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg h-[80px] flex items-center justify-center bg-gray-100"
          >
            <span className="text-gray-400">Logo</span>
          </div>
        ))}
      </div>

      {/* Upload Logo */}
      <p className="text-gray-500 mb-4">OR</p>
      <label
        htmlFor="upload-logo"
        className="cursor-pointer text-blue-500 border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white"
      >
        Upload Logo
        <input
          type="file"
          id="upload-logo"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>

     
    </div>
    </>
  );
};

export default PastCollabs;
