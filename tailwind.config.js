/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
    },

    extend: {
      colors: {
        light: "#FFFFFF",

        icon: {
          one: "#B6AAA6",
        },

        link: {
          active: "#FDA554",
        },
        primary: "#FEA24E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
