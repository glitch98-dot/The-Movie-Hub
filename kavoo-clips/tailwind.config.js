/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px) rotate(90deg)' 
          },
          '50%': { 
            transform: 'translateY(0px) translateX(20px) rotate(180deg)' 
          },
          '75%': { 
            transform: 'translateY(20px) translateX(10px) rotate(270deg)' 
          },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
          },
          '50%': {
            textShadow: '0 0 30px rgba(139, 92, 246, 0.8)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        slideInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInScale: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}