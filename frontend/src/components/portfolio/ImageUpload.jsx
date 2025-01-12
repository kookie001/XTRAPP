import React, { useState } from "react";
import { Link } from "react-router-dom";

const ImageUpload = () => {
  const [images, setImages] = useState([null, null, null, null]);

  // Handle image upload
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 h-[100vh]">
      {/* Step Slider */}
      <div className="w-[70vw] ml-44 mb-8">
        <div className="flex  justify-between mb-2 gap-2">
          <span className="w-[10vw] h-1 bg-blue-500 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
          <span className="w-[10vw] h-1 bg-gray-300 rounded-full"></span>
         
        </div>
      </div>
    <Link to='/button'>  <button className=" ml-[70rem] bg-gray-200 text-gray-500 py-2 px-6 mt-[-1rem] rounded shadow ">
        Next
      </button></Link>
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 ml-40 mt-[-2rem] text-gray-400">Upload your charm ✨</h2>

      {/* Subtitle */}
      

      {/* Upload Grid */}
      <div className="grid grid-cols-2 gap-4 w-[60vw] ml-36 mt-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg w-full h-[32vh]"
          >
            {image ? (
              <img
                src={image}
                alt={`Upload ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <label
                htmlFor={`upload-${index}`}
                className="flex flex-col items-center justify-center cursor-pointer text-gray-400"
              >
                <span className="material-icons text-3xl">add_photo_alternate</span>
                <input
                  id={`upload-${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, index)}
                />
              </label>
            )}
            {/* Number Labels */}
            <span className="absolute bottom-2 left-2 bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
              {index === 0 ? "Main" : index + 1}
            </span>
            
          </div>
        ))}
      </div>
      <p className="text-gray-500 mb-6 mt-10 ml-32">Hold and drag to reorder</p>
      {/* Next Button */}
     
    </div>
  );
};

export default ImageUpload;
