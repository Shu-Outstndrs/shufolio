"use client";

import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MotionWrapper from "@/components/MotionWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${inter.className} min-h-screen text-lg font-light text-zinc-700`}
      >
        <Header />
        <div className="max-w-screen-lg mx-auto lg:px-8 md:px-6 px-4">
          <MotionWrapper>{props.children}</MotionWrapper>
        </div>
      </body>
    </html>
  );
}
