import React from 'react';
import { Star, ExternalLink, MessageSquare, ThumbsUp, ShieldCheck } from 'lucide-react';

export default function GoogleReviews() {
  const verifiedTags = [
    { label: 'Friendly Staff', count: 8 },
    { label: 'Aromatic Pulao', count: 4 },
    { label: 'Hara Bhara Kabab', count: 2 },
    { label: 'Courtyard Seating', count: 12 },
    { label: 'Reasonable Price', count: 15 },
    { label: 'Great Service', count: 10 },
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 72 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 2 },
  ];

  const openGoogleReviews = () => {
    window.open(
      'https://www.google.com/maps/place/CAFE+GOKULAM/@17.4882145,78.3830695,19z/data=!4m6!3m5!1s0x3bcb9331aa997777:0xff4a908c3fdc9ca6!8m2!3d17.4882145!4d78.3830695!16s%2Fg%2F11w7tq9_04',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="reviews"
      className="relative py-20 sm:py-28 bg-[#121513] overflow-hidden border-t border-gold/15"
    >
      {/* Subtle Background Lattice */}
      <div className="absolute inset-0 bg-wood-lattice opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
              Guest Reputation
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            What Our Guests <span className="italic gold-gradient-text">Say</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D3CBBC] font-normal leading-relaxed">
            Real feedback from verified neighbourhood diners who visit Gokulam for hearty family dinners, relaxed evening gatherings, and bold regional flavours.
          </p>
        </div>

        {/* Hero Rating Banner & Breakdown */}
        <div className="max-w-4xl mx-auto bg-[#161917] rounded-3xl border border-gold/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Badge */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-[#0E100F] rounded-2xl border border-gold/20">
              <span className="text-xs font-mono uppercase tracking-widest text-gold mb-1">
                Google Rating Summary
              </span>

              <div className="text-6xl font-serif font-bold text-cream tracking-tight my-2">
                4.1
              </div>

              {/* Gold Stars */}
              <div className="flex items-center gap-1.5 text-amber-400 mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-5 h-5 fill-amber-400/30 text-amber-400" />
              </div>

              <span className="text-sm font-mono text-[#D3CBBC]">
                Based on <strong className="text-cream">96 Google Reviews</strong>
              </span>

              <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Business Location</span>
              </div>
            </div>

            {/* Right Rating Distribution & Review Pillars */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-lg font-serif font-semibold text-cream mb-2">
                Verified Guest Mention Keywords
              </h3>

              {/* Tag Cloud from Google Business */}
              <div className="flex flex-wrap gap-2 mb-4">
                {verifiedTags.map((tag) => (
                  <span
                    key={tag.label}
                    className="px-3 py-1.5 rounded-full bg-[#1A1E1C] border border-gold/25 text-xs font-mono text-[#D3CBBC] flex items-center gap-1.5"
                  >
                    <span>{tag.label}</span>
                    <span className="text-gold font-bold">({tag.count})</span>
                  </span>
                ))}
              </div>

              {/* Rating Distribution Bar */}
              <div className="space-y-1.5 pt-2">
                {ratingDistribution.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs font-mono text-[#A39E93]">
                    <span className="w-4 text-right">{row.stars}★</span>
                    <div className="flex-1 h-2 bg-[#0E100F] rounded-full overflow-hidden border border-gold/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C85A32] rounded-full"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right">{row.percentage}%</span>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={openGoogleReviews}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] text-[#0E100F] text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2 hover:brightness-110 shadow-gold-sm transition-all"
                >
                  <span>Read us on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={openGoogleReviews}
                  className="px-5 py-3 rounded-full bg-[#1A1E1C] hover:bg-[#222824] border border-gold/30 text-cream text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  Write a Review
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
