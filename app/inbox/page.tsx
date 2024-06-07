import { Metadata } from "next";
import React from "react";

type InboxPageProps = {};
export const metadata: Metadata = {
  title: "Inbox - Solana app",
  description: "Inbox Demo for my Solana app",
};
const InboxPage = (props: InboxPageProps) => {
  return <div>Inbox</div>;
};

export default InboxPage;
