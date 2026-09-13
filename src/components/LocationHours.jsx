import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Car, Users, Utensils } from 'lucide-react';

export default function LocationHours() {
  // Clear placeholder phone number as specified in prompt
  // (Easily replaced with official number once provided by restaurant)
  const PHONE_PLACEHOLDER = '+91 91000 00000';
  const PHONE_TEL_URI = 'tel:+919100000000';

  const ADDRESS_LINE_1 = '240, Kukatpally Housing Board Colony,';
  const ADDRESS_LINE_2 = 'K P H B Phase 6, Kukatpally,';
  const ADDRESS_LINE_3 = 'Hyderabad, Telangana 500085';

  const openGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/place/CAFE+GOKULAM/@17.4882145,78.3830695,19z/data=!4m6!3m5!1s0x3bcb9331aa997777:0xff4a908c3fdc9ca6!8m2!3d17.4882145!4d78.3830695!16s%2Fg%2F11w7tq9_04',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="location"
      className="relative py-20 sm:py-28 bg-[#0E100F] overflow-hidden border-t border-gold/15"
    >
      {/* Background Lattice */}
      <div className="absolute inset-0 bg-jaali opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">
              Visit Gokulam
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            Find Your Way to <span className="italic gold-gradient-text">Gokulam</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D3CBBC] font-normal leading-relaxed">
            Conveniently located in the heart of KPHB Phase 6, Kukatpally. Come join us under the stars for an authentic feast.
          </p>
        </div>

        {/* Content Layout: Info Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 bg-[#141715] border border-gold/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-terracotta/20 border border-terracotta/40 text-terracotta flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-1">
                    Restaurant Address
                  </h3>
                  <p className="text-base sm:text-lg font-serif text-cream font-medium leading-snug">
                    {ADDRESS_LINE_1}<br />
                    {ADDRESS_LINE_2}<br />
                    {ADDRESS_LINE_3}
                  </p>
                  <span className="text-xs text-[#A39E93] font-mono mt-1 block">
                    Landmark: Kukatpally Housing Board Colony
                  </span>
                </div>
              </div>

              {/* Operating Timings */}
              <div className="flex items-start gap-4 pt-4 border-t border-gold/15">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 text-gold flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-1">
                    Operating Hours
                  </h3>
                  <p className="text-base font-serif text-cream font-medium">
                    12:00 PM – 11:00 PM
                  </p>
                  <span className="text-xs text-[#A39E93] font-mono mt-0.5 block">
                    Open All 7 Days • Lunch & Dinner
                  </span>
                </div>
              </div>

              {/* Amenities & Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gold/15">
                <div className="flex items-center gap-2 text-xs text-[#D3CBBC]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Open-Air Courtyard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#D3CBBC]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Family Seating</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#D3CBBC]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Takeaway Available</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#D3CBBC]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Two-Wheeler Parking</span>
                </div>
              </div>

            </div>


          </div>

          {/* Right Map Panel */}
          <div className="lg:col-span-7 bg-[#141715] border border-gold/30 rounded-3xl overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[440px] relative flex flex-col">
            
            {/* Embedded Official Google Maps for CAFE GOKULAM */}
            <iframe
              title="CAFE GOKULAM Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.6755084194229!2d78.38306946515462!3d17.488214525728278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9331aa997777%3A0xff4a908c3fdc9ca6!2sCAFE%20GOKULAM!5e0!3m2!1sen!2sin!4v1788858706216!5m2!1sen!2sin"
              className="w-full h-full min-h-[400px] border-0 filter contrast-[105%]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Interactive Overlay Bar */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0E100F]/90 backdrop-blur-md border border-gold/30 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/20 border border-terracotta/40 text-terracotta flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-cream">
                    CAFE GOKULAM
                  </h4>
                  <p className="text-xs text-[#A39E93] font-mono">
                    240, KPHB Phase 6, Kukatpally
                  </p>
                </div>
              </div>

              <button
                onClick={openGoogleMaps}
                className="px-4 py-2 rounded-full bg-gold text-[#0E100F] text-xs font-mono font-bold uppercase tracking-wider hover:brightness-110 shadow-sm"
              >
                Directions
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
