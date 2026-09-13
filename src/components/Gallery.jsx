import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Play, Pause, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { GALLERY_CATEGORIES, COURTYARD_SPOTLIGHT, GALLERY_ITEMS } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const videoRef = useRef(null);

  // All gallery items + spotlight video accessible in lightbox
  const allLightboxItems = [
    {
      id: 'spotlight-video',
      title: COURTYARD_SPOTLIGHT.title,
      subtitle: COURTYARD_SPOTLIGHT.subtitle,
      category: 'ambiance',
      isVideo: true,
      video: COURTYARD_SPOTLIGHT.video,
      poster: COURTYARD_SPOTLIGHT.poster,
    },
    ...GALLERY_ITEMS,
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  // Category counts for pills
  const getCategoryCount = (catId) => {
    if (catId === 'all') return GALLERY_ITEMS.length;
    return GALLERY_ITEMS.filter((item) => item.category === catId).length;
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setShowAllMobile(false);
  };

  const openLightbox = (targetItem) => {
    const idx = allLightboxItems.findIndex((i) => i.id === targetItem.id);
    setSelectedItemIndex(idx !== -1 ? idx : 0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % allLightboxItems.length);
    }
  };

  const prevImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + allLightboxItems.length) % allLightboxItems.length
      );
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex]);

  const toggleVideoPlayback = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleVideoMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Visual Chronicles
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            An Evening at <span className="italic gold-gradient-text">Gokulam</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D3CBBC] font-normal leading-relaxed">
            Stroll through our open-air courtyard: illuminated red-tiled roof pavilion, glowing festoon fairy lights, relaxed garden seating, and authentic sizzling specialties.
          </p>
        </div>

        {/* ─── FEATURED COURTYARD SPOTLIGHT (Hero Showcase) ─── */}
        {(activeCategory === 'all' || activeCategory === 'ambiance') && (
          <div className="mb-14 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Main Cinematic Video Showcase (7 cols) */}
              <div
                onClick={() => openLightbox({ id: 'spotlight-video' })}
                className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-[#141715] border border-gold/30 hover:border-gold/70 shadow-2xl group cursor-pointer flex flex-col justify-end min-h-[360px] sm:min-h-[440px] transition-all duration-500"
              >
                <video
                  ref={videoRef}
                  src={COURTYARD_SPOTLIGHT.video}
                  poster={COURTYARD_SPOTLIGHT.poster}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                
                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F] via-[#0E100F]/40 to-black/30 group-hover:via-[#0E100F]/20 transition-all duration-500" />

                {/* Top Control Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E100F]/85 backdrop-blur-md border border-gold/40 text-gold text-xs font-mono tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Courtyard Walkthrough</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Audio Toggle */}
                    <button
                      type="button"
                      onClick={toggleVideoMute}
                      className="w-9 h-9 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                      title={isVideoMuted ? 'Unmute Audio' : 'Mute Audio'}
                    >
                      {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Expand Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox({ id: 'spotlight-video' });
                      }}
                      className="w-9 h-9 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                      title="View Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Center Play/Pause indicator */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-gold/90 text-[#0E100F] flex items-center justify-center shadow-gold-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {isVideoPlaying ? (
                      <Play className="w-7 h-7 fill-[#0E100F] ml-0.5" />
                    ) : (
                      <Pause className="w-7 h-7 fill-[#0E100F]" />
                    )}
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="relative z-20 p-6 sm:p-8">
                  <span className="text-[11px] font-mono text-gold uppercase tracking-[0.2em] block mb-1">
                    Live Ambiance Reel
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                    {COURTYARD_SPOTLIGHT.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D3CBBC] max-w-xl line-clamp-2 leading-relaxed">
                    {COURTYARD_SPOTLIGHT.subtitle}
                  </p>
                </div>
              </div>

              {/* Two Stacked Ambiance & Flavor Highlights (5 cols) */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                
                {/* Highlight Card 1: Night Illuminated Entrance */}
                <div
                  onClick={() => openLightbox(GALLERY_ITEMS[0])}
                  className="group relative rounded-3xl overflow-hidden bg-[#141715] border border-gold/25 hover:border-gold/70 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1 h-56 sm:h-64 lg:h-[206px]"
                >
                  <img
                    src="/assets/gokulam/gokulam_evening.webp"
                    alt="Illuminated Entrance at Night"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F]/95 via-[#0E100F]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/30 text-[10px] font-mono text-gold uppercase tracking-wider">
                      Ambiance Highlight
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/30 text-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-serif font-semibold text-cream group-hover:text-gold transition-colors">
                      Illuminated Entrance at Night
                    </h4>
                    <p className="text-xs text-[#D3CBBC] line-clamp-1 mt-0.5">
                      Backlit GOKULAM emblem, red Mangalore tile canopy & stone garden walk.
                    </p>
                  </div>
                </div>

                {/* Highlight Card 2: Open-Air Patio under Festoon Lights */}
                <div
                  onClick={() => openLightbox(GALLERY_ITEMS[3])}
                  className="group relative rounded-3xl overflow-hidden bg-[#141715] border border-gold/25 hover:border-gold/70 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1 h-56 sm:h-64 lg:h-[206px]"
                >
                  <img
                    src="/assets/gokulam/gokulam_evening_2.webp"
                    alt="Open-Air Patio Under Festoon Lights"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F]/95 via-[#0E100F]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/30 text-[10px] font-mono text-gold uppercase tracking-wider">
                      Patio Twilight
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/30 text-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-serif font-semibold text-cream group-hover:text-gold transition-colors">
                      Open-Air Patio Under Festoon Lights
                    </h4>
                    <p className="text-xs text-[#D3CBBC] line-clamp-1 mt-0.5">
                      Warm wooden tables, bamboo criss-cross lattice & glowing fairy lights.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs with Item Counters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          {GALLERY_CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold text-[#0E100F] font-bold shadow-gold-sm scale-105'
                    : 'bg-[#161917] text-[#D3CBBC] hover:text-white border border-gold/20 hover:border-gold/50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-[#0E100F]/30 text-[#0E100F] font-bold'
                      : 'bg-gold/15 text-gold'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ─── UNIFORM GAP-FREE PHOTO GRID (Mathematical 3-Column Layout) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isHiddenOnMobile = index >= 6 && !showAllMobile;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className={`group relative rounded-2xl overflow-hidden bg-[#141715] border border-gold/20 hover:border-gold/60 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  isHiddenOnMobile ? 'hidden sm:block' : 'block'
                }`}
              >
                {/* Standard Uniform 4:3 Aspect Ratio Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  
                  {/* High quality bottom scrim for typography readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F]/95 via-[#0E100F]/45 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#0E100F]/85 backdrop-blur-md border border-gold/30 text-[10px] font-mono text-gold uppercase tracking-wider">
                      {item.category === 'ambiance'
                        ? 'Courtyard'
                        : item.category === 'dishes'
                        ? 'Authentic Plate'
                        : 'Cooler'}
                    </span>
                  </div>

                  {/* Hover Maximize Icon */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#0E100F]/80 backdrop-blur-md border border-gold/40 text-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-cream mb-1 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#D3CBBC] line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile "Show More / Show Less" for grid */}
        {filteredItems.length > 6 && (
          <div className="sm:hidden mt-8 flex justify-center">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161917] border border-gold/40 hover:border-gold text-gold text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all shadow-md active:scale-95"
            >
              {showAllMobile
                ? 'Show Curated Highlights'
                : `Explore All Moments (${filteredItems.length - 6} More)`}
            </button>
          </div>
        )}

      </div>

      {/* ─── FULLSCREEN IMMERSIVE LIGHTBOX MODAL ─── */}
      {selectedItemIndex !== null && allLightboxItems[selectedItemIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#161917] border border-gold/40 text-cream hover:text-gold hover:border-gold transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation: Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#161917]/85 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all shadow-xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation: Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#161917]/85 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all shadow-xl"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Stage Media */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          >
            {allLightboxItems[selectedItemIndex].isVideo ? (
              <video
                src={allLightboxItems[selectedItemIndex].video}
                poster={allLightboxItems[selectedItemIndex].poster}
                controls
                autoPlay
                playsInline
                className="max-h-[65vh] w-full max-w-2xl rounded-2xl border border-gold/40 shadow-2xl bg-black"
              />
            ) : (
              <img
                src={allLightboxItems[selectedItemIndex].image}
                alt={allLightboxItems[selectedItemIndex].title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-2xl border border-gold/40 shadow-2xl"
              />
            )}

            <div className="mt-5 text-center max-w-xl">
              <span className="text-xs font-mono text-gold uppercase tracking-wider">
                {allLightboxItems[selectedItemIndex].category} • {selectedItemIndex + 1} of{' '}
                {allLightboxItems.length}
              </span>
              <h4 className="text-xl sm:text-2xl font-serif text-cream font-bold mt-1.5 mb-1.5">
                {allLightboxItems[selectedItemIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#D3CBBC] leading-relaxed">
                {allLightboxItems[selectedItemIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

