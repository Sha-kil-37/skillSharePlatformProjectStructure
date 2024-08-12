/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '475px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontFamily: {
      AlegreyaSans: ['"alegreya-sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}