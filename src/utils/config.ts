'use client'
import { getDefaultWallets, getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { arbitrum, arbitrumSepolia, localhost, mainnet } from "wagmi/chains";

const { wallets } = getDefaultWallets();

export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "";
export const NEXT_PUBLIC_ENABLE_TESTNETS = "true";
export const NODE_ENV = "development";
export const NODE_ENV_PROD = "production";
export const NODE_ENV_DEV = "devlopment";

if (!WALLETCONNECT_PROJECT_ID) {
  console.warn(
    "You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable"
  );
}
export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: WALLETCONNECT_PROJECT_ID,
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [mainnet, arbitrumSepolia, arbitrum, localhost],
  ssr: true,
});
