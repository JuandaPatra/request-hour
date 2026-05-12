import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JKT48 Request Hour 2026 – Vote Ame No Pianist",
  description:
    "Dukung Cynthia di JKT48 Request Hour 2026! Vote lagu ame no pianist sekarang dan bantu wujudkan impian bersama.",
  openGraph: {
    title: "JKT48 Request Hour 2026",
    description: "Vote sekarang! Dukung Cynthia Yaputera.",
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
