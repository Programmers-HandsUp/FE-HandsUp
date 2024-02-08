import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        progress: "progress linear forwards 0.4s",
        rightMove: "rightMove ease forwards 0.4s ",
        leftMove: "leftMove ease forwards 0.4s ",
      },
      fontFamily: {
        sans: ["Yeongdeok"],
      },
    },
  },
  plugins: [],
};
export default config;
