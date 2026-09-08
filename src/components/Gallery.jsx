import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 bg-[#0E100F] overflow-hidden border-t border-gold/15"
    >
      {/* Background Lattice */}
      <div className="absolute inset-0 bg-jaali opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
              Visual Chronicles
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            An Evening at <span className="italic gold-gradient-text">Gokulam</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D3CBBC] font-normal leading-relaxed">
            Take a stroll through our courtyard: red Mangalore roof tiles, glowing evening lanterns, handcrafted cane seating, and steaming plates of authentic food.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gold text-[#0E100F] font-bold shadow-gold-sm'
                    : 'bg-[#161917] text-[#D3CBBC] hover:text-white border border-gold/20 hover:border-gold/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isTall = item.aspect === 'tall';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden bg-[#141715] border border-gold/20 hover:border-gold/60 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                <div className={`relative w-full ${isTall ? 'h-full min-h-[420px]' : 'h-72'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F]/90 via-[#0E100F]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Expand icon on hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/40 text-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-mono text-gold uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#D3CBBC] line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.subtitle}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#161917] border border-gold/40 text-cream hover:text-terracotta transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#161917]/80 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#161917]/80 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image in Lightbox */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[65vh] w-auto object-contain rounded-xl border border-gold/30 shadow-2xl"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-mono text-gold uppercase tracking-wider">
                {filteredItems[selectedImageIndex].category} • {selectedImageIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="text-xl font-serif text-cream font-bold mt-1 mb-1">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#A39E93]">
                {filteredItems[selectedImageIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
