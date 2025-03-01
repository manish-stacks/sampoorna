"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import data from "./ChooseUsData";

// const scrollContent = [
//     {
//         title: "01. General Trade",
//         description: "With an expansive reach across 145,000+ retail stores, we dominate the Indian market, ensuring seamless premium product distribution.",
//         image: "https://i.ibb.co/GfYC4Hgy/image.png"
//     },
//     {
//         title: "02. Traditional Wholesale",
//         description: "Sampoorna Marketing serves more than 3,700 key accounts in traditional wholesale, categorized as Platinum, Gold, and Silver based on business size and growth potential.",
//         image: "https://i.ibb.co/sJyV0YPH/65e31271e7efeef17efad925-65b769760c7f85e4f84ce4dd-traditional-wholesale-p-800-p-500.jpg"
//     },
//     {
//         title: "03. Modern Trade (National)",
//         description: "Secure exclusive partnerships with India's leading national store chains to drive sales and brand awareness through maximized shelf and display space.",
//         image: "https://i.ibb.co/Fk2fvzQz/image.png"
//     },
//     {
//         title: "04. Modern Trade (Regional)",
//         description: "We have established strong partnerships with regional chains of stores and are continually expanding our presence to cover upcoming stores in those regions.",
//         image: "https://i.ibb.co/0RZSk9f0/image.png"
//     },
//     {
//         title: "05. Cash & Carry",
//         description: "We have partnered with international and national companies in India's cash and carry retail sector to ensure comprehensive market coverage.",
//         image: "https://i.ibb.co/VWTpxqVK/image.png"
//     },
//     {
//         title: "06. E - Commerce",
//         description: "Elevate your brand's visibility and competitive edge on every popular e-commerce platform in India with a strategic approach and proven best practices",
//         image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//         title: "07. Quick Commerce",
//         description: "Maximize product exposure on India's fastest-growing quick commerce platforms. Boost visibility, accelerate sales, and reach a broader audience.",
//         image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//         title: "08. Airports",
//         description: "We have expanded our presence to include airport stores, allowing us to serve travelers with premium products on the go.",
//         image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },

//     {
//         title: "09. CPC Canteens",
//         description: "Ensuring Your Products are Available in the Preferred Choice of Public Servants and Amplifying Your Reach to a Diverse Consumer Base.",
//         image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     }
// ];

export function StickyScrollRevealDemo({ hide = true ,sendThisData }) {
    return (
        <div className="mt-5 mb-16 hide">
            {hide === true && (
                <>
                    <h2 className="text-2xl text-white md:text-4xl font-light mb-1 text-center">We place your products in </h2>
                    <h2 className="text-xl  text-white  md:text-2xl font-medium mb-8 text-center">Every Distribution Channel in India</h2>
                </>
            )}
            <div className="rounded-xl overflow-hidden border border-slate-800">
                {sendThisData ? (
                    <StickyScroll content={sendThisData} />

                ):(
                    <StickyScroll content={data} />
                )}
            </div>
        </div>
    );
}
