"use client";
import React, { ChangeEvent, useState } from "react";
import { State } from "./reducerMakerzTaskFor";
import MakerzTaskCreateFunding from "./MakerzTaskCreateFunding";
import { Button } from "@/components/ui/button";

type MakerzTaskCreateStep4Props = {
  state: State;
  setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateStep4 = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateStep4Props) => {
  const [doerzAvailableFunding, setDoerzAvailableFunding] = useState(0);

  const handleFundingStatus = (
    rewardInDOERZSuppliedTotal: number,
    rewardInDOERZ: number,
    doerzAvailableWallet: number,
  ) => {
    const fundingAvailable = Number(doerzAvailableWallet) - Number(rewardInDOERZSuppliedTotal);
    setDoerzAvailableFunding(fundingAvailable);

    let fundingStatus = false;
    if (rewardInDOERZSuppliedTotal > rewardInDOERZ && fundingAvailable >= 0) {
      fundingStatus = true;
    }

    dispatch({
      type: "SET_FIELD",
      field: "fundingStatus",
      value: fundingStatus,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <MakerzTaskCreateFunding
            state={state}
            dispatch={dispatch}
            register={register}
            handleFormChange={handleFormChange}
            errors={errors}
            handleFundingStatus={handleFundingStatus}
          />
        </div>
      </div>

      <div className="items-content flex w-full flex-row justify-center">
        <Button
          className={`disabled my-2 border-blue-500 bg-blue-500 px-16 text-white hover:bg-blue-600`}
          disabled={doerzAvailableFunding < 0}
          type="submit"
        >
          Fund Task
        </Button>
      </div>
    </>
  );
};

export default MakerzTaskCreateStep4;
