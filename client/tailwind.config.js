/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mmd: "870px",
        xxl: "1415px",
      },
    },
  },
  plugins: [require('daisyui'),],
}