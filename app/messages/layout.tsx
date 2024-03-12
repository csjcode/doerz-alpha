import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana app",
  description: "Site for my Solana app",
};

export default function MessagesPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html className="dark" lang="en">
      <body className={`dark:bg-zinc-900 {inter.className}`}>{children}</body>
    </html>

  );
}
