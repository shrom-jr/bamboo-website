import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, MessageSquare } from 'lucide-react';

/* ==========================================================================
   SECTION 5: CHEF'S SIGNATURE REVELATION LOUNGE (HIGH CONTRAST)
   Local Images: /dishes/dish1.jpg, /dishes/dish2.jpg, /dishes/dish3.jpg
   ========================================================================== */

const signatureDishes = [
  {
    id: 1,
    title: "Mutton Sekuwa",
    category: "THE KING OF CHARCOAL GRILL",
    price: "Rs. 600",
    portion: "200 GRAMS",
    description: "Tender mountain mutton marinated in signature Himalayan spices and slow-cooked over coal flame.",
    tag: "BESTSELLER",
    localImage: "/dishes/dish1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Special Bamboo Platter",
    category: "SIGNATURE FEAST",
    price: "Rs. 450 / 700",
    portion: "SMALL / LARGE",
    description: "An extraordinary combination of authentic house delicacies served with traditional sides.",
    tag: "CHEF'S PICK",
    localImage: "/dishes/dish2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Jhaneko Sekuwa (Mutton)",
    category: "SIZZLING TEMPERED FLAME",
    price: "Rs. 650",
    portion: "PER PLATE",
    description: "Hot, spiced mutton sekuwa tempered with aromatic herbs and fresh mustard oil.",
    tag: "MUST TRY",
    localImage: "/dishes/dish3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
  },
];

const SignatureDishes = () => {
  return (
    <section id="signature" className="relative py-24 bg-[#06140D] text-white border-b border-[#C5A059]/20 overflow-hidden select-none">
      
      {/* ATMOSPHERIC BACKGROUND LIGHTS */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#153E2B]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#0F241A] mb-4 shadow-[0_0_20px_rgba(21,62,43,0.6)]">
            <Flame size={16} className="text-[#E5C178]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C178] font-extrabold">Charcoal Delicacies</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Chef’s Signature Revelation
          </h2>
          <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed">
            Handpicked signature dishes grilled fresh daily over traditional coal fires.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-4" />
        </div>

        {/* DISH CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="rounded-2xl bg-[#0F241A] border-2 border-[#C5A059]/40 hover:border-[#E5C178] transition-all duration-300 overflow-hidden group shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* DISH IMAGE CONTAINER WITH LOCAL FALLBACK */}
                <div className="relative h-64 w-full overflow-hidden bg-[#040D08]">
                  <img
                    src={dish.localImage}
                    alt={dish.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = dish.fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F241A] via-transparent to-transparent opacity-80" />

                  {/* TOP TAG BADGE */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06140D]/90 backdrop-blur-md border border-[#E5C178]/60 text-[#E5C178] text-[11px] font-black uppercase tracking-widest shadow-md">
                    <Star size={12} className="fill-[#E5C178]" />
                    <span>{dish.tag}</span>
                  </div>

                  {/* PRICE BADGE */}
                  <div className="absolute bottom-4 right-4 text-right px-4 py-2 rounded-xl bg-[#06140D]/95 backdrop-blur-md border border-[#E5C178]/50 shadow-lg">
                    <span className="text-lg font-black text-[#E5C178] block leading-none">
                      {dish.price}
                    </span>
                    <span className="text-[10px] font-bold text-gray-200 uppercase tracking-wider">
                      {dish.portion}
                    </span>
                  </div>
                </div>

                {/* CARD DETAILS */}
                <div className="p-6">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E5C178] block mb-2">
                    {dish.category}
                  </span>
                  
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#E5C178] transition-colors leading-tight">
                    {dish.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-200 leading-relaxed mb-6">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* WHATSAPP DIRECT ORDER BUTTON */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="https://wa.me/9779705653513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-emerald-500/50 bg-[#06140D] hover:bg-emerald-500 hover:text-black text-emerald-400 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>ORDER VIA WHATSAPP</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureDishes;