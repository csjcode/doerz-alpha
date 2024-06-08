import { Metadata } from "next";
import React from "react";

type DoerzInboxPageProps = {};
export const metadata: Metadata = {
  title: "Inbox - Solana app",
  description: "Inbox Demo for my Solana app",
};
const DoerzInboxPage = (props: DoerzInboxPageProps) => {
  return <div>Doerz Inbox</div>;
};

export default DoerzInboxPage;
