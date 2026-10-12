import React, { useState, useEffect } from 'react';

export const PersistentUI: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  return (
    /* Slim Antique Champagne Gold Scroll-Progress Bar Across Top */
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#E8DFC8]/50 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#8A6D33] via-[#D4BC8B] to-[#B89758] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(184,151,88,0.3)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
