"use client";
import React, { useEffect, useState } from "react";
import { Users, Building2, Presentation } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { icon: <Users className="w-10 h-10 text-white" />, value: 25000, label: "Professionals" },
    { icon: <Building2 className="w-10 h-10 text-white" />, value: 4500, label: "Corporates" },
    { icon: <Presentation className="w-10 h-10 text-white" />, value: 2000, label: "Seminars / Conferences / Webinars" },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client side after mount
  }, []);

  return (
    <section className="bg-[#0B0F3B] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 bg-white/10 rounded-full"
            >
              {item.icon}
            </motion.div>

            {/* Animated Counter */}
            <h2 className="text-3xl font-bold">
              {isClient && (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  separator=","
                />
              )}
              +
            </h2>

            {/* Label */}
            <p className="text-lg opacity-90">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
