"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="relative w-full aspect-750/1334 md:aspect-1920/1080 flex flex-col items-center overflow-hidden">
      {/* Static Background Images (Fallback) */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: videoLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/pc-hero-bg-fallback.webp"
          alt=""
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src="/images/hero_mb-bg.webp"
          alt=""
          className="md:hidden w-full h-full object-cover"
        />
      </motion.div>

      {/* Background Videos - Only load the appropriate one */}
      {isClient && !isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-1920/1080 object-cover"
          src="/videos/pc-hero-vid.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoLoaded(true)}
          onError={(e) => console.error('PC video error:', e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {isClient && isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-640/1136 object-cover"
          src="/videos/mb-hero-vid.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoLoaded(true)}
          onError={(e) => console.error('Mobile video error:', e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* <div className="md:hidden relative w-full h-full flex flex-col items-center">
        <img src="/images/logo-game.webp" alt="" className="absolute top-[1%] left-[1%] w-[32.4%] object-contain" />
        <img src="/images/hero_mb-title.webp" alt="" className="z-10 mt-[20%] w-[86.53%] object-contain" />
        <img src="/images/hero_mb-sub-text.webp" alt="" className="-mt-[4%] w-[69.73%] object-contain" />
        <img src="/images/hero_mb-time.webp" alt="" className="absolute top-[19%] right-[10%] w-[11.2%] object-contain" />
      </div> */}
    </section>
  );
};

export default Hero;