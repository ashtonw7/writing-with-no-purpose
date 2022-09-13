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
        "helvetica": ["Helvetica", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'galaxyfold': '318px',
        'phone': '415px',
        'regular': '820px',
      },
      height: {
        "10v": "10vw",
        "20v": "20vw",
      },
  },
  plugins: [],
  }
}