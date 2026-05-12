import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JKT48 Request Hour 2026 – Dukung Lagu Favorit Kamu",
  description:
    "Dukung lagu favoritmu di JKT48 Request Hour 2026! Vote sekarang dan bantu wujudkan impian bersama.",
  openGraph: {
    title: "JKT48 Request Hour 2026",
    description: "Vote sekarang! Dukung lagu favoritmu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
