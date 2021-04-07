const colors = require("tailwindcss/colors")
const { spacing } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      lightBackground: "#FFFFFF",
      darkBackground: "#202329",
      darkTexts: "rgb(51, 51, 51)",
      lightTexts: "rgb(158, 158, 158)",
      orangeTexts: "rgb(255, 152, 0)",
      CardBackground: "rgb(51, 51, 51)",
    },
    spacing: {
      ...spacing,
      10: "10px",
      normal: "0.625rem",
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
