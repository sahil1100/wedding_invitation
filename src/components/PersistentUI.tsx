import React, { useState, useEffect } from 'react';
import { weddingAudio } from '../utils/audio';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PersistentUI: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Scroll progress bar listener
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Audio status subscriber
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const toggleMusic = () => {
    weddingAudio.toggle();
  };

  return (
    <>
      {/* 1. Slim Imperial Gold Scroll-Progress Bar Across Top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#0A261F]/60 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#9A751F] via-[#FFF3D1] to-[#D4AF37] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(212,175,55,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating Royal Ambient Music Toggle (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          type="button"
          onClick={toggleMusic}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#08221B]/90 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_8px_25px_rgba(0,0,0,0.6),0_0_15px_rgba(212,175,55,0.2)] text-[#FFF3D1] hover:border-[#D4AF37] transition-all cursor-pointer group"
          aria-label={isPlaying ? 'Mute serene wedding music' : 'Play serene wedding music'}
        >
          {isPlaying ? (
            <>
              {/* Animated Sound Wave Bars */}
              <div className="flex items-center gap-0.5 h-4 w-4 justify-center">
                <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_0.8s_infinite] h-3" />
                <span className="w-1 bg-[#FFF3D1] rounded-full animate-[bounce_1.2s_infinite] h-4" />
                <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_0.9s_infinite] h-2" />
              </div>
              <span className="font-ui text-[11px] uppercase tracking-wider text-[#F5DE93] font-medium hidden sm:inline">
                Music Playing
              </span>
            </>
          ) : (
            <>
              <Music className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
              <span className="font-ui text-[11px] uppercase tracking-wider text-[#A3B8B0] font-medium hidden sm:inline group-hover:text-[#FFF3D1]">
                Play Melody
              </span>
            </>
          )}
        </motion.button>
      </div>
    </>
  );
};
