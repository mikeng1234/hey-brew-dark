import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hey Brew Cafe PH — Open for Franchise",
  description:
    "Hey Brew Cafe PH — a modern heritage brew combining artisanal coffee and premium milktea. Now open for franchise nationwide. Join the heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
