import React, { useState, useMemo } from 'react';
import { Search, Sparkles, FileText, Plus, Minus, ShoppingBag, X, Check, Camera, Utensils, Award, Flame, Fish, Egg } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection({ onOpenFullMenu }) {
  // Default to curated specials so the user is never bombarded with 70 items at once
  const [activeCategory, setActiveCategory] = useState('specials');
  const [selectedDiet, setSelectedDiet] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [tray, setTray] = useState({});
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [previewDish, setPreviewDish] = useState(null);

  // Diet filter options
  const dietOptions = [
    { id: 'all', label: 'All Diets' },
    { id: 'veg', label: 'Pure Veg', dot: 'bg-emerald-500' },
    { id: 'non-veg', label: 'Chicken & Meat', dot: 'bg-red-500' },
    { id: 'egg', label: 'Egg', dot: 'bg-amber-400' },
    { id: 'seafood', label: 'Prawns & Fish', dot: 'bg-cyan-400' },
  ];

  // If search query is active, search across entire menu; otherwise filter by activeCategory
  const isSearching = searchQuery.trim().length > 0;

  const currentCategoryObj = MENU_CATEGORIES.find((c) => c.id === activeCategory) || MENU_CATEGORIES[0];

  const displayedItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // If searching, ignore category filter to provide global search
      const matchCategory = isSearching ? true : item.category === activeCategory;
      const matchDiet = selectedDiet === 'all' || item.diet === selectedDiet;
      const matchSearch =
        !isSearching ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchDiet && matchSearch;
    });
  }, [activeCategory, selectedDiet, searchQuery, isSearching]);

  // For Fried Rice & Noodles, partition into Veg vs Non-Veg sub-groups if not searching
  const isPartitionable = !isSearching && (activeCategory === 'fried-rice' || activeCategory === 'noodles');
  const vegItems = useMemo(() => {
    return displayedItems.filter((i) => i.diet === 'veg');
  }, [displayedItems]);
  const nonVegItems = useMemo(() => {
    return displayedItems.filter((i) => i.diet !== 'veg');
  }, [displayedItems]);

  // Tray management
  const addToTray = (item) => {
    setTray((prev) => ({
      ...prev,
      [item.id]: {
        item,
        quantity: (prev[item.id]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromTray = (itemId) => {
    setTray((prev) => {
      const current = prev[itemId]?.quantity || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          quantity: current - 1,
        },
      };
    });
  };

  const trayCount = Object.values(tray).reduce((acc, curr) => acc + curr.quantity, 0);
  const traySubtotal = Object.values(tray).reduce(
    (acc, curr) => acc + curr.quantity * curr.item.price,
    0
  );

  const renderDietDot = (diet) => {
    switch (diet) {
      case 'veg':
        return (
          <span className="w-3.5 h-3.5 border border-emerald-500/80 rounded-[2px] flex items-center justify-center p-[2px] flex-shrink-0" title="Vegetarian">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </span>
        );
      case 'egg':
        return (
          <span className="w-3.5 h-3.5 border border-amber-400/80 rounded-[2px] flex items-center justify-center p-[2px] flex-shrink-0" title="Egg Preparation">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          </span>
        );
      case 'seafood':
        return (
          <span className="w-3.5 h-3.5 border border-cyan-400/80 rounded-[2px] flex items-center justify-center p-[2px] flex-shrink-0" title="Seafood">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </span>
        );
      case 'non-veg':
      default:
        return (
          <span className="w-3.5 h-3.5 border border-red-500/80 rounded-[2px] flex items-center justify-center p-[2px] flex-shrink-0" title="Non-Vegetarian">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          </span>
        );
    }
  };

  // Render a single menu row in high-end editorial restaurant line format
  const renderMenuItem = (dish) => {
    const inTrayCount = tray[dish.id]?.quantity || 0;

    return (
      <div
        key={dish.id}
        className="group relative py-3.5 px-4 rounded-xl hover:bg-[#161917] border border-transparent hover:border-gold/20 transition-all duration-200"
      >
        {/* Main Line: Name + Dotted Leader + Price + Action */}
        <div className="flex items-baseline justify-between gap-2">
          
          {/* Dish Name & Badges */}
          <div className="flex items-center flex-wrap gap-2 pr-2">
            {renderDietDot(dish.diet)}

            <span className="font-serif text-base sm:text-lg font-semibold text-cream group-hover:text-gold transition-colors">
              {dish.name}
            </span>

            {dish.isSignature && (
              <span className="px-1.5 py-0.5 rounded bg-terracotta/20 text-terracotta text-[9px] font-mono uppercase tracking-wider flex-shrink-0">
                Popular
              </span>
            )}

            {/* Photo Indicator if authentic photo exists */}
            {dish.image && (
              <button
                onClick={() => setPreviewDish(dish)}
                className="inline-flex items-center gap-1 text-[10px] font-mono text-gold/80 hover:text-gold bg-gold/10 hover:bg-gold/20 px-1.5 py-0.5 rounded transition-colors flex-shrink-0"
                title="View actual dish photo"
              >
                <Camera className="w-3 h-3" />
                <span className="hidden sm:inline">Photo</span>
              </button>
            )}
          </div>

          {/* Dotted Leader Line */}
          <div className="flex-1 border-b border-dotted border-gold/25 mx-2 min-w-[20px] mb-1.5 hidden sm:block" />

          {/* Price & Add Button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="font-serif font-bold text-base sm:text-lg text-gold whitespace-nowrap">
              ₹{dish.price}
            </span>

            {inTrayCount > 0 ? (
              <div className="flex items-center gap-1 bg-[#1A1E1C] rounded-full border border-gold/40 px-1.5 py-0.5">
                <button
                  onClick={() => removeFromTray(dish.id)}
                  className="w-5 h-5 rounded-full text-cream hover:text-terracotta flex items-center justify-center text-xs"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-mono text-xs font-bold text-gold px-1">
                  {inTrayCount}
                </span>
                <button
                  onClick={() => addToTray(dish)}
                  className="w-5 h-5 rounded-full text-cream hover:text-gold flex items-center justify-center text-xs"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToTray(dish)}
                className="w-7 h-7 rounded-full bg-gold/15 hover:bg-gold text-gold hover:text-[#0E100F] border border-gold/30 flex items-center justify-center transition-all transform hover:scale-105"
                title={`Add ${dish.name} to estimated tray`}
                aria-label={`Add ${dish.name} to tray`}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Concise Description Line */}
        {dish.description && (
          <p className="text-xs text-[#A39E93] leading-relaxed mt-1 pl-5">
            {dish.description}
          </p>
        )}
      </div>
    );
  };

  return (
    <section
      id="menu"
      className="relative py-16 sm:py-24 bg-[#0E100F] overflow-hidden border-t border-gold/15"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-jaali opacity-25 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
              Authentic Bill of Fare
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-3">
            The Gokulam <span className="italic gold-gradient-text">Menu</span>
          </h2>

          <p className="text-sm sm:text-base text-[#D3CBBC] font-normal leading-relaxed">
            Exact recipes and prices transcribed from our physical menu board. Select a category below or search your favourites.
          </p>

          {/* Scanned Original Menu Lightbox Action Banner */}
          <div className="mt-5">
            <button
              onClick={onOpenFullMenu}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#161917] hover:bg-[#1F2420] border border-gold/35 text-gold hover:text-white text-xs font-mono uppercase tracking-wider transition-all shadow-gold-sm hover:shadow-gold-md"
            >
              <FileText className="w-4 h-4 text-gold" />
              <span>View Original Scanned Menu Boards</span>
            </button>
          </div>
        </div>

        {/* Compact Navigation & Filter Toolbar */}
        <div className="space-y-4 mb-8">
          
          {/* Category Tabs Strip */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = !isSearching && activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery('');
                  }}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 flex-shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] text-[#0E100F] font-bold shadow-gold-sm scale-105'
                      : 'bg-[#141715] text-[#D3CBBC] hover:text-gold border border-gold/20 hover:border-gold/50'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                    isActive ? 'bg-[#0E100F] text-gold' : 'bg-[#1E2320] text-[#A39E93]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Filter Sub-bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#121513] p-3 rounded-2xl border border-gold/20">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search all 70+ dishes..."
                className="w-full bg-[#0E100F] border border-gold/25 rounded-xl pl-9 pr-8 py-2 text-xs text-cream placeholder-[#A39E93]/60 focus:outline-none focus:border-gold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Diet Filter Chips */}
            <div className="flex items-center flex-wrap gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
              {dietOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDiet(opt.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    selectedDiet === opt.id
                      ? 'bg-gold text-[#0E100F] font-bold shadow-sm'
                      : 'bg-[#1A1E1C] text-[#D3CBBC] hover:text-white'
                  }`}
                >
                  {opt.dot && <span className={`w-1.5 h-1.5 rounded-full ${opt.dot}`} />}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Category Description Subtitle Banner */}
        {!isSearching && (
          <div className="mb-6 px-4 py-2.5 rounded-xl bg-[#141715]/70 border-l-2 border-gold flex items-center justify-between">
            <span className="text-xs text-[#D3CBBC] font-mono">
              ✦ {currentCategoryObj.subtitle}
            </span>
            <span className="text-[11px] font-mono text-gold hidden sm:inline">
              {displayedItems.length} options available
            </span>
          </div>
        )}

        {isSearching && (
          <div className="mb-6 px-4 py-2.5 rounded-xl bg-[#141715] border border-gold/30 flex items-center justify-between">
            <span className="text-xs text-cream font-mono">
              Showing search results for: <strong className="text-gold">"{searchQuery}"</strong>
            </span>
            <span className="text-xs font-mono text-gold">
              {displayedItems.length} matches found
            </span>
          </div>
        )}

        {/* Menu Items Container: Luxury Editorial Menu Book */}
        <div className="bg-[#121513] rounded-3xl border border-gold/25 p-4 sm:p-8 shadow-2xl">
          
          {displayedItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-cream font-serif text-base mb-1">No dishes match your selection</p>
              <p className="text-xs text-[#A39E93]">Try selecting "All Diets" or clear your search.</p>
              <button
                onClick={() => {
                  setSelectedDiet('all');
                  setSearchQuery('');
                }}
                className="mt-3 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-mono uppercase"
              >
                Reset Filter
              </button>
            </div>
          ) : isPartitionable ? (
            /* Partitioned View for Fried Rice & Noodles (Veg vs Non-Veg/Egg) */
            <div className="space-y-8">
              
              {/* Veg Sub-Section */}
              {vegItems.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-4 border-b border-emerald-500/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <h3 className="font-serif text-lg font-semibold text-emerald-400">
                      Vegetarian Selections ({vegItems.length})
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                    {vegItems.map(renderMenuItem)}
                  </div>
                </div>
              )}

              {/* Non-Veg & Egg Sub-Section */}
              {nonVegItems.length > 0 && (
                <div className="pt-4 border-t border-gold/15">
                  <div className="flex items-center gap-2 pb-2 mb-4 border-b border-red-500/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <h3 className="font-serif text-lg font-semibold text-red-400">
                      Egg, Chicken & Seafood Selections ({nonVegItems.length})
                    </h3>
                    <span className="text-[11px] font-mono text-gold ml-auto">
                      Extra Egg: ₹10
                    </span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                    {nonVegItems.map(renderMenuItem)}
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Standard 2-Column Editorial Grid for Starters & Specials */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
              {displayedItems.map(renderMenuItem)}
            </div>
          )}

        </div>

      </div>

      {/* Dish Quick Photo Preview Lightbox Modal */}
      {previewDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-md w-full bg-[#161917] border border-gold/40 rounded-2xl overflow-hidden shadow-2xl p-4 animate-fadeIn">
            <button
              onClick={() => setPreviewDish(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/70 text-cream hover:text-terracotta border border-gold/30"
              aria-label="Close preview"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-64 rounded-xl overflow-hidden border border-gold/20 mb-3">
              <img
                src={previewDish.image}
                alt={previewDish.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                {renderDietDot(previewDish.diet)}
                <h4 className="font-serif text-lg font-bold text-cream">
                  {previewDish.name}
                </h4>
              </div>
              <span className="font-serif text-lg font-bold text-gold">
                ₹{previewDish.price}
              </span>
            </div>

            <p className="text-xs text-[#D3CBBC] leading-relaxed mb-4">
              {previewDish.description}
            </p>

            <button
              onClick={() => {
                addToTray(previewDish);
                setPreviewDish(null);
              }}
              className="w-full py-2.5 rounded-full bg-gold text-[#0E100F] font-bold font-mono text-xs uppercase tracking-wider hover:brightness-110"
            >
              Add to Estimated Tray (₹{previewDish.price})
            </button>
          </div>
        </div>
      )}

      {/* Floating Order Estimator Tray Pill (Bottom Right) */}
      {trayCount > 0 && (
        <div className="fixed bottom-6 right-6 z-40 animate-slideUp">
          <button
            onClick={() => setIsTrayOpen(true)}
            className="px-5 py-3.5 rounded-full bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] text-[#0E100F] font-bold shadow-2xl flex items-center gap-3 hover:brightness-110 transition-transform transform hover:scale-105"
          >
            <div className="w-6 h-6 rounded-full bg-[#0E100F] text-gold flex items-center justify-center text-xs font-mono">
              {trayCount}
            </div>
            <span className="text-xs uppercase tracking-wider">
              Estimated Tray: ₹{traySubtotal}
            </span>
          </button>
        </div>
      )}

      {/* Estimator Tray Drawer */}
      {isTrayOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md h-full bg-[#141715] border-l border-gold/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gold/20">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-serif font-bold text-cream">
                    Your Dining Tray
                  </h3>
                </div>
                <button
                  onClick={() => setIsTrayOpen(false)}
                  className="p-1 rounded-lg border border-gold/30 text-cream hover:text-gold"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-[#A39E93] mt-3 font-mono">
                This is an estimated bill for your table visit. Pay directly at the restaurant counter!
              </p>

              <div className="mt-6 space-y-3">
                {Object.values(tray).map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0E100F] border border-gold/15"
                  >
                    <div>
                      <div className="text-sm font-serif font-semibold text-cream">
                        {item.name}
                      </div>
                      <div className="text-xs text-gold font-mono">
                        ₹{item.price} × {quantity} = ₹{item.price * quantity}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromTray(item.id)}
                        className="w-6 h-6 rounded-full bg-[#1A1E1C] text-cream flex items-center justify-center text-xs"
                      >
                        -
                      </button>
                      <span className="font-mono text-xs font-bold text-cream">
                        {quantity}
                      </span>
                      <button
                        onClick={() => addToTray(item)}
                        className="w-6 h-6 rounded-full bg-gold text-[#0E100F] flex items-center justify-center text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gold/20">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm text-[#A39E93] font-mono">Estimated Subtotal</span>
                <span className="text-2xl font-serif font-bold text-gold">₹{traySubtotal}</span>
              </div>
              <a
                href="#location"
                onClick={() => setIsTrayOpen(false)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#B68C26] text-[#0E100F] font-bold text-center block text-xs uppercase tracking-widest shadow-gold-sm hover:brightness-110"
              >
                Visit Gokulam To Enjoy
              </a>
              <button
                onClick={() => setTray({})}
                className="w-full text-center text-xs text-terracotta hover:underline mt-2.5 font-mono"
              >
                Clear Tray
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
