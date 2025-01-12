import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

const images = [
  "/src/assets/bg1.jpg", // Replace with actual image paths
  "/src/assets/bg2.jpg",
  "/src/assets/bg3.jpg",
];

const LoginSignup = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="flex h-screen ml-40 mt-[-2rem]">
        <div className=" flex items-center justify-center">
          <img
            src={images[currentImage]}
            alt="Background"
            className="h-[80vh] w-[50vw] rounded-lg shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/path/to/fallback/image.jpg";
            }}
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Welcome</h1>
            <Link
              to="/auth/login"
              className="mr-4 px-6 py-2 bg-blue-500 text-white rounded-md"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="px-6 py-2 bg-gray-500 text-white rounded-md"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
