"use client"

import { useEffect } from "react";

export const SmoothScroll = () => {
  useEffect(() => {
    const initializeScroll = async () => {
      try {
        console.log("Initializing Locomotive Scroll...");

        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        console.log("LocomotiveScroll imported successfully:", LocomotiveScroll);

        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'), // Apply scroll to the container
          smooth: true,
          smoothMobile: true, // Enables smooth scrolling on mobile
        });

        console.log("Locomotive Scroll initialized:", scroll);

        // Cleanup scroll instance when the component unmounts
        return () => {
          console.log("Destroying Locomotive Scroll...");
          scroll.destroy();
          console.log("Locomotive Scroll destroyed.");
        };
      } catch (error) {
        console.error("Error initializing LocomotiveScroll:", error);
      }
    };

    const cleanup = initializeScroll();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return null; // No UI to render, just side-effect
};
