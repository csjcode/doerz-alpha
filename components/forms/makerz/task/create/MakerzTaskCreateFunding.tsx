import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { handleFormChange } from "./handleFormChange";
import { State } from "./reducerMakerzTaskFor";

type MakerzTaskCreateFundingProps = {
  state: State;
  // setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateFunding = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateFundingProps) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="">Reward to Complete Task</div>
        <div className="flex flex-col my-4">
          <label className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400 justify-center items-center">
            <div className="">DOERZ Reward</div>
            <div className="">for Task Completion</div>
          </label>
          <div className="flex flex-col justify-center items-center">
          <Input
            className="w-20"
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
          />
          </div>
          {errors.rewardInDOERZ && (
            <p>{errors.rewardInDOERZ.message as string}</p>
          )}
        </div>
        <div className="">Funding Pools</div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MakerzTaskCreateFunding;
