import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtlasHaven - SaaS Consultancy",
  description: "Transform your ideas into scalable SaaS solutions. Strategy, architecture, and development for modern startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}