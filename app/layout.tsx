import type { Metadata } from "next";
import { openSans, poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huddle Landing Page With Curved Sections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
