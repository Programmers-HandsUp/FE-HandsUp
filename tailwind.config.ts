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
        grow: "grow 0.4s ease",
        fill: "fill 1s ease-in forwards",
        slideInFromRight: "slideInFromRight 0.7s ease forwards",
        growIn: "growIn ease 0.3s forwards",
        growOut: "growOut ease 0.3s forwards",
        slideIn: "slideIn ease 0.3s forwards",
        slideOut: "slideOut ease 0.3s forwards",
        shaking: "shaking ease 3s Infinite",
        pumping: "pumping ease 3s Infinite",
        slideDown: "slideDown 0.6s ease-in-out forwards",
        slideUp: "slideUp 0.6s ease-in-out forwards",
        bounce: "pumping ease 5s Infinite"
      },
      fontFamily: {
        sans: ["Yeongdeok"]
      }
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
export default config;
