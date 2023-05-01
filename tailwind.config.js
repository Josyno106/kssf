/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        alkatra: ["Alkatra", "cursive"],
      },
      colors: {
        customBG: "#FFCA28",
        customGreen: "#004D40",
        customGreenFaded: "#80CBC4",
      },
    },
  },
  plugins: [],
};
