import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG } from '../config';
import { KhatimStar, MonogramRoundel, ArabesqueDivider } from './ArabesqueIcons';
import { RsvpFormData } from '../types';
import { Check, Heart, Send, Sparkles, User, Phone, MessageSquare, Users } from 'lucide-react';

export const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: '',
    phone: '',
    attending: 'attending',
    guestsCount: 1,
    events: ['nikah'],
    message: '',
  });

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; events?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { fullName?: string; phone?: string; events?: string } = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 7) {
      errs.phone = 'Please enter a valid phone or WhatsApp number';
    }
    if (formData.attending !== 'declined' && formData.events.length === 0) {
      errs.events = 'Please select at least one ceremony you will attend';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleToggleEvent = (id: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(id);
      const newEvents = exists
        ? prev.events.filter((e) => e !== id)
        : [...prev.events, id];
      return { ...prev, events: newEvents };
    });
    if (errors.events) {
      setErrors((prev) => ({ ...prev, events: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Post to CONFIG.rsvp.endpoint (e.g. Google Apps Script Webhook or Formspree)
      if (CONFIG.rsvp.enableEndpointPosting && CONFIG.rsvp.endpoint) {
        await fetch(CONFIG.rsvp.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            invitation: 'Mo Sahil & Siddiqa Wedding',
          }),
          mode: 'no-cors', // Supports Google Apps Script redirects without CORS block
        });
      }
    } catch {
      // Fallback gracefully so guest always gets verified success experience
    }

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
    } catch {
      // Ignore
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#1A0910] via-[#260C15] to-[#1A0910]">
      {/* Decorative background aura */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.12)_0%,transparent_60%)]" />

      <div className="relative max-w-[500px] mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
            <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C9A227] font-medium">
              Kindly Respond
            </span>
            <KhatimStar className="w-3.5 h-3.5 text-[#C9A227]" stroke="#C9A227" />
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl text-[#FAF6F0] font-light">
            RSVP &amp; Presence
          </h2>
          <p className="font-ui text-xs text-[#EADFC8]/80 mt-1">
            Please grace us with your response by{' '}
            <span className="text-[#F2DA8B] font-semibold">{CONFIG.rsvp.deadline}</span>
          </p>
        </div>

        {/* Form or Stamp Success State */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#2A1119]/90 border border-[#C9A227]/40 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-5"
                noValidate
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="rsvp-name"
                    className="block font-ui text-xs uppercase tracking-wider text-[#EADFC8] mb-1.5 font-medium"
                  >
                    Full Name <span className="text-[#F2DA8B]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]/60" />
                    <input
                      id="rsvp-name"
                      type="text"
                      placeholder="e.g. Dr. Farhan Khan & Family"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A0910] text-[#F7F1E6] border ${
                        errors.fullName ? 'border-red-400' : 'border-[#C9A227]/40'
                      } focus:outline-none focus:border-[#F2DA8B] focus:ring-1 focus:ring-[#F2DA8B] font-ui text-sm placeholder-[#EADFC8]/40 transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-300 font-ui text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label
                    htmlFor="rsvp-phone"
                    className="block font-ui text-xs uppercase tracking-wider text-[#EADFC8] mb-1.5 font-medium"
                  >
                    Phone / WhatsApp Number <span className="text-[#F2DA8B]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]/60" />
                    <input
                      id="rsvp-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A0910] text-[#F7F1E6] border ${
                        errors.phone ? 'border-red-400' : 'border-[#C9A227]/40'
                      } focus:outline-none focus:border-[#F2DA8B] focus:ring-1 focus:ring-[#F2DA8B] font-ui text-sm placeholder-[#EADFC8]/40 transition-colors`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-300 font-ui text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Attendance Status Radios */}
                <div>
                  <label className="block font-ui text-xs uppercase tracking-wider text-[#EADFC8] mb-2 font-medium">
                    Will You Attend?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: 'attending', label: 'Yes, Joyfully' },
                      { val: 'inshaAllah', label: 'Insha Allah' },
                      { val: 'declined', label: 'Regretfully' },
                    ].map((opt) => {
                      const isSelected = formData.attending === opt.val;
                      return (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              attending: opt.val as RsvpFormData['attending'],
                            })
                          }
                          className={`py-2.5 px-1.5 rounded-xl border text-center font-ui text-xs tracking-wider uppercase transition-all duration-200 ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#8A6A12] to-[#C9A227] border-[#F2DA8B] text-[#1A0910] font-semibold shadow-md'
                              : 'bg-[#1A0910] border-[#C9A227]/30 text-[#EADFC8]/80 hover:border-[#C9A227]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Number of Guests (Only if attending) */}
                {formData.attending !== 'declined' && (
                  <div>
                    <label className="block font-ui text-xs uppercase tracking-wider text-[#EADFC8] mb-1.5 font-medium">
                      Number of Attending Guests
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]/60" />
                        <select
                          value={formData.guestsCount}
                          onChange={(e) =>
                            setFormData({ ...formData, guestsCount: Number(e.target.value) })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A0910] text-[#F7F1E6] border border-[#C9A227]/40 focus:outline-none focus:border-[#F2DA8B] font-ui text-sm appearance-none cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n} className="bg-[#1A0910] text-[#F7F1E6]">
                              {n} {n === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Attending Events Checkboxes */}
                {formData.attending !== 'declined' && (
                  <div>
                    <label className="block font-ui text-xs uppercase tracking-wider text-[#EADFC8] mb-1.5 font-medium">
                      Select Ceremonies Attending
                    </label>
                    <div className="space-y-2">
                      {CONFIG.events.map((evt) => {
                        const checked = formData.events.includes(evt.id);
                        return (
                          <div
                            key={evt.id}
                            onClick={() => handleToggleEvent(evt.id)}
                            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                              checked
                                ? 'bg-[#3A1822] border-[#F2DA8B]'
                                : 'bg-[#1A0910] border-[#C9A227]/30 hover:border-[#C9A227]'
                            }`}
                          >
                            <div>
                              <span className="font-display text-base text-[#FAF6F0] block">
                                {evt.title}
                              </span>
                              <span className="font-ui text-[11px] text-[#EADFC8]/70 block">
                                {evt.dateStr}
                              </span>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                                checked
                                  ? 'bg-[#C9A227] border-[#F2DA8B] text-[#1A0910]'
                                  : 'border-[#C9A227]/50'
                              }`}
                            >
                              {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {errors.events && (
                      <p className="text-red-300 font-ui text-xs mt-1">{errors.events}</p>
                    )}
                  </div>
                )}

                {/* Message / Duas */}
                <div>
                  <label
                    htmlFor="rsvp-message"
                    className="block font-ui text-xs uppercase tracking-wider text-[#EADFC8] mb-1.5 font-medium"
                  >
                    Dua &amp; Blessings for the Couple
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C9A227]/60" />
                    <textarea
                      id="rsvp-message"
                      rows={3}
                      placeholder="Share your heartfelt duas and greetings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A0910] text-[#F7F1E6] border border-[#C9A227]/40 focus:outline-none focus:border-[#F2DA8B] focus:ring-1 focus:ring-[#F2DA8B] font-ui text-sm placeholder-[#EADFC8]/40 resize-none transition-colors"
                    />
                  </div>
                </div>

                {/* Gold Shimmer Submit Button */}
                <button
                  id="rsvp-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#8A6A12] via-[#F2DA8B] to-[#C9A227] text-[#1A0910] font-ui text-sm uppercase tracking-[0.25em] font-semibold shadow-xl hover:shadow-[0_0_25px_rgba(242,218,139,0.5)] active:scale-[0.99] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2DA8B]"
                >
                  {/* Slow sheen sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <span>Sending RSVP...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Attendance</span>
                      </>
                    )}
                  </span>
                </button>
              </motion.form>
            ) : (
              /* Success State: Wax Seal Stamps Down with JazakAllahu Khairan */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-8 px-4"
              >
                {/* Physical Stamp Down Animation */}
                <motion.div
                  className="mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-[#8A6A12] via-[#F2DA8B] to-[#C9A227] p-1 shadow-2xl flex items-center justify-center border-2 border-[#F2DA8B] mb-6"
                  initial={{ y: -80, scale: 1.5, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 450,
                    damping: 18,
                    delay: 0.2,
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#1A0910] flex flex-col items-center justify-center p-2 text-center">
                    <Check className="w-8 h-8 text-[#F2DA8B] stroke-[2.5]" />
                  </div>
                </motion.div>

                {/* Arabic Blessing */}
                <h3 className="font-arabic text-2xl sm:text-3xl text-[#F2DA8B] mb-2">
                  جَزَاكُمُ اللَّهُ خَيْرًا
                </h3>
                <h4 className="font-display text-2xl text-[#FAF6F0] font-light">
                  {CONFIG.islamicContent.closingGreeting}
                </h4>

                <p className="font-ui text-xs sm:text-sm text-[#EADFC8]/85 max-w-xs mx-auto mt-3 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#FAF6F0]">{formData.fullName}</span>.
                  Your response has been preserved with honor. We eagerly look forward to sharing our joy with you!
                </p>

                <ArabesqueDivider className="w-36 h-4 my-6" />

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-1.5 text-[#C9A227] font-ui text-xs uppercase tracking-widest hover:text-[#F2DA8B] transition-colors"
                >
                  <span>Edit My Response</span>
                  <span>&rarr;</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
