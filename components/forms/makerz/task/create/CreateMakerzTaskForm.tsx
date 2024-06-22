"use client";
import React, { ChangeEvent, useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchemaMakerzForm } from "./schemaForms";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { labels } from "@/components/Tables/data/data";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import PreviewMakerzTaskForm from "./PreviewMakerzTaskForm";
import { generateShortDateTime } from "@/utils/dates";
import {
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
  PiNumberCircleFour,
} from "react-icons/pi";

import { State, initialState, reducer } from "./reducerMakerzTaskFor";
import { onSubmit } from "./onSubmit";
import { OWNER_ORG, getInitialValues } from "./initialConfig";
import MakerzTaskCreateStep1 from "./MakerzTaskCreateStep1";
import MakerzTaskCreateHeader from "./MakerzTaskCreateHeader";
import MakerzTaskCreateStep2 from "./MakerzTaskCreateStep2";

export const getErrorMessage = (errors: any, fieldName: string) => {
  if (errors[fieldName]) {
    return (
      <p className="text=sm text-red-600">
        {errors[fieldName].message as string}
      </p>
    );
  }
  return null;
};

const CreateMakerzTaskForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchemaMakerzForm(state.taskType)),
  });

  useEffect(() => {
    setInitialValues();
  }, []);

  const setInitialValues = () => {
    const initialValues = getInitialValues(state);

    Object.entries(getInitialValues(state)).forEach(([key, value]) => {
      setValue(key as keyof typeof initialValues, value);
    });

    dispatch({ type: "SET_INITIAL_VALUES", payload: initialValues });
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const parsedValue = name === "draft" ? value === "true" : value;
    setValue(name, parsedValue);
    dispatch({
      type: "SET_FIELD",
      field: name as keyof State,
      value: parsedValue,
    });
  };

  const handleSubmitForm = (data: any) => {
    onSubmit(data, state);
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row">
      {/* <div>Makerz List</div> */}
      <div className="mr-4 flex w-[300px] flex-col items-center border-r border-r-zinc-200 dark:border-r-zinc-800">
        <div className="visible w-full text-center sm:hidden">
          View Task Preview
        </div>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="flex flex-col justify-start">
            <MakerzTaskCreateHeader state={state} />

            {state.makerzFormStep === 1 && (
              <MakerzTaskCreateStep1
                state={state}
                setValue={setValue}
                dispatch={dispatch}
                register={register}
                handleFormChange={handleFormChange}
                errors={errors}
              />
            )}

            {state.makerzFormStep == 2 && (
              <MakerzTaskCreateStep2
                state={state}
                setValue={setValue}
                dispatch={dispatch}
                register={register}
                handleFormChange={handleFormChange}
                errors={errors}
              />
            )}
          </div>
        </form>
      </div>

      <PreviewMakerzTaskForm
        data={{
          taskIdNameShort: state.taskIdNameShort,
          taskType: state.taskType,
          draft: state.draft,
          title: state.title,
          description: state.description,
          rewardInDOERZ: state.rewardInDOERZ,
          ownerGroup: state.ownerGroup,
          ownerAdmin: state.ownerAdmin,
          image: state.image,
        }}
      />
    </div>
  );
};

export default CreateMakerzTaskForm;
