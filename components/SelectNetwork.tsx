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

// type SelectNetworkProps = {
//   children: React.ReactNode;
// };

export function SelectNetwork() {
  return (
    <>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder={<GoGear />} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Network</SelectLabel>
            <SelectItem value="mainnet-beta">main</SelectItem>
            <SelectItem value="devnet">dev</SelectItem>
            <SelectItem value="testnet">test</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default SelectNetwork;
