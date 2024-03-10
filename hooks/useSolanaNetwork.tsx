import { useState, useEffect } from 'react';
import { Connection } from '@solana/web3.js';

// Define a custom hook
const useSolanaNetwork = (initialNetwork: string) => {
  const [network, setNetwork] = useState(initialNetwork);
  const [connection, setConnection] = useState<Connection | null>(null);

  useEffect(() => {
    const handleNetworkChange = (network: string) => {
      let rpcUrl;
      switch (network) {
        case 'mainnet-beta':
          rpcUrl = 'https://api.mainnet-beta.solana.com';
          break;
        case 'testnet':
          rpcUrl = 'https://api.testnet.solana.com';
          break;
        case 'devnet':
        default:
          rpcUrl = 'https://api.devnet.solana.com';
      }
      const newConnection = new Connection(rpcUrl);
      setConnection(newConnection);
      console.log(newConnection);
    };

    handleNetworkChange(network);
  }, [network]);

  return { connection, setNetwork };
};

export default useSolanaNetwork;
