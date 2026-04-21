/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9A84C', light: '#E2C97E', dark: '#A68A3E' },
        dark: { DEFAULT: '#0A0A0A', card: '#141414', surface: '#1A1A1A', border: '#2A2A2A' },
        warm: { gray: '#A09890', light: '#D4CFC9', white: '#F5F0EB' }
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
