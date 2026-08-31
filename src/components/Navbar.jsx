import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Flame } from 'lucide-react';

/* ==========================================================================
   SECTION 2: STICKY LUXURY NAVIGATION BAR COMPONENT
   ========================================================================== */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Signature Dishes', href: '#signatures' },
    { name: 'Chefs', href: '#chefs' },
    { name: 'Flipbook Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#06140D]/90 backdrop-blur-md border-b border-[#C5A059]/30 py-3 shadow-[0_10px_30px_rgba(4,13,8,0.9)]'
            : 'bg-gradient-to-b from-[#040D08]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* BRANDING & VECTOR LOGO BADGE */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0F241A] border border-[#C5A059]/40 flex items-center justify-center overflow-hidden group-hover:border-[#C5A059] transition-colors shadow-[0_0_12px_rgba(197,160,89,0.25)]">
              <Flame size={20} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg tracking-wider group-hover:text-[#C5A059] transition-colors">
                S BAMBOO
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase -mt-1 font-medium">
                Cottage & Sekuwa Corner
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#C5A059] transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CALL NOW DIRECT CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+9779861952505"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#C5A059] to-[#E5C178] hover:shadow-[0_0_20px_rgba(197,160,89,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={14} className="animate-bounce" />
              <span>Call Now</span>
            </a>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} className="text-[#C5A059]" /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#06140D]/95 backdrop-blur-xl flex flex-col justify-center items-center px-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl uppercase tracking-widest text-white hover:text-[#C5A059] transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}

              <div className="w-16 h-[1px] bg-[#C5A059]/30 my-4" />

              <a
                href="tel:+9779861952505"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#C5A059] to-[#E5C178]"
              >
                <Phone size={16} />
                <span>Call +977 9861952505</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
