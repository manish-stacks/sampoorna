import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";


interface ContentItem {
  title: string;
  description: string;
  image?: string;
  content?: React.ReactNode;
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  // Update active card based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Background colors and gradients for visual variety
  const backgroundColors = [
    "#0f172a", // slate-900
    "#020617", // slate-950
    "#171717", // neutral-900
  ];
  
  const linearGradients = useMemo(() => [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan to emerald
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink to indigo
    "linear-gradient(to bottom right, #f97316, #facc15)", // orange to yellow
    "linear-gradient(to bottom right, #8b5cf6, #ec4899)", // violet to pink
  ], []);

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  // Update background gradient when active card changes
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      ref={containerRef}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ duration: 0.5 }}
      className="h-[30rem] overflow-y-auto   flex justify-center relative space-x-10 rounded-md p-10"
    >
      {/* Text content column */}
      <div className="relative  flex items-start px-4">
        <div className="max-w-2xl  ">
          {content.map((item, index) => (
            <motion.div 
              key={`${item.title}-${index}`} 
              className="my-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeCard === index ? 1 : 0.3,
                y: activeCard === index ? 0 : 10
              }}
              transition={{ 
                duration: 0.5, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <motion.h2
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                className="text-base text-slate-300 max-w-sm mt-4"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Visual content column */}
      <motion.div
        style={{ background: backgroundGradient }}
        animate={{
          background: backgroundGradient,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
        transition={{ duration: 0.7 }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-xl sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].image ? (
          <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={`image-${activeCard}`}
          >
            <Image 
              src={content[activeCard].image} 
              alt={content[activeCard].title}
              width={"200"}
              height={"200"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-lg font-medium drop-shadow-lg">
                {content[activeCard].title}
              </h3>
            </div>
          </motion.div>
        ) : (
          content[activeCard].content
        )}
      </motion.div>
    </motion.div>
  );
};