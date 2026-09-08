import React from 'react';
import { Compass, Flame, Users, RotateCcw } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 'exp-1',
      title: 'Traditional Ambience',
      description: 'A warm setting inspired by the charm of traditional Indian courtyards.',
      detail: 'Open-air courtyard with red tiled roofs, cane mudda stools, warm decorative lanterns, and lush greenery.',
      image: '/assets/gokulam/gokulam_night.webp',
      icon: Compass,
      tag: 'The Setting',
    },
    {
      id: 'exp-2',
      title: 'Flavourful Food',
      description: 'A menu filled with familiar favourites, bold flavours and satisfying portions.',
      detail: 'From sizzling clay-oven Chicken Tikka to wok-tossed Schezwan noodles and aromatic leaf-plate biryanis.',
      image: '/assets/gokulam/dish1.webp',
      icon: Flame,
      tag: 'The Kitchen',
    },
    {
      id: 'exp-3',
      title: 'Warm Hospitality',
      description: 'A relaxed, welcoming atmosphere made for families, friends and casual gatherings.',
      detail: 'Thoughtful service, unhurried meals, polished wooden bench dining, and an open, airy pavilion.',
      image: '/assets/gokulam/gokulam_ambiance.webp',
      icon: Users,
      tag: 'The Feeling',
    },
    {
      id: 'exp-4',
      title: 'A Place to Return To',
      description: 'A neighbourhood dining experience worth coming back to.',
      detail: 'Comfortable pricing, authentic recipes, vibrant mocktails, and memories created across the table.',
      image: '/assets/gokulam/mojitos.webp',
      icon: RotateCcw,
      tag: 'The Memory',
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 bg-[#121513] overflow-hidden border-t border-gold/15"
    >
      {/* Background Wood Lattice Pattern */}
      <div className="absolute inset-0 bg-wood-lattice opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
              The Gokulam Dining Journey
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            More Than a <span className="italic gold-gradient-text">Meal</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D3CBBC] font-normal">
            Step away from closed four-walled halls into an earthy courtyard where real conversations, warm breezes, and satisfying flavours come together.
          </p>
        </div>

        {/* 4 Feature Cards with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                className="group relative rounded-2xl overflow-hidden bg-[#161917] border border-gold/20 hover:border-gold/60 shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Photo Top Frame */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161917] via-transparent to-black/40" />

                  {/* Tag badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/30 text-[10px] font-mono uppercase tracking-wider text-gold">
                    {exp.tag}
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute bottom-3 right-3.5 w-10 h-10 rounded-full bg-gold/90 text-[#0E100F] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#161917] to-[#121513]">
                  <div>
                    <span className="text-[11px] font-mono text-terracotta tracking-wider uppercase block mb-1">
                      0{index + 1} // Experience
                    </span>
                    <h3 className="text-xl font-serif text-[#F7F4EC] font-semibold mb-2.5 group-hover:text-gold transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#F7F4EC] font-medium leading-snug mb-3">
                      {exp.description}
                    </p>
                    <p className="text-xs text-[#A39E93] leading-relaxed">
                      {exp.detail}
                    </p>
                  </div>

                  {/* Bottom Accent line */}
                  <div className="pt-4 mt-4 border-t border-gold/15 flex items-center justify-between text-xs text-gold/80 font-mono">
                    <span>Gokulam Hyderabad</span>
                    <span>✦</span>
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
