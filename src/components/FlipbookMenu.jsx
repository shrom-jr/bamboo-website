import React, { useEffect, useRef, useState } from 'react';
import { PageFlip } from 'page-flip';
import { BookOpen } from 'lucide-react';

/* ==========================================================================
   SECTION 7: ST.PAGEFLIP 3D ENGINE (OPTIMIZED BALANCED PROPORTIONS)
   Single Page: 440px x 620px | Double Spread: 880px x 620px
   ========================================================================== */

const TOTAL_PAGES = 15;

const FlipbookMenu = () => {
  const containerRef = useRef(null);
  const pageFlipRef = useRef(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      if (!containerRef.current) return;

      try {
        if (pageFlipRef.current) {
          pageFlipRef.current.destroy();
        }

        // Initialize St.PageFlip with balanced dimensions
        const pageFlip = new PageFlip(containerRef.current, {
          width: 440,         // Single page width (880px total spread)
          height: 620,        // Single page height
          size: 'fixed',      // Locks 1:1 pixel rendering
          maxShadowOpacity: 0.5,
          showCover: true,    // Page 1 = Front cover, Page 15 = Back cover
          usePortrait: false, // Forces 2-page spread
          mobileScrollSupport: false,
        });

        const pages = containerRef.current.querySelectorAll('.page');
        if (pages.length > 0) {
          pageFlip.loadFromHTML(pages);
          pageFlipRef.current = pageFlip;
          setIsLoaded(true);

          pageFlip.on('flip', (e) => {
            setCurrentPageIndex(e.data);
          });
        }
      } catch (error) {
        console.error("Flipbook initialization error:", error);
      }
    }, 150);

    return () => {
      clearTimeout(initTimer);
      if (pageFlipRef.current) {
        try { pageFlipRef.current.destroy(); } catch (e) {}
      }
    };
  }, []);

  // Handle Loop Back to Cover on Click
  const handleStageClick = (e) => {
    if (!pageFlipRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    // Loop to Cover (0) if on last spread and clicking right side
    if (currentPageIndex >= TOTAL_PAGES - 2 && clickX > rect.width / 2) {
      pageFlipRef.current.flip(0);
    }
    // Loop to Last Spread if on Cover and clicking left side
    else if (currentPageIndex === 0 && clickX < rect.width / 2) {
      pageFlipRef.current.flip(TOTAL_PAGES - 2);
    }
  };

  // Dynamic horizontal offset calculation based on 440px single-page width:
  // - Page 1 (index 0): -220px shift to center single cover
  // - Page 15 (index 14): +220px shift to center single back cover
  // - Spreads (indices 1-13): 0px shift to center full 880px spread
  let alignmentShift = "translate-x-0";
  if (currentPageIndex === 0) {
    alignmentShift = "-translate-x-[220px]";
  } else if (currentPageIndex >= TOTAL_PAGES - 1) {
    alignmentShift = "translate-x-[220px]";
  }

  return (
    <section id="menu" className="relative py-8 bg-[#06140D] text-white overflow-hidden select-none">
      
      {/* ATMOSPHERIC BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#153E2B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* COMPACT SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-[#0F241A] mb-2 shadow-[0_0_15px_rgba(21,62,43,0.5)]">
            <BookOpen size={13} className="text-[#C5A059]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold">Interactive Catalogue</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-1">
            3D Digital Menu
          </h2>
          <p className="text-gray-300 text-xs tracking-wide">
            Click or drag page corners with your mouse to flip through our menu.
          </p>
        </div>

        {/* CANVAS CONTAINER STAGE */}
        <div className="relative w-full flex justify-center items-center my-2 min-h-[620px]">
          
          {/* SMOOTH TRANSFORM SLIDE WRAPPER FOR DEAD-CENTER COVER ALIGNMENT */}
          <div className={`transition-transform duration-500 ease-in-out ${alignmentShift}`}>
            <div 
              ref={containerRef} 
              onClick={handleStageClick}
              className="menu-flipbook relative drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] cursor-grab active:cursor-grabbing"
              style={{ display: isLoaded ? 'block' : 'none' }}
            >
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((pageNum) => (
                <div 
                  key={pageNum} 
                  className="page bg-[#06140D]"
                  style={{ width: '440px', height: '620px' }}
                >
                  <img
                    src={`/menu/${pageNum}.jpg`}
                    alt={`Menu Page ${pageNum}`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {!isLoaded && (
            <div className="w-[880px] h-[620px] flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

        </div>

        {/* COMPACT PAGE COUNTER BADGE */}
        <div className="mt-3 px-6 py-1.5 rounded-full bg-[#040D08] border border-[#C5A059]/30 text-xs font-mono tracking-widest text-gray-200 shadow-xl">
          PAGE <strong className="text-[#C5A059] font-bold text-sm">{currentPageIndex + 1}</strong> OF {TOTAL_PAGES}
        </div>

      </div>
    </section>
  );
};

export default FlipbookMenu;