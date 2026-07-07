import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        accent: "#F59E0B",
        background: "#0B1020",
        surface: "#1A2040",
        text_primary: "#F8FAFC",
        text_secondary: "#94A3B8",
        border: "#334155",
      },
      fontFamily: {
        heading: ['"Bebas Neue"', "cursive"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;