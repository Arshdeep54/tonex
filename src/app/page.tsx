'use client';

import { useState } from "react";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
export default function Home() {
  const [activeView, setActiveView] = useState("creditScore");

  // Handle view change
  const handleViewChange = (view: string) => {
    setActiveView(view);
  };

  return (
    <>
      <TonConnectUIProvider manifestUrl="https://blush-major-turkey-395.mypinata.cloud/ipfs/QmetdVVHN5ttyi4tv4yGb3u6ugAihfu6ZjHUUfHhJz1ko7">
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* Top Bar Section */}
          <div className="flex justify-between items-center bg-blue-600 text-white p-4">
            <div className="text-xl font-semibold">Host Name</div>
            <TonConnectButton className="ton-connect-button" />
          </div>

          {/* Middle View Section */}
          <div className="flex-grow p-4">
            {activeView === "creditScore" && (
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold">Credit Score View</h2>
                <p>Your credit score details go here...</p>
              </div>
            )}

            {activeView === "exchange" && (
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold">Exchange View</h2>
                <p>Exchange functionality goes here...</p>
              </div>
            )}

            {activeView === "swap" && (
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold">Swap View</h2>
                <p>Swap functionality goes here...</p>
              </div>
            )}
          </div>

          {/* Bottom Navigation Section */}
          <div className="flex justify-around bg-gray-800 text-white p-4">
            <button
              className={`flex-1 text-center py-2 ${activeView === "creditScore" ? "bg-blue-500" : "bg-gray-700"} rounded-lg`}
              onClick={() => handleViewChange("creditScore")}
            >
            <SignalCellularAltIcon/> 
            </button>
            <button
              className={`flex-1 text-center py-2 ${activeView === "exchange" ? "bg-blue-500" : "bg-gray-700"} rounded-lg`}
              onClick={() => handleViewChange("exchange")}
            >
              <SwapCallsIcon/>
            </button>
            <button
              className={`flex-1 text-center py-2 ${activeView === "swap" ? "bg-blue-500" : "bg-gray-700"} rounded-lg`}
              onClick={() => handleViewChange("swap")}
            >
              <SwapHorizIcon/>
            </button>
          </div>
        </div>
      </TonConnectUIProvider>
    </>
  );
}
