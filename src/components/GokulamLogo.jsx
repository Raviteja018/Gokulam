import React from 'react';

/**
 * Gokulam Brand Identity:
 * 1. The letter "G" is noticeably larger and taller than the remaining letters "OKULAM"
 *    as the primary visual focal point.
 * 2. "OKULAM" is rendered at a prominent, generous size with elegant serif tracking.
 * 3. The handcrafted Indian bamboo flute (bansuri) begins directly underneath the letter "U"
 *    and extends horizontally across "ULAM", overflowing past "M" with a refined, balanced size.
 * 4. Responsive presets: 'sm' is tailored for mobile screens with zero clipping or crowding.
 */
export default function GokulamLogo({ size = 'md', variant = 'gold', className = '' }) {
  const sizeMap = {
    sm: {
      gSize: 'text-2xl sm:text-[1.75rem]',
      restSize: 'text-base sm:text-lg tracking-[0.2em]',
      fluteWidth: 125,
      fluteHeight: 16,
      fluteTop: 'top-[84%]',
      paddingBottom: 'pb-2.5',
      paddingRight: 'pr-10 sm:pr-12',
      gSpacing: 'mr-[0.05em]',
    },
    md: {
      gSize: 'text-4xl sm:text-[2.75rem]',
      restSize: 'text-2xl sm:text-3xl tracking-[0.24em]',
      fluteWidth: 175,
      fluteHeight: 22,
      fluteTop: 'top-[88%]',
      paddingBottom: 'pb-3.5',
      paddingRight: 'pr-14 sm:pr-18',
      gSpacing: 'mr-[0.08em]',
    },
    lg: {
      gSize: 'text-6xl sm:text-7xl md:text-8xl',
      restSize: 'text-4xl sm:text-5xl md:text-6xl tracking-[0.26em]',
      fluteWidth: 250,
      fluteHeight: 32,
      fluteTop: 'top-[90%]',
      paddingBottom: 'pb-5',
      paddingRight: 'pr-20 sm:pr-28',
      gSpacing: 'mr-[0.1em]',
    },
  };

  const current = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`inline-flex flex-col items-start select-none relative ${current.paddingBottom} ${current.paddingRight} ${className}`}
      aria-label="GOKULAM Restaurant Logo"
    >
      {/* Brand Wordmark Row: 'G' prominently taller, 'OKULAM' generous & prominent */}
      <div className="inline-flex items-baseline leading-none">
        {/* Prominent Capital 'G' */}
        <span
          className={`font-display font-extrabold uppercase transition-all duration-300 ${current.gSize} ${current.gSpacing} leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#D4AF37] to-[#B89228] drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]`}
        >
          G
        </span>

        {/* Smaller Caps 'OK' */}
        <span
          className={`font-display font-bold uppercase transition-all duration-300 ${current.restSize} leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#D4AF37] to-[#B89228] drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]`}
        >
          OK
        </span>

        {/* 'ULAM' with Flute Originating Specifically at 'U' and Overflowing past 'M' */}
        <span className="relative inline-block leading-none">
          <span
            className={`font-display font-bold uppercase transition-all duration-300 ${current.restSize} leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#D4AF37] to-[#B89228] drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]`}
          >
            ULAM
          </span>

          {/* Authentic Bansuri Flute: Starts specifically at 'U', spans across 'ULAM', and overflows past 'M' */}
          <svg
            width={current.fluteWidth}
            height={current.fluteHeight}
            viewBox="16 0 206 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute left-0 ${current.fluteTop} overflow-visible transition-all duration-300 pointer-events-none drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]`}
            aria-label="Traditional Indian Flute Emblem"
          >
            <defs>
              {/* 3D Cylindrical Shading for the Bamboo Body */}
              <linearGradient id="bambooCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFEFC2" />
                <stop offset="25%" stopColor="#D4AF37" />
                <stop offset="70%" stopColor="#B38B22" />
                <stop offset="100%" stopColor="#6E510E" />
              </linearGradient>

              {/* Hole Dark Depth Gradient */}
              <radialGradient id="holeDepth" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1E1408" />
                <stop offset="80%" stopColor="#3D2710" />
                <stop offset="100%" stopColor="#B38B22" />
              </radialGradient>

              {/* Peacock Feather Gradient */}
              <radialGradient id="peacockEye" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="40%" stopColor="#059669" />
                <stop offset="75%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#1E293B" />
              </radialGradient>
            </defs>

            {/* Intentional Krishna Flute Ligature connecting gracefully to the base of letter 'U' */}
            <path
              d="M 23 7 C 23 3.5, 20.5 1, 18 -1"
              stroke="url(#bambooCylinder)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            <circle cx="18" cy="-1" r="0.8" fill="#FFEFC2" />

            {/* 1. Closed Left Cork Endcap */}
            <path
              d="M 22 7 C 19 7 17 9 17 12 C 17 15 19 17 22 17 Z"
              fill="#8A6417"
              stroke="#523908"
              strokeWidth="0.8"
            />

            {/* 2. Main Bamboo Reed Shaft */}
            <rect
              x="22"
              y="7"
              width="174"
              height="10"
              rx="2"
              fill="url(#bambooCylinder)"
              stroke="#785913"
              strokeWidth="0.8"
            />

            {/* 3. Open Right Hollow Rim */}
            <ellipse
              cx="196"
              cy="12"
              rx="2.5"
              ry="5"
              fill="#332007"
              stroke="#C5A059"
              strokeWidth="0.8"
            />

            {/* 4. Traditional Red/Terracotta & Gold Thread Bindings */}
            <rect x="25" y="6.6" width="3" height="10.8" fill="#C85A32" rx="0.5" />
            <line x1="26.5" y1="6.6" x2="26.5" y2="17.4" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />

            <rect x="52" y="6.6" width="2.5" height="10.8" fill="#C85A32" rx="0.5" />
            <line x1="53.2" y1="6.6" x2="53.2" y2="17.4" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />

            <rect x="122" y="6.6" width="2.5" height="10.8" fill="#C85A32" rx="0.5" />
            <line x1="123.2" y1="6.6" x2="123.2" y2="17.4" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />

            <rect x="190" y="6.6" width="3.5" height="10.8" fill="#C85A32" rx="0.5" />
            <line x1="191.8" y1="6.6" x2="191.8" y2="17.4" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />

            {/* 5. Embouchure / Blowing Hole */}
            <ellipse
              cx="39"
              cy="12"
              rx="2.8"
              ry="2.2"
              fill="url(#holeDepth)"
              stroke="#3A240A"
              strokeWidth="0.6"
            />

            {/* 6. Melodic Finger Holes (6 Holes in 3+3 Spacing) */}
            <circle cx="72" cy="12" r="1.8" fill="url(#holeDepth)" stroke="#3A240A" strokeWidth="0.5" />
            <circle cx="88" cy="12" r="1.8" fill="url(#holeDepth)" stroke="#3A240A" strokeWidth="0.5" />
            <circle cx="104" cy="12" r="1.8" fill="url(#holeDepth)" stroke="#3A240A" strokeWidth="0.5" />

            <circle cx="140" cy="12" r="1.8" fill="url(#holeDepth)" stroke="#3A240A" strokeWidth="0.5" />
            <circle cx="156" cy="12" r="1.8" fill="url(#holeDepth)" stroke="#3A240A" strokeWidth="0.5" />
            <circle cx="172" cy="12" r="1.8" fill="url(#holeDepth)" stroke="#3A240A" strokeWidth="0.5" />

            {/* 7. Delicate Silk Hanging Cord & Tassel with Peacock Feather Charm */}
            <path
              d="M 192 17 Q 196 22 201 24"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="201" cy="24" r="1.5" fill="#FFF6D6" stroke="#B38B22" strokeWidth="0.5" />
            <path
              d="M 202 24 C 206 23 213 22 216 23 C 218 24 216 26 212 27 C 208 28 204 26 202 24 Z"
              fill="url(#peacockEye)"
              stroke="#10B981"
              strokeWidth="0.5"
            />
            <circle cx="212" cy="24.5" r="1" fill="#38BDF8" />
            <circle cx="212" cy="24.5" r="0.5" fill="#0F172A" />

            <line x1="202" y1="25" x2="206" y2="28" stroke="#C85A32" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="203" y1="24.5" x2="209" y2="27.5" stroke="#D4AF37" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
