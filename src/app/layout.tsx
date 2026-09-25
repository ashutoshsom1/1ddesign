import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import FloatingContactBar from "@/components/common/FloatingContactBar";

export const metadata: Metadata = {
  title: "1 Dream Design Studio | Bespoke Architecture & Turnkey Interiors",
  description:
    "Bespoke architecture and interior design firm specializing in contemporary villas, emerald marble master suites, and 1:1 photorealistic 3D turnkey execution.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className="antialiased bg-[#0b0c0e] text-zinc-100 selection:bg-amber-300 selection:text-black min-h-screen flex flex-col justify-between"
      >
        <SmoothScrollProvider>
          <Navbar />
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
          <FloatingContactBar />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
