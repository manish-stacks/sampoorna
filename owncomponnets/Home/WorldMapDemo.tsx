"use client";
import { Cover } from "@/components/ui/cover";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
    return (
        <div className=" py-10 dark:bg-black bg-gray-900 w-full">
          <div className="py-5 px-4 md:px-6 lg:px-8 bg-gray-900 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="font-bold text-2xl md:text-4xl dark:text-white text-black mb-4 md:mb-6">
          <Cover>Our Distribution in all Over India</Cover>
          <span className="text-neutral-400 ml-2 md:ml-4">
          Connectivity
          </span>
        </div>
        <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto py-4">
          Our nationwide distribution network ensures seamless, timely delivery
          across India through strategic hubs and strong logistics.
        </p>
      </div>
    </div>
            <WorldMap
                dots={[
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                        }, // Alaska (Fairbanks)
                        end: {
                            lat: 34.0522,
                            lng: -118.2437,
                        }, // Los Angeles
                    },
                    {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                ]}
            />
        </div>
    );
}
