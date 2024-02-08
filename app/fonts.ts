import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Open_Sans, Poppins } from "next/font/google";

export const poppins: NextFontWithVariable = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--poppins",
});

export const openSans: NextFontWithVariable = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--open-sans",
});
