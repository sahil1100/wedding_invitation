import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar, ArabesqueDivider } from './ArabesqueIcons';

export const DuaSection: React.FC = () => {
  return (
    <section id="dua-card" className="relative py-20 px-4 sm:px-6 overflow-hidden text-center">
      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Subtle decorative arch frame */}
        <motion.div
          className="p-8 sm:p-10 rounded-3xl bg-[#FDFBF7] border border-[#E6DCCE] shadow-[0_10px_35px_rgba(74,62,52,0.07)] relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Top Star */}
          <div className="flex justify-center mb-5">
            <KhatimStar className="w-6 h-6 text-[#8C6E36]" stroke="#8C6E36" strokeWidth="1.2" />
          </div>

          <span className="font-ui text-[10px] uppercase tracking-[0.3em] text-[#8C6E36] font-medium block mb-4">
            The Prophetic Blessing
          </span>

          {/* Reverent Arabic Calligraphy */}
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#2B2118] leading-[2.1] tracking-wide"
          >
            {CONFIG.islamicContent.barakahDuaArabic}
          </p>

          <ArabesqueDivider className="w-32 h-4 my-5 opacity-60" />

          {/* Transliteration */}
          <p className="font-display italic text-sm sm:text-base text-[#7A5F28] tracking-wider mb-2">
            &ldquo;{CONFIG.islamicContent.barakahDuaTransliteration}&rdquo;
          </p>

          {/* English Translation */}
          <p className="font-ui text-xs sm:text-sm text-[#5C4E43] font-light leading-relaxed max-w-sm mx-auto">
            {CONFIG.islamicContent.barakahDuaEnglish}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
