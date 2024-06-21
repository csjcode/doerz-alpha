import CreateMakerzTaskForm from "@/components/forms/CreateMakerzTaskForm";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";

type MakerzCreatePageProps = {};
export const metadata: Metadata = {
  title: "MakerzCreate - Doerz.fun",
  description: "MakerzCreate for Doerz.fun",
};
const MakerzCreatePage = (props: MakerzCreatePageProps) => {
  return (
    <div className="w-full justify-center">
      <CreateMakerzTaskForm />
    </div>
  );
};

export default MakerzCreatePage;
