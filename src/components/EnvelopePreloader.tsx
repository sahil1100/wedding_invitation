import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MonogramRoundel, KhatimStar } from './ArabesqueIcons';
import { weddingAudio } from '../utils/audio';

interface EnvelopePreloaderProps {
  onOpened: () => void;
  isOpen: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  size: number;
}

export const EnvelopePreloader: React.FC<EnvelopePreloaderProps> = ({ onOpened, isOpen }) => {
  const [opening, setOpening] = useState(false);
  const [sealCracked, setSealCracked] = useState(false);
  const [cardRevealed, setCardRevealed] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleOpen = () => {
    if (opening || isOpen) return;
    setOpening(true);
    setSealCracked(true);

    // Play tactile wax crack & harmonic chime immediately
    weddingAudio.playSealCrackSound();

    // Generate burst particles from the seal center
    const newParticles: Particle[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      angle: (i * (360 / 18) * Math.PI) / 180,
      distance: 40 + Math.random() * 80,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);

    // Sequence:
    // 1. Seal cracks & particles burst (0ms)
    // 2. Flap unfolds in 3D (300ms)
    // 3. Card emerges from pocket (600ms)
    // 4. Smooth curtain wipe into main invitation (2000ms)
    setTimeout(() => {
      setCardRevealed(true);
    }, 450);

    setTimeout(() => {
      onOpened();
    }, 2100);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          id="envelope-preloader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF6F0] p-4 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(6px)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* 1. Soft Warm Linen / Candlelit Ambient Glow Backdrop */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,253,249,0.95)_0%,rgba(245,239,235,0.92)_50%,rgba(236,228,216,0.98)_100%)]" />

          {/* 2. Floating Gentle Golden Stardust */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-tr from-[#C5A869] to-[#EADBBA]"
                style={{
                  width: `${(i % 3) + 2}px`,
                  height: `${(i % 3) + 2}px`,
                  left: `${(i * 7 + 12) % 94}%`,
                  top: `${(i * 11 + 8) % 90}%`,
                }}
                animate={{
                  y: [-12, -35, -12],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + (i % 3) * 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.35,
                }}
              />
            ))}
          </div>

          {/* Film Grain Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none film-grain opacity-20" />

          {/* 3. Main Center Stage (Preloader Card & Envelope) */}
          <div className="relative w-full max-w-[390px] sm:max-w-[430px] flex flex-col items-center justify-center">
            {/* Header: Sacred Bismillah & Royal Proclamation */}
            <motion.div
              className="text-center mb-5 sm:mb-6 z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
                <span className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#8C6E36] font-medium">
                  A Sacred Union
                </span>
                <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
              </div>

              {/* Bismillah Calligraphy */}
              <h1
                dir="rtl"
                lang="ar"
                className="font-arabic text-2xl sm:text-3xl text-[#2B2118] leading-relaxed drop-shadow-[0_1px_4px_rgba(184,151,88,0.15)] my-1"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </h1>

              {/* Couple's Names */}
              <p className="font-display text-2xl sm:text-3xl text-[#2B2118] font-light tracking-wide mt-1">
                Mo Sahil &amp; Siddiqa
              </p>
              <p className="font-ui text-xs text-[#6B5D52] tracking-wider mt-0.5 font-light">
                Solemnization of Nikah · November 2026
              </p>
            </motion.div>

            {/* 4. THE BESPOKE WARM SAND & OAT ENVELOPE */}
            <div className="relative w-[330px] sm:w-[380px] h-[230px] sm:h-[260px] perspective-1200 flex items-center justify-center">
              {/* Back Envelope Wall with Arabesque Foil Lining */}
              <div className="absolute inset-0 rounded-2xl bg-[#EFE6D8] border-2 border-[#C5A869]/40 shadow-[0_20px_50px_rgba(74,62,52,0.12)] overflow-hidden">
                {/* Ornate Gold Damascus Girih Pattern on Envelope Interior */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="envLining" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path
                        d="M 16 0 L 32 16 L 16 32 L 0 16 Z"
                        fill="none"
                        stroke="#8C6E36"
                        strokeWidth="0.75"
                      />
                      <circle cx="16" cy="16" r="3" fill="#B89758" />
                      <circle cx="0" cy="0" r="2" fill="#B89758" />
                      <circle cx="32" cy="0" r="2" fill="#B89758" />
                      <circle cx="0" cy="32" r="2" fill="#B89758" />
                      <circle cx="32" cy="32" r="2" fill="#B89758" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#envLining)" />
                </svg>
                {/* Interior Depth Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E4D8C6]/50 to-[#DFD2BE]" />
              </div>

              {/* Emerging Wedding Invitation Letter (Deep Inside Pocket -> Glides Upwards on Open) */}
              <motion.div
                className="absolute w-[90%] sm:w-[92%] h-[90%] bg-[#FDFBF7] rounded-xl p-4 sm:p-5 shadow-xl flex flex-col items-center justify-between border border-[#D8CBB6] text-center z-10"
                style={{
                  boxShadow: '0 10px 30px rgba(74,62,52,0.12), 0 0 15px rgba(197,168,105,0.15)',
                }}
                initial={{ y: 8, scale: 0.96 }}
                animate={
                  cardRevealed
                    ? { y: -125, scale: 1.02, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
                    : { y: 8, scale: 0.96 }
                }
              >
                {/* Gilded Inner Card Frame */}
                <div className="w-full h-full border border-[#D8CBB6] rounded-lg p-2 flex flex-col items-center justify-between relative bg-[#FDFBF7]">
                  {/* Top Bismillah */}
                  <div>
                    <span className="font-arabic text-sm text-[#2B2118] block font-medium">بِسْمِ اللَّهِ</span>
                    <span className="font-ui text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#8C6E36] font-semibold block mt-0.5">
                      Solemnization of Nikah
                    </span>
                  </div>

                  {/* Names of Groom & Bride - Single Line Guaranteed */}
                  <div className="my-auto py-1">
                    <p className="font-display text-base sm:text-lg text-[#2B2118] font-medium leading-tight whitespace-nowrap">
                      Mo Sahil Doi
                    </p>
                    <p className="font-display italic text-xs text-[#8C6E36] my-0.5">&amp;</p>
                    <p className="font-display text-base sm:text-lg text-[#2B2118] font-medium leading-tight whitespace-nowrap">
                      Siddiqa Panchbhaiya
                    </p>
                  </div>

                  {/* Dates & Dua */}
                  <div className="border-t border-[#E8DFC8] pt-1 w-full">
                    <p className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#5C4E43] font-medium">
                      Insha Allah · 12–14 November 2026
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Front Envelope Pocket (Covers the bottom 65% of the envelope, concealing the card completely!) */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none z-20 overflow-hidden flex flex-col justify-end">
                {/* Warm Sand Pocket Geometry */}
                <svg
                  className="w-full h-full"
                  viewBox="0 0 380 260"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="pocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EFE6D8" />
                      <stop offset="60%" stopColor="#E6DCCE" />
                      <stop offset="100%" stopColor="#DFD2BF" />
                    </linearGradient>
                    <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7A5F28" />
                      <stop offset="25%" stopColor="#D4BC8B" />
                      <stop offset="50%" stopColor="#B89758" />
                      <stop offset="75%" stopColor="#D4BC8B" />
                      <stop offset="100%" stopColor="#7A5F28" />
                    </linearGradient>
                  </defs>

                  {/* Left Diagonal Pocket Fold */}
                  <polygon
                    points="0,0 190,140 0,260"
                    fill="#E8DEC8"
                    stroke="#C5A869"
                    strokeWidth="0.75"
                    strokeOpacity="0.35"
                  />

                  {/* Right Diagonal Pocket Fold */}
                  <polygon
                    points="380,0 190,140 380,260"
                    fill="#E8DEC8"
                    stroke="#C5A869"
                    strokeWidth="0.75"
                    strokeOpacity="0.35"
                  />

                  {/* Bottom Folding Pocket Body */}
                  <polygon
                    points="0,260 190,125 380,260"
                    fill="url(#pocketGrad)"
                    stroke="#C5A869"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                  />

                  {/* Gold Thread Embroidered Stitching on Bottom Pocket */}
                  <polygon
                    points="15,250 190,135 365,250"
                    fill="none"
                    stroke="#8C6E36"
                    strokeWidth="0.6"
                    strokeDasharray="4 3"
                    strokeOpacity="0.4"
                  />

                  {/* Horizontal Matte Champagne Gold Ribbon Band */}
                  <rect
                    x="0"
                    y="125"
                    width="380"
                    height="14"
                    fill="url(#goldRibbon)"
                    opacity="0.8"
                  />
                  <line
                    x1="0"
                    y1="125"
                    x2="380"
                    y2="125"
                    stroke="#6B5322"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                  <line
                    x1="0"
                    y1="139"
                    x2="380"
                    y2="139"
                    stroke="#6B5322"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* 3D Top Folding Arch Flap (Flips back 180° upon opening) */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[145px] sm:h-[160px] origin-top transform-style-3d z-30 pointer-events-none"
                initial={{ rotateX: 0 }}
                animate={
                  opening
                    ? {
                        rotateX: 180,
                        zIndex: 5,
                        transition: { duration: 0.95, ease: [0.65, 0, 0.35, 1], delay: 0.1 },
                      }
                    : { rotateX: 0 }
                }
              >
                {/* Front-Facing Sand Flap with Gold Trim (Visible when closed) */}
                <svg
                  className="w-full h-full drop-shadow-md"
                  viewBox="0 0 380 150"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5ECE0" />
                      <stop offset="100%" stopColor="#E6DCCE" />
                    </linearGradient>
                  </defs>

                  {/* Mihrab Pointed Flap Polygon */}
                  <polygon
                    points="0,0 380,0 190,148"
                    fill="url(#flapGrad)"
                    stroke="#C5A869"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                  />

                  {/* Inner Dotted Gold Foil Embroidery */}
                  <polygon
                    points="12,4 368,4 190,136"
                    fill="none"
                    stroke="#8C6E36"
                    strokeWidth="0.75"
                    strokeDasharray="4 3"
                    strokeOpacity="0.4"
                  />

                  {/* Delicate Arch Filigree at Flap Tip */}
                  <g transform="translate(190, 115) scale(0.6)">
                    <circle cx="0" cy="0" r="8" fill="none" stroke="#8C6E36" strokeWidth="1" opacity="0.6" />
                    <circle cx="0" cy="0" r="3" fill="#B89758" opacity="0.7" />
                  </g>
                </svg>
              </motion.div>

              {/* Royal Wax Seal & Ribbon Clasp (Clickable Target) */}
              <div className="absolute top-[102px] sm:top-[115px] z-40 flex items-center justify-center">
                {/* Interactive Seal Button */}
                <motion.button
                  id="open-envelope-seal"
                  type="button"
                  onClick={handleOpen}
                  disabled={opening}
                  className="relative cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#B89758]/50 rounded-full p-2"
                  initial={{ scale: 1 }}
                  animate={
                    sealCracked
                      ? {
                          scale: [1, 1.25, 0.4],
                          opacity: [1, 1, 0],
                          filter: 'brightness(1.5)',
                          transition: { duration: 0.55, ease: 'easeOut' },
                        }
                      : {
                          scale: [1, 1.03, 1],
                          transition: { repeat: Infinity, duration: 3.0, ease: 'easeInOut' },
                        }
                  }
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  aria-label="Break the royal seal to open wedding invitation"
                >
                  {/* Subtle Soft Glow */}
                  <div className="absolute inset-0 rounded-full bg-[#B89758]/20 blur-md group-hover:bg-[#B89758]/35 transition-all duration-300" />

                  {/* 3D Sculpted Antique Gold Wax Seal */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#D8C292] via-[#B89758] to-[#6E5322] p-1 shadow-[0_8px_20px_rgba(74,62,52,0.25),0_0_15px_rgba(184,151,88,0.3)] flex items-center justify-center border border-[#EADBBA]">
                    {/* Organic Scalloped Wax Melt Contour */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#543E15]/30 opacity-50" />

                    {/* Inner Beaded Ring */}
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#7A5F28] via-[#B89758] to-[#EADBBA] flex items-center justify-center shadow-inner relative overflow-hidden">
                      {/* Monogram Roundel with Interlocking "S & S" */}
                      <MonogramRoundel size={68} className="w-16 h-16 sm:w-18 sm:h-18" />

                      {/* Golden Fracture Lines when Cracked */}
                      {sealCracked && (
                        <motion.svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.25 }}
                        >
                          <line x1="20" y1="15" x2="75" y2="80" stroke="#FFF" strokeWidth="3" />
                          <line x1="75" y1="25" x2="25" y2="75" stroke="#FFF" strokeWidth="2.5" />
                        </motion.svg>
                      )}
                    </div>
                  </div>

                  {/* Radiating Spark Particles upon Break */}
                  {sealCracked &&
                    particles.map((p) => {
                      const targetX = Math.cos(p.angle) * p.distance;
                      const targetY = Math.sin(p.angle) * p.distance;
                      return (
                        <motion.span
                          key={p.id}
                          className="absolute top-1/2 left-1/2 rounded-full bg-[#D4BC8B] pointer-events-none"
                          style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            boxShadow: '0 0 6px #B89758',
                          }}
                          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                          animate={{ x: targetX, y: targetY, opacity: 0, scale: 0 }}
                          transition={{ duration: 0.65, ease: 'easeOut' }}
                        />
                      );
                    })}
                </motion.button>
              </div>
            </div>

            {/* 5. Elegant Call-To-Action Pill & Audio Guidance */}
            <motion.div
              className="text-center mt-7 sm:mt-8 z-20"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <button
                type="button"
                onClick={handleOpen}
                disabled={opening}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#EDE4D4] hover:bg-[#E5DBC9] border border-[#B89758]/50 text-[#2B2118] font-ui text-xs sm:text-sm tracking-[0.25em] uppercase shadow-[0_4px_20px_rgba(74,62,52,0.08)] hover:shadow-[0_6px_25px_rgba(184,151,88,0.25)] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#B89758] animate-pulse" />
                <span className="font-medium text-[#2B2118] transition-colors">
                  Break Royal Seal &amp; Enter
                </span>
                <span className="text-[#8C6E36] text-base group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>

              <p className="font-ui text-[10px] sm:text-[11px] text-[#6B5D52] mt-3 tracking-wider font-light">
                Insha Allah · 12–14 November 2026 · Himatnagar
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
