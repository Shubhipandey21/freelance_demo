import React, { useState } from "react";
import logo from "../assets/apc-Logo.png";
import { Menu, X } from "lucide-react"; // icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Achromic Point Logo" className="h-12 w-56" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600 font-medium">Home</a>
          <a href="#" className="hover:text-blue-600 font-medium">Upcoming Events</a>
          <a href="#" className="hover:text-blue-600 font-medium">Past Events</a>
          <a href="#" className="hover:text-blue-600 font-medium">Enterprise Solutions</a>
          <a href="#" className="hover:text-blue-600 font-medium">eMagazine</a>
          <a href="#" className="hover:text-blue-600 font-medium">Corporate Membership</a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Get A Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="#" className="hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="hover:text-blue-600 font-medium">Upcoming Events</a>
            <a href="#" className="hover:text-blue-600 font-medium">Past Events</a>
            <a href="#" className="hover:text-blue-600 font-medium">Enterprise Solutions</a>
            <a href="#" className="hover:text-blue-600 font-medium">eMagazine</a>
            <a href="#" className="hover:text-blue-600 font-medium">Corporate Membership</a>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
              Get A Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
