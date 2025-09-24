import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppWrapper>
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
