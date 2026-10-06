import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footercpt from "./components/footer";
import { MotionProvider, ScrollProgress } from "./components/motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfolio of Valentín Cabanas, Systems Engineering student at UTN-FRBA and full-stack developer (React, Next.js, Node.js).";

export const metadata: Metadata = {
  title: "Valentín Cabanas | Portfolio",
  description,
  openGraph: {
    title: "Valentín Cabanas | Portfolio",
    description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f5f1e6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden min-w-0`}>
        <MotionProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:bg-forest focus:text-cream focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <div id="content" className="pt-16 flex-1 min-w-0 w-full max-w-full overflow-x-hidden">
            {children}
          </div>
          <Footercpt/>
        </MotionProvider>
      </body>
    </html>
  );
}
