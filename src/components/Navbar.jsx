import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Utensils, Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import GokulamLogo from './GokulamLogo';

export default function Navbar({ courtyardMode, toggleCourtyardMode, onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isMenuPage = location.pathname === '/menu';

  // Scroll listener for desktop navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active to eliminate background bleed & scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean, focused navigation items
  const navItems = [
    { name: 'Home', path: '/', isHash: false },
    { name: 'Our Story', path: '/#story', isHash: true, hash: '#story' },
    { name: 'Menu', path: '/menu', isHash: false, isBadge: true },
    { name: 'Gallery', path: '/#gallery', isHash: true, hash: '#gallery' },
    { name: 'Visit Us', path: '/#location', isHash: true, hash: '#location' },
  ];

  const handleNavClick = (e, item) => {
    setMobileMenuOpen(false);

    if (item.isHash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const target = document.querySelector(item.hash);
          if (target) {
            const navOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 150);
      } else {
        const target = document.querySelector(item.hash);
        if (target) {
          const navOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || isMenuPage
            ? 'bg-[#0E100F]/95 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-gold/20 shadow-xl shadow-black/60'
            : 'bg-gradient-to-b from-[#0E100F]/95 via-[#0E100F]/70 to-transparent py-3 sm:py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            
            {/* Brand Logo Link */}
            <Link
              to="/"
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg py-1"
              aria-label="Gokulam Restaurant Home"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {/* Mobile View: Clean compact logo (size sm) so it never crowds controls */}
              <div className="block md:hidden">
                <GokulamLogo size="sm" variant="gold" />
              </div>
              {/* Desktop View: Generous dynamic logo */}
              <div className="hidden md:block">
                <GokulamLogo size={isScrolled ? 'sm' : 'md'} variant="gold" />
              </div>
            </Link>

            {/* Desktop Navigation Links (Only 5 essential links) */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Desktop Navigation">
              {navItems.map((item) => {
                const isActive =
                  item.path === '/menu'
                    ? isMenuPage
                    : item.path === '/' && location.pathname === '/' && !location.hash;

                return item.isHash ? (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-xs font-mono uppercase tracking-[0.18em] text-[#D3CBBC] hover:text-[#D4AF37] transition-colors duration-200 relative group py-1"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#C85A32] transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xs font-mono uppercase tracking-[0.18em] transition-colors duration-200 relative group py-1 flex items-center gap-1.5 ${
                      isActive
                        ? 'text-gold font-bold'
                        : 'text-[#D3CBBC] hover:text-[#D4AF37]'
                    }`}
                  >
                    {item.name}
                    {item.isBadge && (
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                    )}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#C85A32] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Controls: Day/Night Mode & Primary Action CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleCourtyardMode}
                className="px-3.5 py-1.5 rounded-full border border-gold/30 bg-[#161917]/80 hover:bg-[#1F2420] text-[#D4AF37] text-xs font-mono tracking-wider flex items-center gap-2 transition-all duration-300 hover:border-gold shadow-sm"
                title={`Switch to ${courtyardMode === 'night' ? 'Daylight Courtyard' : 'Twilight Lantern Glow'}`}
                aria-label="Toggle courtyard ambiance"
              >
                {courtyardMode === 'night' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                    <span className="text-[11px]">Twilight Glow</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px]">Day Pavilion</span>
                  </>
                )}
              </button>

              {/* Dynamic CTA depending on current page */}
              {isMenuPage ? (
                <button
                  onClick={onOpenReservation}
                  className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full overflow-hidden text-xs font-semibold uppercase tracking-widest text-[#0E100F] bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] hover:brightness-110 shadow-gold-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              ) : (
                <Link
                  to="/menu"
                  className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full overflow-hidden text-xs font-semibold uppercase tracking-widest text-[#0E100F] bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] hover:brightness-110 shadow-gold-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Explore Menu</span>
                </Link>
              )}
            </div>

            {/* Mobile Bar Controls: Mode Toggle & Hamburger Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleCourtyardMode}
                className="p-2 rounded-full border border-gold/35 text-[#D4AF37] bg-[#161917]/90 active:scale-95 transition-all"
                aria-label="Toggle atmosphere mode"
              >
                {courtyardMode === 'night' ? (
                  <Moon className="w-4 h-4 text-gold" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-full border border-gold/35 text-[#F7F4EC] hover:text-gold bg-[#161917]/90 active:scale-95 transition-all"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Agency-Grade Mobile Navigation Modal (100% Solid, Zero Background Bleed) */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-[#0A0C0B] flex flex-col justify-between overflow-y-auto animate-fadeIn"
          style={{ minHeight: '100dvh' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Subtle Jaali Texture Accent */}
          <div className="absolute inset-0 bg-jaali opacity-10 pointer-events-none" />

          {/* Top Bar inside Open Drawer */}
          <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-gold/20 bg-[#0E100F]">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <GokulamLogo size="sm" variant="gold" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleCourtyardMode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/30 bg-[#161917] text-xs"
                aria-label="Toggle atmosphere"
              >
                {courtyardMode === 'night' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-gold animate-pulse" />
                    <span className="text-[11px] font-mono text-gold">Twilight</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px] font-mono text-amber-300">Daylight</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-gold/30 text-[#F7F4EC] hover:text-gold bg-[#161917] active:scale-95 transition-all"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Editorial Navigation Links (Spacious, Numbered, High Contrast) */}
          <div className="relative z-10 px-6 py-6 flex-1 flex flex-col justify-center space-y-1">
            {navItems.map((item, index) => {
              const isActive =
                item.path === '/menu'
                  ? isMenuPage
                  : item.path === '/' && location.pathname === '/' && !location.hash;

              return item.isHash ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center justify-between py-3.5 px-4 rounded-xl border border-transparent active:bg-[#161917] hover:border-gold/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold/60">0{index + 1}</span>
                    <span className="font-serif text-lg text-[#F7F4EC] group-hover:text-gold transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gold/40 group-hover:text-gold transition-all" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl transition-all group ${
                    isActive
                      ? 'bg-[#161917] border border-gold/40 text-gold font-semibold'
                      : 'border border-transparent hover:border-gold/30 text-[#F7F4EC]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold/60">0{index + 1}</span>
                    <span className="font-serif text-lg group-hover:text-gold transition-colors">
                      {item.name}
                    </span>
                    {item.isBadge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-gold/15 text-gold border border-gold/30">
                        70+ Dishes
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-gold/40 group-hover:text-gold transition-all" />
                </Link>
              );
            })}
          </div>

          {/* Action Button & Operating Details */}
          <div className="relative z-10 px-6 pb-8 pt-4 border-t border-gold/20 bg-[#0E100F] space-y-4">
            {isMenuPage ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0E100F] bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] shadow-gold-md active:scale-[0.98] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Table</span>
              </button>
            ) : (
              <Link
                to="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0E100F] bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] shadow-gold-md active:scale-[0.98] transition-all"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Dedicated Menu</span>
              </Link>
            )}

            {/* Quick Timing & Location Info */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#A39E93] pt-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>12 PM – 11 PM</span>
              </div>
              <div className="flex items-center gap-1.5 justify-end">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>KPHB Phase 6</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
