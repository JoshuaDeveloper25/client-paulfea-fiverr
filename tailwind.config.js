/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main": "#F7F7F7",
        "secondary": "#00BF63",
        "tertiary": "#0B0B0B"
      },
    },
  },
  plugins: [],
};
