import { Metadata } from "next";
import React from "react";
import data from "@/components/Tables/data/tasks.json"

type DoerzDetailIdPageProps = {
  params: {
    taskId: string;
  };
};

export const metadata: Metadata = {
  title: "DoerzDetailId - Doerz.fun",
  description: "DoerzDetailId for Doerz.fun",
};
const DoerzDetailIdPage = ({params}: DoerzDetailIdPageProps) => {

//   const pickEntry = data.find((entry) => entry.taskId === params.taskId);

// console.log(pickEntry);


  return <div>DoerzDetailId {params.taskId}</div>
};

export default DoerzDetailIdPage;
