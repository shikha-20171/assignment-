import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dezoryn Digital Ecosystem",
  description:
    "Premium AI-powered corporate and product ecosystem UI for Dezoryn Technology Pvt. Ltd."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <MouseSpotlight />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
