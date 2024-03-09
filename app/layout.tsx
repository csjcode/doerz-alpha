import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Domain",
  description: "Site for my domain",
};

export default function RootLayout({
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
