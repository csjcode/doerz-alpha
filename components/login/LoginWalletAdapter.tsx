import dynamic from "next/dynamic";
import React, { useState } from "react";
// import { useAutoConnect } from '../contexts/AutoConnectProvider';
// import NetworkSwitcher from './NetworkSwitcher';
// require("./styles-loginWallet.css");
// import styles from "./styles-loginWallet.module.css";
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false },
);

const LoginWalletAdapter = () => {
  // const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-36 text-2xl border-2 rounded bg-blue-500 hover:bg-blue-600 text-white">
      <WalletMultiButtonDynamic />

      {/* <WalletMultiButtonDynamic /> */}
    </div>
  );
};

export default LoginWalletAdapter;
