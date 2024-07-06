"use client";
import dynamic from "next/dynamic";
import { Barlow, Bungee, Inter } from "next/font/google";
import Link from "next/link";
import { useUserProfileStore, useUserTasksStore } from "@/store/store";
import SelectNetwork from "../SelectNetwork";
import WalletAdapter from "../WalletAdapter";
import NavProfileMenu from "./NavAvatarMenu";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import useTokenAccountsByMint from "@/hooks/useTokenAccountsByMint";
import { formatNumberWithCommas } from "@/utils/formatNumbers";
import { MdChangeHistory } from "react-icons/md";

const bungee = Bungee({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const inter = Inter({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const DynamicThemeSwitcher = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  const tokenAccounts = useTokenAccountsByMint(
    "Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY",
  );
  const { publicWalletAddress, updatePublicWalletAddress } =
    useUserProfileStore();
  const { connected, publicKey } = useWallet();
  useEffect(() => {
    if (publicKey) {
      updatePublicWalletAddress(publicKey.toString());
    }
  }, [publicKey, updatePublicWalletAddress]);

  const hasDOERZ = tokenAccounts[0] && tokenAccounts[0]["amount"];

  return (
    <>
      <nav className="navbar mb-2 border border-zinc-200 px-4 py-1 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex w-full items-center border-0">
          <section
            className={`${barlow.className} mr-auto flex flex-row items-center justify-center text-lg`}
          >
            <Link href="/">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                DOERZ
              </span>
              <span className="text-fuchsia-600 dark:text-fuchsia-400">
                .fun
              </span>
            </Link>
            <div className="">
              <div
                className={`ml-4 rounded-xl border
                  ${hasDOERZ ? "border-emerald-500" : "border-zinc-700 dark:border-zinc-700"} px-3 py-1 text-sm`}
              >
                {hasDOERZ
                  ? `${formatNumberWithCommas(tokenAccounts[0]["amount"])} `
                  : "0"}
                <span className="ml-1 text-zinc-500">DOERZ</span>
              </div>
            </div>
            <div className="">
              <div
                className={`ml-1 flex flex-row items-center justify-center rounded-xl px-1 py-1 text-sm`}
              >
                <div className="text-emerald-500">{hasDOERZ ? `+500 ` : "0"}</div>
                <span className="pl-[3px] pt-[1px] text-zinc-400 dark:text-zinc-600">
                  <MdChangeHistory />
                </span>
              </div>
            </div>
          </section>

          {/* <ul className="nav-links flex  items-center gap-8">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contacts">
              <li>Contacts</li>
            </Link>
          </ul> */}
          <div className="flex flex-row items-end">
            <div className="ml-4 rounded-lg border border-zinc-300 dark:border-zinc-900">
              <WalletAdapter />
            </div>
            <div className="flex h-10 flex-row items-center justify-center">
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
            <div className="mr-2 flex h-10 flex-row items-center justify-center">
              <DynamicThemeSwitcher />
            </div>
            <div className="mr-2 flex h-10 flex-row items-center justify-center">
              {" "}
              <NavProfileMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
