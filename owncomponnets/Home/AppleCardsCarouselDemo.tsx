"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Cover } from "@/components/ui/cover";
import { motion } from 'framer-motion'
import React from "react";

export function AppleCardsCarouselDemo() {
    

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black">
            <div className="container mx-auto px-4 py-12">
                <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.3 }}
                className="text-center mb-0">
                    <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-600  dark:from-white dark:to-gray-300 mb-4">
                        What makes us <Cover>different?</Cover>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore our curated collection with smooth animations and immersive details
                    </p>
                </motion.div>

                <Carousel
                    items={demoCards.map((card, index) => (
                        <Card key={index} card={card} index={index} layout={true} />
                    ))}
                />
            </div>
        </div>
    );
}



const demoCards = [
    {
        image: "https://i.ibb.co/chw6jBLk/The-Role-of-Relationship-Selling-in-Retail-Distribution-Success-1536x768.webp",
        title: "Direct Coverage",
        description: "Our direct relationships with 1,45,000+ retail stores ensure that your products receive unmatched visibility, reach, and access, eliminating unnecessary intermediaries.",

    },
    {
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000",
        title: "Regional Expertise",
        description: "Leveraging our 14 years of experience across 13 brands, we possess an in-depth understanding of the territory and retailer behavior in the regions we serve, which positions us for success",

    },
    {
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
        title: "Market Penetration",
        description: "With our existing scale, diverse portfolio of brands, and well-established relationships with over 1,45,000+ stores, we are the ideal choice for market entry.",

    },
    {
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Well Established Backend Team",
        description: "We boast a state-of-the-art backend team comprising logistics experts, IT specialists, HR professionals, and finance professionals.",

    },
    {
        image: "https://plus.unsplash.com/premium_photo-1720091339077-d0f56397a0c9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Depth of Data Engagement",
        description: "Our Daily Critical Insight encompasses sales figures, delivery statuses, store responses, and our vigilant damage control efforts, helping brands optimize their strategies and enhance product performance.",

    },

    {
        image: "https://images.unsplash.com/photo-1612012060851-20f943c02d3d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Economies of Scale",
        description: "Our scale benefits brands. Economies of scale enable cost-effective operations and maximize brand profitability.",

    }
];
