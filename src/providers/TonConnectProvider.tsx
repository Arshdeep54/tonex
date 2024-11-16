'use client';

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { PropsWithChildren } from "react";

export default function TonConnectProvider({ children }: PropsWithChildren) {
  return (
    <TonConnectUIProvider manifestUrl="https://blush-major-turkey-395.mypinata.cloud/ipfs/QmetdVVHN5ttyi4tv4yGb3u6ugAihfu6ZjHUUfHhJz1ko7">
      {children}
    </TonConnectUIProvider>
  );
}
