import FetchTaskDetailClient from "@/components/Tasks/fetch/FetchTaskDetailClient";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineInbox } from "react-icons/ai";
import FetchTaskValidateClient from "@/components/Tasks/fetch/FetchTaskValidateClient";
import { FaRegImage } from "react-icons/fa6";

type DoerzValidatePageProps = {
  params: {
    taskIdName: string;
  };
};
export const metadata: Metadata = {
  title: "DoerzValidate - Doerz.fun",
  description: "DoerzValidate for Doerz.fun",
};
const DoerzValidatePage = ({ params }: DoerzValidatePageProps) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          {" "}
          <IoDocumentTextOutline className="text-zinc-500" />
          <Link className="ml-1" href={`/doerz/detail/${params.taskIdName}`}>
            Detail page
          </Link>
        </div>

        <div className="ml-2 flex flex-row items-center">
          <div className="flex flex-row">
            <div className="mr-2 flex flex-row items-center">
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
        </div>
      </div>
      <FetchTaskValidateClient taskIdName={params.taskIdName} />
    </>
  );
};

export default DoerzValidatePage;
