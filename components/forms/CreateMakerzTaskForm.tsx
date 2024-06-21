"use client";

import React from "react";
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
import { labels, statuses } from "../Tables/data/data";

const OWNER_USER = "csjcodetest";

const CreateMakerzTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchemaMakerzForm),
  });

  const getRewardSize = (rewardInDOERZ: number) => {
    if (rewardInDOERZ < 500) return "small";
    if (rewardInDOERZ >= 501 && rewardInDOERZ <= 2000) return "medium";
    if (rewardInDOERZ >= 2001 && rewardInDOERZ <= 5001) return "large";
    return "very high";
  };

  const onSubmit = async (data: any) => {
    const rewardSize = getRewardSize(data.rewardInDOERZ);

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
    };

    // Mock API call to JSON server
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    if (response.ok) {
      console.log("Task created successfully!");
    } else {
      console.error("Failed to create task.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row items-center">
        <div className="mr-2">
          <label className="text-sm text-zinc-600 dark:text-zinc-400">
            Task ID
          </label>
          <Input className="w-24" {...register("taskIdName")} />
          {errors.taskIdName && <p>{errors.taskIdName.message as string}</p>}
        </div>
        <div className="my-4 mr-2">
          <label className="text-sm text-zinc-600 dark:text-zinc-400">
            Task type
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
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
          {errors.label && <p>{errors.label.message as string}</p>}
        </div>
        <div className="my-4">
          <label className="text-sm text-zinc-600 dark:text-zinc-400">
            Draft
          </label>
          <Select defaultValue="true">
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
          {errors.draft && <p>{errors.draft.message as string}</p>}
        </div>
      </div>

      <div className="mt-2">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          Title
        </label>
        <Input {...register("title")} />
        {errors.title && <p>{errors.title.message as string}</p>}
      </div>
      <div className="mt-2">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          Description
        </label>
        <Textarea {...register("description")} />
        {errors.description && <p>{errors.description.message as string}</p>}
      </div>
      {/* <div className="my-4">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          Status
        </label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {statuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.status && <p>{errors.status.message as string}</p>}
      </div> */}
      <div className="flex flex-row w-56">
        <div className="my-4 mr-2">
          <label className="text-sm text-zinc-600 dark:text-zinc-400">
            Group Owner
          </label>
          <Select defaultValue="csjcodetest">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select group owner" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectItem value="doerzsitepromos">
                  Doerz.fun Site Rewards
                </SelectItem>
                <SelectItem value="csjcodetest">csjcodetest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.brand && <p>{errors.brand.message as string}</p>}
        </div>

        <div className="my-4 ">
          <label className="text-sm text-zinc-600 dark:text-zinc-400">
            Group Admin
          </label>
          <Select defaultValue="csjcodetest">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select group owner" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectItem value="doerzsitepromos">
                  Doerz.fun Site Rewards
                </SelectItem>
                <SelectItem value="csjcodetest">csjcodetest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.brand && <p>{errors.brand.message as string}</p>}
        </div>

      </div>

      <div className="my-4">
          <label className="text-sm text-zinc-600 dark:text-zinc-400">
            DOERZ Reward
          </label>
          <Input
            className="w-28"
            type="number"
            {...register("rewardInDOERZ", { valueAsNumber: true })}
          />
          {errors.rewardInDOERZ && (
            <p>{errors.rewardInDOERZ.message as string}</p>
          )}
        </div>

      <div className="my-4">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          Image URL
        </label>
        <Input {...register("image")} />
        {errors.image && <p>{errors.image.message as string}</p>}
      </div>

      <Button type="submit">Create Task</Button>
    </form>
  );
};

export default CreateMakerzTaskForm;
