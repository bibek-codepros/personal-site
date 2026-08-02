import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";

import { MotionProvider } from "@/components/animations/MotionProvider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bibeksigdel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bibek Sigdel | HOME",
  description:
    "A narrative-first digital home where I share my journey, the people who shaped it, and the lessons I'm still learning.",
  openGraph: {
    title: "Bibek Sigdel | HOME",
    description:
      "A narrative-first digital home where I share my journey, the people who shaped it, and the lessons I'm still learning.",
    url: siteUrl,
    siteName: "HOME",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibek Sigdel | HOME",
    description:
      "A narrative-first digital home where I share my journey, the people who shaped it, and the lessons I'm still learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MotionProvider>
          <main className="flex-1">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
