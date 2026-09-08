import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Clock, ArrowUp, Star, Navigation } from 'lucide-react';
import GokulamLogo from './GokulamLogo';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', path: '/', isHash: false },
    { name: 'Our Story', path: '/#story', isHash: true, hash: '#story' },
    { name: 'Dedicated Menu', path: '/menu', isHash: false },
    { name: 'Gallery', path: '/#gallery', isHash: true, hash: '#gallery' },
    { name: 'Guest Reviews', path: '/#reviews', isHash: true, hash: '#reviews' },
    { name: 'Visit Us', path: '/#location', isHash: true, hash: '#location' },
  ];

  const handleNavClick = (e, link) => {
    if (link.isHash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const target = document.querySelector(link.hash);
          if (target) {
            const navOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 150);
      } else {
        const target = document.querySelector(link.hash);
        if (target) {
          const navOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
  };

  const openGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/place/CAFE+GOKULAM/@17.4882145,78.3830695,19z/data=!4m6!3m5!1s0x3bcb9331aa997777:0xff4a908c3fdc9ca6!8m2!3d17.4882145!4d78.3830695!16s%2Fg%2F11w7tq9_04',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <footer className="relative bg-[#090A0A] border-t border-gold/20 text-[#A39E93] pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Jaali Pattern */}
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gold/15">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-block">
              <GokulamLogo size="md" variant="gold" />
            </div>

            <p className="text-sm font-serif italic text-cream">
              "Traditional warmth. Memorable flavours."
            </p>

            <p className="text-xs text-[#A39E93] leading-relaxed max-w-sm">
              An authentic Indian courtyard dining experience in Kukatpally, serving comforting clay-oven starters, aromatic chicken pulao, and Indo-Chinese favourites under open skies.
            </p>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-mono text-cream">4.1 Rating</span>
              <span className="text-xs text-[#A39E93]">• 96 Google Reviews</span>
            </div>

            {/* Online Delivery Partners */}
            <div className="pt-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold block mb-2">
                Order Online (Home Delivery):
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.swiggy.com/city/hyderabad/gokulam-kukatpally-rest1146823?is_retargeting=true&media_source=GooglePlaceOrder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1A1E1C] hover:bg-[#FC8019]/20 border border-[#FC8019]/40 hover:border-[#FC8019] text-cream hover:text-[#FC8019] text-xs font-mono transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FC8019]" />
                  <span>Swiggy</span>
                </a>
                <a
                  href="https://www.zomato.com/hyderabad/gokulam-rajendra-nagar/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1A1E1C] hover:bg-[#E23744]/20 border border-[#E23744]/40 hover:border-[#E23744] text-cream hover:text-[#E23744] text-xs font-mono transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E23744]" />
                  <span>Zomato</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.isHash ? (
                    <a
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-xs text-[#D3CBBC] hover:text-gold transition-colors block py-0.5"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-xs text-[#D3CBBC] hover:text-gold transition-colors block py-0.5"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gold">
              Visit Gokulam
            </h3>

            <address className="not-italic text-xs text-[#D3CBBC] leading-relaxed space-y-1">
              <p className="font-medium text-cream">
                240, Kukatpally Housing Board Colony,
              </p>
              <p>K P H B Phase 6, Kukatpally,</p>
              <p>Hyderabad, Telangana 500085</p>
            </address>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#A39E93]">
              <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>12:00 PM – 11:00 PM (Daily)</span>
            </div>

            <div className="pt-2">
              <button
                onClick={openGoogleMaps}
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline font-mono"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A39E93]/80 gap-4">
          <p className="font-mono text-center sm:text-left">
            © 2026 Gokulam. All rights reserved. • KPHB Phase 6, Hyderabad
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#161917] border border-gold/20 hover:border-gold text-cream hover:text-gold transition-all duration-300 font-mono text-[11px]"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
