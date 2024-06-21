import React, { useEffect } from "react";
import { Task } from "@/types";
import Countdown from "../../Dates/Countdown";
import { Button } from "@/components/ui/button";
import { formatDateTaskDetail } from "@/utils/dates";
import TaskReward from "./TaskReward";
import TaskImages from "./TaskImages";
import TaskDetailActionBar from "./TaskDetailActionBar";
import TestingReminder from "@/components/messages/TestingReminder";
import { useGetFavorites } from "@/hooks/useGetFavorites";

const username = "csjcodetest";

type DisplayTaskDetailProps = {
  data: Task | null;
};

const DisplayTaskDetail = ({ data }: DisplayTaskDetailProps) => {
  const [toggleDateFormat, setToggleDateFormat] = React.useState(false);
  const { favorites, error, getFavorites } = useGetFavorites("csjcodetest");

  useEffect(() => {
    getFavorites(username);
  }, []);

  const dataFavorites = favorites || null;
  console.log(`checking dataFavorites`);
  dataFavorites && console.log(dataFavorites);

  const isFavorite = Boolean(data?.taskIdName && dataFavorites?.favoritesTaskIdName?.includes(data?.taskIdName));
  console.log(`isFavorite: ${isFavorite}`);




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
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">{data?.title ?? "n/a"}</h1>{" "}
        <span className="border-0 border-zinc-100 py-1 text-xs text-zinc-500 dark:border-zinc-800">
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
        </div>
        <div className="mt-4 text-lg font-bold">Description</div>
        <p className="text-lg font-light">{data?.description}</p>
      </div>

      <div className="mt-4">
        {data?.rewardSize && <TaskReward rewardSize={data?.rewardSize} />}
      </div>
      {data?.taskIdName && (
        <div>
          <TaskDetailActionBar data={data} favorite={isFavorite} />
        </div>
      )}
      <div className="mt-4">
        <TaskImages images={["", "", "", "", ""]} />
      </div>

      <div className="mt-4 flex flex-col">
        <div className="text-lg font-bold">Reward Instructions</div>
        <ol className="mt-1 flex ml-4 list-outside flex-col">
          {data?.userInstructions &&
            data?.userInstructions.map((instruction: string) => (
              <li
                className={`mr-2  list-decimal rounded-xl px-2 py-1`}
                key={instruction}
              >
                {instruction}
              </li>
            ))}
        </ol>
      </div>

      <hr className="my-4 h-[2px] border-t-0 bg-neutral-200 dark:bg-white/10" />
      <TestingReminder />
      <hr className="my-4 h-[2px] border-t-0 bg-neutral-200 dark:bg-white/10" />

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
