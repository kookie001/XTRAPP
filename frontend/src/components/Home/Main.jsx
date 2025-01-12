import React from 'react'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
    <div className="min-h-[50vh] bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 relative">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center pt-28 space-y-6 px-4 ">
      <div className="flex items-center space-x-4 mt-[-2rem] ">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 animate-slideInRight">
            Collaboration
          </h2>
          <div className="Collaboration">
          <img src="/public/assets/shake.png" alt=""/>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 animate-slideInRight">
            Simplified
          </h2>
        </div>
       
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 animate-slideInRight">
            Growth Amplified
          </h2>
          <img src="/public/assets/money.png" alt="" className="h-10 w-36 rounded-3xl mt-2" />
        </div>
       
        <p className="text-gray-600 text-sm md:text-base">
          World’s First Ever Smart Portfolio That Is Designed To Attract More
          Brand Collaboration
        </p>
        {/* Button */}
        <Link to="/Auth">
        <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform cursor-pointer"> Build Yours!</button>
        </Link>
      </div>

      {/* Decorative Images */}
      <div className="relative flex justify-between items-end mt-[-15rem] px-6">
        {/* Left Figure */}
        <div className="relative animate-slideInLeft">
          <img
            src="/public/assets/leftimg.png"
            alt="Cool Guy"
            className="w-80 h-auto transform scale-x-[-1] ml-[-25px]"
          />

          <div className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-4 bg-white px-4 py-2 rounded-lg shadow-md ">
            What is Aura?
          </div>
        </div>
        {/* Right Figure */}
        <div className="relative animate-slideInRight">
          <img
            src="/public/assets/rightimg.png"
            alt="Cool Cat"
            className="w-80 h-auto transform scale-x-[-1]"
          />
          <div className="absolute top-1/2 right-full transform -translate-y-1/2 translate-x-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md ">
            Having your portfolio
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main
