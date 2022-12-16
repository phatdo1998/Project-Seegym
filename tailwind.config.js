/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
      sans: ["DM Sans"],
    },
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        appear: "appear 0.3s linear",
      },
    },
  },
  plugins: [],
};
