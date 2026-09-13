import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, MapPin, Star, Navigation, Clock, Sparkles } from 'lucide-react';
import GokulamLogo from './GokulamLogo';
import { SwiggyLogo, ZomatoLogo } from './icons/DeliveryLogos';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openGoogleMapsDirections = () => {
    window.open(
      'https://www.google.com/maps/place/CAFE+GOKULAM/@17.4882145,78.3830695,19z/data=!4m6!3m5!1s0x3bcb9331aa997777:0xff4a908c3fdc9ca6!8m2!3d17.4882145!4d78.3830695!16s%2Fg%2F11w7tq9_04',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
      role="banner"
    >
      {/* Background Media: Night Courtyard View Only */}
      <div className="absolute inset-0 z-0 bg-[#0E100F] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transform motion-safe:animate-float-slow opacity-100"
          style={{
            backgroundImage: `url('/assets/gokulam/gokulam_evening.webp')`,
            backgroundPosition: 'center 40%',
          }}
          aria-hidden="true"
        />

        {/* Cinematic Scrim & Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F] via-[#0E100F]/65 to-[#0E100F]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E100F]/80 via-transparent to-[#0E100F]/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Floating Courtyard Ambiance Interactive Pill */}


      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">


        {/* Editorial Eyebrow Tag for Local SEO & Brand Identity */}
        

        {/* Primary H1 Heading: Explicitly contains 'Cafe Gokulam' */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#F7F4EC] mb-4 max-w-4xl leading-tight">
          Cafe Gokulam — <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#D4AF37] to-[#B89228]">Where Tradition</span> Meets the Table
        </h1>

        {/* Supporting Narrative with primary local keywords */}
        <p className="text-base sm:text-lg text-[#D3CBBC] max-w-2xl font-normal leading-relaxed mb-8">
          Welcome to <strong className="font-semibold text-cream">Cafe Gokulam (The Gokulam Cafe)</strong> — KPHB Phase 6’s premier open-air courtyard restaurant and cafe. Relish authentic Andhra tandoor starters, signature pulavs, and coastal seafood under open skies.
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 py-3 px-4 sm:px-6 rounded-2xl bg-[#141715]/80 border border-gold/20 backdrop-blur-md mb-8 max-w-2xl w-full text-center">
          <div className="flex flex-col items-center justify-center border-r border-gold/15 pr-2">
            <div className="flex items-center text-amber-400 gap-1 text-sm sm:text-base font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.1</span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#A39E93]">96 Google Reviews</span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-gold/15 px-2">
            <div className="flex items-center text-cream gap-1 text-xs sm:text-sm font-semibold">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>12 PM – 11 PM</span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#A39E93]">Open Daily</span>
          </div>

          <div className="flex flex-col items-center justify-center pl-2">
            <div className="flex items-center text-cream gap-1 text-xs sm:text-sm font-semibold truncate max-w-[120px] sm:max-w-none">
              <MapPin className="w-3.5 h-3.5 text-terracotta flex-shrink-0" />
              <span>KPHB Phase 6</span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#A39E93]">Hyderabad</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Explore Menu Link */}
          <Link
            to="/menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0E100F] bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] hover:brightness-110 shadow-gold-md hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Explore Menu
          </Link>



          {/* Get Directions */}
          <button
            onClick={openGoogleMapsDirections}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-[#E07A5F] hover:text-white bg-terracotta/20 hover:bg-terracotta border border-terracotta/40 hover:border-terracotta transition-all duration-300 group"
          >
            <Navigation className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>Get Directions</span>
          </button>
        </div>

        {/* Online Delivery Partners: Swiggy & Zomato */}
        <div className="mt-8 pt-6 border-t border-gold/15 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#A39E93]">
            Doorstep Delivery:
          </span>

          <a
            href="https://www.swiggy.com/city/hyderabad/gokulam-kukatpally-rest1146823?is_retargeting=true&media_source=GooglePlaceOrder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141715]/90 hover:bg-[#FC8019]/20 border border-[#FC8019]/40 hover:border-[#FC8019] text-white hover:text-[#FC8019] transition-all duration-300 shadow-sm group transform hover:-translate-y-0.5"
          >
            <SwiggyLogo className="w-3.5 h-3.5 text-[#FC8019] group-hover:scale-110 transition-transform" fill="currentColor" />
            <span className="font-semibold tracking-wider text-[11px]">Order on Swiggy</span>
          </a>

          <a
            href="https://www.zomato.com/hyderabad/gokulam-rajendra-nagar/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141715]/90 hover:bg-[#E23744]/20 border border-[#E23744]/40 hover:border-[#E23744] text-white hover:text-[#E23744] transition-all duration-300 shadow-sm group transform hover:-translate-y-0.5"
          >
            <ZomatoLogo className="w-3.5 h-3.5 text-[#E23744] group-hover:scale-110 transition-transform" fill="currentColor" />
            <span className="font-semibold tracking-wider text-[11px]">Order on Zomato</span>
          </a>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#story"
        onClick={(e) => handleScrollTo(e, '#story')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full border border-gold/20 text-gold/60 hover:text-gold hover:border-gold transition-colors duration-300 group"
        aria-label="Scroll to restaurant story"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </header>
  );
}
