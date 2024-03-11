"use client";
import NavBar from "@/components/NavBar";
import { ContextProvider } from "@/contexts/ContextProvider";
import { Bungee } from "next/font/google";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Waitlist from "@/components/Waitlist";

const bungee = Bungee({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <ContextProvider>
        <NavBar />
        <div className="w-full  py-2 bg-zinc-400 dark:bg-zinc-900 border-bottom border-zinc-600">
          <div className="w-full flex flex-row space-x-2 justify-center items-center">
            <div className="min-w-24 px-6 py-2 mx-2 border border-zinc-800 rounded">Cards</div>
            <div className="min-w-24 px-6 py-2 mx-2 border border-zinc-800 rounded">Transactions</div>
            <div className="px-6 py-2 mx-2 border border-zinc-800 rounded">Inbox</div>
            <div className="px-6 py-2 mx-2 border border-zinc-800 rounded">Wallet</div>
            <div className="px-6 py-2 mx-2 border border-zinc-800 rounded">Market Dashboard</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen w-full">
          {/* <div className={`${bungee.className} text-4xl`}>Home Page</div> */}
          <Waitlist />
        </div>
      </ContextProvider>
    </>
  );
}
