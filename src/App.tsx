import React, { useState } from 'react';
import { EnvelopePreloader } from './components/EnvelopePreloader';
import { HeroSection } from './components/HeroSection';
import { AnnouncementSection } from './components/AnnouncementSection';
import { QuranSection } from './components/QuranSection';
import { TimelineSection } from './components/TimelineSection';
import { CountdownSection } from './components/CountdownSection';
import { DuaSection } from './components/DuaSection';
import { FooterSection } from './components/FooterSection';
import { PersistentUI } from './components/PersistentUI';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#051410] text-[#F7F4EC] relative selection:bg-[#D4AF37]/30 selection:text-[#FFF3D1]">
      {/* 0. Sealed Royal Envelope Preloader (Full Screen Cover Until Unlocked) */}
      <EnvelopePreloader
        isOpen={isEnvelopeOpen}
        onOpened={() => setIsEnvelopeOpen(true)}
      />

      {/* Desktop Ambient Deep Emerald & Gold Glow Backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden opacity-75">
        <div
          className="absolute -inset-10 bg-cover bg-center filter blur-3xl"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 25%, #0F3329 0%, #061813 50%, #030C09 100%)',
          }}
        />
        {/* Subtle geometric gold lattice dot pattern on desktop wings */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      {/* Primary Mobile-First Canvas: Centered column with royal gilded borders */}
      <main className="relative z-10 w-full max-w-[520px] mx-auto min-h-screen bg-[#061813] shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.12)] border-x border-[#184639]/70">
        {/* Film grain texture overlay */}
        <div className="fixed inset-0 pointer-events-none film-grain z-50 opacity-20" />

        {/* 1. Hero Section (Groom's Side Royal Spotlight) */}
        <HeroSection />

        {/* 2. Alhamdulillah / Family Announcement */}
        <AnnouncementSection />

        {/* 3. Sacred Quran Verse (Surah Ar-Rum 30:21) */}
        <QuranSection />

        {/* 4. Scroll-Progress Timeline (Friends Gathering 2, 3, 9 Nov & Nikah) */}
        <TimelineSection />

        {/* 5. Live 3D Digit Flip Countdown (Targeting 2 Nov 2026 Friends Gathering Kickoff) */}
        <CountdownSection />

        {/* 6. Barakah Dua Card */}
        <DuaSection />

        {/* 7. Footer with Monogram & Salam */}
        <FooterSection />
      </main>

      {/* Persistent UI: Top Gold Reading Progress Bar + Royal Music Control */}
      <PersistentUI />
    </div>
  );
}
