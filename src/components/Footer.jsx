import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/AchromicPointLogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c3d] text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <img
            src={logo}
            alt="Achromic Point Logo"
            className="w-36 mb-4"
          />
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About Us",
              "Why Choose Us",
              "Testimonials",
              "Gallery",
              "Contact Us",
              "Privacy Policy",
            ].map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:text-white transition hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Related Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Seminars and Conferences",
              "Enterprise Solutions",
              "Managed Events",
              "Corporate Membership",
              "eMagazine",
              "Training & Courses",
            ].map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:text-white transition hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal / Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">011-4601-1835</li>
            <li className="hover:text-white transition">+91-8447758768</li>
            <li className="hover:text-white transition">
              nupur.verma@achromicpoint.com
            </li>
            <li className="hover:text-white transition">
              F-11, First Floor, Kalkaji,
              <br /> New Delhi-110019, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 py-4 text-center text-sm bg-[#0a0a30]">
        <p>
          © {new Date().getFullYear()} Achromic Point. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
