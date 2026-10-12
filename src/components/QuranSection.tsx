import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';

export const QuranSection: React.FC = () => {
  return (
    <section
      id="quran-verse"
      className="relative py-24 px-6 sm:px-8 text-center overflow-hidden bg-gradient-to-b from-[#061813] via-[#0A261F] to-[#061813]"
    >
      {/* Background subtle geometric watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.06]">
        <KhatimStar className="w-[340px] h-[340px] text-[#D4AF37]" stroke="#D4AF37" strokeWidth="0.6" />
      </div>

      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Subtle Quran Header Label */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-2 text-[#D4AF37]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="font-ui text-[10px] uppercase tracking-[0.3em] font-medium text-[#F5DE93]">
            {CONFIG.islamicContent.quranReference}
          </span>
          <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </motion.div>

        {/* Reverent Arabic Quranic Text in Radiant Gold */}
        <motion.div
          className="my-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        >
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#FFF3D1] leading-[2.3] sm:leading-[2.5] tracking-wide drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)]"
          >
            {CONFIG.islamicContent.quranArabic}
          </p>
        </motion.div>

        {/* Thin Gold Rule Draws Outward from Center */}
        <div className="my-6 flex justify-center items-center">
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '200px', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* English Translation */}
        <motion.blockquote
          className="font-display text-base sm:text-lg text-[#D5CEBF] italic font-light leading-relaxed max-w-[420px] mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          &ldquo;{CONFIG.islamicContent.quranEnglish}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
};
