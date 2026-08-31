import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Compass, MessageSquare, ExternalLink } from 'lucide-react';

/* ==========================================================================
   SECTION 9: LIVE LOCATION, HOURS & CONTACT HUB COMPONENT (HIGH CONTRAST)
   ========================================================================== */

const contactDetails = [
  {
    icon: MapPin,
    title: "LOCATION ADDRESS",
    detail: "Pepsicola Football Ground, Kathmandu, Nepal",
    subtext: "Adjacent to Football Ground Stadium",
    actionText: "Open in Google Maps",
    actionUrl: "https://maps.google.com/?q=Pepsicola+Football+Ground+Kathmandu",
  },
  {
    icon: Phone,
    title: "PHONE RESERVATIONS",
    detail: "+977 9861952505",
    subtext: "Call us directly for table bookings & inquiries",
    actionText: "Call Now",
    actionUrl: "tel:+9779861952505",
  },
  {
    icon: MessageSquare,
    title: "WHATSAPP DIRECT ORDER",
    detail: "+977 9705653513",
    subtext: "Instant takeaway & food delivery inquiries",
    actionText: "Chat on WhatsApp",
    actionUrl: "https://wa.me/9779705653513",
  },
  {
    icon: Mail,
    title: "EMAIL INQUIRY",
    detail: "info.bamboosekuwa@gmail.com",
    subtext: "Event bookings, parties & private catering",
    actionText: "Send Email",
    actionUrl: "mailto:info.bamboosekuwa@gmail.com",
  },
];

const LocationHub = () => {
  return (
    <section id="location" className="relative py-24 bg-[#06140D] text-white border-b border-[#C5A059]/20 overflow-hidden">
      
      {/* ATMOSPHERIC BACKGROUND LIGHTS */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#153E2B]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#0F241A] mb-4 shadow-[0_0_20px_rgba(21,62,43,0.6)]">
            <Compass size={16} className="text-[#E5C178]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C178] font-bold">Visit & Connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Location & Hours Hub
          </h2>
          <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed">
            Find us right beside Pepsicola Football Ground for authentic coal-grilled sekuwa and traditional delicacies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-4" />
        </div>

        {/* TOP GRID: CONTACT CARDS & HOURS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* CONTACT INFO MATRIX (2 COLUMNS) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-[#0F241A] border border-[#C5A059]/30 hover:border-[#E5C178] transition-all duration-300 flex flex-col justify-between group shadow-2xl"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#06140D] border border-[#C5A059]/50 flex items-center justify-center text-[#E5C178] mb-4 group-hover:scale-110 transition-transform shadow-md">
                      <IconComponent size={22} />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#E5C178] font-black block mb-2">
                      {item.title}
                    </span>
                    <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-[#E5C178] transition-colors leading-snug break-words">
                      {item.detail}
                    </h3>
                    <p className="text-sm text-gray-200 font-normal leading-relaxed mb-6">
                      {item.subtext}
                    </p>
                  </div>

                  <a
                    href={item.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#E5C178] hover:text-white transition-colors pt-2 border-t border-white/10"
                  >
                    <span>{item.actionText}</span>
                    <ExternalLink size={14} />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* OPENING HOURS CARD (UPDATED: 8:00 AM - 10:00 PM EVERYDAY) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-[#0F241A] border border-[#E5C178]/50 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-[#C5A059]/15 pointer-events-none">
              <Clock size={130} />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06140D] border border-[#E5C178]/40 text-[#E5C178] text-xs font-bold uppercase tracking-widest mb-6">
                <Clock size={14} />
                <span>Operating Hours</span>
              </div>

              <h3 className="text-2xl font-black uppercase text-white mb-6 tracking-wide">
                When We Serve
              </h3>

              <div className="space-y-6">
                <div className="pb-4 border-b border-white/10">
                  <span className="text-sm font-bold text-gray-200 uppercase tracking-wider block mb-1">
                    Open Everyday
                  </span>
                  <span className="text-2xl font-black text-[#E5C178] tracking-tight">
                    8:00 AM – 10:00 PM
                  </span>
                </div>

                <div className="pb-4">
                  <span className="text-xs font-semibold text-gray-300 block mb-1">
                    Sekuwa Grill & Kitchen
                  </span>
                  <span className="text-base font-bold text-white">
                    Serving Hot Coal Sekuwa All Day
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-sm text-emerald-400 font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                Open Today • Coal Grill Ready
              </span>
            </div>
          </motion.div>

        </div>

        {/* EMBEDDED MAP CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] h-[400px] w-full"
        >
          <iframe
            title="S Bamboo Cottage Location Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220.80054150524205!2d85.36509662243104!3d27.69233051936945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b6d6bae26fb%3A0x98594ba210782e9d!2sS%20Bamboo%20Cottage%20%26%20Sekuwa%20Corner%2C%20Pepsicola!5e0!3m2!1sen!2snp!4v1788187889126!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.8) invert(0.9) contrast(1.2)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-4 right-4 bg-[#06140D]/95 backdrop-blur-md border border-[#E5C178]/50 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-[#E5C178] shadow-lg">
            Pepsicola Football Ground, Kathmandu
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationHub;
