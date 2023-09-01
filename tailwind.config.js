/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#2b2a2a",
          800: "rgb(41, 40, 40)",
          900: "#000",
        },
      },
    },
  },
  plugins: [],
};
