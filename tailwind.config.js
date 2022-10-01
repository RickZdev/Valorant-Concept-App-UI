/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4656',
        secondary: '#1F2326',
      },
      fontFamily: {
        // fonts that are installed on assets/fonts folder
        DrukWideMedium: 'Druk-Wide-Medium',
        MonumentExtendedRegular: 'MonumentExtended-Regular',
        MontserratLight: 'Montserrat-Light'
      }
    },
  },
  plugins: [],
}
