const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Core brand colors
        'brand': {
          red: '#e41e31',    // Primary red
          navy: '#001824',   // Dark background
        },
        // Optional supporting colors
        'gray': {
          50: '#f8f9fa',     // Light background
          600: '#868e96',    // Navigation text
        }
      },
      screens: {
        xs: "550px",
        ...defaultTheme.screens,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
