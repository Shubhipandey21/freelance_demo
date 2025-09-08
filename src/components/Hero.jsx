"use client";
import { motion } from "framer-motion";
import BG from "../assets/Hero.png";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[80vh] sm:min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${BG}')`,
      }}
    >
      {/* Overlay for better readability on all screens */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Corporates <br className="hidden sm:block" /> Through
          Knowledge & Innovation
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Driving growth and innovation with tailored strategies and corporate
          intelligence to shape the future of businesses worldwide.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-blue-700 hover:text-white transition">
            Explore More →
          </button>
          <button className="text-blue-300 font-medium hover:underline">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
