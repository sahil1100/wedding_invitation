import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Copy, Check, Sparkles } from 'lucide-react';
import { getGoogleCalendarUrl } from '../utils/calendar';

export const TimelineSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (id: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient emerald glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(21,70,56,0.25)_0%,transparent_70%)]" />

      <div className="relative max-w-[500px] mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <KhatimStar className="w-3.5 h-3.5 text-[#D4AF37]" stroke="#D4AF37" />
            <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#F5DE93] font-medium">
              Celebration Program · Boy's Side
            </span>
            <KhatimStar className="w-3.5 h-3.5 text-[#D4AF37]" stroke="#D4AF37" />
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#FFF3D1] font-normal">
            The Wedding Itinerary
          </h2>
          <p className="font-ui text-xs text-[#A3B8B0] tracking-widest mt-1 uppercase font-light">
            Friends Gathering (2, 3 &amp; 9 Nov) &amp; Auspicious Nikah
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8">
          {/* Vertical Continuous Guide Line */}
          <div className="absolute left-[19px] sm:left-[27px] top-4 bottom-4 w-[2px] bg-[#144234]" />

          {/* Animated Scroll Fill Line with 24K Gold Gradient */}
          <motion.div
            className="absolute left-[19px] sm:left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FFF3D1] via-[#D4AF37] to-[#8E6C1D] origin-top shadow-[0_0_8px_rgba(212,175,55,0.6)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Timeline Cards */}
          <div className="space-y-10">
            {CONFIG.events.map((event, idx) => {
              const fullAddress = `${event.venueName}, ${event.areaCity}`;
              const isCopied = copiedId === event.id;
              const isFriendsGathering = event.id.startsWith('friends');

              return (
                <motion.div
                  key={event.id}
                  className="relative flex items-start group"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.85,
                    delay: idx * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Timeline Dot Node (Gilded Gold Star Ring) */}
                  <div className="absolute -left-[25px] sm:-left-[33px] mt-1.5 z-10">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-[#061813] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:border-[#FFF3D1] transition-colors"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 18,
                        delay: idx * 0.2 + 0.1,
                      }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#9A751F] to-[#FFF3D1]" />
                    </motion.div>
                  </div>

                  {/* Event Card Content - Royal Emerald Card */}
                  <div className="ml-5 sm:ml-6 w-full p-5 sm:p-6 rounded-2xl bg-[#0B261F] border border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.08)] hover:border-[#D4AF37]/65 hover:shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(212,175,55,0.18)] transition-all duration-300">
                    {/* Top Row: Arabic Title & Event Tag */}
                    <div className="flex items-center justify-between gap-2 border-b border-[#D4AF37]/25 pb-2 mb-3">
                      <span className="font-arabic text-base text-[#FFF3D1] font-medium drop-shadow-sm">
                        {event.arabicTitle}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full font-ui text-[10px] uppercase tracking-wider font-semibold border ${
                        isFriendsGathering
                          ? 'bg-[#154637] border-[#D4AF37]/50 text-[#F5DE93]'
                          : 'bg-[#1D4A3D] border-[#FFF3D1]/50 text-[#FFF3D1]'
                      }`}>
                        {isFriendsGathering ? `Gathering · 0${idx + 1}` : 'Solemnization'}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-[#FFF3D1] font-normal">
                      {event.title}
                    </h3>

                    {/* Time & Venue Info */}
                    <div className="mt-3 space-y-2 font-ui text-xs text-[#D8E6DF]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                        <span className="font-medium text-[#FFF3D1]">{event.dateStr}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        <span className="font-semibold text-[#F5DE93]">{event.timeStr}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          {event.venueName}, {event.areaCity}
                        </span>
                      </div>
                      {event.dressCode && (
                        <div className="flex items-center gap-2 pt-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#F5DE93]" />
                          <span className="text-[11px] text-[#A3B8B0]">
                            Attire: <strong className="text-[#FFF3D1] font-normal">{event.dressCode}</strong> ({event.dressColorNote})
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="font-display italic text-xs sm:text-sm text-[#A3B8B0] mt-3.5 pt-2.5 border-t border-[#D4AF37]/20 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Directions, Calendar & Copy Address Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-[#D4AF37]/25 grid grid-cols-3 gap-2">
                      {/* Google Maps Directions */}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-2.5 py-2 rounded-xl bg-[#081F19] hover:bg-[#0E3027] border border-[#D4AF37]/35 text-[#FFF3D1] font-ui text-[11px] uppercase tracking-wider transition-colors"
                      >
                        <Navigation className="w-3 h-3 text-[#D4AF37]" />
                        <span>Maps</span>
                      </a>

                      {/* Add to Google Calendar */}
                      <a
                        href={getGoogleCalendarUrl(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-2.5 py-2 rounded-xl bg-[#081F19] hover:bg-[#0E3027] border border-[#D4AF37]/35 text-[#FFF3D1] font-ui text-[11px] uppercase tracking-wider transition-colors"
                      >
                        <CalendarPlus className="w-3 h-3 text-[#D4AF37]" />
                        <span>Add Cal</span>
                      </a>

                      {/* Quick Copy Address */}
                      <button
                        type="button"
                        onClick={() => handleCopyAddress(event.id, fullAddress)}
                        className="flex items-center justify-center gap-1 px-2.5 py-2 rounded-xl bg-[#081F19] hover:bg-[#0E3027] border border-[#D4AF37]/35 text-[#FFF3D1] font-ui text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-[#25D366]" />
                            <span className="text-[#25D366]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-[#D4AF37]" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
