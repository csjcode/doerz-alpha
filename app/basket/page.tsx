import TokensInfo from "@/components/TokensInfo/TokensInfo";
import { Metadata } from "next";
import React from "react";

type BasketPageProps = {};

export const metadata: Metadata = {
  title: "Basket - Solana app",
  description: "Basket Demo for my Solana app",
};
const BasketPage = (props: BasketPageProps) => {
  return (
    <div className={`mt-4 w-full px-8 font-outfit`}>

      <TokensInfo  displayAllocation={false} />
    </div>
  );
};

export default BasketPage;
