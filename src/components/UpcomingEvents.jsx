"use client"; // Next.js 13 app directory
import React from "react";
import { motion } from "framer-motion";

import EventImg from '../assets/Event.jpeg'; // Replace with actual images


const events = [
  {
    label: "MEA EVENT",
    title: "Middle East Event Show",
    date: "9 Jun, 2026 • 3 days",
    location: "Dubai, UAE",
    description: "",
    image: EventImg,
  },
  {
    label: "MEA EVENT",
    title: "FNDM Dubai",
    date: "4 Oct, 2025 • 2 days • 12PM - 10PM",
    location: "Dubai, UAE",
    description: "",
    image: EventImg,
  },
  {
    label: "MEA EVENT",
    title: "Agra Middle East",
    date: "6 Oct, 2025 • 2 days • Halls 3 & 4",
    location: "Dubai, UAE",
    description: "",
    image: EventImg,
  },
  {
    label: "MEA EVENT",
    title: "Asset Recovery Middle East",
    date: "7 Oct, 2025 • 3 days",
    location: "Dubai, UAE",
    description: "",
    image: EventImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.1, duration: 0.6 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function UpcomingEvents() {
  return (
    <motion.section
      className="py-12 bg-gray-50 min-h-[600px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with title, dropdown, and button */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            Upcoming Conferences and Exhibitions
          </h2>
          <div className="flex gap-4">
            <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Choose an Interest</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>
            <button className="bg-[#0B0F3B] text-white px-4 py-2 rounded-md hover:bg-[#060b3e] transition">
              Browse All Events →
            </button>
          </div>
        </motion.div>

        {/* Event Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {events.map((event, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 group overflow-hidden"
              variants={itemVariants}
            >
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-2 text-left transition-colors duration-300 group-hover:bg-[#0B0F3B] hover:text-white">
                {event.label && (
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                    {event.label}
                  </span>
                )}
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-gray-500 text-sm">{event.date}</p>
                <p className="text-gray-500 text-sm">{event.location}</p>
                {event.description && (
                  <p className="text-gray-600 text-sm">{event.description}</p>
                )}
                <button className="mt-3 text-sm font-semibold px-4 py-2 rounded-md border border-transparent bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  Book Now →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default UpcomingEvents;

// "use client"; // if using Next.js 13 app directory
// import React, { useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { motion } from "framer-motion";

// import BGImage from '../assets/UpcomingEvents.png';
// import EventImg from '../assets/Event.jpeg';

// const events = [
//   {
//     title: "Data Recovery Solutions",
//     description: "Reliable backup and disaster recovery services to protect your business data.",
//     image: EventImg,
//   },
//   {
//     title: "Data Analytics Workshop",
//     description: "Learn how to interpret data and make informed decisions using advanced analytics tools.",
//     image: EventImg,
//   },
//   {
//     title: "Cloud Computing Summit",
//     description: "Explore modern cloud architecture and scalable infrastructure solutions.",
//     image: EventImg,
//   },
//   {
//     title: "Cyber Security Conference",
//     description: "Stay ahead with the latest cybersecurity threats and protection strategies.",
//     image: EventImg,
//   },
//   {
//     title: "AI & Machine Learning",
//     description: "Harness the power of AI for smarter, data-driven operations.",
//     image: EventImg,
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { staggerChildren: 0.2, duration: 0.8 } 
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// function UpcomingEvents() {
//   const paginationRef = useRef(null);

//   useEffect(() => {
//     // This is to ensure Swiper is mounted before assigning the pagination element
//   }, []);

//   return (
//     <motion.section
//       className="relative py-24 min-h-[650px]"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center opacity-70" 
//         style={{ backgroundImage: `url('${BGImage}')` }}
//       ></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
//         {/* Heading */}
//         <motion.h2
//           className="text-4xl font-bold mb-4 mt-24"
//           variants={itemVariants}
//         >
//           Our Upcoming Incredible Events
//         </motion.h2>
//         <motion.p
//           className="mb-12 text-gray-900 text-lg"
//           variants={itemVariants}
//         >
//           Discover how we’re transforming businesses through innovative technology solutions
//         </motion.p>

//         {/* Swiper Carousel */}
//         <motion.div variants={itemVariants}>
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ 
//               el: paginationRef.current, 
//               clickable: true 
//             }}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {events.map((event, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div 
//                   className="bg-white text-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//                   variants={itemVariants}
//                 >
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="p-5">
//                     <h3 className="text-xl font-bold mb-2">{event.title}</h3>
//                     <p className="text-gray-600 text-sm">{event.description}</p>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Pagination placed below */}
//           <div ref={paginationRef} className="custom-pagination mt-10"></div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// export default UpcomingEvents;
