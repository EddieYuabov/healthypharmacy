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
  title: "Healthy Pharmacy | Your Pharmacy, Reimagined",
  description: "Transfer your prescriptions, get medications delivered, and experience pharmacy care designed around you. Fast prescription transfers, reliable delivery, and personalized pharmacist support.",
  keywords: ["pharmacy", "prescription transfer", "medication delivery", "healthcare"],
  icons: {
    icon: "/favicon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} app-html`}
    >
      <body className="app-body">{children}</body>
    </html>
  );
}
