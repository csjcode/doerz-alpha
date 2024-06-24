import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
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
import { OWNER_ORG } from "./initialConfig";

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
          <FormLabel
            labelTitle="DOERZ Reward"
            required={true}
            ready={!!state.rewardInDOERZ}
          />
          <div className="flex flex-col items-center justify-center">
            <Input
              className="my-2 w-20"
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
            {/* <span className="mt-.5 text-sm">DOERZ</span> */}
          </div>
          {errors.rewardInDOERZ && (
            <p>{errors.rewardInDOERZ.message as string}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <hr className="my-2 h-[2px] border-t-0 bg-neutral-200 dark:bg-white/10" />
        <div className="mt-2 text-center text-sm">Funding Pools</div>
        <div className="">
          <div className="my-4 mr-2">
            <label className="text-sm text-zinc-600 dark:text-zinc-400">
              Group Owner
            </label>
            <Select
              defaultValue={OWNER_ORG}
              {...register("ownerGroup")}
              onValueChange={(value) =>
                handleFormChange({
                  target: { name: "ownerGroup", value },
                } as any)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select group owner" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={OWNER_ORG}>{OWNER_ORG}</SelectItem>
                  <SelectItem value="doerzsitepromos">
                    Doerz.fun Site Rewards
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.ownerGroup && <p>{errors.ownerGroup.message as string}</p>}
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MakerzTaskCreateFunding;
