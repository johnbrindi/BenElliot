import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ben Elliott's Washers – Premium Refurbished Appliances",
  description: "High-quality refurbished washing machines, dryers, and fridge freezers at a fraction of the cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
