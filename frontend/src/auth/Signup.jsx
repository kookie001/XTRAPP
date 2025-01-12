import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/header/Header";

const images = [
  "/public/assets/bg1.jpg", // Replace with actual image paths
  "/public/assets/bg2.jpg",
  "/public/assets/bg3.jpg",
];

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      alert("Account created successfully!");
      navigate("/auth/login");
    } catch (error) {
      console.error("Signup error", error.response?.data);
      alert("Error creating account!");
    }
  };

  return (
    <>
      <Header />
      <div className="h-[90vh] flex">
        {/* Left section */}
        <div className="w-[45vw] h-[78vh] mt-12 ml-20 relative">
          <img
            src={images[currentImage]}
            alt="Background"
            className="h-full w-full object-cover rounded-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/path/to/fallback/image.jpg";
            }}
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-lg font-semibold">
              "Above all, you want to create something you're proud of."
            </p>
            <p className="text-sm font-light">- Richard Branson</p>
          </div>
        </div>

        {/* Right section */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-white">
          <img src="/src/assets/Xtrapp Logo.png" alt="" className="mb-6" />
          <h2 className="text-3xl font-bold mb-6 opacity-60">Create Your Account</h2>
          <button className="w-[29vw] flex items-center justify-center bg-gray-50 py-2 rounded-lg mb-4 shadow">
          <img
            src="/public/assets/google.jpg"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Sign in with Google
        </button>
        <button className="w-[29vw] flex items-center justify-center bg-gray-50 py-2 rounded-lg mb-4 shadow">
          <img
            src="/public/assets/apple.png"
            alt="Apple"
            className="h-5 w-5 mr-2"
          />
          Sign in with Apple
        </button>
          <form
            onSubmit={handleSignup}
            className="w-3/2 flex flex-col items-center"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mb-4 w-[29vw] px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4 w-[29vw] px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-4 w-[29vw] px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-[29vw] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm mt-4">
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
