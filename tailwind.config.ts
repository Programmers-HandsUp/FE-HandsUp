import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      animation: {
        tiltAndScale: "tiltAndScale linear 1.2s infinite",
        watch: "watch linear 0.8s infinite both",
        beat: "beat linear 0.5s forwards",
        blink: "blink ease-in-out 0.5s forwards",
        progress: "progress linear forwards 0.4s",
        rightMove: "rightMove ease forwards 0.4s ",
        leftMove: "leftMove ease forwards 0.4s ",
        growIn: "growIn ease 0.3s forwards",
        growOut: "growOut ease 0.3s forwards",
        fill: "fill 1s linear forwards",
        slideIn: "slideIn ease 0.3s forwards",
        slideOut: "slideOut ease 0.3s forwards"
      },
      fontFamily: {
        sans: ["Yeongdeok"]
      }
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
export default config;
