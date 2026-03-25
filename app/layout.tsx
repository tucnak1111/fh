import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lynq Case",
  description: "power up your phone",
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

