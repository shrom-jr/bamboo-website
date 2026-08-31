import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Award, Heart, ShieldCheck, Sparkles, Quote } from 'lucide-react';

/* ==========================================================================
   SECTION 4: IMMERSIVE BRAND STORYTELLING COMPONENT (HIGH CONTRAST)
   Local Image: /story/ambience.jpg (Fallback: Unsplash Ambience)
   ========================================================================== */

const stats = [
  {
    icon: Flame,
    value: "100%",
    title: "COAL-FIRE ROASTING",
    subtext: "Traditional Smoked Technique",
  },
  {
    icon: Award,
    value: "100%",
    title: "SECRET SPICE BLEND",
    subtext: "Authentic Family Recipe",
  },
  {
    icon: ShieldCheck,
    value: "A+",
    title: "QUALITY STANDARD",
    subtext: "Fresh Daily Ingredients",
  },
  {
    icon: Heart,
    value: "Pepsicola",
    title: "LOCAL COMMUNITY",
    subtext: "Adjacent Football Ground",
  },
];

const BrandStory = () => {
  return (
    <section id="story" className="relative py-24 bg-[#06140D] text-white border-b border-[#C5A059]/20 overflow-hidden select-none">
      
      {/* ATMOSPHERIC BACKGROUND GLOWS */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#153E2B]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#0F241A] mb-4 shadow-[0_0_20px_rgba(21,62,43,0.6)]">
            <Sparkles size={16} className="text-[#E5C178]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C178] font-extrabold">Heritage & Tradition</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Our Flame Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto" />
        </div>

        {/* MAIN STORY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* LEFT: AMBIENCE IMAGE STAGE WITH LOCAL FALLBACK */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 shadow-2xl bg-[#040D08]">
              <img
                src="/story/ambience.jpg"
                alt="S Bamboo Cottage Ambience"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80";
                }}
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06140D] via-transparent to-transparent opacity-80" />

              {/* FLOATING FOUNDER BADGE */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0F241A]/95 backdrop-blur-md border border-[#E5C178]/50 shadow-2xl">
                <span className="text-xs uppercase tracking-widest text-[#E5C178] font-black block mb-1">
                  FOUNDER & VISIONARY
                </span>
                <h4 className="text-xl font-black text-white mb-1">
                  Sanjib Basnet
                </h4>
                <p className="text-xs text-gray-200 font-medium italic">
                  "Every skewer carries our dedication to authentic Himalayan flavor."
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: STORY CONTENT WITH HIGH CONTRAST */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#E5C178] tracking-wide leading-tight">
              Pepsicola Football Ground Destination
            </h3>

            <p className="text-gray-100 text-base md:text-lg font-medium leading-relaxed">
              Nestled right by the iconic Pepsicola Football Ground in Kathmandu, <strong className="text-white font-extrabold">S Bamboo Cottage & Sekuwa Corner</strong> was established with a singular focus: honoring the rich Nepalese heritage of slow coal-fire roasting inside a serene, natural bamboo atmosphere.
            </p>

            <p className="text-gray-200 text-sm md:text-base font-normal leading-relaxed">
              Our signature Sekuwa is marinated daily using locally sourced Himalayan spices, tenderized over gentle hardwood charcoal, and cooked to juicy perfection on traditional iron skewers. Whether you are gathering for late-night food, cold beverages, or authentic local snacks, every visit feels like home.
            </p>

            {/* QUOTE BOX */}
            <div className="p-6 rounded-2xl bg-[#0F241A] border-2 border-[#C5A059]/40 relative shadow-xl">
              <Quote size={28} className="text-[#E5C178] opacity-40 absolute top-4 right-4" />
              <p className="text-sm md:text-base font-semibold italic text-white leading-relaxed mb-3 pr-8">
                "We don't shortcut our process. From our Mutton Sekuwa to our signature platters, everything is grilled over real coal using recipes handed down through generations."
              </p>
              <span className="text-xs font-black uppercase tracking-widest text-[#E5C178] block">
                — SANJIB BASNET, FOUNDER
              </span>
            </div>
          </motion.div>

        </div>

        {/* STATS MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-[#0F241A] border border-[#C5A059]/40 text-center hover:border-[#E5C178] transition-all duration-300 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#06140D] border border-[#C5A059]/50 flex items-center justify-center text-[#E5C178] mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <IconComp size={22} />
                </div>
                <h4 className="text-3xl font-black text-white mb-1 group-hover:text-[#E5C178] transition-colors">
                  {stat.value}
                </h4>
                <span className="text-xs font-black uppercase tracking-wider text-[#E5C178] block mb-1">
                  {stat.title}
                </span>
                <p className="text-xs text-gray-200 font-medium">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BrandStory;