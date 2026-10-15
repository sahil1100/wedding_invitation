import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';

export const QuranSection: React.FC = () => {
  return (
    <section
      id="quran-verse"
      className="relative py-5 sm:py-6 px-4 sm:px-6 text-center overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]"
    >
      {/* Background subtle geometric watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04]">
        <KhatimStar className="w-[320px] h-[320px] text-[#B89758]" stroke="#B89758" strokeWidth="0.5" />
      </div>

      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Sacred Quran Verse: Surah Ar-Rum 30:21 */}
        <motion.div
          className="mb-2 flex items-center justify-center gap-2 text-[#8C6E36]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#B89758]" />
          <span className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-[#8C6E36]">
            {CONFIG.islamicContent.quranReference}
          </span>
          <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#B89758]" />
        </motion.div>

        {/* Reverent Arabic Quranic Text */}
        <motion.div
          className="my-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        >
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-xl sm:text-2xl text-[#2B2118] leading-[2.1] tracking-wide"
          >
            {CONFIG.islamicContent.quranArabic}
          </p>
        </motion.div>

        {/* English Translation */}
        <motion.blockquote
          className="font-display text-xs sm:text-sm text-[#4A3E34] italic font-light leading-relaxed max-w-[420px] mx-auto mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          &ldquo;{CONFIG.islamicContent.quranEnglish}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
};
