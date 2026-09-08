import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, MapPin, Star, Navigation, Clock, Sparkles } from 'lucide-react';
import GokulamLogo from './GokulamLogo';

export default function Hero({ courtyardMode, toggleCourtyardMode }) {
  const isNight = courtyardMode === 'night';

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
      {/* Background Media with Crossfade Between Day & Twilight Modes */}
      <div className="absolute inset-0 z-0 bg-[#0E100F] overflow-hidden">
        {/* Night Courtyard Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105 transform motion-safe:animate-float-slow ${
            isNight ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('/assets/gokulam/gokulam_night.webp')`,
            backgroundPosition: 'center 40%',
          }}
          aria-hidden="true"
        />

        {/* Day Courtyard Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105 transform motion-safe:animate-float-slow ${
            isNight ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url('/assets/gokulam/Gokulam.webp')`,
            backgroundPosition: 'center 35%',
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


        {/* Primary Restaurant Logo & Identity */}
        {/* <div className="mb-4">
          <GokulamLogo size="lg" variant="gold" className="transform scale-110 sm:scale-125 md:scale-135 py-3" />
        </div> */}

        {/* Primary Tagline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#F7F4EC] mt-3 mb-5 max-w-3xl leading-tight">
          Where <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#D4AF37] to-[#B89228]">Tradition</span> Meets the Table
        </h1>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg md:text-xl text-[#D3CBBC] max-w-2xl font-normal leading-relaxed mb-8">
          Authentic flavours, warm hospitality and a dining experience rooted in the spirit of Gokulam.
          Gather around open-air tables under terracotta tiles and fairy-lit skies.
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
