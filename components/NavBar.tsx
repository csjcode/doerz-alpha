"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const DynamicThemeSwitcher = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <nav className="navbar w-full px-4 py-3 shadow-lg">
        <div className="flex items-center w-full">
          <section className={`${bungee.className} font-bold mr-auto text-xl`}>
            My Website Name
          </section>
          <ul className="nav-links flex  gap-8 items-center">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contacts">
              <li>Contacts</li>
            </Link>
          </ul>
          <DynamicThemeSwitcher />
        </div>
      </nav>
    </>
  );
}
