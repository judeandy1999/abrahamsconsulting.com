import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
