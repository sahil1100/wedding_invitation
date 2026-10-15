import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { EventItem } from '../types';
import {
  MehndiMandalaIcon,
  EngagementRingsIcon,
  MosqueDomeIcon,
  FestiveLanternIcon,
  KhatimStar,
  ArabesqueDivider,
} from './ArabesqueIcons';
import { downloadIcsFile, getGoogleCalendarUrl } from '../utils/calendar';
import { Calendar, Clock, MapPin, Sparkles, Navigation, CalendarPlus, Check } from 'lucide-react';

const EventIconComponent: React.FC<{ type: EventItem['iconType'] }> = ({ type }) => {
  switch (type) {
    case 'mehndi':
      return <MehndiMandalaIcon className="w-10 h-10 text-[#C9A227]" />;
    case 'engagement':
      return <EngagementRingsIcon className="w-10 h-10 text-[#F2DA8B]" />;
    case 'nikah':
      return <MosqueDomeIcon className="w-10 h-10 text-[#F2DA8B]" />;
    case 'gathering':
    case 'walima':
      return <FestiveLanternIcon className="w-10 h-10 text-[#C9A227]" />;
    default:
      return <KhatimStar className="w-8 h-8 text-[#C9A227]" />;
  }
};

const EventCard: React.FC<{ event: EventItem; index: number }> = ({ event, index }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);

  // 3D tilt tracking limited to max 6deg
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // max 5deg
    const rotateY = ((x - centerX) / centerX) * 5; // max 5deg
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleIcsDownload = () => {
    downloadIcsFile(event);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
    setShowCalendarMenu(false);
  };

  const googleCalUrl = getGoogleCalendarUrl(event);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${event.venueName} ${event.areaCity}`
  )}`;

  return (
    <motion.div
      className="perspective-1000 w-full"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#2A1119] via-[#33141F] to-[#1A0910] border border-[#C9A227]/40 shadow-2xl transition-shadow duration-300 gold-glow-hover"
      >
        {/* Arch Top Curve Motif (Mihrab crown visual) */}
        <div className="flex justify-center -mt-2 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#1A0910] border border-[#C9A227]/50 shadow-inner flex items-center justify-center p-2.5">
            <EventIconComponent type={event.iconType} />
          </div>
        </div>

        {/* Event Titles */}
        <div className="text-center mb-4">
          <span className="font-arabic text-xl text-[#F2DA8B] block mb-1">
            {event.arabicTitle}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-[#FAF6F0] font-light tracking-wide">
            {event.title}
          </h3>
          <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-[#C9A227] mt-1 font-medium">
            Insha Allah
          </p>
        </div>

        <ArabesqueDivider className="w-32 h-4 my-3" />

        {/* Date, Time & Venue */}
        <div className="space-y-2.5 font-ui text-xs sm:text-sm text-[#EADFC8] my-4">
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#1A0910]/40 border border-[#C9A227]/15">
            <Calendar className="w-4 h-4 text-[#F2DA8B] shrink-0" />
            <span className="font-medium text-[#F7F1E6]">{event.dateStr}</span>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#1A0910]/40 border border-[#C9A227]/15">
            <Clock className="w-4 h-4 text-[#F2DA8B] shrink-0" />
            <span>{event.timeStr}</span>
          </div>

          <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#1A0910]/40 border border-[#C9A227]/15">
            <MapPin className="w-4 h-4 text-[#F2DA8B] shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-[#FAF6F0] block">{event.venueName}</span>
              <span className="text-[#EADFC8]/70 text-xs block">{event.areaCity}</span>
            </div>
          </div>
        </div>

        {/* Dress Code Pill Chip */}
        <div className="my-4 p-3 rounded-xl bg-[#16080E]/70 border border-[#7E8B72]/30 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[#7E8B72] font-ui text-[10px] uppercase tracking-[0.2em] font-medium mb-0.5">
            <Sparkles className="w-3 h-3" />
            <span>Dress Code</span>
          </div>
          <p className="font-display text-sm text-[#FAF6F0] font-normal">
            {event.dressCode}
          </p>
          <p className="font-ui text-[11px] text-[#EADFC8]/70 italic mt-0.5">
            {event.dressColorNote}
          </p>
        </div>

        {/* Action Buttons: Add to Calendar & Directions */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 pt-2 border-t border-[#C9A227]/20 relative">
          {/* Calendar Button with Options */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCalendarMenu(!showCalendarMenu)}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#3A1822] hover:bg-[#4A2028] border border-[#C9A227]/40 text-[#F2DA8B] font-ui text-xs tracking-wider uppercase transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F2DA8B]"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>Calendar</span>
                </>
              )}
            </button>

            {/* Dropdown for Calendar Type */}
            {showCalendarMenu && (
              <div className="absolute bottom-full left-0 right-0 mb-2 p-1.5 rounded-xl bg-[#1A0910] border border-[#C9A227] shadow-2xl z-30 space-y-1">
                <a
                  href={googleCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCalendarMenu(false)}
                  className="block px-3 py-1.5 text-left font-ui text-[11px] text-[#F7F1E6] hover:bg-[#2A1119] rounded-lg transition-colors"
                >
                  Google Calendar &rarr;
                </a>
                <button
                  type="button"
                  onClick={handleIcsDownload}
                  className="w-full text-left px-3 py-1.5 font-ui text-[11px] text-[#F7F1E6] hover:bg-[#2A1119] rounded-lg transition-colors"
                >
                  Download Apple / .ICS &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Directions Button */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#8A6A12]/30 hover:bg-[#8A6A12]/50 border border-[#C9A227]/40 text-[#FAF6F0] font-ui text-xs tracking-wider uppercase transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F2DA8B]"
          >
            <Navigation className="w-3.5 h-3.5 text-[#F2DA8B]" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="relative max-w-[500px] mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
            <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C9A227] font-medium">
              Auspicious Ceremonies
            </span>
            <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl text-[#FAF6F0] font-light">
            Wedding Ceremonies
          </h2>
          <p className="font-ui text-xs text-[#EADFC8]/70 tracking-widest mt-1 uppercase font-light">
            Tap Cards for Directions &amp; Calendar Reminder
          </p>
        </div>

        {/* 3 Event Cards Stack */}
        <div className="space-y-8">
          {CONFIG.events.map((event, idx) => (
            <EventCard key={event.id} event={event} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
