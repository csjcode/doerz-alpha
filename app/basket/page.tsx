import TokensInfo from "@/components/TokensInfo";
import { Metadata } from "next";
import React from "react";

type BasketPageProps = {};

export const metadata: Metadata = {
  title: "Basket - Solana app",
  description: "Basket Demo for my Solana app",
};
const BasketPage = (props: BasketPageProps) => {
  return (
    <div className={`mt-4 font-outfit`}>
      Basket
      <TokensInfo />
    </div>
  );
};

export default BasketPage;
