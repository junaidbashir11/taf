/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    select: {
      styles: {
        base: {
          menu: {
            position: "relative",
            width: "w-[50px]",
            minWidth: "min-w-[50px]",
          },
        },
      },
    },
  },
  plugins: [],
});
