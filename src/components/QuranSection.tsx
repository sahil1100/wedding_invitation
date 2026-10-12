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
        {/* 1. Featured Wedding Quran Verse: Wa-khalaqnakum azwaja */}
        <motion.div
          className="mb-3.5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-2 mb-1.5 text-[#8C6E36]">
            <span className="w-5 h-px bg-gradient-to-r from-transparent to-[#B89758]" />
            <span className="font-ui text-[10px] uppercase tracking-[0.28em] font-medium text-[#8C6E36]">
              {CONFIG.islamicContent.azwajaReference}
            </span>
            <span className="w-5 h-px bg-gradient-to-l from-transparent to-[#B89758]" />
          </div>

          {/* Arabic Calligraphy */}
          <h2
            dir="rtl"
            lang="ar"
            className="font-arabic text-3xl sm:text-4xl text-[#2B2118] tracking-wide leading-relaxed drop-shadow-[0_1px_4px_rgba(184,151,88,0.15)]"
          >
            {CONFIG.islamicContent.azwajaArabic}
          </h2>

          {/* Transliteration */}
          <p className="font-display italic text-sm sm:text-base text-[#8C6E36] tracking-wider mt-0.5">
            ({CONFIG.islamicContent.azwajaTransliteration})
          </p>

          {/* Meaning / Translation */}
          <p className="font-display text-sm sm:text-base text-[#4A3E34] tracking-wide mt-1 font-normal">
            &ldquo;{CONFIG.islamicContent.azwajaEnglish}&rdquo;
          </p>
        </motion.div>

        {/* Thin Antique Gold Rule Draws Outward from Center */}
        <div className="my-3 flex justify-center items-center">
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-[#B89758] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '180px', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* 2. Surah Ar-Rum 30:21 */}
        <motion.div
          className="mb-2 flex items-center justify-center gap-2 text-[#8C6E36]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="font-ui text-[10px] uppercase tracking-[0.25em] font-medium text-[#8C6E36]">
            {CONFIG.islamicContent.quranReference}
          </span>
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
