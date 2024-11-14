// components/CCIPUI.tsx
import React, { useState } from "react";

const Bridge: React.FC = () => {
  const [chain1, setChain1] = useState("");
  const [token1, setToken1] = useState("");
  const [chain2, setChain2] = useState("");
  const [token2, setToken2] = useState("");
  const [amount, setAmount] = useState("");
  const [amountInDollars, setAmountInDollars] = useState("");
  const maxAmount = 1000; // Set the max amount you have

  const handleExchange = () => {
    console.log(`Exchanging ${amount} of ${token1} on ${chain1} to ${token2} on ${chain2}`);
  };

  const handleSwap = () => {
    setChain1(chain2);
    setToken1(token2);
    setChain2(chain1);
    setToken2(token1);
  };

  const handleMaxClick = () => {
    setAmount(maxAmount.toString());
    // Update conversion value if necessary
    setAmountInDollars((maxAmount * 1.5).toString()); // Example conversion rate of 1.5
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    const convertedAmount = parseFloat(value) * 1.5; // Example conversion rate of 1.5 to USD
    setAmountInDollars(convertedAmount ? convertedAmount.toFixed(2) : "");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Cross Chain Interoperability</h2>

      {/* Chain 1, Swap Button, and Chain 2 in a Horizontal Layout */}
      <div className="flex items-center space-x-4 mb-4">
        {/* Chain 1 and Token 1 Selection */}
        <div className="flex-1">
          <label className="block text-gray-600 text-sm font-medium mb-1">Select Chain</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            value={chain1}
            onChange={(e) => setChain1(e.target.value)}
          >
            <option value="" disabled>Select Chain</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Polygon">Polygon</option>
            <option value="Binance Smart Chain">Binance Smart Chain</option>
          </select>

          <label className="block text-gray-600 text-sm font-medium mb-1">Select Token</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={token1}
            onChange={(e) => setToken1(e.target.value)}
          >
            <option value="" disabled>Select Token</option>
            <option value="ETH">ETH</option>
            <option value="USDT">USDT</option>
            <option value="DAI">DAI</option>
          </select>
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          className="py-2 px-4 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
        >
          ⇅
        </button>

        {/* Chain 2 and Token 2 Selection */}
        <div className="flex-1">
          <label className="block text-gray-600 text-sm font-medium mb-1">Select Chain</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            value={chain2}
            onChange={(e) => setChain2(e.target.value)}
          >
            <option value="" disabled>Select Chain</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Polygon">Polygon</option>
            <option value="Binance Smart Chain">Binance Smart Chain</option>
          </select>

          <label className="block text-gray-600 text-sm font-medium mb-1">Select Token</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={token2}
            onChange={(e) => setToken2(e.target.value)}
          >
            <option value="" disabled>Select Token</option>
            <option value="ETH">ETH</option>
            <option value="USDT">USDT</option>
            <option value="DAI">DAI</option>
          </select>
        </div>
      </div>

      {/* Amount Input and Conversion to USD */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <label className="block text-gray-600 text-sm font-medium">Amount</label>
          <button onClick={handleMaxClick} className="text-blue-600 text-sm focus:outline-none">
            Max
          </button>
        </div>
        <input
          type="number"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => handleAmountChange(e.target.value)}
        />
        
        <label className="block text-gray-600 text-sm font-medium">Amount in USD</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0.00"
          value={amountInDollars}
          readOnly
        />
      </div>

      {/* Exchange Button */}
      <button
        onClick={handleExchange}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Exchange
      </button>
    </div>
  );
};

export default Bridge;
