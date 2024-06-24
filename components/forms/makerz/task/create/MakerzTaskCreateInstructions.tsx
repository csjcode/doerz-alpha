"use client";

import React, { ChangeEvent, useReducer } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MdAdd, MdRemove } from "react-icons/md";
import { State, initialState, reducer } from "./reducerMakerzTaskFor";

const MakerzTaskCreateInstructions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInstructionChange = (index: number, value: string) => {
    const updatedInstructions = [...state.instructions];
    updatedInstructions[index] = value;
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
            className="flex-grow border"
          />
          <Button
            type="button"
            variant={"ghost"}
            onClick={() => removeInstruction(index)}
            className="hover:bg-none"
          >
            <span className="rounded-xl border bg-zinc-500 text-zinc-100"><MdRemove /></span>
          </Button>
        </div>
      ))}
      {state.instructions.length < 10 && (
        <Button
          type="button"
          onClick={addInstruction}
          className="rounded border bg-blue-500 p-2 text-zinc-100"
        >
          <MdAdd className="mr-1"/> Add Instruction
        </Button>
      )}
    </div>
  );
};

export default MakerzTaskCreateInstructions;
