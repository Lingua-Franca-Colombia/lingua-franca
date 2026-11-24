/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#5818E8',
          purpleLight: '#7C3AED',
          green: '#22C55E',
          greenBright: '#39FF14',
          darkBg: '#0B0A14',
          darkCard: '#141226',
          lightBg: '#F8F9FA',
        }
      },
      boxShadow: {
        'neon-purple': '0 0 25px rgba(88, 24, 232, 0.35)',
        'neon-green': '0 0 25px rgba(34, 197, 94, 0.35)',
      }
    },
  },
  plugins: [],
}
