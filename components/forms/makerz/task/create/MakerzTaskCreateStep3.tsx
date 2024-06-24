"use client";
import React, { ChangeEvent } from "react";

import { taskTypes } from "@/components/Tables/data/data";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { getErrorMessage } from "./CreateMakerzTaskForm";
import { OWNER_ORG } from "./initialConfig";
import { State } from "./reducerMakerzTaskFor";
import MakerzTaskCreateInstructions from "./MakerzTaskCreateInstructions";

type MakerzTaskCreateStep3Props = {
  state: State;
  setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateStep3 = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateStep3Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          Add Task Instructions
        </label>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <MakerzTaskCreateInstructions />
        </div>
      </div>

      <div className="mt-2 flex w-full flex-col items-center justify-center">
        <div
          className="w-36 cursor-pointer rounded border bg-blue-500 px-4 py-1 text-center text-zinc-100"
          onClick={() =>
            dispatch({
              type: "SET_FIELD",
              field: "makerzFormStep",
              value: 4,
            })
          }
        >
          Fund Task
        </div>
      </div>

      {/* <Button
        className="border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
        type="submit"
      >
        Save Task
      </Button> */}
    </>
  );
};

export default MakerzTaskCreateStep3;
