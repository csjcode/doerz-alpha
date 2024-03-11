import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GrServerCluster } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";
import { GiCoins } from "react-icons/gi";



const Waitlist = () => {
  return (
    <div className="w-full h-full">
      {" "}
      <div className="w-full h-full rounded-md bg-zinc-950 relative flex flex-col items-center justify-center antialiased">
        <div className="flex flex-col w-full h-full absolute inset-0 ">
          <div className="pt-16 pb-8 w-full flex items-center justify-center ">
            <GiCoins className="text-zinc-400" size={130} />
          </div>
          <div className="max-w-2xl mx-auto ">
            <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-700 text-center font-sans font-bold">
              Join the Solana App waitlist
            </h1>
            <p></p>
            <p className="text-zinc-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Welcome to our new Solana app! Solana is bursting with new
              innovations. Our tool aims to make it easier to discover new apps.
            </p>
            <input
              type="text"
              placeholder="myname@domain.com"
              className="p-4 rounded-lg border border-zinc-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-zinc-950 placeholder:text-zinc-700"
            />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Waitlist;
