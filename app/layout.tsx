import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/contexts/ContextProvider";
import NavBar from "@/components/NavBar";
import NavbarContext from "@/components/NavbarContext";
import NavbarDemos from "@/components/NavbarDemos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana app",
  description: "Site for my Solana app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`dark:bg-zinc-900 {inter.className}`}>
        <NavbarContext>
          <NavBar />
          <NavbarDemos />
          <div className="flex flex-col justify-center items-center w-full">
            {/* <div className={`${bungee.className} text-4xl`}>Home Page</div> */}
            {children}
          </div>
        </NavbarContext>
      </body>
    </html>
  );
}
