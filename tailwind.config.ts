import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      pink: "hsl(322, 100%, 66%)",
      lightPink: "hsl(321, 100%, 78%)",
      lightRed: "hsl(0, 100%, 63%)",
      veryDarkCyan: "hsl(192, 100%, 9%)",
      veryPaleBlue: "hsl(207, 100%, 98%)",
    },
    fontFamily: {
      poppins: "var(--poppins)",
      openSans: "var(--open-sans)",
    },
  },
};

export default config;
