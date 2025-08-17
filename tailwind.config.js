import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2dd4bf", // Teal-400 - main brand color
        secondary: "#1A1A1A", // Neutral dark
        accent: "#F9FAFB", // Light background
        textPrimary: "#1A1A1A",
        textSecondary: "#6E6E6E",
        white: "#ffffff",
        // Background gradient colors
        gradient: {
          from: "#000000", // black
          via: "#214045", // dark teal
          to: "#ffffff", // white
        },
        // Text colors
        text: {
          white: "#ffffff",
          gray: {
            200: "#e5e7eb",
            300: "#d1d5db",
          },
        },
        // Teal variations
        teal: {
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Libre Baskerville", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [typography],
};
