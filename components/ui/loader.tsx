"use client";
import React from "react";
import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center fixed z-[99999] backdrop-blur-3xl w-full justify-center h-screen ">
      {/* Spinning Loader */}
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-orange-500"></div>

      {/* Animated Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-2xl font-semibold text-white"
      >
        SAMPOORN MARKETING
      </motion.p>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-2 text-lg text-gray-400"
      >
        Loading...
      </motion.p>
    </div>
  );
};
