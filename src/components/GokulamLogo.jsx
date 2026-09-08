import React from 'react';

/**
 * Gokulam Brand Identity:
 * - Prominent, commanding capital "G" as the visual anchor.
 * - Generous, elegant serif "OKULAM" lettering.
 * - Handcrafted Indian bamboo flute (bansuri) beginning cleanly under "U"
 *   and extending under "ULAM", overflowing past "M" to the right.
 * - Realistic 3D cylindrical bamboo shading, decorative thread windings (dhaga),
 *   embouchure & 6 tone holes, and hanging silk cord with peacock feather tassel.
 * - Uses React.useId() to ensure gradients never collide across multiple logo instances.
 */
export default function GokulamLogo({ size = 'md', variant = 'gold', className = '' }) {
  const uniqueId = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const bambooId = `bamboo_${uniqueId}`;
  const holeId = `hole_${uniqueId}`;
  const peacockId = `peacock_${uniqueId}`;

  const sizeMap = {
    sm: {
      gSize: 'text-2xl sm:text-[1.75rem]',
      restSize: 'text-base sm:text-lg tracking-[0.2em]',
      fluteWidth: 140,
      fluteHeight: 18,
      fluteTop: 'top-[84%]',
      paddingBottom: 'pb-2.5',
      paddingRight: 'pr-12 sm:pr-14',
      gSpacing: 'mr-[0.05em]',
    },
    md: {
      gSize: 'text-4xl sm:text-[2.75rem]',
      restSize: 'text-2xl sm:text-3xl tracking-[0.24em]',
      fluteWidth: 185,
      fluteHeight: 24,
      fluteTop: 'top-[88%]',
      paddingBottom: 'pb-3.5',
      paddingRight: 'pr-16 sm:pr-20',
      gSpacing: 'mr-[0.08em]',
    },
    lg: {
      gSize: 'text-6xl sm:text-7xl md:text-8xl',
      restSize: 'text-4xl sm:text-5xl md:text-6xl tracking-[0.26em]',
      fluteWidth: 260,
      fluteHeight: 34,
      fluteTop: 'top-[90%]',
      paddingBottom: 'pb-5',
      paddingRight: 'pr-24 sm:pr-32',
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

        {/* 'ULAM' with Flute Originating Cleanly at 'U' and Overflowing past 'M' */}
        <span className="relative inline-block leading-none">
          <span
            className={`font-display font-bold uppercase transition-all duration-300 ${current.restSize} leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#D4AF37] to-[#B89228] drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]`}
          >
            ULAM
          </span>

          {/* Authentic Bansuri Flute: Starts under 'U', spans 'ULAM', overflows past 'M' with full golden body */}
          <svg
            width={current.fluteWidth}
            height={current.fluteHeight}
            viewBox="16 0 206 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute left-0 ${current.fluteTop} overflow-visible transition-all duration-300 pointer-events-none drop-shadow-[0_2px_10px_rgba(212,175,55,0.45)]`}
            aria-label="Traditional Indian Flute Emblem"
          >
            <defs>
              {/* 3D Cylindrical Shading for the Bamboo Body */}
              <linearGradient id={bambooId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF6D6" />
                <stop offset="25%" stopColor="#E5C358" />
                <stop offset="65%" stopColor="#C59B27" />
                <stop offset="85%" stopColor="#967016" />
                <stop offset="100%" stopColor="#5E430A" />
              </linearGradient>

              {/* Hole Dark Depth Gradient */}
              <radialGradient id={holeId} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1E1408" />
                <stop offset="75%" stopColor="#3D2710" />
                <stop offset="100%" stopColor="#A37C1E" />
              </radialGradient>

              {/* Peacock Feather Gradient */}
              <radialGradient id={peacockId} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="40%" stopColor="#059669" />
                <stop offset="75%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#1E293B" />
              </radialGradient>
            </defs>

            {/* 1. Closed Left Cork Endcap */}
            <path
              d="M 22 7 C 19 7 17 9 17 12 C 17 15 19 17 22 17 Z"
              fill="#8A6417"
              stroke="#523908"
              strokeWidth="0.8"
            />

            {/* 2. Main Bamboo Reed Shaft: Solid rich golden base + 3D Cylindrical Bamboo Shading */}
            <rect
              x="22"
              y="7"
              width="174"
              height="10"
              rx="2"
              fill="#D4AF37"
            />
            <rect
              x="22"
              y="7"
              width="174"
              height="10"
              rx="2"
              fill={`url(#${bambooId})`}
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
              stroke="#E5C358"
              strokeWidth="0.8"
            />

            {/* 4. Traditional Red/Terracotta & Gold Thread Bindings */}
            <rect x="25" y="6.4" width="3" height="11.2" fill="#C85A32" rx="0.5" />
            <line x1="26.5" y1="6.4" x2="26.5" y2="17.6" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />

            <rect x="52" y="6.4" width="2.5" height="11.2" fill="#C85A32" rx="0.5" />
            <line x1="53.2" y1="6.4" x2="53.2" y2="17.6" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />

            <rect x="122" y="6.4" width="2.5" height="11.2" fill="#C85A32" rx="0.5" />
            <line x1="123.2" y1="6.4" x2="123.2" y2="17.6" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />

            <rect x="190" y="6.4" width="3.5" height="11.2" fill="#C85A32" rx="0.5" />
            <line x1="191.8" y1="6.4" x2="191.8" y2="17.6" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />

            {/* 5. Embouchure / Blowing Hole */}
            <ellipse
              cx="39"
              cy="12"
              rx="2.8"
              ry="2.2"
              fill={`url(#${holeId})`}
              stroke="#3A240A"
              strokeWidth="0.6"
            />

            {/* 6. Melodic Finger Holes (6 Holes in 3+3 Spacing) */}
            <circle cx="72" cy="12" r="1.8" fill={`url(#${holeId})`} stroke="#3A240A" strokeWidth="0.5" />
            <circle cx="88" cy="12" r="1.8" fill={`url(#${holeId})`} stroke="#3A240A" strokeWidth="0.5" />
            <circle cx="104" cy="12" r="1.8" fill={`url(#${holeId})`} stroke="#3A240A" strokeWidth="0.5" />

            <circle cx="140" cy="12" r="1.8" fill={`url(#${holeId})`} stroke="#3A240A" strokeWidth="0.5" />
            <circle cx="156" cy="12" r="1.8" fill={`url(#${holeId})`} stroke="#3A240A" strokeWidth="0.5" />
            <circle cx="172" cy="12" r="1.8" fill={`url(#${holeId})`} stroke="#3A240A" strokeWidth="0.5" />

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
              fill={`url(#${peacockId})`}
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
