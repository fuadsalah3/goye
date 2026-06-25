import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/effects/ScrollProgress";
import CustomCursor from "@/components/effects/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";
import FaviconTheme from "@/components/effects/FaviconTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goye — Full-Stack Architect & Engineer",
  description:
    "Goye (Fuad Nesredin) builds high-performance digital experiences at the intersection of backend engineering and frontend artistry.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "portfolio",
    "Goye",
    "Fuad Nesredin",
  ],
  icons: {
    icon: "/favicon-dark.svg",
  },
  openGraph: {
    title: "Goye — Full-Stack Architect",
    description: "Portfolio of Fuad Nesredin. Backend logic meets frontend artistry.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goye — Full-Stack Architect",
    description: "Portfolio of Fuad Nesredin. Backend logic meets frontend artistry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} data-theme="dark">
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
        <ThemeProvider>
          <FaviconTheme />
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
