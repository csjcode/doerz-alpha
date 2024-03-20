import SignInWallet from "@/components/SignInWallet";
import WalletGetAccountInfo from "@/components/WalletGetAccountInfo";
import { Metadata } from "next";
import React from "react";

type WalletsPageProps = {};
export const metadata: Metadata = {
  title: "Wallets - Solana app",
  description: "Wallets Demo for my Solana app",
};
const WalletsPage = (props: WalletsPageProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex mb-4 text-4xl p-4 w-full justify-center items-center">
        <h1>Wallet Info</h1>
      </div>
      <div className="w-full">
        <SignInWallet />
      </div>
      <div className="w-full">
        <WalletGetAccountInfo />
      </div>
    </div>
  );
};

export default WalletsPage;
