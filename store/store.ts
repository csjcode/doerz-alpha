import { create } from "zustand";

type StateNetworkStore = {
  currentNetwork: string;
  externalRpcUrl: string;
};

type ActionNetworkStore = {
  updateNetwork: (network: StateNetworkStore["currentNetwork"]) => void;
  updateExternalRpcUrl: (url: StateNetworkStore["externalRpcUrl"]) => void;
};

type StateWalletStore = {
  publicWalletCurrent: string;
};

type ActionWalletStore = {
  updatePublicWalletCurrent: (
    network: StateWalletStore["publicWalletCurrent"],
  ) => void;
};

const useNetworkStore = create<StateNetworkStore & ActionNetworkStore>(
  (set) => ({
    currentNetwork: "devnet",
    externalRpcUrl: process.env.NEXT_PUBLIC_DEV_RPC_URL || "",
    updateNetwork: (newNetwork: string) => set({ currentNetwork: newNetwork }),
    updateExternalRpcUrl: (newUrl: string) => set({ externalRpcUrl: newUrl }),
  }),
);

const useWalletStore = create<StateWalletStore & ActionWalletStore>((set) => ({
  publicWalletCurrent: "",
  updatePublicWalletCurrent: (newPublicWalletCurrent: string) =>
    set({ publicWalletCurrent: newPublicWalletCurrent }),
}));

export default useNetworkStore;
