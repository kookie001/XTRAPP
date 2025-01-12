import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes

const UserDashboard = () => {
  return (
    <div className="flex">
      
      <Sidebar />

     
      <div className="flex-grow">
      
        <Navbar />

       
        <main className="p-6">
          <Outlet />
          
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
