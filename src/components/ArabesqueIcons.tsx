import React from 'react';

/**
 * 8-Point Islamic Star (Khatim / Rub el Hizb)
 */
export function KhatimStar({
  className = "w-6 h-6",
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "1.5"
}: {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
      {/* Outer square */}
      <rect x="20" y="20" width="60" height="60" rx="2" transform="rotate(0 50 50)" />
      {/* Rotated 45 deg square */}
      <rect x="20" y="20" width="60" height="60" rx="2" transform="rotate(45 50 50)" />
      {/* Inner sacred circle */}
      <circle cx="50" cy="50" r="14" />
      <circle cx="50" cy="50" r="4" fill={stroke} />
    </svg>
  );
}

/**
 * Interlocking "S & S" Monogram in Gold Arabesque Roundel
 */
export function MonogramRoundel({
  className = "w-28 h-28",
  size = 140,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`${className} overflow-visible`}
      fill="none"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A6D33" />
          <stop offset="35%" stopColor="#D4BC8B" />
          <stop offset="70%" stopColor="#B89758" />
          <stop offset="100%" stopColor="#6E5322" />
        </linearGradient>
        <filter id="goldShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#B89758" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Outer decorative girih ring with 16 cusps */}
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        opacity="0.8"
      />
      <circle
        cx="100"
        cy="100"
        r="86"
        stroke="url(#goldGradient)"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="url(#goldGradient)"
        strokeWidth="0.75"
        strokeDasharray="1 3"
      />

      {/* 8-point geometry star points */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
        <g key={idx} transform={`rotate(${angle} 100 100)`}>
          <polygon
            points="100,12 103,19 97,19"
            fill="url(#goldGradient)"
          />
          <circle cx="100" cy="24" r="1.5" fill="url(#goldGradient)" />
        </g>
      ))}

      {/* Inner filigree arch border */}
      <circle
        cx="100"
        cy="100"
        r="68"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Central Interlocking S & S Monogram with Ampersand ligature */}
      <g filter="url(#goldShadow)">
        {/* First S (Sahil) */}
        <path
          d="M74,72 C74,62 84,56 94,56 C104,56 112,61 112,70 C112,82 86,88 86,104 C86,116 97,122 108,122 C118,122 126,116 128,106"
          stroke="url(#goldGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Second interlocking S (Siddiqa) mirrored/entwined */}
        <path
          d="M124,128 C124,138 114,144 104,144 C94,144 86,139 86,130 C86,118 112,112 112,96 C112,84 101,78 90,78 C80,78 72,84 70,94"
          stroke="url(#goldGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small subtle central heart ligature knot */}
        <circle cx="99" cy="100" r="3.5" fill="url(#goldGradient)" />
      </g>
    </svg>
  );
}

/**
 * Ornate Hand-Drawn Mihrab Arch Frame (Mosque Arch)
 */
export function MihrabArchFrame({
  className = "w-full h-full",
  stroke = "url(#goldGradient)",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 300 420" className={className} fill="none">
      <defs>
        <linearGradient id="mihrabGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A6D33" />
          <stop offset="40%" stopColor="#D4BC8B" />
          <stop offset="70%" stopColor="#B89758" />
          <stop offset="100%" stopColor="#6E5322" />
        </linearGradient>
      </defs>
      {/* Outer pointed arch */}
      <path
        d="M 20,400 
           L 20,180 
           C 20,130 50,85 100,50 
           C 125,32 142,15 150,5 
           C 158,15 175,32 200,50 
           C 250,85 280,130 280,180 
           L 280,400 Z"
        stroke={stroke || "url(#mihrabGold)"}
        strokeWidth="2"
      />
      {/* Inner echo arch */}
      <path
        d="M 28,396 
           L 28,183 
           C 28,136 56,93 103,60 
           C 126,43 143,26 150,17 
           C 157,26 174,43 197,60 
           C 244,93 272,136 272,183 
           L 272,396 Z"
        stroke={stroke || "url(#mihrabGold)"}
        strokeWidth="0.8"
        strokeDasharray="4 3"
        opacity="0.7"
      />
      {/* Top finial ornament */}
      <circle cx="150" cy="5" r="3" fill="#F2DA8B" />
    </svg>
  );
}

/**
 * Hand-Drawn Arabesque Horizontal Divider
 */
