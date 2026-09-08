import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, MapPin, Clock, FileText, Calendar, Phone } from 'lucide-react';
import MenuSection from '../components/MenuSection';
import FullMenuModal from '../components/FullMenuModal';

export default function MenuPage({ onOpenReservation }) {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0E100F] text-[#F7F4EC] pt-24 pb-20">
      
      {/* Menu Page Hero Header */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#141715] to-[#0E100F] border-b border-gold/15 overflow-hidden">
        {/* Background Subtle Atmosphere */}
        <div className="absolute inset-0 bg-jaali opacity-30 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Back Link */}
          <div className="inline-flex items-center mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1E1C] border border-gold/25 text-xs font-mono text-[#D3CBBC] hover:text-gold hover:border-gold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
              Complete Dining Catalogue
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F7F4EC] font-bold tracking-tight mb-4">
            The Gokulam <span className="italic gold-gradient-text">Menu</span>
          </h1>

          <p className="text-base sm:text-lg text-[#D3CBBC] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Explore our complete kitchen selection: sizzling tandoor starters, Andhra-style gravies, fresh coastal seafood, wok-charred fried rice, and aromatic leaf-plate biryanis.
          </p>

          {/* Quick Pillars Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#A39E93]">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161917] border border-gold/20">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>12:00 PM – 11:00 PM Daily</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161917] border border-gold/20">
              <MapPin className="w-3.5 h-3.5 text-terracotta" />
              <span>240, KPHB Phase 6, Kukatpally</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161917] border border-gold/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>All 70+ Verbatim Dishes</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Interactive Menu Experience */}
      <main>
        <MenuSection
          onOpenFullMenu={() => setIsFullMenuOpen(true)}
        />
      </main>

      {/* Bottom Dining Invitation Banner */}
      <section className="mt-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#161917] via-[#1A1E1C] to-[#161917] border border-gold/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream mb-1">
              Ready to Taste the Tradition?
            </h3>
            <p className="text-xs sm:text-sm text-[#A39E93]">
              Join us in our open-air courtyard in KPHB Phase 6 or reserve a family table in advance.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] text-[#0E100F] font-bold text-xs font-mono uppercase tracking-wider hover:brightness-110 shadow-gold-sm"
            >
              Reserve a Table
            </button>

            <a
              href="https://www.google.com/maps/place/CAFE+GOKULAM/@17.4882145,78.3830695,19z/data=!4m6!3m5!1s0x3bcb9331aa997777:0xff4a908c3fdc9ca6!8m2!3d17.4882145!4d78.3830695!16s%2Fg%2F11w7tq9_04"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-[#0E100F] hover:bg-[#222824] border border-gold/30 text-cream font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Full-Screen Original Menu Sheet Modal */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
      />

    </div>
  );
}
