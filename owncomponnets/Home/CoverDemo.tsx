import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";
import React from "react";

export function CoverDemo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex max-w-5xl m-auto flex-col items-center justify-center px-4 py-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-7xl text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 dark:via-white dark:to-gray-200"
      >
        <Cover>One-Stop Solution</Cover> for FMCG brands seeking market penetration, product visibility, and dominance in India.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl text-center"
      >
        As one of the top <Cover>distributors in India</Cover>, we help brands reach Indian households with consistent growth.
      </motion.div>
    </motion.div>
  );
}
