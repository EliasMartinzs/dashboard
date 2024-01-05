import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#ffffff",
            foreground: "#121212",
            borderColor: "rgba(69,69,69,0.3)",
            cardColor: "#f1f1f1",
            primary: {
              100: "#dadada",
              200: "#b5b5b5",
              300: "#8f8f8f",
              400: "#6a6a6a",
              500: "#454545",
              600: "#373737",
              700: "#292929",
              800: "#1c1c1c",
              900: "#0e0e0e",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#121212",
            foreground: "#d1d1d1",
            borderColor: "rgba(143,254,255,0.15)",
            cardColor: "#222222",
            primary: {
              100: "#e3ffff",
              200: "#c7ffff",
              300: "#abfeff",
              400: "#8ffeff",
              500: "#73feff",
              600: "#5ccbcc",
              700: "#459899",
              800: "#2e6666",
              900: "#173333",
            },
          },
        },
      },
    }),
  ],
};
