"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ContextProvider } from "@/contexts/ContextProvider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Solana app",
//   description: "Site for my Solana app",
// };

export default function CardsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`dark:bg-zinc-900 {inter.className}`}>
        {" "}
        <ContextProvider>
          <NavBar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
