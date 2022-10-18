/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#6A7D8B',
          800: '#3A4B5C'
        },
        blue: {
          200: '#227C9D',
        }
      },
    },
  },
  plugins: [],
}