import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar, MonogramRoundel, ArabesqueDivider } from './ArabesqueIcons';
import { ChevronDown, MapPin, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Canvas Drifting Luminous Gold Dust Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      alpha: number;
      alphaSpeed: number;
      color: string;
    }

    const goldColors = ['#D4AF37', '#F5DE93', '#E5C058', '#FFF3D1', '#C49B30'];
    const particlesCount = 36;
    const particles: Particle[] = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        speedY: -(Math.random() * 0.38 + 0.12),
        speedX: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.7 + 0.2,
        alphaSpeed: (Math.random() * 0.009 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += p.alphaSpeed;

        if (p.alpha > 0.9 || p.alpha < 0.15) {
          p.alphaSpeed = -p.alphaSpeed;
        }
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden text-center"
    >
      {/* Deep Royal Velvet Emerald Atmospheric Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-15 filter blur-sm"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop")',
          }}
          animate={{ scale: [1, 1.05, 1], x: [0, -4, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Deep emerald gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030E0A] via-[#08221B]/95 to-[#04120D]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(21,70,56,0.35)_0%,rgba(3,14,10,0.95)_80%)]" />
      </div>

      {/* Drifting Gold Dust Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Main Arch-Framed Container - Royal Emerald & Gilded Card */}
      <div className="relative z-20 w-full max-w-[480px] mx-auto flex flex-col items-center justify-center px-4 py-8 sm:p-8 bg-[#09241C]/90 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(212,175,55,0.18)] border border-[#D4AF37]/35">
        {/* SVG Arabesque Frame with 24K gold foil gradient */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 460 620"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroGoldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9A751F" />
              <stop offset="35%" stopColor="#F5DE93" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8E6C1D" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 25,60 
               C 25,35 45,20 70,20 
               L 390,20 
               C 415,20 435,35 435,60 
               L 435,560 
               C 435,585 415,600 390,600 
               L 70,600 
               C 45,600 25,585 25,560 Z"
            fill="none"
            stroke="url(#heroGoldBorder)"
            strokeWidth="1.5"
            strokeDasharray="1800"
            initial={{ strokeDashoffset: 1800 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Inner fine accent line */}
          <motion.path
            d="M 32,65 
               L 428,65 
               L 428,555 
               L 32,555 Z"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.6"
            strokeDasharray="4 4"
            opacity="0.4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.2, duration: 1.0 }}
          />
        </svg>

        {/* Top Sacred Symbol & Monogram */}
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <MonogramRoundel size={76} className="w-18 h-18 sm:w-20 sm:h-20" />
        </motion.div>

        {/* 1. Bismillah Calligraphy (Radiant Gold) */}
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
        >
          <h1
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#FFF3D1] tracking-wide leading-relaxed drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
          >
            {CONFIG.islamicContent.bismillahArabic}
          </h1>
          <p className="font-display italic text-xs sm:text-sm text-[#F5DE93] mt-0.5 tracking-wider">
            {CONFIG.islamicContent.bismillahTransliteration}
          </p>
        </motion.div>

        {/* Boy's Side Royal Banner Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#113C2E]/80 border border-[#D4AF37]/40 shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <KhatimStar className="w-3.5 h-3.5 text-[#D4AF37]" stroke="#D4AF37" />
          <span className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#F5DE93] font-medium">
            Groom's Side Wedding Celebrations
          </span>
          <KhatimStar className="w-3.5 h-3.5 text-[#D4AF37]" stroke="#D4AF37" />
        </motion.div>

        {/* 2. Groom Spotlight & Couple Names */}
        <div className="my-2 sm:my-3 w-full px-2">
          {/* Groom's Name in Opulent Gold Foil */}
          <motion.h2
            className="font-display text-2xl sm:text-3xl md:text-4xl gold-foil-text font-normal tracking-[0.06em] leading-tight whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-md"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {CONFIG.couple.groom.fullName}
          </motion.h2>

          <p className="font-ui text-[11px] sm:text-xs text-[#A3B8B0] tracking-wider mt-0.5">
            Son of Mo Basit Doi &amp; Sayera Doi
          </p>

          {/* Gold Ampersand Ligature */}
          <motion.div
            className="my-1.5 flex items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.7 }}
          >
            <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="font-display italic text-lg sm:text-xl text-[#F5DE93] font-normal">
              &amp;
            </span>
            <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </motion.div>

          {/* Bride's Name */}
          <motion.h3
            className="font-display text-lg sm:text-2xl text-[#E8DFC8] font-light tracking-[0.04em] leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {CONFIG.couple.bride.fullName}
          </motion.h3>
        </div>

        <ArabesqueDivider className="w-44 h-5 my-2.5 opacity-80" />

        {/* 3. The Date & Venue Highlights */}
        <motion.div
          className="mt-1 space-y-1.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9 }}
        >
          {/* Highlight Badge for Friends Gathering Dates */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#144234]/90 border border-[#D4AF37]/50 text-[#FFF3D1] text-[11px] font-ui tracking-wider font-medium">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Friends Gathering: 2, 3 &amp; 9 Nov (9:00 PM onwards)</span>
          </div>

          <p className="font-display text-sm sm:text-base text-[#FAF7F0] tracking-wide mt-1">
            Solemnization of Auspicious Nikah: 14 November 2026
          </p>

          <div className="flex items-center justify-center gap-1.5 text-xs text-[#A3B8B0] tracking-wider pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Sanjar Street, New Mohalat · Himatnagar, Gujarat</span>
          </div>
        </motion.div>

        {/* Quick Action Button */}
        <motion.div
          className="mt-5 flex items-center justify-center w-full max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <a
            href="#timeline"
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C49B30] text-[#061813] font-ui text-xs font-semibold uppercase tracking-wider shadow-md hover:brightness-110 transition-all text-center"
          >
            Explore Gathering Schedule &amp; Venue
          </a>
        </motion.div>

        {/* Floating Scroll Cue */}
        <motion.a
          href="#announcement"
          className="mt-5 sm:mt-6 flex flex-col items-center gap-1 text-[#D4AF37] hover:text-[#FFF3D1] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{
            opacity: { delay: 2.4, duration: 0.8 },
            y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
          }}
          aria-label="Scroll to wedding announcement"
        >
          <span className="font-ui text-[9px] uppercase tracking-[0.25em]">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};
