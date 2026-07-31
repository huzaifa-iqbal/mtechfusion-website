import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/constants/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tech Fusion | Technology Built for Growth",
    template: "%s | Tech Fusion",
  },
  description:
    "Tech Fusion delivers software engineering, cloud, cybersecurity, AI, automation, data and managed technology solutions for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
