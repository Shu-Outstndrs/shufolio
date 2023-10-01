import { Header } from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MotionWrapper from "@/components/MotionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shu / Outstndrs",
  description: "しゅーう / チーム逸般人",
  openGraph: {
    title: "Shu / Outstndrs",
    description: "しゅーう / チーム逸般人",
    images: ["/Shu-maru.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ShuShirokuro.webp" sizes="any" />
        <link rel="apple-touch-icon" href="/ShuShirokuro.webp" sizes="any" />
        <meta property="og:image" content="/ShuShirokuro.webp" />
        <meta property="og:image:type" content="/ShuShirokuro.webp" />
        <meta property="og:image:width" content="/ShuShirokuro.webp" />
        <meta property="og:image:height" content="/ShuShirokuro.webp" />
        <meta name="twitter:image" content="/ShuShirokuro.webp" />
        <meta name="twitter:image:type" content="/ShuShirokuro.webp" />
        <meta name="twitter:image:width" content="/ShuShirokuro.webp" />
        <meta name="twitter:image:height" content="/ShuShirokuro.webp" />
      </head>
      <body className={`${inter.className} min-h-screen text-lg font-light`}>
        <div className="flex justify-center">
          <Header />
        </div>
        <div className={`max-w-screen-lg mx-auto lg:px-8 px-6 text-zinc-700`}>
          <MotionWrapper>{children}</MotionWrapper>
        </div>
      </body>
    </html>
  );
}
