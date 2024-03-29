import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GrServerCluster } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";
import { GiCoins } from "react-icons/gi";

const Waitlist = () => {
  return (
    <div className="h-full w-full">
      {" "}
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md bg-zinc-950 antialiased">
        <div className="absolute inset-0 flex h-full w-full flex-col ">
          <div className="flex w-full items-center justify-center pb-8 pt-16 ">
            <GiCoins className="text-zinc-400" size={130} />
          </div>
          <div className="mx-auto max-w-2xl ">
            <h1 className="relative z-10 bg-gradient-to-b from-zinc-200  to-zinc-700 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-4xl">
              Join the Solana App waitlist
            </h1>
            <p></p>
            <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-zinc-500">
              Welcome to our new Solana app! Solana is bursting with new
              innovations. Our tool aims to make it easier to discover new apps.
            </p>
            <input
              type="text"
              placeholder="myname@domain.com"
              className="relative z-10 mt-4 w-full rounded-lg border  border-zinc-800 bg-zinc-950 p-4 placeholder:text-zinc-700  focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Waitlist;
