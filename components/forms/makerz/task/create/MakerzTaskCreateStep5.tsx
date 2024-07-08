"use client";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { State } from "./reducerMakerzTaskFor";
import MakerzTaskCreateSchedule from "./MakerzTaskCreateSchedule";
import { Button } from "@/components/ui/button";
import { onSubmit } from "./onSubmit";

type MakerzTaskCreateStep5Props = {
  state: State;
  setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateStep5 = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateStep5Props) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/makerz/create/"); // Replace "/path-to-redirect" with your desired path
  };

  const handleSubmit = async () => {
    await onSubmit({}, state, dispatch, handleRedirect);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <MakerzTaskCreateSchedule
            state={state}
            dispatch={dispatch}
            register={register}
            handleFormChange={handleFormChange}
            errors={errors}
          />
        </div>
      </div>

      {state.hasMissingFields && (
        <div className="mt-4 flex flex-col items-center">
          <div className="text-red-500">Missing required fields</div>
          <div className="text-red-500">
            Fill in required fields before submitting
          </div>
        </div>
      )}

      {!state.hasMissingFields && (
        <div className="border-0 text-center">
          <Button
            className="my-2  border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
            type="button"
            onClick={handleSubmit}
          >
            Schedule/Publish
          </Button>
        </div>
      )}
    </>
  );
};

export default MakerzTaskCreateStep5;
