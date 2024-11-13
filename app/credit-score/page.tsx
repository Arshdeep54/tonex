"use client";
import { useState } from "react";
import Link from "next/link";

const CreditScorePage = () => {
  const [creditScore, setCreditScore] = useState<number | null>(null);

  // Max credit score is usually 850 for most scoring systems.
  const maxScore = 850;

  const fetchCreditScore = async () => {
    const score = 720; // Example score
    setCreditScore(score);
  };

  const percentage = creditScore ? (creditScore / maxScore) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Your Credit Score</h1>

            {/* Half-circle progress */}
            <div className="relative w-32 h-16 mx-auto">
              <svg
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                viewBox="0 0 120 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6347" />
                    <stop offset="100%" stopColor="#32cd32" />
                  </linearGradient>
                </defs>
                {/* Background arc */}
                <path
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="10"
                  d="M 10 50 A 50 50 0 0 1 110 50"
                />
                {/* Foreground progress arc */}
                <path
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="10"
                  strokeDasharray="314"
                  strokeDashoffset={314 - (percentage / 100) * 314}
                  style={{ transition: "stroke-dashoffset 0.3s ease" }}
                  d="M 10 50 A 50 50 0 0 1 110 50"
                />
              </svg>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                <p className="text-lg font-bold text-blue-600">
                  {creditScore ? creditScore : "N/A"}
                </p>
              </div>
            </div>

            {creditScore === null ? (
              <p className="text-gray-600 mt-4">Click below to fetch your credit score.</p>
            ) : (
              <p className="text-xl font-bold text-blue-600 mt-4">Credit Score: {creditScore}</p>
            )}

            <button
              onClick={fetchCreditScore}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Fetch Credit Score
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/swapex" className="text-blue-500 hover:underline">
          Go to another tab
        </Link>
      </div>
    </div>
  );
};

export default CreditScorePage;
