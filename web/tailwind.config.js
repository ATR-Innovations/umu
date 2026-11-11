/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0F6A3B', dark: '#0B4F2B' },
        gold: { DEFAULT: '#B28800', light: '#E6C77A', dark: '#B5952F' },
        sky: { DEFAULT: '#EAF3FA', light: '#F5F9FC' },
      },
      fontFamily: {
        bangla: ['"Noto Sans Bengali"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
