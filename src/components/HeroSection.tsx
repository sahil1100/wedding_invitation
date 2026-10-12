import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar, MonogramRoundel, ArabesqueDivider } from './ArabesqueIcons';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Canvas Drifting Gold Dust Particles (<= 36 particles for 60fps mobile efficiency)
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

    const goldColors = ['#B89758', '#D4BC8B', '#A68546', '#C5A869', '#DFD2BF'];
    const particlesCount = 32;
    const particles: Particle[] = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.5,
        speedY: -(Math.random() * 0.35 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        alphaSpeed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += p.alphaSpeed;

        if (p.alpha > 0.85 || p.alpha < 0.15) {
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
        ctx.shadowBlur = 8;
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

  const groomLetters = CONFIG.couple.groom.fullName.split('');
  const brideLetters = CONFIG.couple.bride.fullName.split('');

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden text-center"
    >
      {/* Soft warm linen atmosphere with gentle champagne ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-10 filter blur-xs"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop")',
          }}
          animate={{ scale: [1, 1.05, 1], x: [0, -4, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Soft warm beige gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3EC] via-[#FAF7F2]/95 to-[#F5EFEB]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,188,139,0.22)_0%,rgba(247,243,236,0.92)_80%)]" />
      </div>

      {/* Drifting Gold Dust Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Main Arch-Framed Container - Soft Alabaster Ivory Card */}
      <div className="relative z-20 w-full max-w-[480px] mx-auto flex flex-col items-center justify-center px-4 py-8 sm:p-8 bg-[#FDFBF7]/95 backdrop-blur-md rounded-3xl shadow-[0_15px_50px_rgba(74,62,52,0.07),0_0_20px_rgba(184,151,88,0.1)] border border-[#E6DCCE]">
        {/* Hand-drawn SVG Arabesque Frame with antique champagne gold */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 460 620"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroGoldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A6D33" />
              <stop offset="35%" stopColor="#D4BC8B" />
              <stop offset="70%" stopColor="#B89758" />
              <stop offset="100%" stopColor="#6E5322" />
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
            strokeWidth="1.4"
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
            stroke="#C5A869"
            strokeWidth="0.6"
            strokeDasharray="4 4"
            opacity="0.35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
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

        {/* 1. Bismillah Calligraphy (Deep rich espresso) */}
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
        >
          <h1
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#2B2118] tracking-wide leading-relaxed drop-shadow-[0_1px_4px_rgba(184,151,88,0.15)]"
          >
            {CONFIG.islamicContent.bismillahArabic}
          </h1>
          <p className="font-display italic text-xs sm:text-sm text-[#6B5D52] mt-0.5 tracking-wider">
            {CONFIG.islamicContent.bismillahTransliteration}
          </p>
        </motion.div>

        {/* Micro Invitation Header */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
          <span className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#8C6E36] font-medium">
            In The Name of Allah · Nikah Celebration
          </span>
          <KhatimStar className="w-3.5 h-3.5 text-[#B89758]" stroke="#B89758" />
        </motion.div>

        {/* 2. Names of the Couple: Guaranteed Single Line & Elegant Sizing */}
        <div className="my-2 sm:my-3 w-full px-2">
          {/* Groom's Name */}
          <motion.h2
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#2B2118] font-normal tracking-[0.05em] sm:tracking-[0.08em] leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {CONFIG.couple.groom.fullName}
          </motion.h2>

          {/* Gold Ampersand Ligature */}
          <motion.div
            className="my-1 sm:my-1.5 flex items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.7 }}
          >
            <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#B89758]" />
            <span className="font-display italic text-xl sm:text-2xl gold-foil-text font-normal">
              &amp;
            </span>
            <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#B89758]" />
          </motion.div>

          {/* Bride's Name - Sized and styled so it NEVER breaks into 2 lines */}
          <motion.h2
            className="font-display text-lg sm:text-2xl md:text-3xl lg:text-[30px] text-[#2B2118] font-normal tracking-[0.03em] sm:tracking-[0.06em] leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {CONFIG.couple.bride.fullName}
          </motion.h2>
        </div>

        <ArabesqueDivider className="w-44 h-5 my-2.5 opacity-60" />

        {/* 3. The Date & Venue Highlights */}
        <motion.div
          className="mt-1 space-y-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9 }}
        >
          <p className="font-ui text-xs sm:text-sm text-[#8C6E36] tracking-[0.2em] uppercase font-medium">
            Insha Allah · 12 — 14 November 2026
          </p>
          <p className="font-display text-base sm:text-lg text-[#32271E] tracking-wide">
            Solemnization of Nikah &amp; Wedding Ceremonies
          </p>
          <p className="font-ui text-xs text-[#6B5D52] tracking-wider font-light">
            Himatnagar, Gujarat
          </p>
        </motion.div>

        {/* Floating Scroll Cue */}
        <motion.a
          href="#announcement"
          className="mt-6 sm:mt-8 flex flex-col items-center gap-1.5 text-[#8C6E36] hover:text-[#543E15] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89758]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
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
