/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure the path matches your file structure
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#A0D6D4',  // Light teal
          500: '#00B2A9',  // Main teal
          700: '#006F65',  // Dark teal
        },
        sunset: {
          100: '#FFD9A0',  // Light sunset
          500: '#FF6F61',  // Main sunset color
          700: '#E23B2D',  // Dark sunset
        },
      },
    },
  },
  plugins: [],
}
