import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmicParticlesBackground from "@/app/CosmicParticlesBackground"; // Import your particle background component

export const metadata: Metadata = {
  title: "Cosmic Portfolio",
  description: "A modern developer portfolio inspired by Ishaan Arora's site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-white min-h-screen flex flex-col relative"> {/* Added 'relative' to body */}
        <CosmicParticlesBackground /> {/* Render the background component here */}
        <Navbar />
        <main className="flex-1 z-10 relative">{children}</main> {/* Added z-index to main content */}
        <Footer />
      </body>
    </html>
  );
}