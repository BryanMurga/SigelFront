const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {colors: {
      "vtd-primary": colors.sky, // Light mode Datepicker color
      "vtd-secondary": colors.gray, // Dark mode Datepicker color
    },},
  },
  plugins: [require("flowbite/plugin")({
    charts: true,
  })],
};
