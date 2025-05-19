'use client';

import Image from "next/image";
import { unifraktur, caveat } from "@/lib/fonts";
import { motion, useScroll, useTransform, wrap, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from 'next/link';

// Add these helper functions at the top of the file
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Adjusted parallax ranges to be more subtle
  const bannerY = useTransform(scrollY, [0, 500], [0, -100]);
  const bannerOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const starryY = useTransform(scrollY, [0, 500], [0, -50]);

  // Move images declaration before its usage
  const images = [
    '/images/engagement1.jpg',
    '/images/engagement2.jpg',
    '/images/engagement3.jpg',
    '/images/engagement4.jpg',
    '/images/engagement5.jpg',
  ];

  // Add carousel state and logic
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Hero Section */}
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ 
            y: bannerY,
            scale: 1.1 // Add slight scale to prevent edges from showing
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/homepage-banner.jpg"
            alt="Wedding Banner"
            fill
            className="object-cover"
            priority
            style={{ 
              objectPosition: 'center 75%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </motion.div>
        
        <motion.div 
          style={{ opacity: bannerOpacity }}
          className="relative h-full flex flex-col items-center justify-center px-4"
        >
          <div className="text-center">
            <h1 className={`${unifraktur.className} text-5xl md:text-7xl mb-4 text-yellow-300`}>
              C.J. & Betsy
            </h1>
            <p className={`${caveat.className} text-2xl md:text-4xl mb-2 text-yellow-300`}>
              11.1.25
            </p>
            <p className="text-lg md:text-xl mb-8 text-yellow-300">
              ERA STUDIO • Downtown Los Angeles
            </p>
            <Link href="/details">
              <motion.button
                className="px-6 py-2 mt-4 text-sm text-yellow-300 border border-yellow-300 rounded-md \
                          hover:bg-yellow-300 hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Wedding Details
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
