import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GrServerCluster } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";
import { GiCoins } from "react-icons/gi";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Outfit, Barlow } from "next/font/google";

const barlow = Barlow({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});

const DynamicThemeSwitcher = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

const Portal = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full grow justify-center gap-4 pb-8 pl-4 pt-8">
        <div className="flex h-[50%] w-2/5 flex-col items-center justify-center rounded-xl border-2 border-zinc-200 p-8 dark:border-zinc-600">
          <div className="pb-4 text-center text-3xl">
            <div>Get Rewards</div>
          </div>
          <Link href="/login/">
            <Button
              className={`h-20 w-40 bg-emerald-500 text-2xl text-white hover:bg-emerald-600 ${barlow.className}`}
            >
              Doerz
            </Button>
          </Link>
          <div className="mt-6 w-[60%] leading-relaxed text-zinc-700 dark:text-zinc-300">
            <ul className="list-outside list-disc">
              <li>Rewards for social media promotion</li>
              <li>Rewards for token/NFT ownership</li>
              <li>Answer quizes and surveys</li>
              <li>Rewards for staking, trying new apps</li>
              <li>Rewards for participation</li>
            </ul>
          </div>
        </div>
        <div className="flex h-[50%] w-2/5 flex-col items-center justify-center rounded-xl border-2 border-zinc-200 p-8 dark:border-zinc-600">
          <div className="pb-4 text-center text-3xl">
            <div className="">Promote </div>
          </div>
          <Link href="/makerz/list/">
            <Button
              className={`h-20 w-40 bg-purple-600 text-2xl text-white hover:bg-purple-700 ${barlow.className}`}
            >
              Makerz
            </Button>
          </Link>
          <div className="mt-6 w-[60%] leading-relaxed text-zinc-700 dark:text-zinc-300">
            <ul className="list-outside list-disc">
              <li>Promote apps, tokens, protocols</li>
              <li>New features, rollouts and events</li>
              <li>Social media campaigns</li>
              <li>Influencers omni-channel</li>
              <li>Test ideas, get user feedback</li>
            </ul>
          </div>
        </div>
        {/* <div className=""></div> */}
      </div>
      {/* <div className="flex flex-row justify-around">
        <div className="w-1/2">This is a test</div>
        <div className="w-1/2">
          <Image
            width={200}
            height={160}
            style={{ height: "100%", width: "100%" }}
            src="/images/DOERZ.fun.png"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Portal;
