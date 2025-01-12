import React, { useState } from "react";
import Sidebar from "../UserDashboard/Sidebar";
import { Link } from "react-router-dom";

const SponsoredContents = () => {
  const [fields, setFields] = useState([
    { brand: "", link: "" },
    { brand: "", link: "" },
    { brand: "", link: "" },
  ]);

  // Add a new field
  const addField = () => {
    setFields([...fields, { brand: "", link: "" }]);
  };

  // Update a field
  const updateField = (index, key, value) => {
    const newFields = fields.map((field, i) =>
      i === index ? { ...field, [key]: value } : field
    );
    setFields(newFields);
  };

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
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 mt-10">Sponsored Contents</h2>
      <p className="text-gray-500 mb-6">Add links of your sponsored reels</p>

      {/* Fields */}
      <div className="flex flex-col gap-4 w-[60vw] max-w-lg">
        {fields.map((field, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-gray-600 text-lg font-medium w-8">{index + 1}:</span>
            <input
              type="text"
              placeholder="Brand name"
              value={field.brand}
              onChange={(e) => updateField(index, "brand", e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Link"
              value={field.link}
              onChange={(e) => updateField(index, "link", e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none"
            />
          </div>
        ))}
      </div>

      {/* Add Field Button */}
      <button
        onClick={addField}
        className="mt-6 text-blue-500 hover:underline"
      >
        Add field
      </button>

      {/* Skip Button */}
     <Link to="/your-link"> <button  className=" ml-[69rem] bg-blue-200 text-blue-600 py-2 px-6 mt-[-21rem] rounded shadow ">
        Skip
      </button></Link>
    </div>
    </>
  );
};

export default SponsoredContents;
