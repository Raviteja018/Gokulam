import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Clock, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import GokulamLogo from './GokulamLogo';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '',
    time: '7:30 PM (Evening Dinner)',
    preference: 'Courtyard Open-Air',
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
    >
      <div className="relative w-full max-w-lg bg-[#141715] border border-gold/35 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1A1E1C] border border-gold/30 text-cream hover:text-terracotta transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-cream">
              Table Enquiry Received!
            </h3>

            <p className="text-sm text-[#D3CBBC] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-gold font-semibold">{formData.name}</span>! We have noted your request for <span className="text-cream font-medium">{formData.guests}</span> on <span className="text-cream font-medium">{formData.time}</span>.
            </p>

            <div className="p-4 rounded-xl bg-[#0E100F] border border-gold/20 text-xs font-mono text-[#A39E93] text-left max-w-sm mx-auto space-y-1">
              <p>📍 Location: 240, KPHB Phase 6, Kukatpally</p>
              <p>⏱ Timings: 12:00 PM – 11:00 PM Daily</p>
              <p>🌿 Seating: {formData.preference}</p>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] text-[#0E100F] font-bold text-xs uppercase tracking-widest"
            >
              Done
            </button>
          </div>
        ) : (
          /* Reservation Form */
          <div>
            <div className="text-center mb-6">
              <GokulamLogo size="sm" variant="gold" className="mb-2" />
              <h3 id="reservation-title" className="text-2xl font-serif font-bold text-cream">
                Reserve a Table
              </h3>
              <p className="text-xs text-[#A39E93] font-mono mt-1">
                Gather with family and friends in our breezy courtyard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Raviteja"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0E100F] border border-gold/25 rounded-xl px-4 py-2.5 text-sm text-cream placeholder-gray-500 focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-1">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0E100F] border border-gold/25 rounded-xl px-4 py-2.5 text-sm text-cream placeholder-gray-500 focus:outline-none focus:border-gold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#0E100F] border border-gold/25 rounded-xl px-3 py-2.5 text-xs text-cream focus:outline-none focus:border-gold"
                  >
                    <option value="2 Guests">2 Guests (Couple)</option>
                    <option value="3-4 Guests">3–4 Guests (Small Group)</option>
                    <option value="5-8 Guests">5–8 Guests (Family Table)</option>
                    <option value="8+ Guests">8+ Guests (Celebration)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#0E100F] border border-gold/25 rounded-xl px-3 py-2.5 text-xs text-cream focus:outline-none focus:border-gold"
                  >
                    <option value="1:00 PM (Lunch)">1:00 PM (Lunch)</option>
                    <option value="2:00 PM (Late Lunch)">2:00 PM (Late Lunch)</option>
                    <option value="7:30 PM (Evening Dinner)">7:30 PM (Evening)</option>
                    <option value="8:30 PM (Prime Dinner)">8:30 PM (Dinner)</option>
                    <option value="9:30 PM (Late Dinner)">9:30 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-1">
                  Seating Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preference: 'Courtyard Open-Air' })}
                    className={`py-2 px-3 rounded-lg text-xs font-mono transition-all ${
                      formData.preference === 'Courtyard Open-Air'
                        ? 'bg-gold text-[#0E100F] font-bold'
                        : 'bg-[#0E100F] text-[#D3CBBC] border border-gold/20'
                    }`}
                  >
                    🌿 Courtyard Open-Air
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preference: 'Covered Pavilion' })}
                    className={`py-2 px-3 rounded-lg text-xs font-mono transition-all ${
                      formData.preference === 'Covered Pavilion'
                        ? 'bg-gold text-[#0E100F] font-bold'
                        : 'bg-[#0E100F] text-[#D3CBBC] border border-gold/20'
                    }`}
                  >
                    🏠 Covered Pavilion
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-full bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] text-[#0E100F] font-bold text-xs font-mono uppercase tracking-widest hover:brightness-110 shadow-gold-sm transition-all"
              >
                Confirm Table Enquiry
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
