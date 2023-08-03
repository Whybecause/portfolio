import "./globals.css";
import { Roboto_Mono } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
// Here is defined the variable name of the font to be used in css
const primaryFont = Roboto_Mono({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "Portfolio",
  description: "Online CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={primaryFont.variable}>
        <main id="primaryFont" className="flex flex-col">
          <Navbar />
          {children}
          <footer className="relative bg-green-500 h-50">cest le footer</footer>
        </main>
      </body>
    </html>
  );
}
