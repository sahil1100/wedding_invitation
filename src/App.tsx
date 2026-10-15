import React, { useState } from 'react';
import { EnvelopePreloader } from './components/EnvelopePreloader';
import { HeroSection } from './components/HeroSection';
import { AnnouncementSection } from './components/AnnouncementSection';
import { QuranSection } from './components/QuranSection';
import { TimelineSection } from './components/TimelineSection';
import { CountdownSection } from './components/CountdownSection';
import { FamilyNoteSection } from './components/FamilyNoteSection';
import { DuaSection } from './components/DuaSection';
import { FooterSection } from './components/FooterSection';
import { PersistentUI } from './components/PersistentUI';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4EFEA] text-[#2B2118] relative selection:bg-[#C5A869]/25 selection:text-[#2B2118]">
      {/* 0. Sealed Envelope Preloader (Full Screen Cover Until Unlocked) */}
      <EnvelopePreloader
        isOpen={isEnvelopeOpen}
        onOpened={() => setIsEnvelopeOpen(true)}
      />

      {/* Desktop Ambient Soft Textured Backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden opacity-60">
        <div
          className="absolute -inset-10 bg-cover bg-center filter blur-3xl"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 30%, #EFE8DF 0%, #F5EFEB 50%, #ECE4D8 100%)',
          }}
        />
        {/* Subtle geometric dot pattern on desktop wings */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A869_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />
      </div>

      {/* Primary Mobile-First Canvas: 390px–520px Column Centered */}
      <main className="relative z-10 w-full max-w-[520px] mx-auto min-h-screen bg-[#FAF7F2] shadow-[0_0_60px_rgba(74,62,52,0.08),0_0_20px_rgba(197,168,105,0.05)] border-x border-[#E6DCCE]">
        {/* Film grain texture overlay */}
        <div className="fixed inset-0 pointer-events-none film-grain z-50 opacity-25" />

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Alhamdulillah / Family Announcement */}
        <AnnouncementSection />

        {/* 3. Sacred Quran Verse (Surah Ar-Rum 30:21) */}
        <QuranSection />

        {/* 4. Scroll-Progress Timeline */}
        <TimelineSection />

        {/* 5. A Note From The Family ("Humari pyari ki shadi me jarur aana") */}
        <FamilyNoteSection />

        {/* 6. Live 3D Digit Flip Countdown (Targeting Nikah 14 Nov 2026, 9:00 AM) */}
        <CountdownSection />

        {/* 6. Barakah Dua Card */}
        <DuaSection />

        {/* 7. Footer with Monogram & Salam */}
        <FooterSection />
      </main>

      {/* Persistent UI: Top Gold Reading Progress Bar */}
      <PersistentUI />
    </div>
  );
}
