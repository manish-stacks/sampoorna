"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  children?: React.ReactNode;
  item: string;
  active: string | null;
  setActive: (item: string | null) => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  item,
  active,
  setActive,
}) => {
  return (
    <div className="relative">
      <Link
        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>


      <motion.button
        onHoverStart={() => setActive(item)}
        onHoverEnd={() => setActive(null)}
        className={cn(
          "px-4 py-2 rounded-md cursor-pointer text-sm font-medium transition-colors relative",
          active === item
            ? "text-green-600"
            : "text-white hover:text-orange-600"
        )}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {item}
        {active === item && (
          <motion.span
            layoutId="underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.button>
        </Link>
      {active === item && children && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.1, type: "spring", stiffness: 600, damping: 20 }} 
          className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 z-50 overflow-hidden"
          onHoverStart={() => setActive(item)}
          onHoverEnd={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="h-1 w-full bg-gradient-to-r from-green-500 to-green-200"
          />
          {children}
        </motion.div>
      )}
    </div>
  );
};

export const Menu: React.FC<{
  children: React.ReactNode;
  setActive: (item: string | null) => void;
}> = ({ children, setActive }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="flex items-center space-x-4"
    >
      {children}
    </nav>
  );
};

export const HoveredLink: React.FC<{
  children: React.ReactNode;
  href: string;
  className?: string;
}> = ({ children, href, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={`/${href.toLowerCase().replace(/\s+/g, "-")}`}
        className={cn(
          "block px-4 py-2 text-sm transition-colors rounded-md relative overflow-hidden group",
          isHovered ? "text-orange-400" : "text-gray-700",
          className
        )}
      >
        <motion.span
          className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="relative z-10 flex items-center"
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 12 }}
        >
          {children}
          {isHovered && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </motion.svg>
          )}
        </motion.span>
      </Link>
    </motion.div>
  );
};

export const ProductItem: React.FC<{
  title: string;
  description: string;
  href: string;
  //src?: string;
}> = ({ title, description, href }) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="flex items-start p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-colors"
      >
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};