module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include your src directory and file types
  ],
  theme: {
    extend: {
      colors: {
        color1: "#EEEEEE",
        color2: "#D1D8C5",
        color3: "#7E8EF1",
        color4: "#615EFC",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
