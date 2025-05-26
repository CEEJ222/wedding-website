'use client';

import { pinyon, caveat, spectral, instrumentSans } from "@/lib/fonts";
import { motion, useScroll, useTransform, wrap } from "framer-motion";
import { useRef, useState } from "react";
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
    <div
      className="relative min-h-screen"
      style={{
        background: "linear-gradient(180deg, #E9BC4E 0%, #C5AC9B 20%, #CDA7BE 40%, #DD869F 60%, #F37970 80%, #FF7CB8 100%)"
      }}
    >
      {/* Hero Section */}
      <div ref={containerRef} className="relative h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center pt-20">
          <h1 className={`${pinyon.className} text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] mb-4 pb-16 text-black leading-none`}>
            C.J. Britz & Betsy Bowman
          </h1>
          <p className={`${caveat.className} text-2xl md:text-4xl mb-2 text-black`}>
            11.1.25
          </p>
          <p className={`${spectral.className} text-lg md:text-xl mb-8 text-black`}>
            ERA STUDIO • Downtown Los Angeles
          </p>
          <div className="flex flex-row justify-center gap-2">
            <Link href="/details">
              <motion.button
                className={`${spectral.className} px-6 py-2 mt-4 text-sm text-black border border-black rounded-md bg-yellow-300 hover:bg-yellow-200 hover:border-black hover:text-black transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                DETAILS
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
