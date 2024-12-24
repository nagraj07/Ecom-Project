/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 7s infinite', // Example animation
        spin: 'spin 8s infinite', // Example animation
      },

      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        
      },

      fontFamily: {
        'sans': ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('./Image/footer_bg.png')",
        'forms-bg': "url('./Image/form_bg.png')",
        'err-bg':"url('./Image/err_bg.png')"

      }
    },
  },
  plugins: [],
}
