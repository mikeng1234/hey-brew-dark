import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import ErrorBoundary from "@/components/ErrorBoundary";
import "@mdi/font/css/materialdesignicons.min.css";
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
      <head />
      <body><ErrorBoundary>{children}</ErrorBoundary></body>
    </html>
  );
}
