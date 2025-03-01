"use client";
import React from "react";

import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
    return (
        <div className="flex justify-center items-center h-[20rem] flex-col px-4">
            <div className="text-neutral-500 text-center md:text-start dark:text-neutral-400 text-xl md:text-[1.70rem] max-w-6xl mx-auto mb-10">

                Our strength is in our numbers, which are consistently growing and strengthening    <LinkPreview isStatic={true} imageSrc="https://i.ibb.co/ns74XDYK/8-best-powerful-marketing-strategies-of-food-brands-1024x576.jpg" url="https://tailwindcss.com" className="font-bold">
                    our brands.
                </LinkPreview>{" "}
                and We proudly distribute a wide range of {" "}
                <LinkPreview url="https://framer.com/motion" isStatic={true} imageSrc="https://5.imimg.com/data5/DT/LU/MY-5437495/fmcg-and-home-and-personal-care.jpg" className="font-bold">
                    FMCG brands
                </LinkPreview>{" "}   across various categories, including food and beverages, body care, laundry, stationery and more.
            </div>

        </div>
    );
}
