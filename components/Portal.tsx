import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GrServerCluster } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";
import { GiCoins } from "react-icons/gi";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";

const DynamicThemeSwitcher = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

const Waitlist = () => {
  return (
    <div className="h-full w-full">
      {" "}
      <div className="bg-zinc-250 relative flex h-full w-full flex-col items-center justify-center rounded-md antialiased dark:bg-zinc-950">
        <div className="absolute inset-0 flex h-full w-full flex-col">
          <div className="flex w-full grow justify-center gap-4 pb-8 pl-4 pt-8">
            <div className="flex h-[50%] w-2/5 flex-col items-center justify-center rounded-xl border-2 dark:border-zinc-600 border-zinc-200">
              <div className="pb-6 text-center text-2xl">
                <div>I want to</div>{" "}
                <div>
                  <u className="decoration-slate-400 decoration-dashed underline-offset-8">
                    do stuff
                  </u>{" "}
                  and get{" "}
                  <u className="decoration-slate-400 decoration-dashed underline-offset-8 dark:decoration-slate-600">
                    rewards
                  </u>
                </div>
              </div>
              <Button className="h-20 w-40 bg-blue-500 text-xl hover:bg-blue-600">
                Doerz
              </Button>
              <div className="mt-6 w-[60%] text-zinc-500 leading-relaxed">
                <ul className="list-outside list-disc">
                  <li>Rewards for social media promotion</li>
                  <li>Rewards for token/NFT ownership</li>
                  <li>Answer quizes and surveys</li>
                  <li>Rewards for staking, trying new apps</li>
                  <li>Rewards for participation</li>
                </ul>
              </div>
            </div>

            <div className="flex h-[50%] w-2/5 flex-col items-center justify-center rounded-xl border-2 dark:border-zinc-600 border-zinc-200">
              <div className="pb-6 text-center text-2xl">
                <div>I want to</div>
                <div>
                  {" "}
                  promote{" "}
                  <u className="decoration-slate-400 decoration-dashed underline-offset-8 dark:decoration-slate-600">
                    something
                  </u>
                </div>
              </div>
              <Button className="h-20 w-40 bg-green-600 text-xl hover:bg-green-700">
                Makerz
              </Button>
              <div className="mt-6 w-[60%] text-zinc-500 leading-relaxed">
                <ul className="list-outside list-disc">
                  <li>Promote apps, tokens, protocols</li>
                  <li>New features, rollouts and events</li>
                  <li>Social media campaigns</li>
                  <li>Influencers omni-channel</li>
                  <li>Test ideas, get user feedback</li>
                </ul>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
