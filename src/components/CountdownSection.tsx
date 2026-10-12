import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';
import { Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

const FlipDigitCard: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const displayVal = value < 10 ? `0${value}` : `${value}`;

  return (
    <div className="flex flex-col items-center">
      {/* 3D Flip Card Container */}
      <div className="relative w-16 sm:w-20 h-20 sm:h-24 perspective-1000">
        <div className="w-full h-full rounded-xl bg-[#09241C] border border-[#D4AF37]/45 shadow-[0_8px_25px_rgba(0,0,0,0.6),0_0_15px_rgba(212,175,55,0.12)] flex items-center justify-center overflow-hidden">
          {/* Subtle horizontal card split line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-[#D4AF37]/25 z-10" />
          {/* Subtle ambient gold shine */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#D4AF37]/10 to-transparent pointer-events-none" />

          {/* Animated Value with 3D Flip Rotation */}
          <AnimatePresence mode="popLayout">
            <motion.span
              key={displayVal}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl sm:text-4xl gold-foil-text font-normal tracking-wide select-none drop-shadow-sm"
            >
              {displayVal}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Unit Sub-Label */}
      <span className="font-ui text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#F5DE93] mt-2 font-medium">
        {label}
      </span>
    </div>
  );
};

export const CountdownSection: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<'gathering' | 'nikah'>('gathering');

  const getTargetIso = () => {
    return selectedTarget === 'gathering'
      ? (CONFIG.friendsGatheringDateIso || '2026-11-02T21:00:00')
      : CONFIG.nikahDateIso;
  };

  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(getTargetIso()).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedTarget]);

  return (
    <section id="countdown" className="relative py-20 px-4 sm:px-6 text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(21,70,56,0.3)_0%,transparent_75%)]" />

      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Insha Allah Label */}
        <motion.div
          className="mb-2 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <KhatimStar className="w-3.5 h-3.5 text-[#D4AF37]" stroke="#D4AF37" />
          <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#F5DE93] font-medium">
            Insha Allah · Counting Down
          </span>
          <KhatimStar className="w-3.5 h-3.5 text-[#D4AF37]" stroke="#D4AF37" />
        </motion.div>

        {/* Target Selector Toggle */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => setSelectedTarget('gathering')}
            className={`px-3 py-1.5 rounded-full font-ui text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
              selectedTarget === 'gathering'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C49B30] text-[#061813] font-semibold shadow-md'
                : 'bg-[#0B261F] text-[#A3B8B0] border border-[#D4AF37]/30 hover:text-[#FFF3D1]'
            }`}
          >
            Friends Gathering (2 Nov)
          </button>
          <button
            type="button"
            onClick={() => setSelectedTarget('nikah')}
            className={`px-3 py-1.5 rounded-full font-ui text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
              selectedTarget === 'nikah'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C49B30] text-[#061813] font-semibold shadow-md'
                : 'bg-[#0B261F] text-[#A3B8B0] border border-[#D4AF37]/30 hover:text-[#FFF3D1]'
            }`}
          >
            Auspicious Nikah (14 Nov)
          </button>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl text-[#FFF3D1] font-normal mb-8">
          {timeLeft.isPast
            ? "Alhamdulillah — The Celebrations Have Commenced"
            : selectedTarget === 'gathering'
            ? "Until Friends Gathering Night 1 (9:00 PM)"
            : "Until We Solemnize The Nikah"}
        </h2>

        {/* The 4 Digits Columns */}
        {!timeLeft.isPast ? (
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <FlipDigitCard value={timeLeft.days} label="Days" />
            <span className="font-display text-2xl text-[#D4AF37]/60 -mt-6">:</span>
            <FlipDigitCard value={timeLeft.hours} label="Hours" />
            <span className="font-display text-2xl text-[#D4AF37]/60 -mt-6">:</span>
            <FlipDigitCard value={timeLeft.minutes} label="Minutes" />
            <span className="font-display text-2xl text-[#D4AF37]/60 -mt-6">:</span>
            <FlipDigitCard value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-[#0B261F] border border-[#D4AF37]/40 shadow-lg">
            <p className="font-arabic text-2xl text-[#FFF3D1]">
              الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
            </p>
            <p className="font-display text-lg text-[#F5DE93] mt-2">
              The celebration has commenced. May Allah shower his endless blessings!
            </p>
          </div>
        )}

        <p className="font-ui text-xs text-[#A3B8B0] tracking-wider mt-6 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Sanjar Street, New Mohalat · Himatnagar, Gujarat</span>
        </p>
      </div>
    </section>
  );
};
