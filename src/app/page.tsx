'use client';

import Image from "next/image";
import { unifraktur, caveat } from "@/lib/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Banner Image */}
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <Image
            src="/images/homepage-banner.jpg"
            alt="Wedding Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        
        {/* Content */}
        <motion.div 
          style={{ opacity }}
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
          </div>
        </motion.div>
      </div>

      {/* Welcome Message */}
      <section className="py-16 px-4 bg-white text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">We're Getting Married!</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Welcome to our wedding website! We're getting married and couldn't be more excited 
              to celebrate with the people who mean the most to us. This site has everything 
              you need to know—details about the weekend, travel info, and a few personal 
              touches along the way.
            </p>
            <p>
              Thanks for being a part of our lives. We can't wait to see you soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
