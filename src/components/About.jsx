"use client";
import React from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/Image1.jpeg"; // Use your actual image paths
import Image2 from "../assets/Image2.jpeg"; 
import Image3 from "../assets/Image3.jpeg"; 


function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Area */}
        <div className="relative">
          <div className="flex flex-col space-y-4">
            <motion.img
              src={Image2}
              alt="Team meeting"
              className="rounded-xl shadow-lg w-48 h-48 object-cover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={Image1}
              alt="Collaboration"
              className="rounded-xl shadow-lg w-64 h-64 object-cover self-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.img
            src={Image3}
            alt="Success"
            className="absolute top-16 left-20 rounded-xl shadow-lg w-64 h-72 object-cover border-4 border-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />

          {/* Experience Box */}
          <motion.div
            className="absolute bottom-0 left-0 bg-blue-600 text-white px-6 py-4 rounded-tr-xl rounded-br-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white text-blue-600 p-2 rounded-full">
                🏆
              </div>
              <div>
                <h3 className="text-xl font-bold">5+</h3>
                <p className="text-sm">Years Of Experience</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Area */}
        <div>
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We Build Competitive Business sectors
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            At Achromic Point, we deliver world-class event solutions and strategic intelligence to help organizations grow and succeed. Our seminars, conferences, and training sessions have equipped thousands of professionals to sharpen their skills and meet their goals.</motion.p>

          <div className="space-y-4 mb-8">
            <motion.div
              className="flex items-start bg-gray-100 rounded-lg p-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                💼
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Company Values</h4>
                <p className="text-gray-600 text-sm">
                 We believe in building trusted partnerships through collaboration, knowledge sharing, and ethical practices. These values guide us in providing meaningful solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start bg-gray-100 rounded-lg p-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                🎯
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Company Mission</h4>
                <p className="text-gray-600 text-sm">
                 To empower organizations with tailored strategies that enhance agility, competitiveness, and readiness for future challenges.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Signature Section */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "../assets/AboutImg.png";

// function About() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

//         {/* Image Section with overlay */}
//         <motion.div
//           className="relative w-full max-w-md mx-auto"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="relative group overflow-hidden rounded-3xl ">
//             <img
//               src={Image}
//               alt="Team working"
//               className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
//             />
         
//             <motion.div
//               whileHover={{ scale: 1.2, rotate: 10 }}
//               className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg transition-transform duration-300"
//             >
//               <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="white"
//                   viewBox="0 0 24 24"
//                   stroke="none"
//                   className="w-6 h-6"
//                 >
//                   <path d="M5 3v18l15-9L5 3z" />
//                 </svg>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Content Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.2 }}
//           className="space-y-6"
//         >
//           <motion.h3
//             variants={fadeUp}
//             className="text-blue-600 font-bold mb-2 uppercase tracking-wide"
//           >
//             About Us
//           </motion.h3>
//           <motion.h2
//             variants={fadeUp}
//             className="text-3xl font-extrabold text-gray-900 mb-4"
//           >
//             Empowering Organizations with Expertise and Innovation
//           </motion.h2>
//           <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed">
//             At Achromic Point, we specialize in delivering world-class intelligence and event solutions that fuel organizational success. Our expertise in seminars, conferences, and training sessions has empowered thousands of professionals across industries.
//           </motion.p>
//           <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed">
//             We believe in building partnerships rooted in trust, knowledge sharing, and ethical growth. Our tailored services ensure your business stays competitive, adaptive, and ready for the future.
//           </motion.p>

//           {/* Mission, Vision, Values Cards */}
//           <motion.div
//             variants={fadeUp}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6"
//           >
//             {[
//               {
//                 icon: "🎯",
//                 title: "Mission",
//                 text: "To empower organizations with knowledge and strategy for lasting success.",
//               },
//               {
//                 icon: "🚀",
//                 title: "Vision",
//                 text: "To be the global leader in event intelligence and business development.",
//               },
//               {
//                 icon: "💡",
//                 title: "Values",
//                 text: "Integrity, innovation, collaboration, and sustainable growth are our guiding principles.",
//               },
//             ].map((card, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="text-blue-600 text-4xl mb-3">{card.icon}</div>
//                 <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
//                 <p className="text-gray-600 text-sm">{card.text}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default About;
