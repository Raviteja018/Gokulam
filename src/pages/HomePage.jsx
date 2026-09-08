import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, ArrowRight, Sparkles, Flame, Fish, Award } from 'lucide-react';
import Hero from '../components/Hero';
import BrandStory from '../components/BrandStory';
import Experience from '../components/Experience';
import SignatureDishes from '../components/SignatureDishes';
import Gallery from '../components/Gallery';
import GoogleReviews from '../components/GoogleReviews';
import LocationHours from '../components/LocationHours';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({ courtyardMode, toggleCourtyardMode, onOpenReservation }) {
  const menuHighlights = [
    {
      title: 'Tandoor & Starters',
      desc: 'Chicken Tikka, Chicken Majestic, Lollipop, Dragon Chicken, and Crispy Corn.',
      count: '30+ Dishes',
      icon: Flame,
    },
    {
      title: 'Biryani & Pulao',
      desc: 'Special Dum Biryani & Gokulam Egg Pulao served on traditional patravali leaf.',
      count: 'Courtyard Specials',
      icon: Award,
    },
    {
      title: 'Coastal Seafood',
      desc: 'Loose Prawns, Apollo Fish, Fish 65, and Schezwan Prawns.',
      count: '13 Dishes',
      icon: Fish,
    },
    {
      title: 'Wok Rice & Noodles',
      desc: 'High-flame tossed Hakka Noodles and Basmati Fried Rice in Veg & Non-Veg.',
      count: '40 Varieties',
      icon: Utensils,
    },
  ];

  return (
    <main id="main">
      {/* Cinematic Hero Section with Day/Night Courtyard Toggle */}
      <Hero
        courtyardMode={courtyardMode}
        toggleCourtyardMode={toggleCourtyardMode}
      />

      {/* Brand Narrative: A Taste of Gokulam */}
      <BrandStory />

      {/* The Experience: More Than a Meal */}
      <Experience />

      {/* Signature Culinary Showcase: From Our Kitchen */}
      <SignatureDishes />

      {/* Dedicated Menu Page Teaser Section */}
      <section className="relative py-16 sm:py-20 bg-[#0E100F] border-t border-gold/15 overflow-hidden">
        <div className="absolute inset-0 bg-jaali opacity-30 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-b from-[#161917] to-[#121513] border border-gold/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
                  Culinary Repertoire
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-cream font-bold tracking-tight mb-4">
                Explore Our Complete <span className="italic gold-gradient-text">Menu</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D3CBBC] leading-relaxed mb-8">
                From clay-oven spiced chicken starters starting at ₹89 to slow-cooked dum biryani at ₹170, discover our full 70+ dish collection on our dedicated dining menu page.
              </p>
            </div>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {menuHighlights.map((hl) => {
                const Icon = hl.icon;
                return (
                  <div
                    key={hl.title}
                    className="p-4 rounded-2xl bg-[#0E100F]/90 border border-gold/20 hover:border-gold/50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-terracotta uppercase tracking-wider block mb-1">
                      {hl.count}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-cream mb-1">
                      {hl.title}
                    </h3>
                    <p className="text-xs text-[#A39E93] leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#0E100F] bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] hover:brightness-110 shadow-gold-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>View Complete Menu & Prices</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs font-mono text-[#A39E93]">
                Includes exact dish pricing, dietary filters, and bill estimator
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Gallery: An Evening at Gokulam */}
      <Gallery />

      {/* Google Reviews & Reputation (4.1 ★) */}
      <GoogleReviews />

      {/* Location & Operating Hours (Official CAFE GOKULAM Map) */}
      <LocationHours
        onOpenReservation={onOpenReservation}
      />

      {/* Final Brand Impact CTA */}
      <FinalCTA />
    </main>
  );
}
