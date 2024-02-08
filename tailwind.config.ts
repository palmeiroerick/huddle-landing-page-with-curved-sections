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
    backgroundImage: {
      footerTopDesktop: "url('/bg-footer-top-desktop.svg')",
      footerTopMobile: "url('/bg-footer-top-mobile.svg')",
      sectionBottomDesktop1: "url('/bg-section-bottom-desktop-1.svg')",
      sectionBottomDesktop2: "url('/bg-section-bottom-desktop-2.svg')",
      sectionBottomMobile1: "url('/bg-section-bottom-mobile-1.svg')",
      sectionBottomMobile2: "url('/bg-section-bottom-mobile-2.svg')",
      sectionTopDesktop1: "url('/bg-section-top-desktop-1.svg')",
      sectionTopDesktop2: "url('/bg-section-top-desktop-2.svg')",
      sectionTopMobile1: "url('/bg-section-top-mobile-1.svg')",
      sectionTopMobile2: "url('/bg-section-top-mobile-2.svg')",
    },
  },
};

export default config;
