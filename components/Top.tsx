import React from "react";

const Top = () => {
  return (
    <div className="flex justify-between items-center py-2 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 text-sm font-medium shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <i className="fas fa-phone-alt mr-2 text-yellow-400"></i>
          Mobile: 01858226967
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <i className="fas fa-envelope mr-2 text-blue-400"></i>
          Email: Ismaile535@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Top;
