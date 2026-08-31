import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Maximize2, X, Sparkles } from 'lucide-react';

/* ==========================================================================
   SECTION 8: IMMERSIVE CINEMATIC GALLERY MATRIX COMPONENT
   Features: Category filter tabs, responsive image grid, hover zoom effects,
   and full-screen lightbox modal viewer.
   ========================================================================== */

const galleryCategories = ['All', 'Ambience', 'Coal Grill', 'Bar & Drinks', 'Events'];

const galleryItems = [
  {
    id: 1,
    title: "Bamboo Cottage Main Dining",
    category: "Ambience",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Signature Mutton Sekuwa Sizzle",
    category: "Coal Grill",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Craft Cocktails & Spirits",
    category: "Bar & Drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Evening Live Music & Vibe",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Hardwood Charcoal Roasting Station",
    category: "Coal Grill",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 6,
    title: "Outdoor Cottage Garden Seating",
    category: "Ambience",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="relative py-24 bg-[#06140D] text-white border-b border-[#C5A059]/10 overflow-hidden">
      
      {/* ATMOSPHERIC BACKGROUND GLOWS */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#153E2B]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/30 bg-[#0F241A] mb-4 shadow-[0_0_15px_rgba(21,62,43,0.5)]">
            <ImageIcon size={14} className="text-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">Visual Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Atmospheric Gallery Matrix
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Take a visual tour of our natural bamboo ambience, coal-grill artistry, and evening gatherings.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-4" />
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#E5C178] text-[#06140D] shadow-[0_0_20px_rgba(197,160,89,0.4)] scale-105'
                  : 'bg-[#0F241A] border border-white/10 text-gray-300 hover:border-[#C5A059]/50 hover:text-[#C5A059]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* MASONRY GRID MATRIX */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-2xl overflow-hidden border border-[#153E2B] hover:border-[#C5A059]/60 cursor-pointer shadow-2xl ${item.span}`}
              >
                {/* BACKGROUND IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06140D] via-[#06140D]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* CARD CONTENT */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-[#06140D]/80 backdrop-blur-md border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Maximize2 size={16} />
                    </div>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#C5A059] font-bold bg-[#0F241A]/90 px-3 py-1 rounded-full border border-[#C5A059]/30 mb-2">
                      <Sparkles size={10} />
                      {item.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
          >
            {/* MODAL HEADER */}
            <div className="flex justify-between items-center z-10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                {selectedImage.category} • {selectedImage.title}
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-3 rounded-full bg-[#0F241A] border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#06140D] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* MODAL IMAGE DISPLAY */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-2xl border border-[#C5A059]/30 shadow-2xl"
              />
            </div>

            {/* MODAL CAPTION */}
            <div className="text-center z-10">
              <p className="text-sm font-semibold text-white tracking-wide">{selectedImage.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;