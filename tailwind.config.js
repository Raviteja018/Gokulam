/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0E100F',
          subtle: '#141715',
          elevated: '#1A1E1C',
          card: '#1F2420',
          border: 'rgba(212, 175, 55, 0.16)',
        },
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D4AF37',
          deep: '#C5A059',
          muted: '#A88434',
          dark: '#84661E',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        terracotta: {
          light: '#E07A5F',
          DEFAULT: '#C85A32',
          deep: '#A9401C',
          dark: '#7A2C11',
        },
        cream: {
          light: '#FFFDF9',
          DEFAULT: '#F7F4EC',
          muted: '#E6E0D2',
          dark: '#D3CBBC',
        },
        foliage: {
          light: '#3C6450',
          DEFAULT: '#22382E',
          deep: '#15241D',
        },
        teak: {
          DEFAULT: '#3D271D',
          dark: '#26160F',
        }
      },
      fontFamily: {
        display: ['Cinzel', 'Playfair Display', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'jaali-pattern': "radial-gradient(rgba(212, 175, 55, 0.12) 1px, transparent 1px)",
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A88434 100%)',
        'terracotta-gradient': 'linear-gradient(135deg, #E07A5F 0%, #C85A32 50%, #A9401C 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 30px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 50px rgba(212, 175, 55, 0.35)',
        'lantern': '0 10px 40px -10px rgba(224, 122, 95, 0.35)',
      },
    },
  },
  plugins: [],
}
