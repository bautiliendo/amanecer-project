/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      colors: {
        background: "#F2E7DD",
        text: "#68270C",
      },
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
