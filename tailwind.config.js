/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DM: ["DM Sans", "sans-serif"]
      },
      colors: {
        'primary':'#343CAD',
        'gray_1':'#999999',
        'gray_2':'#666666',
        'background':'#EDF2F8',
        'h_black':'#000',
      },
    },
  },
  plugins: [],
}