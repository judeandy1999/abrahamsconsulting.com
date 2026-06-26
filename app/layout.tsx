import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BFCACHE_RECOVERY_SCRIPT } from "../lib/bfcache/recovery-script";
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
      <body className={inter.variable}>
        <script dangerouslySetInnerHTML={{ __html: BFCACHE_RECOVERY_SCRIPT }} />
        <AppRouterCacheProvider>
          {children}
          <SpeedInsights />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