export function ArabesqueDivider({
  className = "w-48 h-6 mx-auto",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 240 30" className={className} fill="none">
      <defs>
        <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8A6A12" stopOpacity="0" />
          <stop offset="30%" stopColor="#C9A227" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#F2DA8B" stopOpacity="1" />
          <stop offset="70%" stopColor="#C9A227" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8A6A12" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="10" y1="15" x2="90" y2="15" stroke="url(#divGold)" strokeWidth="1" />
      <line x1="150" y1="15" x2="230" y2="15" stroke="url(#divGold)" strokeWidth="1" />
      {/* Central 8-pointed star motif */}
      <rect x="114" y="9" width="12" height="12" rx="1" stroke="url(#divGold)" strokeWidth="1.2" transform="rotate(0 120 15)" />
      <rect x="114" y="9" width="12" height="12" rx="1" stroke="url(#divGold)" strokeWidth="1.2" transform="rotate(45 120 15)" />
      <circle cx="120" cy="15" r="2" fill="#F2DA8B" />
      {/* Flanking leaf curls */}
      <path d="M 96,15 C 102,11 106,12 109,15 C 106,18 102,19 96,15 Z" fill="#C9A227" opacity="0.8" />
      <path d="M 144,15 C 138,11 134,12 131,15 C 134,18 138,19 144,15 Z" fill="#C9A227" opacity="0.8" />
    </svg>
  );
}

/**
 * Event Icon: Henna Mandala for Mehndi
 */
export function MehndiMandalaIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="32" cy="32" r="28" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="10" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      {/* Henna Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
        <path
          key={idx}
          d="M 32,12 C 35,18 35,22 32,22 C 29,22 29,18 32,12 Z"
          transform={`rotate(${angle} 32 32)`}
          fill="currentColor"
          opacity="0.75"
        />
      ))}
    </svg>
  );
}

/**
 * Event Icon: Mosque Minaret & Dome for Nikah
 */
export function MosqueDomeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Central Dome with Ogee arch */}
      <path
        d="M 20,44 L 20,34 C 20,26 26,18 32,14 C 38,18 44,26 44,34 L 44,44 Z"
        strokeLinejoin="round"
      />
      {/* Arch Doorway */}
      <path d="M 27,44 L 27,35 C 27,31 29,29 32,27 C 35,29 37,31 37,35 L 37,44" />
      {/* Crescent atop dome */}
      <path d="M 32,8 L 32,14" />
      <circle cx="32" cy="7" r="2.5" />
      {/* Left & Right Minarets */}
      <line x1="12" y1="44" x2="12" y2="20" />
      <path d="M 10,20 L 14,20 L 12,15 Z" />
      <line x1="52" y1="44" x2="52" y2="20" />
      <path d="M 50,20 L 54,20 L 52,15 Z" />
      {/* Base Line */}
      <line x1="6" y1="44" x2="58" y2="44" strokeWidth="2" />
    </svg>
  );
}

/**
 * Event Icon: Engagement Rings / Sacred Knot
 */
export function EngagementRingsIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Interlocking Sacred Rings */}
      <circle cx="26" cy="34" r="14" strokeWidth="2" />
      <circle cx="38" cy="34" r="14" strokeWidth="2" />
      {/* Solitaire diamond / star crest atop groom/bride ring */}
      <path d="M 26,20 L 29,15 L 26,11 L 23,15 Z" fill="currentColor" />
      <circle cx="26" cy="15" r="1.5" fill="#FAF6F0" />
      <path d="M 38,20 L 41,16 L 38,13 L 35,16 Z" fill="currentColor" opacity="0.8" />
      {/* Subtle sparkle accents */}
      <circle cx="16" cy="22" r="1" fill="currentColor" />
      <circle cx="48" cy="22" r="1" fill="currentColor" />
      <circle cx="32" cy="48" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Event Icon: Festive Lantern for Walima
 */
export function FestiveLanternIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Hanging Chain & Loop */}
      <line x1="32" y1="4" x2="32" y2="12" />
      <circle cx="32" cy="14" r="3" />
      {/* Top Cap */}
      <path d="M 24,20 L 40,20 L 37,17 L 27,17 Z" fill="currentColor" opacity="0.6" />
      {/* Lantern Glass Body */}
      <path d="M 22,20 L 18,36 L 24,46 L 40,46 L 46,36 L 42,20 Z" />
      {/* Inner Flame */}
      <path d="M 32,32 C 34,35 34,38 32,40 C 30,38 30,35 32,32 Z" fill="currentColor" />
      {/* Base Pedestal */}
      <path d="M 25,46 L 39,46 L 37,50 L 27,50 Z" fill="currentColor" opacity="0.6" />
      <circle cx="32" cy="54" r="2" fill="currentColor" />
    </svg>
  );
}
