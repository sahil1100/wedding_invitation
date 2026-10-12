import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar } from './ArabesqueIcons';
import { Gift, PhoneCall, ChevronDown, Copy, Check, HeartHandshake } from 'lucide-react';

export const GiftContactSection: React.FC = () => {
  const [showGiftAccordion, setShowGiftAccordion] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="gift-contact" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="relative max-w-[500px] mx-auto z-10 space-y-12">
        {/* 1. Gift / Duas Note */}
        <div className="text-center p-6 sm:p-7 rounded-3xl bg-[#2A1119]/70 border border-[#C9A227]/30 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-[#1A0910] border border-[#C9A227]/40 flex items-center justify-center mx-auto mb-3 text-[#F2DA8B]">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <h3 className="font-display text-2xl text-[#FAF6F0] font-light">
            Your Duas Are Our Greatest Gift
          </h3>

          <p className="font-ui text-xs sm:text-sm text-[#EADFC8]/85 mt-2 font-light leading-relaxed max-w-sm mx-auto">
            {CONFIG.gifts.note}
          </p>

          {/* Optional Gift / Eidi Accordion Toggle */}
          <div className="mt-5 pt-4 border-t border-[#C9A227]/20">
            <button
              type="button"
              onClick={() => setShowGiftAccordion(!showGiftAccordion)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A0910] border border-[#C9A227]/30 text-[#C9A227] hover:text-[#F2DA8B] font-ui text-xs tracking-wider uppercase transition-colors"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Optional Shagun / Eidi Details</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showGiftAccordion ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {showGiftAccordion && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden mt-4 text-left font-ui text-xs text-[#EADFC8] space-y-3 p-4 rounded-2xl bg-[#1A0910] border border-[#C9A227]/20"
                >
                  {/* UPI ID */}
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#2A1119] border border-[#C9A227]/15">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A227] block">
                        UPI ID (Google Pay / PhonePe)
                      </span>
                      <span className="font-mono text-sm text-[#FAF6F0]">
                        {CONFIG.gifts.optionalUpiId}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(CONFIG.gifts.optionalUpiId, 'upi')}
                      className="p-2 rounded-lg bg-[#3A1822] hover:bg-[#4A2028] text-[#F2DA8B] transition-colors"
                      title="Copy UPI ID"
                    >
                      {copiedField === 'upi' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Bank Details */}
                  <div className="p-3 rounded-xl bg-[#2A1119] border border-[#C9A227]/15 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A227] block">
                      Direct Bank Transfer
                    </span>
                    <p className="text-xs">
                      <span className="text-[#EADFC8]/60">Bank:</span> {CONFIG.gifts.bankName}
                    </p>
                    <p className="text-xs">
                      <span className="text-[#EADFC8]/60">A/c Holder:</span>{' '}
                      {CONFIG.gifts.accountHolder}
                    </p>
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <p className="text-xs font-mono">
                        <span className="text-[#EADFC8]/60">A/c No:</span>{' '}
                        {CONFIG.gifts.accountNumber}
                      </p>
                      <button
                        type="button"
                        onClick={() => handleCopy(CONFIG.gifts.accountNumber, 'account')}
                        className="text-[10px] uppercase tracking-wider text-[#F2DA8B] underline"
                      >
                        {copiedField === 'account' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <p className="text-xs font-mono">
                      <span className="text-[#EADFC8]/60">IFSC:</span> {CONFIG.gifts.ifscCode}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 2. Family Contacts with Tap to Call */}
        <div>
          <div className="text-center mb-6">
            <motion.div
              className="flex items-center justify-center gap-2 mb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
              <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C9A227] font-medium">
                Guest Assistance
              </span>
              <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
            </motion.div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#FAF6F0] font-light">
              Family &amp; Inquiries
            </h3>
            <p className="font-ui text-xs text-[#EADFC8]/70 mt-0.5">
              Feel free to call our family elders for any assistance
            </p>
          </div>

          <div className="space-y-3">
            {CONFIG.contacts.map((contact, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#2A1119]/80 border border-[#C9A227]/30 shadow-lg hover:border-[#F2DA8B]/60 transition-colors"
              >
                <div>
                  <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#C9A227] font-medium block">
                    {contact.side} Family · {contact.relation}
                  </span>
                  <h4 className="font-display text-lg text-[#FAF6F0] font-normal">
                    {contact.name}
                  </h4>
                  <p className="font-ui text-xs text-[#EADFC8]/75">{contact.phone}</p>
                </div>

                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#8A6A12] to-[#C9A227] text-[#1A0910] font-ui text-xs font-semibold shadow-md hover:brightness-110 transition-all shrink-0"
                  aria-label={`Call ${contact.name}`}
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
