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
        Text: "linear-gradient(90deg, #3a47d5  0%, #00d2ff 100%)",
        foot: "#00030f",
        background: "#0F1B32",
      }
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};
export default config;
