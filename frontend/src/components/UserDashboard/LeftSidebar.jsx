import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="w-1/4 bg-white p-4 ml-[15rem] mt-[5rem]">
      <div className=" p-4 rounded-lg mb-4 w-[30vw] h-[55vh] mt-[-1.4rem]">
       
     
        <div className="h-[42vh] w-full bg-blue-500  rounded-lg mt-4">
         <h1 className="text-lg text-white font-semibold  p-4 mt-[-1rem]">Let's turn your content into cash💰</h1>
         <p className="mt-[-2rem] p-4 text-sm text-gray-300 font-semibold">Just knock out this 3 steps, and all set!</p>
         <div className="h-3 w-[26vw] bg-gray-300 ml-4 rounded-lg "></div>
         <div className="h-16 w-[26vw] bg-blue-200 ml-4 mt-2 rounded-lg flex text-center">
          <h1 className="h-9 w-11 bg-blue-500 rounded-full mt-3 p-1 ml-1 font-bold text-white">1</h1>
          <div className="">
            <h1 className="font-bold mr-24 mt-2 text-blue-500">Build Your Portfolio</h1>
            <p className="text-xs ml-3 text-blue-400">Share your past work and analytics with elegance</p>
          </div>
          <Link to="/portfolio"> <button className="text-xs ml-3 font-bold text-blue-600 mt-5">Build Now</button></Link>
         </div>
         <div className="h-16 w-[26vw] bg-blue-200 ml-4 mt-1 rounded-lg flex text-center">
          <h1 className="h-9 w-11 bg-gray-400 rounded-full mt-3 p-1 ml-1 font-bold text-gray-600">2</h1>
          <div className="">
            <h1 className="font-bold mr-28 mt-2 text-gray-500">Connect Socials</h1>
            <p className="text-xs ml-4 text-gray-400">Auto updates your XPortfolio in every 24 hours</p>
          </div>
          <button className="text-xs ml-2 text-gray-500 font-semibold">Connect Now</button>
         </div>
         <div className="h-16 w-[26vw] bg-blue-200 ml-4 mt-1 rounded-lg flex text-center">
          <h1 className="h-9 w-11 bg-gray-400 rounded-full mt-3 p-1 ml-1 font-bold text-gray-600">3</h1>
          <div className="">
            <h1 className="font-bold mr-24 mt-2 text-gray-500">Add link in Bio</h1>
            <p className="text-xs ml-4 text-gray-400">Get more brand collabs from your Socials</p>
          </div>
          <button className="text-xs ml-10 text-gray-500 font-semibold">Copy Link</button>
         </div>
       
        </div>
    
        <div className="bg-blue-100 h-[42.4vh] w-[30vw] absolute right-0 top-0 rounded-lg mt-[5.7rem] mr-[21rem]"></div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 w-[30vw]">
       <img src="/public/assets/Booklet.png" alt="" className="mt-[-5.4rem]"/>
      </div>
      <div className="bg-blue-100 p-4 rounded-lg mb-4 w-[30vw] h-[22vh] ml-[29rem] mt-[-12.1rem]"></div>

      <div className="bg-white p-4 rounded-lg w-[59rem] mt-[-0.7rem]">
        <h2 className="text-lg font-semibold ml-4">Quick Read</h2>
        <div className="grid grid-cols-7  mt-2">
          <div className="bg-white p-2 rounded-lg h-[10vh]">
            <img
              src="/public/assets/Rectangle 40109.png"
              alt="Explore Monetisation"
              className="rounded-lg mb-2 h-[20vh]"
            />
            <p className="text-xs mt-[-3.5rem] ml-2 text-white">
              Explore <br />
              Monetisation
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg h-[10vh]">
            <img
              src="/public/assets/Rectangle 40108.png"
              alt="Explore Monetisation"
              className="rounded-lg mb-2 h-[20vh]"
            />
            <p className="text-xs mt-[-3.5rem] ml-2 text-white">
              Explore <br />
              Monetisation
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg h-[10vh]">
            <img
              src="/public/assets/Rectangle 40111.png"
              alt="Explore Monetisation"
              className="rounded-lg mb-2 h-[20vh]"
            />
            <p className="text-xs mt-[-3.5rem] ml-2 text-white">
              Explore <br />
              Monetisation
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg h-[10vh]">
            <img
              src="/public/assets/Rectangle 40112.png"
              alt="Explore Monetisation"
              className="rounded-lg mb-2 h-[20vh]"
            />
            <p className="text-xs mt-[-3.5rem] ml-2 text-white">
              Explore <br />
              Monetisation
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg h-[10vh]">
            <img
              src="/public/assets/Rectangle.png"
              alt="Explore Monetisation"
              className="rounded-lg mb-2 h-[20vh]"
            />
            <p className="text-xs mt-[-3.5rem] ml-2 text-white">
              Explore <br />
              Monetisation
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg h-[10vh]">
            <img
              src="/public/assets/Rectangle 1.png"
              alt="Explore Monetisation"
              className="rounded-lg mb-2 h-[20vh]"
            />
            <p className="text-xs mt-[-3.5rem] ml-2 text-white">
              Explore <br />
              Monetisation
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg h-[10vh]">
            <img
              src="/public/assets/Rectangle 40109.png"
              alt="Explore Monetisation"
              className="rounded-lg mb-2 h-[20vh]"
            />
            <p className="text-xs mt-[-3.5rem] ml-2 text-white">
              Explore <br />
              Monetisation
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 h-[105vh] w-[17vw] ml-[60rem] mt-[-39.6rem] rounded-lg">
        
         <div>
          <img src="/public/assets/Bespoke Card.png" alt="" />
         </div>
      </div>
    </div>
    </>
  );
};

export default LeftSidebar;
