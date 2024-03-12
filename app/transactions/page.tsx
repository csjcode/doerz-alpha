import { Metadata } from "next";
import React from "react";

type TransactionsPageProps = {};
export const metadata: Metadata = {
  title: "Transactions - Solana app",
  description: "Transactions Demo for my Solana app",
};
const TransactionsPage = (props: TransactionsPageProps) => {
  return (
    <div>
      Transactions
    </div>
  );
};

export default TransactionsPage;
