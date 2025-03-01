"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Partner data with Indian brands
const PARTNERS = [
    {
        id: 1,
        name: "Himalaya",
        category: "Health & Wellness",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
        logo: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
        color: "from-green-500/20 to-emerald-600/20"
    },
    {
        id: 2,
        name: "Dabur",
        category: "Ayurvedic Products",
        image: "https://i.ibb.co/MyqFW63Q/image.png",
        logo: "https://i.ibb.co/MyqFW63Q/image.png",
        color: "from-red-500/20 to-orange-600/20"
    },
    {
        id: 3,
        name: "Amul",
        category: "Food & Dairy",
        image: "https://i.ibb.co/3ypDNKwg/image.png",
        logo: "https://i.ibb.co/3ypDNKwg/image.png",
        color: "from-yellow-500/20 to-amber-600/20"
    },
    {
        id: 4,
        name: "Tata",
        category: "Conglomerate",
        image: "https://i.ibb.co/G4zhMZj9/image.png",
        logo: "https://i.ibb.co/G4zhMZj9/image.png",
        color: "from-blue-500/20 to-indigo-600/20"
    },
    {
        id: 5,
        name: "Reliance",
        category: "Retail & Telecom",
        image: "https://i.ibb.co/NG9SDbS/image.png",
        logo: "https://i.ibb.co/NG9SDbS/image.png",
        color: "from-purple-500/20 to-violet-600/20"
    },
    {
        id: 6,
        name: "Parle",
        category: "Food & Beverages",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
        logo: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
        color: "from-amber-500/20 to-yellow-600/20"
    },
    {
        id: 7,
        name: "Marico",
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e",
        logo: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e",
        color: "from-teal-500/20 to-cyan-600/20"
    },
    {
        id: 8,
        name: "Godrej",
        category: "Consumer Goods",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
        logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
        color: "from-pink-500/20 to-rose-600/20"
    },
    {
        id: 9,
        name: "ITC",
        category: "FMCG",
        image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
        logo: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
        color: "from-cyan-500/20 to-blue-600/20"
    }
];

const Partners = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <div
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        >
            {/* Background with parallax effect */}
            <motion.div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')] bg-fixed bg-cover opacity-5"
                style={{ y: backgroundY }}
            />

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-950 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-medium">
                            Trusted Partnerships
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-orange-500">
                        Our Brand Partners
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Collaborating with India's most trusted brands to deliver excellence across the nation.
                    </p>
                </motion.div>

                {/* Partner grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PARTNERS.map((partner) => (
                        <motion.div
                            key={partner.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className={`relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${partner.color} backdrop-blur-sm border border-white/10 group`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10"></div>

                            {/* Partner image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content overlay */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                                {/* Category tag */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="mb-2"
                                >
                                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm text-white">
                                        {partner.category}
                                    </span>
                                </motion.div>

                                {/* Partner name */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="text-2xl font-bold text-white mb-2"
                                >
                                    {partner.name}
                                </motion.h3>

                                {/* Animated line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "40%" }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="h-1 bg-gradient-to-r from-orange-800 to-orange-500 rounded-full mb-4"
                                />

                                {/* View details button */}
                                {/* <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 text-sm font-medium text-white/80 hover:text-white flex items-center group-hover:underline"
                >
                  View Partnership
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button> */}
                            </div>

                            {/* Hover effect overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-purple-900/20 z-0"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Partnership stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center">
                        <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
                        <div className="text-gray-300">Brand Partners</div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center">
                        <div className="text-4xl font-bold text-purple-400 mb-2">12+</div>
                        <div className="text-gray-300">Years of Trust</div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center">
                        <div className="text-4xl font-bold text-indigo-400 mb-2">₹500Cr+</div>
                        <div className="text-gray-300">Annual Business</div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center">
                        <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                        <div className="text-gray-300">Retention Rate</div>
                    </div>
                </motion.div>

                {/* CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Become Our Partner</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Join our network of trusted brands and leverage our nationwide distribution capabilities to grow your business.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-green-600 text-white font-medium"
                    >
                        Partner With Us
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Partners;