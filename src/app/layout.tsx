import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { inter, pinyon, spectral, instrumentSans } from "@/lib/fonts";
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
        {/* Standard favicon */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        
        {/* Apple Touch Icons for iPhone/iPad */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
        
        {/* Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/favicons/site.webmanifest" />
        
        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#E9BC4E" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#E9BC4E" />
        <meta name="msapplication-TileColor" content="#E9BC4E" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      </head>
      <body className={`${pinyon.variable} ${spectral.variable} ${instrumentSans.variable} ${instrumentSans.className} bg-black`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
