// import TaskCard from "@/components/Tasks/cards/TaskCard";
import TaskCardList from "@/components/Tasks/cards/TaskCardList";
import FetchTasksCardsClient from "@/components/Tasks/fetch/FetchTasksCardsClient";
import { Metadata } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
// import FetchTasksInboxClient from "@/components/Tasks/fetch/FetchTasksInboxClient";

type DoerzCardsPageProps = {};

export const metadata: Metadata = {
  title: "DoerzCards - Solana app",
  description: "DoerzCards Demo for my Solana app",
};
export default async function DoerzCardsPage(props: DoerzCardsPageProps) {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row items-end justify-end pr-12">
        <div className="mr-1 flex flex-row">
          <Link href="/doerz/inbox">
            <div className="mr-1 mr-2 cursor-pointer rounded-md border border-zinc-300 px-2 py-1 text-sm text-zinc-600 hover:text-zinc-800 dark:border-zinc-800 dark:hover:text-zinc-300">
              Inbox
            </div>
          </Link>
          <Link href="/doerz/cards">
            <div className="mr-1 cursor-pointer rounded-md border border-zinc-300 px-2 py-1 text-sm text-emerald-300 text-emerald-700 dark:border-zinc-800 ">
              Cards
            </div>
          </Link>
        </div>
      </div>

      <div className="">
        <FetchTasksCardsClient />
      </div>
    </div>
  );
}
