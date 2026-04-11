import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good Morning Nagpur | Nagpur's Premium Live News & Media Portal",
  description: "Your trusted source for real-time news, city updates, live market intelligence, and multimedia storytelling from the heart of Nagpur.",
  keywords: ["Nagpur News", "Live Reporter", "Nagpur Metro", "Vidarbha Updates", "Good Morning Nagpur", "Live Market Rates"],
  authors: [{ name: "AFFWORLD" }],
  openGraph: {
    title: "Good Morning Nagpur | Live News & Media Portal",
    description: "Real-time updates, market pulse, and premium journalism from Nagpur.",
    url: "https://goodmorningnagpur.news",
    siteName: "Good Morning Nagpur",
    images: [
      {
        url: "/newslogo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Morning Nagpur",
    description: "Nagpur's most trusted live news portal.",
    images: ["/newslogo.png"],
  },
  icons: {
    icon: "/newslogo.png",
    shortcut: "/newslogo.png",
    apple: "/newslogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
