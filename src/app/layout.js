// app/layout.js or layout.tsx

import "./globals.css";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Metadata } from "next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Optional: This works only in `app/` directory
export const metadata = {
  title: "Impact Matters",
  description: "Empowering legal transformation",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
