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
        input: {
          border: "#EBEBEB",
        },
      },
    },
  },
  plugins: [],
};
