/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./zh-TW/*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      teal: {
        dark: "#336567",
        logo: "#008D94",
        strong: "#33C2C9",
        DEFAULT: "#60B8BC",
        light: "rgba(95, 196, 201, 0.3)",
        lightest: "rgba(149, 220, 224, 0.1)",
      },
      earth: {
        brown: "#5E4019",
        pink: "#C6878D",
        yellow_green: "#999942",
      },
      gradient: {
        red: "#E41225",
        orange: "#FF6F4A",
        teal_dk: "#5CAAA8",
        teal_lt: "#28CAD1",
      },
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
