import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Utensils, Sparkles } from 'lucide-react';
import { SwiggyLogo, ZomatoLogo } from './icons/DeliveryLogos';

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



        {/* Large Editorial Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F7F4EC] font-bold tracking-tight leading-tight mb-8">
          Good Food.<br />
          Good Company.<br />
          <span className="italic gold-gradient-text">A Little Bit of Gokulam.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#D3CBBC] max-w-xl mb-10 font-normal leading-relaxed">
          The table is set. The courtyard lights are on. Join us tonight for an unhurried, delicious Indian feast with the ones who matter most.
        </p>

        {/* Action Buttons: Dine In & Delivery */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <Link
            to="/menu"
            className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0E100F] bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] hover:brightness-110 shadow-gold-md hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Menu
          </Link>

          <a
            href="https://www.swiggy.com/city/hyderabad/gokulam-kukatpally-rest1146823?is_retargeting=true&media_source=GooglePlaceOrder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-white bg-[#FC8019]/20 hover:bg-[#FC8019] border border-[#FC8019]/60 transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 group"
          >
            <SwiggyLogo className="w-4 h-4 text-[#FC8019] group-hover:text-white" fill="currentColor" />
            <span>Order on Swiggy</span>
          </a>

          <a
            href="https://www.zomato.com/hyderabad/gokulam-rajendra-nagar/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-white bg-[#E23744]/20 hover:bg-[#E23744] border border-[#E23744]/60 transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 group"
          >
            <ZomatoLogo className="w-4 h-4 text-[#E23744] group-hover:text-white" fill="currentColor" />
            <span>Order on Zomato</span>
          </a>
        </div>

      </div>
    </section>
  );
}
