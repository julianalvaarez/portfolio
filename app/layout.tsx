import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julian Alvarez - Portfolio",
  description: "Portfolio de Julian Alvarez",
  icons: {
    icon: "/logo-portfolio.png",
  },
  openGraph: {
    title: "Julian Alvarez - Portfolio",
    description: "Portfolio de Julian Alvarez",
    images: [
      {
        url: "/logo-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Julian Alvarez - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian Alvarez - Portfolio",
    description: "Portfolio de Julian Alvarez",
    images: ["/logo-portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
