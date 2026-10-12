import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

export const PersistentUI: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() => weddingAudio.getIsPlaying());

  useEffect(() => {
    // Scroll progress bar listener
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Subscribe to weddingAudio state changes
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggleAudio = () => {
    weddingAudio.toggle();
  };

  return (
    <>
      {/* 1. Slim Antique Champagne Gold Scroll-Progress Bar Across Top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#E8DFC8]/50 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8A6D33] via-[#D4BC8B] to-[#B89758] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(184,151,88,0.3)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating Ambient Audio Toggle Pill (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <motion.button
          id="ambient-audio-toggle"
          type="button"
          onClick={handleToggleAudio}
          className={`flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border shadow-[0_6px_25px_rgba(74,62,52,0.14),0_0_15px_rgba(184,151,88,0.12)] backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89758] ${
            isPlaying
              ? 'bg-[#FDFBF7]/95 border-[#B89758] text-[#2B2118]'
              : 'bg-[#F7F3EC]/90 border-[#D8CBB6] text-[#7A6A5D] hover:border-[#B89758]/60'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? 'Mute ambient wedding music' : 'Play ambient wedding music'}
        >
          {/* Animated Soundwave Equalizer or Muted Icon */}
          <div className="relative flex items-center justify-center w-5 h-5">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="playing"
                  className="flex items-end justify-center gap-[2.5px] h-3.5 w-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.span
                    className="w-[2.5px] bg-[#B89758] rounded-full"
                    animate={{ height: ['4px', '14px', '6px', '12px', '4px'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                  />
                  <motion.span
                    className="w-[2.5px] bg-[#8C6E36] rounded-full"
                    animate={{ height: ['10px', '4px', '14px', '5px', '10px'] }}
                    transition={{ repeat: Infinity, duration: 1.0, ease: 'easeInOut', delay: 0.15 }}
                  />
                  <motion.span
                    className="w-[2.5px] bg-[#D4BC8B] rounded-full"
                    animate={{ height: ['6px', '12px', '4px', '14px', '6px'] }}
                    transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut', delay: 0.3 }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="muted"
                  initial={{ opacity: 0, rotate: -20 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <VolumeX className="w-4 h-4 text-[#8C7A6B]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Text Pill Label */}
          <div className="flex flex-col text-left">
            <span className="font-ui text-[10px] sm:text-[11px] uppercase tracking-wider font-medium leading-tight">
              {isPlaying ? 'Wedding Music' : 'Music Muted'}
            </span>
            <span className="font-ui text-[8px] uppercase tracking-[0.2em] text-[#8C6E36] font-light leading-none mt-0.5">
              {isPlaying ? 'Tap to Mute' : 'Tap to Play'}
            </span>
          </div>
        </motion.button>
      </div>
    </>
  );
};
