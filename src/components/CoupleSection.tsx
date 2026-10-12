import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { ArabesqueDivider, KhatimStar } from './ArabesqueIcons';

export const CoupleSection: React.FC = () => {
  const { groom, bride } = CONFIG.couple;

  return (
    <section id="couple" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(74,32,40,0.4)_0%,transparent_75%)]" />

      <div className="relative max-w-[500px] mx-auto z-10 text-center">
        {/* Section Tag */}
        <motion.div
          className="mb-3 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
          <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C9A227] font-medium">
            The Bridegroom &amp; Bride
          </span>
          <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
        </motion.div>

        <h2 className="font-display text-3xl sm:text-4xl text-[#FAF6F0] font-light mb-8">
          The Blessed Union
        </h2>

        {/* The Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center">
          {/* Groom Card */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mihrab Arch Portrait Frame */}
            <div className="relative w-44 sm:w-48 aspect-[3/4] p-1 rounded-t-[50%] rounded-b-xl border border-[#C9A227]/60 shadow-2xl bg-gradient-to-b from-[#8A6A12]/30 via-[#2A1119] to-[#1A0910] overflow-hidden group">
              <div className="w-full h-full rounded-t-[50%] rounded-b-lg overflow-hidden relative">
                {/* [SWAP NOTE: Groom's Photograph URL in CONFIG.couple.groom.photo] */}
                <img
                  src={groom.photo}
                  alt={`Portrait of ${groom.fullName}`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0910] via-transparent to-[#8A6A12]/20 opacity-70" />
              </div>
              {/* Gold arch top highlight ring */}
              <div className="absolute inset-0 rounded-t-[50%] rounded-b-xl border border-[#F2DA8B]/30 pointer-events-none" />
            </div>

            {/* Groom Details */}
            <div className="mt-4 text-center">
              <span className="font-ui text-[10px] uppercase tracking-[0.25em] text-[#C9A227] font-medium block">
                The Groom
              </span>
              <h3 className="font-display text-2xl text-[#FAF6F0] font-light mt-0.5">
                {groom.fullName}
              </h3>
              <p className="font-display italic text-sm text-[#EADFC8]/85 mt-0.5">
                {groom.parentsTitle}
              </p>
              <p className="font-ui text-xs text-[#EADFC8]/70 mt-2 max-w-[210px] mx-auto font-light leading-relaxed">
                {groom.bio}
              </p>
            </div>
          </motion.div>

          {/* Central Ligature Knot (Visible between portraits) */}
          <div className="flex md:hidden justify-center my-[-8px]">
            <span className="font-display italic text-3xl gold-foil-text font-normal">
              &amp;
            </span>
          </div>

          {/* Bride Card */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mihrab Arch Portrait Frame */}
            <div className="relative w-44 sm:w-48 aspect-[3/4] p-1 rounded-t-[50%] rounded-b-xl border border-[#C9A227]/60 shadow-2xl bg-gradient-to-b from-[#8A6A12]/30 via-[#2A1119] to-[#1A0910] overflow-hidden group">
              <div className="w-full h-full rounded-t-[50%] rounded-b-lg overflow-hidden relative">
                {/* [SWAP NOTE: Bride's Photograph URL in CONFIG.couple.bride.photo] */}
                <img
                  src={bride.photo}
                  alt={`Portrait of ${bride.fullName}`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0910] via-transparent to-[#8A6A12]/20 opacity-70" />
              </div>
              {/* Gold arch top highlight ring */}
              <div className="absolute inset-0 rounded-t-[50%] rounded-b-xl border border-[#F2DA8B]/30 pointer-events-none" />
            </div>

            {/* Bride Details */}
            <div className="mt-4 text-center">
              <span className="font-ui text-[10px] uppercase tracking-[0.25em] text-[#C9A227] font-medium block">
                The Bride
              </span>
              <h3 className="font-display text-2xl text-[#FAF6F0] font-light mt-0.5">
                {bride.fullName}
              </h3>
              <p className="font-display italic text-sm text-[#EADFC8]/85 mt-0.5">
                {bride.parentsTitle}
              </p>
              <p className="font-ui text-xs text-[#EADFC8]/70 mt-2 max-w-[210px] mx-auto font-light leading-relaxed">
                {bride.bio}
              </p>
            </div>
          </motion.div>
        </div>

        <ArabesqueDivider className="w-40 h-5 mt-10" />
      </div>
    </section>
  );
};
