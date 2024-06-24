"use client";

import React, { ChangeEvent, useEffect, useReducer } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MdAdd, MdRemove } from "react-icons/md";
import { State, initialState, reducer } from "./reducerMakerzTaskFor";

type MakerzTaskCreateInstructionsProps = {
  state: State;
  setValue?: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateInstructions = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateInstructionsProps) => {

  const handleInstructionChange = (index: number, value: string) => {
    // console.log("index", index);
    // console.log("value", value);


    const updatedInstructions = [...state.instructions];
    updatedInstructions[index] = value;

    console.log("updatedInstructions", updatedInstructions);

    console.log("state.instructions", state.instructions);

    dispatch({
      type: "SET_FIELD",
      field: "instructions",
      value: updatedInstructions,
    });
  };

  const addInstruction = () => {
    if (state.instructions.length < 10) {
      dispatch({
        type: "ADD_INSTRUCTION",
        instruction: "",
      });
    }
  };

  const removeInstruction = (index: number) => {
    dispatch({
      type: "REMOVE_INSTRUCTION",
      index,
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      {state.instructions.map((instruction, index) => (
        <div key={index} className="flex items-center mt-2 ">
          <Textarea
            value={instruction}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleInstructionChange(index, e.target.value)
            }
            placeholder={`Instruction ${index + 1}`}
            className="flex-grow border w-42"
          />
          <Button
            type="button"
            variant={"ghost"}
            onClick={() => removeInstruction(index)}
            className="hover:bg-none p-0 ml-1"
          >
            <span className="rounded-xl border bg-zinc-500 text-zinc-100"><MdRemove /></span>
          </Button>
        </div>
      ))}
      {state.instructions.length < 10 && (
        <Button
          type="button"
          variant={"outline"}
          onClick={addInstruction}
          className="mt-2 px-8 rounded border border-blue-600 dark:border-blue-400 text-zinc-800 dark:text-zinc-200"
        >
          <MdAdd className="mr-1 text-md"/> Add Instructions
        </Button>
      )}
    </div>
  );
};

export default MakerzTaskCreateInstructions;
