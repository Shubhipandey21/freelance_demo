"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

export default function BusinessCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-move carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (i) => {
    const diff = (i - index + images.length) % images.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right1";
    if (diff === 2) return "right2";
    if (diff === images.length - 1) return "left1";
    if (diff === images.length - 2) return "left2";
    return "hidden";
  };

  // Position configs for desktop & mobile
  const positions = isMobile
    ? {
        center: { x: 0, scale: 1, zIndex: 10, rotateY: 0, opacity: 1 },
        right1: { x: 140, scale: 0.85, zIndex: 5, rotateY: -15, opacity: 0.9 },
        right2: { x: 220, scale: 0.75, zIndex: 4, rotateY: -25, opacity: 0.7 },
        left1: { x: -140, scale: 0.85, zIndex: 5, rotateY: 15, opacity: 0.9 },
        left2: { x: -220, scale: 0.75, zIndex: 4, rotateY: 25, opacity: 0.7 },
        hidden: { x: 0, scale: 0.5, zIndex: 0, rotateY: 0, opacity: 0 },
      }
    : {
        center: { x: 0, scale: 1, zIndex: 10, rotateY: 0, opacity: 1 },
        right1: { x: 260, scale: 0.9, zIndex: 5, rotateY: -20, opacity: 0.9 },
        right2: { x: 480, scale: 0.8, zIndex: 4, rotateY: -30, opacity: 0.7 },
        left1: { x: -260, scale: 0.9, zIndex: 5, rotateY: 20, opacity: 0.9 },
        left2: { x: -480, scale: 0.8, zIndex: 4, rotateY: 30, opacity: 0.7 },
        hidden: { x: 0, scale: 0.5, zIndex: 0, rotateY: 0, opacity: 0 },
      };

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 sm:py-16 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
        OUR EVENT GALLERY
      </h2>
      <div className="relative flex items-center justify-center w-full h-[350px] sm:h-[500px] overflow-hidden">
        {images.map((src, i) => {
          const pos = getPosition(i);
          const { x, scale, zIndex, rotateY, opacity } = positions[pos];

          return (
            <AnimatePresence key={i}>
              {pos !== "hidden" && (
                <motion.img
                  key={i}
                  src={src}
                  alt={`slide-${i}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ x, scale, zIndex, rotateY, opacity }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.8 }}
                  className="absolute rounded-xl shadow-lg object-cover 
                             w-[180px] h-[270px] sm:w-[250px] sm:h-[380px]"
                  style={{ zIndex }}
                />
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </section>
  );
}
