import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProtectedRoute = () => {
  const { token } = useContext(ShopContext);

  // If the user is not authenticated, redirect to the login page
  if (!token) {
    return <Navigate to='/login' replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
