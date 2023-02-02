/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E63B1F",
        secondary: "#e88229",
      },
      screens: {
        md: "730px",
      },
      fontFamily: {
        allroundgothic: ["Allroundgothic"],
      },
      minHeight: {
        "content-body": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
