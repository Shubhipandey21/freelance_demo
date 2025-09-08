import React from "react";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

function ContactUsSection() {
  return (
    <section className="bg-gradient-to-r from-[#0B0F3B] via-[#1A1F6C] to-[#0B0F3B] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background subtle effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Contact Information */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-5"
        >
          <div className="flex items-center gap-3 hover:translate-x-2 transition">
            <Phone className="w-6 h-6 text-white animate-pulse" />
            <span className="text-lg font-medium">+1 234-555-0172</span>
          </div>
          <div className="flex items-center gap-3 hover:translate-x-2 transition">
            <Mail className="w-6 h-6 text-white animate-pulse" />
            <span className="text-lg font-medium">contact@achromicpoint.com</span>
          </div>
        </motion.div>

        {/* Heading and Description */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let’s Elevate Your Business
          </h2>
          <p className="text-lg text-gray-200 mb-4">
            At Achromic Point, we deliver cutting-edge intelligence and event
            solutions tailored to meet your organizational goals. Whether you
            need expert guidance or comprehensive event management, we’re here
            to support your growth.
          </p>
          <p className="text-base text-gray-300">
            Connect with us today and explore how our services can empower your
            team, streamline processes, and open doors to new opportunities.
          </p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center md:text-right"
        >
          <button className="relative bg-white text-blue-600 font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden group">
            <span className="relative z-10">Request a Consultation &rarr;</span>
            {/* Button hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 bg-white opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUsSection;
