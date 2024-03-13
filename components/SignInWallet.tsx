"use client";
import React from "react";
import WalletAdapter from "./WalletAdapter";
import { useWallet } from "@solana/wallet-adapter-react";

type SignInWalletProps = {};

function SignInWallet({}: SignInWalletProps) {
  const { publicKey } = useWallet();

  return (
    <>
      {!publicKey && (
        <div className="flex flex-col justify-center items-center">
          <div className="">Wallet not connected</div>
          <div className="ml-4 border border-zinc-300 dark:border-zinc-900 rounded-lg">
            <WalletAdapter />
          </div>
        </div>
      )}
    </>
  );
}

export default SignInWallet;
