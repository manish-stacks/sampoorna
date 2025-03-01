import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Cover } from "@/components/ui/cover";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <div className="bg-clip-text uppercase text-transparent text-center bg-gradient-to-b  from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Sampoorn <Cover>Marketing</Cover>
            </div>
       
            <p className="max-w-xl mx-auto text-sm md:text-lg  text-neutral-400 text-center">
            Empowering brands with strategic distribution and marketing to maximize impact and growth across India's diverse markets.
            </p>
        </BackgroundLines>
    );
}
