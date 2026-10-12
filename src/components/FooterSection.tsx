import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { MonogramRoundel, ArabesqueDivider } from './ArabesqueIcons';
import { Share2, MapPin } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const handleShare = () => {
    const text = `Assalamu Alaikum! You are warmly invited to the Friends Gathering (2, 3 & 9 Nov, 9:00 PM onwards) and Wedding Celebrations of Mo Sahil Doi with Siddiqa. Venue: Sanjar Street, New Mohalat, Himatnagar.`;
    if (navigator.share) {
      navigator.share({
        title: "Mo Sahil Doi — Groom's Wedding Invitation",
        text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(text + '\n' + window.location.href)}`,
        '_blank'
      );
    }
  };

  return (
    <footer className="relative pt-20 pb-28 px-4 sm:px-6 text-center overflow-hidden border-t border-[#D4AF37]/25 bg-[#04120D]">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(21,70,56,0.3)_0%,transparent_75%)]" />

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
            className="font-arabic text-2xl sm:text-3xl text-[#FFF3D1] leading-relaxed drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]"
          >
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
          </p>
          <p className="font-display italic text-sm text-[#F5DE93] tracking-wider">
            {CONFIG.islamicContent.salamGreeting}
          </p>
          <p className="font-ui text-xs sm:text-sm text-[#A3B8B0] tracking-wider mt-2">
            {CONFIG.islamicContent.celebrationNote}
          </p>
        </div>

        <ArabesqueDivider className="w-40 h-5 my-4 opacity-75" />

        <div className="font-display text-xl sm:text-2xl gold-foil-text font-normal whitespace-nowrap overflow-hidden text-ellipsis px-2">
          {CONFIG.couple.groom.fullName} &amp; {CONFIG.couple.bride.fullName}
        </div>

        <p className="font-ui text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] pt-2 font-medium">
          With Love, Duas &amp; Warmest Wishes · The Doi Family
        </p>

        <p className="font-ui text-xs text-[#8EAAA0] flex items-center justify-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Sanjar Street, New Mohalat · Himatnagar, Gujarat</span>
        </p>

        {/* Footer Quick Action Buttons */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Sanjar+Street+New+Mohalat+Himatnagar+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B2C22] hover:bg-[#123E30] border border-[#D4AF37]/40 text-[#FFF3D1] text-xs font-ui uppercase tracking-wider transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Directions</span>
          </a>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B2C22] hover:bg-[#123E30] border border-[#D4AF37]/40 text-[#FFF3D1] text-xs font-ui uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Share Invite</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
