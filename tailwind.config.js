/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Block5-image1': "url('/src/constants/Home/Block5/VectorHIW.2937dfc5.svg')"
      },
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [],
}