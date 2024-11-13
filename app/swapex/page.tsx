// swap-tab/page.tsx
'use client'
import { useState } from "react";
import Link from "next/link";

const SwapTabPage = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Currency Swap
          </h1>

          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-gray-700">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="px-6 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 text-center text-gray-800"
                placeholder="Enter amount"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-gray-700">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="px-6 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 text-gray-800"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-gray-700">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="px-6 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 text-gray-800"
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <div className="flex justify-center items-center mt-8">
              <button
                onClick={handleSwap}
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-8 rounded-xl shadow-xl hover:from-blue-600 hover:to-teal-500 transition-all"
              >
                Swap
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/credit-score" className="text-white text-lg font-medium hover:underline">
          Go to another tab
        </Link>
      </div>
    </div>
  );
};

export default SwapTabPage;
