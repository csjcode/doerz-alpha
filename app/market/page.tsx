import { Metadata } from "next";
import React from "react";

type MarketPageProps = {};
export const metadata: Metadata = {
  title: "Market - Solana app",
  description: "Market Demo for my Solana app",
};
const MarketPage = (props: MarketPageProps) => {
  return (
    <div>
      Market Dashboard
    </div>
  );
};

export default MarketPage;
