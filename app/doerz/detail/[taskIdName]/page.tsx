import { Metadata } from "next";
import React from "react";
import data from "@/components/Tables/data/tasks.json";
import FetchTaskDetailClient from "@/components/Tasks/FetchTaskDetailClient";
import Link from "next/link";
import { AiFillCaretLeft } from "react-icons/ai";

type DoerzDetailIdPageProps = {
  params: {
    taskIdName: string;
  };
};

export const metadata: Metadata = {
  title: "DoerzDetailId - Doerz.fun",
  description: "DoerzDetailId for Doerz.fun",
};
const DoerzDetailIdPage = ({ params }: DoerzDetailIdPageProps) => {
  //   const pickEntry = data.find((entry) => entry.taskIdName === params.taskIdName);

  // console.log(pickEntry);

  return (
    <>
      <div className="flex flex-row items-center">
        <AiFillCaretLeft className="text-zinc-500"/>
        <Link className="" href="/doerz/inbox/">
          Return to Inbox
        </Link>
      </div>

      {/* <div>DoerzDetailId {params.taskIdName}</div> */}
      <FetchTaskDetailClient taskIdName={params.taskIdName} />
    </>
  );
};

export default DoerzDetailIdPage;
