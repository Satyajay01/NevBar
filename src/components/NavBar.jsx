import React from 'react';

const NevBar = () => {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-gray-800 font-bold text-3xl">Logo</div>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Home</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">About Us</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Courses</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Internship</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Contact Us</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Gallery</a>
          <a href="#" className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md transition duration-300">Blog</a>
        </div>
      </div>
    </nav>
  );
};

export default NevBar;
