import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Flame, MessageSquare } from 'lucide-react';

/* ==========================================================================
   SECTION 3: ANIMATED MULTI-SLIDE HERO CAROUSEL COMPONENT
   ========================================================================== */

const slides = [
  {
    id: 1,
    title: "THE KING OF SEKUWA",
    subtitle: "Traditional Coal-Fire Roasting in Pepsicola",
    badge: "Authentic Smoked Delicacies",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "BAMBOO COTTAGE AMBIENCE",
    subtitle: "Elegance Meets Authentic Nepalese Hospitality",
    badge: "Pepsicola Football Ground",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "CHEF'S SIGNATURE SELECTION",
    subtitle: "Mutton Sekuwa, Choila & Sizzling Delights",
    badge: "Master Culinary Heritage",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#06140D]">
      {/* BACKGROUND SLIDE IMAGES WITH CROSS-FADE & ZOOM */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[current].image}')` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* CINEMATIC GREEN VIGNETTE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06140D] via-[#06140D]/70 to-[#040D08]/80" />
        </motion.div>
      </AnimatePresence>

      {/* HERO TEXT & CONTENT LAYER */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center max-w-4xl pt-16"
          >
            {/* BADGE / TAGLINE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#0F241A]/80 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(21,62,43,0.5)]"
            >
              <Flame size={14} className="text-[#C5A059] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                {slides[current].badge}
              </span>
            </motion.div>

            {/* MAIN DYNAMIC TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-none drop-shadow-2xl mb-4"
            >
              {slides[current].title}
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg sm:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mb-8"
            >
              {slides[current].subtitle}
            </motion.p>

            {/* CALL TO ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#menu"
                className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-black bg-gradient-to-r from-[#C5A059] to-[#E5C178] hover:shadow-[0_0_25px_rgba(197,160,89,0.7)] transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Explore Digital Menu
              </a>
              <a
                href="https://wa.me/9779705653513"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white border border-[#C5A059]/50 bg-[#0F241A]/60 backdrop-blur-md hover:bg-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <MessageSquare size={16} className="text-[#25D366]" />
                <span>WhatsApp Order</span>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CAROUSEL CONTROLS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#040D08]/60 border border-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059] backdrop-blur-md transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#040D08]/60 border border-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059] backdrop-blur-md transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* SLIDE INDICATORS (DOTS) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? 'w-10 h-2 bg-[#C5A059]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;