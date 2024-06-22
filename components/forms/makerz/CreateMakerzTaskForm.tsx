"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchemaMakerzForm } from "./schemaForms";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { labels, statuses } from "../../Tables/data/data";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import PreviewMakerzTaskForm from "./PreviewMakerzTaskForm";
import { generateShortDateTime } from "@/utils/dates";

const OWNER_USER = "csjcodetest";
const OWNER_ORG = "doerzalpha";

const CreateMakerzTaskForm = () => {


  const [taskIdNameShort, setTaskIdNameShort] = useState(
    generateShortDateTime(),
  );
  const [draft, setDraft] = useState(true);
  const [taskType, setTaskType] = useState("ownership");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ownerGroup, setOwnerGroup] = useState(OWNER_USER);
  const [ownerAdmin, setOwnerAdmin] = useState(OWNER_USER);
  const [rewardInDOERZ, setRewardInDOERZ] = useState("");
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchemaMakerzForm(taskType)),
  });

  useEffect(() => {
    setValue("draft", "true");
    setValue("taskType", "ownership");
    setValue("taskIdNameShort", taskIdNameShort);
    setValue("ownerGroup", ownerGroup);
    setValue("ownerAdmin", ownerAdmin);
  }, []);

  const handleFormChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setValue(name, value);
    switch (name) {
      case "taskIdNameShort":
        setTaskIdNameShort(`${value !== "" ? value : generateShortDateTime()}`);
        break;
      case "taskType":
        setTaskType(value);
        break;
      case "draft":
        setDraft(!draft);
        break;
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "ownerGroup":
        setOwnerGroup(value);
        break;
      case "ownerAdmin":
        setOwnerAdmin(value);
        break;
      case "rewardInDOERZ":
        setRewardInDOERZ(value);
        break;
      case "image":
        setImage(value);
        break;
      default:
        break;
    }
  };

  const getRewardSize = (rewardInDOERZ: number) => {
    if (rewardInDOERZ < 500) return "small";
    if (rewardInDOERZ >= 501 && rewardInDOERZ <= 2000) return "medium";
    if (rewardInDOERZ >= 2001 && rewardInDOERZ <= 5001) return "large";
    return "very high";
  };

  const onSubmit = async (data: any) => {
    const rewardSize = getRewardSize(data.rewardInDOERZ);

    console.log(`Submitted`);

    const taskIdName = `${OWNER_ORG}-TASK-${taskIdNameShort}`;

    const newTask = {
      ...data,
      taskId: uuidv4(),
      dateCreated: Date.now(),
      dateStarted: Date.now(),
      dateModified: Date.now(),
      dateExpired: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
      rewardId: uuidv4(),
      rewardSize,
      ownerUser: OWNER_USER,
      taskIdName,
      draft,
      taskType,
      title,
      description,
      ownerGroup,
      ownerAdmin,
      ownerOrg: OWNER_USER,
      rewardInDOERZ,
      image,
    };

    console.log(newTask);

    alert(JSON.stringify(newTask));
    console.log("Task created successfully!");

    // Mock API call to JSON server
    // const response = await fetch("http://localhost:3000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // });

    // if (response.ok) {
    //   console.log("Task created successfully!");
    // } else {
    //   console.error("Failed to create task.");
    // }
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
      <div className="flex min-w-[300px] mr-4 flex-col items-center border-r border-r-zinc-200">
        <div className="visible w-full text-center sm:hidden">
          View Task Preview
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-start">
            <div className="flex flex-row items-center justify-start">
              {/* <div className="mr-2 rounded border border-blue-500 bg-blue-500 px-2 py-1 text-xs text-white">
                SAVE
              </div> */}
              <MdFormatListBulletedAdd className="text-zinc-500" />
              <div className="ml-2 font-medium">Create Task</div>
              {/* <div className="ml-6 text-xs text-red-500">not saved</div> */}
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-2">
                <label className="text-sm text-zinc-600 dark:text-zinc-400">
                  Task ID
                </label>
                <Input
                  defaultValue={taskIdNameShort}
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
              {/* <div className="my-4">
                <label className="text-sm text-zinc-600 dark:text-zinc-400">
                  Draft
                </label>
                <Select
                  defaultValue="true"
                  {...register("draft", {})}
                  onValueChange={(value) =>
                    handleFormChange({
                      target: { name: "draft", value },
                    } as any)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select draft status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div> */}
            </div>

            <div className="flex flex-col items-center">
              {getErrorMessage(errors, "taskIdNameShort")}
              {/* {getErrorMessage(errors, "label")} */}
              {getErrorMessage(errors, "draft")}
              {getErrorMessage(errors, "taskType")}
            </div>

            {taskType === "ownership" && (
              <div className="">
                <div className="flex flex-row">
                  <div className="mt-2 ">
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
                  <div className="ml-4 mt-2">
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
            <div className="my-4">
              <label className="text-sm text-zinc-600 dark:text-zinc-400">
                DOERZ Reward
              </label>
              <Input
                className="w-28"
                type="number"
                {...register("rewardInDOERZ", {
                  valueAsNumber: true,
                  onChange: (e) => setRewardInDOERZ(e.target.valueAsNumber),
                })}
              />
              {errors.rewardInDOERZ && (
                <p>{errors.rewardInDOERZ.message as string}</p>
              )}
            </div>
            {/* <div className="my-4">
              <label className="text-sm text-zinc-600 dark:text-zinc-400">
                Image URL
              </label>
              <Input
                {...register("image", {
                  onChange: (e) => handleFormChange(e),
                })}
              />
              {errors.image && <p>{errors.image.message as string}</p>}
            </div> */}
            <Button
              className="border-blue-500 bg-blue-500 text-white"
              type="submit"
            >
              Save Task
            </Button>
          </div>
        </form>
      </div>
      <PreviewMakerzTaskForm
        data={{
          taskIdNameShort,
          taskType,
          draft,
          title,
          description,
          rewardInDOERZ,
          ownerGroup,
          ownerAdmin,
          image,
        }}
      />
    </div>
  );
};

export default CreateMakerzTaskForm;
