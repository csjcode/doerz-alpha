import { Metadata } from "next";
import React from "react";
import data from "@/components/Tables/data/tasks.json";
import FetchTaskDetailClient from "@/components/Tasks/fetch/FetchTaskDetailClient";
import Link from "next/link";
import { AiFillCaretLeft, AiOutlineInbox } from "react-icons/ai";
import { FaRegImage, FaRegFileImage } from "react-icons/fa6";

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
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row items-center mr-2">
          <AiOutlineInbox size={20} className="text-zinc-500" />
          <Link className="ml-1" href="/doerz/inbox/">
            Inbox
          </Link>
        </div>
        <div className="ml-1 flex flex-row items-center">
          <FaRegImage className="text-zinc-500" />
          <Link className="ml-1" href="/doerz/cards/">
            Cards
          </Link>
        </div>
      </div>

      <FetchTaskDetailClient taskIdName={params.taskIdName} />
    </>
  );
};

export default DoerzDetailIdPage;
