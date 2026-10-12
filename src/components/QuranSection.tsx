import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';

export const QuranSection: React.FC = () => {
  return (
    <section
      id="quran-verse"
      className="relative py-24 px-6 sm:px-8 text-center overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]"
    >
      {/* Background subtle geometric watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04]">
        <KhatimStar className="w-[320px] h-[320px] text-[#B89758]" stroke="#B89758" strokeWidth="0.5" />
      </div>

      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Subtle Quran Header Label */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-2 text-[#8C6E36]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#B89758]" />
          <span className="font-ui text-[10px] uppercase tracking-[0.3em] font-medium text-[#8C6E36]">
            {CONFIG.islamicContent.quranReference}
          </span>
          <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#B89758]" />
        </motion.div>

        {/* Reverent Arabic Quranic Text */}
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
            className="font-arabic text-2xl sm:text-3xl text-[#2B2118] leading-[2.2] sm:leading-[2.4] tracking-wide"
          >
            {CONFIG.islamicContent.quranArabic}
          </p>
        </motion.div>

        {/* Thin Antique Gold Rule Draws Outward from Center */}
        <div className="my-6 flex justify-center items-center">
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-[#B89758] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '180px', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* English Translation */}
        <motion.blockquote
          className="font-display text-base sm:text-lg text-[#4A3E34] italic font-light leading-relaxed max-w-[420px] mx-auto"
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
