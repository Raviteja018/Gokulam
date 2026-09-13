import React from 'react';
import {
  Star,
  ExternalLink,
  MessageSquare,
  ThumbsUp,
  ShieldCheck,
  Quote,
} from 'lucide-react';

export default function GoogleReviews() {

  const verifiedTags = [
    { label: 'Friendly Staff', count: 12 },
    { label: 'Courtyard Ambience', count: 18 },
    { label: 'Aromatic Pulao', count: 6 },
    { label: 'Hara Bhara Chicken', count: 4 },
    { label: 'Fried Rice & Manchuria', count: 5 },
    { label: 'Quick Service', count: 9 },
    { label: 'Reasonable Price', count: 15 },
    { label: 'Milkshakes & Coolers', count: 4 },
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 74 },
    { stars: 4, percentage: 17 },
    { stars: 3, percentage: 5 },
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

  const realReviews = [
    {
      id: 'rev-veera',
      name: 'veera manikanta Nakka',
      role: '1 review',
      rating: 5,
      time: '3 weeks ago · New',
      price: 'Dinner | ₹200–400',
      avatarBg: 'bg-indigo-600',
      initials: 'VN',
      isLocalGuide: false,
      quote:
        'Had a great experience at Gokulam Cafe! The food was delicious, fresh, and had a really good taste. The ambience was pleasant, and the service was friendly and quick. Definitely a nice place to enjoy good food with friends. Highly recommended! 💖',
      highlightDish: 'Ambience & Quick Service',
    },
    {
      id: 'rev-eeshu',
      name: 'Eeshu Ramineni',
      role: '5 reviews',
      rating: 5,
      time: '2 months ago',
      price: 'Dine in | ₹200–400',
      avatarBg: 'bg-cyan-700',
      initials: 'ER',
      isLocalGuide: false,
      quote:
        'Absolutely loved this café! The ambience is beautiful, the food and beverages are delicious, and the service is exceptional. The staff are friendly, attentive, and make you feel welcome from the moment you enter. A perfect place to relax, work, or spend quality time with friends. Highly recommended!',
      highlightDish: 'Beautiful Ambience & Exceptional Service',
    },
    {
      id: 'rev-naveen',
      name: 'Naveen Nagalla',
      role: '5 reviews',
      rating: 5,
      time: '2 months ago',
      price: '₹1–200',
      avatarBg: 'bg-amber-700',
      initials: 'NN',
      isLocalGuide: false,
      quote:
        "This location felt perfect. Delicious food, staff who appear to enjoy their jobs, and a clean environment. I'm adding this to my list of places I frequently visit. Must try - Mughlai Puloas and Hara Bara chicken starter.",
      highlightDish: 'Mughlai Puloas & Hara Bara Chicken',
    },
    {
      id: 'rev-mohan',
      name: 'Mohanmanikanta Denaboyina',
      role: '2 reviews',
      rating: 5,
      time: '2 months ago',
      avatarBg: 'bg-emerald-700',
      initials: 'MD',
      isLocalGuide: false,
      quote:
        "We tried hara bara chiken starter and Pulao, it's very smooth and tasty",
      highlightDish: 'Hara Bara Chicken Starter & Pulao',
    },
    {
      id: 'rev-deblina',
      name: 'Deblina Das',
      role: 'Local Guide · 17 reviews · 5 photos',
      rating: 5,
      time: '4 months ago',
      avatarBg: 'bg-teal-700',
      initials: 'DD',
      isLocalGuide: true,
      ratingsBreakdown: 'Food: 5/5 • Service: 5/5 • Atmosphere: 5/5',
      quote:
        'Tried chicken chowmein at Cafe Gokulam and it was so tasty! The noodles were perfectly cooked, chicken was juicy, and the flavors were just right—simple, comforting, and delicious. Definitely worth trying! 😋',
      highlightDish: 'Chicken Chowmein',
    },
    {
      id: 'rev-mounika',
      name: 'sai mounika',
      role: '2 reviews · 1 photo',
      rating: 5,
      time: '10 months ago',
      avatarBg: 'bg-orange-700',
      initials: 'SM',
      isLocalGuide: false,
      quote:
        "I’ve tried the biryani at this café, but it wasn't good. Apart from that, everything else here tastes great — especially the fried rice and Manchuria, which are awesome!",
      highlightDish: 'Fried Rice & Manchuria',
    },
    {
      id: 'rev-karthik',
      name: 'Karthik acharya',
      role: '2 reviews · 3 photos',
      rating: 5,
      time: '11 months ago',
      avatarBg: 'bg-rose-700',
      initials: 'KA',
      isLocalGuide: false,
      quote:
        'Everything about this café is good — the food tastes great, and the atmosphere is really nice. The only drawback is the delay in service. Whether it’s coffee, tea, or food, the waiting time is quite long. If the service speed is improved, it would make the overall experience excellent.',
      highlightDish: 'Great Food & Atmosphere',
    },
    {
      id: 'rev-sateesh',
      name: 'Sateesh Sireddi',
      role: 'Local Guide · 17 reviews · 7 photos',
      rating: 5,
      time: 'a year ago',
      avatarBg: 'bg-purple-700',
      initials: 'SS',
      isLocalGuide: true,
      quote:
        'A great spot if you’re looking for a place that offers tasty tiffins, flavorful starters, food and refreshing milkshakes under one roof. Worth visiting again!',
      highlightDish: 'Tasty Tiffins & Milkshakes',
    },
    {
      id: 'rev-sriram',
      name: 'Sriram Katakamsetty123',
      role: 'Local Guide · 11 reviews · 3 photos',
      rating: 5,
      time: 'a year ago',
      avatarBg: 'bg-blue-700',
      initials: 'SK',
      isLocalGuide: true,
      quote:
        'Food was fresh and flavorful, the ambiance was cozy and welcoming, and the staff made us feel right at home. Highly recommend this place for anyone who enjoys both taste and comfort',
      highlightDish: 'Fresh & Flavorful Food',
    },
  ];

  // Seamless duplicated loop for infinite marquee
  const displayReviews = [...realReviews, ...realReviews];

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
            Authentic, unedited Google reviews from diners who visit Gokulam for family meals, evening chowmein, Mughlai pulaos, crispy Manchuria, and courtyard hospitality.
          </p>
        </div>

        {/* Hero Rating Banner & Breakdown */}
        <div className="max-w-4xl mx-auto bg-[#161917] rounded-3xl border border-gold/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-14">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Badge */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-[#0E100F] rounded-2xl border border-gold/20 shadow-inner">
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
                Based on <strong className="text-cream">96+ Google Reviews</strong>
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
                  <span>Read All on Google</span>
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

        {/* ─── SCROLLABLE REVIEWS SECTION ─── */}
        <div>
          {/* Section Header Controls */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream">
                Recent Diner Reviews
              </h3>
              <span className="text-xs font-mono text-[#A39E93]">
                {realReviews.length} Verified Google Reviews
              </span>
            </div>
          </div>

          {/* GPU Hardware-Accelerated Smooth Marquee Track */}
          <div className="relative overflow-hidden w-full py-2 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            <div className="animate-marquee-smooth flex gap-6 select-none">
              {displayReviews.map((rev, index) => (
                <div
                  key={`${rev.id}-dup-${index}`}
                  className="w-[85vw] sm:w-[360px] md:w-[410px] flex-shrink-0 rounded-3xl bg-[#161917] border border-gold/25 hover:border-gold/70 p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                >
                  {/* Subtle quote watermark */}
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-gold/5 pointer-events-none group-hover:text-gold/10 transition-colors" />

                  <div>
                    {/* Reviewer Header */}
                    <div className="flex items-start justify-between gap-3 mb-3.5 relative z-10">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-bold font-mono text-xs flex items-center justify-center flex-shrink-0 shadow-md border border-white/10`}
                        >
                          {rev.initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h4 className="font-serif text-base font-bold text-cream group-hover:text-gold transition-colors">
                              {rev.name}
                            </h4>
                            {rev.isLocalGuide && (
                              <span
                                className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold"
                                title="Google Local Guide"
                              >
                                Local Guide
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] font-mono text-[#A39E93]">
                            {rev.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stars + Time + Meal/Price */}
                    <div className="flex items-center justify-between mb-3 text-xs flex-wrap gap-2 relative z-10">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#A39E93]">
                        {rev.price && (
                          <span className="px-2 py-0.5 rounded-full bg-[#0E100F] border border-gold/20 text-gold text-[10px]">
                            {rev.price}
                          </span>
                        )}
                        <span>{rev.time}</span>
                      </div>
                    </div>

                    {/* Detailed breakdown if present (e.g. Deblina) */}
                    {rev.ratingsBreakdown && (
                      <div className="mb-3 px-3 py-1.5 rounded-xl bg-[#0E100F] border border-gold/15 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <span>✨</span>
                        <span>{rev.ratingsBreakdown}</span>
                      </div>
                    )}

                    {/* Review Text */}
                    <blockquote className="text-sm text-[#D3CBBC] leading-relaxed italic mb-4 relative z-10">
                      "{rev.quote}"
                    </blockquote>
                  </div>

                  {/* Bottom Highlight Tag */}
                  <div className="pt-3.5 border-t border-gold/15 flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold font-medium">
                      ✦ {rev.highlightDish}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#A39E93]">
                      <ThumbsUp className="w-3.5 h-3.5 text-gold/70" />
                      <span>Verified Review</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


