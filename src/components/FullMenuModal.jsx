import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

export default function FullMenuModal({ isOpen, onClose }) {
  const [activeSheet, setActiveSheet] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const sheets = [
    {
      title: 'Menu Sheet 1: Egg & Chicken Starters',
      src: '/assets/gokulam/menu_sheet_2.png',
      description: 'Includes Egg Omelette, Egg Bhurji, Chicken Popcorn, Chicken Majestic, Lollipop, 65, and signature starters.',
    },
    {
      title: 'Menu Sheet 2: Prawns, Fish, Fried Rice & Noodles',
      src: '/assets/gokulam/menu_sheet_1.png',
      description: 'Includes Loose Prawns, Apollo Fish, Veg/Egg/Chicken/Seafood Fried Rice and Hakka Noodles.',
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
    >
      {/* Container Card */}
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-[#141715] border border-gold/40 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-[#0E100F] border-b border-gold/25 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-gold/15 text-gold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="menu-modal-title" className="text-base sm:text-lg font-serif font-semibold text-cream">
                Original Gokulam Menu Sheet
              </h3>
              <p className="text-xs text-[#A39E93] font-mono hidden sm:block">
                Exact photographic record of the restaurant menu board
              </p>
            </div>
          </div>

          {/* Sheet Selector Tabs */}
          <div className="flex items-center gap-1.5 bg-[#1A1E1C] p-1 rounded-xl border border-gold/20">
            {sheets.map((sheet, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSheet(index);
                  setZoomLevel(1);
                }}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                  activeSheet === index
                    ? 'bg-gold text-[#0E100F] font-bold shadow-sm'
                    : 'text-[#D3CBBC] hover:text-white'
                }`}
              >
                Page {index + 1}
              </button>
            ))}
          </div>

          {/* Right Controls: Zoom & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
              className="p-1.5 rounded-lg border border-gold/30 text-cream hover:text-gold bg-[#1A1E1C]"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
              className="p-1.5 rounded-lg border border-gold/30 text-cream hover:text-gold bg-[#1A1E1C]"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 rounded-lg border border-gold/30 text-cream hover:text-gold bg-[#1A1E1C] hidden sm:block"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-terracotta/40 text-cream hover:text-terracotta bg-[#1A1E1C] ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Image Viewer */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#0B0D0C] relative">
          <div
            className="transition-transform duration-200 origin-center max-w-full flex justify-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={sheets[activeSheet].src}
              alt={sheets[activeSheet].title}
              className="max-h-[72vh] w-auto object-contain rounded-lg border border-gold/30 shadow-2xl"
            />
          </div>

          {/* Next / Previous arrows */}
          <button
            onClick={() => {
              setActiveSheet((prev) => (prev === 0 ? 1 : 0));
              setZoomLevel(1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0E100F]/80 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all shadow-lg"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              setActiveSheet((prev) => (prev === 1 ? 0 : 1));
              setZoomLevel(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0E100F]/80 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all shadow-lg"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#0E100F] border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A39E93] gap-2 flex-shrink-0">
          <p className="truncate max-w-xl text-cream font-mono">
            {sheets[activeSheet].title}: {sheets[activeSheet].description}
          </p>
          <a
            href={sheets[activeSheet].src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold hover:underline font-mono"
          >
            <span>Open High-Res Original</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
