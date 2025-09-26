import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import Particle from "@/components/Particle";

// Import Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Adebanjo Portfolio",
  description: "Personal Portfolio built with Next.js, TypeScript & Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans antialiased`}>
        <AppWrapper>
          <Particle />
          <Navbar />
          <ScrollToTop />
          <main>{children}</main>
          <Footer />
        </AppWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
