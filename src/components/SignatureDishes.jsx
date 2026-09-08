import React from 'react';
import { Sparkles, Utensils, Star } from 'lucide-react';

export default function SignatureDishes() {
  const signatures = [
    {
      id: 'sig-tikka',
      name: 'Char-Grilled Chicken Tikka',
      price: 200,
      badge: 'Clay Oven Signature',
      description: 'Succulent boneless chicken chunks steeped in fragrant tandoori yogurt, mustard oil, and hand-ground spices, roasted over live coals and served with cooling mint yogurt chutney and freshly sliced onions.',
      quote: 'Smoky, tender, and seasoned with balanced traditional spices.',
      image: '/assets/gokulam/dish1.webp',
      alt: 'Gokulam authentic Chicken Tikka with green chutney and actual receipt',
      tag: 'Receipt Verified: ₹200',
    },
    {
      id: 'sig-chicken-pulav',
      name: 'Special Chicken Pulav',
      price: 170,
      badge: 'Courtyard Heritage',
      description: 'Fragrant spiced basmati rice tossed with tender, flavorful chicken cuts, roasted whole spices, caramelized shallots, and fresh coriander. Served traditionally on a pressed green leaf plate (patravali) with raw onion rings and lemon.',
      quote: 'Authentic courtyard-style chicken pulav served the time-honoured Indian way on an eco-friendly leaf plate.',
      image: '/assets/gokulam/biryani.webp',
      alt: 'Gokulam Special Chicken Pulav served on leaf plate',
      tag: 'Actual Receipt: ₹170',
    },
    {
      id: 'sig-noodles',
      name: 'Wok-Tossed Chicken Noodles',
      price: 119,
      badge: 'Indo-Chinese Favourites',
      description: 'Springy wheat noodles tossed on high-heat woks with shredded chicken, scrambled eggs, julienne vegetables, and dark seasoned soya. Served on a sleek boat dish with sliced purple onions and a fresh lemon wedge.',
      quote: 'High flame wok char that elevates comfort street dining.',
      image: '/assets/gokulam/dish2.webp',
      alt: 'Gokulam Chicken Noodles with egg and lemon wedge',
      tag: 'From Menu: ₹119',
    },
    {
      id: 'sig-pulao',
      name: 'Gokulam Egg Pulao',
      price: 139,
      badge: 'Homestyle Comfort',
      description: 'Fragrant seasoned basmati rice tossed with whole roasted spices, crispy onions, and pan-fried hard-boiled eggs. Wholesome, aromatic, and deeply satisfying for evening dining.',
      quote: 'A comforting rice speciality loved by regular neighbourhood guests.',
      image: '/assets/gokulam/pulao.webp',
      alt: 'Gokulam Egg Pulao served on traditional leaf plate',
      tag: 'Gokulam Original',
    },
  ];

  return (
    <section
      id="dishes"
      className="relative py-20 sm:py-28 bg-[#121513] overflow-hidden border-t border-gold/15"
    >
      {/* Background Ambience Pattern */}
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
              Culinary Highlights
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            From Our <span className="italic gold-gradient-text">Kitchen</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D3CBBC] font-normal">
            Real dishes captured on our tables. No staged studio tricks—just authentic flavours served with love every day.
          </p>
        </div>

        {/* Editorial Alternating Showcase */}
        <div className="space-y-16 lg:space-y-24">
          {signatures.map((dish, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={dish.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 relative group ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-[#161917] shadow-2xl">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F]/80 via-transparent to-black/30" />

                    {/* Price Badge on Image */}
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#0E100F]/90 backdrop-blur-md border border-gold/40 text-gold font-serif font-bold text-lg shadow-lg">
                      ₹{dish.price}
                    </div>

                    {/* Verified Tag */}
                    <div className="absolute bottom-4 left-4 px-3.5 py-1 rounded-full bg-gold/90 text-[#0E100F] font-mono text-xs font-semibold uppercase tracking-wider">
                      {dish.tag}
                    </div>
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta/15 border border-terracotta/30 text-terracotta text-xs font-mono uppercase tracking-wider mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{dish.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EC] font-bold tracking-tight mb-4">
                    {dish.name}
                  </h3>

                  <p className="text-base text-[#D3CBBC] leading-relaxed mb-6 font-normal">
                    {dish.description}
                  </p>

                  <blockquote className="text-sm font-serif italic text-gold/90 border-l-2 border-gold/40 pl-4 py-1 mb-6">
                    "{dish.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4 border-t border-gold/15">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-mono text-[#A39E93]">
                      Freshly Prepared Upon Order
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
