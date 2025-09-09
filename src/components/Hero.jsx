"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import your images
import BG1 from "../assets/Hero2.jpeg";
import BG2 from "../assets/Hero3.jpeg";
import BG3 from "../assets/Hero4.jpeg";
import BG4 from "../assets/Hero5.jpeg";

export default function HeroSection() {
  const backgrounds = [BG1, BG2, BG3, BG4];
  const [index, setIndex] = useState(0);

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel with crossfade effect */}
      <div className="absolute inset-0 w-full h-full">
        {backgrounds.map((bg, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bg}')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/80 to-transparent"></div>
      </div>

      {/* Content aligned slightly off-left but closer to center */}
      <div className="relative z-10 flex flex-col items-start text-left text-white px-6 sm:px-12 lg:px-20 max-w-7xl">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Organizations with Expertise and Innovation
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At Achromic Point, we specialize in delivering world-class intelligence and event solutions
          that fuel organizational success. Our expertise in seminars, conferences, and training
          sessions has empowered thousands of professionals across industries.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We believe in building partnerships rooted in trust, knowledge sharing, and ethical growth.
          Our tailored services ensure your business stays competitive, adaptive, and ready for the future.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <button className="bg-[#0B0F3B] text-white px-6 sm:px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-800 transition">
            Conferences →
          </button>
          <button className="bg-white text-[#0B0F3B] px-6 sm:px-8 py-3 rounded-md font-semibold shadow hover:bg-gray-200 transition">
            Training Courses →
          </button>
        </motion.div>
      </div>
    </section>
  );
}


// "use client";
// import { motion } from "framer-motion";
// import BG from "../assets/Hero.png";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative bg-cover bg-center min-h-[80vh] sm:min-h-screen flex items-center justify-center"
//       style={{
//         backgroundImage: `url('${BG}')`,
//       }}
//     >
//       {/* Overlay for better readability on all screens */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
//         <motion.h1
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight mb-6"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Empowering Corporates <br className="hidden sm:block" /> Through
//           Knowledge & Innovation
//         </motion.h1>

//         <motion.p
//           className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.2 }}
//         >
//           Driving growth and innovation with tailored strategies and corporate
//           intelligence to shape the future of businesses worldwide.
//         </motion.p>

//         <motion.div
//           className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.3 }}
//         >
//           <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-blue-700 hover:text-white transition">
//             Explore More →
//           </button>
//           <button className="text-blue-300 font-medium hover:underline">
//             View All Services
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
