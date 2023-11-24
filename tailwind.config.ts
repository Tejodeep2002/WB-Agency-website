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
        subHeading: "var(--color-subHeading)",
        paragraph: "var(--color-paragraph)",
        background: "var(--color-background)",
        background2: "var(--color-background2)",
        background3: "var(--color-background3)",
        holo: "-webkit-text-stroke:5px black, -webkit-text-fill-color:transparent",
      },
      animation:{
        wiggle: "wiggle 700ms ease-in-out"

      },
      keyframes:{
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }

      }
    },
  },
  plugins: [],
  purge:[
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx',
  ]
};
export default config;
