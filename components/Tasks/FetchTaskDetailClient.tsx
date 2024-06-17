"use client";
// import { useFetchTasks } from '@/hooks/useFetchTasks';
import { useFetchTaskDetail } from "@/hooks/useFetchTaskDetail";
import React, { useEffect } from "react";
import { DateTime } from "luxon";


import { DataTable } from "../Tables/data-table";
import { columns } from "../Tables/columns";

type FetchTaskDetailClientProps = {
  taskIdName: string;
};

const FetchTaskDetailClient = ({ taskIdName }: FetchTaskDetailClientProps) => {
  const { task, error, fetchTaskDetail } = useFetchTaskDetail(taskIdName);

  useEffect(() => {
    fetchTaskDetail(taskIdName);
  }, []);

  const data = task || null;
  const formatDate = (timestamp: number) => {
    return timestamp
      ? DateTime.fromSeconds(timestamp).toFormat("LLL. d, yyyy (h:mm a 'CST')")
      : "n/a";
  };

  const dateCreated = data?.dateCreated ? formatDate(data?.dateCreated) : "n/a";
  const dateModified = data?.dateModified
    ? formatDate(data?.dateModified)
    : "n/a";
    const dateStarted = data?.dateExpired ? formatDate(data?.dateExpired) : "n/a";
  const dateExpired = data?.dateExpired ? formatDate(data?.dateExpired) : "n/a";

  const dateNow = DateTime.now().toFormat("LLL. d, yyyy (h:mm a)");

  console.log(`dateCreated is ${dateCreated}`);

  // const dataString = JSON.stringify(data) || "";

  console.log(`detail taskIdName data is ${JSON.stringify(data)}`);

  // const displayData = Object.entries(data).map

  return (
    <div className="w- p-4 md:w-[60%]">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl font-bold">{data?.title ?? "n/a"}</h1>{" "}
        <span className="ml-1 border-0 border-zinc-100 px-2 py-1 text-xs text-zinc-500 dark:border-zinc-800">
          {data?.taskIdName ?? "n/a"}
        </span>
      </div>
      <div className="flex flex-col leading-4">
        <div className="flex flex-col">
          <div className="mr-2 mt-2 text-green-600">START: {dateCreated}</div>
          <div className="mr-2 mt-2 text-red-600">END: {dateCreated}</div>
        </div>
        <p className="mt-2 text-lg font-light">{data?.description}</p>
      </div>
      <div className="mt-4 flex flex-col text-zinc-600 dark:text-zinc-400">
        <span className="mr-2">Status: {data?.status}</span>

        <span className="mr-2">Brand: {data?.brand}</span>
        <span className="mr-2">Label: {data?.label}</span>
        <span className="mr-2">modified: {dateModified}</span>
        <span className="mr-2">rewardSize: {dateExpired}</span>
      </div>
      <div className="flex flex-row">
        <ul className="mt-4 flex flex-row">
          {data?.tags.map((tag, i) => (
            <li
              className={`mr-2 rounded-xl border border-zinc-500 px-2 py-1 text-xs`}
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
        <span className="mr-2">created: {dateCreated}</span>
        <span className="mr-2">modified: {dateModified}</span>
        <span className="mr-2">created: {dateStarted}</span>
        <span className="mr-2">expires: {dateExpired}</span>
      </div>

      <hr className="mt-4"/>

      <h3 className="my-4 text-lg">Raw Data</h3>

      <hr className="mt-4"/>


      <div className="mt-4">
        {data &&
          Object.entries(data).map(([key, value]) => (
            <div className="p-1" key={key}>
              <strong>{key}: </strong>
              {Array.isArray(value) ? value.join(", ") : value?.toString()}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FetchTaskDetailClient;
