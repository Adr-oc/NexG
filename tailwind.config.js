import { nextui } from "@nextui-org/theme";
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
          museo: ["MuseoModerno", ...defaultTheme.fontFamily.sans],
        },
        primary: {
          DEFAULT: "#57dbc3",
          50: "#eefffa",
          100: "#c5fff2",
          200: "#8bffe6",
          300: "#4afed8",
          400: "#15ecc5",
          500: "#00d0ae",
          600: "#00a88f",
          700: "#008170",
          800: "#06695e",
          900: "#0a574d",
          950: "#003531",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
