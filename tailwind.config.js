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
        "merriweatherlight": ["Merriweather Light"],
        "merriweatherextrabold": ["Merriweather Extra Bold"],
        "merriweatherregular": ["Merriweather Regular"],
        "merriweathermedium": ["Merriweather Medium"],
        "dominique": ["Dominique"],
        "tinos": ["Tinos"],
      },
      screens: {
        'weirdcontact': '333px',
        'galaxyfold': '360px',
        'buttons': '390px',
        'phone': '415px',
        'condenseheader': '460px',
        'icons': '500px',
        'verticalindex': '768px',
        'contactmargin': '842px',
        'regular': '875px',
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