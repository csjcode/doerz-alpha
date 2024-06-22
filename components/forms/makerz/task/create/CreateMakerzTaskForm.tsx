"use client";
import React, { ChangeEvent, useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchemaMakerzForm } from "./schemaForms";
import { v4 as uuidv4 } from "uuid";
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
import {
  OWNER_USER,
  OWNER_GROUP,
  OWNER_ADMIN,
  OWNER_ORG,
} from "@/config/testing";
import { State, initialState, reducer } from "./reducerMakerzTaskFor";
import { getRewardSize } from "./utils";
import { onSubmit } from "./onSubmit";

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
    const initialValues = {
      draft: true,
      taskType: "ownership",
      taskIdNameShort: state.taskIdNameShort,
      ownerGroup: OWNER_USER,
      ownerAdmin: OWNER_USER,
    };

    Object.entries(initialValues).forEach(([key, value]) => {
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


  const getErrorMessage = (errors: any, fieldName: string) => {
    if (errors[fieldName]) {
      return (
        <p className="text=sm text-red-600">
          {errors[fieldName].message as string}
        </p>
      );
    }
    return null;
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
            <div className="flex flex-row items-center justify-start pl-4">
              <MdFormatListBulletedAdd className="text-zinc-500" />
              <div className="ml-2 mr-2 font-medium">Create Task</div>
              {state.makerzFormStep < 2 ? (
                <div className="mr-1">
                  <PiNumberCircleOne
                    className={`${
                      state.makerzFormStep === 1
                        ? "text-green-700 dark:text-green-300"
                        : "dark:zinc-600 text-zinc-400"
                    }`}
                  />
                </div>
              ) : (
                <div className="mr-1">
                  <FaCircleCheck className="text-green-600 dark:text-green-400" />
                </div>
              )}
              {state.makerzFormStep < 3 ? (
                <div className="mr-1">
                  <PiNumberCircleTwo
                    className={`${
                      state.makerzFormStep === 2
                        ? "text-green-700 dark:text-green-300"
                        : "dark:zinc-600 text-zinc-400"
                    }`}
                  />
                </div>
              ) : (
                <div className="mr-1">
                  <FaCircleCheck className="text-green-600 dark:text-green-400" />
                </div>
              )}
              {state.makerzFormStep < 4 ? (
                <div className="mr-1">
                  <PiNumberCircleThree
                    className={`${
                      state.makerzFormStep === 3
                        ? "text-green-700 dark:text-green-300"
                        : "dark:zinc-600 text-zinc-400"
                    }`}
                  />
                </div>
              ) : (
                <div className="mr-1">
                  <FaCircleCheck className="text-green-600 dark:text-green-400" />
                </div>
              )}
              {state.makerzFormStep < 5 ? (
                <div className="">
                  <PiNumberCircleFour
                    className={`${
                      state.makerzFormStep === 4
                        ? "text-green-700 dark:text-green-300"
                        : "dark:zinc-600 text-zinc-400"
                    }`}
                  />
                </div>
              ) : (
                <div className="mr-1">
                  <FaCircleCheck className="text-green-600 dark:text-green-400" />
                </div>
              )}
            </div>
            {state.makerzFormStep === 1 && (
              <div className="flex flex-col justify-center px-4">
                <div className="my-4 mr-2">
                  <label className="text-sm text-zinc-600 dark:text-zinc-400">
                    Task type
                  </label>
                  <Select
                    defaultValue="ownership"
                    {...register("taskType")}
                    onValueChange={(value) =>
                      handleFormChange({
                        target: { name: "taskType", value },
                      } as any)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {labels.map((label) => (
                          <SelectItem key={label.value} value={label.value}>
                            {label.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div
                  className="w-24 rounded border bg-blue-500 px-4 py-1 text-center text-zinc-100"
                  onClick={() =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "makerzFormStep",
                      value: 2,
                    })
                  }
                >
                  Next
                </div>
                <div className="mt-4">
                  <h3 className="text-md font-medium">Onboarding</h3>
                  <p className="font-light">
                    Create a task incentivizes users to learn more when joining
                    your app and community.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-md font-medium">Ownership</h3>
                  <p className="font-light">
                    Create a task that rewards users with ownership tokens.
                  </p>
                </div>
              </div>
            )}

            {state.makerzFormStep == 2 && (
              <>
                <div className="flex flex-row items-center">
                  <div className="mr-2">
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">
                      Task ID
                    </label>
                    <Input
                      defaultValue={state.taskIdNameShort}
                      className="w-[100px]"
                      {...register("taskIdName", {
                        onChange: (e) => handleFormChange(e),
                      })}
                    />
                  </div>
                  <div className="my-4 mr-2">
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">
                      Task type
                    </label>
                    <Select
                      defaultValue="ownership"
                      {...register("taskType")}
                      onValueChange={(value) =>
                        handleFormChange({
                          target: { name: "taskType", value },
                        } as any)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {labels.map((label) => (
                            <SelectItem key={label.value} value={label.value}>
                              {label.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  {getErrorMessage(errors, "taskIdNameShort")}
                  {getErrorMessage(errors, "draft")}
                  {getErrorMessage(errors, "taskType")}
                </div>

                {state.taskType === "ownership" && (
                  <div className="">
                    <div className="flex flex-row">
                      <div className="mt-0 ">
                        <label className="text-sm text-zinc-600 dark:text-zinc-400">
                          Token Name
                        </label>
                        <Input
                          {...register("ownershipTokenName")}
                          className="w-32"
                          onChange={(e) => handleFormChange(e)}
                        />
                        {errors.ownershipTokenName && (
                          <p>{errors.ownershipTokenName.message as string}</p>
                        )}
                      </div>
                      <div className="ml-4 mt-0">
                        <label className="text-sm text-zinc-600 dark:text-zinc-400">
                          Symbol
                        </label>
                        <Input
                          {...register("ownershipTokenSymbol")}
                          className="w-20"
                          onChange={(e) => handleFormChange(e)}
                        />
                        {errors.ownershipTokenSymbol && (
                          <p>{errors.ownershipTokenSymbol.message as string}</p>
                        )}
                      </div>
                    </div>
                    <div className="mt-2">
                      <label className="text-sm text-zinc-600 dark:text-zinc-400">
                        Program Address
                      </label>
                      <Input
                        {...register("ownershipTokenAddress")}
                        onChange={(e) => handleFormChange(e)}
                      />
                      {errors.title && <p>{errors.title.message as string}</p>}
                      <div className="truncate text-xs text-zinc-400 dark:text-zinc-600">
                        Ex: DezXAZ8z7PnrnRJjz3wXBoRgixCa...
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-2">
                  <label className="text-sm text-zinc-600 dark:text-zinc-400">
                    Task Title
                  </label>
                  <Input
                    {...register("title")}
                    onChange={(e) => handleFormChange(e)}
                  />
                  {errors.title && <p>{errors.title.message as string}</p>}
                </div>
                <div className="mt-2">
                  <label className="text-sm text-zinc-600 dark:text-zinc-400">
                    Task Description
                  </label>
                  <Textarea
                    {...register("description")}
                    className="h-12"
                    minHeight={40}
                    onChange={(e) => handleFormChange(e)}
                  />
                  {errors.description && (
                    <p>{errors.description.message as string}</p>
                  )}
                </div>
                <div className="flex w-56 flex-row">
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
                    {errors.ownerGroup && (
                      <p>{errors.ownerGroup.message as string}</p>
                    )}
                  </div>

                  <div className="my-4 ">
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">
                      Admin Group
                    </label>
                    <Select
                      defaultValue={OWNER_ORG}
                      {...register("ownerAdmin", { required: true })}
                      onValueChange={(value) =>
                        handleFormChange({
                          target: { name: "ownerAdmin", value },
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
                    {errors.ownerAdmin && (
                      <p>{errors.ownerAdmin.message as string}</p>
                    )}
                  </div>
                </div>
                <Button
                  className="border-blue-500 bg-blue-500 hover:bg-blue-600 text-white"
                  type="submit"
                >
                  Save Task
                </Button>
              </>
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
