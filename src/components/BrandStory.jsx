import React from 'react';
import { HeartHandshake, UtensilsCrossed, Trees, Sparkles } from 'lucide-react';

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative py-20 sm:py-28 bg-[#0E100F] overflow-hidden border-t border-gold/15"
    >
      {/* Ambient background lattice jaali */}
      <div className="absolute inset-0 bg-jaali opacity-30 pointer-events-none" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (Actual Photography from Gokulam) */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Courtyard Photo Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl bg-[#161917] group">
              <img
                src="/assets/gokulam/Gokulam.webp"
                alt="Gokulam Restaurant Traditional Red Roof Courtyard Exterior"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F] via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#0E100F]/85 backdrop-blur-md border border-gold/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-gold block">
                    Authentic Courtyard
                  </span>
                  <p className="text-sm font-serif text-cream">
                    Open-air pavilion & garden dining
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
                  <Trees className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Inset Secondary Photo Card (Family & Warmth) */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 rounded-xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-[#141715] z-10">
              <img
                src="/assets/gokulam/opening.webp"
                alt="Gokulam Celebration & Hospitality"
                className="w-full h-36 object-cover object-top"
                loading="lazy"
              />
              <div className="p-2.5 text-center bg-[#141715]">
                <span className="text-[11px] font-medium text-[#D3CBBC]">
                  Rooted in Family Hospitality
                </span>
              </div>
            </div>

            {/* Traditional Indian Flute Silhouette Motif (Background Accent) */}
            <svg
              className="absolute -top-10 -left-6 w-40 h-16 text-gold/20 -rotate-12 pointer-events-none hidden sm:block"
              viewBox="0 0 160 16"
              fill="currentColor"
            >
              <path d="M 18 8 C 30 7.8, 120 7.8, 138 8 C 140 8, 141 9, 138 9.5 C 120 9.7, 30 9.7, 18 9.5 C 16 9, 16 8, 18 8 Z" />
            </svg>

          </div>

          {/* Narrative / Brand Story */}
          <div className="lg:col-span-6 lg:pl-4">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
                The Heritage
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-6">
              A Taste of <span className="italic gold-gradient-text">Gokulam</span>
            </h2>

            {/* Core Story Statement */}
            <blockquote className="text-lg sm:text-xl text-[#F7F4EC] font-serif italic border-l-2 border-gold pl-5 mb-6 leading-relaxed">
              "Gokulam is a place to slow down, gather around the table and enjoy food made for sharing."
            </blockquote>

            {/* Body Copy */}
            <p className="text-base text-[#D3CBBC] font-normal leading-relaxed mb-8">
              From comforting favourites to flavourful Indian and Indo-Chinese preparations, every meal is served with the warmth of a neighbourhood gathering place.
              Whether it’s the sizzle of tandoori starters under the open evening sky or a steaming plate of aromatic biryani served on traditional eco-leaf plates, dining at Gokulam is an experience made to be shared.
            </p>

            {/* 3 Core Values Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold/15">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-terracotta/15 border border-terracotta/30 text-terracotta flex-shrink-0">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-serif font-semibold text-[#F7F4EC]">
                    Made for Sharing
                  </h3>
                  <p className="text-xs text-[#A39E93]">
                    Generous platters and family-sized portions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gold/15 border border-gold/30 text-gold flex-shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-serif font-semibold text-[#F7F4EC]">
                    Neighbourhood Warmth
                  </h3>
                  <p className="text-xs text-[#A39E93]">
                    Casual, welcoming and family-friendly.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
