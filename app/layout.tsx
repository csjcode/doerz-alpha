import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import NavbarContext from "@/components/Nav/NavbarContext";
import NavbarDemos from "@/components/Nav/NavbarDemos";
import { Outfit, Barlow } from "next/font/google";
import NavFooter from "@/components/Nav/NavFooter";
import Image from "next/image";
import Head from "next/head";

const outfit = Outfit({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-outfit",
});

const barlow = Barlow({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });



export const metadata: Metadata = {
  title: "DOERZ.fun",
  description: "Rewards for doing things you love.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`dark ${outfit.variable} ${inter.variable}`} lang="en">



      <body className={`{inter.className} dark:bg-zinc-900`}>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
      {/* <link rel="icon" href="/images/favicons/favicon.ico" sizes="any" /> */}
      <link rel="manifest" href="/site.webmanifest" />
        <NavbarContext>
          <NavBar />
          {/* <NavbarDemos /> */}
          {/* <div className="h-10 w-full relative dark:bg-black bg-white">
            <Image
              src="/images/logos/DOERZ.fun-bar-dark.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
              // className="opacity-10"
            />
          </div> */}
          <div className="flex w-full flex-col items-center justify-center">
            {children}
          </div>
          <NavFooter />
        </NavbarContext>
      </body>
    </html>
  );
}
