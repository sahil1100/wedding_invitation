import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus } from 'lucide-react';
import { getGoogleCalendarUrl } from '../utils/calendar';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="relative max-w-[500px] mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
            <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#8C6E36] font-medium">
              Celebration Program
            </span>
            <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#2B2118] font-normal">
            The Wedding Itinerary
          </h2>
          <p className="font-ui text-xs text-[#6B5D52] tracking-widest mt-1 uppercase font-light">
            Insha Allah · November 2026
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8">
          {/* Vertical Continuous Guide Line */}
          <div className="absolute left-[19px] sm:left-[27px] top-4 bottom-4 w-[2px] bg-[#E6DCCE]" />

          {/* Animated Scroll Fill Line */}
          <motion.div
            className="absolute left-[19px] sm:left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#B89758] via-[#D4BC8B] to-[#7A5F28] origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Timeline Cards */}
          <div className="space-y-10">
            {CONFIG.events.map((event, idx) => (
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
                {/* Timeline Dot Node (Antique Gold Star Ring) */}
                <div className="absolute -left-[25px] sm:-left-[33px] mt-1.5 z-10">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-[#FAF7F2] border-2 border-[#B89758] flex items-center justify-center shadow-md group-hover:border-[#8C6E36] transition-colors"
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
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#7A5F28] to-[#D4BC8B]" />
                  </motion.div>
                </div>

                {/* Event Card Content */}
                <div className="ml-5 sm:ml-6 w-full p-5 rounded-2xl bg-[#FDFBF7] border border-[#E6DCCE] shadow-[0_6px_25px_rgba(74,62,52,0.06)] hover:border-[#B89758]/50 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 border-b border-[#E8DFC8] pb-2 mb-3">
                    <span className="font-arabic text-sm text-[#8C6E36] font-medium">
                      {event.arabicTitle}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F5EFEB] border border-[#D8CBB6] font-ui text-[10px] uppercase tracking-wider text-[#8C6E36] font-medium">
                      Day 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-[#2B2118] font-normal">
                    {event.title}
                  </h3>

                  <div className="mt-3 space-y-1.5 font-ui text-xs text-[#5C4E43]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#8C6E36]" />
                      <span className="font-medium text-[#2B2118]">{event.dateStr}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#8C6E36]" />
                      <span>{event.timeStr}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#8C6E36]" />
                      <span>
                        {event.venueName}, {event.areaCity}
                      </span>
                    </div>
                  </div>

                  <p className="font-display italic text-xs text-[#6B5D52] mt-3 pt-2 border-t border-[#E8DFC8]">
                    {event.description}
                  </p>

                  {/* Directions & Calendar Quick Actions */}
                  <div className="mt-4 pt-3 border-t border-[#E8DFC8] flex items-center gap-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${event.venueName} ${event.areaCity}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#F5EFEB] hover:bg-[#EFE6D8] border border-[#D8CBB6] text-[#2B2118] font-ui text-[11px] uppercase tracking-wider transition-colors"
                    >
                      <Navigation className="w-3 h-3 text-[#8C6E36]" />
                      <span>Directions</span>
                    </a>
                    <a
                      href={getGoogleCalendarUrl(event)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#F5EFEB] hover:bg-[#EFE6D8] border border-[#D8CBB6] text-[#2B2118] font-ui text-[11px] uppercase tracking-wider transition-colors"
                    >
                      <CalendarPlus className="w-3 h-3 text-[#8C6E36]" />
                      <span>Add to Cal</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
