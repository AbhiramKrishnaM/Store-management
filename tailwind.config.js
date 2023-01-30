/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
      },
    },
  },
  plugins: [],
};
