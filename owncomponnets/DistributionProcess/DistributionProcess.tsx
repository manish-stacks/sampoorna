"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";

export const DISTRIBUTION_PROCESS = [
  {
    id: 1,
    title: "Sales Team",
    description:
      "Our dedicated team of 400+ sales professionals ensures widespread product placement across India's diverse markets, driving brand growth and customer engagement.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    icon: "👥"
  },
  {
    id: 2,
    title: "Product Visibility",
    description:
      "We strategically position SKUs within stores, maximizing visibility and aligning with consumer purchasing behavior to enhance brand impact.",
    image: "https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "👁️"
  },
  {
    id: 3,
    title: "Logistics",
    description:
      "A robust fleet of 500+ delivery executives ensures fast, reliable, and nationwide distribution, guaranteeing on-time product deliveries.",
    image: "https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🚚"
  },
  {
    id: 4,
    title: "Warehouse",
    description:
      "Our network of 44 branches and four expansive warehouses spanning 30 acres enables seamless inventory management and efficient storage solutions.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🏭"
  },
  {
    id: 5,
    title: "Packaging Material",
    description:
      "High-quality packaging materials ensure product safety during transit, maintaining integrity and delivering goods in pristine condition.",
    image: "https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "📦"
  },
  {
    id: 6,
    title: "Live Order Tracking",
    description:
      "Our PDA-enabled tracking system provides real-time updates on order status, enhancing efficiency in processing, invoicing, and last-mile delivery.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    icon: "📱"
  },
  {
    id: 7,
    title: "Daily Critical Report",
    description:
      "We analyze essential business metrics across 145,000+ stores, tracking sales, deliveries, store feedback, and damage reports for informed decision-making.",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6",
    icon: "📊"
  },
  {
    id: 8,
    title: "Financial Management",
    description:
      "Our financial experts streamline invoicing, manage vendor policies, and optimize transactions to strengthen business profitability and stability.",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "💰"
  },
];

const DistributionProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DISTRIBUTION_PROCESS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-fixed bg-cover opacity-5"
        style={{ y: backgroundY }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Distribution Excellence
          </h2>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-20">
            Our end-to-end distribution network powers businesses across India with precision, 
            reliability, and innovation at every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Showcase */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="relative h-[500px] hidden md:block rounded-2xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={DISTRIBUTION_PROCESS[activeIndex].image}
                  alt={DISTRIBUTION_PROCESS[activeIndex].title}
                  fill
                  className="object-cover"
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-8"
                >
                  <div className="flex items-center mb-4">
                    <motion.span 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                      className="text-5xl mr-4"
                    >
                      {DISTRIBUTION_PROCESS[activeIndex].icon}
                    </motion.span>
                    <h3 className="text-3xl font-bold text-white">{DISTRIBUTION_PROCESS[activeIndex].title}</h3>
                  </div>
                  <p className="text-gray-200 text-lg">{DISTRIBUTION_PROCESS[activeIndex].description}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
              {DISTRIBUTION_PROCESS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-white' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`View ${DISTRIBUTION_PROCESS[index].title}`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Process Flow */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative"
          >
            {DISTRIBUTION_PROCESS.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className={`mb-8 pl-12 relative cursor-pointer group`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 5 }}
              >
                {/* Connecting line */}
                {index < DISTRIBUTION_PROCESS.length - 1 && (
                  <motion.div 
                    className="absolute left-4 top-10 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 z-0"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + (index * 0.1),
                      ease: "easeOut"
                    }}
                  />
                )}
                
                {/* Step number */}
                <motion.div 
                  className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold z-10 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                      : 'bg-gray-700 group-hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  animate={activeIndex === index ? 
                    { 
                      scale: [1, 1.2, 1.1],
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                    } : 
                    { 
                      scale: 1,
                      boxShadow: "0 0 0px rgba(59, 130, 246, 0)"
                    }
                  }
                  transition={{ duration: 0.4 }}
                >
                  {index + 1}
                </motion.div>
                
                <motion.h4 
                  className={`text-xl font-semibold mb-1 ${
                    activeIndex === index ? 'text-blue-400' : 'text-white'
                  }`}
                  animate={activeIndex === index ? 
                    { color: "rgb(96, 165, 250)" } : 
                    { color: "rgb(255, 255, 255)" }
                  }
                >
                  {item.title}
                </motion.h4>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 overflow-hidden"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          <motion.div 
            variants={statCardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold text-blue-400 mb-2"
            >
              400+
            </motion.div>
            <div className="text-gray-300">Sales Professionals</div>
          </motion.div>
          
          <motion.div 
            variants={statCardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)" }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold text-purple-400 mb-2"
            >
              44
            </motion.div>
            <div className="text-gray-300">Branch Locations</div>
          </motion.div>
          
          <motion.div 
            variants={statCardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl font-bold text-blue-400 mb-2"
            >
              500+
            </motion.div>
            <div className="text-gray-300">Delivery Fleet</div>
          </motion.div>
          
          <motion.div 
            variants={statCardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)" }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl font-bold text-purple-400 mb-2"
            >
              145K+
            </motion.div>
            <div className="text-gray-300">Stores Served</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DistributionProcess;