import { DataTable } from "@/components/Tables/data-table";
import { Metadata } from "next";
import React from "react";
import { promises as fs } from "fs"
import path from "path"
import { z } from "zod"
import { taskSchema } from "@/components/Tables/data/schema"
import { columns } from "@/components/Tables/columns"

type DoerzInboxPageProps = {};
export const metadata: Metadata = {
  title: "DoerzInbox - Solana app",
  description: "DoerzInbox Demo for my Solana app",
};

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "./components/Tables/data/tasks.json")
  )

  console.log(data.toString());


  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function DoerzInboxPage(props: DoerzInboxPageProps){

  console.log(`test pre`);

  const tasks = await getTasks()

  console.log(`test post`);


  return (
    <div className="flex flex-col">
      {/* <div>Inbox</div> */}
      <DataTable data={tasks} columns={columns} />

    </div>
  );
};
