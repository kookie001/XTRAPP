import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Auth from "./auth/Auth";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Unauthorized from './components/Unauthorized';
import PrivateRoute from "./components/PrivateRoute";

import LeftSiderbar from "./components/UserDashboard/LeftSidebar"
import './App.css';
import Portfolio from './components/portfolio/Portfolio';
import Button from './components/portfolio/Button';
import PastCollabs from './components/portfolio/PostCollabs';
import SponsoredContents from './components/portfolio/SponsoredContents';
import YourLink from './components/portfolio/YourLink';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="portfolio" element={<Portfolio />} />

        <Route path="/button" element={<Button />} />
        <Route path="/past-collabs" element={<PastCollabs />} />
        <Route path="/sponsored-contents" element={<SponsoredContents />} />
        <Route path="/your-link" element={<YourLink />} />
       
        <Route path="/user-dashboard" element={<LeftSiderbar/>} />
      
        <Route 
          path="/user-dashboard" 
          element={<PrivateRoute element={<UserDashboard />} allowedRoles={['user']} />} 
        />
        <Route 
          path="/admin-dashboard" 
          element={<PrivateRoute element={<AdminDashboard />} allowedRoles={['admin']} />} 
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;
