/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["'Outfit Variable'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mint: {
          50: "#EDFDFB",
          100: "#DFFBF9",
          200: "#BFF7F3",
          300: "#9BF3EB",
          400: "#7BEFE5",
          500: "#5CEBDF",
          600: "#20E4D3",
          700: "#15ADA0",
          800: "#0F766D",
          900: "#073B37",
          950: "#020B0D",
        },
      },
    },
  },
  plugins: [],
};
