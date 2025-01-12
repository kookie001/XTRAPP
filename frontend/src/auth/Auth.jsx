import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import Signup from './Signup';
import LogIn from './Login';

function Auth() {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginSignup />} /> */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default Auth;
   


