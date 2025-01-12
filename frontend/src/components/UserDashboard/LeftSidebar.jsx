import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const LeftSidebar = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="w-1/4 bg-white p-4 ml-[15rem] mt-[5rem]">
      <div className=" p-4 rounded-lg mb-4 w-[30vw] h-[55vh] mt-[-1.4rem]">
      <img src="/public/assets/Onboarding Card.png" alt="" />
    
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
