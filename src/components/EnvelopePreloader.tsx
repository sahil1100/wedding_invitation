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

    // Play tactile wax crack sound & acoustic chime
    weddingAudio.playSealCrackSound();

    // Generate burst particles from the seal center
    const newParticles: Particle[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      angle: (i * (360 / 24) * Math.PI) / 180,
      distance: 40 + Math.random() * 80,
      size: 2.5 + Math.random() * 4,
    }));
    setParticles(newParticles);

    // Sequence:
    // 1. Seal cracks & particles burst (0ms)
    // 2. Flap unfolds in 3D (350ms)
    // 3. Card emerges gracefully from pocket (450ms)
    // 4. Smooth curtain wipe into main invitation (2200ms)
    setTimeout(() => {
      setCardRevealed(true);
    }, 400);

    setTimeout(() => {
      onOpened();
    }, 2200);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          id="envelope-preloader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#051410] p-4 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(8px)',
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* 1. Deep Imperial Velvet Emerald Atmosphere with Golden Radial Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(15,51,41,0.85)_0%,rgba(6,24,19,0.95)_55%,rgba(3,12,9,1)_100%)]" />

          {/* 2. Floating Luminous Gold Dust Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FFF3D1]"
                style={{
                  width: `${(i % 3) + 2}px`,
                  height: `${(i % 3) + 2}px`,
                  left: `${(i * 7 + 9) % 94}%`,
                  top: `${(i * 11 + 6) % 92}%`,
                  boxShadow: '0 0 8px rgba(212,175,55,0.6)',
                }}
                animate={{
                  y: [-15, -45, -15],
                  opacity: [0.25, 0.85, 0.25],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 4 + (i % 3) * 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Film Grain Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none film-grain opacity-25" />

          {/* 3. Main Center Stage (Envelope & Card Container) */}
          <div className="relative w-full max-w-[390px] sm:max-w-[440px] flex flex-col items-center justify-center">
            {/* Top Proclamation Header: Clean & minimal without duplicate name/Bismillah so it NEVER collides */}
            <motion.div
              className="text-center mb-8 sm:mb-10 z-20"
              initial={{ opacity: 0, y: -15 }}
              animate={{
                opacity: opening ? 0 : 1,
                y: opening ? -25 : 0,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <KhatimStar className="w-3.5 h-3.5 text-[#D4AF37]" stroke="#D4AF37" />
                <span className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-[#F5DE93] font-medium">
                  Boy's Side Wedding Invitation
                </span>
                <KhatimStar className="w-3.5 h-3.5 text-[#D4AF37]" stroke="#D4AF37" />
              </div>

              <p className="font-display text-xl sm:text-2xl text-[#FFF3D1] font-light tracking-wider">
                The Doi Family
              </p>
              <p className="font-ui text-[11px] text-[#A3B8B0] tracking-widest uppercase mt-0.5 font-light">
                Himatnagar, Gujarat
              </p>
            </motion.div>

            {/* 4. THE BESPOKE ROYAL EMERALD & GILDED GOLD ENVELOPE */}
            <div className="relative w-[330px] sm:w-[380px] h-[230px] sm:h-[260px] perspective-1200 flex items-center justify-center">
              {/* Back Envelope Wall with Gold Lattice Lining */}
              <div className="absolute inset-0 rounded-2xl bg-[#08211A] border-2 border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.15)] overflow-hidden">
                {/* Ornate Gold Pattern on Envelope Interior */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="envLining" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path
                        d="M 16 0 L 32 16 L 16 32 L 0 16 Z"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="0.8"
                      />
                      <circle cx="16" cy="16" r="3" fill="#D4AF37" />
                      <circle cx="0" cy="0" r="2" fill="#D4AF37" />
                      <circle cx="32" cy="0" r="2" fill="#D4AF37" />
                      <circle cx="0" cy="32" r="2" fill="#D4AF37" />
                      <circle cx="32" cy="32" r="2" fill="#D4AF37" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#envLining)" />
                </svg>
                {/* Interior Velvet Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#061813]/60 to-[#030D0A]" />
              </div>

              {/* Emerging Wedding Invitation Letter (Glides Upwards on Open gracefully) */}
              <motion.div
                className="absolute w-[90%] sm:w-[92%] h-[88%] bg-[#0A261F] rounded-xl p-4 sm:p-5 shadow-2xl flex flex-col items-center justify-between border border-[#D4AF37]/60 text-center z-10"
                style={{
                  boxShadow: '0 15px 40px rgba(0,0,0,0.7), 0 0 25px rgba(212,175,55,0.25)',
                }}
                initial={{ y: 15, scale: 0.95 }}
                animate={
                  cardRevealed
                    ? { y: -80, scale: 1.02, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
                    : { y: 15, scale: 0.95 }
                }
              >
                {/* Gilded Inner Card Frame */}
                <div className="w-full h-full border border-[#D4AF37]/40 rounded-lg p-3 flex flex-col items-center justify-between relative bg-gradient-to-b from-[#0F3329] to-[#071C15]">
                  {/* Top Bismillah */}
                  <div>
                    <span className="font-arabic text-base sm:text-lg text-[#FFF3D1] block font-medium">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                    <span className="font-ui text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#E5C058] font-semibold block mt-0.5">
                      Dawat-e-Khas · The Doi Family
                    </span>
                  </div>

                  {/* Groom's Prominence */}
                  <div className="my-auto py-1">
                    <p className="font-display text-xl sm:text-2xl gold-foil-text font-normal leading-tight whitespace-nowrap">
                      Mo Sahil Doi
                    </p>
                    <p className="font-display italic text-xs text-[#E5C058] my-0.5">&amp; Siddiqa</p>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#144234] border border-[#D4AF37]/40 text-[9px] text-[#F5DE93] uppercase tracking-wider mt-1">
                      Friends Gathering &amp; Nikah
                    </span>
                  </div>

                  {/* Dates & Location */}
                  <div className="border-t border-[#D4AF37]/30 pt-1.5 w-full">
                    <p className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
                      2, 3, 9 &amp; 14 November 2026
                    </p>
                    <p className="font-ui text-[8px] text-[#A3B8B0] tracking-wider mt-0.5">
                      Sanjar Street, New Mohalat · Himatnagar
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Front Envelope Pocket (Covers bottom of the envelope) */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none z-20 overflow-hidden flex flex-col justify-end">
                {/* Royal Emerald Pocket Geometry */}
                <svg
                  className="w-full h-full"
                  viewBox="0 0 380 260"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="pocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0E3328" />
                      <stop offset="60%" stopColor="#0B2820" />
                      <stop offset="100%" stopColor="#061A14" />
                    </linearGradient>
                    <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9A751F" />
                      <stop offset="25%" stopColor="#F5DE93" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="75%" stopColor="#F5DE93" />
                      <stop offset="100%" stopColor="#9A751F" />
                    </linearGradient>
                  </defs>

                  {/* Left Diagonal Pocket Fold */}
                  <polygon
                    points="0,0 190,140 0,260"
                    fill="#0A271E"
                    stroke="#D4AF37"
                    strokeWidth="0.75"
                    strokeOpacity="0.4"
                  />

                  {/* Right Diagonal Pocket Fold */}
                  <polygon
                    points="380,0 190,140 380,260"
                    fill="#0A271E"
                    stroke="#D4AF37"
                    strokeWidth="0.75"
                    strokeOpacity="0.4"
                  />

                  {/* Bottom Folding Pocket Body */}
                  <polygon
                    points="0,260 190,125 380,260"
                    fill="url(#pocketGrad)"
                    stroke="#D4AF37"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                  />

                  {/* Gold Thread Embroidered Stitching on Bottom Pocket */}
                  <polygon
                    points="15,250 190,135 365,250"
                    fill="none"
                    stroke="#F5DE93"
                    strokeWidth="0.7"
                    strokeDasharray="4 3"
                    strokeOpacity="0.5"
                  />

                  {/* Horizontal Royal Gold Ribbon Band */}
                  <rect
                    x="0"
                    y="125"
                    width="380"
                    height="14"
                    fill="url(#goldRibbon)"
                    opacity="0.9"
                  />
                  <line
                    x1="0"
                    y1="125"
                    x2="380"
                    y2="125"
                    stroke="#6B5322"
                    strokeWidth="0.6"
                    opacity="0.6"
                  />
                  <line
                    x1="0"
                    y1="139"
                    x2="380"
                    y2="139"
                    stroke="#6B5322"
                    strokeWidth="0.6"
                    opacity="0.6"
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
                {/* Front-Facing Emerald Flap with Gold Trim */}
                <svg
                  className="w-full h-full drop-shadow-xl"
                  viewBox="0 0 380 150"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#144234" />
                      <stop offset="100%" stopColor="#0B2A21" />
                    </linearGradient>
                  </defs>

                  {/* Mihrab Pointed Flap Polygon */}
                  <polygon
                    points="0,0 380,0 190,148"
                    fill="url(#flapGrad)"
                    stroke="#D4AF37"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                  />

                  {/* Inner Dotted Gold Foil Embroidery */}
                  <polygon
                    points="12,4 368,4 190,136"
                    fill="none"
                    stroke="#F5DE93"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                    strokeOpacity="0.5"
                  />

                  {/* Delicate Arch Filigree at Flap Tip */}
                  <g transform="translate(190, 115) scale(0.65)">
                    <circle cx="0" cy="0" r="8" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.8" />
                    <circle cx="0" cy="0" r="3" fill="#F5DE93" opacity="0.9" />
                  </g>
                </svg>
              </motion.div>

              {/* Royal Wax Seal & Monogram Clasp (Clickable Target) */}
              <div className="absolute top-[102px] sm:top-[115px] z-40 flex items-center justify-center">
                {/* Interactive Seal Button */}
                <motion.button
                  id="open-envelope-seal"
                  type="button"
                  onClick={handleOpen}
                  disabled={opening}
                  className="relative cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37]/50 rounded-full p-2"
                  initial={{ scale: 1 }}
                  animate={
                    sealCracked
                      ? {
                          scale: [1, 1.3, 0.4],
                          opacity: [1, 1, 0],
                          filter: 'brightness(1.6)',
                          transition: { duration: 0.55, ease: 'easeOut' },
                        }
                      : {
                          scale: [1, 1.04, 1],
                          transition: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' },
                        }
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Break the royal wax seal to open boy's side wedding invitation"
                >
                  {/* Radiant Gold Halo */}
                  <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 blur-lg group-hover:bg-[#D4AF37]/50 transition-all duration-300" />

                  {/* 3D Sculpted Antique Gold Wax Seal */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#FFF3D1] via-[#D4AF37] to-[#7A5A18] p-1.5 shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_20px_rgba(212,175,55,0.45)] flex items-center justify-center border border-[#FFF3D1]/80">
                    {/* Organic Scalloped Wax Melt Contour */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#543E15]/40 opacity-60" />

                    {/* Inner Beaded Ring */}
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#8E6C1D] via-[#D4AF37] to-[#FFF3D1] flex items-center justify-center shadow-inner relative overflow-hidden">
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
                          className="absolute top-1/2 left-1/2 rounded-full bg-[#FFF3D1] pointer-events-none"
                          style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            boxShadow: '0 0 10px #D4AF37',
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

            {/* 5. Call-To-Action Button below envelope */}
            <motion.div
              className="text-center mt-7 sm:mt-8 z-20"
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: opening ? 0 : 1,
                y: opening ? 20 : 0,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <button
                type="button"
                onClick={handleOpen}
                disabled={opening}
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0F352A] via-[#144234] to-[#0F352A] hover:from-[#144234] hover:to-[#195240] border border-[#D4AF37]/70 text-[#FFF3D1] font-ui text-xs sm:text-sm tracking-[0.25em] uppercase shadow-[0_6px_25px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-medium text-[#FFF3D1] transition-colors">
                  Break Royal Seal &amp; Enter
                </span>
                <span className="text-[#D4AF37] text-base group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>

              <p className="font-ui text-[10px] sm:text-[11px] text-[#A3B8B0] mt-3 tracking-wider font-light">
                Insha Allah · 2, 3 &amp; 9 November 2026 · Himatnagar
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
