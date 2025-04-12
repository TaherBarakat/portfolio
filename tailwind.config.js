/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define colors using CSS variables
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        text: {
          DEFAULT: "var(--color-text)",
          dark: "var(--color-text-dark)",
        },
      },
    },
  },
  plugins: [],
};
