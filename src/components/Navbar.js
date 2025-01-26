import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-lg font-bold" to="/">
          AntiBrainRot
        </Link>
        <div className="flex items-center">
          <div className="space-x-4">
            <Link className="text-gray-300 hover:text-white" to="/">
              Home
            </Link>

            <Link className="text-gray-300 hover:text-white" to="/workmode">
              WorkMode
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
