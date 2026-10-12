import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';

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
      <div className="relative w-15 sm:w-18 h-16 sm:h-20 perspective-1000">
        <div className="w-full h-full rounded-xl bg-[#FDFBF7] border border-[#E6DCCE] shadow-[0_4px_16px_rgba(74,62,52,0.06)] flex items-center justify-center overflow-hidden">
          {/* Subtle horizontal card split line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-[#E8DEC8] z-10 opacity-70" />
          {/* Subtle ambient shine */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#B89758]/5 to-transparent pointer-events-none" />

          {/* Animated Value with 3D Flip Rotation */}
          <AnimatePresence mode="popLayout">
            <motion.span
              key={displayVal}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl sm:text-3xl text-[#2B2118] font-normal tracking-wide select-none"
            >
              {displayVal}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Unit Sub-Label */}
      <span className="font-ui text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#6B5D52] mt-1.5 font-medium">
        {label}
      </span>
    </div>
  );
};

export const CountdownSection: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(CONFIG.nikahDateIso).getTime();
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="relative py-5 sm:py-6 px-4 sm:px-6 text-center overflow-hidden">
      <div className="relative max-w-[480px] mx-auto z-10">
        {/* Insha Allah Label */}
        <motion.div
          className="mb-1.5 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
          <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#8C6E36] font-medium">
            Insha Allah · Counting Down
          </span>
          <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
        </motion.div>

        <h2 className="font-display text-xl sm:text-2xl text-[#2B2118] font-normal mb-3.5">
          {timeLeft.isPast
            ? "Alhamdulillah — The Auspicious Day is Here"
            : "Until We Solemnize the Nikah"}
        </h2>

        {/* The 4 Digits Columns */}
        {!timeLeft.isPast ? (
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <FlipDigitCard value={timeLeft.days} label="Days" />
            <span className="font-display text-2xl text-[#8C6E36]/40 -mt-6">:</span>
            <FlipDigitCard value={timeLeft.hours} label="Hours" />
            <span className="font-display text-2xl text-[#8C6E36]/40 -mt-6">:</span>
            <FlipDigitCard value={timeLeft.minutes} label="Minutes" />
            <span className="font-display text-2xl text-[#8C6E36]/40 -mt-6">:</span>
            <FlipDigitCard value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#E6DCCE] shadow-md">
            <p className="font-arabic text-2xl text-[#2B2118]">
              الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
            </p>
            <p className="font-display text-lg text-[#5C4E43] mt-2">
              The wedding celebration has commenced. May Allah shower his blessings.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
