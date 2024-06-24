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
        <div className="my-4 flex flex-col">
          <label className="flex flex-col items-center justify-center text-sm text-zinc-600 dark:text-zinc-400">
            <div className="">DOERZ Reward</div>
            <div className="">for Task Completion</div>
          </label>
          <div className="flex flex-col items-center justify-center">
            <Input
              className="w-20 my-2"
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
            <span className="mt-.5 text-sm">DOERZ</span>
          </div>
          {errors.rewardInDOERZ && (
            <p>{errors.rewardInDOERZ.message as string}</p>
          )}
        </div>


      </div>
      <div className="flex flex-col justify-center">
          <hr className="my-2 h-[2px] border-t-0 bg-neutral-200 dark:bg-white/10" />
          <div className="mt-2 text-center text-sm">Funding Pools</div>
          <div className=""></div>
          <div className=""></div>
        </div>
    </div>
  );
};

export default MakerzTaskCreateFunding;
