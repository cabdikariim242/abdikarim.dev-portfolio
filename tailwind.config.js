/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class', // ⬅️ Add this line
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
