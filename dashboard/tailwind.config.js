/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        login: "#FCFAFA",
        txtsec: "#637381",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "900px",
        // => @media (min-width: 900px) { ... }

        lg: "1280px",
        // => @media (min-width: 1280px) { ... }

        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        primary: ["Public Sans", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
