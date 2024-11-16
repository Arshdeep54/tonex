'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { MetaMaskSDK } from "@metamask/sdk";

type EthereumContextType = {
  accounts: string[] | null;
  address: string | null;
  ethereum: any;
  web3: Web3 | null;
  connectWallet: () => Promise<void>;
};

const EthereumContext = createContext<EthereumContextType | undefined>(
  undefined
);

export const EthereumProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accounts, setAccounts] = useState<string[] | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [ethereum, setEthereum] = useState<any>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  useEffect(() => {
    const initEthereum = async () => {
      const sdk = new MetaMaskSDK({
        shouldShimWeb3: true,
        dappMetadata: {
          name: "Telegram Bot WebApp",
          url: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032",
        },
      });
    
      const ethProvider = sdk.getProvider();
      setEthereum(ethProvider);
    
      if (ethProvider) {
        const web3Instance = new Web3(ethProvider);
        setWeb3(web3Instance);
    
        try {
          const userAccounts = (await ethProvider.request({
            method: "eth_accounts",
          })) as string[]; // Explicitly assert type
    
          if (userAccounts && userAccounts.length > 0) {
            setAccounts(userAccounts);
            setAddress(userAccounts[0]);
          }
        } catch (error) {
          console.error("Error fetching accounts", error);
        }
      }
    };
    

    initEthereum();
  }, []);

  const connectWallet = async () => {
    if (!ethereum) {
      console.error("MetaMask not available");
      return;
    }

    try {
      const userAccounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(userAccounts);
      setAddress(userAccounts[0]);
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  return (
    <EthereumContext.Provider
      value={{ accounts, address, ethereum, web3, connectWallet }}
    >
      {children}
    </EthereumContext.Provider>
  );
};

export const useEthereum = (): EthereumContextType => {
  const context = useContext(EthereumContext);
  if (!context) {
    throw new Error("useEthereum must be used within an EthereumProvider");
  }
  return context;
};
