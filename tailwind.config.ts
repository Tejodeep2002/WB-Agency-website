import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontsFamily: {
        prompt: "Prompt, sans-serif",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        grey1: "var(--color-grey)",
        background: "var(--color-background)",
        background2: "var(--color-background2)",
        holo:"-webkit-text-stroke:5px black, -webkit-text-fill-color:transparent"
      },
      
      
    },
  },
  plugins: [],
};
export default config;
