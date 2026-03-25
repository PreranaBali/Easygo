import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, ShoppingCart, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  // This tells us what page we are currently on
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 w-full px-4 lg:px-8 h-20 flex items-center">
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-3 items-center h-full">
        
        {/* Left Column: Logo & Navigation */}
        <div className="flex items-center gap-8 h-full">
          
          {/* Logo - Wrap in Link to go home when clicked */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-black text-white font-bold text-xs px-2 py-1.5 rounded-md leading-none flex items-center justify-center">
              EG
            </div>
            <div className="text-xl font-bold leading-none tracking-tight flex flex-col justify-center text-black">
              <span>Easy</span>
              <span className="font-normal text-[19px]">Go</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 h-full ml-2">
            {/* Revamp Link */}
            <Link 
              to="/" 
              className={`h-full flex items-center pt-1 transition-colors text-[15px] ${
                isActive('/') 
                ? 'text-black font-semibold border-b-[3px] border-black' 
                : 'text-gray-500 font-medium hover:text-black'
              }`}
            >
              Revamp
            </Link>
            
            {/* Native Link (Placeholder) */}
            <Link 
              to="/native" 
              className={`h-full flex items-center pt-1 transition-colors text-[15px] ${
                isActive('/native') 
                ? 'text-black font-semibold border-b-[3px] border-black' 
                : 'text-gray-500 font-medium hover:text-black'
              }`}
            >
              Native
            </Link>
            
            {/* Beauty Link */}
            <Link 
              to="/beauty" 
              className={`h-full flex items-center pt-1 transition-colors text-[15px] ${
                isActive('/beauty') 
                ? 'text-black font-semibold border-b-[3px] border-black' 
                : 'text-gray-500 font-medium hover:text-black'
              }`}
            >
              Beauty
            </Link>
          </div>
        </div>

        {/* Center Column: Location Dropdown */}
        <div className="hidden lg:flex items-center justify-center h-full">
          <button className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-2 w-[280px] xl:w-[320px] hover:shadow-sm transition-all bg-white/50">
            <div className="flex items-center text-gray-700 gap-2 overflow-hidden">
              <MapPin size={18} className="text-gray-500 flex-shrink-0" />
              <span className="text-sm font-medium truncate whitespace-nowrap text-gray-600">
                3, Norris Rd- Richmond ...
              </span>
            </div>
            <ChevronDown size={18} className="text-gray-500 ml-2 flex-shrink-0" />
          </button>
        </div>

        {/* Right Column: Icons */}
        <div className="flex items-center justify-end space-x-6 h-full">
          <button className="p-2 text-gray-800 border border-gray-300 rounded-full hover:bg-white transition-colors flex items-center justify-center shadow-sm">
            <ShoppingCart size={18} strokeWidth={2} />
          </button>
          <button className="p-2 text-gray-800 hover:text-black transition-colors flex items-center justify-center">
            <User size={22} strokeWidth={2} />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;