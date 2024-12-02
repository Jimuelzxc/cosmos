/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#020308",
        white: "#FBFDFE",
        primary: "#50A2EF",
        secondary: {
          100: "#090C1C",
          200: "#111423",
          250: "rgb(35, 39, 62)",
          300: "#858688",
        },
      },
    },
  },
  plugins: [],
};
