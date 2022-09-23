const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "merriweather": ["Merriweather"],
        "opensans": ["OpenSans"],
        "garramond": ["Garramond"],
      },
      screens: {
        'galaxyfold': '360px',
        'phone': '415px',
        'condenseheader': '460px',
        'verticalindex': '768px',
        'regular': '876px',
        'crunchycards': '1040px',
        'centerfooter': '1800px',
      },
      height: {
        "10v": "10vw",
        "20v": "20vw",
      },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  }
}