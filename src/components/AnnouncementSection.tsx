import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { ArabesqueDivider, KhatimStar } from './ArabesqueIcons';

export const AnnouncementSection: React.FC = () => {
  return (
    <section
      id="announcement"
      className="relative py-20 px-6 sm:px-8 text-center overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,#EFE8DE_0%,transparent_70%)]" />

      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Sacred 8-Point Star Crest */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-10 h-10 rounded-full border border-[#D8CBB6] flex items-center justify-center bg-[#F7F3EC] shadow-[0_2px_12px_rgba(74,62,52,0.06)]">
            <KhatimStar className="w-5 h-5 text-[#8C6E36]" stroke="#8C6E36" />
          </div>
        </motion.div>

        {/* ALHAMDULILLAH Header with clip-path mask */}
        <motion.div
          className="overflow-hidden mb-3"
          initial={{ clipPath: 'inset(100% 0 0 0)', y: 20 }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-arabic text-3xl sm:text-4xl text-[#2B2118] block mb-1 drop-shadow-[0_1px_4px_rgba(184,151,88,0.15)]">
            الْحَمْدُ لِلَّهِ
          </span>
          <span className="font-ui text-[11px] uppercase tracking-[0.3em] text-[#8C6E36] font-medium block">
            Alhamdulillah · In Praise of Allah
          </span>
        </motion.div>

        <ArabesqueDivider className="w-36 h-4 my-4 opacity-60" />

        {/* Formal Invitation Announcement Paragraphs */}
        <div className="space-y-4 font-display text-lg sm:text-xl text-[#32271E] font-light leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            With the divine blessings of Almighty Allah (SWT) and the cherished prayers of our elders,
          </motion.p>

          {/* Families highlight card */}
          <motion.div
            className="p-5 my-3 rounded-2xl bg-[#FDFBF7] border border-[#E6DCCE] shadow-[0_8px_25px_rgba(74,62,52,0.06)] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#B89758]/10 rounded-full blur-lg" />
            <p className="font-ui text-xs uppercase tracking-[0.24em] text-[#8C6E36] mb-1.5 font-medium">
              Hosted Joyfully By
            </p>
            <h3 className="font-display text-xl sm:text-2xl text-[#2B2118] tracking-wide font-normal">
              {CONFIG.hosts.groomFamily}
            </h3>
            <p className="font-display italic text-sm text-[#8C6E36] my-1">&amp;</p>
            <h3 className="font-display text-xl sm:text-2xl text-[#2B2118] tracking-wide font-normal">
              {CONFIG.hosts.brideFamily}
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We cordially invite you and your family to grace our celebration and bless the holy union of
          </motion.p>

          <motion.div
            className="pt-2 px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-display text-xl sm:text-2xl md:text-3xl text-[#2B2118] font-normal block whitespace-nowrap overflow-hidden text-ellipsis">
              {CONFIG.couple.groom.fullName}
            </span>
            <span className="font-display italic text-sm sm:text-base text-[#6B5D52] block my-1">
              with
            </span>
            <span className="font-display text-lg sm:text-2xl md:text-3xl text-[#2B2118] font-normal block whitespace-nowrap overflow-hidden text-ellipsis">
              {CONFIG.couple.bride.fullName}
            </span>
          </motion.div>

          <motion.p
            className="font-ui text-xs sm:text-sm text-[#5C4E43] pt-3 tracking-wider font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            May your presence and sincere duas fill their journey with barakah, tranquillity, and eternal love.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
