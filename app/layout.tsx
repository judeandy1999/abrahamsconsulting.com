import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "../components/analytics/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Abrahams Consulting",
  description: "Strategic consulting and contract capabilities for enterprise and government buyers."
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script async src="/bfcache-recovery.js" />
      </head>
      <body className={inter.variable}>
        <GoogleAnalytics />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
