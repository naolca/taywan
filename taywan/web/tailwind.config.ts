import type { Config } from "tailwindcss";
import { ThemeConfig } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      linearGradientColors: (theme:any) => ({
        'white-black': [theme('colors.white'), theme('colors.black')],
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "linear-gradient": "linear-gradient(to bottom, #ffffff 0%, #fff 50%, #000 50%, #000000 100%)",
          
      },
      
    },
  },
  plugins: [],
};
export default config;
