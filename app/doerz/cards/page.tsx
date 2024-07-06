// import TaskCard from "@/components/Tasks/cards/TaskCard";
import TaskCardList from "@/components/Tasks/cards/TaskCardList";
import FetchTasksCardsClient from "@/components/Tasks/fetch/FetchTasksCardsClient";
import { Metadata } from "next";
import React, { useEffect } from "react";
// import FetchTasksInboxClient from "@/components/Tasks/fetch/FetchTasksInboxClient";

type DoerzCardsPageProps = {};

export const metadata: Metadata = {
  title: "DoerzCards - Solana app",
  description: "DoerzCards Demo for my Solana app",
};
export default async function DoerzCardsxPage(props: DoerzCardsPageProps) {

  return (
    <div className="flex flex-col">
      <div className=""><FetchTasksCardsClient /></div>
    </div>
  );
}
