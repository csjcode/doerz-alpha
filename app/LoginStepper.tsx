"use client";
import WalletAdapter from "@/components/WalletAdapter";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";

type LoginStepperProps = {};

const LoginStepper = (props: LoginStepperProps) => {
  const { connected } = useWallet();
  // const { loggedIn}  = isLoggedIn

  const connectStyle = connected
    ? "border border-green-500 bg-green-200 dark:bg-green-800"
    : "border border-green-500 bg-zinc-200 bg-zinc-200 dark:bg-green-800";

  const loggedInStyle = connected
    ? "border border-green-500 bg-green-200 dark:bg-green-800"
    : "border border-green-500 bg-zinc-200 bg-zinc-200 dark:bg-green-800";

  return (
    <div className="mt-4 flex flex-col">
      <div className="mt-4 flex flex-row">
        <div className={`${connectStyle} } mr-1 px-4 py-2`}>
          1. Connect Wallet
        </div>
        <div
          className={`dark:bg-zinc-800} mr-1 border border-zinc-300 bg-zinc-200 px-4 py-2`}
        >
          2. Login/Register
        </div>
        <div
          className={`dark:bg-zinc-800} mr-1 border border-zinc-300 bg-zinc-200 px-4 py-2`}
        >
          (Optional) 3. Preferences
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
      <div className="mt-4">{connected ? `Connected` : ` NotConnected`}</div>
      <WalletAdapter />
      </div>

    </div>
  );
};

export default LoginStepper;
