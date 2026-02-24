import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ben Elliott's Washers – Premium Brand New Appliances",
  description: "High-quality brand new washing machines, dryers, and fridge freezers at high-value prices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
