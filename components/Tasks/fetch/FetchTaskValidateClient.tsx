"use client";
import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useFetchTaskDetail } from "@/hooks/useFetchTaskDetail";
import DisplayTaskDetail from "../display/DisplayTaskDetail";
import DisplayTaskValidate from "../display/DisplayTaskValidate";
import { useWallet } from "@solana/wallet-adapter-react";

type FetchTaskValidateClientProps = {
  taskIdName: string;
};

const FetchTaskValidateClient = ({
  taskIdName,
}: FetchTaskValidateClientProps) => {
  const { task, error, fetchTaskDetail } = useFetchTaskDetail(taskIdName);
  const { publicKey } = useWallet();

  const publicKeyString = publicKey?.toBase58() || "";


  // console.log(`taskIdName is ${taskIdName}`);

  useEffect(() => {
    fetchTaskDetail(taskIdName);
  }, []);

  const data = task || null;

  // console.log(`data is ${JSON.stringify(data)}`);

  if (!data) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="mt-36 w-full">
          <div className="text-md text-center text-zinc-700 dark:text-zinc-300">
            LOADING DATA...
          </div>
          <BeatLoader
            className="p-2 text-center text-2xl"
            color="#36d7b7"
            size={25}
          />
        </div>
      </div>
    );
  } else if (data) {
    // console.log(`taskIdName is ${taskIdName}`);
    const walletAddress = publicKeyString;
    const mintAddress = 'Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY';
    const tokenAmount = '1';
    return (
      <DisplayTaskValidate
        data={data}
        walletAddress={walletAddress}
        mintAddress={mintAddress}
        tokenAmount={tokenAmount}
      />
    );
  }
};

export default FetchTaskValidateClient;
