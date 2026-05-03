import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"]
      },
      colors: {
        ink: "#14110f",
        charcoal: "#27211d",
        brass: "#b58a46",
        walnut: "#6f4a2c",
        porcelain: "#f7f3ed",
        mist: "#ebe5dc"
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(20, 17, 15, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
