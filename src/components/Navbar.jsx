import React, { useState } from "react";
import logo from "../assets/apc-Logo.png";
import { Menu, X, Search } from "lucide-react"; // icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B0F3B] text-white fixed w-full z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Achromic Point Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
        <a href="#" className="hover:underline transition-all font-medium">Home</a>
            <a href="#" className="hover:underline transition-all font-medium">Upcoming Events</a>
            <a href="#" className="hover:underline transition-all font-medium">Past Events</a>
            <a href="#" className="hover:underline transition-all font-medium">Enterprise Solution</a>
            <a href="#" className="hover:underline transition-all font-medium">eMagzine</a>
            <a href="#" className="hover:underline transition-all font-medium">Coporate Membership</a>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full px-4 py-2 text-black bg-white focus:outline-none w-40 sm:w-64"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-500">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F3B] text-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="#" className="hover:underline transition-all font-medium">Home</a>
            <a href="#" className="hover:underline transition-all font-medium">Upcoming Events</a>
            <a href="#" className="hover:underline transition-all font-medium">Past Events</a>
            <a href="#" className="hover:underline transition-all font-medium">Enterprise Solution</a>
            <a href="#" className="hover:underline transition-all font-medium">eMagzine</a>
            <a href="#" className="hover:underline transition-all font-medium">Coporate Membership</a>

            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search"
                className="rounded-full px-4 py-2 text-black bg-white focus:outline-none w-full"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
