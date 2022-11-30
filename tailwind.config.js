/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
      sans: ["DM Sans"],
    },
    extend: {
      backgroundImage: {
        "header-img": "url('./src/component/Header/img/header.png)",
      },
    },
  },
  plugins: [],
};
