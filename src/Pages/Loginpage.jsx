import React from 'react';
import logo from '../assets/logo-alt.avif'

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-custom-gradient flex flex-col items-center justify-center p-4 mb-8">
      {/* Logo/Icon */}
      <div className="mb-[35px]">
            <img src={logo} 
              alt="Logo"></img>
      </div>

      {/* Sign in text */}
      <h2 className="text-white text-xl mb-6">Sign in with</h2>

      {/* OAuth Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="flex items-center justify-center w-32 h-12 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path 
              fill="white" 
              d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z"
            />
          </svg>
        </button>
        <button className="flex items-center justify-center w-32 h-12 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path 
              fill="white" 
              d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
            />
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-24 bg-gray-700"></div>
        <span className="text-gray-400 text-sm">or continue with</span>
        <div className="h-px w-24 bg-gray-700"></div>
      </div>

      {/* Email Input */}
      <div className="w-full max-w-sm mb-4">
        <input 
          type="email" 
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-[#151030] text-white rounded-lg border border-gray-800 focus:border-purple-500 focus:outline-none"
        />
      </div>

      {/* Continue Button */}
      <button className="w-full max-w-sm h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
        Continue
      </button>

      {/* Footer Links */}
      <div className="mt-12 flex gap-6">
        <a href="#" className="text-gray-400 hover:text-white text-sm">Discord</a>
        <a href="#" className="text-gray-400 hover:text-white text-sm">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
        <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-gray-500 text-sm">
        Reflect App, LLC. All rights reserved.
      </div>
    </div>
  );
};

export default LoginPage;