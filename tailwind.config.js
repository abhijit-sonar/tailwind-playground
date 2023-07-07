/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gunmetal": {
          5: "#35373d",
          6: "#242529",
        },
        sunny: "#fff37a",
      },
    },
  },
  plugins: [],
};
