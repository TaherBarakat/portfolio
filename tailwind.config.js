/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: { DEFAULT: "#00FFFF" },
      //   //    primary: { DEFAULT: "#78d927" },
      //   secondary: { DEFAULT: "#800080" },
      //   accent: { DEFAULT: "#0000FF" },
      //   text: { DEFAULT: "#00FF00", dark: "#FF0000" },
      // },

      colors: {
        primary: { DEFAULT: "#0a192f" },
        //    primary: { DEFAULT: "#78d927" },
        secondary: { DEFAULT: "#d92778" },
        accent: { DEFAULT: "#d92778" },
        text: { DEFAULT: "#E6F1FF", dark: "#A8B2D1" },
      },
    },
  },
  plugins: [],
};
