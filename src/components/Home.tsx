import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <button 
        onClick={handleLogout} 
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;