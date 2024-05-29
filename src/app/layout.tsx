import TanstackProvider from "@/contexts/TanstackProvider";

import Header from "@/ui/layouts/header";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A-Team Anime",
  description: "Showing you the most recommended Anime",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={clsx(font.className, "min-h-screen pt-16 lg:px-4 bg-[#f8f8f8] dark:bg-[#212529] antialiased")}>
        <NextUIProvider>
          <Header />
          <TanstackProvider>{children}</TanstackProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
