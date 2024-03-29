import SwapJupiterTerminal from "@/components/SwapJupiterTerminal";
import { Metadata } from "next";
import React from "react";

type SwapPageProps = {};
export const metadata: Metadata = {
  title: "Swap Jupiter Terminal - Solana app",
  description: "Swap Jupiter Terminal Demo for my Solana app",
};
const SwapPage = (props: SwapPageProps) => {
  const rpcUrl = process.env.NEXT_PUBLIC_MAIN_RPC_URL;


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl mt-4">Swap Jupiter (production)</div>
      <div className="text-xl">note: This runs on MAINNET ONLY</div>
      <div className="m-8">
        {/* <SwapJupiterTerminal /> */}
      </div>
    </div>
  );
};

export default SwapPage;
