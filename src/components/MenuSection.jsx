import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  FileText,
  X,
  Utensils,
  Flame,
  Fish,
  Egg,
  LayoutGrid,
  List,
  Eye,
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection({ onOpenFullMenu }) {
  // Category & Filter State
  const [activeCategory, setActiveCategory] = useState('specials');
  const [selectedDiet, setSelectedDiet] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' (cards with images) or 'list' (compact)
  const [previewDish, setPreviewDish] = useState(null);

  // Category Icon Mapping
  const categoryIcons = {
    'specials': Sparkles,
    'chicken-starters': Flame,
    'prawns-fish': Fish,
    'egg-starters': Egg,
    'fried-rice': Utensils,
    'noodles': Utensils,
  };

  // Diet filter options
  const dietOptions = [
    { id: 'all', label: 'All Diets' },
    { id: 'veg', label: 'Pure Veg', dot: 'bg-emerald-500' },
    { id: 'non-veg', label: 'Chicken & Meat', dot: 'bg-red-500' },
    { id: 'egg', label: 'Egg', dot: 'bg-amber-400' },
    { id: 'seafood', label: 'Prawns & Fish', dot: 'bg-cyan-400' },
  ];

  const isSearching = searchQuery.trim().length > 0;
  const currentCategoryObj = MENU_CATEGORIES.find((c) => c.id === activeCategory) || MENU_CATEGORIES[0];

  // Filtered dishes
  const displayedItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = isSearching ? true : item.category === activeCategory;
      const matchDiet = selectedDiet === 'all' || item.diet === selectedDiet;
      const matchSearch =
        !isSearching ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchDiet && matchSearch;
    });
  }, [activeCategory, selectedDiet, searchQuery, isSearching]);

  const renderDietDot = (diet) => {
    switch (diet) {
      case 'veg':
        return (
          <span className="w-4 h-4 border border-emerald-500/80 rounded-[4px] flex items-center justify-center p-[2px] flex-shrink-0 bg-[#0E100F]/60" title="Vegetarian">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </span>
        );
      case 'egg':
        return (
          <span className="w-4 h-4 border border-amber-400/80 rounded-[4px] flex items-center justify-center p-[2px] flex-shrink-0 bg-[#0E100F]/60" title="Egg Dish">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          </span>
        );
      case 'seafood':
        return (
          <span className="w-4 h-4 border border-cyan-400/80 rounded-[4px] flex items-center justify-center p-[2px] flex-shrink-0 bg-[#0E100F]/60" title="Seafood / Fish">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
          </span>
        );
      case 'non-veg':
      default:
        return (
          <span className="w-4 h-4 border border-red-500/80 rounded-[4px] flex items-center justify-center p-[2px] flex-shrink-0 bg-[#0E100F]/60" title="Non-Vegetarian">
            <span className="w-2 h-2 rounded-full bg-red-500" />
          </span>
        );
    }
  };

  return (
    <section
      id="menu"
      className="relative py-20 sm:py-28 bg-[#0E100F] overflow-hidden border-t border-gold/15"
    >
      {/* Background Lattice Pattern */}
      <div className="absolute inset-0 bg-jaali opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
              Culinary Repertoire
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            Our Traditional <span className="italic gold-gradient-text">Courtyard Menu</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D3CBBC] font-normal leading-relaxed">
            Browse our complete menu with authentic dish photography, exact prices, and dietary filters. Tap any dish for close-up view and chef notes.
          </p>
        </div>

        {/* Search & Top Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-3xl bg-[#141715] border border-gold/20 shadow-xl">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by dish name, spice level, ingredient..."
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-[#0E100F] border border-gold/20 text-cream placeholder:text-[#A39E93] text-sm focus:outline-none focus:border-gold transition-colors font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A39E93] hover:text-cream"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Controls: Diet Filter + View Mode Toggle */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1 md:pb-0">
            {/* Diet Pills */}
            <div className="flex items-center gap-1.5 bg-[#0E100F] p-1 rounded-full border border-gold/20">
              {dietOptions.map((opt) => {
                const isSelected = selectedDiet === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedDiet(opt.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      isSelected
                        ? 'bg-gold text-[#0E100F] font-bold shadow-sm'
                        : 'text-[#D3CBBC] hover:text-cream hover:bg-gold/10'
                    }`}
                  >
                    {opt.dot && <span className={`w-2 h-2 rounded-full ${opt.dot}`} />}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle: Grid vs List */}
            <div className="flex items-center gap-1 bg-[#0E100F] p-1 rounded-full border border-gold/20 flex-shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-gold text-[#0E100F]' : 'text-[#A39E93] hover:text-cream'
                }`}
                title="Photo Grid View"
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'list' ? 'bg-gold text-[#0E100F]' : 'text-[#A39E93] hover:text-cream'
                }`}
                title="Compact List View"
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Category Tab Strip (when not actively searching) */}
        {!isSearching && (
          <div className="mb-10 overflow-x-auto scrollbar-none pb-2">
            <div className="flex items-center gap-3 min-w-max">
              {MENU_CATEGORIES.map((cat) => {
                const IconComponent = categoryIcons[cat.id] || Utensils;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`group relative px-5 py-3 rounded-2xl border transition-all duration-300 flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-terracotta/20 to-gold/20 border-gold text-cream shadow-gold-sm font-semibold'
                        : 'bg-[#141715]/70 border-gold/20 text-[#A39E93] hover:border-gold/50 hover:text-cream'
                    }`}
                  >
                    <IconComponent
                      className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-gold' : 'text-[#A39E93] group-hover:text-gold'
                      }`}
                    />
                    <div className="text-left">
                      <div className="text-xs font-mono uppercase tracking-wider">{cat.name}</div>
                      <div className="text-[10px] text-[#A39E93] font-mono">
                        {cat.telugu} • {cat.itemCount} items
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Search Results / Category Banner */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gold/15">
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-cream">
              {isSearching ? `Search Results for "${searchQuery}"` : currentCategoryObj.name}
            </h3>
            <p className="text-xs text-[#A39E93] font-mono mt-0.5">
              Showing {displayedItems.length} dishes
              {selectedDiet !== 'all' && ` • Filtered by ${selectedDiet}`}
            </p>
          </div>

          {/* Download / Full Menu Trigger */}
          {onOpenFullMenu && (
            <button
              onClick={onOpenFullMenu}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-gold hover:text-[#FFF4D0] underline transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Menu PDF</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {displayedItems.length === 0 && (
          <div className="text-center py-16 px-4 rounded-3xl bg-[#141715] border border-gold/20">
            <Utensils className="w-12 h-12 text-gold/40 mx-auto mb-3" />
            <h4 className="text-lg font-serif font-bold text-cream mb-1">No dishes found</h4>
            <p className="text-xs text-[#A39E93] font-mono mb-4">
              Try adjusting your search query or dietary filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDiet('all');
              }}
              className="px-4 py-2 rounded-full bg-gold text-[#0E100F] font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* VIEW 1: Visual Photo Cards (DEFAULT) */}
        {viewMode === 'grid' && displayedItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedItems.map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="rounded-2xl bg-[#161917] border border-gold/20 hover:border-gold/55 p-3.5 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Photo Container */}
                  <div
                    onClick={() => setPreviewDish(dish)}
                    className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-[#0E100F] cursor-pointer mb-3.5 group/img"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E100F]/80 via-transparent to-black/20" />

                    {/* Top Left: Diet Dot */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      {renderDietDot(dish.diet)}
                    </div>

                    {/* Top Right: Badges */}
                    {(dish.badge || dish.isSignature) && (
                      <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full bg-terracotta/90 backdrop-blur-md text-[10px] font-mono font-semibold uppercase tracking-wider text-white shadow">
                        {dish.badge || 'Popular'}
                      </div>
                    )}

                    {/* Bottom Quick View Hint */}
                    <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 px-2 py-1 rounded-md bg-[#0E100F]/90 text-[10px] font-mono text-gold flex items-center gap-1 border border-gold/30">
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </div>

                    {/* Price Overlay on Image */}
                    <div className="absolute bottom-2.5 left-2.5 font-serif font-bold text-lg text-cream drop-shadow">
                      ₹{dish.price}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => setPreviewDish(dish)}
                        className="font-serif text-base font-bold text-cream group-hover:text-gold transition-colors cursor-pointer line-clamp-1 mb-1"
                      >
                        {dish.name}
                      </h3>
                      <p className="text-xs text-[#A39E93] leading-relaxed line-clamp-2 mb-3">
                        {dish.description}
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-gold/15 flex items-center justify-between">
                      <span className="text-xs font-mono text-gold font-bold">
                        ₹{dish.price}
                      </span>

                      <button
                        onClick={() => setPreviewDish(dish)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold/15 hover:bg-gold text-gold hover:text-[#0E100F] border border-gold/35 text-xs font-mono font-semibold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95"
                        title={`View details for ${dish.name}`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: Compact List View */}
        {viewMode === 'list' && displayedItems.length > 0 && (
          <div className="divide-y divide-gold/15 rounded-3xl bg-[#141715] border border-gold/20 overflow-hidden shadow-xl">
            {displayedItems.map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#1B1F1C] transition-colors"
                >
                  {/* Left: Thumbnail + Title */}
                  <div
                    onClick={() => setPreviewDish(dish)}
                    className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 cursor-pointer"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-[#0E100F] flex-shrink-0 border border-gold/20">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {renderDietDot(dish.diet)}
                        <h4 className="font-serif text-base font-bold text-cream hover:text-gold transition-colors truncate">
                          {dish.name}
                        </h4>
                        {(dish.badge || dish.isSignature) && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-mono uppercase bg-terracotta/20 text-terracotta border border-terracotta/30">
                            {dish.badge || 'Popular'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#A39E93] line-clamp-1">
                        {dish.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Price & Details button */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-serif font-bold text-base text-gold">
                      ₹{dish.price}
                    </span>

                    <button
                      onClick={() => setPreviewDish(dish)}
                      className="w-8 h-8 rounded-full bg-gold/15 hover:bg-gold text-gold hover:text-[#0E100F] border border-gold/30 flex items-center justify-center transition-all"
                      title={`View details for ${dish.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Dish Quick Photo Preview Lightbox Modal */}
      {previewDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-lg w-full bg-[#141715] border border-gold/40 rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-6">
            <button
              onClick={() => setPreviewDish(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/80 text-cream hover:text-terracotta border border-gold/30"
              aria-label="Close preview"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden border border-gold/30 mb-4 bg-black">
              <img
                src={previewDish.image}
                alt={previewDish.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {renderDietDot(previewDish.diet)}
                <h4 className="font-serif text-xl font-bold text-cream">
                  {previewDish.name}
                </h4>
              </div>
              <span className="font-serif text-2xl font-bold text-gold">
                ₹{previewDish.price}
              </span>
            </div>

            {(previewDish.badge || previewDish.isSignature) && (
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-terracotta/20 text-terracotta border border-terracotta/30 text-xs font-mono uppercase tracking-wider mb-2">
                {previewDish.badge || 'Signature Dish'}
              </div>
            )}

            <p className="text-sm text-[#D3CBBC] leading-relaxed">
              {previewDish.description}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
