import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Download, FileCode } from 'lucide-react';
import { CONFIG } from '../config';

interface ExporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExporterModal: React.FC<ExporterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${CONFIG.couple.groom.fullName} &amp; ${CONFIG.couple.bride.fullName} — Muslim Wedding Invitation</title>
  <meta name="description" content="Solemnization of Nikah &amp; Wedding Festivities of ${CONFIG.couple.groom.fullName} &amp; ${CONFIG.couple.bride.fullName}. Insha Allah, December 2026.">
  <meta property="og:title" content="Nikah Celebration — ${CONFIG.couple.groom.shortName} &amp; ${CONFIG.couple.bride.shortName}">
  <meta property="og:description" content="Bismillah — Insha Allah, 10–14 December 2026. RSVP &amp; Ceremonies.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200">
  <meta name="theme-color" content="#2A1119">

  <!-- Google Fonts: Cormorant Garamond, Amiri, Jost -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    :root {
      --font-display: 'Cormorant Garamond', Georgia, serif;
      --font-arabic: 'Amiri', serif;
      --font-ui: 'Jost', sans-serif;
    }
    body {
      font-family: var(--font-ui);
      background-color: #1A0910;
      color: #F7F1E6;
      overflow-x: hidden;
    }
    .font-display { font-family: var(--font-display); }
    .font-arabic { font-family: var(--font-arabic); direction: rtl; }
    .font-ui { font-family: var(--font-ui); }

    .gold-foil-text {
      background: linear-gradient(135deg, #8A6A12 0%, #F2DA8B 45%, #C9A227 75%, #B8901F 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% auto;
      animation: goldSheen 8s ease-in-out infinite alternate;
    }
    @keyframes goldSheen {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
  </style>
</head>
<body class="bg-[#1A0910] text-[#F7F1E6]">
  <div class="max-w-[500px] mx-auto min-h-screen px-4 py-12 text-center">
    <div class="p-8 rounded-3xl bg-[#2A1119] border border-[#C9A227]/40 shadow-2xl">
      <h1 class="font-arabic text-3xl text-[#F2DA8B] mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
      <p class="font-ui text-xs uppercase tracking-[0.28em] text-[#C9A227]">Nikah Celebration</p>
      <h2 class="font-display text-4xl text-[#FAF6F0] my-4">${CONFIG.couple.groom.fullName} &amp; ${CONFIG.couple.bride.fullName}</h2>
      <p class="font-ui text-sm text-[#EADFC8]">Insha Allah · 10–14 December 2026</p>
      <p class="font-display italic text-sm text-[#EADFC8]/80 mt-4">${CONFIG.islamicContent.quranEnglish}</p>
    </div>
  </div>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Wedding_Invitation_${CONFIG.couple.groom.shortName}_${CONFIG.couple.bride.shortName}.html`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#1A0910] border border-[#C9A227]/50 p-6 shadow-2xl text-left"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full text-[#EADFC8]/70 hover:text-white hover:bg-[#2A1119] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <FileCode className="w-5 h-5 text-[#F2DA8B]" />
            <h3 className="font-display text-2xl text-[#FAF6F0] font-light">
              Self-Contained Standalone HTML
            </h3>
          </div>

          <p className="font-ui text-xs text-[#EADFC8]/80 mb-4 leading-relaxed">
            Here is your zero-dependency single-file <code className="text-[#F2DA8B]">index.html</code>.
            You can drop this onto GitHub Pages, Netlify, Cloudflare Pages, or host it on any standard server!
          </p>

          <div className="relative rounded-2xl bg-[#12050B] p-3 border border-[#C9A227]/20 font-mono text-[11px] text-[#EADFC8]/75 h-48 overflow-y-auto">
            <pre>{standaloneHtmlCode}</pre>
          </div>

          <div className="mt-5 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2A1119] border border-[#C9A227]/40 text-[#F2DA8B] hover:border-[#F2DA8B] font-ui text-xs tracking-wider uppercase transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy HTML'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#8A6A12] to-[#C9A227] text-[#1A0910] font-ui text-xs font-semibold uppercase tracking-wider shadow-md hover:brightness-110 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download File</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
