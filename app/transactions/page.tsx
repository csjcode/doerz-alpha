import { SignMessage } from "@/components/SignMessage";
import { Metadata } from "next";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import SignInWallet from "@/components/SignInWallet";
import WalletGetAccountInfo from "@/components/WalletGetAccountInfo";
import WalletSendTransaction from "@/components/WalletSendTransaction";

type TransactionsPageProps = {};
export const metadata: Metadata = {
  title: "Transactions - Solana app",
  description: "Transactions Demo for my Solana app",
};
const TransactionsPage = (props: TransactionsPageProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex mb-4 text-4xl p-4 w-full justify-center items-center">
        <h1>Transactions</h1>
      </div>
      <div className="w-full">
        <SignInWallet />
      </div>
      <div className="w-full">
        <SignMessage />
      </div>
      <div className="flex w-full mt-4 justify-center items-center">
        <div className="p-4 border max-w-[260px]">
          <WalletGetAccountInfo />
        </div>
      </div>
      <div className="flex w-full mt-4 justify-center items-center">
        <div className="p-4 border max-w-[260px]">
          <WalletSendTransaction />
        </div>
      </div>

    </div>
  );
};

export default TransactionsPage;
