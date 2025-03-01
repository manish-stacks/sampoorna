"use client";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import { BentoGridDemo } from './BentoGridDemo';
import { LinkPreviewDemo } from './LinkPreviewDemo';
import { WorldMapDemo } from './WorldMapDemo';
import { HeroParallaxDemo } from './HeroParallaxDemo';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
import { AppleCardsCarouselDemo } from './AppleCardsCarouselDemo';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Loader } from '@/components/ui/loader';
import Link from 'next/link';
import { SpotlightNewDemo } from '../SpotlightNewDemo/SpotlightNewDemo';

const words = `Your Full-Scale Distribution Partner`;

const Hero = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (replace with actual data fetching/loading logic)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // Adjust time as needed

        return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader />
            </div>
        );
    }

    return (
        <div>
            <BackgroundBeams />
            <TextGenerateEffect words={words} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="text-center relative z-10 mt-4 flex cursor-pointer items-center justify-center"
            >
                <Link href={`/services`}>
                    <button className="px-12 flex items-center justify-between py-2 rounded-sm cursor-pointer border border-neutral-600 text-white bg-gradient-to-r from-orange-500 to-yellow-400 hover:bg-gray-100 transition duration-300">
                        View Services
                        <ArrowUpRight />
                    </button>
                </Link>
            </motion.div>

            <div className="relative my-6">
                <div className="border-t border-gray-600"></div>
            </div>
            <Suspense fallback={<div className="flex justify-center py-4">Loading components...</div>}>
                <BentoGridDemo />
                <LinkPreviewDemo />
                <HeroParallaxDemo />
                <WorldMapDemo />
                <SpotlightNewDemo />
                <StickyScrollRevealDemo />
                <AppleCardsCarouselDemo />

            </Suspense>
        </div>
    );
};

export default Hero;