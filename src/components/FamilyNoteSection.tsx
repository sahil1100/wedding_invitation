import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';

export const FamilyNoteSection: React.FC = () => {
  const note = CONFIG.familyNote;

  return (
    <section
      id="family-note"
      className="relative py-6 sm:py-8 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F1EA] to-[#FAF7F2] text-center"
    >
      {/* Subtle Background Watermark with Geometric Arabesque Motif */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04]">
        <KhatimStar className="w-[300px] h-[300px] text-[#B89758]" stroke="#B89758" strokeWidth="0.6" />
      </div>

      <div className="relative max-w-[440px] mx-auto z-10">
        {/* Top Subtitle with Stars */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-3"
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
          <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#8C6E36] font-medium">
            {note.sectionSubtitle}
          </span>
          <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
        </motion.div>

        {/* Framed Card Matching Theme Colors */}
        <motion.div
          className="relative bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(74,62,52,0.06)] border border-[#E6DCCE] overflow-hidden transition-shadow hover:shadow-[0_12px_40px_rgba(74,62,52,0.1)]"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle gold foil light reflection sweep */}
          <div className="foil-shimmer-sweep" />

          {/* Inner Inset Border */}
          <div className="absolute inset-3 border border-[#EFE8DD] rounded-xl pointer-events-none" />

          {/* Elegant Vintage Corner Accents in Antique Gold */}
          {/* Top-Left */}
          <svg
            className="absolute top-4 left-4 w-4 h-4 text-[#B89758] pointer-events-none opacity-80"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M2 16 V2 H16" />
            <path d="M5 13 V5 H13" />
          </svg>

          {/* Top-Right */}
          <svg
            className="absolute top-4 right-4 w-4 h-4 text-[#B89758] pointer-events-none opacity-80"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M18 16 V2 H4" />
            <path d="M15 13 V5 H7" />
          </svg>

          {/* Bottom-Left */}
          <svg
            className="absolute bottom-4 left-4 w-4 h-4 text-[#B89758] pointer-events-none opacity-80"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M2 4 V18 H16" />
            <path d="M5 7 V15 H13" />
          </svg>

          {/* Bottom-Right */}
          <svg
            className="absolute bottom-4 right-4 w-4 h-4 text-[#B89758] pointer-events-none opacity-80"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M18 4 V18 H4" />
            <path d="M15 7 V15 H7" />
          </svg>

          {/* Card Content */}
          <div className="relative z-10">
            {/* Header: FROM THE PANCHBHAIYA FAMILY */}
            <h3 className="font-ui text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#8C6E36] font-medium mb-2.5">
              {note.familyHeader}
            </h3>

            {/* Antique Gold Star Divider */}
            <div className="flex items-center justify-center gap-3 my-2 opacity-75">
              <span className="h-px w-14 sm:w-18 bg-gradient-to-r from-transparent to-[#B89758]" />
              <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" strokeWidth="1.2" />
              <span className="h-px w-14 sm:w-18 bg-gradient-to-l from-transparent to-[#B89758]" />
            </div>

            {/* Heartfelt Quote in Cormorant Garamond Display Italic */}
            <div className="my-4 space-y-0.5">
              <p className="font-display italic text-2xl sm:text-[27px] text-[#2B2118] font-normal leading-snug tracking-wide">
                {note.quoteLine1}
              </p>
              <p className="font-display italic text-2xl sm:text-[27px] text-[#2B2118] font-normal leading-snug tracking-wide flex items-center justify-center gap-1.5">
                <span>{note.quoteLine2}</span>
                <span className="inline-block text-[#C4384B] text-xl sm:text-2xl transform transition-transform hover:scale-125 duration-300">
                  {note.emoji}
                </span>
              </p>
            </div>

            {/* WITH LOVE Sub-label */}
            <div className="mt-4 mb-2">
              <span className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#8C6E36] font-semibold block">
                {note.withLoveLabel}
              </span>
            </div>

            {/* Names (Rahin & Rida) */}
            <div className="space-y-0.5">
              {note.names.map((name, idx) => (
                <p
                  key={idx}
                  className="font-display italic text-lg sm:text-[22px] text-[#32271E] font-normal leading-tight tracking-wide"
                >
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
