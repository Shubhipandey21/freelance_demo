"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Corporate Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Achromic Point organized one of the best corporate training programs I’ve attended. Their professionalism and planning were outstanding.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    role: "HR Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "We partnered with Achromic Point for a leadership seminar, and the quality of speakers and content was exceptional.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Finance Professional",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback:
      "Their conferences always deliver valuable insights and networking opportunities. I’ve gained immensely in my career from them.",
    rating: 4,
  },
  {
    name: "Priya Mehra",
    role: "Event Participant",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    feedback:
      "The attention to detail and event execution was flawless. Truly one of the most well-managed events I’ve been part of.",
    rating: 5,
  },
  {
    name: "Sanjay Gupta",
    role: "Training Head",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    feedback:
      "Achromic Point has set a benchmark in organizing corporate trainings. Our employees found the sessions enriching and practical.",
    rating: 5,
  },
  {
    name: "Meena Rathi",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Their webinars are insightful and interactive, providing immense knowledge for professionals like me.",
    rating: 4,
  },
  {
    name: "Arjun Nair",
    role: "Business Consultant",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    feedback:
      "With Achromic Point’s events, I’ve always walked away with new strategies and a better understanding of the business world.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // show 2 cards at a time
  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <section className="bg-[#0B0F3B] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-sm uppercase tracking-widest opacity-80">Testimonials</h4>
        <h2 className="text-3xl font-bold mt-2">People Who Already Love Us</h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl shadow-lg p-8 relative"
            >
              <div className="absolute top-4 right-4 text-blue-600">
                <Quote className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                  <div className="flex text-yellow-500">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic">"{item.feedback}"</p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
