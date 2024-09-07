/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#CDE8E5",
        customWhite: "#EEF7FF",
        customGrey: "#7AB2B2",
        customText: "#55679C",
      }
    },
  },
  plugins: [],
}