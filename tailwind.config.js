/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bggray: "#F9F9F9",
        button: {
          bg: "#A80062",
          hoverbg: "#B8065E",
          focusring: "#D80D77",
          gray: "#ECECEC",
        },
        rose: {
          100: "#f43f5e",
          200: "#be123c",
          300: "#9f1239",
          400: "#881337",
          500: "#4c0519",
        },
      },
    },
  },
  plugins: [],
};
