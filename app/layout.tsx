import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Here is defined the variable name of the font to be used in css
const primaryFont = Roboto_Mono({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Whybecause Portfolio",
  description: "I'm a Full-Stack developer, discover my universe",
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
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
}
