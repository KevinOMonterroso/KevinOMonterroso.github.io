/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        zinc: {
          100: "#f4f4f5",
          800: "#27272a",
          900: "#18181b",
        },
        lime: {
          300: "#a3e635",
          400: "#84cc16",
        },
        orange: {
          400: "#fb923c",
          500: "#f97316",
        },
      },
    },
  },
  plugins: [],
};
