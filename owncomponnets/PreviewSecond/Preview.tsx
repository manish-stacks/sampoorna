"use client";
import { LinkPreview } from '@/components/ui/link-preview';
import React from 'react';
import { motion } from 'framer-motion';

export const Preview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'linear' }}
      className="flex justify-center items-center h-[15rem] flex-col px-4"
    >
      <p className="text-neutral-500 text-center md:text-start dark:text-neutral-400 text-xl md:text-[1.70rem] max-w-6xl mx-auto mb-10">
        We specialize in end-to-end distribution across India, with our headquarters in{' '}
        <LinkPreview
          isStatic={true}
          imageSrc="https://i.ibb.co/fVRJKKGB/111040-Delhi-NCR-Records-Triple-Digit-Growth-In-New-Supply.jpg"
          url="https://tailwindcss.com"
          className="font-bold"
        >
          Delhi/NCR.
        </LinkPreview>{' '}
        As an FMCG distributor we oversee every stage of the process, from{' '}
        <LinkPreview
          url="https://framer.com/motion"
          isStatic={true}
          imageSrc="https://5.imimg.com/data5/DT/LU/MY-5437495/fmcg-and-home-and-personal-care.jpg"
          className="font-bold"
        >
          product placement
        </LinkPreview>{' '}
        to final sale, ensuring your brand achieves maximum reach and success in the Indian market.
      </p>
    </motion.div>
  );
};