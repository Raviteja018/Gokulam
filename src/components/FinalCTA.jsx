import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Utensils, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const openGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/place/CAFE+GOKULAM/@17.4882145,78.3830695,19z/data=!4m6!3m5!1s0x3bcb9331aa997777:0xff4a908c3fdc9ca6!8m2!3d17.4882145!4d78.3830695!16s%2Fg%2F11w7tq9_04',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#0E100F] overflow-hidden border-t border-gold/20">
      {/* Background Cinematic Atmosphere Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('/assets/gokulam/gokulam_night.webp')`,
          backgroundPosition: 'center 45%',
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F] via-[#0E100F]/80 to-[#0E100F]/90" />
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Decorative Emblem */}
        <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-6 bg-[#0E100F]/60 backdrop-blur-md shadow-gold-sm">
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Large Editorial Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F7F4EC] font-bold tracking-tight leading-tight mb-8">
          Good Food.<br />
          Good Company.<br />
          <span className="italic gold-gradient-text">A Little Bit of Gokulam.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#D3CBBC] max-w-xl mb-10 font-normal leading-relaxed">
          The table is set. The courtyard lights are on. Join us tonight for an unhurried, delicious Indian feast with the ones who matter most.
        </p>

      </div>
    </section>
  );
}
