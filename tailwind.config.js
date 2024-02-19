const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.sky,
        "vtd-secondary": colors.gray,
        'atlantis': {
          '50': '#f5fbea',
          '100': '#e9f5d2',
          '200': '#d2ecaa',
          '300': '#b5de78',
          '400': '#9bcf53',
          '500': '#7ab32f',
          '600': '#5d8e22',
          '700': '#486d1e',
          '800': '#3c571d',
          '900': '#334a1d',
          '950': '#19280b',
        },
        'calypso': {
          '50': '#edfcfe',
          '100': '#d2f6fb',
          '200': '#abebf6',
          '300': '#71dcef',
          '400': '#30c3e0',
          '500': '#14a6c6',
          '600': '#1485a6',
          '700': '#176b87',
          '800': '#1c586e',
          '900': '#1b4a5e',
          '950': '#0c2f40',
        },
        'torea-bay': {
          '50': '#eef1ff',
          '100': '#e0e5ff',
          '200': '#c7cffe',
          '300': '#a5affc',
          '400': '#8186f8',
          '500': '#6863f1',
          '600': '#5746e5',
          '700': '#4b38ca',
          '800': '#3d30a2',
          '900': '#352e81',
          '950': '#211b4b',
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")({
    charts: true,
  })],
};
