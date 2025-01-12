import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/header/Header";

const images = [
  "/public/assets/bg1.jpg", // Replace with actual image paths
  "/public/assets/bg2.jpg",
  "/public/assets/bg3.jpg",
];

const LogIn = () => {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      const { token, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      navigate(role === "admin" ? "/admin-dashboard" : "/user-dashboard");
    } catch (error) {
      console.error("Login error", error.response?.data);
      alert("Invalid credentials!");
    }
  };

  return (
    <>
    <Header/>
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
      <img src="/public/assets/Xtrapp Logo.png" alt="" />
        <h2 className="text-3xl font-bold opacity-60 mb-6">Sign in to your Account</h2>
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
        <div className="text-gray-400 my-2 text-center">Or continue with</div>
        <form onSubmit={handleLogin} className="w-3/2">
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between mb-4">
            <Link to="/forgot-password" className="text-blue-500 text-sm">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Continue
          </button>
        </form>
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <a href="/auth/" className="text-blue-500">
             Create an account
            </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default LogIn;
