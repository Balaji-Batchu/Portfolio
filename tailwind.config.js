/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-purple': '#6a0dad',
        'royal-gold': '#ffd700',
      },
      fontFamily: {
        'merriweather': ['"Merriweather"', 'serif'],
        'qwitcher': ['Qwitcher Grypen', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'bold': 700,
        'black': 900,
      },
      fontStyle: {
        'italic': 'italic',
        'normal': 'normal',
      }
    },
  },
  plugins: [],
}
