import React from "react";



const Navbar = () => (
  <nav className="bg-[#0a061c] backdrop-blur-4 py-4">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
        <span className="text-white text-xl font-semibold">Reflect</span>
      </div>
      <div className="flex space-x-8 text-gray-300">
        <a href="#" className="hover:text-white">Product</a>
        <a href="#" className="hover:text-white">Pricing</a>
        <a href="#" className="hover:text-white">Company</a>
        <a href="#" className="hover:text-white">Blog</a>
        <a href="#" className="hover:text-white">Changelog</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white">Login</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Start Free Trial
        </button>
      </div>
    </div>
  </nav>
);



export default Navbar;
