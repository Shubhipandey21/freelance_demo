"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/AboutImg.png";

function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section with overlay */}
        <motion.div
          className="relative w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group overflow-hidden rounded-3xl ">
            <img
              src={Image}
              alt="Team working"
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
         
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg transition-transform duration-300"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-6 h-6"
                >
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-6"
        >
          <motion.h3
            variants={fadeUp}
            className="text-blue-600 font-bold mb-2 uppercase tracking-wide"
          >
            About Us
          </motion.h3>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-extrabold text-gray-900 mb-4"
          >
            Empowering Organizations with Expertise and Innovation
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed">
            At Achromic Point, we specialize in delivering world-class intelligence and event solutions that fuel organizational success. Our expertise in seminars, conferences, and training sessions has empowered thousands of professionals across industries.
          </motion.p>
          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed">
            We believe in building partnerships rooted in trust, knowledge sharing, and ethical growth. Our tailored services ensure your business stays competitive, adaptive, and ready for the future.
          </motion.p>

          {/* Mission, Vision, Values Cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6"
          >
            {[
              {
                icon: "🎯",
                title: "Mission",
                text: "To empower organizations with knowledge and strategy for lasting success.",
              },
              {
                icon: "🚀",
                title: "Vision",
                text: "To be the global leader in event intelligence and business development.",
              },
              {
                icon: "💡",
                title: "Values",
                text: "Integrity, innovation, collaboration, and sustainable growth are our guiding principles.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 text-4xl mb-3">{card.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
                <p className="text-gray-600 text-sm">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
