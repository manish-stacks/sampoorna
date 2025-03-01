"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";


export function SpotlightNewDemo() {
    return (
        <div className="h-[30rem] md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-gray-900/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold pb-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    360°  <br /> Degree Distribution Chassis
                </h1>

                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Get help in Building and Scaling your company in India.
                </p>
                <Link href={"/Contact-us"} className="text-center cursor-pointer flex items-center justify-center mt-5">
                    <button className="px-32 py-2 whitespace-nowrap rounded-md border cursor-pointer  border-neutral-600 text-black bg-white hover:bg-transparent hover:text-white transition duration-200">
                        Contact us
                    </button>
                </Link>
            </div>
        </div>
    );
}
