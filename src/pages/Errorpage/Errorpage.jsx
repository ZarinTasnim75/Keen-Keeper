import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

      <h1 className="text-5xl md:text-7xl font-extrabold text-green-900">404</h1>

      <p className="mt-2 text-lg md:text-xl font-semibold text-gray-800">Page Not Found</p>

      <p className="mt-3 text-gray-500 max-w-md"> Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.</p>

      <button onClick={() => navigate('/')} className="mt-6 flex items-center gap-2 bg-green-900 text-white px-5 py-2 rounded-md">
        <IoHomeOutline /> Back to Home </button>
  </div>
  );
};

export default Errorpage;