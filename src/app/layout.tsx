import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import "normalize.css/normalize.css";
import dynamic from 'next/dynamic';
import Web3Provider from "@/providers/Web3Provider";

const TonConnectProvider = dynamic(
  () => import("@/providers/TonConnectProvider"),
  { ssr: false });

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Web3Provider>
            {children}
          </Web3Provider>
      </body>
    </html>
  );
}
