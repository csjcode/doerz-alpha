import CreateMakerzTaskForm from "@/components/forms/CreateMakerzTaskForm";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

type MakerzCreatePageProps = {};
export const metadata: Metadata = {
  title: "MakerzCreate - Doerz.fun",
  description: "MakerzCreate for Doerz.fun",
};
const MakerzCreatePage = (props: MakerzCreatePageProps) => {
  return (
    <div>
      {" "}
      <div className="mb-4 flex flex-row ">
        {/* <div>Makerz List</div> */}
        <div className="ml-4 flex flex-row items-center">
          <MdFormatListBulletedAdd className="text-zinc-500" />
          <div className="ml-2">Create a Task</div>
        </div>
      </div>
      <CreateMakerzTaskForm />
    </div>
  );
};

export default MakerzCreatePage;
