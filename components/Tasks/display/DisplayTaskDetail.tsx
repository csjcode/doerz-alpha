import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiHandCoinsLight } from "react-icons/pi";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { Task } from "@/types";
import Countdown from "../../Dates/Countdown";
import { Button } from "@/components/ui/button";
import { formatDateTaskDetail } from "@/utils/dates";
import DisplayTaskReward from "./DisplayTaskReward";

type DisplayTaskDetailProps = {
  data: Task | null;
};

const DisplayTaskDetail = ({ data }: DisplayTaskDetailProps) => {
  const [toggleDateFormat, setToggleDateFormat] = React.useState(false);
  const handleToggleDateFormat = () => {
    setToggleDateFormat(!toggleDateFormat);
  };

  const dateCreated = formatDateTaskDetail(data?.dateCreated);
  const dateModified = formatDateTaskDetail(data?.dateModified);
  const dateStarted = formatDateTaskDetail(data?.dateStarted);
  const dateExpired = formatDateTaskDetail(data?.dateExpired);
  // const dateNow = DateTime.now().toFormat("LLL. d, yyyy (h:mm a)");

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
          <div
            onClick={handleToggleDateFormat}
            className="mr-2 mt-2 text-red-600"
          >
            <span className="font-bold">Expires:</span>{" "}
            {toggleDateFormat ? (
              dateExpired
            ) : (
              <Countdown expires={dateExpired} />
            )}{" "}
          </div>
          {/* {dateExpired} */}
          {/* <div className="mr-2 mt-2 text-green-600">START: {dateStarted}</div> */}
        </div>
        <div className="mt-4 text-lg font-bold">Description</div>
        <p className="text-lg font-light">{data?.description}</p>
      </div>
      <div className="flex flex-row">
        <Image alt="" className="pr-2 py-2" src="/ph/300x200.png" width="300" height="200"/>
        <Image alt="" className="pr-2 py-2" src="/ph/300x200.png" width="300" height="200"/>
        <Image alt="" className="py-2" src="/ph/300x200.png" width="300" height="200"/>
      </div>
      { data?.rewardSize && <DisplayTaskReward rewardSize={data?.rewardSize} />}
      {/* <div className="mt-4 text-lg font-bold">Reward Validation</div> */}

      {data?.taskIdName && (
        <div className="mt-4 flex flex-row">
          <Link className="" href={`/doerz/validate/${data.taskIdName}`}>
            <Button className="bg-blue-500 px-8 hover:bg-blue-600 dark:text-white">
              <PiHandCoinsLight className="mr-2" size={24} />
              Validate and Get Rewards
            </Button>
          </Link>
          <div className="ml-1">
            <Button variant={"ghost"} className="text-black dark:text-white">
              <RxHeart className="mr-1" size={24} />
              Favorite
            </Button>
          </div>
        </div>
      )}
      <div className="mt-4 flex flex-col">
        <div className="text-lg font-bold">Reward Instructions</div>
        <ul className="mt-1 flex list-inside flex-col">
          {data?.userInstructions &&
            data?.userInstructions.map((instruction: string) => (
              <li
                className={`mr-2 list-disc  rounded-xl px-2 py-1`}
                key={instruction}
              >
                {instruction}
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-col text-zinc-600 dark:text-zinc-400">
        <span className="mr-2">Status: {data?.status}</span>

        <span className="mr-2">Brand: {data?.brand}</span>
        <span className="mr-2">Label: {data?.label}</span>
        <span className="mr-2">modified: {dateModified}</span>
        <span className="mr-2">rewardSize: {data?.rewardSize}</span>
      </div>

      <div>
        <Countdown expires={dateExpired} />
      </div>

      <div className="flex flex-row">
        <ul className="mt-4 flex flex-row">
          {data?.tags.map((tag: string) => (
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
        <span className="mr-2">started: {dateStarted}</span>
        <span className="mr-2">expires: {dateExpired}</span>
      </div>

      <hr className="mt-4" />

      <h3 className="my-4 text-lg">Raw Data</h3>

      <hr className="mt-4" />

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

export default DisplayTaskDetail;
