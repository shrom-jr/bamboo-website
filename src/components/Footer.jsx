import React from 'react';
import { Flame, MapPin, Phone, Mail, ArrowUp, Clock, MessageSquare } from 'lucide-react';

/* ==========================================================================
   SECTION 10: LUXURY FOOTER & QUICK CONTACT BAR COMPONENT
   ========================================================================== */

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040D08] text-white border-t border-[#C5A059]/30 pt-16 pb-10 overflow-hidden select-none">
      
      {/* ATMOSPHERIC BACKGROUND AMBIENCE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#153E2B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP BRAND & NAVIGATION MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#0F241A] border border-[#C5A059]/50 flex items-center justify-center text-[#E5C178] shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                <Flame size={22} />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-widest text-white uppercase">S BAMBOO</h3>
                <p className="text-xs tracking-[0.25em] text-[#E5C178] font-bold uppercase">Cottage & Sekuwa</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Pepsicola’s destination for authentic hardwood coal-fire Sekuwa, traditional Newari delicacies, and natural bamboo dining ambience.
            </p>
            
            {/* SOCIAL LINKS (FACEBOOK, INSTAGRAM, TIKTOK) */}
            <div className="flex items-center gap-3">
              {/* FACEBOOK */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F241A] border border-[#C5A059]/40 flex items-center justify-center text-[#E5C178] hover:bg-[#C5A059] hover:text-[#06140D] transition-all duration-300 shadow-md"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F241A] border border-[#C5A059]/40 flex items-center justify-center text-[#E5C178] hover:bg-[#C5A059] hover:text-[#06140D] transition-all duration-300 shadow-md"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TIKTOK */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F241A] border border-[#C5A059]/40 flex items-center justify-center text-[#E5C178] hover:bg-[#C5A059] hover:text-[#06140D] transition-all duration-300 shadow-md"
                aria-label="TikTok Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.131 6.36 6.36 0 0 0 2.215 9.774 6.33 6.33 0 0 0 6.657-.864 6.34 6.34 0 0 0 2.128-4.713V8.847c1.378.981 3.037 1.554 4.827 1.554v-3.7a4.81 4.81 0 0 1-1.202-.015z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK NAVIGATION */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-[#E5C178] mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-200">
              <li><a href="#story" className="hover:text-[#E5C178] transition-colors flex items-center gap-2"><span className="text-[#C5A059]">›</span> Our Story</a></li>
              <li><a href="#signature" className="hover:text-[#E5C178] transition-colors flex items-center gap-2"><span className="text-[#C5A059]">›</span> Signature Dishes</a></li>
              <li><a href="#chefs" className="hover:text-[#E5C178] transition-colors flex items-center gap-2"><span className="text-[#C5A059]">›</span> Master Chefs</a></li>
              <li><a href="#menu" className="hover:text-[#E5C178] transition-colors flex items-center gap-2"><span className="text-[#C5A059]">›</span> 3D Digital Menu</a></li>
              <li><a href="#gallery" className="hover:text-[#E5C178] transition-colors flex items-center gap-2"><span className="text-[#C5A059]">›</span> Visual Gallery</a></li>
              <li><a href="#location" className="hover:text-[#E5C178] transition-colors flex items-center gap-2"><span className="text-[#C5A059]">›</span> Location & Hours</a></li>
            </ul>
          </div>

          {/* OPERATING HOURS COLUMN (UPDATED TO 8 AM - 10 PM EVERYDAY) */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-[#E5C178] mb-4 flex items-center gap-2">
              <Clock size={16} className="text-[#E5C178]" />
              Opening Hours
            </h4>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="p-4 rounded-xl bg-[#0F241A] border border-white/10 shadow-inner">
                <span className="text-xs font-bold text-[#E5C178] uppercase tracking-wider block mb-1">Open Everyday</span>
                <span className="text-base font-extrabold text-white">8:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* DIRECT CONTACT INFO */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-[#E5C178] mb-4">Contact Info</h4>
            <div className="space-y-3.5 text-sm font-medium text-gray-200">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E5C178] shrink-0 mt-0.5" />
                <span className="text-gray-200 leading-snug">Pepsicola Football Ground, Kathmandu, Nepal</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#E5C178] shrink-0" />
                <a href="tel:+9779861952505" className="hover:text-[#E5C178] text-gray-100 font-semibold transition-colors">
                  +977 9861952505
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare size={18} className="text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/9779705653513" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-gray-100 font-semibold transition-colors flex items-center gap-1.5"
                >
                  +977 9705653513
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold uppercase">WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#E5C178] shrink-0" />
                <a href="mailto:info.bamboosekuwa@gmail.com" className="hover:text-[#E5C178] text-gray-200 transition-colors break-all">
                  info.bamboosekuwa@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL & DEVELOPER CREDIT BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* COPYRIGHT */}
          <p className="text-gray-300 font-medium text-center md:text-left">
            © {new Date().getFullYear()} S Bamboo Cottage & Sekuwa Corner. All Rights Reserved.
          </p>

          {/* MANDATORY DEVELOPER CREDIT */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0F241A] border border-[#C5A059]/40 shadow-[0_0_15px_rgba(197,160,89,0.15)] text-gray-200 font-medium">
            <span>Designed and Developed by</span>
            <span className="font-extrabold text-[#E5C178] tracking-wider uppercase text-xs hover:text-white transition-colors cursor-pointer">
              Shramik Rawal
            </span>
          </div>

          {/* BACK TO TOP BUTTON */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F241A] border border-[#C5A059]/50 text-[#E5C178] hover:bg-[#C5A059] hover:text-[#06140D] font-bold tracking-wider text-xs uppercase transition-all duration-300 shadow-lg active:scale-95"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;