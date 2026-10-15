import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const MapSection: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string>(CONFIG.events[1].id); // Default to Nikah

  const currentEvent =
    CONFIG.events.find((e) => e.id === selectedEventId) || CONFIG.events[0];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${currentEvent.venueName} ${currentEvent.areaCity}`
  )}`;

  return (
    <section id="map" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="relative max-w-[500px] mx-auto z-10 text-center">
        {/* Section Header */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
          <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C9A227] font-medium">
            Find Your Way
          </span>
          <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
        </motion.div>

        <h2 className="font-display text-3xl sm:text-4xl text-[#FAF6F0] font-light mb-4">
          Venues &amp; Navigation
        </h2>

        {/* Event Selector Pill Tabs */}
        <div className="flex items-center justify-center gap-1.5 p-1 rounded-full bg-[#2A1119] border border-[#C9A227]/30 max-w-md mx-auto mb-6">
          {CONFIG.events.map((evt) => {
            const isActive = evt.id === selectedEventId;
            const tabLabel = evt.id === 'nikah' ? 'Nikah' : evt.title.split(' ')[0];
            return (
              <button
                key={evt.id}
                type="button"
                onClick={() => setSelectedEventId(evt.id)}
                className={`flex-1 py-1.5 px-2 rounded-full font-ui text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8A6A12] to-[#C9A227] text-[#1A0910] font-semibold shadow-md'
                    : 'text-[#EADFC8]/75 hover:text-[#FAF6F0]'
                }`}
              >
                {tabLabel}
              </button>
            );
          })}
        </div>

        {/* Arch Masked Dark Map Frame */}
        <div className="relative w-full aspect-[4/3] rounded-t-[50%_35%] rounded-b-3xl border-2 border-[#C9A227]/50 shadow-2xl overflow-hidden bg-[#16080E] p-1">
          <div className="w-full h-full rounded-t-[50%_35%] rounded-b-2xl overflow-hidden relative flex items-center justify-center bg-[#1D0A12]">
            {/* Stylized Vector Dark Map Canvas Grid & Roads */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Lines */}
              <defs>
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A227" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)" />
              {/* Curving Map Avenues */}
              <path
                d="M -20,120 Q 150,60 300,180 T 520,140"
                fill="none"
                stroke="#F2DA8B"
                strokeWidth="2.5"
                opacity="0.4"
              />
              <path
                d="M 120,-20 Q 220,150 180,320"
                fill="none"
                stroke="#C9A227"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                d="M 280,320 Q 260,180 420,-20"
                fill="none"
                stroke="#8A6A12"
                strokeWidth="1.5"
                opacity="0.3"
              />
            </svg>

            {/* Pulsing Gold Pin Dropped at Center */}
            <div className="relative z-20 flex flex-col items-center">
              {/* Concentric Pulsing Gold Radar Rings */}
              <motion.div
                className="absolute -top-1 w-16 h-16 rounded-full border border-[#F2DA8B]/60 pointer-events-none"
                animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute -top-1 w-10 h-10 rounded-full border-2 border-[#C9A227] pointer-events-none"
                animate={{ scale: [1, 1.8, 1], opacity: [0.9, 0.1, 0.9] }}
                transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: 'easeOut' }}
              />

              {/* Pin Icon with Drop Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedEventId}
                  initial={{ y: -40, opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8A6A12] via-[#F2DA8B] to-[#C9A227] p-0.5 shadow-2xl flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#1A0910] flex items-center justify-center text-[#F2DA8B]">
                      <MapPin className="w-6 h-6 fill-[#C9A227]/30" />
                    </div>
                  </div>
                  {/* Pin Point Tip */}
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#C9A227] -mt-0.5" />
                  <div className="w-3 h-1 bg-[#1A0910] rounded-full blur-[1px] mt-0.5 opacity-60" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Overlay Info Card inside Arch */}
            <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-[#1A0910]/95 backdrop-blur-md border border-[#C9A227]/40 shadow-xl flex items-center justify-between gap-3 text-left">
              <div className="min-w-0 flex-1">
                <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#C9A227] truncate">
                  {currentEvent.title}
                </p>
                <p className="font-display text-base sm:text-lg text-[#FAF6F0] font-medium truncate">
                  {currentEvent.venueName}
                </p>
                <p className="font-ui text-xs text-[#EADFC8]/70 truncate">
                  {currentEvent.areaCity}
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#8A6A12] to-[#C9A227] text-[#1A0910] font-ui text-xs font-semibold shadow-md hover:brightness-110 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
