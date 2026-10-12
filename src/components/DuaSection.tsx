import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar, ArabesqueDivider } from './ArabesqueIcons';

export const DuaSection: React.FC = () => {
  return (
    <section id="dua-card" className="relative py-20 px-4 sm:px-6 overflow-hidden text-center">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(21,70,56,0.2)_0%,transparent_70%)]" />

      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Subtle decorative arch frame */}
        <motion.div
          className="p-8 sm:p-10 rounded-3xl bg-[#09241C] border border-[#D4AF37]/35 shadow-[0_15px_45px_rgba(0,0,0,0.6),0_0_25px_rgba(212,175,55,0.12)] relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Top Star */}
          <div className="flex justify-center mb-5">
            <KhatimStar className="w-6 h-6 text-[#D4AF37]" stroke="#D4AF37" strokeWidth="1.2" />
          </div>

          <span className="font-ui text-[10px] uppercase tracking-[0.3em] text-[#F5DE93] font-medium block mb-4">
            The Prophetic Blessing
          </span>

          {/* Reverent Arabic Calligraphy */}
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#FFF3D1] leading-[2.2] tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
          >
            {CONFIG.islamicContent.barakahDuaArabic}
          </p>

          <ArabesqueDivider className="w-32 h-4 my-5 opacity-75" />

          {/* Transliteration */}
          <p className="font-display italic text-sm sm:text-base text-[#F5DE93] tracking-wider mb-2">
            &ldquo;{CONFIG.islamicContent.barakahDuaTransliteration}&rdquo;
          </p>

          {/* English Translation */}
          <p className="font-ui text-xs sm:text-sm text-[#D8E4DE] font-light leading-relaxed max-w-sm mx-auto">
            {CONFIG.islamicContent.barakahDuaEnglish}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
