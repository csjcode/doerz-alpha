"use client"
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useState, useEffect } from "react";
import { handleFormChange } from "./handleFormChange";
import { State } from "./reducerMakerzTaskFor";
import FormLabel from "./FormLabel";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { FUNDING_POOL } from "./initialConfig";
import { Button } from "@/components/ui/button";
import { useWallet } from "@solana/wallet-adapter-react";
import useTokenAccountsByMint from "@/hooks/useTokenAccountsByMint"; // Ensure the correct path

type MakerzTaskCreateFundingProps = {
  state: State;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
  handleFundingStatus: (
    rewardInDOERZSuppliedTotal: number,
    rewardInDOERZ: number,
    doerzAvailableWallet: number,
  ) => void;
};

const MakerzTaskCreateFunding = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
  handleFundingStatus,
}: MakerzTaskCreateFundingProps) => {
  const { publicKey } = useWallet();
  const tokenAccounts = useTokenAccountsByMint(process.env.NEXT_PUBLIC_DOERZ_TOKEN_MINT_ACCOUNT || "");

  const [doerzAvailableWallet, setDoerzAvailableWallet] = useState(0);

  useEffect(() => {
    if (tokenAccounts.length > 0) {
      const totalAmount = tokenAccounts.reduce((sum, account) => sum + account.amount, 0);
      setDoerzAvailableWallet(totalAmount);
    }
  }, [tokenAccounts]);

  const doerzAvailableFunding = Number(doerzAvailableWallet) - Number(state.rewardInDOERZSuppliedTotal);

  useEffect(() => {
    handleFundingStatus(Number(state.rewardInDOERZSuppliedTotal), Number(state.rewardInDOERZ), Number(doerzAvailableWallet));
  }, [doerzAvailableFunding, state.rewardInDOERZSuppliedTotal, state.rewardInDOERZ, doerzAvailableWallet]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-4 flex flex flex-col flex-col">
          <FormLabel
            labelTitle="DOERZ Reward"
            required={true}
            ready={!!state.rewardInDOERZ}
          />
          <div className="flex flex-col items-center justify-center">
            <Input
              className="mt-2 w-20"
              defaultValue="100"
              type="number"
              {...register("rewardInDOERZ", {
                valueAsNumber: true,
                required: "Reward in DOERZ is required",
                onChange: (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                  >,
                ) => handleFormChange(e),
              })}
            />{" "}
            {errors.rewardInDOERZ && (
              <p>{errors.rewardInDOERZ.message as string}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex flex-col my-2 mr-2 justify-center items-center border-0 w-44">
            <label className="mb-1 text-sm text-zinc-600 dark:text-zinc-400 ">
              Select Funding Pool
            </label>
            <Select
              className="w-12"
              defaultValue={FUNDING_POOL[0].id}
              value={state.fundingPool}
              {...register("fundingPool")}
              onValueChange={(value) =>
                handleFormChange({
                  target: { name: "fundingPool", value },
                } as any)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select fundingPool" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FUNDING_POOL.map((fundingPool) => (
                    <SelectItem key={fundingPool.id} value={fundingPool.id}>
                      {fundingPool.label}
                    </SelectItem>
                  ))}
                  <SelectItem
                    key={"fundingPoolCreate"}
                    value={"fundingPoolCreate"}
                  >
                    Create New
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.ownerGroup && <p>{errors.ownerGroup.message as string}</p>}
          </div>
          {state.fundingPool === "fundingPoolCreate" && (
            <div className="">Create Pool</div>
          )}
        </div>

        <div className=" flex flex-col">
          <FormLabel
            labelTitle="Total DOERZ Supplied"
            required={true}
            ready={!!state.rewardInDOERZSuppliedTotal}
          />
          <div className="flex flex-col items-center justify-center">
            <Input
              className="mt-2 w-28"
              defaultValue="10000"
              type="number"
              {...register("rewardInDOERZSuppliedTotal", {
                valueAsNumber: true,
                required: "Reward in DOERZ is required",
                onChange: (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                  >,
                ) => handleFormChange(e),
              })}
            />{" "}
            {errors.rewardInDOERZ && (
              <p>{errors.rewardInDOERZ.message as string}</p>
            )}
          </div>
        </div>
        <div className="mt-2 text-center">
          You have <span className="font-bold">{doerzAvailableFunding}</span>
        </div>
        <div className="text-center">DOERZ Available</div>
        <hr className="my-2" />
        <div className="mt-2 text-center text-xs text-zinc-700 dark:text-zinc-300">
          &quot;Total DOERZ Supplied&quot; is the amount of your DOERZ that can
          be claimed by users accomplishing tasks. &quot;DOERZ Reward&quot; is the
          amount of DOERZ given to each user for completing the task.
        </div>
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default MakerzTaskCreateFunding;
