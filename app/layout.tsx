import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DPV Offshore - Marine Engineering Solutions",
  description: "Your Partner At Sea For All Your Integrated Marine Engineering Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-white text-brand-dark`}>
        {children}
      </body>
    </html>
  );
}