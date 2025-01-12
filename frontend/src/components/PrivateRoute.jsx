import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  // Redirect to login if not authenticated
  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect to unauthorized if role doesn't match allowed roles
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  // Render the protected component
  return element;
};

export default PrivateRoute;
