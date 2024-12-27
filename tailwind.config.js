const { colors, gradients, overlays } = require('./src/constants/styles');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Aeonik Pro Regular': '"AeonikPro"',
        'general': '"Inter V", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom , #0b0622, #0c0623 , #0d0723)',
        'gradient-main': gradients.main.background,
        'gradient-overlay-dark': gradients.overlay.dark,
        'gradient-overlay-light': gradients.overlay.light,
      },
      colors: {
        primary: colors.primary,
        background: colors.background,
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'custom-gradient': colors.background.gradient,
        'section': overlays.component.light,
        'section-medium': overlays.component.medium,
        'section-dark': overlays.component.dark,
      }),
      borderColor: {
        DEFAULT: colors.border.primary,
      },
      textColor: {
        DEFAULT: colors.text.primary,
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.backdrop-section': {
          'backdrop-filter': 'blur(12px)',
          'background': 'rgba(255, 255, 255, 0.03)',
        },
      })
    },
  ],
}