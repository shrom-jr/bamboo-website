import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Award, ShieldCheck, ChefHat } from 'lucide-react';

/* ==========================================================================
   SECTION 6: MASTER CULINARY ARTISANS (OUR CHEFS) COMPONENT
   Features: Automated local asset binding (/chefs/chefX.jpg) with default fallback.
   ========================================================================== */

const chefs = [
  {
    id: 1,
    name: "Master Govinda",
    role: "Executive Chef",
    experience: "10+ Years Experience",
    specialty: "Local, Continental & Grill",
    quote: "Perfect Sekuwa is an art of patience—balancing raw hardwood smoke with tenderized Himalayan spices.",
    localImage: "/chefs/chef1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    badge: "Master Chef",
  },
  {
    id: 2,
    name: "Chef Maya Tamang",
    role: "Head Newari Heritage Artisan",
    experience: "14+ Years Experience",
    specialty: "Authentic Chhoila & Newari Platter Creations",
    quote: "Preserving traditional Newari spice profiles ensures every bite carries centuries of authentic Himalayan culture.",
    localImage: "/chefs/chef2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage Expert",
  },
  {
    id: 3,
    name: "Chef Bikram Thapa",
    role: "Pan-Asian & Sizzler Maestro",
    experience: "12+ Years Experience",
    specialty: "Jhaneko Sekuwa & House Specialty Platters",
    quote: "Fresh mustard oil tempering gives our sizzling Sekuwa platters their iconic Kathmandu flavor aroma.",
    localImage: "/chefs/chef3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=800&q=80",
    badge: "Flavor Innovator",
  },
];

const Chefs = () => {
  return (
    <section id="chefs" className="relative py-24 bg-[#06140D] text-white border-b border-[#C5A059]/20 overflow-hidden select-none">
      
      {/* ATMOSPHERIC BACKGROUND GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#153E2B]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#0F241A] mb-4 shadow-[0_0_20px_rgba(21,62,43,0.6)]">
            <ChefHat size={16} className="text-[#E5C178]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C178] font-extrabold">Master Artisans</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Guardians of Coal & Flame
          </h2>
          <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed">
            Meet the culinary masters crafting Pepsicola’s most celebrated Sekuwa and authentic delicacies daily.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-4" />
        </div>

        {/* CHEFS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative rounded-2xl bg-[#0F241A] border-2 border-[#C5A059]/40 hover:border-[#E5C178] transition-all duration-300 overflow-hidden group shadow-2xl flex flex-col justify-between"
            >
              {/* PORTRAIT IMAGE CONTAINER */}
              <div className="relative h-80 w-full overflow-hidden bg-[#040D08]">
                <img
                  src={chef.localImage}
                  alt={chef.name}
                  onError={(e) => {
                    // Fallback to default image if local file does not exist in public/chefs/
                    e.target.onerror = null;
                    e.target.src = chef.fallbackImage;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F241A] via-[#0F241A]/20 to-transparent" />

                {/* BADGE */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06140D]/90 backdrop-blur-md border border-[#E5C178]/50 text-[#E5C178] text-[11px] font-black uppercase tracking-widest shadow-md">
                  <Award size={12} />
                  <span>{chef.badge}</span>
                </div>
              </div>

              {/* CARD DETAILS WITH HIGH CONTRAST */}
              <div className="p-6 flex-1 flex flex-col justify-between relative -mt-6 z-10">
                <div>
                  {/* EXPERIENCE BADGE */}
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E5C178] block mb-1">
                    {chef.experience}
                  </span>

                  {/* CHEF NAME */}
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-[#E5C178] transition-colors leading-tight">
                    {chef.name}
                  </h3>

                  {/* CHEF ROLE */}
                  <p className="text-sm font-bold text-emerald-300 mb-4">
                    {chef.role}
                  </p>

                  {/* SPECIALTY MASTERY PANEL */}
                  <div className="p-3.5 rounded-xl bg-[#040D08] border border-[#C5A059]/40 mb-4 shadow-inner">
                    <span className="text-[11px] uppercase tracking-wider text-[#E5C178] font-black block mb-1">
                      Specialty Mastery
                    </span>
                    <p className="text-sm text-white font-bold leading-snug">
                      {chef.specialty}
                    </p>
                  </div>

                  {/* QUOTE */}
                  <p className="text-xs font-medium italic text-gray-200 leading-relaxed border-l-2 border-[#E5C178] pl-3 py-1">
                    "{chef.quote}"
                  </p>
                </div>

                {/* TRUST FOOTER */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gray-200">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#E5C178]" />
                    <span>Verified Artisan</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame size={16} className="text-[#E5C178]" />
                    <span>Pepsicola Kitchen</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Chefs;
