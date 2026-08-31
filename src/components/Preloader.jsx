import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ==========================================================================
   SECTION 1: DYNAMIC PRE-LOADER COMPONENT
   Editable texts: Brand title, tagline, and loading messages below.
   ========================================================================== */

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulates initial asset loading from 0 to 100%
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500); // Small pause at 100% before fade out
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] text-white select-none pointer-events-auto"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      >
        {/* Glowing Background Glow */}
        <div className="absolute w-72 h-72 rounded-full bg-[#C5A059] opacity-10 blur-3xl animate-pulse" />

        {/* Central Brand Branding & Loader Visual */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          
          {/* Animated Gold Ring Logo Frame */}
          <motion.div
            className="w-24 h-24 mb-6 rounded-full border-2 border-t-[#C5A059] border-r-transparent border-b-[#C5A059] border-l-transparent flex items-center justify-center shadow-[0_0_25px_rgba(197,160,89,0.3)]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <div className="w-16 h-16 rounded-full bg-[#121212] flex items-center justify-center border border-[#C5A059]/30">
              <span className="text-[#C5A059] font-bold text-2xl tracking-widest">S</span>
            </div>
          </motion.div>

          {/* Luxury Typography */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase text-white mb-1">
            S BAMBOO COTTAGE
          </h1>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#C5A059] mb-8 font-medium">
            & Sekuwa Corner • Pepsicola
          </p>

          {/* Progress Bar Container */}
          <div className="w-64 h-1 bg-[#121212] rounded-full overflow-hidden mb-4 border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C5A059] via-[#E5C178] to-[#C5A059]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Percentage Counter */}
          <span className="text-xs font-mono tracking-widest text-gray-400">
            CRAFTING EXPERIENCE... {progress}%
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;