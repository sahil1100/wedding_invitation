import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { MonogramRoundel, ArabesqueDivider } from './ArabesqueIcons';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative pt-6 pb-10 px-4 sm:px-6 text-center overflow-hidden border-t border-[#E6DCCE] bg-[#F5EFEB]">
      <div className="relative max-w-[500px] mx-auto z-10 space-y-3.5">
        {/* Monogram Roundel */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MonogramRoundel size={72} className="w-18 h-18" />
        </motion.div>

        {/* Islamic Farewell Greeting */}
        <div className="space-y-1">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#2B2118] leading-relaxed"
          >
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
          </p>
          <p className="font-display italic text-xs sm:text-sm text-[#5C4E43] tracking-wider">
            {CONFIG.islamicContent.salamGreeting}
          </p>
          <p className="font-ui text-xs text-[#6B5D52] tracking-wider mt-1">
            {CONFIG.islamicContent.celebrationNote}
          </p>
        </div>

        <ArabesqueDivider className="w-36 h-4 my-2 opacity-60" />

        <div className="font-display text-base sm:text-lg text-[#2B2118] font-normal whitespace-nowrap overflow-hidden text-ellipsis px-2">
          {CONFIG.couple.bride.fullName} &amp; {CONFIG.couple.groom.fullName}
        </div>

        <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-[#8C6E36] pt-1 font-medium">
          With Love &amp; Duas · The Panchbhaiya Family (Nadisan wala)
        </p>
      </div>
    </footer>
  );
};
