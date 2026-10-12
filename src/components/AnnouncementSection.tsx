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
      {/* Background Decorative Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(21,70,56,0.3)_0%,transparent_75%)]" />

      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Sacred 8-Point Star Crest */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-11 h-11 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#0B2C22] shadow-[0_4px_16px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.2)]">
            <KhatimStar className="w-5 h-5 text-[#D4AF37]" stroke="#D4AF37" />
          </div>
        </motion.div>

        {/* ALHAMDULILLAH Header with radiant golden glow */}
        <motion.div
          className="overflow-hidden mb-3"
          initial={{ clipPath: 'inset(100% 0 0 0)', y: 20 }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-arabic text-3xl sm:text-4xl text-[#FFF3D1] block mb-1 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
            الْحَمْدُ لِلَّهِ
          </span>
          <span className="font-ui text-[11px] uppercase tracking-[0.3em] text-[#F5DE93] font-medium block">
            Alhamdulillah · In The Name of Allah
          </span>
        </motion.div>

        <ArabesqueDivider className="w-36 h-4 my-4 opacity-75" />

        {/* Formal Invitation Announcement Paragraphs */}
        <div className="space-y-4 font-display text-lg sm:text-xl text-[#F2ECE1] font-light leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            With the divine blessings of Almighty Allah (SWT) and the cherished duas of our elders,
          </motion.p>

          {/* Families highlight card - Boy's Side Royal Card */}
          <motion.div
            className="p-5 my-3 rounded-2xl bg-[#09241C] border border-[#D4AF37]/40 shadow-[0_12px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.1)] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#D4AF37]/10 rounded-full blur-xl" />
            <p className="font-ui text-[11px] uppercase tracking-[0.26em] text-[#D4AF37] mb-1.5 font-medium">
              Hosted With Pride &amp; Joy By
            </p>
            <h3 className="font-display text-2xl sm:text-3xl gold-foil-text tracking-wide font-normal">
              {CONFIG.hosts.groomFamily}
            </h3>
            <p className="font-ui text-xs text-[#A3B8B0] mt-0.5">
              Mo Basit Doi &amp; Sayera Doi
            </p>
            <div className="my-2 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]/30" />
              <span className="font-display italic text-sm text-[#F5DE93]">cordially invite you to celebrate</span>
              <span className="h-px w-8 bg-[#D4AF37]/30" />
            </div>
            <p className="font-ui text-[11px] uppercase tracking-wider text-[#A3B8B0]">
              The Wedding Celebrations &amp; Friends Gathering Of Their Son
            </p>
          </motion.div>

          <motion.div
            className="pt-2 px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-display text-2xl sm:text-3xl md:text-4xl gold-foil-text font-normal block whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-sm">
              {CONFIG.couple.groom.fullName}
            </span>
            <span className="font-display italic text-sm sm:text-base text-[#D4AF37] block my-1">
              with
            </span>
            <span className="font-display text-xl sm:text-2xl text-[#E8DFC8] font-light block whitespace-nowrap overflow-hidden text-ellipsis">
              {CONFIG.couple.bride.fullName}
            </span>
          </motion.div>

          <motion.p
            className="font-ui text-xs sm:text-sm text-[#A3B8B0] pt-3 tracking-wider font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your gracious presence, brotherhood, and sincere duas will illuminate these blessed evenings with happiness and eternal barakah.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
