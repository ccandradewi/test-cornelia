import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A91AB",
        secondary: "#FFC045",
      },
    },
  },
  plugins: [lineClamp],
};
export default config;
