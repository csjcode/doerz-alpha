import { Button } from "@/components/ui/button";
import { GoGear } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import dynamic from "next/dynamic";
import useSolanaNetwork from "@/hooks/useSolanaNetwork";

export function SelectNetwork() {
  const { connection, setNetwork } = useSolanaNetwork('devnet');
  const handleNetwork = (network: string) => {

    switch (network) {
      case 'mainnet-beta':
        setNetwork('mainnet-beta');
        break;
      case 'testnet':
        setNetwork('testnet');
        break;
      case 'devnet':
        setNetwork('devnet');
        break;
      default:
        setNetwork('devnet');
    }
    console.log(connection);

  };

  return (
    <>
      <Select
        onValueChange={(network) => {
          handleNetwork(network);
        }}
      >
        <SelectTrigger className="border-0 p-1 focus:ring-0 bg-none bg-zinc-200 dark:bg-zinc-950 outline-zinc-200 dark:outline-zinc-950 ring-offset-0">
          <SelectValue placeholder={<GoGear size={22} />} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="border-0">
            <SelectLabel>
              <span className="text-zinc-400 dark:text-zinc-700">Network</span>
            </SelectLabel>
            <SelectItem value="mainnet-beta">Main</SelectItem>
            <SelectItem value="devnet">Dev</SelectItem>
            <SelectItem value="testnet">Test</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default dynamic(() => Promise.resolve(SelectNetwork), {
  ssr: false,
});
