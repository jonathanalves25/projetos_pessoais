/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      indigo: {
        200: '#C7D2FE',
        400: '#818CF8',
        600: '#4F46E5',
      },

      white: '#fff',
      black: '#000',

      stone: {
        700: '#44403c',
        800: '#292524',
      },

      yellow: {
        500: '#f0932b',
        400: '#f9ca24',
        300: '#ffbe76',
        200: '#f6e58d'
    },
  },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
  },
  plugins: [],
}
}
