"use client"; // if using Next.js 13 app directory
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import BGImage from '../assets/UpcomingEvents.png';
import EventImg from '../assets/Event.jpeg';

const events = [
  {
    title: "Data Recovery Solutions",
    description: "Reliable backup and disaster recovery services to protect your business data.",
    image: EventImg,
  },
  {
    title: "Data Analytics Workshop",
    description: "Learn how to interpret data and make informed decisions using advanced analytics tools.",
    image: EventImg,
  },
  {
    title: "Cloud Computing Summit",
    description: "Explore modern cloud architecture and scalable infrastructure solutions.",
    image: EventImg,
  },
  {
    title: "Cyber Security Conference",
    description: "Stay ahead with the latest cybersecurity threats and protection strategies.",
    image: EventImg,
  },
  {
    title: "AI & Machine Learning",
    description: "Harness the power of AI for smarter, data-driven operations.",
    image: EventImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.2, duration: 0.8 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function UpcomingEvents() {
  const paginationRef = useRef(null);

  useEffect(() => {
    // This is to ensure Swiper is mounted before assigning the pagination element
  }, []);

  return (
    <motion.section
      className="relative py-24 min-h-[650px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70" 
        style={{ backgroundImage: `url('${BGImage}')` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4 mt-24"
          variants={itemVariants}
        >
          Our Upcoming Incredible Events
        </motion.h2>
        <motion.p
          className="mb-12 text-gray-900 text-lg"
          variants={itemVariants}
        >
          Discover how we’re transforming businesses through innovative technology solutions
        </motion.p>

        {/* Swiper Carousel */}
        <motion.div variants={itemVariants}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              el: paginationRef.current, 
              clickable: true 
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-white text-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination placed below */}
          <div ref={paginationRef} className="custom-pagination mt-10"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default UpcomingEvents;
