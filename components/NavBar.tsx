"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Bungee } from "next/font/google";
import NavProfileMenu from "./NavAvatarMenu";
import WalletAdapter from "./WalletAdapter";
import { GoGear } from "react-icons/go";
// import DropdownNetwork from "./DropdownNetwork";
import NetworkSwitcher from "./NetworkSwitcher";
import SelectNetwork from "./SelectNetwork";

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
      <nav className="navbar w-full px-4 py-3 shadow-md dark:bg-zinc-950 bg-zinc-200 border-y dark:border-zinc-800 border-zinc-400">
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
          <div className="flex flex-row items-end">
            <div className="ml-4 border border-zinc-300 dark:border-zinc-900 rounded-lg">
              <WalletAdapter />
            </div>
            <div className="flex flex-row justify-center items-center h-10">
              {/* <div className="form-control bg-opacity-100">
                <label className="cursor-pointer label">
                  <a>Autoconnect</a>
                  <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                </label>
                <NetworkSwitcher />
              </div> */}
              <SelectNetwork />
              {/* <SelectNetwork>
                <NetworkSwitcher />
              </SelectNetwork> */}

            </div>
            <div className="mr-2 flex flex-row justify-center items-center h-10">
              <DynamicThemeSwitcher />
            </div>
            <div className="mr-2 flex flex-row justify-center items-center h-10">
              {" "}
              <NavProfileMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
