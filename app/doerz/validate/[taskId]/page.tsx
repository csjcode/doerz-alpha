import { Metadata } from "next";
import React from "react";

type DoerzValidatePageProps = {
  params: {
    taskId: string;
  };
};
export const metadata: Metadata = {
  title: "DoerzValidate - Doerz.fun",
  description: "DoerzValidate for Doerz.fun",
};
const DoerzValidatePage = ({params}: DoerzValidatePageProps) => {

  return <div>DoerzValidate {params.taskId}</div>;
};

export default DoerzValidatePage;
