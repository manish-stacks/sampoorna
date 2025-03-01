"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";

const testimonials = [
    {
        quote: "The mountain retreat was absolutely breathtaking. I've never experienced such serenity and natural beauty in one place.",
        name: "Alex Johnson",
        title: "Adventure Enthusiast",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "Urban Exploration changed how I see cities. The hidden gems they showed us were incredible - places I would have never found on my own.",
        name: "Samantha Lee",
        title: "Travel Blogger",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "The coastal escape package was worth every penny. Pristine beaches, amazing food, and the most stunning sunsets I've ever witnessed.",
        name: "Michael Torres",
        title: "Photography Enthusiast",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "Our forest adventure was magical. The guides were knowledgeable and the wildlife encounters were unforgettable. Highly recommend!",
        name: "Emily Chen",
        title: "Nature Lover",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "The desert expedition exceeded all expectations. The night sky viewing alone was worth the trip - I've never seen so many stars!",
        name: "David Wilson",
        title: "Astronomy Enthusiast",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

export function InfiniteMovingCardsDemo() {
    return (
        <div className=" rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
           
            />
        </div>
    );
}

