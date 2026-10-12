import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { MonogramRoundel, ArabesqueDivider } from './ArabesqueIcons';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-28 px-4 sm:px-6 text-center overflow-hidden border-t border-[#E6DCCE] bg-[#F5EFEB]">
      <div className="relative max-w-[500px] mx-auto z-10 space-y-6">
        {/* Monogram Roundel */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MonogramRoundel size={90} className="w-22 h-22" />
        </motion.div>

        {/* Islamic Farewell Greeting */}
        <div className="space-y-2">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#2B2118] leading-relaxed"
          >
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
          </p>
          <p className="font-display italic text-sm text-[#5C4E43] tracking-wider">
            {CONFIG.islamicContent.salamGreeting}
          </p>
          <p className="font-ui text-xs sm:text-sm text-[#6B5D52] tracking-wider mt-2">
            {CONFIG.islamicContent.celebrationNote}
          </p>
        </div>

        <ArabesqueDivider className="w-40 h-5 my-4 opacity-60" />

        <div className="font-display text-lg sm:text-xl text-[#2B2118] font-normal whitespace-nowrap overflow-hidden text-ellipsis px-2">
          {CONFIG.couple.groom.fullName} &amp; {CONFIG.couple.bride.fullName}
        </div>

        <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-[#8C6E36] pt-4 font-medium">
          With Love &amp; Duas · The Doi &amp; Panchbhaiya Families
        </p>
      </div>
    </footer>
  );
};
