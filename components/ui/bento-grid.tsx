"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4 auto-rows-[18rem]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  overLay,
  animationVariant,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  overLay?: boolean;
  animationVariant?: string;
}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: animationVariant || "easeIn" }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}

      className={cn(
        `relative overflow-hidden rounded-xl cursor-pointer
       group bg-gradient-to-br from-slate-900 to-slate-800
       border border-slate-700/50 hover:border-orange-500/50`,

        className 
      )}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70 z-10" />


      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 blur-[2px] transition-all duration-500 group-hover:duration-200 animate-border-spin" />

      <div className="relative h-full w-full rounded-xl p-6 flex flex-col justify-end z-20 overflow-hidden">
        {header && (
          <div className="absolute inset-0 w-full h-full">

            <Image
              src={header}
              alt={title?.toString() || "Bento Item"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />


            {overLay && (
              <div className="absolute inset-0 bg-slate-900/50"></div>
            )}
          </div>
        )}


        {/* Text content with animated reveal */}
        <motion.div
          initial={{ opacity: 0.8, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-20 mt-auto"
        >
          {title && (
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-sm text-white/90 line-clamp-3 max-w-[90%] drop-shadow-md">
              {description}
            </p>
          )}

          {/* Subtle indicator for interaction */}
          <div className="w-8 h-0.5 bg-orange-500 mt-3 transition-all duration-300 group-hover:w-12" />
        </motion.div>
      </div>

      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes borderSpin {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-border-spin {
          background-size: 200% 200%;
          animation: borderSpin 3s ease infinite;
        }
      `}</style>
    </motion.div>
  );
};
