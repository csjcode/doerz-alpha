import { Metadata } from "next";
import React from "react";

type WalletsPageProps = {};
export const metadata: Metadata = {
  title: "Wallets - Solana app",
  description: "Wallets Demo for my Solana app",
};
const WalletsPage = (props: WalletsPageProps) => {
  return (
    <div>
      Wallets
    </div>
  );
};

export default WalletsPage;
