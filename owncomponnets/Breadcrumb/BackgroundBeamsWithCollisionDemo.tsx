"use client";
import React from "react";
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface BreadcrumbProps {
  firstPart?: string;
  secondPart?: string;
  thirdPart?: string;
  centerPart?: string;
}

export function Breadcrumb({ firstPart, secondPart, thirdPart, centerPart }: BreadcrumbProps) {
  return (
    <BackgroundBeamsWithCollision>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-6xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
            {firstPart ? firstPart : "Scale your brand in "}
            <span className="text-orange-500"> {secondPart ? secondPart : "India"} </span>
            {thirdPart ? thirdPart : "with confidence"}
            <div className="relative mx-auto inline-block w-max">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-orange-500 via-green-500 to-gray-400 py-4">
                <span>{centerPart ? centerPart : "SAMPOORN MARKETING."}</span>
              </div>
            </div>
          </h2>
        </motion.div>
  
    </BackgroundBeamsWithCollision>
  );
}