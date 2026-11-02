import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF7F2",
};

export const metadata: Metadata = {
  title: "AMAYA | Modern Luxury Residences & Architectural Sanctuaries",
  description:
    "Curating modern architectural luxury residences, glass pavilion villas, and trophy penthouses with seamless 3D spatial tours, clear freehold titles, and bespoke private client advisory.",
  keywords: [
    "Modern luxury real estate",
    "Architectural villa 3D",
    "Luxury glass penthouse",
    "Modern villa with pool",
    "High-end luxury properties",
    "Amaya luxury residences",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF7F2] text-[#231812] min-h-screen selection:bg-[#231812] selection:text-[#FAF7F2] relative font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
