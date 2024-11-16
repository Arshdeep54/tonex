"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

interface EthereumContextProps {
  connectWallet: () => Promise<void>;
  accounts: string[] | null;
  isMetaMaskAvailable: boolean;
}

const EthereumContext = createContext<EthereumContextProps | undefined>(undefined);

export const EthereumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accounts, setAccounts] = useState<string[] | null>(null);
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);

  useEffect(() => {
    const checkProvider = async () => {
      const provider: any = await detectEthereumProvider();

      if (provider) {
        setIsMetaMaskAvailable(true);

        // Listen for accounts changes
        provider.on("accountsChanged", (newAccounts: string[]) => {
          setAccounts(newAccounts);
        });

        // Optionally handle chain changes
        provider.on("chainChanged", () => {
          window.location.reload();
        });

        // Fetch initial accounts
        const currentAccounts = await provider.request({ method: "eth_accounts" });
        setAccounts(currentAccounts);
      } else {
        setIsMetaMaskAvailable(false);
        console.error("MetaMask not available");
      }
    };

    if (typeof window !== "undefined") {
      checkProvider();
    }
  }, []);

  const connectWallet = async () => {
    try {
      const provider: any = await detectEthereumProvider();

      if (!provider) {
        throw new Error("MetaMask not found. Please install MetaMask.");
      }

      const newAccounts = await provider.request({ method: "eth_requestAccounts" });
      setAccounts(newAccounts);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <EthereumContext.Provider value={{ connectWallet, accounts, isMetaMaskAvailable }}>
      {children}
    </EthereumContext.Provider>
  );
};

export const useEthereum = (): EthereumContextProps => {
  const context = useContext(EthereumContext);
  if (!context) {
    throw new Error("useEthereum must be used within an EthereumProvider");
  }
  return context;
};
