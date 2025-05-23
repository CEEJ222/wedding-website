import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { inter, unifraktur } from "@/lib/fonts";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "C.J. & Betsy's Wedding",
  description: "Join us for our wedding celebration on November 1st at Era Studio, Downtown Los Angeles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" />
      </head>
      <body className={`${unifraktur.variable} ${inter.className} bg-black`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
