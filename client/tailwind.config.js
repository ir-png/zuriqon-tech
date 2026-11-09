/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ztg: {
          dark: '#070B10',
          navy: '#0B1420',
          surface: '#0F1B2D',
          card: '#0d1726',
          blue: '#19BFFF',
          cyan: '#51E5F5',
          muted: '#A7B3C2',
          border: 'rgba(25, 191, 255, 0.16)',
          borderHover: 'rgba(81, 229, 245, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(25, 191, 255, 0.25)',
        'glow-md': '0 0 30px rgba(25, 191, 255, 0.35)',
        'glow-cyan': '0 0 25px rgba(81, 229, 245, 0.3)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(25, 191, 255, 0.15) 0%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(25, 191, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(25, 191, 255, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

